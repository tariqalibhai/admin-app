import React from "react";
import './Services.css'; // Import custom CSS for styling the cards

const Services = () => {
  // Example services data
  const services = [
    {
      id: 1,
      service: "Web Development",
      description: "We build modern, responsive, and user-friendly websites to help your business grow.",
      price: "$1500",
      provider: "ABC Web Solutions",
    },
    {
      id: 2,
      service: "SEO Optimization",
      description: "Improve your website's ranking on search engines and drive more organic traffic.",
      price: "$800",
      provider: "SEO Experts",
    },
    {
      id: 3,
      service: "Mobile App Development",
      description: "Create feature-rich, scalable mobile apps for iOS and Android to engage your customers.",
      price: "$2500",
      provider: "Tech Innovators",
    },
    {
      id: 4,
      service: "Digital Marketing",
      description: "Boost your brand visibility through effective social media and online advertising campaigns.",
      price: "$1000",
      provider: "Marketing Gurus",
    },
    {
      id: 5,
      service: "Cloud Hosting",
      description: "Reliable and secure cloud hosting services to ensure your website is always online.",
      price: "$500/year",
      provider: "Cloud Masters",
    },
    {
      id: 6,
      service: "Graphic Design",
      description: "We provide creative and professional design services, including logos, banners, and more.",
      price: "$1200",
      provider: "Design Studio",
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
