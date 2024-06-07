import React from 'react';
import s1 from '../assets/images/about_bg.gif';
// import Skills from '../components/Skills';
import Experience from '../components/Experience';

const About = ({ darkMode }) => {
  return (
    <div
      name='about'
      className={`dark:bg-black min-h-screen w-screen mb-0 lg:mb-20 md:pt-0.5 pb-5`}
    >
      <div className='mt-20'>
        <h3 className=' text-2xl  lg:pb-10  text-center  font-bold tracking-widest'>
          ABOUT ME
        </h3>

        <div className='flex flex-col md:flex-row md:items-start md:mb-10'>
          {/* Profile Picture */}
          <div className='w-full md:w-1/2 flex justify-center md:justify-center'>
            <img
              src={s1}
              alt='profile-pic'
              className='w-72 h-128 lg:ml-20 mb-10 md:mb-20'
            />
          </div>


          {/* Text */}
          <div className='w-full md:w-1/2 lg:w-5/12 px-4'>
            {darkMode ? (
              <div className='relative'>
                <div className='absolute top-20 -left-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div className='absolute top-80 md:top-40 lg:top-10 md:left-96 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div className='absolute -bottom-8 md:left-60 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            ) : null}
            <p className='text-left py-2 text-lg leading-10'>
              With extensive experience as a robotics engineer and product
              manager, I excel in steering projects from ideation to execution,
              thriving in startup environments. My roles encompass economic
              problem-solving, POC planning, parts selection, procurement
              negotiations, and project management.
              <br />
              <br />
              While I acknowledge continuous learning, my commitment to growth
              ensures I acquire necessary skills. I approach challenges with
              humility and optimism, delivering commercially viable products
              through iterative upgrades. Eager to contribute my proven track
              record and collaborative spirit to your projects for mutual
              success.
            </p>
          </div>
        </div>
        {/* ---Skills---- */}
        {/* <Skills /> */}
        {/* ---Experience---- */}
        <Experience />
      </div>
    </div>
  );
};

export default About;
