import { useState, useEffect } from "react";
import { useAuth } from "../Store/Auth";
import "./ComplaintForm.css";

const defaultComplaintFormData = {
  username: "",
  email: "",
  message: "",
  image: null,
};

const ComplaintForm = () => {
  const [data, setData] = useState(defaultComplaintFormData);
  const { user } = useAuth();
  const [userData, setUserData] = useState(true);
  const [formStatus, setFormStatus] = useState(""); // For storing form status
  const [imagePreview, setImagePreview] = useState(null); // For storing image preview URL
  const [showPreview, setShowPreview] = useState(false); // To show preview after submission

  useEffect(() => {
    if (userData && user) {
      setData({
        username: user.username || "",
        email: user.email || "",
        message: "",
        image: null,
      });
      setUserData(false);
    }
  }, [user, userData]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Set the preview URL
    }
  };

  const handleComplaintForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("message", data.message);
    if (data.image) {
      formData.append("image", data.image); // Image file from input
    }

    try {
      const response = await fetch("http://localhost:5000/api/complainform/complains", {
        method: "POST",
        body: formData, // Use FormData here instead of JSON.stringify
      });
      if (response.ok) {
        setFormStatus("Success! Your complaint has been submitted.");
        setShowPreview(true); // Show preview after successful submission
        alert("Complain Submitted. You can preview it now.");
      } else {
        setFormStatus(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setFormStatus("Failed to submit complaint. Please try again later.");
      console.error("Network Error:", error);
    }
  };

  return (
    <section className="complaint-section">
      <div className="complaint-container">
        <div className="complaint-header">
          <h1>Submit a Complaint</h1>
          <p>We value your feedback. Please fill out the form below to submit your complaint.</p>
        </div>

        <form onSubmit={handleComplaintForm} className="complaint-form">
          <div className="form-group-Complaint">
            <label htmlFor="username">Username</label>
            <input 
            
              type ="text"
              name="username"
              id="username"
              value={data.username}
              onChange={handleInput}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group-Complaint">
            <label htmlFor="email">Email</label>
            <input
            className="input-new-complain"
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleInput}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group-Complaint">
            <label htmlFor="message">Message</label>
            <textarea
            className="input-new-complain"
              name="message"
              id="message"
              value={data.message}
              onChange={handleInput}
              placeholder="Enter your message"
              rows="5"
              required
            />
          </div>

          <div className="form-group-Complaint">
            <label htmlFor="image">Upload Image</label>
            <input
            className="input-new-complain"
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}

          <button type="submit" className="submit-btn">Submit Complaint</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </div>
    </section>
  );
};

export default ComplaintForm;
