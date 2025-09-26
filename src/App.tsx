import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SignInPage } from './SignInPage';
import { DashboardLayout } from './layouts/DashboardLayout';
import { StudentDashboard } from './pages/StudentDashboard';
import { AttendancePage } from './pages/AttendancePage';
// Import other pages here...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<SignInPage />} />

        {/* Routes for the dashboard, protected by the layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="attendance" element={<AttendancePage />} />
          {/* <Route path="assignments" element={<AssignmentsPage />} /> */}
          {/* <Route path="announcements" element={<AnnouncementsPage />} /> */}
        </Route>

        {/* Redirect base URL to the login page */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;