import React from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css"; // Import the custom CSS

const AdminHome = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul className="sidebar-nav">
          <li><Link to="/admin/adminHome">Dashboard</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
          <li><Link to="/admin/contacts">Contacts</Link></li>
          <li><Link to="/admin/services">Servics</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Welcome to the Admin Dashboard</h1>
          <p>Manage your platform efficiently.</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button>Add New User</button>
          <button>View Reports</button>
          <button>Manage Settings</button>
        </div>

        {/* Stats Cards */}
        <div className="stats-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>350</p>
          </div>
          <div className="card">
            <h3>Total Contacts</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Total Complaints</h3>
            <p>85</p>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>&copy; 2025 SmartCity Admin Panel</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
