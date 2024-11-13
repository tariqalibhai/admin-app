import React from 'react';
import { FaPlusSquare, FaListAlt, FaUserCircle } from 'react-icons/fa';
import './Waste-Management.css';
import { useNavigate } from 'react-router-dom';

const WasteManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="waste-management-container">
        <h1>Waste Management</h1>
      <div className="box" onClick={() => navigate('/NewComplain')}>
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

export default WasteManagementPage;
