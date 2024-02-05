import React, { useState } from 'react';
import football from '../assets/project-images/football.png';
import ADAS from '../assets/project-images/car-gif.gif';
import agriMobile from '../assets/project-images/agriMobile.jpg';
import golfBallLocation from '../assets/project-images/golf.png';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link, Link as ReactLink } from 'react-router-dom';
import { SiGoogledocs } from 'react-icons/si';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
import { slideIn } from '../utils/animation';
import { motion } from 'framer-motion';
const Projects = ({ darkMode, BG, bgLight }) => {
  const projectDocs = [
    'https://docs.google.com/document/d/1Fs4Q088702WKSWxqk_I64KNVnjbhc-XCtmeiWr8KhjE/edit?usp=sharing',
    'https://docs.google.com/document/d/1lu8SxJW54AsNGmisKy9Y_Sbb7XFehvBvKMh23QD5C3c/edit?usp=sharing',
    'https://docs.google.com/document/d/1cG85otjLuEFobUk7umrOviuwhh5ggVEo8K-AV8MN-dQ/edit?usp=sharing',
    'https://docs.google.com/document/d/1SuyIXrSxxJrPCXlM9-UkNceJ6hnSyK3HCHM_Msdl5bQ/edit?usp=sharing',
  ];

  return (
    <div
      name='projects'
      className={` ${bgLight}  dark:text-gray-200 bg-cover bg-right-bottom py-10 min-h-screen `}
    >
      {darkMode ? (
        <div className='relative w-full max-w-lg  '>
          <div className='absolute top-0 left-0 bg-project_color_dark1 z-20'></div>
        </div>
      ) : null}

      <div className=' flex flex-col items-center mx-auto  '>
        {/* Head Section */}
        <div className=' flex flex-col gap-4 items-center justify-center max-w-35rem mx-auto  '>
          <span className=' text-black dark:text-gray-200 text-xl font-bold '>
            PROJECTS
          </span>
          <span className=' text-black dark:text-gray-200 text-xl font-semibold '>
            Embark on a journey of innovation and efficiency with our latest
            robotics engineering projects.
          </span>
        </div>
        <div
          className=' flex flex-col items-center gap-4  py-0 
            md:py-5  md:mx-auto
             '
        >
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            initial='hidden'
            animate='show' //
            className=' group flex relative  bg-violet-500 mx-auto md:mr-96  my-5
             rounded-2xl w-80 h-80 md:w-[28rem] md:h-56'
          >
            {/* Image */}
            <div className=''>
              <img
                src={golfBallLocation}
                alt='projectimage'
                className='w-full h-full md:w-[28rem] md:h-56 rounded-2xl  '
              />
              <div className='absolute top-20 left-16 md:left-32 flex gap-20 z-10'>
                <a
                  href={projectDocs[0]}
                  rel='noreferrer'
                  target='_blank'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <SiGoogledocs className='text-white' />
                </a>
                <a
                  href='#'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <BsFillCollectionPlayFill className='text-white' />
                </a>
              </div>
            </div>
            {/* Project name */}
            <div className='absolute top-36 left-10 md:top-10 md:-right-60 flex flex-col flex-nowrap gap-2 items-start md:items-end '>
              <span
                className=' font-poppins text-2xl md:text-4xl  font-bold
                 dark:text-gray-900 border-none   
                 rounded-md shadow-lg p-4 bg-yellow-100/50 '
              >
                Golf ball detection
              </span>

              <span
                className='font-klee_one text-2xl  md:text-3xl md:mr-40 font-bold 
                 dark:text-gray-900  border-none    
                 rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                Feb 2023
              </span>
            </div>
          </motion.div>
          <div className=' group relative flex flex-row-reverse items-center  mx-auto bg-stone-700  my-5 w-80 h-80 md:w-[22rem] md:h-[20rem] md:ml-[26rem] rounded-2xl '>
            {/* Image */}
            <div>
              <img
                src={ADAS}
                alt='projectimage'
                className='w-full h-[20rem] rounded-2xl  '
              />
              <div className='absolute top-20 left-16 md:top-32  md:left-20 flex gap-20  z-10'>
                <a
                  href={projectDocs[1]}
                  rel='noreferrer'
                  target='_blank'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <SiGoogledocs className='text-white' />
                </a>
                <a
                  href='#'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <BsFillCollectionPlayFill className='text-white' />
                </a>
              </div>
            </div>
            {/* Project name */}
            <div className=' absolute  top-36 left-10 md:top-41 md:-left-[14rem]  flex flex-col gap-2 items-start md:items-end '>
              <span
                className=' font-poppins text-2xl md:text-4xl  font-bold dark:text-gray-900 border-none  
                 rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                ADAS-BEVfusion
              </span>
              <span
                className='font-klee_one text-2xl  md:text-3xl  font-bold  dark:text-gray-900
                border-none   
                rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                June 2023
              </span>
            </div>
          </div>
          <div
            className='group flex relative items-center w-80 h-80 bg-gradient-to-br
             from-pink-700 to-purple-900 mx-auto md:mr-[32rem] my-5  rounded-2xl 
             md:w-80 md:h-60'
          >
            {/* Image */}
            <div>
              <img
                src={agriMobile}
                alt='projectimage'
                className='md:w-80 md:h-60 rounded-2xl'
              />
              <div className='absolute top-20 left-16 md:top-24  md:left-14 flex gap-20 z-10 '>
                <a
                  href={projectDocs[2]}
                  rel='noreferrer'
                  target='_blank'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <SiGoogledocs className='text-white' />
                </a>
                <a
                  href='#'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <BsFillCollectionPlayFill className='text-white' />
                </a>
              </div>
            </div>
            {/* Project name */}
            <div className=' absolute top-36 left-10  md:top-20 md:-right-48   md:pl-32   flex flex-col  gap-2 items-start  '>
              <span
                className=' font-poppins text-2xl md:text-4xl  font-bold dark:text-gray-900 border-none   
                 rounded-md shadow-lg p-4 bg-yellow-100/50 '
              >
                Mobile robot
              </span>
              <span
                className='font-klee_one text-2xl  md:text-3xl  font-bold  dark:text-gray-900
                border-none  
                rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                2022- 2023
              </span>
            </div>
          </div>
          <div className='relative group flex flex-row-reverse items-center  mx-auto  bg-stone-700 my-5 w-80 h-80 md:w-[30rem] md:h-56 md:ml-96 rounded-2xl '>
            {/* Image */}
            <div>
              <img
                src={football}
                alt='projectimage'
                className='md:w-[30rem] md:h-56  rounded-2xl'
              />
              <div className='absolute top-20 left-16 md:top-20  md:left-40 flex gap-20  z-10'>
                <a
                  href={projectDocs[3]}
                  rel='noreferrer'
                  target='_blank'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <SiGoogledocs className='text-white' />
                </a>
                <a
                  href='#'
                  className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 '
                >
                  <BsFillCollectionPlayFill className='text-white' />
                </a>
              </div>
            </div>
            {/* Project name */}
            <div className=' absolute  top-36 left-10 md:top-16 md:-left-[25rem]  flex flex-col gap-2 items-start md:items-end '>
              <span
                className=' font-poppins text-2xl md:text-4xl  font-bold dark:text-gray-900 border-none   
                 rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                Football video automation
              </span>
              <span
                className='font-klee_one text-2xl  md:text-3xl  font-bold  dark:text-gray-900
                border-none  
                rounded-md shadow-lg p-4 bg-yellow-100/50'
              >
                2021- 2022
              </span>
            </div>
          </div>
        </div>
        <ReactLink as={Link} to='/projects'>
          <p className='text-xl font-semibold rounded-md border-2 border-black p-4 mt-5 hover:bg-slate-400'>
            See more projects
            <MdKeyboardDoubleArrowRight className='inline' />
          </p>
        </ReactLink>
      </div>
    </div>
  );
};

export default Projects;
