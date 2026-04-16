import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="page-enter">
      <Navbar />
      <main>
        <Hero />
        
        <div className="section-wrapper">
          <Experience />
        </div>
        
        <div className="section-wrapper bg-alt">
          <Education />
        </div>
        
        <div className="section-wrapper">
          <Skills />
        </div>
        
        <div className="section-wrapper bg-alt">
          <Projects />
        </div>
        
        <div className="section-wrapper">
          <Interests />
        </div>
        
        <div className="section-wrapper bg-alt">
          <Contact />
        </div>
        
      </main>
    </div>
  );
};

export default Home;
