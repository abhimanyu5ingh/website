import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, CalendarCheck2, FileText, Megaphone } from 'lucide-react';
import './Sidebar.css';

export function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 />
      <ul>
        <li><NavLink to="/dashboard" end><Home /><span>Home</span></NavLink></li>
        <li><NavLink to="/dashboard/attendance"><CalendarCheck2 /><span>Attendance</span></NavLink></li>
        <li><NavLink to="/dashboard/assignments"><FileText /><span>Assignments</span></NavLink></li>
        <li><NavLink to="/dashboard/announcements"><Megaphone /><span>Annoucements</span></NavLink></li>
      </ul>
    </nav>
  );
}