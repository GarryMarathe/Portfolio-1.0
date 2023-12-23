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
                        <h2>I'm  <span>Gaurav</span>
                        </h2>
                    </div>

                    <div className="column-3">
                        <p>
                            I'm a fourth-year IT undergrad with a passion for exploring new technologies. Web development and UI/UX design have captured my interest, so equipped with Web Development skills. I'm also an avid gamer and enjoy immersing myself in virtual worlds. My hardworking nature drives me to tackle any challenge head-on and ensure tasks are completed with excellence. With a strong commitment to both my studies and personal interests, I'm excited to apply my skills, dedication, and enthusiasm to make a meaningful impact in the field.
                        </p>

                    </div>
                    <div className="boxes-container">
                        <div className="box-1">
                            <img src="/icons/title.png" alt="Role Icon" />
                            <h3>Role</h3>
                            <p>Full Stack Developer</p>
                        </div>
                        <div className="box-1">
                            <img src="/icons/graduation-cap.png" alt="Education Icon" />
                            <h3>Education</h3>
                            <p>BE Undergrad IT</p>
                        </div>
                        <div className="box-3">

                            <a href="/resumes/resume.pdf" download>

                                <img src="/icons/file.png" alt="download" />
                                <h3>Resume</h3>
                                <p>Download</p>


                            </ a>


                        </div>

                    </div>


                </div>
            </div>
        </div>


    );
}

export default AboutSection;
