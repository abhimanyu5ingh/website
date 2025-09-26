import React from 'react';
import './SignInPage.css';
import GoogleIcon from './GoogleIcon';

export function SignInPage() {
  const handleGoogleSignIn = () => {
    console.log("Sign-in button clicked! Firebase logic will go here later.");
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