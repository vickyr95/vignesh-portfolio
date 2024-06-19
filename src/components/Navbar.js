import React, { useState, useEffect } from 'react';

import {
  RxHamburgerMenu,
  RxCross2,
  
} from 'react-icons/rx';
import { Link } from 'react-scroll';
import { LuCloudSun } from 'react-icons/lu';
import { PiCloudMoon } from 'react-icons/pi';
import initial from '../assets/images/initial-vr.png';
const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  let handleClick = () => {
    // console.log('Hamburger menu clicked..');
    setMenuVisible(!menuVisible);
    setCloseMenu(!closeMenu);
  };
  let handleDarkMode = () => {
    // console.log('Activate dark mode');
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    // setDarkMode(false);
    const handleResize = () => {
      // Check if the window width is greater than or equal to the medium breakpoint (md)
      if (window.innerWidth >= 768) {
        setMenuVisible(false); // Hide the menu on larger devices
        setCloseMenu(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const navItems = [
    { id: 1, name: 'Home', to: 'home', current: true },
    // { id: 1, name: 'AboutMe', to: 'about', current: false },
    { id: 1, name: 'Services', to: 'service', current: false },
    { id: 1, name: 'Projects', to: 'projects', current: false },
  ];
  return (
    <nav className='md:fixed top-0 py-4 px-10 md:px-5 lg:px-20 mb-0 md:mb-7 w-full dark:text-white text-black z-50'>
      <div className={`flex justify-between items-center border-b rounded-md shadow-md dark:shadow-md dark:border-none bg-blend-overlay md:bg-gradient-to-r from-green-50 to-amber-50 dark:bg-black z-50`}>
        <div className='flex justify-between items-center md:w-9/12 lg:w-11/12'>
          <div className='nav text-md text-3xl font-bold font-AgustinaRegular ml-4'>
              &lt;Vignesh Rajendran /&gt;
          </div>
          <div className='hidden md:flex space-x-5 font-poppins dark:text-white'>
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                  // spy={true}
                smooth={true}
                className='nav text-md font-bold dark:font-extralight cursor-pointer text-md dark:text-gray-100 hover:text-pink-950 dark:hover:text-pink-900 border-x-2 py-2 shadow-md rounded-lg dark:rounded border-cyan-100 dark:border-none hover:bg-gray-100 dark:hover:bg-amber-50/50 md:px-5 md:my-2'
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <a
              href='https://drive.google.com/file/d/1Nu-DrSQ8aK5QGIMWeTnNUMfkNf5rvO2o/view?usp=sharing' // replace with your actual Google Drive URL
              target='_blank'
              rel='noopener noreferrer'
              className='nav text-md font-bold dark:font-extralight cursor-pointer text-md dark:text-gray-100 hover:text-pink-950 dark:hover:text-pink-900 border-x-2 py-2 shadow-md rounded-lg dark:rounded border-cyan-100 dark:border-none hover:bg-gray-100 dark:hover:bg-amber-50/50 md:px-5 md:my-2'
            >
              CV
            </a>
          </div>
        </div>
        <div className='flex items-center justify-end w-7/12 sm:w-7/12 md:w-3/12 lg:w-2/12 space-x-5'>
          {!darkMode ? (
            <PiCloudMoon
              className='cursor-pointer font-bold text-xl w-6 h-6'
              onClick={handleDarkMode}
            />
          ) : (
            <LuCloudSun
              className='cursor-pointer  text-xl w-6 h-6'
              onClick={handleDarkMode}
            />
          )}

          <div className='hidden md:flex'>
            <Link
              to='contact'
              smooth={true}
              className='cursor-pointer font-poppins bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 mr-0 md:mr-4 rounded-md text-gray-800 hover:text-black'
            >
              Contact
            </Link>
          </div>
        </div>
        <div className='md:hidden flex items-center ml-10'>
          <button className='mobile-menu-button' onClick={handleClick}>
            {closeMenu ? <RxCross2 className='w-6 h-6' /> : <RxHamburgerMenu className='w-6 h-6 ' />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`border border-x-4 border-amber-50 dark:border-stone-900 shadow-inner rounded-xl dark:bg-transparent font-poppins mt-10 mobile-menu ${menuVisible ? 'block' : 'hidden'}`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            spy={true}
            smooth={true}
            className='text-center cursor-pointer block py-3 text-lg text-gray-800 dark:text-gray-100 hover:text-pink-900 dark:hover:text-pink-300 border-b rounded-xl border-gray-400'
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
        <a
          href='https://drive.google.com/file/d/1Nu-DrSQ8aK5QGIMWeTnNUMfkNf5rvO2o/view?usp=sharing' // replace with your actual Google Drive URL
          target='_blank'
          rel='noopener noreferrer'
          className='text-center cursor-pointer block py-3 text-lg text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-pink-300 border-b rounded-xl border-gray-400'
        >
          CV
        </a>
        <Link
          to='contact'
          smooth={true}
          className='cursor-pointer block py-3 text-center text-lg text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-pink-300 border-b rounded-xl border-gray-400'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;
