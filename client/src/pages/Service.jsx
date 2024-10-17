import React, { useState, useEffect } from "react";
// import "Services.css"; // Import custom CSS for styling the cards

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/Data/services");
        const data = await response.json();
        
        // If the response is successful, set the services data
        if (response.ok) {
          setServices(data.data);  // Assuming 'data' has a 'data' field containing the services array
        } else {
          console.error("Failed to fetch services");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Render cards
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service._id} className="service-card">
            <h2>{service.service}</h2>
            <p>{service.description}</p>
            <p><strong>Price:</strong> {service.price}</p>
            <p><strong>Provider:</strong> {service.provider}</p>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Service:</strong> {service.service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
