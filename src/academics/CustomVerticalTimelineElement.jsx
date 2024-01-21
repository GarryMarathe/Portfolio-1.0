// CustomVerticalTimelineElement.js
import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const CustomVerticalTimelineElement = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VerticalTimelineElement
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isHovered ? 'hovered' : ''}
    />
  );
};

export default CustomVerticalTimelineElement;
