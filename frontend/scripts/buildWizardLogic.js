import { db } from '/frontend/scripts/config.js';
import { ENDPOINTS } from './config.js';

// ============================================
// SECURITY: Input Sanitization Functions
// ============================================

const SecurityUtils = {
    sanitizeText: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/[<>]/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .replace(/data:/gi, '')
            .trim()
            .slice(0, 1000);
    },

    sanitizeName: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/[<>\"\'`;\\]/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .trim()
            .slice(0, 200);
    },

    sanitizeEmail: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .toLowerCase()
            .replace(/[<>\"\'`;\\]/g, '')
            .trim()
            .slice(0, 254);
    },

    sanitizePhone: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/[^0-9\s\-\(\)\+]/g, '')
            .trim()
            .slice(0, 30);
    },

    sanitizeUrl: (input) => {
        if (!input || typeof input !== 'string') return '';
        const trimmed = input.trim();
        if (trimmed.match(/^(javascript|data|vbscript):/i)) {
            return '';
        }
        return trimmed.slice(0, 2000);
    },

    sanitizeDomain: (input) => {
        if (!input || typeof input !== 'string') return '';
        let cleaned = input.toLowerCase().trim();
        cleaned = cleaned.replace(/^https?:\/\//, '');
        cleaned = cleaned.replace(/^www\./, '');
        cleaned = cleaned.split('/')[0];
        cleaned = cleaned.replace(/[^a-z0-9\.\-]/g, '');
        return cleaned.slice(0, 253);
    },

    sanitizeLongText: (input) => {
        if (!input || typeof input !== 'string') return '';
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .replace(/data:text\/html/gi, '')
            .trim()
            .slice(0, 10000);
    },

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

    escapeHtml: (input) => {
        if (!input || typeof input !== 'string') return '';
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
};

// ============================================
// SECURITY: Rate Limiting
// ============================================

const FormRateLimiter = {
    submissions: {},
    maxSubmissions: 3,
    windowTime: 60 * 1000,
    cooldownTime: 5 * 60 * 1000,

    canSubmit: (identifier = 'build_wizard') => {
        const now = Date.now();
        const record = FormRateLimiter.submissions[identifier];
        if (!record) return true;
        if (record.cooldownUntil && now < record.cooldownUntil) return false;
        if (now - record.windowStart > FormRateLimiter.windowTime) {
            delete FormRateLimiter.submissions[identifier];
            return true;
        }
        return record.count < FormRateLimiter.maxSubmissions;
    },

    recordSubmission: (identifier = 'build_wizard') => {
        const now = Date.now();
        if (!FormRateLimiter.submissions[identifier]) {
            FormRateLimiter.submissions[identifier] = { count: 0, windowStart: now };
        }
        const record = FormRateLimiter.submissions[identifier];
        if (now - record.windowStart > FormRateLimiter.windowTime) {
            record.count = 0;
            record.windowStart = now;
        }
        record.count++;
        if (record.count >= FormRateLimiter.maxSubmissions) {
            record.cooldownUntil = now + FormRateLimiter.cooldownTime;
        }
    },

    getRemainingCooldown: (identifier = 'build_wizard') => {
        const record = FormRateLimiter.submissions[identifier];
        if (!record?.cooldownUntil) return 0;
        const remaining = record.cooldownUntil - Date.now();
        return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
    }
};

const DomainCheckLimiter = {
    checks: {},
    maxChecks: 10,
    windowTime: 60 * 1000,

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
            DomainCheckLimiter.checks['domain'] = { count: 0, windowStart: now };
        }
        const record = DomainCheckLimiter.checks['domain'];
        if (now - record.windowStart > DomainCheckLimiter.windowTime) {
            record.count = 0;
            record.windowStart = now;
        }
        record.count++;
    }
};

// ============================================
// WIZARD STATE (Global)
// ============================================

window.wizardData = {
    currentStep: 1,
    totalSteps: 8,
    package: null,
    packagePrice: 0,
    domainOption: null,
    domain: null,
    domainPrice: 0,
    domainPricing: null,
    businessName: '',
    industry: '',
    businessDescription: '',
    tagline: '',
    designStyle: null,
    brandColor: '#10b981',
    inspirationUrl: '',
    pages: ['home'],
    features: [],
    logoFile: null,
    contentReady: 'yes',
    additionalNotes: '',
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'email'
};

const packagePrices = {
    starter: 0.50,
    business: 0.50,
    shop: 0.50
};

const packageNames = {
    starter: 'Starter',
    business: 'Business',
    shop: 'Small Shop'
};

const styleNames = {
    modern: 'Modern & Minimal',
    bold: 'Bold & Colorful',
    classic: 'Classic & Professional',
    playful: 'Playful & Fun'
};

const industryNames = {
    restaurant: 'Restaurant / Food & Beverage',
    retail: 'Retail / E-commerce',
    professional: 'Professional Services',
    health: 'Health & Wellness',
    beauty: 'Beauty & Salon',
    construction: 'Construction / Home Services',
    realestate: 'Real Estate',
    technology: 'Technology / Software',
    creative: 'Creative / Design Agency',
    education: 'Education / Training',
    nonprofit: 'Non-Profit / Organization',
    other: 'Other'
};

// ============================================
// STEP NAVIGATION
// ============================================

function updateProgress() {
    const progress = (wizardData.currentStep / wizardData.totalSteps) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('stepIndicator').textContent = `Step ${wizardData.currentStep} of ${wizardData.totalSteps}`;

    const stepNames = [
        'Choose Package', 'Domain Setup', 'Business Details', 'Design Style',
        'Pages & Features', 'Your Assets', 'Contact Info', 'Review & Pay'
    ];
    document.getElementById('stepName').textContent = stepNames[wizardData.currentStep - 1] || '';
}

function showStep(step) {
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });

    const stepEl = document.getElementById('step' + step);
    if (stepEl) {
        stepEl.classList.add('active');
    }

    updateProgress();
}

window.nextStep = function () {
    if (wizardData.currentStep < wizardData.totalSteps) {
        const card = document.getElementById('wizardCard');
        card.classList.add('slide-out-left');

        setTimeout(() => {
            wizardData.currentStep++;
            showStep(wizardData.currentStep);
            card.classList.remove('slide-out-left');
            card.classList.add('slide-in-right');

            setTimeout(() => {
                card.classList.remove('slide-in-right');
            }, 400);

            if (wizardData.currentStep === 8) {
                populateReview();
            }
        }, 400);
    }
};

window.prevStep = function () {
    if (wizardData.currentStep > 1) {
        wizardData.currentStep--;
        showStep(wizardData.currentStep);
    }
};

// ============================================
// STEP 1: PACKAGE SELECTION
// ============================================

window.selectPackage = function (pkg) {
    wizardData.package = pkg;
    wizardData.packagePrice = packagePrices[pkg];

    document.querySelectorAll('.package-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`.package-card[data-package="${pkg}"]`).classList.add('selected');
    document.getElementById('step1Next').disabled = false;

    // Pre-select shop options for shop package
    if (pkg === 'shop') {
        const shopPage = document.getElementById('shopPage');
        if (shopPage && !shopPage.classList.contains('checked')) {
            shopPage.classList.add('checked');
            if (!wizardData.pages.includes('shop')) {
                wizardData.pages.push('shop');
            }
        }
        const paymentsFeature = document.getElementById('paymentsFeature');
        if (paymentsFeature && !paymentsFeature.classList.contains('checked')) {
            paymentsFeature.classList.add('checked');
            if (!wizardData.features.includes('payments')) {
                wizardData.features.push('payments');
            }
        }
    }
};

// ============================================
// STEP 2: DOMAIN SELECTION
// ============================================

window.selectDomainOption = function (option) {
    wizardData.domainOption = option;

    document.querySelectorAll('.domain-option').forEach(el => {
        el.classList.remove('selected');
    });
    document.querySelector(`.domain-option[data-option="${option}"]`).classList.add('selected');

    document.getElementById('newDomainSearch').classList.remove('visible');
    document.getElementById('ownDomainInput').classList.remove('visible');
    document.getElementById('domainResult').classList.remove('visible');

    if (option === 'new') {
        document.getElementById('newDomainSearch').classList.add('visible');
        document.getElementById('step2Next').disabled = true;
    } else if (option === 'own') {
        document.getElementById('ownDomainInput').classList.add('visible');
        document.getElementById('step2Next').disabled = true;
    }
};

window.checkDomainAvailability = async function () {
    const domainInput = document.getElementById('domainSearchInput');
    const rawDomain = domainInput.value.trim();

    if (!rawDomain) return;

    // Rate limit check
    if (!DomainCheckLimiter.canCheck()) {
        showDomainResult(false, 'Too many requests', 'Please wait a moment before checking another domain.');
        return;
    }

    // Sanitize domain
    const domain = SecurityUtils.sanitizeDomain(rawDomain);

    if (!domain) {
        showDomainResult(false, 'Invalid domain', 'Please enter a valid domain name.');
        return;
    }

    // Check for attack patterns
    if (SecurityUtils.detectAttack(rawDomain)) {
        showDomainResult(false, 'Invalid characters', 'Please enter a valid domain name.');
        return;
    }

    DomainCheckLimiter.recordCheck();

    const btn = document.getElementById('checkDomainBtn');
    btn.innerHTML = '<span class="loading-spinner"></span>';
    btn.disabled = true;

    try {
        const response = await fetch(ENDPOINTS.checkDomain, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain }),
        });

        const data = await response.json();

        if (data.available === true) {
            const cleanedDomain = data.cleanedDomain || domain;
            const registrationFee = data.pricing?.registrationFee || 12.99;
            const setupFee = data.pricing?.setupFee || 0;
            const initialCost = data.pricing?.initialCost || (registrationFee + setupFee);
            const renewalCost = data.pricing?.renewalCost || 14.99;

            wizardData.domain = cleanedDomain;
            wizardData.domainPrice = initialCost;
            wizardData.domainPricing = { initialCost, renewalCost, registrationFee, setupFee };

            showDomainResult(true, `${cleanedDomain} is available!`, `$${initialCost.toFixed(2)}/year`);
            document.getElementById('step2Next').disabled = false;
        } else {
            showDomainResult(false, `${domain} is already taken`, 'Try a different name or extension');
            wizardData.domain = null;
            wizardData.domainPrice = 0;
            wizardData.domainPricing = null;
            document.getElementById('step2Next').disabled = true;
        }
    } catch (error) {
        console.error("Domain check error:", error);
        showDomainResult(false, 'Error checking domain', 'Please try again or contact support');
    }

    btn.innerHTML = 'Check';
    btn.disabled = false;
};

function showDomainResult(isAvailable, title, description) {
    const resultEl = document.getElementById('domainResult');
    const iconEl = document.getElementById('domainResultIcon');
    const titleEl = document.getElementById('domainResultTitle');
    const descEl = document.getElementById('domainResultDesc');

    resultEl.className = `domain-result visible ${isAvailable ? 'available' : 'unavailable'}`;
    iconEl.textContent = isAvailable ? '✓' : '✕';
    titleEl.textContent = title;
    descEl.textContent = description;
}

window.validateExistingDomain = function () {
    const domain = document.getElementById('existingDomainInput').value.trim();
    const sanitized = SecurityUtils.sanitizeDomain(domain);
    const isValid = sanitized.includes('.') && sanitized.length > 3;

    if (isValid) {
        wizardData.domain = sanitized;
        wizardData.domainPrice = 0;
        wizardData.domainPricing = { initialCost: 0, renewalCost: 0 };
        document.getElementById('step2Next').disabled = false;
    } else {
        wizardData.domain = null;
        document.getElementById('step2Next').disabled = true;
    }
};

// ============================================
// STEP 3: BUSINESS DETAILS
// ============================================

window.validateStep3 = function () {
    const businessName = document.getElementById('businessName').value.trim();
    const industry = document.getElementById('industry').value;
    const description = document.getElementById('businessDescription').value.trim();

    wizardData.businessName = SecurityUtils.sanitizeName(businessName);
    wizardData.industry = industry;
    wizardData.businessDescription = SecurityUtils.sanitizeLongText(description);
    wizardData.tagline = SecurityUtils.sanitizeText(document.getElementById('tagline').value.trim());

    const isValid = businessName && industry && description;
    document.getElementById('step3Next').disabled = !isValid;
};

// ============================================
// STEP 4: DESIGN PREFERENCES
// ============================================

window.selectStyle = function (style) {
    wizardData.designStyle = style;

    document.querySelectorAll('.style-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`.style-card[data-style="${style}"]`).classList.add('selected');
    document.getElementById('step4Next').disabled = false;

    wizardData.brandColor = document.getElementById('brandColor').value;
    wizardData.inspirationUrl = SecurityUtils.sanitizeUrl(document.getElementById('inspirationUrl').value);
};

// ============================================
// STEP 5: PAGES & FEATURES
// ============================================

window.toggleCheckbox = function (el) {
    el.classList.toggle('checked');

    const value = el.dataset.value;
    const isPage = el.closest('#pagesGrid') !== null;
    const array = isPage ? wizardData.pages : wizardData.features;

    if (el.classList.contains('checked')) {
        if (!array.includes(value)) {
            array.push(value);
        }
    } else {
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
};

// ============================================
// STEP 6: ASSETS
// ============================================

window.handleLogoUpload = function (event) {
    const file = event.target.files[0];
    if (file) {
        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
        if (!allowedTypes.includes(file.type)) {
            alert('Please upload an image file (JPEG, PNG, GIF, WebP, or SVG).');
            event.target.value = '';
            return;
        }

        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert('Logo file must be less than 5MB.');
            event.target.value = '';
            return;
        }

        wizardData.logoFile = file;

        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('logoPreviewImg').src = e.target.result;
            document.getElementById('logoFileName').textContent = file.name;
            document.getElementById('logoPreview').classList.add('visible');
            document.getElementById('logoUploadArea').classList.add('has-file');
        };
        reader.readAsDataURL(file);
    }
};

window.removeLogo = function () {
    wizardData.logoFile = null;
    document.getElementById('logoFile').value = '';
    document.getElementById('logoPreview').classList.remove('visible');
    document.getElementById('logoUploadArea').classList.remove('has-file');
};

// ============================================
// STEP 7: CONTACT INFO
// ============================================

window.validateStep7 = function () {
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    wizardData.fullName = SecurityUtils.sanitizeName(fullName);
    wizardData.email = SecurityUtils.sanitizeEmail(email);
    wizardData.phone = SecurityUtils.sanitizePhone(phone);
    wizardData.contactMethod = document.getElementById('contactMethod').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = fullName && emailRegex.test(email) && phone.length >= 10;

    document.getElementById('step7Next').disabled = !isValid;
};

// ============================================
// STEP 8: REVIEW
// ============================================

function populateReview() {
    wizardData.contentReady = document.getElementById('contentReady').value;
    wizardData.additionalNotes = SecurityUtils.sanitizeLongText(document.getElementById('additionalNotes').value);

    // Package
    document.getElementById('reviewPackage').textContent =
        `${packageNames[wizardData.package]} - $${wizardData.packagePrice}`;

    // Domain
    document.getElementById('reviewDomain').textContent = wizardData.domain || 'Not specified';
    if (wizardData.domainOption === 'own') {
        document.getElementById('reviewDomainCostRow').style.display = 'none';
    } else {
        document.getElementById('reviewDomainCostRow').style.display = 'flex';
        document.getElementById('reviewDomainCost').textContent = `$${wizardData.domainPrice}/year`;
    }

    // Business
    document.getElementById('reviewBusinessName').textContent = wizardData.businessName;
    document.getElementById('reviewIndustry').textContent = industryNames[wizardData.industry] || wizardData.industry;

    // Design
    document.getElementById('reviewStyle').textContent = styleNames[wizardData.designStyle] || wizardData.designStyle;
    document.getElementById('reviewPages').textContent = wizardData.pages.join(', ') || 'Home';

    // Contact
    document.getElementById('reviewName').textContent = wizardData.fullName;
    document.getElementById('reviewEmail').textContent = wizardData.email;

    // Total
    const total = wizardData.packagePrice + wizardData.domainPrice;
    document.getElementById('reviewTotal').textContent = `$${total.toLocaleString()}`;
}

// ============================================
// PAYMENT PROCESSING
// ============================================

window.processPayment = async function () {
    // Rate limit check
    if (!FormRateLimiter.canSubmit()) {
        const cooldown = FormRateLimiter.getRemainingCooldown();
        alert(`Too many submission attempts. Please try again in ${cooldown} seconds.`);
        return;
    }

    // Validate all data
    if (!wizardData.package || !wizardData.fullName || !wizardData.email) {
        alert('Please complete all required fields.');
        return;
    }

    // Attack detection
    const allText = [
        wizardData.businessName,
        wizardData.businessDescription,
        wizardData.fullName,
        wizardData.email,
        wizardData.additionalNotes
    ].join(' ');

    if (SecurityUtils.detectAttack(allText)) {
        alert('Invalid characters detected. Please review your input.');
        return;
    }

    const btn = document.getElementById('payBtn');
    btn.innerHTML = '<span class="loading-spinner"></span> Processing...';
    btn.disabled = true;

    FormRateLimiter.recordSubmission();

    try {
        const formData = new FormData();

        // Package info
        formData.append('package', `${packageNames[wizardData.package]} - $${wizardData.packagePrice}`);
        formData.append('packagePrice', wizardData.packagePrice);
        formData.append('category', wizardData.package);

        // Domain info
        formData.append('selectedDomain', wizardData.domain || 'N/A');
        formData.append('domainOption', wizardData.domainOption);
        formData.append('isOwnDomain', (wizardData.domainOption === 'own').toString());
        formData.append('domainPricing', JSON.stringify(wizardData.domainPricing));

        // Business info
        formData.append('businessName', wizardData.businessName);
        formData.append('industry', wizardData.industry);
        formData.append('businessDescription', wizardData.businessDescription);
        formData.append('tagline', wizardData.tagline);

        // Design preferences
        formData.append('designStyle', wizardData.designStyle);
        formData.append('brandColor', wizardData.brandColor);
        formData.append('inspirationUrl', wizardData.inspirationUrl);
        formData.append('pages', JSON.stringify(wizardData.pages));
        formData.append('features', JSON.stringify(wizardData.features));

        // Assets
        formData.append('contentReady', wizardData.contentReady);
        formData.append('additionalNotes', wizardData.additionalNotes);
        if (wizardData.logoFile) {
            formData.append('logo', wizardData.logoFile);
        }

        // Contact info
        formData.append('name', wizardData.fullName);
        formData.append('email', wizardData.email);
        formData.append('phone', wizardData.phone);
        formData.append('contactMethod', wizardData.contactMethod);

        // Meta
        const totalCost = wizardData.packagePrice + wizardData.domainPrice;
        formData.append('totalCost', totalCost);
        formData.append('timestamp', new Date().toISOString());
        formData.append('status', 'pending_payment');
        formData.append('source', 'build_wizard');

        console.log('📦 Submitting order:', {
            package: wizardData.package,
            domain: wizardData.domain,
            email: wizardData.email,
            total: totalCost
        });

        const response = await fetch(ENDPOINTS.createPaymentSession, {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            if (result.requiresPayment === false) {
                // Show success without redirect
                showSuccess();
            } else if (result.sessionUrl) {
                // Redirect to Stripe
                window.location.href = result.sessionUrl;
            } else {
                showSuccess();
            }
        } else {
            throw new Error(result.error || "Payment session creation failed");
        }
    } catch (error) {
        console.error("Payment error:", error);
        alert('There was an error processing your request. Please try again or contact us at (415) 691-7085.');
        btn.innerHTML = 'Pay Now →';
        btn.disabled = false;
    }
};

function showSuccess() {
    document.getElementById('successEmail').textContent = wizardData.email;

    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById('stepSuccess').classList.add('active');

    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('stepIndicator').textContent = 'Complete!';
    document.getElementById('stepName').textContent = 'Order Confirmed';
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const activeStep = document.querySelector('.step-content.active');
        const nextBtn = activeStep?.querySelector('.btn-wizard:not(.btn-back):not(:disabled)');
        if (nextBtn && !nextBtn.id?.includes('check')) {
            nextBtn.click();
        }
    }
});

// Domain search on Enter
document.addEventListener('DOMContentLoaded', () => {
    const domainInput = document.getElementById('domainSearchInput');
    if (domainInput) {
        domainInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkDomainAvailability();
            }
        });
    }

    showStep(1);
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SecurityUtils, FormRateLimiter, DomainCheckLimiter };
}