import React, { useState } from 'react';
import './WorkExperience.css'; // Make sure to import your CSS file


const jobData = [
  {
    id: 1,
    title: 'Front-End Web Developer Intern',
    company: ' TCR Innovation-India (Remote) ',
    description: 'Gained practical experience in developing responsive and user-friendly web interfaces. Implemented UI designs, optimized website performance, and enhanced user experience using HTML, CSS, and JavaScript.',
    timeline: 'July 2022 - Sept 2022 ',
    image: './logos/tcr.jpg',
    certificate: 'https://drive.google.com/file/d/1aydOf9vxs8YcJbwdH8_DyZzqCyi50rBl/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: ' YBI Foundation-India (Remote)',
    description: 'Gained valuable experience and developed a strong foundation in data science while making a positive social impact. Worked on various projects, including Data Collection and preprocessing, Data Analysis, Predictive modeling, etc.',
    timeline: 'Mar 2023 - Apr 2023',
    image: './logos/ybi.jpg',
    certificate: 'https://drive.google.com/file/d/1KBVelbQmbBSm0V043Mv3A_tVcAWRzC-V/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Front-End Web Developer Intern',
    company: 'Oasis Infobyte-India(Remote)',
    description: 'Honed my skills in HTML, CSS, JavaScript, and Bootstrap, contributing to the creation of dynamic and responsive web interfaces. Gained valuable hands-on experience in crafting engaging UI/UX and optimizing website performance.',
    timeline: 'July 2022 - Sept 2022 ',
    image: './logos/oasis.jpeg',
    certificate: 'https://drive.google.com/file/d/1awy_ybvYkxWRCRDeyPCnXk1AOJb8VmXN/view?usp=sharing',
  },

];



const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Add state for expansion

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
                <p className= 'des'>
                  {job.description}
                  
                </p>
                <h4 className='timeline'>{job.timeline}</h4>
                <div className="certificate-button">
                  <a href={job.certificate} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/certificate.png" alt="Certificate Icon" className="certificate-icon" />
                    <span>Certificate</span>
                  </a>
                </div>

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
