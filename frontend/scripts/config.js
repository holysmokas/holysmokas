// config.js - API Configuration with auto-detection
const isLocalhost = window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

const ENV = isLocalhost ? 'development' : 'production';

const CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:8080',
        GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec',
        SITE_URL: 'http://localhost:5173'
    },
    production: {
        API_BASE_URL: 'https://holysmokas.com',
        GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec',
        SITE_URL: 'https://holysmokas.com'
    }
};

export const API_BASE_URL = CONFIG[ENV].API_BASE_URL;
export const GOOGLE_SHEETS_URL = CONFIG[ENV].GOOGLE_SHEETS_URL;
export const SITE_URL = CONFIG[ENV].SITE_URL;

export const ENDPOINTS = {
    createPaymentSession: `${API_BASE_URL}/create-payment-session`,
    stripeWebhook: `${API_BASE_URL}/webhook`,
    userProjects: (userId) => `${API_BASE_URL}/user-projects/${userId}`,
    claimProjects: `${API_BASE_URL}/claim-projects`,
    requestModification: `${API_BASE_URL}/request-modification`,
    checkDomain: `${API_BASE_URL}/check-domain`,
    deploy: `${API_BASE_URL}/deploy`,
    contactFormSubmission: GOOGLE_SHEETS_URL
};

console.log(`🔧 Config Mode: ${ENV === 'development' ? '🛠️ LOCAL DEV' : '🚀 PRODUCTION'}`);
console.log(`📡 API URL: ${API_BASE_URL}`);
console.log('📋 Request Modification Endpoint:', ENDPOINTS.requestModification);