// backend/utils/sheetsLogger.js
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("backend/.env") });

const GOOGLE_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec`;

/**
 * Log a new project deployment to Google Sheets
 */
export async function logDeployment({ businessName, email, packageType, repoUrl, liveUrl, selectedDomain }) {
    try {
        const payload = {
            timestamp: new Date().toISOString(),
            businessName,
            email,
            packageType,
            repoUrl,
            liveUrl,
            selectedDomain: selectedDomain || "N/A"  // ✅ Include selectedDomain
        };

        console.log("📤 Sending to Google Sheets:", payload);

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const responseText = await response.text();
        console.log("📥 Google Sheets response:", responseText);

        if (!response.ok) {
            throw new Error(`Failed to log deployment: ${responseText}`);
        }

        console.log("📊 Logged project deployment to Google Sheet!");
    } catch (error) {
        console.error("❌ Error logging deployment:", error);
        console.error("Error details:", error.message);
    }
}