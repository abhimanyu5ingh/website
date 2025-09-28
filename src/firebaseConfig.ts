// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // <-- Added Auth imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZKN56WuYIhAHaEibSPzqhS9dyi9dPFvY",
  authDomain: "website-3ad6d.firebaseapp.com",
  projectId: "website-3ad6d",
  storageBucket: "website-3ad6d.firebasestorage.app",
  messagingSenderId: "786778710819",
  appId: "1:786778710819:web:61a6707508f8005e5ba296",
  measurementId: "G-MRYJVDXMQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
