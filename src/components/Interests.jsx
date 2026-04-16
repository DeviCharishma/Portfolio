import React from 'react';
import './Interests.css';

const interests = [
  { name: "Artificial Intelligence", icon: "🧠" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Data Engineering", icon: "🛠️" },
  { name: "Data Structures", icon: "🏗️" },
  { name: "Algorithms", icon: "⚙️" },
  { name: "Data Analytics", icon: "📊" },
  { name: "Block Chain", icon: "⛓️" },
  { name: "Development", icon: "💻" },
  { name: "Designing", icon: "🎨" },
  { name: "Sports", icon: "🏅" }
];

const Interests = () => {
  return (
    <section id="interests" className="interests-section">
      <h2 className="section-title">Areas of Interest</h2>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item glass-panel animate-fade-in">
            <span className="interest-icon">{interest.icon}</span>
            <span className="interest-name">{interest.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
