import React from 'react';
import design from '../assets/design.png';
import code from '../assets/code.png';
import consult from '../assets/consulting.png';
const Service = ({ darkMode, BG, bgLight }) => {
  return (
    <div
      name='service'
      className={`darkMode ? ${BG} : '' bg-cover bg-left mt-10  min-h-screen w-screen lg:mt-0  md:pt-20 dark:text-gray-400 `}
    >
      <div>
        <h3 className='text-3xl lg:pb-5  text-center  font-bold tracking-widest'>
          Services I offer
        </h3>

        <p
          className='text-md
         md:text-xl font-burtons bg-gradient-to-r from-blue-900 via-pink-950 to-orange-400 
         bg-clip-text text-transparent
         leading-8
         py-2 text-center tracking-widest  dark:text-gray-400'
        >
          From conceptualization to prototyping and implementation, I deliver
          innovative solutions.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 lg:mx-80 md:mt-20 dark:text-gray-100 '>
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
          className='md:w-80 md:h-80 dark:bg-pink-950 text-center shadow-lg p-5
          md:mt-20
        
         bg-cyan-100  rounded-xl '
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
          className='md:w-80 md:h-80 dark:bg-pink-950  text-center shadow-lg p-5
       
         bg-cyan-100  rounded-xl '
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
      </div>
    </div>
  );
};

export default Service;
