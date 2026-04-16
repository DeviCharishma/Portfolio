import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "C++", "C#", "TypeScript", "JavaScript", "SQL", "MySQL", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚛️",
    skills: ["React.js", "Angular", "Node.js", "Express", "Spring Boot", "PyTorch", "LangChain", "scikit-learn"]
  },
  {
    title: "Cloud & Data Platforms",
    icon: "☁️",
    skills: ["AWS", "Azure", "GCP", "Hadoop", "Spark", "Hive", "EMR", "Salesforce", "Informatica Cloud", "Snowflake", "Marketing Cloud", "Terraform", "Kafka", "SageMaker", "Vertex AI"]
  },
  {
    title: "Tools & Core Areas",
    icon: "🛠️",
    skills: ["Data Science & Analysis", "Cloud Engineering", "ETL Pipelines", "ML & AI", "Big Data", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Power BI", "Tableau", "Agile", "Git", "Prompt Engineering"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-layout-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-section-card card-panel animate-fade-in">
            <div className="skill-cat-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skill-pills">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
