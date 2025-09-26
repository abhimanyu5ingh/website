import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is a placeholder for the page content
import { Sidebar } from '../components/Sidebar';
import './DashboardLayout.css';

export function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}