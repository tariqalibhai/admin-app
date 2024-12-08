import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Service from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from './Components/Navbar';
import { PageNotFound } from "./pages/PageNotFount";
import { Logout } from "./pages/Logout";
import AdminLayout from "./Components/layouts/Admin-Layout";
import AdminContact from "./pages/AdminContact";
import AdminUsers from "./pages/AdminUsers";
import UserUpdateForm from "./pages/UserUdateForm";
import WasteManagementPage from "./pages/HomePageModules/waste-management"
import TrafficManagementPage from "./pages/HomePageModules/Traffic-management"
import ComplaintForm from "./pages/HomePageModules/NewComplain"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waste-management" element={<WasteManagementPage/>} />
          <Route path="/traffic-management" element={<TrafficManagementPage/>} />
          <Route path="/NewComplain" element={<ComplaintForm/>} />
          

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Nested routes under /admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} /> {/* Nested */}
            <Route path="contacts" element={<AdminContact />} /> {/* Nested */}
            <Route path="users/:id/edit" element={<UserUpdateForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
