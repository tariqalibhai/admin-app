import React from "react";
import './Services.css'; // Import custom CSS for styling the cards

const Services = () => {
  // Example services data
  const services = [
    {
      id: 1,
      service: "Smart Traffic Management",
      description: "Real-time traffic monitoring and control to reduce congestion in urban areas.",
      price: "$2000",
      provider: "Urban Flow Solutions",
    },
    {
      id: 2,
      service: "Smart Lighting",
      description: "Energy-efficient street lighting systems that adapt to weather and traffic conditions.",
      price: "$1500",
      provider: "EcoLight Innovations",
    },
    {
      id: 3,
      service: "Public Wi-Fi",
      description: "Reliable and high-speed internet access in public spaces for residents and visitors.",
      price: "$800/month",
      provider: "City Connect",
    },
    {
      id: 4,
      service: "Waste Management Systems",
      description: "IoT-enabled smart bins for efficient waste collection and recycling.",
      price: "$5000",
      provider: "Clean City Solutions",
    },
    {
      id: 5,
      service: "Smart Parking",
      description: "Real-time parking availability and booking through a centralized system.",
      price: "$1200",
      provider: "ParkEasy Solutions",
    },
    {
      id: 6,
      service: "Air Quality Monitoring",
      description: "Real-time monitoring of air pollution levels to ensure a healthier environment.",
      price: "$1000",
      provider: "GreenCity Monitors",
    },
  ];
  

  return (
    <div className="services-container">
      <h1 className="main-heading">Our Premium Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card animate-card">
            <div className="card-header">
              <h2>{service.service}</h2>
            </div>
            <div className="card-body">
              <p>{service.description}</p>
              <p><strong>Price:</strong> {service.price}</p>
              <p><strong>Provider:</strong> {service.provider}</p>
            </div>
            <div className="card-footer">
              <button className="service-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
