// src/project/Projects.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import CardSlider from './cardslider'; // Import the CardSlider component
import './project.css';

const Projects = () => {
  return (
    <div className="projects-container" id='project'>
      {/* Header section */}
      <div className="projects-header">
        <FontAwesomeIcon icon={faProjectDiagram} size="3x" className="projects-icon" />
        <h1>Projects</h1>
      </div>

      {/* Content area for card slider */}
      <CardSlider />

    </div>
  );
};

export default Projects;
