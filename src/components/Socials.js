import React from 'react';
import {
  RiGithubFill,
  RiMailAddFill,
  RiLinkedinFill,
  RiFacebookFill,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
const socials = [
  //vickyr95.github.io
  {
    name: 'linkedIn',
    link: 'https://www.linkedin.com/in/vicky-rajendran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <RiLinkedinFill />,
  },

  {
    name: 'mail',
    link: 'https://mail.google.com/?view=cm&fs=1&to=connect@vigneshrajendran.in',
    icon: <RiMailAddFill />,
  },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div
      className={`${containerStyles}`}
      //   className=' flex items-center justify-center lg:gap-16 gap-10'
    >
      {socials.map((item, index) => (
        <a
          href={item.link}
          className={`${iconsStyles}`}
          target='_blank'
          rel='noopener noreferrer'
          // className='dark:text-gray-100 hover:text-cyan-500 dark:hover:text-pink-900'
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
