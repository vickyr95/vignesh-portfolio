import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const AllProjects = () => {
  return (
    <motion.div
      className='min-h-screen py-10 mx-auto dark:bg-black dark:text-gray-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      //   exit={{ opacity: 1 }}
    >
      <div className='container mx-auto '>
        <div className=' flex  gap-4 items-center justify-between mx-10   '>
          <span className='  py-5'>
            <Link to='/' className='border rounded-md px-5 py-2 '>
              Home
            </Link>
          </span>
          <span className=' text-black dark:text-gray-300 text-3xl font-bold capitalize'>
            My Projects
          </span>
          <div></div>
        </div>

        <div className='container   md:mx-10 px-10  my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projectsData.map((project, index) => (
            <div key={index} className=' '>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AllProjects;
