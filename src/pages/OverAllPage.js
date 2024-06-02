import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from '../components/Navbar';
import Projects from './Projects';
import Service from './Service';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const OverAllPage = ({ darkMode, BG, bgLight, setDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} BG={BG} />

      <Service BG={BG} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} bgLight={bgLight} /> 
      <Contact />
      <Footer darkMode={darkMode} />
    </motion.div>
  );
};

export default OverAllPage;
