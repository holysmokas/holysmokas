import { db } from '/frontend/scripts/config.js';
import { collection, addDoc, serverTimestamp } from './config.js';
import { ENDPOINTS } from './config.js';

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

// ❌ REMOVED sendToGoogleScript function
// Contact submissions are now handled entirely by the backend (server.js)
// via the logContactSubmission() function in sheetsLogger.js
// This prevents duplicate entries in Google Sheets

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
            
            <button 
                type="button" 
                class="btn btn-secondary" 
                onclick="removeDomainFromForm()" 
                style="width: 100%; margin-top: 0.5rem;">
                Remove Domain
            </button>
            
            <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.75rem; margin-bottom: 0;">
                💡 Domain cost will be added to your total at checkout
            </p>
        </div>
    `;

    updatePricingBreakdown();
};

function getPackagePrice(packageName) {
    // Return null for placeholder/unselected state
    if (!packageName || packageName.includes("Select a package")) {
        return null;
    }

    const priceMap = {
        "Starter - $599 (New Website)": 0.99,
        "Business - $1,199 (New Website)": 0.99,
        "Small Shop - $0.99 (New Website)": 0.99
    };

    for (const [key, value] of Object.entries(priceMap)) {
        if (packageName.includes(key) || packageName.includes(value)) {
            return value;
        }
    }

    // Return 0 for custom quotes and "Not Sure Yet"
    return 0;
}

function extractCategoryFromPackage(packageName) {
    if (!packageName) return 'business';

    const normalized = packageName.toLowerCase();

    // Check in specific order to avoid conflicts
    if (normalized.includes('small shop') || normalized.includes('smallshop')) {
        return 'smallshop';
    }
    if (normalized.includes('starter')) {
        return 'starter';
    }
    if (normalized.includes('business')) {
        return 'business';
    }
    if (normalized.includes('enterprise') || normalized.includes('e-commerce')) {
        return 'enterprise';
    }

    return 'business'; // default
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

// ============================================
// CONTACT FORM LOGIC - DOMAIN SYSTEM UPDATE
// ============================================
// This file shows the CHANGES needed to your existing contactFormLogic.js
// Look for comments marked "// NEW:" or "// UPDATED:"


// ============================================
// SECTION 1: UPDATE handleContactSubmit FUNCTION
// Find your handleContactSubmit function and update it
// ============================================

window.handleContactSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;

    // Existing fields
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

    const logoInput = form.querySelector("#logoUpload");
    const logoFile = logoInput?.files[0] || null;

    // NEW: Get domain option selection
    const domainSelectionType = document.getElementById('domainSelectionType')?.value || 'new';
    const isOwnDomain = document.getElementById('isOwnDomain')?.value === 'true';
    const selectedDomainValue = document.getElementById('selectedDomainValue')?.value || '';

    // Determine the selected domain based on option
    let finalSelectedDomain = 'N/A';
    let finalDomainPricing = null;

    if (domainSelectionType === 'new' && window.selectedDomain) {
        // Customer wants new domain (Namecheap registration)
        finalSelectedDomain = window.selectedDomain;
        finalDomainPricing = window.domainPricing;
    } else if (domainSelectionType === 'own' && (window.ownDomain || selectedDomainValue)) {
        // Customer has their own domain (Cloudflare connection)
        finalSelectedDomain = window.ownDomain || selectedDomainValue;
        finalDomainPricing = { initialCost: 0, renewalCost: 0 }; // Free for own domain
    } else if (domainSelectionType === 'none') {
        // No custom domain
        finalSelectedDomain = 'N/A';
        finalDomainPricing = null;
    }

    // Package validation
    const packagePrice = getPackagePrice(packageSelected);

    if (packagePrice === null || packageSelected.includes("Select a package")) {
        showModal(
            "Please Select a Package",
            "Please choose a website package before submitting your request.",
            false
        );
        return;
    }

    // UPDATED: Domain price (0 for own domain)
    const domainPrice = finalDomainPricing ? finalDomainPricing.initialCost : 0;
    const totalCost = packagePrice + domainPrice;

    // Logo validation
    if (logoFile && logoFile.size > 5 * 1024 * 1024) {
        showModal("Logo Too Large", "Please upload a logo smaller than 5MB.", false);
        return;
    }

    const submitBtn = document.getElementById("submitBtn");
    if (!submitBtn) {
        console.error("Submit button not found!");
        showModal("Error", "Form submission error. Please refresh the page and try again.", false);
        return;
    }

    const originalText = submitBtn.textContent;
    submitBtn.textContent = logoFile ? "Uploading Logo..." : "Creating Payment Session...";
    submitBtn.disabled = true;

    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('businessName', businessName);
        formData.append('phone', phone);
        formData.append('package', packageSelected);
        formData.append('packagePrice', packagePrice);
        formData.append('timeline', timeline);
        formData.append('currentUrl', currentUrl);
        formData.append('referenceWebsite', referenceWebsite);
        formData.append('mainGoal', mainGoal);
        formData.append('mustHaveFeatures', mustHaveFeatures);

        // UPDATED: Domain fields
        formData.append('selectedDomain', finalSelectedDomain);
        formData.append('domainPricing', JSON.stringify(finalDomainPricing));
        formData.append('totalCost', totalCost);

        // NEW: Domain option fields
        formData.append('domainOption', domainSelectionType);  // 'new', 'own', or 'none'
        formData.append('isOwnDomain', isOwnDomain.toString());  // 'true' or 'false'

        formData.append('timestamp', new Date().toISOString());
        formData.append('status', 'pending_payment');

        // Category field
        const category = extractCategoryFromPackage(packageSelected);
        formData.append('category', category);

        // NEW: Log domain selection for debugging
        console.log('📦 Domain Selection:', {
            type: domainSelectionType,
            isOwnDomain: isOwnDomain,
            domain: finalSelectedDomain,
            pricing: finalDomainPricing
        });

        if (logoFile) {
            formData.append('logo', logoFile);
        }

        const backendResponse = await fetch(ENDPOINTS.createPaymentSession, {
            method: "POST",
            body: formData,
        });

        const backendResult = await backendResponse.json();

        if (backendResult.success) {
            if (backendResult.requiresPayment === false) {
                showModal(
                    "📧 Check Your Email!",
                    backendResult.message || "Thank you! We've sent you a package recommendation. Check your email and click the link to continue.",
                    true
                );

                setTimeout(() => {
                    form.reset();
                    resetDomainSelection();
                }, 4000);
            } else if (backendResult.sessionUrl) {
                showModal(
                    "🎉 Request Submitted Successfully!",
                    "Redirecting you to secure payment...",
                    true
                );

                setTimeout(() => {
                    window.location.href = backendResult.sessionUrl;
                }, 2000);
            }
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


// ============================================
// SECTION 2: ADD NEW HELPER FUNCTION
// Add this function to reset domain selection
// ============================================

function resetDomainSelection() {
    window.selectedDomain = null;
    window.ownDomain = null;
    window.domainPricing = null;
    window.domainOption = null;
    window.isOwnDomain = false;

    // Reset hidden fields
    const domainSelectionType = document.getElementById('domainSelectionType');
    const isOwnDomainField = document.getElementById('isOwnDomain');
    const selectedDomainValue = document.getElementById('selectedDomainValue');

    if (domainSelectionType) domainSelectionType.value = '';
    if (isOwnDomainField) isOwnDomainField.value = 'false';
    if (selectedDomainValue) selectedDomainValue.value = '';

    // Reset UI sections
    const newSection = document.getElementById('newDomainSection');
    const ownSection = document.getElementById('ownDomainSection');
    const noneSection = document.getElementById('noDomainSection');

    if (newSection) newSection.style.display = 'none';
    if (ownSection) ownSection.style.display = 'none';
    if (noneSection) noneSection.style.display = 'none';

    // Uncheck radio buttons
    document.querySelectorAll('input[name="domainOption"]').forEach(radio => {
        radio.checked = false;
    });

    // Remove selected class from cards
    document.querySelectorAll('.domain-option-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Update pricing
    if (typeof updatePricingBreakdown === 'function') {
        updatePricingBreakdown();
    }
}


// ============================================
// SECTION 3: UPDATE updatePricingBreakdown FUNCTION
// Update to handle domain options correctly
// ============================================

function updatePricingBreakdown() {
    const packageSelect = document.getElementById("package");
    const breakdownContainer = document.getElementById("pricingBreakdown");

    if (!breakdownContainer) return;

    const packageName = packageSelect?.value || "";
    const packagePrice = getPackagePrice(packageName);

    // Check domain option
    const domainOption = window.domainOption || document.getElementById('domainSelectionType')?.value || '';

    let domainPrice = 0;
    let domainLabel = '';

    if (domainOption === 'new' && window.domainPricing) {
        domainPrice = window.domainPricing.initialCost || 0;
        domainLabel = window.selectedDomain || 'New Domain';
    } else if (domainOption === 'own') {
        domainPrice = 0;
        domainLabel = window.ownDomain ? `${window.ownDomain} (Your Domain)` : 'Your Domain';
    } else if (domainOption === 'none') {
        domainPrice = 0;
        domainLabel = 'Free Subdomain';
    }

    if (packagePrice === null) {
        breakdownContainer.innerHTML = '';
        breakdownContainer.style.display = 'none';
        return;
    }

    const total = packagePrice + domainPrice;

    let html = `
        <div style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border: 2px solid #667eea; border-radius: 12px; padding: 1.25rem; margin-top: 1.5rem;">
            <h4 style="color: #667eea; margin: 0 0 1rem 0; font-size: 1.1rem;">💰 Order Summary</h4>
            
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Website Package:</span>
                <strong style="color: #1a1a1a;">$${packagePrice.toFixed(2)}</strong>
            </div>
    `;

    if (domainOption && domainOption !== '') {
        html += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: #4b5563;">Domain: ${domainLabel}</span>
                <strong style="color: ${domainPrice > 0 ? '#1a1a1a' : '#10b981'};">
                    ${domainPrice > 0 ? '$' + domainPrice.toFixed(2) : 'FREE'}
                </strong>
            </div>
        `;
    }

    html += `
            <hr style="border: none; border-top: 1px solid #d1d5db; margin: 0.75rem 0;">
            
            <div style="display: flex; justify-content: space-between;">
                <span style="color: #1a1a1a; font-weight: 600;">Total Due Today:</span>
                <strong style="color: #667eea; font-size: 1.25rem;">$${total.toFixed(2)}</strong>
            </div>
    `;

    if (domainOption === 'new' && window.domainPricing?.renewalCost > 0) {
        html += `
            <p style="color: #6b7280; font-size: 0.8rem; margin: 0.75rem 0 0 0;">
                * Domain renews at $${window.domainPricing.renewalCost.toFixed(2)}/year
            </p>
        `;
    }

    html += `</div>`;

    breakdownContainer.innerHTML = html;
    breakdownContainer.style.display = 'block';
}


// ============================================
// SECTION 4: ENSURE THESE GLOBAL VARIABLES EXIST
// Add at the top of your file if not present
// ============================================

// Domain selection state
window.domainOption = null;      // 'new', 'own', or 'none'
window.selectedDomain = null;    // Domain name for new registration
window.ownDomain = null;         // Domain name for own domain
window.domainPricing = null;     // { initialCost, renewalCost }
window.isOwnDomain = false;      // Boolean flag


// ✅ ADD LOGO PREVIEW FUNCTION WITH REMOVE OPTION
document.addEventListener('DOMContentLoaded', () => {
    const logoInput = document.getElementById('logoUpload');
    const logoPreview = document.getElementById('logoPreview');
    const logoPreviewImage = document.getElementById('logoPreviewImage');
    const removeLogo = document.getElementById('removeLogo');

    if (logoInput) {
        logoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Validate file size (5MB max)
                if (file.size > 5 * 1024 * 1024) {
                    alert('Logo file must be less than 5MB');
                    logoInput.value = '';
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    logoPreviewImage.src = e.target.result;
                    logoPreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            } else {
                logoPreview.style.display = 'none';
            }
        });
    }

    // Remove logo button
    if (removeLogo) {
        removeLogo.addEventListener('click', () => {
            logoInput.value = '';
            logoPreview.style.display = 'none';
            logoPreviewImage.src = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const packageSelect = document.getElementById("package");
    if (packageSelect) {
        packageSelect.addEventListener('change', updatePricingBreakdown);
    }
    // Initialize pricing breakdown on page load
    updatePricingBreakdown();
});