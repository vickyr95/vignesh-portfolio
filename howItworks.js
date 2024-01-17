import React from 'react';
import './howItworks.css';
import { projectsData } from './src/utils/data';
const howItworks = () => {
  return (
    <div className='hiw-wrapper'>
      <div className='container'>
        <div className='hiw-container'>
          {/* Head Seaction */}
          <div className='hiw-head'>
            <span className='tag'>How it works</span>
            <span className='title'>Projects along with videos and photos</span>
          </div>
          <div className='hiw-features'>
            {projectsData.map((project, i) => (
              <div key={i} className='hiw-feature'>
                {/* Left side */}
                <div className='detail'>
                  <span className='des'>0{i + 1}</span>
                  <span className='sec-title'>{project.title}</span>
                  <span className='text'>{project.description}</span>
                </div>
                {/* Right side */}
                <div className='icon'>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={128}
                    height={128}
                    style={{
                      translate: '50% 0rem',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default howItworks;

import React from 'react';

const ProjectCard = ({ title, image, description }) => {
  return (
    <div
      className='bg-gray-100 max-w-[42rem] sm:h-[15rem] border border-black/5
     overflow-hidden sm:pr-8 relative mb-3 sm:mb-8'
    >
      <div className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full'>
      <div className='detail flex flex-col gap-4 items-start'>
                  <span className='des font-bold text-lg'>0{i + 1}</span>
                  <span className='sec-title'>{title}</span>
                  <span className='text'>{description}</span>
                </div>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <img
          src={image}
          alt={title}
          className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
