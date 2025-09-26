import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>My App</h2>
      <ul>
        <li><NavLink to="/dashboard" end>🏠 Home</NavLink></li>
        <li><NavLink to="/dashboard/attendance">✅ Attendance</NavLink></li>
        <li><NavLink to="/dashboard/assignments">📝 Assignments</NavLink></li>
        <li><NavLink to="/dashboard/announcements">📢 Announcements</NavLink></li>
      </ul>
    </nav>
  );
}