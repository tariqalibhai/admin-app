import React from "react"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer" style={{ width: "100%", margin: "0 auto" }}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Smart Town</h3>
          <p className="slogan">Building the future, one innovation at a time.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              FB
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              TW
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              IN
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Smart Town. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer