import React, { useState } from 'react';
import './academics.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Academics = () => {
  const [page, setPage] = useState('education');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

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
        {page === 'education' && (
          <div className="timeline-section">
            <VerticalTimeline>
              {timelineElements.map((element) => (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={element.icon === 'school' ? schoolIconStyles : workIconStyles}
                  icon={element.icon === 'school' ? <SchoolIcon /> : <WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p id="description">{element.description}</p>
                  {element.buttonText && (
                    <a
                      className={`button ${element.icon === 'work' ? 'workButton' : 'schoolButton'}`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}

        {page === 'work-experience' && (
          /* Render work experience data here */
          <div className="work-section">
            {/* Add your work experience data rendering logic here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Academics;
