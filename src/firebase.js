// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs2tQkjvJbNHiEPH67DSisiGYZka8k8Pg",
  authDomain: "portfolio-contacts-6df47.firebaseapp.com",
  projectId: "portfolio-contacts-6df47",
  storageBucket: "portfolio-contacts-6df47.firebasestorage.app",
  messagingSenderId: "618819098052",
  appId: "1:618819098052:web:d2fe7a766d602fbc928091",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firebase services
export { addDoc, collection, db, serverTimestamp };
