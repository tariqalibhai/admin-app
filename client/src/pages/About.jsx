import { NavLink } from "react-router-dom";
import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="heading">Why Choose Us?</h1>
          <p className="subheading">Here are the main reasons why we stand out in the industry</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Expertise</h3>
            <p>
              Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customization</h3>
            <p>
              We understand that every business is unique. That's why we create solutions tailored to your specific needs and goals.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customer-Centric</h3>
            <p>
              We prioritize your satisfaction and provide top-notch support to address your IT concerns.
            </p>
          </div>

          <div className="feature-card">
            <h3>Affordability</h3>
            <p>
              We offer competitive pricing without compromising on the quality of our services.
            </p>
          </div>

          <div className="feature-card">
            <h3>Reliability</h3>
            <p>
              Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
            </p>
          </div>
        </div>

        <div className="cta-buttons">
          <NavLink to="/contact">
            <button className="primary-button">Connect Now</button>
          </NavLink>
          <button className="secondary-button">Learn More</button>
        </div>
      </section>
    </div>
  );
};
