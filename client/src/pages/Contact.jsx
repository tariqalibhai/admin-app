import { useState, useEffect } from "react";
import './Contact.css'; // Import your CSS file for styling
import { useAuth } from "./Store/Auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [data, setData] = useState(defaultContactFormData);
  const { user } = useAuth();
  const [userData, setUserData] = useState(true);
  const [formStatus, setFormStatus] = useState(""); // For storing form status

  useEffect(() => {
    if (userData && user) {
      setData({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactForm = async (e) => {
    e.preventDefault();

    // Add form validation (optional)
    if (!validateForm(data)) {
      setFormStatus("Please fill in all required fields and enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(defaultContactFormData);
        setFormStatus("Success! Your message has been sent.");
        console.log("Server response: ", responseData);
      } else {
        setFormStatus(`Error: ${response.status} - ${response.statusText}`);
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      setFormStatus("Failed to send message. Please try again later.");
      console.error("Network Error:", error);
    }
  };

  // Function to validate form (optional)
  const validateForm = (formData) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.username &&
      formData.email.trim() !== "" &&
      emailRegex.test(formData.email) &&
      formData.message.trim() !== ""
    );
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Contact Us</h1>
        <p className="subheading">We are here to help you! Drop us a message.</p>
      </div>
      <div className="container">
        <div className="contact-img">
          <img src="/images/support.png" alt="Always ready to help you" />
        </div>

        <section className="section-form">
          <form onSubmit={handleContactForm}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInput}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleInput}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
          {formStatus && <p className="form-status">{formStatus}</p>} {/* Display form status with a class for styling */}
        </section>
      </div>
    </section>
  );
};
