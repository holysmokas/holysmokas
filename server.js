// backend/server.js - FIXED .env LOADING
import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import xml2js from "xml2js";
import express from "express";
import rateLimit from 'express-rate-limit';
import cors from "cors";
import multer from 'multer';
import nodemailer from "nodemailer";
import Stripe from "stripe";
import { deployProject, parseCodeBlocks } from "./backend/deployProject.js";
import { logDeployment, logContactSubmission } from "./backend/utils/sheetsLogger.js";
import { db, admin } from "./backend/firebaseAdmin.js";
import { Octokit } from "@octokit/rest";
import cron from 'node-cron';


import { generateModification } from "./backend/utils/modificationGenerator.js";
import { setupDomainForClient } from "./backend/utils/domainManager.js";
import { checkDomainRenewals, processDomainRenewal } from './backend/utils/renewalChecker.js';

console.log('🔥 Server starting...');
console.log('📦 Checking Firestore:', typeof db, db ? '✅ Loaded' : '❌ Missing');
console.log('📦 Checking admin:', typeof admin, admin ? '✅ Loaded' : '❌ Missing');
console.log('🔑 GIT_TOKEN:', process.env.GIT_TOKEN ? `Found (${process.env.GIT_TOKEN.substring(0, 10)}...)` : '❌ NOT FOUND');
console.log('🔑 OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'Found' : '❌ NOT FOUND');

const app = express();

app.use(cors({
    origin: [
        'https://holysmokas.com',
        'https://www.holysmokas.com',
        'https://localhost:8080',
        'http://localhost:5173'
    ],
    credentials: true
}));

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// Add this helper function near the top of server.js (after imports, before endpoints)
function cleanDomainName(domain) {
    let cleaned = domain.replace(/^https?:\/\//, '');
    cleaned = cleaned.replace(/^www\./, '');
    cleaned = cleaned.split('/')[0];
    cleaned = cleaned.trim();
    return cleaned;
}

// Test Firestore endpoint
app.get('/test-firestore', async (req, res) => {
    try {
        const testDoc = await db.collection('contacts').limit(1).get();
        res.json({
            success: true,
            message: 'Firestore is working!',
            docCount: testDoc.size
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Firestore failed',
            error: error.message
        });
    }
});

console.log('🔐 STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? 'Found (length: ' + process.env.STRIPE_SECRET_KEY.length + ')' : 'NOT FOUND');
console.log('🔐 First 10 chars:', process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.substring(0, 10) : 'N/A');
console.log('🔐 Type:', typeof process.env.STRIPE_SECRET_KEY);
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

        console.log('🎯 Stripe Event Received:', event.type);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const { projectId, paymentType } = session.metadata;

            console.log(`💰 Payment received: ${paymentType} for project ${projectId}`);

            try {
                const projectRef = db.collection('projects').doc(projectId);
                const projectDoc = await projectRef.get();

                if (!projectDoc.exists) {
                    console.error('❌ Project not found:', projectId);
                    return res.json({ received: true });
                }

                const projectData = projectDoc.data();

                if (paymentType === 'website') {
                    // ✅ WEBSITE PAYMENT RECEIVED
                    await projectRef.update({
                        websitePaymentReceived: true,
                        websitePaymentIntent: session.payment_intent,
                        status: 'website_paid',
                        paidAt: new Date()
                    });

                    console.log('✅ Website payment recorded');

                    // Check if this project has a domain
                    if (!projectData.selectedDomain || projectData.selectedDomain === 'N/A') {
                        // No domain - trigger generation immediately
                        console.log('🤖 No domain needed - triggering website generation');

                        // Send confirmation email
                        await transporter.sendMail({
                            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                            to: projectData.email,
                            subject: `Payment Confirmed - ${projectData.businessName}`,
                            html: `
                                🎉 Payment Confirmed!
                                Thank you! Your website is now being generated by our AI.
                                Business: ${projectData.businessName}
                                You'll receive another email with your live website URL in 5-15 minutes.
                                Questions? Call (415) 691-7085
                            `
                        });

                        // Trigger generation
                        await triggerAIGeneration(projectId);
                    } else {
                        console.log('⏳ Domain required - waiting for domain payment...');

                        // Send partial confirmation
                        await transporter.sendMail({
                            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                            to: projectData.email,
                            subject: `Website Payment Confirmed - ${projectData.businessName}`,
                            html: `
                                ✅ Website Payment Confirmed!
                                Your website payment has been received.
                                Please complete your domain registration payment to finalize your order.
                                Domain: ${projectData.selectedDomain}
                            `
                        });
                    }

                } else if (paymentType === 'domain') {
                    // ✅ DOMAIN PAYMENT RECEIVED
                    await projectRef.update({
                        domainPaymentReceived: true,
                        domainPaymentIntent: session.payment_intent,
                        status: 'fully_paid'
                    });

                    console.log('✅ Domain payment recorded');

                    // Check if website payment also received
                    if (projectData.websitePaymentReceived) {
                        console.log('✅ Both payments received - starting full setup');

                        // Send full confirmation
                        await transporter.sendMail({
                            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
                            to: projectData.email,
                            subject: `All Payments Confirmed - ${projectData.businessName}`,
                            html: `
                                🎉 All Payments Confirmed!
                                Your website is being generated and your domain ${projectData.selectedDomain} is being registered.
                                You'll receive confirmation emails as each step completes.
                                Questions? Call (415) 691-7085
                            `
                        });

                        // Trigger website generation
                        await triggerAIGeneration(projectId);

                        // Schedule domain setup after generation completes
                        setTimeout(async () => {
                            console.log('🌐 Starting domain setup...');
                            await handleDomainSetup(projectId, projectRef);
                        }, 60000); // Wait 60 seconds

                    } else {
                        console.warn('⚠️ Domain payment received but no website payment yet');
                    }
                }

                if (session.metadata.type === 'domain_renewal') {
                    const renewalId = session.metadata.renewalId;

                    console.log(`💰 Domain renewal payment received`);
                    console.log(`   Renewal ID: ${renewalId}`);

                    try {
                        await processDomainRenewal(renewalId, session.payment_intent, db);
                        console.log('✅ Domain renewal processed successfully');
                    } catch (error) {
                        console.error('❌ Failed to process domain renewal:', error);
                    }
                }

                console.log('\n✅ Renewal system endpoints loaded');
                console.log('   GET  /create-test-renewal - Create test data');
                console.log('   GET  /check-renewals-now - Trigger manual check');
                console.log('   GET  /admin/renewals - View all renewals');
                console.log('   POST /admin/manual-renew/:id - Manual renewal override');
                console.log('');

            } catch (error) {
                console.error('❌ Error processing webhook:', error);
            }
        }

        res.json({ received: true });
    }
);


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


// ============================================
// DOMAIN CHECK CACHING SYSTEM
// ============================================
const domainCache = new Map();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Helper function to check cache
function getCachedDomain(domain) {
    const cached = domainCache.get(domain);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log(`✅ Cache HIT for ${domain} (age: ${Math.floor((Date.now() - cached.timestamp) / 1000)}s)`);
        return cached.data;
    }
    if (cached) {
        console.log(`⏰ Cache EXPIRED for ${domain}`);
        domainCache.delete(domain);
    } else {
        console.log(`❌ Cache MISS for ${domain}`);
    }
    return null;
}

// Helper function to set cache
function setCachedDomain(domain, data) {
    domainCache.set(domain, {
        timestamp: Date.now(),
        data: data
    });
    console.log(`💾 Cached ${domain} (total cached: ${domainCache.size})`);
}

// Optional: Clean old cache entries every hour
setInterval(() => {
    const now = Date.now();
    let cleaned = 0;
    for (const [domain, entry] of domainCache.entries()) {
        if (now - entry.timestamp > CACHE_DURATION) {
            domainCache.delete(domain);
            cleaned++;
        }
    }
    if (cleaned > 0) {
        console.log(`🧹 Cleaned ${cleaned} expired cache entries`);
    }
}, 60 * 60 * 1000); // Run every hour

// ============================================
// RATE LIMITING CONFIGURATION
// ============================================

// General API rate limiter (applies to all routes)
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per 15 minutes per IP
    message: {
        success: false,
        error: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false,
});

// Strict limiter for domain checks (prevents spam)
const domainCheckLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10, // 10 domain checks per minute per IP
    message: {
        success: false,
        error: 'Too many domain checks. Please wait a moment before checking again.',
        retryAfter: 60
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        console.log(`⚠️ Rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            error: 'Too many domain checks. Please wait a moment.',
            retryAfter: 60
        });
    }
});

// Moderate limiter for payment sessions
const paymentLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5, // 5 payment attempts per 5 minutes per IP
    message: {
        success: false,
        error: 'Too many payment attempts. Please wait a few minutes.',
        retryAfter: 300
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply general rate limiter to all routes (add after cors() middleware)
// app.use(generalLimiter); // Uncomment when ready for production

// ============================================
// UPDATED /check-domain ENDPOINT WITH CACHING
// ============================================

app.post("/check-domain", domainCheckLimiter, async (req, res) => {
    const { domain } = req.body;
    if (!domain) {
        return res.status(400).json({
            available: false,
            error: "No domain provided"
        });
    }

    try {
        const cleanedDomain = cleanDomainName(domain);
        console.log("🔍 Checking domain:", cleanedDomain);

        // ✅ CHECK CACHE FIRST
        const cachedResult = getCachedDomain(cleanedDomain);
        if (cachedResult) {
            return res.json({
                ...cachedResult,
                cached: true,
                cacheAge: Math.floor((Date.now() - domainCache.get(cleanedDomain).timestamp) / 1000)
            });
        }

        // ✅ NOT IN CACHE - CALL NAMECHEAP API
        console.log("📡 Calling Namecheap API...");

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

        // Get pricing only if available
        if (available) {
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

        // ✅ BUILD RESPONSE
        const result = {
            available,
            domain: domainName,
            cleanedDomain: cleanedDomain,
            pricing: {
                initialCost: pricing.initialCost,
                renewalCost: pricing.renewalCost
            },
            cached: false
        };

        console.log(`✅ Domain ${domainName} available: ${available}`);

        // ✅ STORE IN CACHE
        setCachedDomain(cleanedDomain, result);

        res.json(result);

    } catch (error) {
        console.error("❌ Namecheap API Error:", error.message);
        res.status(500).json({
            available: false,
            error: "Failed to check domain availability",
            details: error.message
        });
    }
});

// ============================================
// CACHE STATISTICS ENDPOINT (for monitoring)
// ============================================

app.get('/admin/cache-stats', (req, res) => {
    const stats = {
        totalCached: domainCache.size,
        cacheDuration: `${CACHE_DURATION / 1000 / 60} minutes`,
        entries: []
    };

    const now = Date.now();
    for (const [domain, entry] of domainCache.entries()) {
        const age = Math.floor((now - entry.timestamp) / 1000);
        const timeLeft = Math.floor((CACHE_DURATION - (now - entry.timestamp)) / 1000);

        stats.entries.push({
            domain: domain,
            available: entry.data.available,
            ageSeconds: age,
            expiresInSeconds: timeLeft > 0 ? timeLeft : 'expired',
            price: entry.data.pricing?.initialCost
        });
    }

    res.json(stats);
});

// ============================================
// CLEAR CACHE ENDPOINT (for testing/admin)
// ============================================

app.post('/admin/clear-cache', (req, res) => {
    const { domain } = req.body;

    if (domain) {
        // Clear specific domain
        if (domainCache.has(domain)) {
            domainCache.delete(domain);
            res.json({
                success: true,
                message: `Cache cleared for ${domain}`
            });
        } else {
            res.json({
                success: false,
                message: `${domain} not found in cache`
            });
        }
    } else {
        // Clear entire cache
        const size = domainCache.size;
        domainCache.clear();
        res.json({
            success: true,
            message: `Cleared ${size} cached domains`
        });
    }
});

console.log('\n✅ Domain caching system initialized');
console.log(`   Cache duration: ${CACHE_DURATION / 1000 / 60} minutes`);
console.log('✅ Rate limiting configured');
console.log('   Domain checks: 10 per minute per IP');
console.log('   General API: 100 per 15 minutes per IP');
console.log('');

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
        console.log(`🔗 Claiming projects for user ${userId} with email ${email}`);

        // Find all projects with this email that don't have a userId yet
        const projectsSnapshot = await db.collection('projects')
            .where('email', '==', email)
            .get();

        if (projectsSnapshot.empty) {
            console.log('ℹ️ No projects found for email:', email);
            return;
        }

        const batch = db.batch();
        let claimedCount = 0;

        projectsSnapshot.forEach(doc => {
            const projectData = doc.data();

            // Only claim if not already claimed
            if (!projectData.userId) {
                batch.update(doc.ref, {
                    userId: userId,
                    claimedAt: admin.firestore.FieldValue.serverTimestamp()
                });
                claimedCount++;
                console.log(`  📎 Claiming project: ${projectData.businessName}`);
            }
        });

        if (claimedCount > 0) {
            await batch.commit();
            console.log(`✅ Successfully claimed ${claimedCount} project(s) for user ${userId}`);
        } else {
            console.log('ℹ️ All projects already claimed');
        }

    } catch (error) {
        console.error('❌ Error claiming projects:', error);
        throw error;
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

// backend/server.js - FINAL /create-payment-session endpoint

// Change from app.post to use multer middleware
app.post("/create-payment-session", paymentLimiter, upload.single('logo'), async (req, res) => {
    console.log('🎯 /create-payment-session called');

    try {
        let projectId;

        // ✅ contactData comes from req.body (form fields)
        const contactData = req.body;

        // ✅ logoFile comes from req.file (uploaded file)
        const logoFile = req.file;

        if (logoFile) {
            console.log('📸 Logo uploaded:', {
                filename: logoFile.originalname,
                size: `${(logoFile.size / 1024).toFixed(2)} KB`,
                mimetype: logoFile.mimetype
            });
        }

        const hasDomain = contactData.selectedDomain && contactData.selectedDomain !== 'N/A';

        console.log('📋 Request data:', {
            email: contactData.email,
            businessName: contactData.businessName,
            packagePrice: contactData.packagePrice,
            domain: contactData.selectedDomain,
            hasLogo: !!logoFile,
            hasDomain: hasDomain
        });

        // ✅ Validate required fields
        if (!contactData.email || !contactData.businessName) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: email and businessName'
            });
        }

        // Save to Firestore (WITHOUT storing logo as base64 - that's wasteful)
        try {
            console.log('💾 Attempting to save to Firestore...');
            const projectRef = db.collection('projects').doc();
            projectId = projectRef.id;

            const projectData = {
                ...contactData,
                projectId: projectId,
                email: contactData.email,
                userId: null,
                status: 'pending_payment',
                createdAt: new Date(),
                paidAt: null,
                websitePaymentReceived: false,
                domainPaymentReceived: false,
                generationAttempts: 0,
                generationStatus: null,
                githubRepoUrl: null,
                liveUrl: null,
                modificationsUsed: 0,
                modificationsLimit: 3,
                // ✅ Only store logo METADATA (not the actual file!)
                hasLogo: !!logoFile,
                logoFilename: logoFile?.originalname || null,
                logoMimetype: logoFile?.mimetype || null
            };

            await projectRef.set(projectData);
            console.log('✅ Firestore save successful, projectId:', projectId);

            // ✅ TEMP: Store logo in memory map for retrieval during generation
            // This avoids putting large base64 data in Firestore
            if (logoFile) {
                global.pendingLogos = global.pendingLogos || new Map();
                global.pendingLogos.set(projectId, {
                    buffer: logoFile.buffer,
                    filename: logoFile.originalname,
                    mimetype: logoFile.mimetype,
                    uploadedAt: new Date()
                });
                console.log('📸 Logo stored in memory for projectId:', projectId);

                // Auto-cleanup after 1 hour (in case payment never happens)
                setTimeout(() => {
                    if (global.pendingLogos?.has(projectId)) {
                        global.pendingLogos.delete(projectId);
                        console.log('🧹 Cleaned up unused logo for:', projectId);
                    }
                }, 60 * 60 * 1000);
            }

        } catch (firestoreError) {
            console.warn('⚠️ Firestore save failed:', firestoreError.message);
            projectId = 'local-' + Date.now();
            console.log('🆔 Generated local projectId:', projectId);
        }

        // ✅ Parse package price
        const packagePrice = parseFloat(contactData.packagePrice) || 0;

        if (packagePrice <= 0) {
            // Custom quote or "Not Sure Yet" - don't create payment session
            console.log('ℹ️ No payment required - custom quote or inquiry');

            // Log to Google Sheets
            try {
                await logContactSubmission({
                    name: contactData.name,
                    email: contactData.email,
                    businessName: contactData.businessName,
                    phone: contactData.phone,
                    package: contactData.package,
                    timeline: contactData.timeline,
                    mainGoal: contactData.mainGoal,
                    mustHaveFeatures: contactData.mustHaveFeatures,
                    selectedDomain: contactData.selectedDomain || 'N/A',
                    timestamp: new Date().toISOString()
                });
            } catch (err) {
                console.warn('⚠️ Could not log to sheets:', err.message);
            }

            return res.json({
                success: true,
                requiresPayment: false,
                projectId: projectId,
                message: 'Inquiry submitted - we will contact you with a custom quote'
            });
        }

        // ✅ CREATE STRIPE CHECKOUT SESSION
        console.log('💳 Creating Stripe checkout session...');

        const lineItems = [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `${contactData.package || 'Website Package'}`,
                    description: `Website for ${contactData.businessName}`
                },
                unit_amount: Math.round(packagePrice * 100) // Convert to cents
            },
            quantity: 1
        }];

        // Add domain if selected
        let domainPricing = null;
        if (hasDomain && contactData.domainPricing) {
            try {
                domainPricing = typeof contactData.domainPricing === 'string'
                    ? JSON.parse(contactData.domainPricing)
                    : contactData.domainPricing;

                if (domainPricing?.initialCost > 0) {
                    lineItems.push({
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: `Domain: ${contactData.selectedDomain}`,
                                description: 'First year domain registration'
                            },
                            unit_amount: Math.round(domainPricing.initialCost * 100)
                        },
                        quantity: 1
                    });
                }
            } catch (e) {
                console.warn('⚠️ Could not parse domain pricing:', e.message);
            }
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.SITE_URL}/frontend/pages/payment-success.html?session_id={CHECKOUT_SESSION_ID}&project_id=${projectId}`,
            cancel_url: `${process.env.SITE_URL}/frontend/pages/contact.html?canceled=true`,
            customer_email: contactData.email,
            metadata: {
                projectId: projectId,
                paymentType: hasDomain ? 'website_and_domain' : 'website',
                businessName: contactData.businessName,
                email: contactData.email,
                selectedDomain: contactData.selectedDomain || 'N/A',
                hasLogo: logoFile ? 'true' : 'false'
            }
        });

        console.log('✅ Stripe session created:', session.id);
        console.log('🔗 Session URL:', session.url);

        // Update Firestore with session ID
        try {
            await db.collection('projects').doc(projectId).update({
                stripeSessionId: session.id
            });
        } catch (err) {
            console.warn('⚠️ Could not save session ID to Firestore:', err.message);
        }

        // ✅ RETURN SUCCESS RESPONSE WITH SESSION URL
        res.json({
            success: true,
            sessionUrl: session.url,
            sessionId: session.id,
            projectId: projectId
        });

    } catch (error) {
        console.error('❌ Error creating payment session:', error);
        console.error('Error stack:', error.stack);
        res.status(500).json({
            success: false,
            error: 'Failed to create payment session',
            details: error.message
        });
    }
});

// ========================================
// NEW ENDPOINT: Create domain checkout session
// ========================================
app.post("/create-domain-session", async (req, res) => {
    console.log('🌐 /create-domain-session called');

    try {
        const { projectId, domain, price } = req.body;

        console.log('📋 Domain session request:', { projectId, domain, price });

        if (!projectId || !domain) {
            return res.status(400).json({
                success: false,
                error: 'Missing projectId or domain'
            });
        }

        // Get project data
        const projectRef = db.collection('projects').doc(projectId);
        const projectDoc = await projectRef.get();

        if (!projectDoc.exists) {
            return res.status(404).json({
                success: false,
                error: 'Project not found'
            });
        }

        const projectData = projectDoc.data();

        // Create DOMAIN checkout session
        const domainSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Domain Registration: ${domain}`,
                        description: `First year registration`
                    },
                    unit_amount: Math.round(price * 100)
                },
                quantity: 1
            }],
            mode: 'payment',
            // ✅ FIXED: Add correct paths
            success_url: `${process.env.SITE_URL}/frontend/pages/payment-success.html?session_id={CHECKOUT_SESSION_ID}&project_id=${projectId}`,
            cancel_url: `${process.env.SITE_URL}/frontend/pages/contact.html?canceled=true`,  // ✅ FIXED
            customer_email: projectData.email,
            metadata: {
                projectId: projectId,
                paymentType: 'domain',
                domain: domain,
                businessName: projectData.businessName,
                email: projectData.email
            }
        });

        console.log('✅ Domain checkout session created:', domainSession.id);

        // Save domain session ID
        try {
            await projectRef.update({
                domainSessionId: domainSession.id
            });
        } catch (err) {
            console.warn('⚠️ Could not save domain session ID:', err.message);
        }

        res.json({
            success: true,
            sessionUrl: domainSession.url,
            sessionId: domainSession.id
        });

    } catch (error) {
        console.error('❌ Error creating domain session:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create domain session',
            details: error.message
        });
    }
});

// UPDATED: triggerAIGeneration with fallback data parameter
async function triggerAIGeneration(projectId, fallbackData = null, retryCount = 0) {
    const MAX_RETRIES = 3;
    console.log(`🤖 triggerAIGeneration called for projectId: ${projectId}`);

    try {
        let projectData;

        // Try to get data from Firestore first
        try {
            const projectRef = db.collection('projects').doc(projectId);
            const projectDoc = await projectRef.get();

            if (!projectDoc.exists) {
                console.warn('⚠️ Project not found in Firestore, using fallback data');
                if (!fallbackData) throw new Error('No fallback data provided');
                projectData = fallbackData;
            } else {
                projectData = projectDoc.data();
                console.log('✅ Project data loaded from Firestore');
            }
        } catch (firestoreErr) {
            console.warn('⚠️ Firestore read failed:', firestoreErr.message);
            if (!fallbackData) throw new Error('Cannot proceed without project data');
            projectData = fallbackData;
            console.log('✅ Using fallback data for generation');
        }

        // Try to update status in Firestore (skip if fails)
        try {
            const projectRef = db.collection('projects').doc(projectId);
            await projectRef.update({
                status: 'generating',
                generationStatus: 'in_progress',
                generationStartedAt: new Date(),
                generationAttempts: (projectData.generationAttempts || 0) + 1
            });
            console.log('✅ Status updated in Firestore');
        } catch (err) {
            console.warn('⚠️ Could not update Firestore status:', err.message);
        }

        console.log(`🤖 Starting AI generation (Attempt ${retryCount + 1}/${MAX_RETRIES + 1})`);
        console.log('📦 Business Name:', projectData.businessName);
        console.log('📦 Package:', projectData.package);

        // Call deployment
        const deploymentResult = await deployProject({
            name: projectData.businessName,
            description: projectData.mainGoal || 'Professional business website',
            category: projectData.package,
            email: projectData.email,
            projectId: projectId
        });

        console.log('🎨 Deployment result:', deploymentResult);

        // Validate deployment result
        if (!deploymentResult || !deploymentResult.success) {
            throw new Error(deploymentResult?.error || 'Deployment failed: No result returned');
        }

        if (!deploymentResult.repoUrl || !deploymentResult.pagesUrl) {
            throw new Error('Deployment failed: Missing required URLs in result');
        }

        console.log('✅ AI generation completed successfully');
        console.log('🔗 Repo URL:', deploymentResult.repoUrl);
        console.log('🔗 Live URL:', deploymentResult.pagesUrl);

        // Try to update Firestore with success (skip if fails)
        try {
            const projectRef = db.collection('projects').doc(projectId);
            await projectRef.update({
                status: 'live',
                generationStatus: 'completed',
                generationCompletedAt: new Date(),
                githubRepoUrl: deploymentResult.repoUrl,
                liveUrl: deploymentResult.pagesUrl,
                repoName: deploymentResult.repoName || 'unknown',
                modificationsUsed: 0,  // ✅ Track how many changes used
                modificationsLimit: 3,  // ✅ Free modification limit
                modifications: []  // ✅ Array to store modification history
            });
            console.log('✅ Success status saved to Firestore');
        } catch (err) {
            console.warn('⚠️ Could not save success to Firestore:', err.message);
        }

        try {
            await logDeployment({
                businessName: projectData.businessName,
                email: projectData.email,
                packageType: projectData.package,
                repoUrl: deploymentResult.repoUrl,
                liveUrl: deploymentResult.pagesUrl,
                selectedDomain: projectData.selectedDomain || "N/A"
            });
            console.log('📊 Deployment logged to Google Sheets');
        } catch (sheetsErr) {
            console.warn('⚠️ Could not log to Google Sheets:', sheetsErr.message);
        }

        // Send completion email
        const loginUrl = `${process.env.SITE_URL || 'https://holysmokas.com'}/frontend/pages/login.html`;

        await transporter.sendMail({
            from: `"Holy Smokas" <${process.env.SMTP_USER}>`,
            to: projectData.email,
            subject: `✅ ${projectData.businessName} - Your Website is Ready!`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 Your Website is Ready!</h1>
                </div>
                <div class="content">
                    <h2>Hi there!</h2>
                    <p>Great news! Your website for <strong>${projectData.businessName}</strong> has been successfully created and deployed.</p>
                    
                    <p><strong>To view and manage your website:</strong></p>
                    <ol>
                        <li>Create your account on our client portal</li>
                        <li>Access your project dashboard</li>
                        <li>View your live website and request any changes</li>
                    </ol>
                    
                    <div style="text-align: center;">
                        <a href="${loginUrl}" class="button">Create Account & View Website →</a>
                    </div>
                    
                    <p style="margin-top: 30px;"><strong>What's included:</strong></p>
                    <ul>
                        <li>✅ Your live website (hosted forever)</li>
                        <li>✅ 3 FREE modification requests</li>
                        <li>✅ Direct AI-powered changes</li>
                        <li>✅ Full source code access</li>
                    </ul>
                    
                    <p style="margin-top: 30px; padding: 15px; background: #eff6ff; border-left: 4px solid #667eea; border-radius: 4px;">
                        💡 <strong>Pro Tip:</strong> Once logged in, you can request changes directly through our AI assistant. Just describe what you want changed!
                    </p>
                </div>
                <div class="footer">
                    <p>Questions? Call us at <strong>(415) 691-7085</strong></p>
                    <p style="color: #999; font-size: 12px;">Holy Smokas - Professional Websites That's Cheap!</p>
                </div>
            </div>
        </body>
        </html>
    `
        });

    } catch (error) {
        console.error(`❌ AI generation failed:`, error.message);
        console.error('Error stack:', error.stack);

        if (retryCount < MAX_RETRIES) {
            console.log(`🔄 Retrying (${retryCount + 1}/${MAX_RETRIES})...`);
            await new Promise(resolve => setTimeout(resolve, (retryCount + 1) * 5000));
            await triggerAIGeneration(projectId, fallbackData, retryCount + 1);
        } else {
            console.error(`🚨 Max retries reached for ${projectId}`);

            // Try to save failure status (skip if fails)
            try {
                const projectRef = db.collection('projects').doc(projectId);
                await projectRef.update({
                    status: 'failed',
                    generationStatus: 'failed',
                    generationError: error.message,
                    generationFailedAt: new Date()
                });
            } catch (err) {
                console.warn('⚠️ Could not save failure status:', err.message);
            }
        }
    }
}

// Handle successful payment
async function handleSuccessfulPayment(session) {
    const { projectId, businessName, email, selectedDomain } = session.metadata;

    try {
        console.log(`\n💰💰💰 PAYMENT SUCCESSFUL 💰💰💰`);
        console.log(`Project ID: ${projectId}`);
        console.log(`Business: ${businessName}`);
        console.log(`Email: ${email}`);
        console.log(`Domain: ${selectedDomain || 'None'}`);

        const projectRef = db.collection('projects').doc(projectId);
        await projectRef.update({
            status: 'paid',
            paidAt: new Date(),
            stripePaymentIntentId: session.payment_intent,
            amountPaid: session.amount_total / 100
        });

        console.log(`✅ Project ${projectId} marked as paid`);

        // Send payment confirmation
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Payment Confirmed - ${businessName}`,
            html: `
                🎉 Payment Confirmed!
                Thank you! Your website is now being generated by our AI.
                Business: ${businessName}
                ${selectedDomain && selectedDomain !== 'N/A' ? `
                    Domain: ${selectedDomain}
                    Your domain will be registered and configured automatically.
                ` : ''}
                You'll receive another email with your live website URL in 5-15 minutes.
                Questions? Call (415) 691-7085
            `
        });

        // Trigger AI generation
        console.log('\n🤖 Triggering AI generation...');
        await triggerAIGeneration(projectId);

        // If domain was purchased, set it up
        if (selectedDomain && selectedDomain !== 'N/A') {
            console.log(`\n🌐 Domain purchase detected: ${selectedDomain}`);
            console.log('⏳ Scheduling domain setup for 60 seconds from now...');

            setTimeout(async () => {
                await handleDomainSetup(projectId, projectRef);
            }, 60000);
        }

    } catch (error) {
        console.error(`❌ Error handling payment for ${projectId}:`, error);
    }
}

async function handleDomainSetup(projectId, projectRef) {
    try {
        console.log('\n🌐 Starting domain setup process...');

        const projectDoc = await projectRef.get();
        const projectData = projectDoc.data();

        if (!projectData.repoName) {
            console.error('❌ repoName not found yet. Retrying in 30 seconds...');

            setTimeout(async () => {
                const retryDoc = await projectRef.get();
                const retryData = retryDoc.data();

                if (retryData.repoName) {
                    console.log('✅ repoName found on retry, proceeding...');
                    await executeDomainSetup(retryData, projectRef);
                } else {
                    console.error('❌ Still no repoName. Manual setup required.');
                    await notifyDomainSetupFailure(retryData);
                }
            }, 30000);

            return;
        }

        await executeDomainSetup(projectData, projectRef);

    } catch (error) {
        console.error('❌ Domain setup process error:', error);
    }
}

async function executeDomainSetup(projectData, projectRef) {
    console.log('✅ All prerequisites met. Starting domain setup...');

    const domainResult = await setupDomainForClient(projectData, db);

    if (domainResult.success) {
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: projectData.email,
            subject: `🌐 Domain Ready - ${projectData.selectedDomain}`,
            html: `
                
                    🌐 Your Custom Domain is Ready!
                    Great news! Your custom domain has been registered and configured:
                    
                    
                        
                            ${projectData.selectedDomain}
                        
                    
                    
                    ✅ What's been done:
                    
                        Domain registered and secured
                        DNS configured to point to your website
                        SSL certificate will be auto-provisioned
                        Custom domain linked to your site
                    
                    
                    ⏰ Timeline:
                    
                        Now: Your site is live at ${projectData.liveUrl}
                        24-48 hours: Domain fully accessible at https://${projectData.selectedDomain}
                        Renewal: ${domainResult.renewalDate.toLocaleDateString()} ($${domainResult.renewalPrice}/year)
                    
                    
                    
                        💡 Important: We'll send you a reminder 30 days before renewal. 
                        The annual renewal fee of $${domainResult.renewalPrice} will be charged automatically.
                    
                    
                    
                        
                            View Your Dashboard
                        
                    
                    
                    Questions? Call us at (415) 691-7085
                
            `
        });

        console.log('✅ Domain setup success email sent');

    } else {
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: projectData.email,
            subject: `⚠️ Domain Setup in Progress - ${projectData.selectedDomain}`,
            html: `
                
                    ⚠️ Domain Being Configured
                    Your domain ${projectData.selectedDomain} is being set up.
                    
                    Due to a technical issue, we're configuring your domain manually. 
                    This typically takes 2-4 hours during business hours.
                    
                    Your website is already live at:
                    ${projectData.liveUrl}
                    
                    We'll send you another email once your custom domain is fully ready.
                    
                    Questions? Call us at (415) 691-7085
                
            `
        });

        console.log('⚠️ Domain setup failure email sent to client');
        await notifyDomainSetupFailure(projectData, domainResult.error);
    }
}

async function notifyDomainSetupFailure(projectData, errorMessage = 'Unknown error') {
    try {
        await transporter.sendMail({
            from: `"HolySmokas System" <${process.env.SMTP_USER}>`,
            to: process.env.DOMAIN_REGISTRANT_EMAIL || 'holysmokasthatscheap@gmail.com',
            subject: `⚠️ MANUAL DOMAIN SETUP REQUIRED - ${projectData.selectedDomain}`,
            html: `
                ⚠️ Automated Domain Setup Failed
                Action Required: Manual domain setup needed
                
                Domain Information:
                
                    Domain: ${projectData.selectedDomain}
                    Client: ${projectData.email}
                    Business: ${projectData.businessName}
                    Project ID: ${projectData.projectId}
                    Repository: ${projectData.repoName || 'NOT FOUND'}
                
                
                Error:
                
                    ${errorMessage}
                
                
                Manual Setup Steps:
                
                    Log into Namecheap
                    Register domain: ${projectData.selectedDomain}
                    Configure DNS
                    Add CNAME file to repo
                
            `
        });
        console.log('📧 Failure notification sent to admin');
    } catch (emailErr) {
        console.error('❌ Could not send failure notification:', emailErr);
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
            selectedDomain: formData.selectedDomain
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
                                <a href="${process.env.SITE_URL || 'https://holysmokas.com'}/frontend/pages/login.html" 
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
                                <a href="${process.env.SITE_URL || 'https://holysmokas.com'}/frontend/pages/login.html" 
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
        console.log(`📂 Fetching projects for user: ${userId}`);

        // ✅ Get user's email to match unclaimed projects
        const userDoc = await admin.auth().getUser(userId);
        const userEmail = userDoc.email;
        console.log(`📧 User email: ${userEmail}`);

        // ✅ Find projects in two ways:
        // 1. Already claimed (has userId)
        // 2. Unclaimed but matches email
        const [claimedProjects, unclaimedProjects] = await Promise.all([
            db.collection('projects').where('userId', '==', userId).get(),
            db.collection('projects')
                .where('email', '==', userEmail)
                .get()
        ]);

        const projects = [];
        const batch = db.batch();
        const claimedIds = new Set();

        // Add already claimed projects
        claimedProjects.forEach(doc => {
            claimedIds.add(doc.id);
            const data = doc.data();
            projects.push({
                id: doc.id,
                ...data,
                createdAt: data.createdAt ? {
                    seconds: data.createdAt.seconds || data.createdAt._seconds
                } : { seconds: Date.now() / 1000 }
            });
        });

        // Add unclaimed projects and claim them
        unclaimedProjects.forEach(doc => {
            const data = doc.data();

            // Skip if already in claimed list
            if (claimedIds.has(doc.id)) return;

            // Only claim if userId is null or missing
            if (!data.userId) {
                console.log(`🔗 Auto-claiming project: ${data.businessName}`);
                batch.update(doc.ref, {
                    userId: userId,
                    claimedAt: admin.firestore.FieldValue.serverTimestamp()
                });
            }

            projects.push({
                id: doc.id,
                ...data,
                userId: userId, // Update for immediate display
                createdAt: data.createdAt ? {
                    seconds: data.createdAt.seconds || data.createdAt._seconds
                } : { seconds: Date.now() / 1000 }
            });
        });

        // Commit the claims
        if (unclaimedProjects.size > 0) {
            await batch.commit();
            console.log(`✅ Auto-claimed ${unclaimedProjects.size} project(s)`);
        }

        console.log(`✅ Returning ${projects.length} total project(s)`);
        res.json({ success: true, projects });

    } catch (error) {
        console.error('❌ Error fetching projects:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.post('/request-modification', async (req, res) => {
    console.log('\n🔥🔥🔥 /request-modification ENDPOINT HIT 🔥🔥🔥');
    console.log('📦 Full request body:', JSON.stringify(req.body, null, 2));

    try {
        const { userId, projectId, modificationRequest } = req.body;

        // Detailed validation
        if (!userId || !projectId || !modificationRequest) {
            console.error('❌ VALIDATION FAILED - Missing fields:', {
                hasUserId: !!userId,
                hasProjectId: !!projectId,
                hasModificationRequest: !!modificationRequest
            });
            return res.status(400).json({
                success: false,
                error: 'Missing required fields',
                received: { userId: !!userId, projectId: !!projectId, modificationRequest: !!modificationRequest }
            });
        }

        console.log(`\n🔍 Processing modification:`);
        console.log(`  User ID: ${userId}`);
        console.log(`  Project ID: ${projectId}`);
        console.log(`  Request: ${modificationRequest}`);

        // Get user info
        console.log('\n👤 Fetching user from Firebase Auth...');
        const userRecord = await admin.auth().getUser(userId);
        console.log(`✅ User found: ${userRecord.email}`);

        // Get project
        console.log('\n📂 Fetching project from Firestore...');
        const projectRef = db.collection('projects').doc(projectId);
        const projectDoc = await projectRef.get();

        if (!projectDoc.exists) {
            console.error('❌ Project not found:', projectId);
            return res.status(404).json({ success: false, error: 'Project not found' });
        }

        const project = projectDoc.data();
        console.log('✅ Project found:', project.businessName);
        console.log('📊 Project details:', {
            businessName: project.businessName,
            repoName: project.repoName || 'MISSING!',
            liveUrl: project.liveUrl,
            packageType: project.packageType,
            modificationsUsed: project.modificationsUsed,
            modificationsLimit: project.modificationsLimit
        });

        // CRITICAL CHECK: Verify repoName exists
        if (!project.repoName) {
            console.error('❌ CRITICAL: Project missing repoName field!');
            return res.status(500).json({
                success: false,
                error: 'Project is missing repository information. Please contact support.'
            });
        }

        // Check modification limits
        const modsUsed = project.modificationsUsed || 0;
        const modsLimit = project.modificationsLimit || 3;
        const modsRemaining = modsLimit - modsUsed;

        console.log(`\n📊 Modification limits:`);
        console.log(`  Used: ${modsUsed}/${modsLimit}`);
        console.log(`  Remaining: ${modsRemaining}`);

        if (modsUsed >= modsLimit) {
            console.warn('⚠️ Modification limit reached');
            return res.status(403).json({
                success: false,
                error: 'Modification limit reached. Please purchase additional modifications.',
                modificationsRemaining: 0
            });
        }

        // Create modification entry
        const modificationEntry = {
            request: modificationRequest,
            status: 'pending',
            timestamp: new Date().toISOString(),
            userEmail: userRecord.email,
            userName: userRecord.displayName || userRecord.email,
            userId: userId
        };

        const modifications = project.modifications || [];
        const modificationIndex = modifications.length;
        modifications.push(modificationEntry);

        // Update Firestore
        console.log('\n💾 Updating Firestore...');
        await projectRef.update({
            modifications: modifications,
            modificationsUsed: modsUsed + 1,
            lastModified: new Date().toISOString(),
            status: 'modifying'
        });
        console.log('✅ Firestore updated successfully');

        // Send immediate success response
        console.log('\n📤 Sending success response to client...');
        res.json({
            success: true,
            modificationsRemaining: modsLimit - (modsUsed + 1),
            message: 'Modification request submitted successfully'
        });
        console.log('✅ Response sent to client');

        // Trigger background process
        console.log('\n🚀 Triggering background modification process...');
        console.log(`  Modification index: ${modificationIndex}`);

        setImmediate(() => {
            console.log('\n🎬 BACKGROUND PROCESS STARTING NOW');
            processModificationInBackground(projectId, project, modificationRequest, modificationIndex)
                .then(() => {
                    console.log('✅✅✅ Background modification completed successfully');
                })
                .catch(err => {
                    console.error('❌❌❌ Background modification failed:', err);
                    console.error('Stack:', err.stack);
                });
        });

        console.log('✅ Background process scheduled\n');

    } catch (error) {
        console.error('\n❌❌❌ ERROR IN /request-modification ENDPOINT');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        res.status(500).json({
            success: false,
            error: error.message || 'Failed to process modification request',
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// ============================================
// SUPPORT REQUEST ENDPOINT
// ============================================
app.post('/support-request', async (req, res) => {
    console.log('\n📧📧📧 /support-request ENDPOINT HIT 📧📧📧');
    console.log('Request body:', JSON.stringify(req.body, null, 2));

    try {
        const { userId, userEmail, subject, message, userName, timestamp } = req.body;

        if (!userEmail || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields: userEmail, subject, or message'
            });
        }

        // Configure email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                    .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 5px; }
                    .field-label { font-weight: 700; color: #667eea; margin-bottom: 5px; }
                    .field-value { color: #333; }
                    .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 0.9em; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin: 0;">🔔 Support Request</h1>
                        <p style="margin: 10px 0 0 0;">Holy Smokas Client Dashboard</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">From:</div>
                            <div class="field-value">${userName || 'Unknown'} (${userEmail})</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">Subject:</div>
                            <div class="field-value">${subject}</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">Message:</div>
                            <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">User ID:</div>
                            <div class="field-value">${userId || 'N/A'}</div>
                        </div>
                        
                        <div class="field">
                            <div class="field-label">Timestamp:</div>
                            <div class="field-value">${timestamp || new Date().toISOString()}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>Respond directly to: <strong>${userEmail}</strong></p>
                        <p>Holy Smokas - That's Cheap! 🔥</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email to support
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'holysmokasthatscheap@gmail.com',
            replyTo: userEmail,
            subject: `🔔 Support Request: ${subject}`,
            html: emailHtml
        });

        console.log('✅ Support email sent successfully!');
        console.log('   Message ID:', info.messageId);
        console.log('   To:', 'holysmokasthatscheap@gmail.com');
        console.log('   From:', userEmail);
        console.log('   Subject:', subject);

        res.json({
            success: true,
            message: 'Support request sent successfully',
            messageId: info.messageId
        });

    } catch (error) {
        console.error('❌ Error sending support request:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to send support request'
        });
    }
});

// ✅ NEW FUNCTION: Process modification in background
async function processModificationInBackground(projectId, project, modificationRequest, modificationIndex) {
    console.log('\n🎨🎨🎨 PROCESS MODIFICATION IN BACKGROUND STARTED 🎨🎨🎨');
    console.log('📋 Parameters:');
    console.log(`  projectId: ${projectId}`);
    console.log(`  businessName: ${project.businessName}`);
    console.log(`  repoName: ${project.repoName}`);
    console.log(`  modificationRequest: ${modificationRequest}`);
    console.log(`  modificationIndex: ${modificationIndex}`);

    try {
        const projectRef = db.collection('projects').doc(projectId);

        // Verify repoName exists
        if (!project.repoName) {
            throw new Error('Project missing repoName - cannot modify repository');
        }

        // Setup GitHub API
        console.log('\n🔧 Setting up GitHub API...');
        const octokit = new Octokit({ auth: process.env.GIT_TOKEN });
        const owner = process.env.GIT_USERNAME;
        const repo = project.repoName;

        console.log(`  Owner: ${owner}`);
        console.log(`  Repo: ${repo}`);
        console.log(`  Token: ${process.env.GIT_TOKEN ? 'Present ✅' : 'MISSING ❌'}`);

        // Get branch reference
        console.log('\n📂 Fetching branch reference...');
        let branchRef = 'heads/main';
        let latestCommitSha;

        try {
            const { data: refData } = await octokit.git.getRef({
                owner,
                repo,
                ref: branchRef
            });
            latestCommitSha = refData.object.sha;
            console.log(`✅ Found main branch, commit SHA: ${latestCommitSha.substring(0, 10)}...`);
        } catch (refErr) {
            console.log('⚠️ main branch not found, trying master...');
            branchRef = 'heads/master';
            const { data: refData } = await octokit.git.getRef({
                owner,
                repo,
                ref: branchRef
            });
            latestCommitSha = refData.object.sha;
            console.log(`✅ Found master branch, commit SHA: ${latestCommitSha.substring(0, 10)}...`);
        }

        // Get commit and tree
        console.log('\n🌳 Fetching repository tree...');
        const { data: commitData } = await octokit.git.getCommit({
            owner,
            repo,
            commit_sha: latestCommitSha
        });
        const treeSha = commitData.tree.sha;
        console.log(`✅ Tree SHA: ${treeSha.substring(0, 10)}...`);

        const { data: tree } = await octokit.git.getTree({
            owner,
            repo,
            tree_sha: treeSha,
            recursive: '1'
        });
        console.log(`✅ Fetched tree with ${tree.tree.length} items`);

        // Download current files
        console.log('\n📥 Downloading current files...');
        const currentFiles = {};
        let downloadedCount = 0;

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
                    downloadedCount++;
                    if (downloadedCount <= 5 || downloadedCount % 10 === 0) {
                        console.log(`  ✅ [${downloadedCount}] ${item.path}`);
                    }
                } catch (err) {
                    console.warn(`  ⚠️ Could not fetch ${item.path}:`, err.message);
                }
            }
        }
        console.log(`\n✅ Downloaded ${downloadedCount} files total`);

        if (downloadedCount === 0) {
            throw new Error('No files were downloaded from repository');
        }

        // Generate AI modifications
        console.log('\n🤖 Calling AI to generate modifications...');
        console.log(`  Files provided: ${Object.keys(currentFiles).length}`);
        console.log(`  Request: "${modificationRequest}"`);

        const updatedCode = await generateModification({
            currentFiles,
            modificationRequest,
            projectName: project.businessName,
            category: project.packageType || project.package
        });

        console.log(`✅ AI response received (${updatedCode.length} characters)`);

        // Parse AI response
        console.log('\n🔍 Parsing AI response...');
        const parsedFiles = parseCodeBlocks(updatedCode);
        console.log(`✅ Parsed ${parsedFiles.length} modified files:`);
        parsedFiles.forEach((file, i) => {
            console.log(`  ${i + 1}. ${file.path} (${file.content.length} chars)`);
        });

        if (parsedFiles.length === 0) {
            throw new Error('AI did not generate any file modifications');
        }

        // Create blobs
        console.log('\n📝 Creating Git blobs...');
        const blobs = [];
        for (let i = 0; i < parsedFiles.length; i++) {
            const file = parsedFiles[i];
            console.log(`  Creating blob ${i + 1}/${parsedFiles.length}: ${file.path}`);

            const { data: blob } = await octokit.git.createBlob({
                owner,
                repo,
                content: Buffer.from(file.content).toString('base64'),
                encoding: 'base64'
            });

            blobs.push({
                path: file.path,
                mode: '100644',
                type: 'blob',
                sha: blob.sha
            });
            console.log(`  ✅ Blob created: ${blob.sha.substring(0, 10)}...`);
        }

        // Create tree
        console.log('\n🌳 Creating new Git tree...');
        const { data: newTree } = await octokit.git.createTree({
            owner,
            repo,
            tree: blobs,
            base_tree: treeSha
        });
        console.log(`✅ New tree created: ${newTree.sha.substring(0, 10)}...`);

        // Create commit
        console.log('\n💾 Creating Git commit...');
        const commitMessage = `🔧 AI Modification: ${modificationRequest.substring(0, 50)}${modificationRequest.length > 50 ? '...' : ''}`;
        console.log(`  Message: "${commitMessage}"`);

        const { data: newCommit } = await octokit.git.createCommit({
            owner,
            repo,
            message: commitMessage,
            tree: newTree.sha,
            parents: [latestCommitSha]
        });
        console.log(`✅ Commit created: ${newCommit.sha.substring(0, 10)}...`);

        // Update branch
        console.log('\n🔄 Updating branch reference...');
        await octokit.git.updateRef({
            owner,
            repo,
            ref: branchRef,
            sha: newCommit.sha,
            force: false
        });
        console.log('✅ Branch updated successfully');
        console.log('🌐 GitHub Pages will rebuild automatically in 2-5 minutes');

        // Update Firestore
        console.log('\n💾 Updating Firestore with completion status...');
        const modifications = project.modifications || [];
        modifications[modificationIndex].status = 'completed';
        modifications[modificationIndex].completedAt = new Date().toISOString();
        modifications[modificationIndex].commitSha = newCommit.sha;

        await projectRef.update({
            modifications: modifications,
            status: 'live',
            lastModifiedAt: new Date().toISOString(),
            lastCommitSha: newCommit.sha
        });
        console.log('✅ Firestore updated with completion');

        // Send email
        console.log('\n📧 Sending completion email...');
        await transporter.sendMail({
            from: `"Holy Smokas" <${process.env.SMTP_USER}>`,
            to: project.email,
            subject: `✅ ${project.businessName} - Modification Complete!`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #6366f1;">✅ Your Modification is Live!</h2>
                    <p>Great news! Your modification request has been completed:</p>
                    <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <strong>Request:</strong> ${modificationRequest}
                    </div>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${project.liveUrl}" 
                           style="background: #6366f1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                            View Your Updated Site
                        </a>
                    </div>
                    <p style="color: #6b7280; font-size: 14px;">
                        Note: GitHub Pages may take 2-5 minutes to rebuild and show your changes.
                    </p>
                    <p>Modifications remaining: <strong>${(project.modificationsLimit || 3) - (project.modificationsUsed || 0)}</strong></p>
                    <p style="margin-top: 30px;">Best regards,<br>The HolySmokas Team</p>
                </div>
            `
        });
        console.log('✅ Completion email sent');

        console.log('\n🎉🎉🎉 MODIFICATION PROCESS COMPLETE 🎉🎉🎉\n');

    } catch (error) {
        console.error('\n❌❌❌ MODIFICATION PROCESS FAILED ❌❌❌');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        // Update Firestore with failure
        try {
            const projectRef = db.collection('projects').doc(projectId);
            const projectDoc = await projectRef.get();
            const modifications = projectDoc.data().modifications || [];

            if (modifications[modificationIndex]) {
                modifications[modificationIndex].status = 'failed';
                modifications[modificationIndex].error = error.message;
                modifications[modificationIndex].failedAt = new Date().toISOString();

                await projectRef.update({
                    modifications: modifications,
                    status: 'live'
                });
                console.log('✅ Failure status saved to Firestore');
            }
        } catch (updateErr) {
            console.error('❌ Could not update failure status:', updateErr);
        }

        // Send failure email
        try {
            await transporter.sendMail({
                from: `"Holy Smokas" <${process.env.SMTP_USER}>`,
                to: project.email,
                subject: `❌ Modification Failed - ${project.businessName}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #dc2626;">❌ Modification Failed</h2>
                        <p>We encountered an error processing your modification request:</p>
                        <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0; color: #991b1b;">
                            <strong>Request:</strong> ${modificationRequest}<br>
                            <strong>Error:</strong> ${error.message}
                        </div>
                        <p>Please contact us at <strong>(415) 691-7085</strong> and we'll fix this right away!</p>
                        <p style="margin-top: 30px;">Best regards,<br>The HolySmokas Team</p>
                    </div>
                `
            });
            console.log('✅ Failure email sent');
        } catch (emailErr) {
            console.error('❌ Could not send failure email:', emailErr.message);
        }
    }
}


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

// ============================================
// CRON JOB: Daily renewal checker
// ============================================
console.log('⏰ Setting up renewal checker cron job...');

// Runs every day at 9:00 AM Pacific Time
cron.schedule('0 9 * * *', async () => {
    console.log('\n🔔 CRON: Running daily domain renewal check...');
    try {
        const result = await checkDomainRenewals(db);
        if (result.success) {
            console.log(`✅ Renewal check complete: ${result.reminded} reminders sent`);
        } else {
            console.error('❌ Renewal check failed:', result.error);
        }
    } catch (error) {
        console.error('❌ Cron job error:', error);
    }
}, {
    scheduled: true,
    timezone: "America/Los_Angeles"
});

console.log('✅ Cron job scheduled: Daily at 9:00 AM Pacific Time');

// ============================================
// TEST ENDPOINT: Create test renewal record
// ============================================
app.get('/create-test-renewal', async (req, res) => {
    console.log('\n🧪 Creating test renewal record...');

    try {
        // Create a domain that "expires" in 30 days
        const renewalDate = new Date();
        renewalDate.setDate(renewalDate.getDate() + 30);

        const testRenewal = {
            domain: 'testdomain.com',
            domainID: 'test-' + Date.now(),
            projectId: 'test-project-' + Date.now(),
            clientEmail: 'milani.babak@gmail.com', // Change to your email
            clientBusinessName: 'Test Business Inc',
            registeredDate: new Date(),
            renewalDate: renewalDate,
            renewalPrice: 14.99,
            autoRenew: false,
            renewalNotificationSent: false,
            status: 'active'
        };

        const docRef = await db.collection('domainRenewals').add(testRenewal);

        console.log('✅ Test renewal created:', docRef.id);
        console.log('   Domain:', testRenewal.domain);
        console.log('   Expires:', renewalDate.toLocaleDateString());
        console.log('   Email:', testRenewal.clientEmail);

        res.json({
            success: true,
            renewalId: docRef.id,
            message: 'Test renewal created successfully',
            data: {
                domain: testRenewal.domain,
                expiresOn: renewalDate.toLocaleDateString(),
                email: testRenewal.clientEmail,
                nextStep: 'Visit /check-renewals-now to trigger the reminder'
            }
        });
    } catch (error) {
        console.error('❌ Error creating test renewal:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// TEST ENDPOINT: Manual renewal check trigger
// ============================================
app.get('/check-renewals-now', async (req, res) => {
    console.log('\n🔧 Manual renewal check triggered...');

    try {
        const result = await checkDomainRenewals(db);

        if (result.success) {
            res.json({
                success: true,
                message: 'Renewal check completed',
                reminded: result.reminded || 0,
                failed: result.failed || 0,
                details: result.reminded > 0
                    ? `Successfully sent ${result.reminded} renewal reminder(s)`
                    : 'No domains need reminders today'
            });
        } else {
            res.status(500).json({
                success: false,
                error: result.error || 'Unknown error'
            });
        }
    } catch (error) {
        console.error('❌ Manual check failed:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// CUSTOM TEST ENDPOINT: Flexible testing scenarios
// ============================================
app.get('/create-custom-test-renewal', async (req, res) => {
    console.log('\n🧪 Creating CUSTOM test renewal record...');

    try {
        const daysUntilExpiry = parseInt(req.query.days) || 30;
        const domain = req.query.domain || `custom-${Date.now()}.com`;
        const status = req.query.status || 'active';
        const price = parseFloat(req.query.price) || 14.99;

        // Calculate renewal date based on daysUntilExpiry
        const renewalDate = new Date();
        renewalDate.setDate(renewalDate.getDate() + daysUntilExpiry);

        const testRenewal = {
            domain: domain,
            domainID: 'test-' + Date.now(),
            projectId: 'test-project-' + Date.now(),
            clientEmail: req.query.email || 'milani.babak@gmail.com',
            clientBusinessName: 'Custom Test Business',
            registeredDate: new Date(),
            renewalDate: renewalDate,
            renewalPrice: price,
            autoRenew: false,
            renewalNotificationSent: false,
            status: status
        };

        const docRef = await db.collection('domainRenewals').add(testRenewal);

        console.log('✅ Custom test renewal created:', docRef.id);
        console.log('   Domain:', testRenewal.domain);
        console.log('   Expires in:', daysUntilExpiry, 'days');
        console.log('   Status:', testRenewal.status);

        res.json({
            success: true,
            renewalId: docRef.id,
            message: 'Custom test renewal created',
            data: {
                domain: testRenewal.domain,
                expiresOn: renewalDate.toLocaleDateString(),
                daysUntilExpiry: daysUntilExpiry,
                status: testRenewal.status,
                willGetReminder: daysUntilExpiry <= 30 && status !== 'expired'
            },
            usage: 'Add ?days=25&domain=test.com&status=active&price=14.99'
        });
    } catch (error) {
        console.error('❌ Error creating custom test renewal:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// TEST ENDPOINT: Test email sending
// ============================================
app.get('/test-email', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        await transporter.verify();

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'milani.babak@gmail.com',
            subject: '🧪 HolySmokas Email Test',
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
                    <div style="background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
                        <h1 style="color: #10b981;">✅ Email Test Successful!</h1>
                        <p>Your SMTP configuration is working correctly.</p>
                        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
                        <p style="color: #6b7280; font-size: 14px;">
                            This is a test email from your Holy Smokas renewal system.
                        </p>
                    </div>
                </div>
            `
        });

        res.json({
            success: true,
            message: 'Test email sent successfully to milani.babak@gmail.com',
            details: {
                smtp: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                from: process.env.SMTP_USER
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            details: 'Check your SMTP credentials in .env file',
            help: 'Make sure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS are set'
        });
    }
});

// ============================================
// ADMIN ENDPOINT: Renewal statistics
// ============================================
app.get('/admin/renewal-stats', async (req, res) => {
    try {
        const now = new Date();
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

        // Get all active renewals
        const activeSnapshot = await db.collection('domainRenewals')
            .where('status', '==', 'active')
            .get();

        let totalActive = 0;
        let expiringThisMonth = 0;
        let expiringThisWeek = 0;
        let needingAttention = 0;
        let totalRevenue = 0;

        activeSnapshot.forEach(doc => {
            const data = doc.data();
            const renewalDate = data.renewalDate?.toDate();

            totalActive++;

            if (renewalDate) {
                if (renewalDate <= oneMonthFromNow) {
                    expiringThisMonth++;
                    totalRevenue += data.renewalPrice || 14.99;
                }
                if (renewalDate <= oneWeekFromNow) {
                    expiringThisWeek++;
                }
                if (renewalDate <= now) {
                    needingAttention++;
                }
            }
        });

        res.json({
            success: true,
            stats: {
                totalActive,
                expiringThisMonth,
                expiringThisWeek,
                needingAttention,
                projectedRevenueThisMonth: `$${totalRevenue.toFixed(2)}`
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// ADMIN ENDPOINT: Clear test renewals  
// ============================================
app.delete('/admin/clear-test-renewals', async (req, res) => {
    try {
        const testDomainsSnapshot = await db.collection('domainRenewals')
            .where('domainID', '>=', 'test-')
            .where('domainID', '<', 'test-~')
            .get();

        const batch = db.batch();
        let deleteCount = 0;

        testDomainsSnapshot.forEach(doc => {
            batch.delete(doc.ref);
            deleteCount++;
        });

        await batch.commit();

        console.log('🗑️  Deleted', deleteCount, 'test renewals');

        res.json({
            success: true,
            message: `Deleted ${deleteCount} test renewal records`,
            deletedCount: deleteCount
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// ADMIN ENDPOINT: View all renewals
// ============================================
app.get('/admin/renewals', async (req, res) => {
    try {
        const renewalsSnapshot = await db.collection('domainRenewals')
            .orderBy('renewalDate', 'asc')
            .get();

        const renewals = [];
        renewalsSnapshot.forEach(doc => {
            const data = doc.data();
            renewals.push({
                id: doc.id,
                domain: data.domain,
                clientEmail: data.clientEmail,
                clientBusinessName: data.clientBusinessName,
                renewalDate: data.renewalDate.toDate(),
                renewalPrice: data.renewalPrice,
                status: data.status,
                notificationSent: data.renewalNotificationSent || false
            });
        });

        res.json({
            success: true,
            count: renewals.length,
            renewals: renewals
        });
    } catch (error) {
        console.error('❌ Error fetching renewals:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// ADMIN ENDPOINT: Manual renewal override
// ============================================
app.post('/admin/manual-renew/:renewalId', async (req, res) => {
    console.log('\n🔧 Manual renewal override requested...');

    try {
        const { renewalId } = req.params;
        const renewalRef = db.collection('domainRenewals').doc(renewalId);
        const renewalDoc = await renewalRef.get();

        if (!renewalDoc.exists) {
            return res.status(404).json({
                success: false,
                error: 'Renewal record not found'
            });
        }

        const renewal = renewalDoc.data();
        const newRenewalDate = new Date(renewal.renewalDate.toDate());
        newRenewalDate.setFullYear(newRenewalDate.getFullYear() + 1);

        await renewalRef.update({
            renewalDate: newRenewalDate,
            status: 'paid',
            paidAt: new Date(),
            paymentMethod: 'manual_override',
            renewalNotificationSent: false,
            lastManualRenewalBy: 'admin',
            lastManualRenewalAt: new Date()
        });

        console.log('✅ Domain manually renewed');
        console.log('   Domain:', renewal.domain);
        console.log('   New expiry:', newRenewalDate.toLocaleDateString());

        res.json({
            success: true,
            message: 'Domain manually renewed for 1 year',
            domain: renewal.domain,
            oldExpiryDate: renewal.renewalDate.toDate().toLocaleDateString(),
            newExpiryDate: newRenewalDate.toLocaleDateString()
        });
    } catch (error) {
        console.error('❌ Manual renewal failed:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () =>
    console.log(`🔥 HolySmokas backend running at http://0.0.0.0:${PORT}`)
);

app.post('/test-domain-setup', async (req, res) => {
    console.log('\n🧪🧪🧪 DOMAIN SETUP TEST MODE 🧪🧪🧪\n');

    try {
        const testDomain = req.body.domain || 'testdomain.xyz';

        // Create fake project data
        const testProjectData = {
            projectId: 'test-' + Date.now(),
            selectedDomain: testDomain,
            email: req.body.email || 'test@example.com',
            businessName: req.body.businessName || 'Test Business',
            repoName: req.body.repoName || 'test-repo-' + Date.now(),
            domainPricing: {
                initialCost: 1.99,
                renewalCost: 14.99
            },
            packageType: 'Starter Website - $599',
            liveUrl: `https://${process.env.GIT_USERNAME}.github.io/test-repo`,
            package: 'Starter Website - $599'
        };

        console.log('📋 Test Project Data:');
        console.log(JSON.stringify(testProjectData, null, 2));
        console.log('\n🔄 Starting domain setup workflow...\n');

        // Call the domain setup function
        const result = await setupDomainForClient(testProjectData, db);

        console.log('\n📊 TEST RESULT:');
        console.log(JSON.stringify(result, null, 2));

        res.json({
            success: true,
            testMode: true,
            message: 'Domain setup test completed',
            result: result,
            note: 'Check server logs for detailed output'
        });

    } catch (error) {
        console.error('\n❌ TEST FAILED:', error.message);
        console.error('Stack:', error.stack);

        res.status(500).json({
            success: false,
            testMode: true,
            error: error.message,
            stack: error.stack
        });
    }
});