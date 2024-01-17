import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './Projects';
import Service from './Service';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const OverAllPage = ({ darkMode, BG, bgLight, setDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      //   exit={{ opacity: 1 }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} BG={BG} bgLight={bgLight} />
      <About darkMode={darkMode} bgLight={bgLight} />
      <Service darkMode={darkMode} BG={BG} bgLight={bgLight} />
      <Projects darkMode={darkMode} BG={BG} bgLight={bgLight} />
      <Contact darkMode={darkMode} BG={BG} bgLight={bgLight} />
      <Footer darkMode={darkMode} BG={BG} bgLight={bgLight} />
    </motion.div>
  );
};

export default OverAllPage;
