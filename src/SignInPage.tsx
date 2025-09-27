import { useNavigate } from 'react-router-dom';
import React from 'react';
import './SignInPage.css';
import GoogleIcon from './GoogleIcon';

export function SignInPage() {
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    navigate("/dashboard");
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