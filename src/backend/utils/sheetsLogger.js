// backend/utils/sheetsLogger.js
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("backend/.env") });

const SHEET_ID = process.env.PROJECTS_SHEET_ID; // store this in .env
const GOOGLE_SCRIPT_URL = `https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec`;

/**
 * Log a new project deployment to Google Sheets
 */
export async function logDeployment({ businessName, email, packageType, repoUrl, liveUrl }) {
    try {
        const payload = {
            timestamp: new Date().toISOString(),
            businessName,
            email,
            packageType,
            repoUrl,
            liveUrl,
        };

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Failed to log deployment");
        console.log("📝 Logged project deployment to Google Sheet!");
    } catch (error) {
        console.error("❌ Error logging deployment:", error);
    }
}
