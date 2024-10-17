import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { BiSolidContact } from "react-icons/bi";
import { GrServices } from "react-icons/gr";



function AdminLayout() {
  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/admin/users"> <FaUser/> Users</NavLink> {/* Relative path */}
            </li>
            <li>
              <NavLink to="/admin/contacts"><BiSolidContact /> Contacts</NavLink> {/* Relative path */}
            </li>
            <li>
              <NavLink to="/admin/services"><GrServices /> Services</NavLink> 
            </li>
            <li>
              <NavLink to="/admin/home">Home</NavLink> {/* Relative path */}
            </li>
          </ul>
        </nav>
      </div>
      <Outlet /> {/* Child routes will render here */}
    </>
  );
}

export default AdminLayout;
