import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Service from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./Components/Navbar";
import { PageNotFound } from "./pages/PageNotFound";
import { Logout } from "./pages/Logout";
import AdminLayout from "./Components/layouts/Admin-Layout";
import AdminContact from "./pages/AdminContact";
import AdminUsers from "./pages/AdminUsers";
import AdminHome from "./pages/AdminHome/AdminHome";
import UserUpdateForm from "./pages/UserUdateForm";
import WasteManagementPage from "./pages/HomePageModules/waste-management";
import TrafficManagementPage from "./pages/HomePageModules/Traffic-management";
import ComplaintForm from "./pages/HomePageModules/NewComplain";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waste-management" element={<WasteManagementPage />} />
          <Route path="/traffic-management" element={<TrafficManagementPage />} />
          <Route path="/NewComplain" element={<ComplaintForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="adminHome" element={<AdminHome />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="users/:id/edit" element={<UserUpdateForm />} />
          </Route>
        </Routes>
        <ConditionalFooter /> {/* Add Conditional Footer */}
      </Router>
    </div>
  );
}

function ConditionalFooter() {
  const location = useLocation();
  return location.pathname === "/" ? <Footer /> : null;
}

export default App;
