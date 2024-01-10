import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const bgClasses = darkMode ? 'bg-dark' : 'bg-light';
  // useEffect(() => {
  //   // Apply the 'dark' class to the body based on the darkMode state
  //   document.body.classList.toggle('dark', darkMode);
  // }, [darkMode]);
  return (
    // className={darkMode ? 'dark' : ''}
    <div className={darkMode ? 'dark' : ''}>
      <main
        className={`${bgClasses} text-black dark:text-gray-100 bg-cover bg-center md:px-10 `}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} bg={bgClasses} />
        <Home darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Service />
        <Projects />
        <Contact />

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
