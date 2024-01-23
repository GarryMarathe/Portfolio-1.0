import React, { useState, useEffect } from 'react';
import './academics.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CustomVerticalTimelineElement from "./CustomVerticalTimelineElement";
import WorkExperience from "./work.jsx"; 

const Academics = () => {
  const [page, setPage] = useState('education');
  const [cardWidth, setCardWidth] = useState('70%');
  const [cardMarginLeft, setCardMarginLeft] = useState('-35%');
  const [cardHeight, setCardHeight] = useState('auto');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardWidth = window.innerWidth > 768 ? '70%' : '80%';
      setCardWidth(newCardWidth);

      // Adjust marginLeft for larger screens
      const newMarginLeft = window.innerWidth > 768 ? '-27%' : '15%';
      setCardMarginLeft(newMarginLeft);

      const newCardHeight = window.innerWidth <= 768 ? 'auto' : 'auto'; // You can customize this value
      setCardHeight(newCardHeight);
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Call it initially to set the initial width and marginLeft
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="academics-container" id='academics'>
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
                <CustomVerticalTimelineElement
                  key={element.id}
                  date={<span className="date">{element.date}</span>}
                  dateClassName="date"
                  iconStyle={element.icon === 'school' ? schoolIconStyles : workIconStyles}
                  icon={element.icon === 'school' ? <SchoolIcon /> : <WorkIcon />}
                  contentStyle={{
                    background: '#fff',
                    // color: '#222222',
                    padding: '10px 5px 10px 10px',
                    margin: `0 ${cardMarginLeft}`,  // Adjust marginLeft
                    width: cardWidth,
                    height: cardHeight,
                  }}
                >
                  <div className="school">
                    <div className="schoolImg">
                      <img src={element.img} alt="" />
                    </div>
                    <div className="schoolDetails">
                      <h3 className="vertical-timeline-element-title" style={{margin:'8px 0 0 0'}}>
                        {element.clgName}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.degree}
                      </h5>
                      <p className="description" style={{margin:'5px 0 0 0'}} >{element.university}</p>
                      <p className='grade'style={{margin:'3px 0 10px 0'}} >Grade: {element.grade}</p>
                    </div>
                  </div>
                </CustomVerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}

        {page === 'work-experience' && (
          <div className="work-section">
          <WorkExperience />
        </div>
        )}
      </div>
    </div>
  );
};

export default Academics;
