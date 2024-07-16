// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6C-pus3DffsEPqH7LdruVAheQ32C2vJ8",
  authDomain: "newsletter-cfb67.firebaseapp.com",
  projectId: "newsletter-cfb67",
  storageBucket: "newsletter-cfb67.appspot.com",
  messagingSenderId: "71654651744",
  appId: "1:71654651744:web:6dd2f439743b6eae69d005",
  measurementId: "G-9KDGXLLYY2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);



