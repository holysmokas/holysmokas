import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0qVQm59S1_OFJcYLr2ILyGB9m-SoxHro",
    authDomain: "holysmokas-4ef36.firebaseapp.com",
    projectId: "holysmokas-4ef36",
    storageBucket: "holysmokas-4ef36.firebasestorage.app",
    messagingSenderId: "236391401471",
    appId: "1:236391401471:web:16780dc40257205caf09ca",
    measurementId: "G-LRKVZGKNLD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };