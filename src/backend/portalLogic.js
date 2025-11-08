// ✅ UPDATED: Handles contact form submission + auto deployment
import { auth } from "./firebase.js";

const FORM_URL =
    "https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec"; // ⬅️ your Google Apps Script Web App URL
const DEPLOY_URL = "http://localhost:8080/deploy"; // ⬅️ your backend server endpoint

// Handle form submission
export async function submitContactForm(formData) {
    try {
        const { name, email, businessName, phone, package: pkg, timeline, referenceWebsite, mainGoal, mustHaveFeatures, currentUrl } = formData;

        if (!name || !email || !businessName) {
            return { success: false, message: "Name, Email, and Business Name are required." };
        }

        // 1️⃣ Submit to Google Sheets (Contact Submissions)
        const response = await fetch(FORM_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                businessName,
                phone,
                package: pkg,
                timeline,
                referenceWebsite,
                mainGoal,
                mustHaveFeatures,
                currentUrl,
            }),
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to submit contact form.");
        }

        console.log("✅ Form submitted to Google Sheets:", result);

        // 2️⃣ Trigger automated deployment
        try {
            const deployResponse = await fetch(DEPLOY_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    businessName,
                    theme: "smallShop",
                }),
            });

            const deployResult = await deployResponse.json();

            if (deployResult.success) {
                console.log("🚀 Deployment complete:", deployResult);
            } else {
                console.warn("⚠️ Deployment failed:", deployResult.error);
            }
        } catch (deployErr) {
            console.error("❌ Deployment trigger failed:", deployErr);
        }

        // ✅ Everything done
        return { success: true, message: "Form submitted and deployment triggered successfully." };

    } catch (error) {
        console.error("❌ Error submitting contact form:", error);
        return { success: false, message: error.message };
    }
}
