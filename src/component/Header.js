import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  console.log("Header component rendered.");
  return (
    
    <header className="header">
       <div className="container-fluid d-flex justify-content-between align-items-center p-3">
          <div className="logo d-flex align-items-center">
            <div className="logo-box"><img src="logo.jpg.png" alt="logo"></img></div>
            <div className="logo-text">
              <h2>DY PATIL</h2>
              <p>PUNE UNIVERSITY</p>  
            </div>
          </div>
          <div className="contact">
            <p>Speak with specialist: <span className="phone">888-999-0000</span></p>
          </div>
          <div className="social-links">
            <button className="header-btn">MAIL US</button>
            <button className="header-btn">OUR LOCATION</button>
            <div className="icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
        <nav class="nav-links">
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