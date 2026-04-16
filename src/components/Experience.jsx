import React, { useState } from 'react';
import untLogo from '../assets/unt_logo.png';
import gepLogo from '../assets/gep_logo_attached.png';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Salesforce Admin | Developer (Software Developer)",
    company: "University of North Texas",
    logo: untLogo,
    period: "Jan 2025 - Present",
    location: "Denton, Texas",
    points: [
      "Collaborated with Salesforce development teams to support Lightning Web Components (LWC), and SOQL-based workflows through testing, documentation, and data validation in production environments.",
      "Integrated OpenAI APIs to surface AI-generated insights within workflows, reducing manual data interpretation effort by 30%.",
      "Implemented data deduplication pipelines using Informatica Cloud with ML-assisted anomaly detection, reducing data errors by 25%.",
      "Automated ETL processes and data analysis using advanced Excel, Python scripts, and NLP-based text classification applied to Salesforce exports.",
      "Designed and automated Salesforce Marketing Cloud email templates utilizing predictive audience segmentation, improving delivery efficiency by 25%.",
      "Assisted in CI/CD workflows and tested CRM deployments across sandbox and production environments, reducing post-deployment issues by 15%."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "GEP Worldwide",
    logo: gepLogo,
    period: "July 2022 - Jun 2024",
    location: "Hyderabad, India",
    points: [
      "Engineered scalable REST APIs and enterprise UI components using NodeJS, TypeScript, AngularJS, HTML, and CSS, improving workflow efficiency by 30% and reducing user errors by 15%.",
      "Architected metadata-driven components within Form Designer, enabling dynamic form behavior, reusable configurations, and complex data routing.",
      "Enhanced front-end performance and UI/UX design, successfully reducing page load times by 25% through AngularJS best practices.",
      "Led successful CI/CD pipeline migrations of components to the main GEP build pipeline, accelerating release timelines by 20%.",
      "Performed code reviews, advanced code refactoring, and production debugging, reducing post-release defects by 35%."
    ]
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`experience-card card-panel animate-fade-in ${expandedId === exp.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(exp.id)}
          >
            <div className="exp-visible-header">
              <div className="exp-logo-container">
                <img src={exp.logo} alt={exp.company} className="exp-logo" />
              </div>
              <div className="exp-title-stack">
                <h3 className="role">{exp.role}</h3>
                <h4 className="company">{exp.company} <span className="location">• {exp.location}</span></h4>
              </div>
              <div className="exp-right-stack">
                <div className="exp-period">{exp.period}</div>
                <div className="expand-indicator">
                  {expandedId === exp.id ? '−' : '+'}
                </div>
              </div>
            </div>
            
            <div className={`exp-hidden-content ${expandedId === exp.id ? 'show' : ''}`}>
              <ul className="exp-points">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
