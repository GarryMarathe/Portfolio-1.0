// src/skills/Skills.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

const Skills = () => {
  // Define constants for page navigation
  const PAGE_TECHNICAL = 'technical';
  const PAGE_LANGUAGES = 'languages';
  const PAGE_TOOLS = 'tools';

  // State variables for the current page and skill lists
  const [page, setPage] = useState(PAGE_TECHNICAL);

  // Function to navigate to different pages
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  // Skill lists for technical, non-technical, and tools
  const technicalSkills = [
    { name: 'HTML', logoPath: '/logos/html5.png' },
    { name: 'CSS', logoPath: '/logos/css3.png' },
    { name: 'Bootstrap', logoPath: '/logos/bootstrap.png' },
    { name: 'ReactJS', logoPath: '/logos/reactjs.png' },
    { name: 'NodeJS', logoPath: '/logos/nodejs.png' },
    { name: 'Flask', logoPath: '/logos/flask.png' },
    { name: 'MySQL', logoPath: '/logos/mysql.png' },
    { name: 'MongoDB', logoPath: '/logos/mongodb1.png' },
  ];

  const languages = [
    { name: 'C++', logoPath: '/logos/cpp.png' },
    { name: 'Python', logoPath: '/logos/python.png' },
    { name: 'JavaScript', logoPath: '/logos/javascript.png' },
    
  ];

  const tools = [
    { name: 'Git VCS', logoPath: '/logos/git.png' },
    { name: 'GitHub', logoPath: '/logos/github2.png' },
    { name: 'Canva', logoPath: '/logos/canva.png' },
    { name: 'Figma', logoPath: '/logos/figma.png' },
    { name: 'Firebase', logoPath: '/logos/firebase.png' },
    { name: 'Google Colab', logoPath: '/logos/google-colab.png' },
    { name: 'VS Code', logoPath: '/logos/vscode.png' },
  ];

  // Function to render a list of skills with logos
  const renderSkills = (skills) => (
    <div className="skills-list">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <img src={process.env.PUBLIC_URL + skill.logoPath} alt={skill.name} />
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="skills-container">
      {/* Header section */}
      <div className="skills-header">
        <FontAwesomeIcon icon={faCogs} size="3x" className="skills-icon" />
        <h1>Skills & <span>Abilities</span></h1>
      </div>

      {/* Page navigation buttons */}
      <header>
        <button onClick={() => navigateTo(PAGE_TECHNICAL)} className={`page ${page === PAGE_TECHNICAL ? 'selected' : ''}`}>
          Technical Skills
        </button>
        <button onClick={() => navigateTo(PAGE_LANGUAGES)} className={`page ${page === PAGE_LANGUAGES ? 'selected' : ''}`}>
          Languages
        </button>
        <button onClick={() => navigateTo(PAGE_TOOLS)} className={`page ${page === PAGE_TOOLS ? 'selected' : ''}`}>
          Tools
        </button>
      </header>

      {/* Content area for skills */}
      <div className="skills-content">
        {/* Render skills based on the current page */}
        {page === PAGE_TECHNICAL && renderSkills(technicalSkills)}
        {page === PAGE_LANGUAGES && renderSkills(languages)}
        {page === PAGE_TOOLS && renderSkills(tools)}
      </div>
    </div>
  );
};

export default Skills;
