import React from 'react';
import hero from '../assets/images/hero.png';

import { PiHandshakeDuotone, PiHandWavingDuotone } from 'react-icons/pi';
import Socials from '../components/Socials';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = ({ darkMode, BG }) => {
  return (
    <div name='home' className={`darkMode ? ${BG}  :'' bg-cover mt-0 `}>
      {darkMode ? (
        <div class='relative w-full max-w-lg '>
          <div class='absolute top-0 right-20   w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob  '></div>
          <div class='absolute top-40 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000'></div>
          <div class='absolute top-60 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>
      ) : null}

      <div
        className='pt-20 md:pt-36 lg:pt-36 px-5 md:px-10  w-screen flex flex-col 
      lg:flex-row  justify-between md:justify-center'
      >
        <div className='text-center p-0  md:p-0 lg:p-10    '>
          <div className=''>
            <h2 className='text-4xl font-cursive bg-gradient-to-r from-fuchsia-700 via-pink-900 to-indigo-950 dark:text-orange-200  bg-clip-text text-transparent  py-2'>
              <span className=' text-lg text-black dark:text-gray-100 '>
                Hai,{' '}
                <span className='h-7'>
                  <PiHandWavingDuotone className='inline w-7 h-10 ' />
                </span>{' '}
                I am{' '}
              </span>
              Vignesh Rajendran
            </h2>
            <h3 className='text-2xl  tracking-widest py-2'>
              Robotics Engineer
            </h3>
            <p className='text-lg  leading-10 px-2 py-4 text-gray-800  dark:text-gray-100'>
              I'm a practical Robotics Engineer, quietly working on
              the next-gen robots with a touch of passion.
              <br></br>
              Solving business puzzles is my gig – armed with
              nothing but robots, AI, and a sprinkle of computer
              vision magic! 
              <br></br>
              It's a simple pursuit, but I'm eager to make a positive
              impact along the way.
            </p>
          </div>
          <div className='text-2xl flex flex-col md:flex-row items-center justify-center text-gray-900 gap-16 py-5 '>
            <div className=' md:ml-10'>
              <Link
                to='contact'
                className=' cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-7 py-2  flex items-center text-sm font-bold '
              >
                <PiHandshakeDuotone className='w-7 h-7 mr-5' /> Let's Connect
                <MdArrowRightAlt className='w-7 h-7' />
              </Link>
            </div>
            <div className=' flex items-center justify-center lg:gap-16 gap-10'>
              {/* Socials */}
              <Socials
                containerStyles=' flex items-center justify-center lg:gap-16 gap-10'
                iconsStyles='dark:text-gray-100 hover:text-cyan-500 dark:hover:text-pink-900'
              />
            </div>
          </div>
        </div>

        <img
          src={hero}
          alt='simple-headerimage'
          className='w-96 h-96  md:mx-auto md:mt-20 lg:mt-0 lg:mx-none'
        />
      </div>
    </div>
  );
};

export default Home;
