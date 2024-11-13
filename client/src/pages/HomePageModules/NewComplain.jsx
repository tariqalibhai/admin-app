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
        method: 'POST',
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
    <>
      <section className="section-complaint">
        <div className="complaint-content container">
          <h1>Submit a Complain</h1>
        </div>
        <div className="container grid grid-half-cols">
          <section className="section-form">
            <form onSubmit={handleComplaintForm}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
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
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={data.message}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="image">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <div>
                  <img
                    src={imagePreview}
                    alt="Selected"
                    style={{ width: "500px", height: "auto", marginTop: "10px" }}
                  />
                </div>
              )}
              <div>
                <button type="submit">Submit Complaint</button>
              </div>
            </form>
            {formStatus && <p>{formStatus}</p>} {/* Display form status */}
          </section>
        </div>

        {/* Complaint Preview Section */}
        {/* {showPreview && (
          <div className="complaint-preview">
            <h2>Complaint Submitted</h2>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Message:</strong> {data.message}</p>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Complaint Preview"
                style={{ width: "200px", height: "auto", marginTop: "10px" }}
              />
            )}
          </div>
        )} */}
      </section>
    </>
  );
};
export default ComplaintForm;
