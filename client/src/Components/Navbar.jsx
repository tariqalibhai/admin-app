import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../pages/Store/Auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/" className="brand-name">
              SMART-TOWN
            </NavLink>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className="nav-item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-item">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="nav-item">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-item">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin" className="nav-item">
                  Admin
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className="nav-item">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="nav-item">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="nav-item">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
