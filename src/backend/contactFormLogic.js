import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// CONFIGURATION - Add your Google Apps Script Web App URL here
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec";

// Function to show modal
function showModal(title, message, isSuccess = true) {
    const modal = document.getElementById('formModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalIcon = document.getElementById('modalIcon');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    // Set icon based on success/error
    modalIcon.textContent = isSuccess ? '✔' : '✕';
    modalIcon.style.background = isSuccess ? 'var(--secondary)' : '#ef4444';

    modal.classList.add('show');
}

// Function to close modal
window.closeModal = function () {
    const modal = document.getElementById('formModal');
    modal.classList.remove('show');
};

// Function to send data to Google Apps Script (for email & sheets)
async function sendToGoogleScript(contactData) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Google Apps Script requires this
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData)
        });

        // Note: With no-cors mode, we can't read the response
        // but the request will still be processed by Google Apps Script
        console.log('Data sent to Google Apps Script');
        return true;
    } catch (error) {
        console.error('Error sending to Google Script:', error);
        // Don't throw error - we still want Firebase to work
        return false;
    }
}

// Helper function to clean domain name
function cleanDomainName(domain) {
    // Remove protocol (http://, https://)
    let cleaned = domain.replace(/^https?:\/\//, '');

    // Remove www. prefix
    cleaned = cleaned.replace(/^www\./, '');

    // Remove trailing slash and any path
    cleaned = cleaned.split('/')[0];

    // Remove any whitespace
    cleaned = cleaned.trim();

    return cleaned;
}

// ✅ Global checkDomain function so it can be called from HTML onclick
window.checkDomain = async function () {
    const domainInput = document.getElementById("domainInput");
    const domainResult = document.getElementById("domainResult");

    const domain = domainInput.value.trim();
    if (!domain) {
        domainResult.innerHTML = "⚠️ Please enter a domain name.";
        domainResult.style.color = "#f59e0b";
        return;
    }

    domainResult.innerHTML = "🔍 Checking availability...";
    domainResult.style.color = "#6b7280";

    try {
        const response = await fetch("http://localhost:8080/check-domain", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain }),
        });

        const data = await response.json();

        if (data.available === true) {
            const cleanedDomain = data.cleanedDomain || cleanDomainName(domain);
            domainResult.innerHTML = `
                ✅ ${cleanedDomain} is available! 
                <button type="button" class="btn btn-secondary" onclick="addDomainToForm('${cleanedDomain}')" style="margin-left: 10px; padding: 0.5rem 1rem; font-size: 0.875rem;">
                    Add to Form
                </button>
            `;
            domainResult.style.color = "#10b981";
            window.selectedDomain = cleanedDomain; // Save globally for form submission
        } else {
            const checkedDomain = data.domain || domain;
            domainResult.innerHTML = `❌ ${checkedDomain} is already taken.`;
            domainResult.style.color = "#ef4444";
            window.selectedDomain = null;
        }

    } catch (error) {
        console.error("Domain check error:", error);
        domainResult.innerHTML = "❌ Error checking domain. Please try again.";
        domainResult.style.color = "#ef4444";
    }
};

// ✅ Function to add domain to the "Current Website URL" input field
window.addDomainToForm = function (domain) {
    // Add domain to the Current Website URL field
    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) {
        currentUrlInput.value = `https://${domain}`;
        // Highlight the field briefly
        currentUrlInput.style.border = "2px solid #10b981";
        setTimeout(() => {
            currentUrlInput.style.border = "";
        }, 2000);
    }

    window.selectedDomain = domain;

    // Show confirmation
    const domainResult = document.getElementById("domainResult");
    domainResult.innerHTML = `✅ ${domain} has been added to your form!`;
    domainResult.style.color = "#10b981";

    // Scroll to form
    document.getElementById("contactForm").scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Focus on the next field (email or business name)
    setTimeout(() => {
        const businessNameInput = document.getElementById("businessName");
        if (businessNameInput && !businessNameInput.value) {
            businessNameInput.focus();
        }
    }, 500);
};

// ✅ Function to remove domain from form (optional - can be removed if not needed)
window.removeDomainFromForm = function () {
    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) {
        currentUrlInput.value = "";
    }

    window.selectedDomain = null;

    // Clear the domain input
    const domainInput = document.getElementById("domainInput");
    if (domainInput) {
        domainInput.value = "";
    }

    // Clear the result
    const domainResult = document.getElementById("domainResult");
    if (domainResult) {
        domainResult.innerHTML = "";
    }
};

window.handleContactSubmit = async function (e) {
    e.preventDefault();

    // ✅ Reference the form that triggered this event
    const form = e.target;

    // ✅ Grab ALL form field values with proper IDs
    const name = form.querySelector("#name")?.value.trim() || "";
    const email = form.querySelector("#email")?.value.trim() || "";
    const businessName = form.querySelector("#businessName")?.value.trim() || "";
    const phone = form.querySelector("#phone")?.value.trim() || "";
    const packageSelected = form.querySelector("#package")?.value.trim() || "";
    const timeline = form.querySelector("#timeline")?.value.trim() || "";
    const currentUrl = form.querySelector("#currentUrl")?.value.trim() || "";
    const referenceWebsite = form.querySelector("#referenceWebsite")?.value.trim() || "";
    const mainGoal = form.querySelector("#mainGoal")?.value.trim() || "";
    const mustHaveFeatures = form.querySelector("#mustHaveFeatures")?.value.trim() || "";

    // ✅ Build one clean data object for both backend + Google Sheets
    const contactData = {
        name,
        email,
        businessName,
        phone,
        package: packageSelected,
        timeline,
        currentUrl,
        referenceWebsite,
        mainGoal,
        mustHaveFeatures,
        selectedDomain: window.selectedDomain || "N/A",
        timestamp: new Date().toISOString(),
        status: "new"
    };

    const submitBtn = document.getElementById("submitBtn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        // ✅ Send to backend (server.js) for email
        const backendResponse = await fetch("http://localhost:8080/submit-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
        });

        const backendResult = await backendResponse.json();

        // ✅ Also send to Google Apps Script for sheets logging
        sendToGoogleScript(contactData).catch(err => {
            console.warn("⚠️ Google Script submission failed, but backend succeeded:", err);
        });

        if (backendResult.success) {
            showModal(
                "Success!",
                "Thank you for contacting us! We'll get back to you within 24 hours.",
                true
            );
            form.reset();
            window.selectedDomain = null; // clear selected domain

            // Clear domain search results
            const domainResult = document.getElementById("domainResult");
            if (domainResult) {
                domainResult.innerHTML = "";
            }
            const domainInput = document.getElementById("domainInput");
            if (domainInput) {
                domainInput.value = "";
            }
        } else {
            throw new Error(backendResult.error || "Unknown error");
        }

    } catch (error) {
        console.error("Error submitting form:", error);
        showModal(
            "Error",
            "There was an error submitting your form. Please try again later.",
            false
        );
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
};