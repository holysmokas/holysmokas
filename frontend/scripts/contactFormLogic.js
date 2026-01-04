import { db } from '/frontend/scripts/config.js';
import { ENDPOINTS } from './config.js';

// ============================================
// SECURITY: Input Sanitization Functions
// ============================================

const SecurityUtils = {
    // Sanitize text input - prevents XSS
    sanitizeText: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
            .replace(/data:/gi, '') // Remove data: protocol
            .trim()
            .slice(0, 1000); // Max length
    },

    // Sanitize name (person or business)
    sanitizeName: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/[<>\"\'`;\\]/g, '') // Remove dangerous chars
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .trim()
            .slice(0, 200); // Max 200 chars
    },

    // Sanitize email
    sanitizeEmail: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .toLowerCase()
            .replace(/[<>\"\'`;\\]/g, '')
            .trim()
            .slice(0, 254);
    },

    // Sanitize phone
    sanitizePhone: (input) => {
        if (!input || typeof input !== 'string') return '';
        // Allow only numbers, spaces, dashes, parentheses, plus
        return input
            .replace(/[^0-9\s\-\(\)\+]/g, '')
            .trim()
            .slice(0, 30);
    },

    // Sanitize URL
    sanitizeUrl: (input) => {
        if (!input || typeof input !== 'string') return '';
        const trimmed = input.trim();

        // Block dangerous protocols
        if (trimmed.match(/^(javascript|data|vbscript):/i)) {
            return '';
        }

        return trimmed.slice(0, 2000);
    },

    // Sanitize domain name
    sanitizeDomain: (input) => {
        if (!input || typeof input !== 'string') return '';
        let cleaned = input.toLowerCase().trim();
        // Remove protocol
        cleaned = cleaned.replace(/^https?:\/\//, '');
        // Remove www
        cleaned = cleaned.replace(/^www\./, '');
        // Remove path
        cleaned = cleaned.split('/')[0];
        // Only allow valid domain characters
        cleaned = cleaned.replace(/[^a-z0-9\.\-]/g, '');
        return cleaned.slice(0, 253);
    },

    // Sanitize long text (description, goals, features)
    sanitizeLongText: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
            .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .replace(/data:text\/html/gi, '')
            .trim()
            .slice(0, 10000); // Max 10000 chars for descriptions
    },

    // Check for common attack patterns
    detectAttack: (input) => {
        if (!input || typeof input !== 'string') return false;
        const attackPatterns = [
            /<script/i,
            /javascript:/i,
            /on\w+\s*=/i,
            /union\s+select/i,
            /;\s*drop\s+table/i,
            /;\s*delete\s+from/i,
            /'\s*or\s+'1'\s*=\s*'1/i,
            /--\s*$/,
            /\/\*.*\*\//,
            /\$\{.*\}/,
            /\{\{.*\}\}/,
            /<iframe/i,
            /<embed/i,
            /<object/i,
            /expression\s*\(/i,
        ];
        return attackPatterns.some(pattern => pattern.test(input));
    },

    // Escape HTML for display (use when inserting user input into DOM)
    escapeHtml: (input) => {
        if (!input || typeof input !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
};

// ============================================
// SECURITY: Rate Limiting for Form Submission
// ============================================

const FormRateLimiter = {
    submissions: {},
    maxSubmissions: 3,      // Max submissions per window
    windowTime: 60 * 1000,  // 1 minute window
    cooldownTime: 5 * 60 * 1000, // 5 minute cooldown after limit

    canSubmit: (identifier = 'contact_form') => {
        const now = Date.now();
        const record = FormRateLimiter.submissions[identifier];

        if (!record) return true;

        // Check if cooldown period has passed
        if (record.cooldownUntil && now < record.cooldownUntil) {
            return false;
        }

        // Reset if window expired
        if (now - record.windowStart > FormRateLimiter.windowTime) {
            delete FormRateLimiter.submissions[identifier];
            return true;
        }

        return record.count < FormRateLimiter.maxSubmissions;
    },

    recordSubmission: (identifier = 'contact_form') => {
        const now = Date.now();

        if (!FormRateLimiter.submissions[identifier]) {
            FormRateLimiter.submissions[identifier] = {
                count: 0,
                windowStart: now
            };
        }

        const record = FormRateLimiter.submissions[identifier];

        // Reset window if expired
        if (now - record.windowStart > FormRateLimiter.windowTime) {
            record.count = 0;
            record.windowStart = now;
        }

        record.count++;

        // Set cooldown if limit reached
        if (record.count >= FormRateLimiter.maxSubmissions) {
            record.cooldownUntil = now + FormRateLimiter.cooldownTime;
        }
    },

    getRemainingCooldown: (identifier = 'contact_form') => {
        const record = FormRateLimiter.submissions[identifier];
        if (!record?.cooldownUntil) return 0;
        const remaining = record.cooldownUntil - Date.now();
        return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
    }
};

// ============================================
// SECURITY: Domain Check Rate Limiter
// ============================================

const DomainCheckLimiter = {
    checks: {},
    maxChecks: 10,          // Max checks per window
    windowTime: 60 * 1000,  // 1 minute window

    canCheck: () => {
        const now = Date.now();
        const record = DomainCheckLimiter.checks['domain'];

        if (!record) return true;

        if (now - record.windowStart > DomainCheckLimiter.windowTime) {
            delete DomainCheckLimiter.checks['domain'];
            return true;
        }

        return record.count < DomainCheckLimiter.maxChecks;
    },

    recordCheck: () => {
        const now = Date.now();

        if (!DomainCheckLimiter.checks['domain']) {
            DomainCheckLimiter.checks['domain'] = {
                count: 0,
                windowStart: now
            };
        }

        const record = DomainCheckLimiter.checks['domain'];

        if (now - record.windowStart > DomainCheckLimiter.windowTime) {
            record.count = 0;
            record.windowStart = now;
        }

        record.count++;
    }
};

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

function cleanDomainName(domain) {
    return SecurityUtils.sanitizeDomain(domain);
}

// ============================================
// SECURED: Domain Check Function
// ============================================

window.checkDomain = async function () {
    const domainInput = document.getElementById("domainInput");
    const domainResult = document.getElementById("domainResult");

    // Rate limit check
    if (!DomainCheckLimiter.canCheck()) {
        domainResult.innerHTML = `
            <div style="background: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span style="font-size: 1.5rem;">⏳</span>
                    <strong style="color: #991b1b;">Too many requests</strong>
                </div>
                <p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem; margin-bottom: 0;">
                    Please wait a moment before checking another domain.
                </p>
            </div>
        `;
        return;
    }

    const rawDomain = domainInput.value.trim();

    // Sanitize domain input
    const domain = SecurityUtils.sanitizeDomain(rawDomain);

    if (!domain) {
        domainResult.innerHTML = "⚠️ Please enter a valid domain name.";
        domainResult.style.color = "#f59e0b";
        return;
    }

    // Check for attack patterns
    if (SecurityUtils.detectAttack(rawDomain)) {
        domainResult.innerHTML = "⚠️ Invalid characters detected. Please enter a valid domain.";
        domainResult.style.color = "#ef4444";
        return;
    }

    DomainCheckLimiter.recordCheck();

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
            const cleanedDomain = SecurityUtils.sanitizeDomain(data.cleanedDomain || domain);
            const initialCost = data.pricing?.initialCost || data.price || 12.99;
            const renewalCost = data.pricing?.renewalCost || data.renewalPrice || 12.99;

            // Use escapeHtml for any user-influenced content displayed in HTML
            const safeDomain = SecurityUtils.escapeHtml(cleanedDomain);

            domainResult.innerHTML = `
                <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                        <span style="font-size: 1.5rem;">✅</span>
                        <strong style="color: #065f46; font-size: 1.1rem;">${safeDomain} is available!</strong>
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
            const checkedDomain = SecurityUtils.escapeHtml(data.domain || domain);
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
    // Sanitize domain before using
    const safeDomain = SecurityUtils.sanitizeDomain(domain);

    const currentUrlInput = document.getElementById("currentUrl");
    if (currentUrlInput) {
        currentUrlInput.value = `https://${safeDomain}`;
        currentUrlInput.style.border = "2px solid #10b981";
        setTimeout(() => { currentUrlInput.style.border = ""; }, 2000);
    }

    window.selectedDomain = safeDomain;
    window.domainPricing = { initialCost, renewalCost };

    // Update hidden field
    const selectedDomainValue = document.getElementById('selectedDomainValue');
    if (selectedDomainValue) {
        selectedDomainValue.value = safeDomain;
    }

    const displayDomain = SecurityUtils.escapeHtml(safeDomain);
    const domainResult = document.getElementById("domainResult");
    domainResult.innerHTML = `
        <div style="background: #f0fdf4; border: 2px solid #10b981; border-radius: 8px; padding: 1rem; margin-top: 1rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">✅</span>
                <strong style="color: #065f46;">${displayDomain} added to form</strong>
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

    return 0;
}

function extractCategoryFromPackage(packageName) {
    if (!packageName) return 'business';

    const normalized = packageName.toLowerCase();

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

    return 'business';
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

    const selectedDomainValue = document.getElementById('selectedDomainValue');
    if (selectedDomainValue) selectedDomainValue.value = '';

    updatePricingBreakdown();
};

// ============================================
// SECURED: Contact Form Submit Handler
// ============================================

window.handleContactSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;

    // Security: Check rate limit
    if (!FormRateLimiter.canSubmit()) {
        const cooldown = FormRateLimiter.getRemainingCooldown();
        showModal(
            "Please Wait",
            `Too many submission attempts. Please try again in ${cooldown} seconds.`,
            false
        );
        return;
    }

    // Get raw form values
    const rawValues = {
        name: form.querySelector("#name")?.value || "",
        email: form.querySelector("#email")?.value || "",
        businessName: form.querySelector("#businessName")?.value || "",
        phone: form.querySelector("#phone")?.value || "",
        packageSelected: form.querySelector("#package")?.value || "",
        timeline: form.querySelector("#timeline")?.value || "",
        currentUrl: form.querySelector("#currentUrl")?.value || "",
        referenceWebsite: form.querySelector("#referenceWebsite")?.value || "",
        mainGoal: form.querySelector("#mainGoal")?.value || "",
        mustHaveFeatures: form.querySelector("#mustHaveFeatures")?.value || ""
    };

    // Security: Detect attacks in any field
    const allInputs = Object.values(rawValues).join(' ');
    if (SecurityUtils.detectAttack(allInputs)) {
        showModal(
            "Invalid Input",
            "Your submission contains invalid characters. Please remove any special characters and try again.",
            false
        );
        console.warn('🚨 Attack pattern detected in form submission');
        return;
    }

    // Security: Sanitize all inputs
    const sanitized = {
        name: SecurityUtils.sanitizeName(rawValues.name),
        email: SecurityUtils.sanitizeEmail(rawValues.email),
        businessName: SecurityUtils.sanitizeName(rawValues.businessName),
        phone: SecurityUtils.sanitizePhone(rawValues.phone),
        packageSelected: SecurityUtils.sanitizeText(rawValues.packageSelected),
        timeline: SecurityUtils.sanitizeText(rawValues.timeline),
        currentUrl: SecurityUtils.sanitizeUrl(rawValues.currentUrl),
        referenceWebsite: SecurityUtils.sanitizeUrl(rawValues.referenceWebsite),
        mainGoal: SecurityUtils.sanitizeLongText(rawValues.mainGoal),
        mustHaveFeatures: SecurityUtils.sanitizeLongText(rawValues.mustHaveFeatures)
    };

    // Validate required fields after sanitization
    if (!sanitized.name || sanitized.name.length < 2) {
        showModal("Invalid Name", "Please enter a valid name (at least 2 characters).", false);
        return;
    }

    if (!sanitized.email || !sanitized.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showModal("Invalid Email", "Please enter a valid email address.", false);
        return;
    }

    if (!sanitized.businessName || sanitized.businessName.length < 2) {
        showModal("Invalid Business Name", "Please enter a valid business name.", false);
        return;
    }

    const logoInput = form.querySelector("#logoUpload");
    const logoFile = logoInput?.files[0] || null;

    // Domain handling
    const domainSelectionType = document.getElementById('domainSelectionType')?.value || 'new';
    const isOwnDomain = document.getElementById('isOwnDomain')?.value === 'true';
    const selectedDomainValue = document.getElementById('selectedDomainValue')?.value || '';

    let finalSelectedDomain = 'N/A';
    let finalDomainPricing = null;

    if (domainSelectionType === 'new' && window.selectedDomain) {
        finalSelectedDomain = SecurityUtils.sanitizeDomain(window.selectedDomain);
        finalDomainPricing = window.domainPricing;
    } else if (domainSelectionType === 'own' && (window.ownDomain || selectedDomainValue)) {
        finalSelectedDomain = SecurityUtils.sanitizeDomain(window.ownDomain || selectedDomainValue);
        finalDomainPricing = { initialCost: 0, renewalCost: 0 };
    }

    // Package validation
    const packagePrice = getPackagePrice(sanitized.packageSelected);

    if (packagePrice === null || sanitized.packageSelected.includes("Select a package")) {
        showModal(
            "Please Select a Package",
            "Please choose a website package before submitting your request.",
            false
        );
        return;
    }

    const domainPrice = finalDomainPricing ? finalDomainPricing.initialCost : 0;
    const totalCost = packagePrice + domainPrice;

    // Logo validation
    if (logoFile) {
        // Check file size
        if (logoFile.size > 5 * 1024 * 1024) {
            showModal("Logo Too Large", "Please upload a logo smaller than 5MB.", false);
            return;
        }

        // Check file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedTypes.includes(logoFile.type)) {
            showModal("Invalid File Type", "Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).", false);
            return;
        }

        // Check extension
        const extension = logoFile.name.split('.').pop().toLowerCase();
        const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
        if (!validExtensions.includes(extension)) {
            showModal("Invalid File", "Invalid file extension. Please upload a valid image.", false);
            return;
        }
    }

    const submitBtn = document.getElementById("submitBtn");
    if (!submitBtn) {
        console.error("Submit button not found!");
        showModal("Error", "Form submission error. Please refresh the page and try again.", false);
        return;
    }

    // Record submission attempt
    FormRateLimiter.recordSubmission();

    const originalText = submitBtn.textContent;
    submitBtn.textContent = logoFile ? "Uploading Logo..." : "Creating Payment Session...";
    submitBtn.disabled = true;

    try {
        const formData = new FormData();

        // Use sanitized values
        formData.append('name', sanitized.name);
        formData.append('email', sanitized.email);
        formData.append('businessName', sanitized.businessName);
        formData.append('phone', sanitized.phone);
        formData.append('package', sanitized.packageSelected);
        formData.append('packagePrice', packagePrice);
        formData.append('timeline', sanitized.timeline);
        formData.append('currentUrl', sanitized.currentUrl);
        formData.append('referenceWebsite', sanitized.referenceWebsite);
        formData.append('mainGoal', sanitized.mainGoal);
        formData.append('mustHaveFeatures', sanitized.mustHaveFeatures);

        // Domain fields (already sanitized)
        formData.append('selectedDomain', finalSelectedDomain);
        formData.append('domainPricing', JSON.stringify(finalDomainPricing));
        formData.append('totalCost', totalCost);
        formData.append('domainOption', domainSelectionType);
        formData.append('isOwnDomain', isOwnDomain.toString());

        formData.append('timestamp', new Date().toISOString());
        formData.append('status', 'pending_payment');

        const category = extractCategoryFromPackage(sanitized.packageSelected);
        formData.append('category', category);

        console.log('📦 Secure Form Submission:', {
            name: sanitized.name,
            email: sanitized.email,
            domainOption: domainSelectionType,
            domain: finalSelectedDomain
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
// Domain Selection Functions
// ============================================

function resetDomainSelection() {
    window.selectedDomain = null;
    window.ownDomain = null;
    window.domainPricing = null;
    window.domainOption = null;
    window.isOwnDomain = false;

    const domainSelectionType = document.getElementById('domainSelectionType');
    const isOwnDomainField = document.getElementById('isOwnDomain');
    const selectedDomainValue = document.getElementById('selectedDomainValue');

    if (domainSelectionType) domainSelectionType.value = '';
    if (isOwnDomainField) isOwnDomainField.value = 'false';
    if (selectedDomainValue) selectedDomainValue.value = '';

    const newSection = document.getElementById('newDomainSection');
    const ownSection = document.getElementById('ownDomainSection');

    if (newSection) newSection.style.display = 'none';
    if (ownSection) ownSection.style.display = 'none';

    document.querySelectorAll('input[name="domainOption"]').forEach(radio => {
        radio.checked = false;
    });

    document.querySelectorAll('.domain-option-card').forEach(card => {
        card.classList.remove('selected');
    });

    if (typeof updatePricingBreakdown === 'function') {
        updatePricingBreakdown();
    }
}

// ============================================
// Pricing Breakdown
// ============================================

function updatePricingBreakdown() {
    const packageSelect = document.getElementById("package");
    const breakdownContainer = document.getElementById("pricingBreakdown");

    if (!breakdownContainer) return;

    const packageName = packageSelect?.value || "";
    const packagePrice = getPackagePrice(packageName);

    const domainOption = window.domainOption || document.getElementById('domainSelectionType')?.value || '';

    let domainPrice = 0;
    let domainLabel = '';

    if (domainOption === 'new' && window.domainPricing) {
        domainPrice = window.domainPricing.initialCost || 0;
        domainLabel = SecurityUtils.escapeHtml(window.selectedDomain || 'New Domain');
    } else if (domainOption === 'own') {
        domainPrice = 0;
        domainLabel = window.ownDomain ? `${SecurityUtils.escapeHtml(window.ownDomain)} (Your Domain)` : 'Your Domain';
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
// Global Variables
// ============================================

window.domainOption = null;
window.selectedDomain = null;
window.ownDomain = null;
window.domainPricing = null;
window.isOwnDomain = false;

// ============================================
// Logo Preview with Security
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const logoInput = document.getElementById('logoUpload');
    const logoPreview = document.getElementById('logoPreview');
    const logoPreviewImage = document.getElementById('logoPreviewImage');
    const removeLogo = document.getElementById('removeLogo');

    if (logoInput) {
        logoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                // Validate file type
                const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
                if (!allowedTypes.includes(file.type)) {
                    showModal('Invalid File Type', 'Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).', false);
                    logoInput.value = '';
                    return;
                }

                // Validate file size (5MB max)
                if (file.size > 5 * 1024 * 1024) {
                    showModal('File Too Large', 'Logo file must be less than 5MB. Please choose a smaller file.', false);
                    logoInput.value = '';
                    return;
                }

                // Validate extension
                const extension = file.name.split('.').pop().toLowerCase();
                const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
                if (!validExtensions.includes(extension)) {
                    showModal('Invalid File', 'Invalid file extension. Please upload a valid image.', false);
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
    updatePricingBreakdown();
});

// Export for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SecurityUtils, FormRateLimiter, DomainCheckLimiter };
}