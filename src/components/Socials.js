import React from 'react';
import {
  RiGithubFill,
  RiMailAddFill,
  RiLinkedinFill,
  RiFacebookFill,
} from 'react-icons/ri';
import { Link } from 'react-scroll';
const socials = [
  {
    path: '/',
    icon: <RiGithubFill />,
  },
  {
    path: '/',
    icon: <RiLinkedinFill />,
  },
  {
    path: '/',
    icon: <RiFacebookFill />,
  },
  {
    path: '/',
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
        <Link
          to={item.path}
          className={`${iconsStyles}`}
          // className='dark:text-gray-100 hover:text-cyan-500 dark:hover:text-pink-900'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
