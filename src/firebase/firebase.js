// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-pXHyIWH_KZa9dW6ehhbRO65Dz3O12HA",
  authDomain: "newsletter-55070.firebaseapp.com",
  projectId: "newsletter-55070",
  storageBucket: "newsletter-55070.appspot.com",
  messagingSenderId: "88670943525",
  appId: "1:88670943525:web:1d27de4a995e8cb59d82cc",
  measurementId: "G-SP6G4EGNW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);



