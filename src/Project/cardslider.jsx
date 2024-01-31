// src/project/CardSlider.jsx

import React, { useState } from 'react';
import './cardslider.css'; // Import the corresponding CSS for the card slider
import { FaGithub, FaGlobe } from 'react-icons/fa'; // Import icons from Font Awesome

const CardSlider = () => {
  // Dummy data (replace with your actual data)
  const items = [
    {
      imgSrc: '/logos/img1.png',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      imgSrc: '/logos/img2.png',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      githubLink: 'https://github.com/yourusername/project2',
      websiteLink: 'https://www.project2.com',
    },
    {
      imgSrc: '/logos/img3.png',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      githubLink: 'https://github.com/yourusername/project3',
      websiteLink: 'https://www.project3.com',
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="card-slider">
      {/* List item */}
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="links">
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={item.websiteLink} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* List thumbnail */}
      <div className="thumbnail">
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
            </div>
          </div>
        ))}
      </div>

      {/* Next/Prev buttons */}
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>&lt;</button>
        <button id="next" onClick={handleNext}>&gt;</button>
      </div>

      {/* Running time indicator */}
      <div className="time"></div>
    </div>
  );
};

export default CardSlider;
