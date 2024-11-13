import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaTruck, FaBolt, FaCar, FaExclamationCircle } from 'react-icons/fa';
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage-container">
      <h1>User Portal</h1>
      <div className="tile" onClick={() => navigate('/waste-management')}>
        <FaTruck size={50} style={{ marginRight: '10px' }} />
        <h2>Waste Management</h2>
      </div>
      <div className="tile" onClick={() => navigate('/electricity-management')}>
        <FaBolt size={50} style={{ marginRight: '10px' }} />
        <h2>Electricity Management</h2>
      </div>
      <div className="tile" onClick={() => navigate('/traffic-management')}>
        <FaCar size={50} style={{ marginRight: '10px' }} />
        <h2>Traffic Management</h2>
      </div>
      <div className="tile" onClick={() => navigate('/other-complaints')}>
        <FaExclamationCircle size={50} style={{ marginRight: '10px' }} />
        <h2>Other Complaints</h2>
      </div>
    </div>
    </>
  );
};
