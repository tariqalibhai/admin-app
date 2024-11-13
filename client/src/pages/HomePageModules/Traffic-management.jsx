import React from 'react';
import { FaPlusSquare, FaListAlt, FaUserCircle } from 'react-icons/fa';
import './waste-management';
import { useNavigate } from 'react-router-dom';

const TrafficManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="waste-management-container">
        <h1>Traffic Management</h1>
      <div className="box" onClick={() => navigate('/new-complaint')}>
        <FaPlusSquare size={50} style={{ marginRight: '10px' }} />
        <h2>New Complaint</h2>
      </div>
      <div className="box" onClick={() => navigate('/view-complaints')}>
        <FaListAlt size={50} style={{ marginRight: '10px' }} />
        <h2>View Complaints</h2>
      </div>
      <div className="box" onClick={() => navigate('/view-profile')}>
        <FaUserCircle size={50} style={{ marginRight: '10px' }} />
        <h2>View Profile</h2>
      </div>
    </div>
  );
};

export default TrafficManagementPage;
