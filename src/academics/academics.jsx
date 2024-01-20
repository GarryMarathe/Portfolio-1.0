
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


          {/* <div className="schoolImg">
          {timelineElements.map((element) => (
            <VerticalTimelineElement>
              <img src={element.img} alt="" />
            </VerticalTimelineElement>
          ))}
          </div> */}

              {timelineElements.map((element) => (
                <VerticalTimelineElement
                  key={element.id}
                  date={<span className="date">{element.date}</span>} // Wrap date in a span with a class for custom styling
                  dateClassName="date"
                  iconStyle={element.icon === 'school' ? schoolIconStyles : workIconStyles}
                  icon={element.icon === 'school' ? <SchoolIcon /> : <WorkIcon />}
                  contentStyle={{ background: '#fff',   color: '#222222', padding:'20px', margin:'0  -20px'}} // Add custom styles to the content container
                
                >
                  <h3 className="vertical-timeline-element-title">
                    {element.title}
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                  </h5>
                  <p className="description" style={{fontSize:' 16px', lineHeight:'1.3em', paddingBottom:'15px'}}>{element.description}</p>
                  {/* {element.buttonText && (
                    <a
                      className={`button ${element.icon === 'work' ? 'workButton' : 'schoolButton'}`}
                      href="/"
                    >
                      {element.buttonText}
                    </a>
                  )} */}
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
