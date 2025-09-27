// Firebase configuration for web
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDMRhZ7tuUTJEzIPNwIysVz_63lHGPYTQM",
  authDomain: "telemetry-system-cb467.firebaseapp.com",
  projectId: "telemetry-system-cb467",
  storageBucket: "telemetry-system-cb467.appspot.com",
  messagingSenderId: "159703803816",
  appId: "1:159703803816:web:48e221ab24a5fa7bc59f9d",
  measurementId: "G-B3CBLSMR45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
