import React from 'react';
import simpleimg1 from '../assets/IMG-20240108-WA0001-removebg-preview.png';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMessage,
  AiFillMail,
} from 'react-icons/ai';
import {
  PiHandshakeDuotone,
  PiHandWavingDuotone,
  PiHandWavingThin,
} from 'react-icons/pi';

import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = ({ darkMode }) => {
  return (
    <div name='home' className=''>
      {darkMode ? (
        <div class='relative w-full max-w-lg '>
          <div class='absolute top-20 right-0   w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob  '></div>
          <div class='absolute top-40 left-5 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000'></div>
          <div class='absolute top-60 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        </div>
      ) : null}

      <div className='lg:pt-36 px-10 min-h-screen flex flex-col md:flex-row  justify-between w-full'>
        <div className='text-center p-5 md:p-10   md:pb-5 '>
          <div className=''>
            <h2 className='text-4xl font-fuggles bg-gradient-to-r from-fuchsia-700 via-pink-900 to-indigo-950  dark:text-gray-100  bg-clip-text text-transparent  py-2'>
              <span className=' text-lg text-black dark:text-gray-100'>
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
              As a devoted Robotics Engineer, I dive deep into shaping the
              forefront of futuristic robotics, seamlessly merging technical
              prowess with an ardent passion and relentless enthusiasm.
            </p>
          </div>
          <div className='text-2xl flex flex-col md:flex-row items-center justify-center text-gray-900 gap-16 py-5 '>
            <div className=' md:ml-10'>
              <Link className=' cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-7 py-2  flex items-center text-sm font-bold '>
                <PiHandshakeDuotone className='w-7 h-7 mr-5' /> Let's Connect
                <MdArrowRightAlt className='w-7 h-7' />
              </Link>
            </div>
            <div className=' flex items-center justify-center lg:gap-16 gap-10'>
              <AiFillTwitterCircle className='dark:text-gray-100' />
              <AiFillLinkedin className='dark:text-gray-100' />
              <AiFillGithub className='dark:text-gray-100' />
              <AiFillMail className='dark:text-gray-100' />
            </div>
          </div>
        </div>

        <img
          src={simpleimg1}
          alt='simple-headerimage'
          className='w-96 h-96 object-cover border-none rounded'
        />
      </div>
    </div>
  );
};

export default Home;
