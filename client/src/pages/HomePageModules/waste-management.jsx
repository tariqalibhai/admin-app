import React from 'react';
import { FaPlusSquare, FaListAlt, FaUserCircle } from 'react-icons/fa';
import './Waste-Management.css';
import { useNavigate } from 'react-router-dom';

const WasteManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="waste-management-container">
      <h1 className="page-title">Waste Management Portal</h1>
      <div className="glass-card-container">
        <div className="glass-card" onClick={() => navigate('/NewComplain')}>
          <FaPlusSquare className="glass-card-icon" />
          <h2 className="glass-card-title">New Complaint</h2>
          <p className="glass-card-description">File your waste-related complaints quickly.</p>
        </div>
        <div className="glass-card" onClick={() => navigate('/view-complaints')}>
          <FaListAlt className="glass-card-icon" />
          <h2 className="glass-card-title">View Complaints</h2>
          <p className="glass-card-description">Check and track submitted complaints.</p>
        </div>
        <div className="glass-card" onClick={() => navigate('/view-profile')}>
          <FaUserCircle className="glass-card-icon" />
          <h2 className="glass-card-title">View Profile</h2>
          <p className="glass-card-description">Manage your profile details seamlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default WasteManagementPage;
