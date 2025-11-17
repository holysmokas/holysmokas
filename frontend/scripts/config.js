// config.js - API Configuration
const ENV = 'production'; // Change to 'development' for local testing

const CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:3001',
        GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec',
        SITE_URL: 'http://localhost:5173'
    },
    production: {
        API_BASE_URL: 'https://34.136.122.71:3001',
        GOOGLE_SHEETS_URL: 'https://script.google.com/macros/s/AKfycbzJOYtbHJRuIgQTT7BVhmzGvRaJ1TMBd-VDoe_DUk_Rbnyr9EBiB5W9Xutir8r8LcgUTg/exec',
        SITE_URL: 'https://holysmokas.com'
    }
};

export const API_BASE_URL = CONFIG[ENV].API_BASE_URL;
export const GOOGLE_SHEETS_URL = CONFIG[ENV].GOOGLE_SHEETS_URL;
export const SITE_URL = CONFIG[ENV].SITE_URL;

export const ENDPOINTS = {
    createPaymentSession: `${API_BASE_URL}/create-payment-session`,
    stripeWebhook: `${API_BASE_URL}/stripe-webhook`,
    userProjects: (userId) => `${API_BASE_URL}/user-projects/${userId}`,
    claimProjects: `${API_BASE_URL}/claim-projects`,
    requestModification: `${API_BASE_URL}/request-modification`,
    checkDomain: `${API_BASE_URL}/check-domain`,
    deploy: `${API_BASE_URL}/deploy`,
    contactFormSubmission: GOOGLE_SHEETS_URL
};