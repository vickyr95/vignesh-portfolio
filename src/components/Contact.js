import React, { useState } from 'react';
import contactDark from '../assets/illustration-dark.svg';
import contactLight from '../assets/illustration-light.svg';
import { IoIosMail } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlinePhone } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Contact = ({ darkMode, BG, bgLight }) => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  console.log(formDetails);
  let handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormDetails({ [name]: value });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formDetails);
  };
  return (
    <motion.section
      className={` min-h-screen dark:bg-stone-900 bg-amber-50 pb-10 md:pb-20 `}
      name='contact'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
    >
      <div className={`container mx-auto  `}>
        {/* {Text & image} */}
        <div className='grid lg:grid-cols-2 pt-12 lg:h-[420px] mb-6 md:mb-24 mx-10 md:mx-20'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-orange-300'></span>
              Say Hello 👋
            </div>
            <h1 className='text-4xl font-bold max-w-md mb-8'>
              Let's Work Together.
            </h1>
            <p className='subtitle max-w-[400px]'>
              Download animations as Lottie JSON, dotLottie, GIF or MP4 for
              personal or commercial use on web, apps, social media and more.
            </p>
          </div>

          <div
            className={`hidden lg:flex w-full h-96 bg-contact_light dark:bg-contact_dark  bg-contain bg-no-repeat`}
          ></div>
        </div>

        {/* Info & form */}
        <div className='grid md:grid-cols-2    mx-10 md:mx-20  '>
          {/* info text */}
          <div className='flex flex-col gap-y-4  md:gap-y-10 mb-12 md:mb-24'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <IoIosMail className='w-7 h-7' />
              <div>vigneshatmmn@gmail.com</div>
            </div>
            <div className='flex items-center gap-x-8'>
              <MdOutlinePhone className='w-7 h-7' />
              <div>+91 9940650601</div>
            </div>
            <div className='flex items-center gap-x-8'>
              <IoLocationOutline className='w-7 h-7' />
              <div>address</div>
            </div>
          </div>
          <form className='' onSubmit={handleSubmit}>
            <h1 className='md:hidden flex text-xl font-bold  mb-5'>
              Contact me
            </h1>
            <input
              type='text'
              name='name'
              placeholder='Your name'
              value={formDetails.name}
              onChange={handleChange}
              className='h-10 mb-3 px-4 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              value={formDetails.email}
              onChange={handleChange}
              className='block my-3 px-4 h-10 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
            />
            <textarea
              className='h-52 my-3 p-4 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
              name='message'
              onChange={handleChange}
              value={formDetails.message}
              placeholder='Your message'
            />
            <button
              type='submit'
              className='group flex items-center justify-center 
              gap-2 h-[3rem] w-[8rem] text-white bg-gray-900 dark:bg-black rounded-full 
              outline-none transition-all
              focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-pink-950 active:scale-105'
            >
              Submit{' '}
              <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
