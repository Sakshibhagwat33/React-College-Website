import React from "react";
import "./Footer.css";

function Footer() {
  console.log("Footer component rendered.");
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 column" style={{ backgroundColor: "#FFD54F" }}>
            <h2>⚡ INCREASE YOUR POWER OF ATTENTION , AND MINDFULNESS</h2>
            <button className="btn btn-outline-light">MORE INFO</button>
          </div>
          <div className="col-md-4 column" style={{ backgroundColor: "#FF6F00" }}>
            <h2>🏛 WE WORK HARD TO IMPROVE STUDENT ACHIEVEMENT</h2>
            <button className="btn btn-outline-light">MORE INFO</button>
          </div>
          <div className="col-md-4 column" style={{ backgroundColor: "#283593" }}>
            <h2>👥 OFFERING SUCCESS ORIENTATION FOR EACH STUDENT</h2>
            <button className="btn btn-outline-light">MORE INFO</button>
          </div>
        </div>
    <footer className="footer">
      <p>&copy; 2025 DPU CAMPUS. | Education University. </p>
      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
