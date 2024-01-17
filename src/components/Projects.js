import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/data';
import binPicking from '../assets/project-images/bin-picking.jpg';
import windowCleaning from '../assets/project-images/skyscrapper.png';
import football from '../assets/project-images/football.png';
import ADAS from '../assets/project-images/car-gif.gif';
import agriMobile from '../assets/project-images/robot.jpg';
import golfBallLocation from '../assets/project-images/golf.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link, Link as ReactLink } from 'react-router-dom';
import rImage from '../assets/project-images/r-image-removebg-preview (1).png';
const Projects = ({ darkMode, BG, bgLight }) => {
  return (
    <div
      name='projects'
      className={` ${bgLight} dark:bg-black bg-cover bg-right py-10 min-h-screen`}
    >
      <div className='container px-10 mx-auto relative'>
        {/* <img
          src={rImage}
          alt='rImage'
          className=' hidden md:flex absolute bottom-0 left-0 '
        /> */}
        <div className=' flex flex-col items-center  mx-auto  '>
          {/* Head Section */}
          <div className=' flex flex-col gap-4 items-center max-w-35rem mx-auto  '>
            <span className=' text-black text-4xl font-bold capitalize'>
              Projects
            </span>
            <span className='align-center  text-xl leading-8 md:leading-0 text-black capitalize'>
              Projects along with videos and photos
            </span>
          </div>
          <div className=' flex flex-col items-center gap-4  py-0 md:py-5  md:mx-auto'>
            <div className='flex items-center bg-violet-500 mx-auto md:mr-96 my-5 rounded-2xl w-80 h-80 md:w-[28rem] md:h-56'>
              {/* Image */}
              {/* <div>
                <img
                  src={binPicking}
                  alt='projectimage'
                  className='w-80 h-56 rounded-md'
                />
              </div> */}
              {/* Project name */}
              {/* <div>
                <span className=' text-xl font-medium'>
                  Bin picking robot simulation
                </span>
              </div> */}
            </div>
            <div className='relative flex flex-row-reverse items-center  mx-auto   my-5 w-80 h-80 md:w-[22rem] md:h-[20rem] md:ml-[26rem] rounded-2xl '>
              {/* Image */}
              <div>
                <img
                  src={ADAS}
                  alt='projectimage'
                  className='w-full h-[20rem]  rounded-2xl'
                />
              </div>
              {/* Project name */}
              <div className=' absolute top-36 left-10 md:top-48 md:-left-[14rem]  flex flex-col gap-4 items-start md:items-end '>
                <span className=' font-centraNo2_Book text-2xl md:text-4xl  font-bold'>
                  ADAS-BEVfusion
                </span>
                <span className='font-klee_one text-2xl  md:text-3xl  font-bold  text-gray-900'>
                  March 2023
                </span>
              </div>
            </div>
            <div className='flex items-center w-80 h-80 bg-gradient-to-br from-pink-700 to-purple-900 mx-auto md:mr-[32rem] my-5  rounded-2xl md:w-80 md:h-60'>
              {/* Image */}
              {/* <div>
                <img
                  src={binPicking}
                  alt='projectimage'
                  className='w-80 h-56 rounded-md'
                />
              </div> */}
              {/* Project name */}
              {/* <div>
                <span className=' text-xl font-medium'>
                  Bin picking robot simulation
                </span>
              </div> */}
            </div>
            <div className='relative  flex flex-row-reverse items-center  mx-auto  bg-stone-700 my-5 w-80 h-80 md:w-[30rem] md:h-56 md:ml-96 rounded-2xl '>
              {/* Image */}
              {/* <div>
                <img
                  src={ADAS}
                  alt='projectimage'
                  className='w-full h-[20rem]  rounded-2xl'
                />
              </div> */}
              {/* Project name */}
              {/* <div className=' absolute top-36 left-10 md:top-48 md:-left-[22.50rem]  flex flex-col gap-4 items-start md:items-end '>
                <span className=' font-centraNo2_Book text-2xl md:text-3xl  font-bold'>
                  ADAS-BEVfusion project
                </span>
                <span className='font-klee_one text-2xl  md:text-3xl  font-bold  text-gray-900'>
                  March 2023
                </span>
              </div> */}
            </div>
          </div>
          <ReactLink as={Link} to='/projects'>
            <p className='text-md font-semibold'>
              See more projects
              <MdKeyboardDoubleArrowRight className='inline' />
            </p>
          </ReactLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
