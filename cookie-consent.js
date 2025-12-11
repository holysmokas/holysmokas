/**
 * GDPR-Compliant Cookie Consent Banner
 * 
 * Features:
 * - Blocks all tracking until consent is given
 * - Granular cookie category selection
 * - Remembers user preferences
 * - Easy to withdraw consent
 * - No pre-checked boxes (GDPR compliant)
 * 
 * Usage: Add this script BEFORE any analytics scripts
 * <script src="/cookie-consent.js"></script>
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        cookieName: 'cookie_consent',
        cookieExpiry: 365, // days
        categories: {
            necessary: {
                name: 'Necessary',
                description: 'Essential for the website to function. Cannot be disabled.',
                required: true
            },
            analytics: {
                name: 'Analytics',
                description: 'Help us understand how visitors interact with our website.',
                required: false
            },
            marketing: {
                name: 'Marketing',
                description: 'Used to deliver personalized advertisements.',
                required: false
            }
        }
    };

    // Styles for the banner - using !important to prevent override by site CSS
    const styles = `
        .cc-banner-overlay {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background: rgba(0, 0, 0, 0.5) !important;
            z-index: 999998 !important;
            opacity: 0;
            transition: opacity 0.3s ease !important;
        }
        .cc-banner-overlay.cc-visible {
            opacity: 1 !important;
        }
        .cc-banner {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            background: #fff !important;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15) !important;
            z-index: 999999 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
            transform: translateY(100%);
            transition: transform 0.3s ease !important;
        }
        .cc-banner.cc-visible {
            transform: translateY(0) !important;
        }
        .cc-container {
            max-width: 1200px !important;
            margin: 0 auto !important;
            padding: 24px !important;
            background: #fff !important;
        }
        .cc-header {
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            margin-bottom: 16px !important;
        }
        .cc-header h3 {
            margin: 0 !important;
            font-size: 20px !important;
            color: #1a1a1a !important;
            background: transparent !important;
        }
        .cc-header .cc-icon {
            font-size: 24px !important;
        }
        .cc-description {
            color: #555 !important;
            font-size: 14px !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
            background: transparent !important;
        }
        .cc-description a {
            color: #4F46E5 !important;
            text-decoration: underline !important;
        }
        .cc-categories {
            display: none !important;
            flex-direction: column !important;
            gap: 12px !important;
            margin-bottom: 20px !important;
            padding: 16px !important;
            background: #f8f9fa !important;
            border-radius: 8px !important;
        }
        .cc-categories.cc-expanded {
            display: flex !important;
        }
        .cc-category {
            display: flex !important;
            align-items: flex-start !important;
            gap: 12px !important;
            background: transparent !important;
        }
        .cc-category input[type="checkbox"] {
            width: 20px !important;
            height: 20px !important;
            margin-top: 2px !important;
            cursor: pointer !important;
            accent-color: #4F46E5 !important;
        }
        .cc-category input[type="checkbox"]:disabled {
            cursor: not-allowed !important;
        }
        .cc-category-info {
            flex: 1 !important;
        }
        .cc-category-name {
            font-weight: 600 !important;
            color: #1a1a1a !important;
            font-size: 14px !important;
        }
        .cc-category-desc {
            color: #666 !important;
            font-size: 13px !important;
            margin-top: 2px !important;
        }
        .cc-category-required {
            font-size: 11px !important;
            color: #888 !important;
            font-style: italic !important;
        }
        .cc-buttons {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 12px !important;
            align-items: center !important;
        }
        .cc-btn {
            padding: 12px 24px !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
            border: none !important;
            text-decoration: none !important;
        }
        .cc-btn-accept-all {
            background: #4F46E5 !important;
            color: white !important;
        }
        .cc-btn-accept-all:hover {
            background: #4338CA !important;
        }
        .cc-btn-accept-selected {
            background: #10B981 !important;
            color: white !important;
            display: none !important;
        }
        .cc-btn-accept-selected.cc-visible {
            display: inline-block !important;
        }
        .cc-btn-accept-selected:hover {
            background: #059669 !important;
        }
        .cc-btn-reject {
            background: #f3f4f6 !important;
            color: #374151 !important;
        }
        .cc-btn-reject:hover {
            background: #e5e7eb !important;
        }
        .cc-btn-customize {
            background: transparent !important;
            color: #4F46E5 !important;
            padding: 12px 16px !important;
        }
        .cc-btn-customize:hover {
            background: #f0f0ff !important;
        }
        
        /* Settings button (shown after consent) - STICKY BOTTOM LEFT */
        .cc-settings-btn {
            position: fixed !important;
            bottom: 20px !important;
            left: 20px !important;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
            color: white !important;
            border: none !important;
            padding: 14px 20px !important;
            border-radius: 50px !important;
            font-size: 14px !important;
            font-weight: 600 !important;
            cursor: pointer !important;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4) !important;
            z-index: 999997 !important;
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            transition: all 0.3s ease !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif !important;
            text-decoration: none !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
        .cc-settings-btn:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important;
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5) !important;
        }
        .cc-settings-btn.cc-hidden {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
        }

        @media (max-width: 600px) {
            .cc-container {
                padding: 16px !important;
            }
            .cc-buttons {
                flex-direction: column !important;
            }
            .cc-btn {
                width: 100% !important;
                text-align: center !important;
            }
            .cc-settings-btn {
                bottom: 15px !important;
                left: 15px !important;
                padding: 12px 16px !important;
                font-size: 13px !important;
            }
        }
    `;

    // Cookie utilities
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) {
            try {
                return JSON.parse(decodeURIComponent(match[2]));
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }

    // Get current consent
    function getConsent() {
        return getCookie(CONFIG.cookieName);
    }

    // Check if category is consented
    function hasConsent(category) {
        const consent = getConsent();
        if (!consent) return false;
        if (category === 'necessary') return true;
        return consent.categories && consent.categories[category] === true;
    }

    // Save consent
    function saveConsent(categories) {
        const consent = {
            timestamp: new Date().toISOString(),
            categories: categories
        };
        setCookie(CONFIG.cookieName, consent, CONFIG.cookieExpiry);

        // Dispatch event for other scripts to listen to
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: consent }));

        // Load scripts based on consent
        loadConsentedScripts(categories);
    }

    // Load scripts that require consent
    function loadConsentedScripts(categories) {
        // Google Analytics
        if (categories.analytics) {
            loadGoogleAnalytics();
        }

        // Add more tracking scripts here as needed
        // if (categories.marketing) { loadMarketingScripts(); }
    }

    // Load Google Analytics
    function loadGoogleAnalytics() {
        // Check if GA ID is defined
        const gaId = window.GOOGLE_ANALYTICS_ID || 'G-ZBZWDLCJVJ';

        if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
            return; // Already loaded
        }

        // Load gtag.js
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', gaId);

        console.log('✅ Google Analytics loaded with consent');
    }

    // Inject styles
    function injectStyles() {
        if (document.getElementById('cc-styles')) return;
        const styleEl = document.createElement('style');
        styleEl.id = 'cc-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    // Create and show banner
    function showBanner() {
        // Inject styles first
        injectStyles();

        // Hide settings button if visible
        const existingBtn = document.getElementById('cc-settings-btn');
        if (existingBtn) {
            existingBtn.classList.add('cc-hidden');
        }

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'cc-banner-overlay';
        overlay.id = 'cc-overlay';

        // Create banner HTML
        const banner = document.createElement('div');
        banner.className = 'cc-banner';
        banner.id = 'cc-banner';
        banner.innerHTML = `
            <div class="cc-container">
                <div class="cc-header">
                    <span class="cc-icon">🍪</span>
                    <h3>We value your privacy</h3>
                </div>
                <p class="cc-description">
                    We use cookies to enhance your browsing experience and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    <a href="/cookies.html" target="_blank">Read our Cookie Policy</a>
                </p>
                
                <div class="cc-categories" id="cc-categories">
                    ${Object.entries(CONFIG.categories).map(([key, cat]) => `
                        <div class="cc-category">
                            <input type="checkbox" id="cc-cat-${key}" 
                                   ${cat.required ? 'checked disabled' : ''} 
                                   data-category="${key}">
                            <div class="cc-category-info">
                                <div class="cc-category-name">${cat.name}</div>
                                <div class="cc-category-desc">${cat.description}</div>
                                ${cat.required ? '<div class="cc-category-required">Always active</div>' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="cc-buttons">
                    <button class="cc-btn cc-btn-accept-all" id="cc-accept-all">Accept All</button>
                    <button class="cc-btn cc-btn-accept-selected" id="cc-accept-selected">Accept Selected</button>
                    <button class="cc-btn cc-btn-reject" id="cc-reject">Reject All</button>
                    <button class="cc-btn cc-btn-customize" id="cc-customize">Customize</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(banner);

        // Show with animation
        requestAnimationFrame(() => {
            overlay.classList.add('cc-visible');
            banner.classList.add('cc-visible');
        });

        // Event listeners
        document.getElementById('cc-accept-all').addEventListener('click', () => {
            const categories = { necessary: true, analytics: true, marketing: true };
            saveConsent(categories);
            hideBanner();
            showSettingsButton();
        });

        document.getElementById('cc-accept-selected').addEventListener('click', () => {
            const categories = getSelectedCategories();
            saveConsent(categories);
            hideBanner();
            showSettingsButton();
        });

        document.getElementById('cc-reject').addEventListener('click', () => {
            const categories = { necessary: true, analytics: false, marketing: false };
            saveConsent(categories);
            hideBanner();
            showSettingsButton();
        });

        document.getElementById('cc-customize').addEventListener('click', () => {
            const categoriesEl = document.getElementById('cc-categories');
            const acceptSelectedBtn = document.getElementById('cc-accept-selected');
            const customizeBtn = document.getElementById('cc-customize');

            categoriesEl.classList.toggle('cc-expanded');
            acceptSelectedBtn.classList.toggle('cc-visible');
            customizeBtn.textContent = categoriesEl.classList.contains('cc-expanded') ? 'Hide Options' : 'Customize';
        });
    }

    function getSelectedCategories() {
        const categories = { necessary: true };
        document.querySelectorAll('.cc-category input[type="checkbox"]').forEach(checkbox => {
            if (!checkbox.disabled) {
                categories[checkbox.dataset.category] = checkbox.checked;
            }
        });
        return categories;
    }

    function hideBanner() {
        const banner = document.getElementById('cc-banner');
        const overlay = document.getElementById('cc-overlay');

        if (banner) {
            banner.classList.remove('cc-visible');
            setTimeout(() => banner.remove(), 300);
        }
        if (overlay) {
            overlay.classList.remove('cc-visible');
            setTimeout(() => overlay.remove(), 300);
        }
    }

    function showSettingsButton() {
        // Inject styles first
        injectStyles();

        // Remove existing button if any
        const existing = document.getElementById('cc-settings-btn');
        if (existing) existing.remove();

        const btn = document.createElement('button');
        btn.className = 'cc-settings-btn';
        btn.id = 'cc-settings-btn';
        btn.innerHTML = '🍪 Cookie Settings';
        btn.setAttribute('aria-label', 'Open cookie settings');

        btn.addEventListener('click', () => {
            btn.classList.add('cc-hidden');
            showBanner();

            // Pre-check boxes based on current consent
            const consent = getConsent();
            if (consent && consent.categories) {
                Object.entries(consent.categories).forEach(([key, value]) => {
                    const checkbox = document.getElementById(`cc-cat-${key}`);
                    if (checkbox && !checkbox.disabled) {
                        checkbox.checked = value;
                    }
                });
            }

            // Expand categories
            setTimeout(() => {
                const categoriesEl = document.getElementById('cc-categories');
                const acceptSelectedBtn = document.getElementById('cc-accept-selected');
                const customizeBtn = document.getElementById('cc-customize');
                if (categoriesEl) categoriesEl.classList.add('cc-expanded');
                if (acceptSelectedBtn) acceptSelectedBtn.classList.add('cc-visible');
                if (customizeBtn) customizeBtn.textContent = 'Hide Options';
            }, 100);
        });

        document.body.appendChild(btn);
    }

    // Initialize
    function init() {
        const consent = getConsent();

        if (!consent) {
            // No consent yet - show banner
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', showBanner);
            } else {
                showBanner();
            }
        } else {
            // Has consent - load scripts and show settings button
            loadConsentedScripts(consent.categories);
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', showSettingsButton);
            } else {
                showSettingsButton();
            }
        }
    }

    // Expose API globally
    window.CookieConsent = {
        hasConsent: hasConsent,
        getConsent: getConsent,
        showBanner: showBanner,
        reset: function () {
            deleteCookie(CONFIG.cookieName);
            location.reload();
        }
    };

    // Start
    init();

})();