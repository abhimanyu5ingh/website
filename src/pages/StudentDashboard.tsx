import React, { useState } from 'react';
import StreakIcon from '../assets/streak_icon.svg?react'; // Special Vite import for SVGs
import './StudentDashboard.css';

export function StudentDashboard() {
  const [name, setName] = useState('Dummy'); // Using useState for the name
  const streak = 5;

  return (
    <div className="student-dashboard">
      {/* Header section */}
      <header className="dashboard-header">
        <h1>Hello, {name}</h1>
        <div className="streak-widget">
          <div className="streak-icon-container">
            <StreakIcon className="streak-svg" />
            <div className="streak-number-container">
              <span className="streak-number">{streak}</span>
            </div>
          </div>
          <span className="streak-text">Day Streak!</span>
        </div>
      </header>

      {/* Announcements Card Section */}
      <div className="announcements-card">
        <div className="card-header">
          <h2>Recent Announcements</h2>
        </div>
        <div className="card-body">
          {/* Announcement items will go here */}
          <p>No new announcements.</p>
        </div>
      </div>
    </div>
  );
}