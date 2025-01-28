import React from 'react';
import './Traffic-management.css';
import { FaPlusSquare, FaListAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TrafficManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="traffic-management-container">
      <h1>Traffic Management</h1>
      <div className="cards-container">
        <div className="card" onClick={() => navigate('/new-complaint')}>
          <FaPlusSquare size={50} />
          <h2>New Complaint</h2>
          <p>Submit a new traffic-related complaint easily.</p>
        </div>
        <div className="card" onClick={() => navigate('/view-complaints')}>
          <FaListAlt size={50} />
          <h2>View Complaints</h2>
          <p>Check the status of your submitted complaints.</p>
        </div>
        <div className="card" onClick={() => navigate('/view-profile')}>
          <FaUserCircle size={50} />
          <h2>View Profile</h2>
          <p>Update your personal details and view your profile.</p>
        </div>
      </div>
    </div>
  );
};

export default TrafficManagementPage;
