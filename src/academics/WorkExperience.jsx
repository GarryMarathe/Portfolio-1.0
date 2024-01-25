import React, { useState } from 'react';
import './WorkExperience.css'; // Import your CSS file

const WorkExperience = ({ workData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workData.length) % workData.length);
  };

  return (
    <div className="work-carousel">
      <div className="work-experience-card">
        {/* Left Section */}
        <div className="leftsection">
          <div className="company-logo">
            <img src={workData[currentIndex].companyLogo} alt={`${workData[currentIndex].companyName} Logo`} />
          </div>
          <div className="company-info">
            <h3 className="company-name">{workData[currentIndex].companyName}</h3>
            <p className="job-role">{workData[currentIndex].jobRole}</p>
            <p className="internship-duration">{workData[currentIndex].internshipDuration}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="rightsection">
          <h3 className="project-title">{workData[currentIndex].projectTitle}</h3>
          <p className="project-description">{workData[currentIndex].projectDescription}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default WorkExperience;
