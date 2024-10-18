import React, { useEffect, useState } from "react";
import { useAuth } from "./Store/Auth";
import { useParams } from "react-router-dom";

const UserUpdateForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { authorization } = useAuth(); // Moved inside the component
  const params = useParams();

  console.log("single user params", params); // Fixed typo from 'parmas' to 'params'

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorization, // Include the Authorization header
          },
        }
      );
      const result = await response.json();
      if (response.ok) {
        setData(result); // Set fetched data to state
        setMessage("User retrieved successfully");
      } else {
        setMessage("Error retrieving user data");
      }
    } catch (error) {
      setMessage("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setMessage("User updated successfully");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || "Updating user failed"}`);
      }
    } catch (error) {
      setMessage("Error updating user data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="section-update">
        <div className="update-content container">
          <h1 className="main-heading">Update User Info</h1>
        </div>
        <div className="container grid grid-half-cols">
          <div className="update-img">
            <img src="/images/user-update.png" alt="User update" />
          </div>

          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={data.username} // Use 'data' for form fields
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email} // Use 'data' for form fields
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Mobile</label>
                <input
                  type="text"
                  name="phone" // Change from "mobile" to "phone"
                  id="phone" // Change id to "phone"
                  value={data.phone} // Ensure this refers to data.phone
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <button type="submit" disabled={loading}>
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
            {message && <p>{message}</p>} {/* Display form status */}
          </section>
        </div>
      </section>
    </>
  );
};

export default UserUpdateForm;
