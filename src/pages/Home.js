import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div class="banner">
         <h2>Welcome to DPU UNIVARCITY</h2>
          <p>Shaping the Future of Education</p>
        
          <button class="quick-links" onClick={() => console.log("Apply Now clicked")}>
            Apply Now
          </button>
          <button class="quick-links" onClick={() => console.log("Visit Campus clicked")}>
            Visit Campus
          </button>
          </div>
    </div>
  );
}

export default Home;
