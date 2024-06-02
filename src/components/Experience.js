import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '../utils/data';

const Experience = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  console.log(hoveredItem);

  const handleMouseEnter = (i) => {
    console.log(i);
    setHoveredItem(i);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <section className=''>
      <h3 className=' text-2xl  lg:pb-10  text-center  font-bold tracking-widest'>
        MY EXPERIENCE
      </h3>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work  dark:text-black    '
            contentStyle={{
              background: '#f3f4f6',
              boxShadow: 'none',
              border: '1px solid rgba(0,0,0,0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.4rem solid #9ca3af',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: 'white',
              fontSize: '1.5rem',
            }}
          >
            <h3
              className='font-bold  cursor-pointer  '
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.title}
            </h3>

            <div>
              {hoveredItem === index && (
                <div className={`hover-content `}>
                  {/* Display content on hover */}
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
