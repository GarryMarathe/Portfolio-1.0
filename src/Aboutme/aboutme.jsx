// AboutSection.jsx

import React from 'react';
import './aboutme.css'; // Import the CSS file for styling
import { FaDownload } from 'react-icons/fa'; // Import the download icon from react-icons library

const AboutSection = () => {

          
    return (



      <div className="about-section">
          <div className="about-me-text">
              <h1>About Me</h1>
              <hr className="line" />
          </div>
          <div className="content-section">
              <div className="left-section">
                  <img src="/icons/Profile.jpeg" alt="Profile" />
              </div>
              <div className="right-section">
                  <div className="column-1">
                      <h2>I'm Gaurav</h2>
                  </div>
                  <div className="column-2">
                      <p>Web Developer</p>
                  </div>
                  <div className="column-3">
                      <p>
                          Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location].
                          [Add more details about yourself here.]
                      </p>
                      
                  </div>
                  <div className="boxes-container">
                        <div className="box">Box 1 Text</div>
                        <div className="box">Box 2 Text</div>
                        <div className="box">Box 3 Text</div>
                    </div>

                    <div className="download-button">
                    
                        <button>
                         <img src="/icons/file.png" alt="download" />
                            Download
                        </button>
                    </div>
              </div>
          </div>
      </div>


  );
}

export default AboutSection;
