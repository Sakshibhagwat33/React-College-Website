import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const ThreeColumnLayout = () => {
  const navigate = useNavigate();
  return (
      <div className="home-container">
        <div className="banner">
          <h2>Welcome to DPU UNIVARCITY</h2>
          <p>Shaping the Future of Education</p>
          <button className="quick-links" onClick={() => navigate("/Admissions")}>
            Apply Now
          </button>
          <button className="quick-links" onClick={() => navigate("/campus-life")}>
            Visit Campus
          </button>
        </div>
      </div> 
  );
};

export default ThreeColumnLayout;
