import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
  console.log("Header component rendered.");
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.jpg.png" alt="College Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/programs">Academic Programs</Link></li>
          <li><Link to="/campus-life">Campus Life</Link></li>
          <li><Link to="/news">News & Events</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Sign Up / Log In</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;