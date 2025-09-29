import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebaseConfig';
import './SignInPage.css';
import GoogleIcon from './GoogleIcon';

export function SignInPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;

      // 1. List of special exception emails for testing
      const teacherExceptionEmails = [
        'collegeisover@gmail.com',
        'vinayaksingh3012@gmail.com'
      ];

      if (!email) {
        await signOut(auth);
        alert("Could not retrieve email. Access denied.");
        return;
      }

      const lowerCaseEmail = email.toLowerCase();

      // 2. Check if the logged-in email is one of the exceptions
      if (teacherExceptionEmails.includes(lowerCaseEmail)) {
        console.log("Redirecting exception email user as teacher...");
        navigate('/teacher-dashboard');
        return; // Stop here if it's an exception email
      }
      
      // 3. If not an exception, proceed with the normal BITS domain check
      const isValidDomain = lowerCaseEmail.endsWith('@goa.bits-pilani.ac.in');

      if (isValidDomain) {
        if (lowerCaseEmail.startsWith('f20')) {
          // Student Login
          navigate('/dashboard');
        } else {
          // Teacher/Staff Login
          navigate('/teacher-dashboard');
        }
      } else {
        // Not a valid domain or exception, sign them out and show an error
        await signOut(auth);
        alert("Access Denied. Please use a valid BITS Goa email address or an authorized test account.");
      }

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
