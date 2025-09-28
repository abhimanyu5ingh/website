import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebaseConfig';
import './SignInPage.css';
import GoogleIcon from './GoogleIcon';

export function SignInPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // This triggers the Google sign-in popup
      await signInWithPopup(auth, googleProvider);
      // After successful sign-in, navigate to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  return (
    <div className="signin-container">
      <div className="blur-overlay"></div>
      <div className="content">
        <h1>Welcome</h1>
        <div className="spacer"></div>
        <button className="google-signin-button" onClick={handleGoogleSignIn}>
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}