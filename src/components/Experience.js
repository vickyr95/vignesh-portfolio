import React, { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineEngineering } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
import { BsHandIndexFill, BsRobot } from 'react-icons/bs';
const experienceData = [
  {
    title: 'Project Engineer',
    description:
      'Proficient in programming, troubleshooting, and configuring KUKA Robots, demonstrating a deep understanding of their functionalities. Conducted comprehensive traning session on KUKA Robots for clients from reputable manufacturing companies such as TATA, VW, Mercedes, fostering their proficiency in robot utilization.',
    date: 'Dec 2017 - July 2019',
    icon: <MdOutlineEngineering />,
  },
  {
    title: 'Freelance Software Engineer',
    description:
      'As a freelance software, delved into the dynamic realm of robotics, crafting software with expertise in Robotics with ROS, Computer Vision, and AI. Collaborated closely with clients to co-create customised robotic software solutions, turning ideas into practical and innovative applications.',
    date: 'July 2019',
    icon: <SiFreelancer />,
  },
  {
    title: 'Lead Robotics Engineer',
    // description:
    //   "I'm now a Lead Robotics Engineer, I'm embarking on an exciting entrepreneurial journey, spearheading the launch of a groundbreaking startup.",
    description:
      'Guide the comprehensive design and implementation of perception, advanced planning, navigation and software fro next-gen agricultural robotics platforms, showcasing expertise in ROS, computer Vision, AI, Deep Learning, Edge computing, Embedded electronics, and Hardware control.',
    date: 'Now',
    icon: <BsRobot />,
  },
];
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
        MyExperience
      </h3>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work  dark:text-black cursor-pointer   '
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
              className='font-bold'
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
              {/* <p>{item.description}</p> */}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
