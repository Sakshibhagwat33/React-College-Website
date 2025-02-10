import React from 'react';
import './About.css'; // Custom CSS for styling
import { Carousel } from 'react-responsive-carousel'; // For image carousel (if needed)
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

// Sample timeline data
const milestones = [
  { year: '1990', event: 'College Founded' },
  { year: '2000', event: 'First International Partnership' },
  { year: '2010', event: 'Expansion of Campus' },
  { year: '2015', event: 'New Academic Programs Introduced' },
  { year: '2020', event: 'Accredited by National Assessment & Accreditation Council Organization' },
];

const About = () => {
  return (
    <div className="about-page">
      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to empower students with a well-rounded education, 
          fostering growth, innovation, and leadership in an ever-changing world. 
          We envision a future where our graduates make a significant impact in their communities and beyond.
        </p>
        
        {/* Example Carousel for Mission & Vision */}
        <Carousel>
          <div>
            <img src="future.jpg" alt="Mission Image 1" />
            <p className="legend">Empowering Future Leaders</p>
          </div>
          <div>
            <img src="Teaching.jpg" alt="Mission Image 2" />
            <p className="legend">Innovative Learning</p>
          </div>
          <div>
            <img src="community.jpg" alt="Mission Image 3" />
            <p className="legend">Community Engagement</p>
          </div>
        </Carousel>
      </section>

      {/* History Section */}
      <section className="history">
        <h2>Our History</h2>
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <h3>{milestone.year}</h3>
              <p>{milestone.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <section className="principal-message">
        <h2>Message from the Principal</h2>
        <div className="message-content">
          <p>
            Welcome to our college! We pride ourselves on providing an inclusive and dynamic learning environment 
            that nurtures the talents of our students. I am committed to leading this institution towards even greater achievements 
            and ensuring that our students are prepared to thrive in the future.
          </p>
          {/* Principal's Image or Video */}
          <div className="principal-media">
            <img src="principle.jpg" alt="Principal" />
          </div>
        </div>
      </section>
      <section className="accreditations">
        <h1>Accreditations & Affiliations</h1>
        <div className="accreditation-logos">
          <img src="Accredite.jpg" alt="Accreditation1"/>
          <img src="Accredite1.jpg" alt="Accreditation 2" />
          <img src="Accredite2.jpg" alt="Accreditation 3" />
        </div>
      </section>
    </div>
  );
}

export default About ;
