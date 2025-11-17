// backend/firebaseAdmin.js - PRODUCTION READY VERSION
import admin from 'firebase-admin';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔥 Loading Firebase service account...');

let serviceAccount;

// 1️⃣ Try environment variable first (Render/GitHub Actions)
if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.log('🔐 Using FIREBASE_SERVICE_ACCOUNT from environment variable');
    try {
        serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
        console.log('✅ Service account loaded from env var');
    } catch (err) {
        console.error('❌ Failed to parse FIREBASE_SERVICE_ACCOUNT:', err.message);
        throw err;
    }
}
// 2️⃣ Fall back to local file (local development only)
else {
    const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');

    if (existsSync(serviceAccountPath)) {
        console.log('📄 Using local serviceAccountKey.json (dev mode)');
        try {
            serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
            console.log('✅ Service account loaded from local file');
        } catch (err) {
            console.error('❌ Failed to read serviceAccountKey.json:', err.message);
            throw err;
        }
    } else {
        console.error('❌ No Firebase credentials found!');
        console.error('Checked for:');
        console.error(' - Env var: FIREBASE_SERVICE_ACCOUNT');
        console.error(' - Local file:', serviceAccountPath);
        console.error('💡 Add BYPASS_PAYMENT=true to .env for testing without Firebase');
        throw new Error('Firebase credentials missing');
    }
}

console.log('🔧 Initializing Firebase Admin for project:', serviceAccount.project_id);

// 3️⃣ Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    console.log('✅ Firebase Admin initialized successfully');
} else {
    console.log('⚡ Firebase Admin already initialized, reusing instance');
}

const db = admin.firestore();

// 4️⃣ Test Firestore connection (non-blocking)
console.log('🔍 Testing Firestore connection...');
db.listCollections()
    .then(() => {
        console.log('✅ Firestore connection successful');
    })
    .catch((err) => {
        console.error('❌ Firestore connection failed:', err.message);
        if (process.env.BYPASS_PAYMENT === 'true') {
            console.log('💡 Running in BYPASS mode - Firestore errors will be ignored');
        }
    });

export { db, admin };