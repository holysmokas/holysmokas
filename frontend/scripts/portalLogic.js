// portalLogic.js
import { auth } from "../../frontend/scripts/config.js";
import { ENDPOINTS } from './config.js';

export async function submitContactForm(formData) {
    try {
        const { name, email, businessName, phone, package: pkg, timeline, referenceWebsite, mainGoal, mustHaveFeatures, currentUrl } = formData;

        if (!name || !email || !businessName) {
            return { success: false, message: "Name, Email, and Business Name are required." };
        }

        const response = await fetch(ENDPOINTS.contactFormSubmission, {
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

        try {
            const deployResponse = await fetch(ENDPOINTS.deploy, {
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

        return { success: true, message: "Form submitted and deployment triggered successfully." };

    } catch (error) {
        console.error("❌ Error submitting contact form:", error);
        return { success: false, message: error.message };
    }
}