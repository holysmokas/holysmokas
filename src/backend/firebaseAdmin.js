// backend/firebaseAdmin.js
import admin from 'firebase-admin';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔐 Loading Firebase service account...');

const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');

if (!existsSync(serviceAccountPath)) {
    console.error('❌ serviceAccountKey.json NOT FOUND at:', serviceAccountPath);
    throw new Error('Service account key file is missing');
}

console.log('✅ Service account file found at:', serviceAccountPath);

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

console.log('🔑 Initializing Firebase Admin for project:', serviceAccount.project_id);

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
    });
    console.log('✅ Firebase Admin initialized successfully');
}

const db = admin.firestore();

console.log('🔍 Testing Firestore connection...');
db.listCollections()
    .then(() => console.log('✅ Firestore connection successful!'))
    .catch(err => console.error('❌ Firestore connection failed:', err.message));

export { db, admin };
