import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineEngineering } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
const experienceData = [
  {
    title: 'Project Engineer',
    description:
      'I started working as a project engineer and continued for two years.',
    date: 'Dec 2017 - July 2019',
    icon: <MdOutlineEngineering />,
  },
  {
    title: 'Freelance Software Engineer',
    description:
      'With the experience gained as product engineer started freelancing',
    date: 'July 2019',
    icon: <SiFreelancer />,
  },
  {
    title: 'Lead Robotics Engineer',
    description:
      "I'm now a Lead Robotics Engineer, I'm embarking on an exciting entrepreneurial journey, spearheading the launch of a groundbreaking startup.",
    date: 'Now',
    icon: <BsRobot />,
  },
];
const Experience = () => {
  return (
    <section className=''>
      <h3 className=' text-2xl  lg:pb-10  text-center  font-bold tracking-widest'>
        MyExperience
      </h3>
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work  dark:text-black'
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
            <h3 className='font-bold'>{item.title}</h3>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
