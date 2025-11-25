// backend/utils/sheetsLogger.js
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const GOOGLE_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec`;

/**
 * Log a contact form submission to Google Sheets
 * This sends data WITHOUT liveUrl/repoUrl so the Google Apps Script
 * identifies it as a contact submission (not a deployment)
 */
export async function logContactSubmission(contactData) {
    console.log("📝 logContactSubmission() CALLED");
    console.log("📋 Contact data:", contactData);

    try {
        // Build payload that matches your Google Apps Script's logToSheet() function
        const payload = {
            timestamp: new Date().toISOString(),
            name: contactData.name || "",
            businessName: contactData.businessName || "",
            email: contactData.email || "",
            phone: contactData.phone || "",
            package: contactData.package || "",
            timeline: contactData.timeline || "",
            referenceWebsite: contactData.referenceWebsite || "",
            mainGoal: contactData.mainGoal || "",
            mustHaveFeatures: contactData.mustHaveFeatures || "",
            currentUrl: contactData.currentUrl || "",
            message: contactData.message || "",
            selectedDomain: contactData.selectedDomain || "N/A"
            // NOTE: NO liveUrl or repoUrl - this tells the Google Apps Script
            // that this is a contact submission, not a deployment
        };

        console.log("📤 Sending contact submission to Google Sheets:", JSON.stringify(payload, null, 2));
        console.log("🔗 URL:", GOOGLE_SCRIPT_URL);

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        console.log("📊 Response status:", response.status);
        const responseText = await response.text();
        console.log("📥 Google Sheets response:", responseText);

        if (!response.ok) {
            throw new Error(`Failed to log contact submission: ${response.status} - ${responseText}`);
        }

        console.log("✅ Successfully logged contact submission to Google Sheet!");
        return { success: true };

    } catch (error) {
        console.error("❌ Error logging contact submission:", error);
        console.error("❌ Error name:", error.name);
        console.error("❌ Error message:", error.message);
        console.error("❌ Error stack:", error.stack);
        return { success: false, error: error.message };
    }
}

/**
 * Log a new project deployment to Google Sheets
 * This sends data WITH liveUrl/repoUrl so the Google Apps Script
 * identifies it as a deployment (not a contact submission)
 */
export async function logDeployment({ businessName, email, packageType, repoUrl, liveUrl, selectedDomain }) {
    console.log("🎯 logDeployment() CALLED");
    console.log("📋 Payload data:", { businessName, email, packageType, repoUrl, liveUrl, selectedDomain });

    try {
        // Build payload that matches your Google Apps Script's logDeployment() function
        const payload = {
            timestamp: new Date().toISOString(),
            businessName: businessName || "",
            email: email || "",
            packageType: packageType || "",
            repoUrl: repoUrl || "",
            liveUrl: liveUrl || "",
            selectedDomain: selectedDomain || "N/A"
            // NOTE: HAS liveUrl and repoUrl - this tells the Google Apps Script
            // that this is a deployment, not a contact submission
        };

        console.log("📤 Sending to Google Sheets:", JSON.stringify(payload, null, 2));
        console.log("🔗 URL:", GOOGLE_SCRIPT_URL);

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        console.log("📊 Response status:", response.status);
        const responseText = await response.text();
        console.log("📥 Google Sheets response:", responseText);

        if (!response.ok) {
            throw new Error(`Failed to log deployment: ${response.status} - ${responseText}`);
        }

        console.log("✅ Successfully logged project deployment to Google Sheet!");
        return { success: true };

    } catch (error) {
        console.error("❌ Error logging deployment:", error);
        console.error("❌ Error name:", error.name);
        console.error("❌ Error message:", error.message);
        console.error("❌ Error stack:", error.stack);
        return { success: false, error: error.message };
    }
}