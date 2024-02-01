import React, { useState } from 'react';
import './WorkExperience.css'; // Make sure to import your CSS file

const jobData = [
  {
    id: 1,
    title: 'Job Title 1',
    company:' TCR Innovation ',
    description: 'Description for Job 1 goes here.',
    image: './logos/image.jpg',
  },
  {
    id: 2,
    title: 'Job Title 2',
    company:' TCR Innovation ',
    description: 'Description for Job 2 goes here.',
    image: './logos/image.jpg',
  },
  {
    id: 3,
    title: 'Job Title 3',
    company:' TCR Innovation ',
    description: 'Description for Job 3 goes here.',
    image: './logos/image.jpg',
  },

];

const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? jobData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === jobData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="work-section">
      <div className="carousel">
        <div className="slider" style={{ transform: `translateX(-${currentIndex * (100 / jobData.length)}%)` }}>
          {jobData.map((job) => (
            <div className="card" key={job.id}>
              <div className="image-box">
                <img src={job.image} alt={`Work Experience ${job.id}`} />
              </div>
              <div className="content">
                <h1 className='title'>{job.title}</h1>
                <h2 className='company'>{job.company}</h2>
                <p className='des'>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <button className="arrow prev" onClick={handlePrev}>&lt;</button>
        <button className="arrow next" onClick={handleNext}>&gt;</button> */}
      </div>
    </div>
  );
};

export default WorkExperience;
