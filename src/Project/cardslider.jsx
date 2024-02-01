// src/Project/CardSlider.jsx

import React, { useState, useEffect } from 'react';
import './cardslider.css'; // Import the corresponding CSS for the card slider
import { FaGithub, FaGlobe } from 'react-icons/fa'; // Import icons from Font Awesome

const CardSlider = () => {
  const items = [
    {
      imgSrc: '/logos/img1.png',
      title: 'BOOKHUB',
      topic: 'A Book Recommendation Website',
      description: 'Developed an innovative real-time visual dashboard that leverages cutting-edge technologies such as ReactJS, CSS, WebSocket, and ChartJS to provide dynamic and captivating graphical representations of the stock market and cryptocurrency data',
      githubLink: 'https://github.com/yourusername/project1',
      websiteLink: 'https://www.project1.com',
    },
    {
      imgSrc: '/logos/img2.png',
      title: 'VISUALMASTER',
      topic: 'A real-time financial market visual dashboard ',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      githubLink: 'https://github.com/yourusername/project2',
      websiteLink: 'https://www.project2.com',
    },
    {
      imgSrc: '/logos/img3.png',
      title: 'AGRO MANAGEMENT',
      topic: 'Import and Export of Agricultural Products Management System',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
      githubLink: 'https://github.com/yourusername/project3',
      websiteLink: 'https://www.project3.com',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.card-slider');
    let SliderDom = carouselDom.querySelector('.list');
    let thumbnailBorderDom = carouselDom.querySelector('.thumbnail');

    thumbnailBorderDom.appendChild(thumbnailBorderDom.firstElementChild);

    let runTimeOut;

    nextDom.onclick = function () {
      showSlider('next');
    };

    prevDom.onclick = function () {
      showSlider('prev');
    };

    function showSlider(type) {
      let thumbnailItemsDom = document.querySelectorAll('.thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderDom.firstElementChild);
        thumbnailBorderDom.appendChild(thumbnailBorderDom.firstElementChild);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderDom.lastElementChild);
        thumbnailBorderDom.prepend(thumbnailBorderDom.lastElementChild);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('prev');
        carouselDom.classList.remove('next');
      }, 300);
    }
  }, []);

  return (
    <div className="card-slider">
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

      <div className="thumbnail">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
            <div className="content">
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={handlePrev}>&lt;</button>
        <button id="next" onClick={handleNext}>&gt;</button>
      </div>

      <div className="time"></div>
    </div>
  );
};

export default CardSlider;
