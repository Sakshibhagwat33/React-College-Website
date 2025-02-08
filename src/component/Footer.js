import React from "react";
import "./Footer.css";

function Footer() {
  console.log("Footer component rendered.");
  return (
    <footer className="footer">
      <p>&copy; 2025 College Name. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
