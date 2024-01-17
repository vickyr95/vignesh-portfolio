import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const AllProjects = () => {
  return (
    <motion.div
      className='min-h-screen '
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1, ease: 'easeOut' }}
      //   exit={{ opacity: 1 }}
    >
      <Link to='/'>Home</Link>
      {projectsData.map((project, index) => (
        <div key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </motion.div>
  );
};

export default AllProjects;
