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
        const response = await fetch("https://holysmokas-backend.onrender.com/check-domain", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain }),
        });

        const data = await response.json();

        if (data.available === true) {
            const cleanedDomain = data.cleanedDomain || cleanDomainName(domain);

            // Get pricing information (default values if not provided by backend)
            const initialCost = data.pricing?.initialCost || data.price || 12.99;
            const renewalCost = data.pricing?.renewalCost || data.renewalPrice || 12.99;

            domainResult.innerHTML = `
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${cleanedDomain} is available!</strong>
                    </div>
                    
                    <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span style="color: #6b7280;">Initial Registration:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${initialCost.toFixed(2)}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: #6b7280;">Annual Renewal:</span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${renewalCost.toFixed(2)}/year</strong>
                        </div>
                    </div>
                    
                    <button 
                        type="button" 
                        class="btn btn-primary" 
                        onclick="addDomainToForm('${cleanedDomain}', ${initialCost}, ${renewalCost})" 
                        style="width: 100%; margin-top: 0.5rem;">
                        Add to Form
                    </button>
                    
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                        💡 Domain will be registered after you complete your website order
                    </p>
                </div>
            `;
            domainResult.style.color = "#10b981";
            window.selectedDomain = cleanedDomain;
            window.domainPricing = { initialCost, renewalCost };
        } else {
            const checkedDomain = data.domain || domain;
            domainResult.innerHTML = `
                <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.5rem;">❌</span>
                        <strong style="color: #991b1b;">${checkedDomain} is already taken</strong>
                    </div>
                    <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                        Try a different domain name or extension (.net, .org, .co)
                    </p>
                </div>
            `;
            domainResult.style.color = "#ef4444";
            window.selectedDomain = null;
            window.domainPricing = null;
        }

    } catch (error) {
        console.error("Domain check error:", error);
        domainResult.innerHTML = `
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⚠️</span>
                    <strong style="color: #991b1b;">Error checking domain</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please try again or contact support
                </p>
            </div>
        `;
        domainResult.style.color = "#ef4444";
    }
};

// ✅ Function to add domain to the "Current Website URL" input field
window.addDomainToForm = function (domain, initialCost = 0, renewalCost = 0) {
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
    window.domainPricing = { initialCost, renewalCost };

    // Show confirmation with pricing
    const domainResult = document.getElementById("domainResult");
    domainResult.innerHTML = `
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${domain} has been added to your form!</strong>
            </div>
            
            <div style="background: white; padding: 0.75rem; border-radius: 6px; margin-bottom: 0.75rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: #6b7280;">Initial Registration:</span>
                    <strong style="color: #059669;">$${initialCost.toFixed(2)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: #6b7280;">Annual Renewal:</span>
                    <strong style="color: #059669;">$${renewalCost.toFixed(2)}/year</strong>
                </div>
            </div>
            
            <button 
                type="button" 
                class="btn btn-secondary" 
                onclick="removeDomainFromForm()" 
                style="width: 100%; font-size: 0.875rem;">
                Remove Domain
            </button>
        </div>
    `;
    domainResult.style.color = "#10b981";

    // Update pricing breakdown
    updatePricingBreakdown();

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

// Get package price
function getPackagePrice(packageName) {
    const prices = {
        'Starter - $599 (New Website)': 599,
        'Business - $1,199 (New Website)': 1199,
        'Small Shop - $1,699 (New Website)': 1699,
        'E-Commerce/Enterprise - Custom Quote': 0,
        'Website Redesign/Updates': 0,
        'Not Sure Yet': 0
    };
    return prices[packageName] || 0;
}

// Update pricing breakdown display
function updatePricingBreakdown() {
    const packageSelect = document.getElementById("package");
    const selectedPackage = packageSelect ? packageSelect.value : '';
    const packagePrice = getPackagePrice(selectedPackage);
    const domainPrice = window.domainPricing ? window.domainPricing.initialCost : 0;

    let pricingDisplay = document.getElementById("pricingBreakdown");

    // Create pricing display if it doesn't exist
    if (!pricingDisplay) {
        pricingDisplay = document.createElement("div");
        pricingDisplay.id = "pricingBreakdown";
        pricingDisplay.style.cssText = "margin-top: 2rem; padding: 1.5rem; background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px;";

        // Insert before submit button
        const submitBtn = document.getElementById("submitBtn");
        if (submitBtn) {
            submitBtn.parentNode.insertBefore(pricingDisplay, submitBtn);
        }
    }

    // Show pricing only if package is selected and has a price
    if (packagePrice > 0) {
        const total = packagePrice + domainPrice;

        pricingDisplay.innerHTML = `
            <h3 style="color: #065f46; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Your Project Estimate
            </h3>
            
            <div style="background: white; padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;">
                        <strong>Website Package:</strong><br>
                        <span style="font-size: 0.875rem;">${selectedPackage}</span>
                    </span>
                    <strong style="color: #059669; font-size: 1.1rem;">$${packagePrice.toFixed(2)}</strong>
                </div>
                
                ${domainPrice > 0 ? `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                        <span style="color: #6b7280; font-size: 1rem;">
                            <strong>Domain Registration:</strong><br>
                            <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                        </span>
                        <strong style="color: #059669; font-size: 1.1rem;">$${domainPrice.toFixed(2)}</strong>
                    </div>
                ` : ''}
                
                <div style="display: flex; justify-content: space-between; padding-top: 0.75rem;">
                    <strong style="color: #065f46; font-size: 1.2rem;">Total First Year:</strong>
                    <strong style="color: #065f46; font-size: 1.4rem;">$${total.toFixed(2)}</strong>
                </div>
            </div>
            
            ${domainPrice > 0 ? `
                <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 1rem; margin-bottom: 0;">
                    📅 Domain renewal of $${window.domainPricing.renewalCost.toFixed(2)} will be due annually
                </p>
            ` : ''}
            
            <p style="color: #6b7280; font-size: 0.875rem; text-align: center; margin-top: 0.75rem; margin-bottom: 0;">
                ✨ This is an estimate. Final quote will be provided after reviewing your requirements.
            </p>
        `;
        pricingDisplay.style.display = 'block';
    } else if (selectedPackage.includes('Custom Quote')) {
        // Show custom quote message
        pricingDisplay.innerHTML = `
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💼 Custom Enterprise Quote
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px; text-align: center;">
                <p style="color: #6b7280; margin-bottom: 1rem;">
                    We'll provide a detailed custom quote based on your specific requirements and features.
                </p>
                ${domainPrice > 0 ? `
                    <div style="padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: #6b7280;">
                                <strong>Domain Registration:</strong><br>
                                <span style="font-size: 0.875rem;">${window.selectedDomain}</span>
                            </span>
                            <strong style="color: #059669; font-size: 1.1rem;">$${domainPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
        pricingDisplay.style.display = 'block';
    } else {
        pricingDisplay.style.display = 'none';
    }
}

// ✅ Function to remove domain from form (optional - can be removed if not needed)
window.removeDomainFromForm = function () {
    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) {
        currentUrlInput.value = "";
    }

    window.selectedDomain = null;
    window.domainPricing = null;

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

    // Update pricing breakdown
    updatePricingBreakdown();
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

    // Calculate totals
    const packagePrice = getPackagePrice(packageSelected);
    const domainPrice = window.domainPricing ? window.domainPricing.initialCost : 0;
    const totalCost = packagePrice + domainPrice;

    // Validate that a paid package is selected
    if (packagePrice === 0) {
        showModal(
            "Please Select a Package",
            "Please select a website package (Starter, Business, or Small Shop) before submitting.",
            false
        );
        return;
    }

    // ✅ Build one clean data object
    const contactData = {
        name,
        email,
        businessName,
        phone,
        package: packageSelected,
        packagePrice: packagePrice,
        timeline,
        currentUrl,
        referenceWebsite,
        mainGoal,
        mustHaveFeatures,
        selectedDomain: window.selectedDomain || "N/A",
        domainPricing: window.domainPricing ? {
            initialCost: window.domainPricing.initialCost,
            renewalCost: window.domainPricing.renewalCost
        } : null,
        totalCost: totalCost,
        timestamp: new Date().toISOString(),
        status: "pending_payment"
    };

    const submitBtn = document.getElementById("submitBtn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Creating Payment Session...";
    submitBtn.disabled = true;

    try {
        // ✅ Send to backend to create Stripe session
        const backendResponse = await fetch("https://holysmokas-backend.onrender.com/create-payment-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
        });

        const backendResult = await backendResponse.json();

        if (backendResult.success && backendResult.sessionUrl) {
            // ✅ Also send to Google Apps Script for sheets logging
            sendToGoogleScript(contactData).catch(err => {
                console.warn("⚠️ Google Script submission failed, but proceeding to payment:", err);
            });

            // Redirect to Stripe Checkout
            window.location.href = backendResult.sessionUrl;
        } else {
            throw new Error(backendResult.error || "Failed to create payment session");
        }

    } catch (error) {
        console.error("Error creating payment session:", error);
        showModal(
            "Error",
            "There was an error processing your request. Please try again or contact us at (415) 691-7085.",
            false
        );

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
};

// Listen for package selection changes
document.addEventListener('DOMContentLoaded', () => {
    const packageSelect = document.getElementById("package");
    if (packageSelect) {
        packageSelect.addEventListener('change', updatePricingBreakdown);
    }
});