import React, { useState, useEffect } from "react";
import './AdminUsers.css';
import { useAuth } from "./Store/Auth";
import { Link } from "react-router-dom";

function AdminUsers() {
  const [users, setusers] = useState([]);
  const { authorization } = useAuth();

  // Fetch all users from the MongoDB API
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorization,  // Correct header format with Bearer
        },
      });

      if (response.ok) {
        const data = await response.json();
        setusers(data)
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization:authorization, // Add Bearer prefix
        },
      });
  
      if (response.ok) {
        // Remove the user from the state after deletion
        setusers(users.filter((user) => user._id !== id));
        alert("User deleted successfully");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    getAllUsersData();  // Fetch users on component mount
  }, []);  // Empty dependency array to run once on mount

  return (
    <div>
     <section className="admin-user-section">
      <h1>Admin Users</h1>
     <div className="container admin-user">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
      {users.map((currUser , index)=>{
              return <tr key={index}>
                <td>{currUser.username}</td>
                <td>{currUser.email}</td>
                <td>{currUser.phone}</td>
                <td>
                  <Link
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      padding: "8px 17epx",
                      borderRadius:"10px"
                    }}
                     to={`/admin/users/${currUser._id}/edit`}>Edit</Link>
                </td>
                <td>
                <button
                    onClick={() => deleteUser(currUser._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
      })}
      </tbody>
      </table>
     </div>
     </section>
    </div>
  );
}

export default AdminUsers;
