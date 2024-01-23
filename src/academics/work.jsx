import React from 'react';
import Slider from 'react-slick';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

import './work.css';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow right" onClick={onClick}>
      <HiArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow left" onClick={onClick}>
      <HiArrowLeft />
    </div>
  );
}

const WorkExperience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="work-experience" className="work-experience-section">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="slide">
            <div className="left-side">
              <div className="company-details">
                <p className="company-name">Company</p>
                <h3 className="role">Your Role</h3>
                <p className="duration">Internship Duration</p>
              </div>
            </div>
            <div className="right-side">
              <div className="project-details">
                <h3 className="project-name">Project/Internship Name</h3>
              </div>
              <div className="description">
                <p>Description of the work experience or internship.</p>
              </div>
            </div>
          </div>
          {/* Repeat the structure for additional work experience slides */}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
