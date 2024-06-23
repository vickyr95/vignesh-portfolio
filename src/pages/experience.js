import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/Experience';
import { Link } from 'react-router-dom';

const EXP = ({ darkMode }) => {
  return (
    <motion.div
      className='min-h-screen py-10  md:mx-auto dark:bg-black dark:text-gray-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className='container  '>
        <div className=' flex  gap-4 items-center justify-between mx-10   '>
          <span className='  py-5'>
            <Link to='/' className='border rounded-md px-5 py-2 '>
              Home
            </Link>
          </span>
        </div>
        <div className='mt-20'>

          <Experience />
        </div>
      </div>
    </motion.div>
  );
};

export default EXP;
