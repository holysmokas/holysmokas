// backend/server.js - COMPLETE FINAL VERSION
import axios from "axios";
import xml2js from "xml2js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Stripe from 'stripe';
import { deployProject } from "./deployProject.js";
import { logDeployment } from "./utils/sheetsLogger.js";
import { db } from './firebaseAdmin.js';
import { Octokit } from "@octokit/rest";
import { generateModification } from './utils/modificationGenerator.js';

dotenv.config({ path: "backend/.env" });

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// IMPORTANT: Webhook route MUST come BEFORE express.json()
app.post('/webhook',
    express.raw({ type: 'application/json' }),
    async (req, res) => {
        const sig = req.headers['stripe-signature'];
        let event;

        try {
            event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (err) {
            console.error('⚠️ Webhook signature verification failed:', err.message);
            return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            console.log('💳 Payment successful:', session.id);
            await handleSuccessfulPayment(session);
        }

        res.json({ received: true });
    }
);

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

function cleanDomainName(domain) {
    let cleaned = domain.replace(/^https?:\/\//, '');
    cleaned = cleaned.replace(/^www\./, '');
    cleaned = cleaned.split('/')[0];
    cleaned = cleaned.trim();
    return cleaned;
}

app.post("/check-domain", async (req, res) => {
    const { domain } = req.body;
    if (!domain) {
        return res.status(400).json({ available: false, error: "No domain provided" });
    }
    try {
        const cleanedDomain = cleanDomainName(domain);
        console.log("🔍 Checking domain:", cleanedDomain);

        // Check availability
        const checkUrl = `${process.env.NAMECHEAP_API_URL}?ApiUser=${process.env.NAMECHEAP_API_USER}&ApiKey=${process.env.NAMECHEAP_API_KEY}&UserName=${process.env.NAMECHEAP_API_USER}&ClientIp=${process.env.NAMECHEAP_CLIENT_IP}&Command=namecheap.domains.check&DomainList=${cleanedDomain}`;
        const checkResponse = await axios.get(checkUrl);
        const checkParsed = await xml2js.parseStringPromise(checkResponse.data);

        if (checkParsed.ApiResponse.$.Status !== 'OK') {
            const errors = checkParsed.ApiResponse.Errors?.[0]?.Error || [];
            const errorMsg = errors.length > 0 ? errors[0]._ : 'Unknown API error';
            throw new Error(`Namecheap API error: ${errorMsg}`);
        }

        const commandResponse = checkParsed.ApiResponse.CommandResponse?.[0];
        const domainCheckResult = commandResponse?.DomainCheckResult?.[0];

        if (!domainCheckResult) {
            throw new Error("Invalid API response structure");
        }

        const available = domainCheckResult.$.Available === "true";
        const domainName = domainCheckResult.$.Domain;

        let pricing = { initialCost: 12.99, renewalCost: 14.99 }; // defaults

        if (available) {
            // Get actual pricing from Namecheap
            try {
                const tld = cleanedDomain.split('.').pop();
                const pricingUrl = `${process.env.NAMECHEAP_API_URL}?ApiUser=${process.env.NAMECHEAP_API_USER}&ApiKey=${process.env.NAMECHEAP_API_KEY}&UserName=${process.env.NAMECHEAP_API_USER}&ClientIp=${process.env.NAMECHEAP_CLIENT_IP}&Command=namecheap.users.getPricing&ProductType=DOMAIN&ProductCategory=DOMAINS&ActionName=REGISTER&ProductName=${tld}`;
                const pricingResponse = await axios.get(pricingUrl);
                const pricingParsed = await xml2js.parseStringPromise(pricingResponse.data);

                if (pricingParsed.ApiResponse.$.Status === 'OK') {
                    const productType = pricingParsed.ApiResponse.CommandResponse?.[0]?.UserGetPricingResult?.[0]?.ProductType?.[0];
                    const productCategory = productType?.ProductCategory?.[0];
                    const product = productCategory?.Product?.[0];
                    const price = product?.Price?.[0];

                    if (price) {
                        pricing.initialCost = parseFloat(price.$.Price) || 12.99;
                        pricing.renewalCost = parseFloat(price.$.RenewalPrice || price.$.Price) || 14.99;
                    }
                }
            } catch (pricingError) {
                console.warn("⚠️ Failed to fetch pricing, using defaults:", pricingError.message);
            }
        }

        console.log(`✅ Domain ${domainName} available: ${available}`);
        res.json({
            available,
            domain: domainName,
            cleanedDomain: cleanedDomain,
            pricing: {
                initialCost: pricing.initialCost,
                renewalCost: pricing.renewalCost
            }
        });
    } catch (error) {
        console.error("❌ Namecheap API Error:", error.message);
        res.status(500).json({
            available: false,
            error: "Failed to check domain availability",
            details: error.message
        });
    }
});

async function checkUserExists(email) {
    try {
        const usersSnapshot = await db.collection('userEmails').where('email', '==', email).limit(1).get();
        return !usersSnapshot.empty;
    } catch (error) {
        console.error('Error checking user:', error);
        return false;
    }
}

async function saveProjectToFirestore(email, projectData) {
    try {
        const projectRef = db.collection('pendingProjects').doc();
        await projectRef.set({
            ...projectData,
            email: email,
            createdAt: new Date(),
            status: 'pending_account',
            claimed: false
        });
        console.log('✅ Project saved to pendingProjects:', projectRef.id);
        return projectRef.id;
    } catch (error) {
        console.error('❌ Error saving to Firestore:', error);
        throw error;
    }
}

async function claimProject(userId, email) {
    try {
        const pendingSnapshot = await db.collection('pendingProjects')
            .where('email', '==', email)
            .where('claimed', '==', false)
            .get();

        const batch = db.batch();

        pendingSnapshot.forEach(doc => {
            const projectData = doc.data();
            const userProjectRef = db.collection('users').doc(userId).collection('projects').doc();

            batch.set(userProjectRef, {
                businessName: projectData.businessName,
                email: projectData.email,
                packageType: projectData.packageType,
                repoUrl: projectData.repoUrl,
                liveUrl: projectData.liveUrl,
                repoName: projectData.repoName,
                createdAt: projectData.createdAt,
                status: 'live',
                modificationHistory: []
            });

            batch.update(doc.ref, { claimed: true, claimedBy: userId, claimedAt: new Date() });
        });

        await batch.commit();
        console.log('✅ Projects claimed for user:', userId);
    } catch (error) {
        console.error('❌ Error claiming projects:', error);
    }
}

app.post("/claim-projects", async (req, res) => {
    try {
        const { userId, email } = req.body;

        if (!userId || !email) {
            return res.status(400).json({ success: false, error: 'Missing userId or email' });
        }

        await claimProject(userId, email);

        res.json({ success: true, message: 'Projects claimed successfully' });
    } catch (error) {
        console.error('❌ Error claiming projects:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Stripe Payment Session Creation
app.post("/create-payment-session", async (req, res) => {
    try {
        const contactData = req.body;

        if (!contactData.email || !contactData.businessName || !contactData.packagePrice) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Save project to Firestore
        const projectRef = db.collection('projects').doc();
        const projectId = projectRef.id;

        await projectRef.set({
            ...contactData,
            projectId: projectId,
            status: 'pending_payment',
            createdAt: new Date(),
            paidAt: null,
            generationAttempts: 0,
            generationStatus: null,
            githubRepoUrl: null,
            liveUrl: null
        });

        // BYPASS MODE FOR TESTING (Remove when Stripe is ready)
        if (process.env.BYPASS_PAYMENT === 'true') {
            console.log('⚠️ BYPASS MODE: Skipping Stripe, triggering AI generation directly');

            // Mark as paid immediately
            await projectRef.update({
                status: 'paid',
                paidAt: new Date(),
                bypassedPayment: true
            });

            // Send fake success URL
            const successUrl = `http://localhost:5173/payment-success.html?session_id=bypass_${projectId}`;

            // Trigger AI generation in background
            setTimeout(() => {
                triggerAIGeneration(projectId).catch(err => {
                    console.error('Background generation error:', err);
                });
            }, 1000);

            return res.json({
                success: true,
                sessionUrl: successUrl,
                sessionId: `bypass_${projectId}`,
                projectId: projectId,
                bypassed: true
            });
        }

        // REAL STRIPE FLOW (Only runs when BYPASS_PAYMENT is not true)
        const lineItems = [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: contactData.package,
                        description: `Website package for ${contactData.businessName}`
                    },
                    unit_amount: Math.round(contactData.packagePrice * 100)
                },
                quantity: 1
            }
        ];

        // Add domain if selected
        if (contactData.domainPricing && contactData.domainPricing.initialCost > 0) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Domain: ${contactData.selectedDomain}`,
                        description: `First year (Renewal: $${contactData.domainPricing.renewalCost}/year)`
                    },
                    unit_amount: Math.round(contactData.domainPricing.initialCost * 100)
                },
                quantity: 1
            });
        }

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:5173/payment-success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:5173/src/frontend/pages/contact.html?canceled=true`,
            customer_email: contactData.email,
            metadata: {
                projectId: projectId,
                businessName: contactData.businessName,
                email: contactData.email,
                packageType: contactData.package,
                selectedDomain: contactData.selectedDomain || 'N/A',
                mainGoal: contactData.mainGoal || '',
                mustHaveFeatures: contactData.mustHaveFeatures || ''
            }
        });

        await projectRef.update({ stripeSessionId: session.id });

        console.log('✅ Payment session created:', session.id);
        res.json({ success: true, sessionUrl: session.url, sessionId: session.id, projectId: projectId });

    } catch (error) {
        console.error('❌ Error creating payment session:', error);
        res.status(500).json({ success: false, error: 'Failed to create payment session' });
    }
});

// Handle successful payment
async function handleSuccessfulPayment(session) {
    const { projectId, businessName, email } = session.metadata;

    try {
        const projectRef = db.collection('projects').doc(projectId);
        await projectRef.update({
            status: 'paid',
            paidAt: new Date(),
            stripePaymentIntentId: session.payment_intent
        });

        console.log(`✅ Project ${projectId} marked as paid`);

        // Send payment confirmation
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Payment Confirmed - ${businessName}`,
            html: `
                <h2>🎉 Payment Confirmed!</h2>
                <p>Thank you! Your website is now being generated by our AI.</p>
                <p><strong>Business:</strong> ${businessName}</p>
                <p>You'll receive another email with your live website URL in 5-15 minutes.</p>
                <p>Questions? Call (415) 691-7085</p>
            `
        });

        // Trigger AI generation
        await triggerAIGeneration(projectId);

    } catch (error) {
        console.error(`❌ Error handling payment for ${projectId}:`, error);
    }
}

// AI Generation with retry logic
async function triggerAIGeneration(projectId, retryCount = 0) {
    const MAX_RETRIES = 3;
    const projectRef = db.collection('projects').doc(projectId);

    try {
        const projectDoc = await projectRef.get();
        if (!projectDoc.exists) throw new Error('Project not found');

        const projectData = projectDoc.data();

        await projectRef.update({
            status: 'generating',
            generationStatus: 'in_progress',
            generationStartedAt: new Date(),
            generationAttempts: (projectData.generationAttempts || 0) + 1
        });

        console.log(`🤖 Starting AI generation for ${projectId} (Attempt ${retryCount + 1}/${MAX_RETRIES + 1})`);

        // Call your existing deployment function
        const deploymentResult = await deployProject({
            businessName: projectData.businessName,
            email: projectData.email,
            category: extractCategoryFromPackage(projectData.package),
            requirements: {
                mainGoal: projectData.mainGoal,
                mustHaveFeatures: projectData.mustHaveFeatures,
                referenceWebsite: projectData.referenceWebsite,
                domain: projectData.selectedDomain
            }
        });

        // Validate deployment result
        if (!deploymentResult || !deploymentResult.repoUrl || !deploymentResult.liveUrl) {
            throw new Error('Deployment failed: Missing required URLs in result');
        }

        // Update with success
        await projectRef.update({
            status: 'live',
            generationStatus: 'completed',
            generationCompletedAt: new Date(),
            githubRepoUrl: deploymentResult.repoUrl,
            liveUrl: deploymentResult.liveUrl,
            repoName: deploymentResult.repoName || 'unknown'
        });

        console.log(`✅ AI generation completed for ${projectId}`);

        // Send completion email
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: projectData.email,
            subject: `🚀 Your Website is Live! - ${projectData.businessName}`,
            html: `
                <h2>🚀 Your Website is Live!</h2>
                <p><strong>Live URL:</strong> <a href="${deploymentResult.liveUrl}">${deploymentResult.liveUrl}</a></p>
                <p><strong>GitHub:</strong> <a href="${deploymentResult.repoUrl}">${deploymentResult.repoUrl}</a></p>
                <p>Log in to your dashboard to request changes anytime.</p>
                <p>Questions? Call (415) 691-7085</p>
            `
        });

    } catch (error) {
        console.error(`❌ AI generation failed for ${projectId}:`, error);

        if (retryCount < MAX_RETRIES) {
            console.log(`🔄 Retrying (${retryCount + 1}/${MAX_RETRIES})...`);
            await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 5000));
            await triggerAIGeneration(projectId, retryCount + 1);
        } else {
            console.error(`🚨 Max retries reached for ${projectId}`);

            const projectDoc = await projectRef.get();
            const projectData = projectDoc.data();

            await projectRef.update({
                status: 'failed',
                generationStatus: 'failed',
                generationError: error.message,
                generationFailedAt: new Date(),
                requiresManualIntervention: true
            });

            // Notify admin
            await transporter.sendMail({
                from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                to: "holysmokasthatscheap@gmail.com",
                subject: `🚨 MANUAL INTERVENTION - Project ${projectId}`,
                html: `
                    <h2>🚨 AI Generation Failed</h2>
                    <p><strong>Project:</strong> ${projectData.businessName}</p>
                    <p><strong>Email:</strong> ${projectData.email}</p>
                    <p><strong>Error:</strong> ${error.message}</p>
                `
            });

            // Notify customer
            await transporter.sendMail({
                from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                to: projectData.email,
                subject: `Update - ${projectData.businessName}`,
                html: `
                    <h2>Update on Your Website</h2>
                    <p>We encountered an issue generating your website automatically.</p>
                    <p>Our team has been notified and will create it manually within 24 hours.</p>
                    <p>We apologize for the delay. Questions? Call (415) 691-7085</p>
                `
            });
        }
    }
}

function extractCategoryFromPackage(packageName) {
    if (packageName && packageName.includes('Starter')) return 'starter';
    if (packageName && packageName.includes('Business')) return 'business';
    if (packageName && packageName.includes('Small Shop')) return 'smallShop';
    return 'business';
}

app.post("/submit-contact", async (req, res) => {
    try {
        const formData = req.body;
        console.log("📋 New contact form submission received:", formData.businessName);

        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: "holysmokasthatscheap@gmail.com",
            subject: `New Contact Form: ${formData.businessName}`,
            text: `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Business Name: ${formData.businessName}
Package: ${formData.package}
Selected Domain: ${formData.selectedDomain || "N/A"}

Goal: ${formData.mainGoal}
Must-Have Features: ${formData.mustHaveFeatures}

Timeline: ${formData.timeline}
Current Website: ${formData.currentUrl}
Reference Website: ${formData.referenceWebsite}

Submitted: ${new Date().toLocaleString()}
            `,
        });

        console.log("📧 Notification email sent successfully");

        res.json({
            success: true,
            message: "Form received! We're generating your website now.",
        });

        processDeploymentInBackground(formData).catch(err => {
            console.error("❌ Background deployment error:", err);
        });

    } catch (error) {
        console.error("❌ Error handling contact form:", error);
        res.status(500).json({
            success: false,
            error: "Server error during submission",
            details: error.message
        });
    }
});

async function processDeploymentInBackground(formData) {
    try {
        console.log("🎨 Generating AI website for:", formData.businessName);

        const deployResult = await deployProject({
            name: formData.businessName,
            description: formData.mainGoal,
            category: formData.package,
            email: formData.email,
        });

        console.log("✅ Deployment complete:", deployResult);

        if (!deployResult || !deployResult.success) {
            throw new Error(deployResult?.error || "Deployment failed");
        }

        await logDeployment({
            businessName: formData.businessName,
            email: formData.email,
            packageType: formData.package,
            repoUrl: deployResult.repoUrl,
            liveUrl: deployResult.pagesUrl,
        });

        const userExists = await checkUserExists(formData.email);

        await saveProjectToFirestore(formData.email, {
            businessName: formData.businessName,
            email: formData.email,
            packageType: formData.package,
            repoUrl: deployResult.repoUrl,
            liveUrl: deployResult.pagesUrl,
            repoName: deployResult.repoName
        });

        if (userExists) {
            console.log("📧 User exists - sending dashboard link email");
            try {
                const emailResult = await transporter.sendMail({
                    from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                    to: formData.email,
                    subject: `Your Website Update is Ready! - ${formData.businessName}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #6366f1;">Your Website is Ready! 🎉</h2>
                            <p>Hi ${formData.name},</p>
                            <p>Great news! Your website for <strong>${formData.businessName}</strong> has been generated and is ready for review.</p>
                            
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="http://localhost:5173/src/frontend/pages/dashboard.html" 
                                   style="background: #6366f1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                                    View in Dashboard
                                </a>
                            </div>
                            
                            <p>Login to your dashboard to view your project, make modification requests, and access all project details.</p>
                            
                            <p style="margin-top: 30px;">Best regards,<br>The HolySmokas Team</p>
                        </div>
                    `,
                });
                console.log("✅ Email sent successfully! Message ID:", emailResult.messageId);
            } catch (emailError) {
                console.error("❌ Failed to send email:", emailError.message);
                console.error("Full error:", emailError);
            }
        } else {
            console.log("📧 New user - sending account creation email");
            try {
                const emailResult = await transporter.sendMail({
                    from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                    to: formData.email,
                    subject: `Your Website is Ready! Create Your Account - ${formData.businessName}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                            <h2 style="color: #6366f1;">Your Website is Ready! 🎉</h2>
                            <p>Hi ${formData.name},</p>
                            <p>Great news! Your website for <strong>${formData.businessName}</strong> has been generated and deployed.</p>
                            
                            <div style="text-align: center; margin: 30px 0;">
                                <a href="http://localhost:5173/src/frontend/pages/login.html" 
                                   style="background: #6366f1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                                    Create Account & View Project
                                </a>
                            </div>
                            
                            <p><strong>Create your free account to:</strong></p>
                            <ul>
                                <li>Access your project dashboard</li>
                                <li>Request modifications anytime</li>
                                <li>View project history</li>
                                <li>Manage all your websites in one place</li>
                            </ul>
                            
                            <p>Use this email (<strong>${formData.email}</strong>) when creating your account to automatically link your project.</p>
                            
                            <p>The website will be fully accessible within 5-10 minutes as GitHub Pages builds and activates.</p>
                            
                            <p style="margin-top: 30px;">Best regards,<br>The HolySmokas Team</p>
                        </div>
                    `,
                });
                console.log("✅ Email sent successfully! Message ID:", emailResult.messageId);
            } catch (emailError) {
                console.error("❌ Failed to send email:", emailError.message);
                console.error("Full error:", emailError);
            }
        }

        console.log("📧 Completion email sent to:", formData.email);

    } catch (error) {
        console.error("❌ Background processing failed:", error);

        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: "holysmokasthatscheap@gmail.com",
            subject: `Deployment Failed - ${formData.businessName}`,
            text: `Deployment failed for ${formData.businessName}\n\nError: ${error.message}\n\nStack: ${error.stack}`,
        });
    }
}

app.get("/user-projects/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const projectsSnapshot = await db.collection('users').doc(userId).collection('projects').get();
        const projects = [];
        projectsSnapshot.forEach(doc => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        res.json({ success: true, projects });
    } catch (error) {
        console.error('❌ Error fetching projects:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post("/request-modification", async (req, res) => {
    try {
        const { userId, projectId, modificationRequest } = req.body;

        if (!userId || !projectId || !modificationRequest) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        res.json({
            success: true,
            message: "Modification request received! We're updating your website now."
        });

        processModificationInBackground(userId, projectId, modificationRequest).catch(err => {
            console.error("❌ Background modification error:", err);
        });

    } catch (error) {
        console.error('❌ Error handling modification request:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

async function processModificationInBackground(userId, projectId, modificationRequest) {
    try {
        const projectDoc = await db.collection('users').doc(userId).collection('projects').doc(projectId).get();
        if (!projectDoc.exists) {
            throw new Error('Project not found');
        }
        const projectData = projectDoc.data();

        await db.collection('users').doc(userId).collection('projects').doc(projectId).update({
            status: 'updating'
        });

        console.log('🔄 Processing modification for:', projectData.businessName);

        const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
        const owner = process.env.GITHUB_USERNAME;
        const repo = projectData.repoName;

        const { data: repoData } = await octokit.repos.get({ owner, repo });
        const { data: tree } = await octokit.git.getTree({
            owner,
            repo,
            tree_sha: repoData.default_branch,
            recursive: true
        });

        const currentFiles = {};
        for (const item of tree.tree) {
            if (item.type === 'blob' && /\.(jsx?|html|css|json)$/.test(item.path)) {
                try {
                    const { data: fileData } = await octokit.repos.getContent({
                        owner,
                        repo,
                        path: item.path
                    });
                    const content = Buffer.from(fileData.content, 'base64').toString('utf-8');
                    currentFiles[item.path] = content;
                } catch (err) {
                    console.warn(`⚠️ Could not fetch ${item.path}:`, err.message);
                }
            }
        }

        const updatedCode = await generateModification({
            currentFiles,
            modificationRequest,
            projectName: projectData.businessName,
            category: projectData.packageType
        });

        const { parseCodeBlocks } = await import('./deployProject.js');
        const parsedFiles = parseCodeBlocks(updatedCode);

        for (const file of parsedFiles) {
            const content = Buffer.from(file.content).toString('base64');

            try {
                const { data: existingFile } = await octokit.repos.getContent({
                    owner,
                    repo,
                    path: file.path
                });

                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: file.path,
                    message: `Update ${file.path} - Modification request`,
                    content: content,
                    sha: existingFile.sha
                });
            } catch (err) {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: file.path,
                    message: `Add ${file.path} - Modification request`,
                    content: content
                });
            }

            console.log(`✅ Updated: ${file.path}`);
        }

        await db.collection('users').doc(userId).collection('projects').doc(projectId).update({
            status: 'live',
            lastModified: new Date(),
            modificationHistory: [...(projectData.modificationHistory || []), {
                request: modificationRequest,
                timestamp: new Date()
            }]
        });

        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: projectData.email,
            subject: `Your Website Updates are Ready! - ${projectData.businessName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6366f1;">Your Website Has Been Updated! 🎉</h2>
                    <p>Great news! The modifications you requested for <strong>${projectData.businessName}</strong> are now live.</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="http://localhost:5173/src/frontend/pages/dashboard.html" 
                           style="background: #6366f1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                            View in Dashboard
                        </a>
                    </div>
                    
                    <p>The changes will be visible within 5-10 minutes as GitHub Pages rebuilds the site.</p>
                    
                    <p style="margin-top: 30px;">Best regards,<br>The HolySmokas Team</p>
                </div>
            `
        });

        console.log('✅ Modification complete for:', projectData.businessName);

    } catch (error) {
        console.error('❌ Modification processing failed:', error);

        await db.collection('users').doc(userId).collection('projects').doc(projectId).update({
            status: 'error'
        });
    }
}

app.post("/create-payment-session", async (req, res) => {
    try {
        const contactData = req.body;

        if (!contactData.email || !contactData.businessName || !contactData.packagePrice) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Save project to Firestore
        const projectRef = db.collection('projects').doc();
        const projectId = projectRef.id;

        await projectRef.set({
            ...contactData,
            projectId: projectId,
            status: 'pending_payment',
            createdAt: new Date(),
            paidAt: null,
            generationAttempts: 0,
            generationStatus: null,
            githubRepoUrl: null,
            liveUrl: null
        });

        // Create line items
        const lineItems = [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: contactData.package,
                        description: `Website package for ${contactData.businessName}`
                    },
                    unit_amount: Math.round(contactData.packagePrice * 100)
                },
                quantity: 1
            }
        ];

        // Add domain if selected
        if (contactData.domainPricing && contactData.domainPricing.initialCost > 0) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Domain: ${contactData.selectedDomain}`,
                        description: `First year (Renewal: $${contactData.domainPricing.renewalCost}/year)`
                    },
                    unit_amount: Math.round(contactData.domainPricing.initialCost * 100)
                },
                quantity: 1
            });
        }

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:5173/payment-success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `http://localhost:5173/src/frontend/pages/contact.html?canceled=true`,
            customer_email: contactData.email,
            metadata: {
                projectId: projectId,
                businessName: contactData.businessName,
                email: contactData.email,
                packageType: contactData.package,
                selectedDomain: contactData.selectedDomain || 'N/A',
                mainGoal: contactData.mainGoal,
                mustHaveFeatures: contactData.mustHaveFeatures
            }
        });

        await projectRef.update({ stripeSessionId: session.id });

        console.log('✅ Payment session created:', session.id);
        res.json({ success: true, sessionUrl: session.url, sessionId: session.id, projectId: projectId });

    } catch (error) {
        console.error('❌ Error creating payment session:', error);
        res.status(500).json({ success: false, error: 'Failed to create payment session' });
    }
});


app.get("/test-email", async (req, res) => {
    try {
        console.log("📧 Testing email with config:", {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
        });

        const info = await transporter.sendMail({
            from: `"HolySmokas Test" <${process.env.SMTP_USER}>`,
            to: "milani.babak@gmail.com",
            subject: "🔥 Test Email from HolySmokas",
            html: `
                <h1>Test Email Works! 🎉</h1>
                <p>If you received this, your SMTP configuration is correct.</p>
                <p>Sent at: ${new Date().toLocaleString()}</p>
            `
        });

        console.log("✅ Email sent:", info.messageId);
        res.json({
            success: true,
            message: "Test email sent!",
            messageId: info.messageId
        });
    } catch (error) {
        console.error("❌ Email error:", error);
        res.json({
            success: false,
            error: error.message,
            stack: error.stack
        });
    }
});

app.get("/", (req, res) => {
    res.send("🚀 HolySmokas backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
    console.log(`🔥 HolySmokas backend running at http://localhost:${PORT}`)
);