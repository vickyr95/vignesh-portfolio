import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import AllProjects from './pages/AllProjects';
import MyExperience from './pages/experience';
import OverAllPage from './pages/OverAllPage';
import { AnimatePresence } from 'framer-motion';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const bgLight = !darkMode ? 'bg-light' : '';
  const BG = darkMode ? 'bg-dark' : '';

  useEffect(() => {
    // to apply the 'dark' class to the body based on the darkMode state
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark' : ''} overflow-x-hidden`}>
      <main
        className={` ${location.pathname === '/' ? `dark:bg-black ${bgLight}` : ''
          }  text-black dark:text-gray-200 
         bg-cover  bg-bottom  px-0 lg:px-0 w-screen md:w-screen overflow-x-hidden`}
      >
        <AnimatePresence initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path='/'
              element={
                <OverAllPage
                  darkMode={darkMode}
                  BG={BG}
                  bgLight={bgLight}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route path='/projects' element={<AllProjects />} />
            <Route path='/experience' element={<MyExperience />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
