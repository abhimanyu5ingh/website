import React, { useState, useEffect, type JSX } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from './firebaseConfig';

import { SignInPage } from './SignInPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherDashboard } from './pages/TeacherDashboard'; // 1. Import the new teacher page
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

// 2. Helper function to determine the correct redirect path based on email
const getRedirectPath = (user: User | null): string => {
    if (!user || !user.email) return "/login";
    
    const email = user.email.toLowerCase();
    if (email.endsWith('@goa.bits-pilani.ac.in')) {
        if (email.startsWith('f20')) {
            return "/dashboard"; // Student path
        } else {
            return "/teacher-dashboard"; // Teacher path
        }
    }
    return "/login"; // Default for invalid emails or logged-out users
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

        {/* Student Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
        </Route>

        {/* 3. Add the Teacher Dashboard Route */}
        <Route
          path="/teacher-dashboard"
          element={
            <ProtectedRoute user={user}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* 4. Update the catch-all redirect to use our new logic */}
        <Route path="*" element={<Navigate to={getRedirectPath(user)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
