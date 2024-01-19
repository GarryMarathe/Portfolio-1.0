import React, { useState } from 'react';
import './academics.css';

const Academics = () => {
  const [page, setPage] = useState('education');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const educationData = [
    { institution: 'Your University', degree: 'Bachelor of Science', year: '2022' },
    // Add more entries as needed
  ];

  const workExperienceData = [
    { position: 'Software Developer', company: 'Tech Company', year: '2020-2022' },
    // Add more entries as needed
  ];

  const renderEducation = () => (
    <div className="education-section">
      {educationData.map((edu, index) => (
        <div key={index} className="edu-entry">
          <p>{edu.institution}</p>
          <p>{edu.degree}</p>
          <p>{edu.year}</p>
        </div>
      ))}
    </div>
  );

  const renderWorkExperience = () => (
    <div className="work-section">
      {workExperienceData.map((work, index) => (
        <div key={index} className="work-entry">
          <p>{work.position}</p>
          <p>{work.company}</p>
          <p>{work.year}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="academics-container">
      <div className="academics-header">
        <h1>Academics & <span>Work Experience</span></h1>
      </div>

      <header className='headertech'>
        <button onClick={() => navigateTo('education')} className={`page ${page === 'education' ? 'selected' : ''}`} >
          Education
        </button>
        <button onClick={() => navigateTo('work-experience')} className={`page ${page === 'work-experience' ? 'selected' : ''}`} >
          Work Experience
        </button>
      </header>

      <div className="academics-content">
        {page === 'education' && renderEducation()}
        {page === 'work-experience' && renderWorkExperience()}
      </div>
    </div>
  );
};

export default Academics;
