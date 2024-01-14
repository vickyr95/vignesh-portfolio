import React from 'react';
import design from '../assets/design.png';
import code from '../assets/code.png';
import consult from '../assets/consulting.png';
const Service = ({ darkMode, BG, bgLight }) => {
  console.log(BG);
  return (
    <div
      name='service'
      className={`darkMode ? ${BG} : ${bgLight}  bg-cover bg-right  dark:bg-left mt-10  min-h-screen w-screen lg:mt-0 px-2 md:px-0 py-10 md:py-20 dark:text-gray-400 `}
    >
      <div>
        <h3 className='text-3xl lg:pb-5  text-center  font-bold tracking-widest'>
          Services I offer
        </h3>

        <p
          className='text-md
         md:text-xl font-burtons bg-gradient-to-r from-blue-900 via-pink-950 to-amber-500 
         bg-clip-text text-transparent
         leading-8 px-7 md:px-0
         py-2 text-center tracking-widest  dark:text-gray-400'
        >
          From conceptualization to prototyping and implementation, I deliver
          innovative solutions.
        </p>
      </div>
      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-10 lg:mx-72 md:mt-20 
       dark:text-gray-100 px-2 
      md:px-0'
      >
        <div
          className='md:w-80 md:h-80  text-center shadow-lg p-5 dark:bg-black
           bg-pink-100   rounded-xl  dark:text-gray-100 '
        >
          <img
            src={design}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-2'>Design</h3>
          <p className=''>Design and development of custom robots</p>
          <h4 className='pt-3 pb-1 text-teal-600 font-bold text-md'>
            Design tools I use
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-2 '>
            <p className='pb-1'>Solidworks</p>
            <p className='pb-1'>ROS</p>
            <p className='pb-1'>MATLAB/simuLink</p>
          </div>
        </div>
        <div
          className='md:w-80 md:h-80 dark:bg-black md:dark:bg-pink-950 text-center shadow-lg p-5
          md:mt-20
        
        bg-pink-100 md:bg-cyan-100  rounded-xl '
        >
          <img
            src={consult}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-2'>Consulting</h3>
          <p className=''>Design and development of custom robots</p>
          <h4 className='pt-3 pb-1 text-teal-600 font-bold text-md'>
            Design tools I use
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-2 '>
            <p className='pb-1'>Solidworks</p>
            <p className='pb-1'>ROS</p>
            <p className='pb-1'>MATLAB/simuLink</p>
          </div>
        </div>
        <div
          className='md:w-80 md:h-80 dark:bg-black md:dark:bg-pink-950  text-center shadow-lg p-5
       
          bg-pink-100 md:bg-cyan-100  rounded-xl '
        >
          <img
            src={code}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium pt-2'>Code</h3>
          <p className=''>Design and development of custom robots</p>
          <h4 className='pt-3 pb-1 text-teal-600 font-bold text-md'>
            Design tools I use
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-2 '>
            <p className='pb-1'>Solidworks</p>
            <p className='pb-1'>ROS</p>
            <p className='pb-1'>MATLAB/simuLink</p>
          </div>
        </div>
        <div
          className='md:w-80 md:h-80  text-center shadow-lg p-5 dark:bg-black 
          bg-pink-100 md:mt-20  rounded-xl  dark:text-gray-100 '
        >
          <img
            src={design}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-2xl font-medium pt-2'>Code</h3>
          <p className=''>Design and development of custom robots</p>
          <h4 className='pt-3 pb-1 text-teal-600 font-bold text-md text-left'>
            Design tools I use
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-2 '>
            <p className='pb-1'>Solidworks</p>
            <p className='pb-1'>ROS</p>
            <p className='pb-1'>MATLAB/simuLink</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
