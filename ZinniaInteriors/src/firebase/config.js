// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8QbgsI4DRWwro3dzyPTtDqzYhwZNJM_k",
  authDomain: "zinniainteriors.firebaseapp.com",
  projectId: "zinniainteriors",
  storageBucket: "zinniainteriors.firebasestorage.app",
  messagingSenderId: "426906818608",
  appId: "1:426906818608:web:566245a2d9233eaa2835f5",
  measurementId: "G-JYGL3F25SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Auth, Firestore, and App for your application components
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;