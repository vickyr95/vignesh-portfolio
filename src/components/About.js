import React from 'react';
import s1 from '../assets/dev-ed-wave.png';
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';

const About = ({ darkMode }) => {
  return (
    <div name='about' className='min-h-screen'>
      <div className='  mt-20'>
        <h3 className='text-3xl lg:pb-10  text-center  font-bold tracking-widest'>
          ABOUT ME
        </h3>
        <div className='flex items-center md:flex-row flex-col '>
          <div>
            <img src={s1} alt='profile-pic' className='w-96 h-80 lg:ml-20' />
          </div>
          <div className='flex-row  relative  items-center justify-between w-4/6 lg:pe-20'>
            {darkMode ? (
              <div class='   w-full max-w-lg lg:ml-44  '>
                <div class='absolute  top-20  -left-8  w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
                <div class='absolute  top-80 md:top-40 lg:top-10 md:left-96  w-72 h-72  bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
                <div class='absolute -bottom-8  md:left-60  w-72 h-72  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
              </div>
            ) : null}

            <p className='text-center py-2 text-lg leading-8 tracking-widest'>
              With a robust background as a{' '}
              <span className='text-teal-500 font-bold'>
                Lead Robotics Engineer
              </span>{' '}
              coupled with expertise in{' '}
              <span className='text-teal-500 font-bold '>
                Software Engineering
              </span>{' '}
              within the <em>robotics domain</em>, I'm embarking on an exciting{' '}
              <em>entrepreneurial journey,</em> spearheading the launch of a
              groundbreaking startup.
            </p>

            <p className='text-center py-2 text-lg leading-8 tracking-widest  '>
              My career has been a fusion of cutting-edge innovation and
              technological prowess. As a Lead Robotics Engineer, I've
              orchestrated the development of advanced robotic systems,
              utilizing my proficiency in robotics design, AI implementation,
              and sophisticated software engineering.
            </p>

            <div className=' flex items-center  lg:w-11/12 mt-10  '>
              <Link className='text-md tracking-widest lg:w-3/12 lg:px-10 flex items-center justify-between cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-2  font-bold '>
                Projects
                <MdOutlineKeyboardArrowRight className='w-7 h-7' />
              </Link>
            </div>
          </div>
        </div>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default About;
