import React, { useState } from 'react';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "University of North Texas",
    period: "August 2024 - May 2026",
    location: "Denton, TX",
    courses: [
      "Graph Theory", "Software Dev for AI", "Information Retrieval", "Machine Learning",
      "Operating Sys Des", "Data Analytics I", "Data Visualization", "Fundamentals of DB",
      "Comp Algorithms", "Big Data, Data Science", "Software Engineer"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology, Information Technology",
    school: "Gayatri Vidya Parishad",
    period: "August 2018 - May 2022",
    location: "India",
    courses: [
      "C Programming", "Software Engineering", "Mathematical Found. of CS", "Digital Logic Design", 
      "Python Programming", "Data Structures", "Java Programming", "Computer Organization", 
      "Principles of Programming Languages", "E-Commerce", "OOA & D Using UML", "Computer Graphics", 
      "Adv Java Programming", "UNIX and Shell Programming", "Database Management Systems", "Operating Systems", 
      "Human Computer Interaction", "Web Technologies", "Computer Networks", "Software Testing", "Data Mining", 
      "Artificial Intelligence", "Cryptography and Network Security", "Big Data Analysis", "Mobile Computing", 
      "Cloud Computing", "Distributed Systems", "Neural Networks", "Management Information System"
    ]
  }
];

const Education = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCourses = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu) => (
          <div key={edu.id} className="edu-card card-panel animate-fade-in">
            <div className="edu-main-content">
              <div className="edu-icon">🎓</div>
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-school">{edu.school} <span className="edu-location">• {edu.location}</span></h4>
                <div className="edu-meta-mobile">
                  <span className="edu-period">{edu.period}</span>
                </div>
              </div>
              <div className="edu-right-actions">
                <span className="edu-period desktop-only">{edu.period}</span>
                <button 
                  className={`btn-courses ${expandedId === edu.id ? 'active' : ''}`}
                  onClick={() => toggleCourses(edu.id)}
                >
                  {expandedId === edu.id ? 'Hide Courses' : 'View Courses'}
                </button>
              </div>
            </div>
            
            <div className={`edu-courses-dropdown ${expandedId === edu.id ? 'show' : ''}`}>
              <h5 className="courses-title">Relevant Coursework</h5>
              <div className="courses-list">
                {edu.courses.map((course, idx) => (
                  <span key={idx} className="course-pill">{course}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
