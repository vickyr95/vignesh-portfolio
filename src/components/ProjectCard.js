import React, { useEffect } from 'react';
import { SiGoogledocs } from 'react-icons/si';
import { BsFillCollectionPlayFill } from 'react-icons/bs';
const ProjectCard = ({ title, description, image, index, docs }) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='relative group flex w-80 flex-col rounded-md bg-white  bg-clip-border text-gray-700 dark:text-black shadow-md mb-4 '>
        <div className='relative  mx-4 mt-4 flex flex-col items-center justify-center overflow-hidden rounded-md  bg-clip-border text-gray-700'>
          <img src={image} alt='projectImage' className=' h-56 w-full ' />
          <div className='absolute top-20 flex gap-20 '>
            <a
              href={docs}
              rel='noreferrer'
              target='_blank'
              className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 z-50'
            >
              <SiGoogledocs className='text-white' />
            </a>
            <a
              href='#'
              rel='noreferrer'
              className='bg-black/50 w-[54px] h-[54px] rounded-full flex justify-center 
              items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100
               transition-all 
            duration-200 z-50'
            >
              <BsFillCollectionPlayFill className='text-white' />
            </a>
          </div>
        </div>
        <div className='p-6'>
          <h3 className='text-lg font-poppins'>{title}</h3>
          <p className='block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75'>
            {description.split(' ').slice(0, 14).join(' ')}....
          </p>
        </div>
        {/* Project Video */}
      </div>
      <div className='w-full '></div>
    </>
  );
};
export default ProjectCard;
