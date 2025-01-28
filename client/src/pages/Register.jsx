import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Store/Auth";
import './Register.css';

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const responseData = await response.json();
        storeTokenInLS(responseData.token);
        alert("Registration successful!");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate('/login');
      } else {
        alert("Error during registration. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <section className="registration-section">
      <div className="registration-container">
        <div className="registration-image">
          <img
            src="./public./smart"
            alt="A nurse with a cute look"
            className="animated-image"
          />
        </div>
        <div className="registration-form">
          <h1 className="form-heading">Registration Form</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleInput}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact</label>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleInput}
                placeholder="Enter your contact number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
