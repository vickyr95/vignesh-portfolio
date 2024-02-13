import React from 'react';
import s1 from '../assets/images/dev-ed-wave.png';

import Skills from '../components/Skills';
import Experience from '../components/Experience';

const About = ({ darkMode }) => {
  return (
    <div
      name='about'
      className={`dark:bg-black  min-h-screen w-screen mb-0 lg:mb-20 md:pt-0.5 pb-5 `}
    >
      <div className='  mt-20 '>
        <h3 className=' text-3xl pb-5 md:pb-0  text-center  font-bold tracking-widest '>
          ABOUT ME{' '}
        </h3>

        <div className='flex items-center md:flex-row flex-col md:mb-10'>
          {/* profile-pic */}
          <div>
            <img
              src={s1}
              alt='profile-pic'
              className='w-96 h-80 lg:ml-20 mb-10 md:mb-20'
            />
          </div>
          <div className='flex-row  relative  items-center justify-between w-5/6 md:w-4/6 px-0 md:px-10  lg:pe-20 '>
            {darkMode ? (
              <div class='   w-full max-w-lg lg:ml-44  '>
                <div class='absolute  top-20  -left-8  w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div class='absolute  top-80 md:top-40 lg:top-10 md:left-96  w-72 h-72  bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div class='absolute -bottom-8  md:left-60  w-72 h-72  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            ) : null}

            <p className='text-center py-0 md:py-2 text-lg leading-10 '>
              With a robust background as a{' '}
              <span className='dark:text-pink-700 font-bold  '>
                Lead Robotics Engineer
              </span>{' '}
              coupled with expertise in{' '}
              <span className='dark:text-pink-700 font-bold '>
                Software Engineering
              </span>{' '}
              within the <em>robotics domain</em>, I'm embarking on an exciting{' '}
              <em>entrepreneurial journey,</em> spearheading the launch of a
              groundbreaking startup.
            </p>

            <p className='text-center py-2 text-lg leading-10 '>
              My career has been a fusion of cutting-edge innovation and
              technological prowess. As a Lead Robotics Engineer, I've
              orchestrated the development of advanced robotic systems,
              utilizing my proficiency in robotics design, AI implementation,
              and sophisticated software engineering.
            </p>
          </div>
        </div>
        {/* ---Skills---- */}
        <Skills />
        {/* ---Experience---- */}
        <Experience />
      </div>
    </div>
  );
};

export default About;
