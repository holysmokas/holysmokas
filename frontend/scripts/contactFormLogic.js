import { db } from '../../backend/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { GOOGLE_SHEETS_URL, ENDPOINTS } from './config.js';

// Function to show modal
function showModal(title, message, isSuccess = true) {
    const modal = document.getElementById('formModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalIcon = document.getElementById('modalIcon');

    modalTitle.textContent = title;
    modalMessage.textContent = message;

    modalIcon.textContent = isSuccess ? '✓' : '✕';
    modalIcon.style.background = isSuccess ? 'var(--secondary)' : '#ef4444';

    modal.classList.add('show');
}

window.closeModal = function () {
    const modal = document.getElementById('formModal');
    modal.classList.remove('show');
};

async function sendToGoogleScript(contactData) {
    try {
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactData)
        });
        console.log('Data sent to Google Apps Script');
        return true;
    } catch (error) {
        console.error('Error sending to Google Script:', error);
        return false;
    }
}

function cleanDomainName(domain) {
    let cleaned = domain.replace(/^https?:\/\//, '');
    cleaned = cleaned.replace(/^www\./, '');
    cleaned = cleaned.split('/')[0];
    cleaned = cleaned.trim();
    return cleaned;
}

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
        const response = await fetch(ENDPOINTS.checkDomain, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain }),
        });

        const data = await response.json();

        if (data.available === true) {
            const cleanedDomain = data.cleanedDomain || cleanDomainName(domain);
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

window.addDomainToForm = function (domain, initialCost = 0, renewalCost = 0) {
    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) {
        currentUrlInput.value = `https://${domain}`;
        currentUrlInput.style.border = "2px solid #10b981";
        setTimeout(() => { currentUrlInput.style.border = ""; }, 2000);
    }

    window.selectedDomain = domain;
    window.domainPricing = { initialCost, renewalCost };

    const domainResult = document.getElementById("domainResult");
    domainResult.innerHTML = `
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${domain} added to form</strong>
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
            
            <p style="color: #6b7280; font-size: 0.875rem; margin-bottom: 0.75rem;">
                This domain will be registered after payment
            </p>
            <button type="button" class="btn btn-secondary" onclick="removeDomainFromForm()" style="width: 100%;">
                Remove Domain
            </button>
        </div>
    `;
    domainResult.style.color = "#10b981";

    updatePricingBreakdown();
};

function getPackagePrice(packageString) {
    if (packageString.includes('$499')) return 499;
    if (packageString.includes('$599')) return 599;
    if (packageString.includes('$999')) return 999;
    if (packageString.includes('$1,199')) return 1199;
    if (packageString.includes('$1,499')) return 1499;
    if (packageString.includes('$1,699')) return 1699;
    if (packageString.includes('$1,999')) return 1999;
    if (packageString.includes('Custom Quote')) return 0;
    return 0;
}

function updatePricingBreakdown() {
    const packageSelect = document.getElementById("package");
    let pricingDisplay = document.getElementById("pricingBreakdown");

    // Create the pricing breakdown element if it doesn't exist
    if (!pricingDisplay && packageSelect) {
        pricingDisplay = document.createElement('div');
        pricingDisplay.id = 'pricingBreakdown';
        pricingDisplay.style.cssText = 'display: none; background: #f9fafb; border: 2px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0;';

        // Insert before the submit button
        const submitBtn = document.getElementById("submitBtn");
        if (submitBtn && submitBtn.parentNode) {
            submitBtn.parentNode.insertBefore(pricingDisplay, submitBtn);
        }
    }

    if (!packageSelect || !pricingDisplay) return;

    const selectedPackage = packageSelect.value;
    const packagePrice = getPackagePrice(selectedPackage);
    const domainPrice = window.domainPricing ? window.domainPricing.initialCost : 0;
    const total = packagePrice + domainPrice;

    if (packagePrice > 0) {
        pricingDisplay.innerHTML = `
            <h3 style="color: #6366f1; font-size: 1.3rem; margin-bottom: 1rem; text-align: center;">
                💰 Price Breakdown
            </h3>
            
            <div style="background: white; padding: 1.5rem; border-radius: 6px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 1rem;"><strong>Website Package:</strong></span>
                    <strong style="color: #6366f1; font-size: 1.1rem;">$${packagePrice.toFixed(2)}</strong>
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

window.removeDomainFromForm = function () {
    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) currentUrlInput.value = "";

    window.selectedDomain = null;
    window.domainPricing = null;

    const domainInput = document.getElementById("domainInput");
    if (domainInput) domainInput.value = "";

    const domainResult = document.getElementById("domainResult");
    if (domainResult) domainResult.innerHTML = "";

    updatePricingBreakdown();
};

window.handleContactSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;

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

    const packagePrice = getPackagePrice(packageSelected);
    const domainPrice = window.domainPricing ? window.domainPricing.initialCost : 0;
    const totalCost = packagePrice + domainPrice;

    if (packagePrice === 0 && !packageSelected.includes('Custom Quote') && !packageSelected.includes('Not Sure Yet')) {
        showModal("Please Select a Package", "Please select a website package before submitting.", false);
        return;
    }

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
    if (!submitBtn) {
        console.error("Submit button not found!");
        showModal("Error", "Form submission error. Please refresh the page and try again.", false);
        return;
    }
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Creating Payment Session...";
    submitBtn.disabled = true;

    try {
        const backendResponse = await fetch(ENDPOINTS.createPaymentSession, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
        });

        const backendResult = await backendResponse.json();

        if (backendResult.success && backendResult.sessionUrl) {
            sendToGoogleScript(contactData).catch(err => {
                console.warn("⚠️ Google Script submission failed, but proceeding to payment:", err);
            });
            window.location.href = backendResult.sessionUrl;
        } else {
            throw new Error(backendResult.error || "Failed to create payment session");
        }

    } catch (error) {
        console.error("Error creating payment session:", error);
        showModal("Error", "There was an error processing your request. Please try again or contact us at (415) 691-7085.", false);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const packageSelect = document.getElementById("package");
    if (packageSelect) {
        packageSelect.addEventListener('change', updatePricingBreakdown);
    }
    // Initialize pricing breakdown on page load
    updatePricingBreakdown();
});