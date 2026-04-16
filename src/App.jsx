import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Devi Charishma Burugupalli. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
