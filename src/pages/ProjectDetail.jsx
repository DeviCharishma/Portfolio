import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../components/Projects.css'; // Reusing some base styles

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  // Scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div style={{padding: '5rem', textAlign: 'center'}}>Project Not Found</div>;

  return (
    <div className="page-enter" style={{ minHeight: '100vh', background: '#f8fafc' }}>
      
      {/* Detail Header Banner */}
      <div style={{
        height: '400px',
        position: 'relative',
        background: project.image ? `url(${project.image}) center/cover no-repeat` : 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'inset 0 -50px 100px rgba(0,0,0,0.5)'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)'}}></div>
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', padding: '0 2rem' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>{project.title}</h1>
          <p style={{ color: '#e2e8f0', fontSize: '1.2rem', fontWeight: 600 }}>{project.period}</p>
        </div>
      </div>

      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Link to="/" style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
          color: 'var(--accent-color)', fontWeight: 700, marginBottom: '3rem', padding: '0.5rem 1rem', background: 'white', borderRadius: '30px', boxShadow: 'var(--shadow-sm)'
        }}>
          ← Back to Portfolio
        </Link>
        
        <div className="card-panel animate-fade-in" style={{ padding: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>About the Project</h2>
          <ul style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem', listStyleType: 'disc', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Array.isArray(project.about) ? project.about.map((point, index) => (
              <li key={index}>{point}</li>
            )) : <li>{project.about}</li>}
          </ul>
          
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Technologies & Skills Leveraged</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {project.skills.map((skill, index) => (
              <span key={index} style={{
                background: '#f0f9ff',
                color: 'var(--accent-color)',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                fontWeight: 600,
                border: '1px solid #bae6fd',
                fontSize: '1.05rem',
                boxShadow: '0 2px 5px rgba(14, 165, 233, 0.1)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ProjectDetail;
