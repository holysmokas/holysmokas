// backend/server.js
import axios from "axios";
import xml2js from "xml2js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { deployProject } from "./deployProject.js";

dotenv.config({ path: "backend/.env" });

const app = express();
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

// Helper function to clean domain name
function cleanDomainName(domain) {
    let cleaned = domain.replace(/^https?:\/\//, '');
    cleaned = cleaned.replace(/^www\./, '');
    cleaned = cleaned.split('/')[0];
    cleaned = cleaned.trim();
    return cleaned;
}

// ✅ Check domain availability via Namecheap API
app.post("/check-domain", async (req, res) => {
    const { domain } = req.body;

    if (!domain) {
        return res.status(400).json({ available: false, error: "No domain provided" });
    }

    try {
        const cleanedDomain = cleanDomainName(domain);
        console.log("🔍 Checking domain:", cleanedDomain);

        const url = `${process.env.NAMECHEAP_API_URL}?ApiUser=${process.env.NAMECHEAP_API_USER}&ApiKey=${process.env.NAMECHEAP_API_KEY}&UserName=${process.env.NAMECHEAP_API_USER}&ClientIp=${process.env.NAMECHEAP_CLIENT_IP}&Command=namecheap.domains.check&DomainList=${cleanedDomain}`;

        const response = await axios.get(url);
        const parsed = await xml2js.parseStringPromise(response.data);

        if (parsed.ApiResponse.$.Status !== 'OK') {
            const errors = parsed.ApiResponse.Errors?.[0]?.Error || [];
            const errorMsg = errors.length > 0 ? errors[0]._ : 'Unknown API error';
            throw new Error(`Namecheap API error: ${errorMsg}`);
        }

        const commandResponse = parsed.ApiResponse.CommandResponse?.[0];
        const domainCheckResult = commandResponse?.DomainCheckResult?.[0];

        if (!domainCheckResult) {
            throw new Error("Invalid API response structure");
        }

        const available = domainCheckResult.$.Available === "true";
        const domainName = domainCheckResult.$.Domain;

        console.log(`✅ Domain ${domainName} available: ${available}`);

        res.json({
            available,
            domain: domainName,
            cleanedDomain: cleanedDomain
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

// ✅ Instant response with background processing
app.post("/submit-contact", async (req, res) => {
    try {
        const formData = req.body;
        console.log("📋 New contact form submission received:", formData.businessName);

        // 1️⃣ Send notification email immediately
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

        // 2️⃣ Respond immediately to user
        res.json({
            success: true,
            message: "Form received! We're generating your website now. You'll receive updates via email.",
        });

        // 3️⃣ Process in background (don't await)
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

// ✅ Background processing function
async function processDeploymentInBackground(formData) {
    try {
        console.log("🎨 Generating AI website for:", formData.businessName);

        // Deploy to GitHub - passing the correct structure
        console.log("🚀 Starting deployment...");
        const deployResult = await deployProject({
            name: formData.businessName,           // Used for project name
            description: formData.mainGoal,        // Used for AI generation
            category: formData.package,            // Used for AI generation
            email: formData.email,                 // For completion email
        });

        console.log("✅ Deployment complete:", deployResult);

        if (!deployResult || !deployResult.success) {
            throw new Error(deployResult?.error || "Deployment failed");
        }

        // Send completion email
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: formData.email,
            subject: `Your Website is Ready! - ${formData.businessName}`,
            html: `
                <h2>Your Website is Live! 🎉</h2>
                <p>Hi ${formData.name},</p>
                <p>Great news! Your website for <strong>${formData.businessName}</strong> has been generated and deployed.</p>
                
                <h3>Your Links:</h3>
                <ul>
                    <li><strong>Live Website:</strong> <a href="${deployResult.pagesUrl}">${deployResult.pagesUrl}</a></li>
                    <li><strong>GitHub Repository:</strong> <a href="${deployResult.repoUrl}">${deployResult.repoUrl}</a></li>
                </ul>
                
                <p>The website will be fully accessible within 5-10 minutes as GitHub Pages builds and activates.</p>
                
                <p><strong>Note:</strong> This is a React + Vite project. To run locally, clone the repo and run <code>npm install && npm run dev</code></p>
                
                <p>Best regards,<br>The HolySmokas Team</p>
            `,
        });

        console.log("📧 Completion email sent to:", formData.email);

    } catch (error) {
        console.error("❌ Background processing failed:", error);

        // Send error notification
        await transporter.sendMail({
            from: `"HolySmokas" <${process.env.SMTP_USER}>`,
            to: "holysmokasthatscheap@gmail.com",
            subject: `Deployment Failed - ${formData.businessName}`,
            text: `Deployment failed for ${formData.businessName}\n\nError: ${error.message}\n\nStack: ${error.stack}`,
        });
    }
}

// ✅ Health check route
app.get("/", (req, res) => {
    res.send("🚀 HolySmokas backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
    console.log(`🔥 HolySmokas backend running at http://localhost:${PORT}`)
);