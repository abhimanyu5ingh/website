// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // We need these for login

// Your new web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD2uK0-DQEjqFoQqaQECp30Tlx5SkFn7Q",
  authDomain: "attendanceprototype-ee475.firebaseapp.com",
  projectId: "attendanceprototype-ee475",
  storageBucket: "attendanceprototype-ee475.firebasestorage.app",
  messagingSenderId: "511508294220",
  appId: "1:511508294220:web:84512cc0f17f28f4d662e9",
  measurementId: "G-5WWC4VCZ1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export the services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();