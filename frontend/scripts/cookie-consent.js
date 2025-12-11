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

(function() {
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

    // Styles for the banner
    const styles = `
        .cc-banner-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999998;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .cc-banner-overlay.cc-visible {
            opacity: 1;
        }
        .cc-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #fff;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        .cc-banner.cc-visible {
            transform: translateY(0);
        }
        .cc-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 24px;
        }
        .cc-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;
        }
        .cc-header h3 {
            margin: 0;
            font-size: 20px;
            color: #1a1a1a;
        }
        .cc-header .cc-icon {
            font-size: 24px;
        }
        .cc-description {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .cc-description a {
            color: #4F46E5;
            text-decoration: underline;
        }
        .cc-categories {
            display: none;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
            padding: 16px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        .cc-categories.cc-expanded {
            display: flex;
        }
        .cc-category {
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }
        .cc-category input[type="checkbox"] {
            width: 20px;
            height: 20px;
            margin-top: 2px;
            cursor: pointer;
            accent-color: #4F46E5;
        }
        .cc-category input[type="checkbox"]:disabled {
            cursor: not-allowed;
        }
        .cc-category-info {
            flex: 1;
        }
        .cc-category-name {
            font-weight: 600;
            color: #1a1a1a;
            font-size: 14px;
        }
        .cc-category-desc {
            color: #666;
            font-size: 13px;
            margin-top: 2px;
        }
        .cc-category-required {
            font-size: 11px;
            color: #888;
            font-style: italic;
        }
        .cc-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
        }
        .cc-btn {
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
        }
        .cc-btn-accept-all {
            background: #4F46E5;
            color: white;
        }
        .cc-btn-accept-all:hover {
            background: #4338CA;
        }
        .cc-btn-accept-selected {
            background: #10B981;
            color: white;
            display: none;
        }
        .cc-btn-accept-selected.cc-visible {
            display: inline-block;
        }
        .cc-btn-accept-selected:hover {
            background: #059669;
        }
        .cc-btn-reject {
            background: #f3f4f6;
            color: #374151;
        }
        .cc-btn-reject:hover {
            background: #e5e7eb;
        }
        .cc-btn-customize {
            background: transparent;
            color: #4F46E5;
            padding: 12px 16px;
        }
        .cc-btn-customize:hover {
            background: #f0f0ff;
        }
        
        /* Settings button (shown after consent) */
        .cc-settings-btn {
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: #4F46E5;
            color: white;
            border: none;
            padding: 10px 16px;
            border-radius: 50px;
            font-size: 13px;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 999997;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }
        .cc-settings-btn:hover {
            background: #4338CA;
            transform: scale(1.05);
        }
        .cc-settings-btn.cc-hidden {
            display: none;
        }

        @media (max-width: 600px) {
            .cc-container {
                padding: 16px;
            }
            .cc-buttons {
                flex-direction: column;
            }
            .cc-btn {
                width: 100%;
                text-align: center;
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

    // Create and show banner
    function showBanner() {
        // Add styles
        const styleEl = document.createElement('style');
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);

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
                    <a href="/privacy.html" target="_blank">Read our Privacy Policy</a>
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
        // Remove existing button if any
        const existing = document.getElementById('cc-settings-btn');
        if (existing) existing.remove();

        const btn = document.createElement('button');
        btn.className = 'cc-settings-btn';
        btn.id = 'cc-settings-btn';
        btn.innerHTML = '🍪 Cookie Settings';
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
            document.getElementById('cc-categories').classList.add('cc-expanded');
            document.getElementById('cc-accept-selected').classList.add('cc-visible');
            document.getElementById('cc-customize').textContent = 'Hide Options';
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
        reset: function() {
            deleteCookie(CONFIG.cookieName);
            location.reload();
        }
    };

    // Start
    init();

})();
