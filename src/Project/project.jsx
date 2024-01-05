// src/project/Projects.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './project.css';

const Projects = () => {
  // Dummy project data (replace with your actual project data)
  const projects = [
    {
      title: 'Project 1',
      thumbnailPath: '/thumbnails/project1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Project 2',
      thumbnailPath: '/thumbnails/project2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {/* Header section */}
      <div className="projects-header">
        <FontAwesomeIcon icon={faProjectDiagram} size="3x" className="projects-icon" />
        <h1>Projects</h1>
      </div>

      {/* Content area for project cards */}
      <div className="projects-content">
        {/* Render project cards */}
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={process.env.PUBLIC_URL + project.thumbnailPath} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
