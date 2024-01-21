import React, { useState, useEffect } from 'react';
import './academics.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Academics = () => {
  const [page, setPage] = useState('education');
  const [cardWidth, setCardWidth] = useState('70%');
  const [cardMarginLeft, setCardMarginLeft] = useState('-35%');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  useEffect(() => {
    const handleResize = () => {
      const newCardWidth = window.innerWidth > 768 ? '70%' : '80%';
      setCardWidth(newCardWidth);

      // Adjust marginLeft for larger screens
      const newMarginLeft = window.innerWidth > 768 ? '-30%' : '15%';
      setCardMarginLeft(newMarginLeft);
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
                  date={<span className="date">{element.date}</span>}
                  dateClassName="date"
                  iconStyle={element.icon === 'school' ? schoolIconStyles : workIconStyles}
                  icon={element.icon === 'school' ? <SchoolIcon /> : <WorkIcon />}
                  contentStyle={{
                    background: '#fff',
                    color: '#222222',
                    padding: '20px',
                    margin: `0 ${cardMarginLeft}`,  // Adjust marginLeft
                    width: cardWidth,
                    height: 'auto',
                  }}
                >
                  <div className="school">
                    <div className="schoolImg">
                      <img src={element.img} alt="" />
                    </div>
                    <div className="schoolDetails">
                      <h3 className="vertical-timeline-element-title">
                        {element.title}
                      </h3>
                      <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                      </h5>
                      <p className="description">{element.clgName}</p>
                      <p className='grade'>Grade:{element.grade}</p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        )}

        {page === 'work-experience' && (
          <div className="work-section">
            {/* Add your work experience data rendering logic here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Academics;
