import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Home, CalendarCheck2, FileText, Megaphone, LogOut } from 'lucide-react';
import './Sidebar.css';

export function Sidebar() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <h2>My App</h2>
        <ul>
          <li><NavLink to="/dashboard" end><Home /><span>Home</span></NavLink></li>
          <li><NavLink to="/dashboard/attendance"><CalendarCheck2 /><span>Attendance</span></NavLink></li>
          <li><NavLink to="/dashboard/assignments"><FileText /><span>Assignments</span></NavLink></li>
          <li><NavLink to="/dashboard/announcements"><Megaphone /><span>Announcements</span></NavLink></li>
          
          {/* This is now a button that triggers the sign-out function */}
          <li>
            <button className="logout-button" onClick={handleSignOut}>
              <LogOut />
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}