import React, { useState, useEffect, useRef } from 'react';
import './top.css';
import backgroundImage from '../safar-safarov-MSN8TFhJ0is-unsplash.jpg';
import { init } from 'ityped';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Top = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const jobTitleRef = useRef(null);

  useEffect(() => {
    init(jobTitleRef.current, {
      showCursor: true,
      strings: ['Web Developer', 'IT Undergrad'],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1200,
    });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`background-container ${isScrolled ? 'scrolled' : ''}`}>
      <img src={backgroundImage} alt="Background" className="background-image" />
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="portfolio-link">
            Portfolio
          </a>
        </div>
        <div className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      
      <div className={`navbar-center ${showMenu ? 'active' : ''}`}>
        <a href="#about" onClick={toggleMenu}>
          About Me
        </a>
        <a href="#skills" onClick={toggleMenu}>
          Skills
        </a>
        <a href="/" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#academics" onClick={toggleMenu}>
          Academics
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>

      </nav>
      <div className="content-container">
        <div className="left">
          <div className="section-name">
            <h1>
              Hi, I'm <span>Gaurav Marathe</span>
            </h1>
          </div>
          <div className="job-title-column">
            <h2>
              <span className="job-title-text">a</span>
              <span ref={jobTitleRef}></span>
            </h2>
          </div>
          <div className="section">
            <p>
              I am a passionate MERN stack developer and machine learning enthusiast. With a strong foundation in web
              development and a keen eye for data, I create innovative solutions that bridge technology and user
              experience.
            </p>
          </div>
        </div>

        <div className="social-link">
          <div className="find">
            <h3>FIND ME ON</h3>
          </div>
          <div className="link">
            <a href="https://github.com/GarryMarathe" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faGithub} size="1x" className="ficons" />
            </a>
            <a href="mailto:gauravmarathe6468@gmail.com" target="_blank" rel="noopener noreferrer0" className="icon-link">
              <FontAwesomeIcon icon={faEnvelope} size="1x" className="ficons" />
            </a>
            <a href="https://www.linkedin.com/in/gaurav-marathe-709a77269/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="ficons" />
            </a>
          </div>
          <div className="stack">
            <h3>WEB STACK</h3>
            <div className="stack-icons">
              <div className="icon-link">
                <img src="/icons/icons8-react (2).svg" alt="React" className="icon-svg" />
              </div>
              <div className="icon-link">
                <img src="/icons/mongodb-white.svg" alt="MongoDB" className="icon-svg" />
              </div>
              <div className="icon-link">
                <img src="/icons/pocoo_flask-icon.svg" alt="Flask" className="icon-svgg" />
              </div>
              <div className="icon-link">
                <img src="/icons/icons8-javascript.svg" alt="Express" className="icon-svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
