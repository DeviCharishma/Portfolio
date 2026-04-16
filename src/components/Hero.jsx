import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="hero-content card-panel animate-fade-in">
        <div className="profile-container">
          <img 
            src="/src/assets/profile.jpg" 
            alt="Devi Charishma Burugupalli" 
            className="profile-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://ui-avatars.com/api/?name=Devi+Charishma&background=e2e8f0&color=0f172a&size=200";
            }}
          />
        </div>
        
        <h1 className="hero-name">DEVI CHARISHMA BURUGUPALLI</h1>
        
        <div className="hero-titles">
          <span>Software Engineer</span>
          <span className="dot">•</span>
          <span>AI/ML</span>
          <span className="dot">•</span>
          <span>Data Analyst</span>
          <span className="dot">•</span>
          <span>Data Engineer</span>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/DeviCharishma" target="_blank" rel="noopener noreferrer" className="btn-social">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/devi-charishma-burugupalli/" target="_blank" rel="noopener noreferrer" className="btn-social">
            LinkedIn
          </a>
          <a href="#contact" className="btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
