import React from 'react';
import { RiMailAddFill, RiLinkedinFill } from 'react-icons/ri';

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
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => (
        <a
          href={item.link}
          className={`${iconsStyles}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
