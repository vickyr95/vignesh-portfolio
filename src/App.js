import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import Footer from './components/Footer';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const bgLight = !darkMode ? 'bg-light' : '';
  const BG = darkMode ? 'bg-dark' : '';
  useEffect(() => {
    // Apply the 'dark' class to the body based on the darkMode state

    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);
  return (
    // className={darkMode ? 'dark' : ''}
    <div className={`${darkMode ? 'dark' : ''} overflow-x-hidden`}>
      <main
        className={`dark:bg-black ${bgLight}   text-black dark:text-gray-100 
         bg-cover  bg-bottom  px-0 lg:px-0 w-screen md:w-screen overflow-x-hidden`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} BG={BG} bgLight={bgLight} />
        <About darkMode={darkMode} bgLight={bgLight} />
        <Service darkMode={darkMode} BG={BG} bgLight={bgLight} />
        <Projects />
        <Contact darkMode={darkMode} BG={BG} bgLight={bgLight} />
        <Footer darkMode={darkMode} BG={BG} bgLight={bgLight} />
        {/* <section className=' min-h-screen'>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Projects />
        <Contact />
      </section> */}
      </main>
    </div>
  );
}

export default App;
