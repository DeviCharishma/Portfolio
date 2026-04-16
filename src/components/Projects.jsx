import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card card-panel animate-fade-in">
            {project.image ? (
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-period-badge">{project.period}</div>
              </div>
            ) : (
              <div className="project-img-wrapper placeholder-img">
                <div className="placeholder-text">⚙️ {project.title.split(' ')[0]}</div>
                <div className="project-period-badge">{project.period}</div>
              </div>
            )}
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              
              <Link to={`/project/${project.id}`} className="view-project-btn">
                View Project Details <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
