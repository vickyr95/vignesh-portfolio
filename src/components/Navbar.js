import React, { useState, useEffect } from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import {
  RxHamburgerMenu,
  RxCross2,
  RxCrossCircled,
  RxMoon,
} from 'react-icons/rx';
import { Link } from 'react-scroll';
import { LuCloudSun } from 'react-icons/lu';
import { PiCloudMoon } from 'react-icons/pi';
const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  let handleClick = () => {
    // console.log('Hamburger menu clicked..');
    setMenuVisible(!menuVisible);
    setCloseMenu(!closeMenu);
  };
  let handleDarkMode = () => {
    console.log('Activate dark mode');
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
    { id: 1, name: 'About Me', to: 'about', current: false },
    { id: 1, name: 'Service', to: 'service', current: false },
    { id: 1, name: 'Projects', to: 'projects', current: false },
  ];
  return (
    <nav className='  md:fixed top-0  py-4 px-10 md:px-5 lg:px-20 mb-0 md:mb-7 w-full dark:text-white text-black  z-50'>
      <div
        className={` flex justify-between items-center border-b 
        rounded-md shadow-md dark:border-pink-300 dark:shadow-none  `}
      >
        <div className='flex  justify-between items-center w-11/12'>
          <div>
            <h1 className='text-3xl font-fuggles'>VR</h1>
          </div>
          <div className='hidden md:flex space-x-5 font-poppins  dark:text-white'>
            {navItems.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  className='nav text-lg  cursor-pointer text-md dark:text-gray-100
 hover:text-pink-900 dark:hover:text-pink-200  shadow-xl  rounded-2xl md:px-5 md:mb-1
 '
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='flex items-center  justify-end w-3/12 space-x-10'>
          {!darkMode ? (
            <PiCloudMoon
              className='cursor-pointer  text-xl'
              onClick={handleDarkMode}
            />
          ) : (
            <LuCloudSun
              className='cursor-pointer  text-xl '
              onClick={handleDarkMode}
            />
          )}

          <div className='hidden md:flex'>
            <Link
              to='contact'
              className=' cursor-pointer font-poppins bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text- rounded-md text-gray-800 hover:text-black'
            >
              Contact
            </Link>
          </div>
        </div>
        <div className='md:hidden flex items-center ml-10 '>
          <button className='mobile-menu-button' onClick={handleClick}>
            {closeMenu ? (
              <RxCross2 className='w-6 h-6' />
            ) : (
              <RxHamburgerMenu className='w-6 h-6 ' />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`border-t  dark:border-none  rounded-2xl   shadow-2xl  font-poppins mt-10 mobile-menu ${
          menuVisible ? 'block' : 'hidden'
        }`}
      >
        {/* <Link
          to='about'
          className=' cursor-pointer block py-3 ps-10 text-lg text-gray-800
 hover:text-black'
        >
          Home
        </Link> */}
        {navItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.to}
              spy={true}
              smooth={true}
              className=' text-center 
              cursor-pointer block py-3  
              text-lg text-gray-800 dark:text-gray-100
               hover:text-pink-900
               dark:hover:text-pink-300 
               border-b rounded-2xl
                border-gray-400 '
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          );
        })}
        <Link
          to='contact'
          className=' cursor-pointer block py-3 text-center text-lg text-gray-800 
           dark:text-gray-100 hover:text-black
           dark:hover:text-pink-300
            border-b rounded-2xl
           border-gray-400'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
