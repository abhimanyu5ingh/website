import React, { useState, useEffect, type JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { SignInPage } from './SignInPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { StudentDashboard } from './pages/StudentDashboard';
import { AttendancePage } from './pages/AttendancePage';
import { AssignmentsPage } from './pages/AssignmentsPage';

// A custom component to protect routes that require a user to be logged in
const ProtectedRoute = ({ user, children }: { user: User | null, children: JSX.Element }) => {
  if (!user) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener from Firebase checks for login state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  // Show a loading message while Firebase is checking the auth state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Note: In React Router v6, nested routes are relative to the parent path */}
          <Route index element={<StudentDashboard />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
        </Route>

        {/* Redirect base URL to dashboard if logged in, otherwise to login */}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;