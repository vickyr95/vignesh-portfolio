import React from 'react';
import design from '../assets/design.png';
import code from '../assets/code.png';
import consult from '../assets/consulting.png';
const Service = () => {
  return (
    <div
      name='service'
      className='mt-10  min-h-screen lg:mt-0 p-10 md:p-5 dark:text-gray-400'
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mx-5 lg:mx-44 md:mt-20 dark:text-gray-100'>
        <div
          className='md:w-96 md:h-96  text-center shadow-lg pt-10 dark:bg-black bg-pink-100 transition-transform 
        duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-pink-900  rounded-xl  dark:text-gray-100 '
        >
          <img
            src={design}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium py-2'>Design</h3>
          <p className='pt-2 pb-0'>Design and development of custom robots</p>
          <h4 className='py-2 text-teal-600'>Design tools I use</h4>
          <p className='pb-1'>Solidworks</p>
          <p className='py-1'>ROS</p>
          <p className='py-1'>MATLAB/simuLink</p>
        </div>
        <div className='md:w-96 md:h-96 dark:bg-stone-900 text-center shadow-lg pt-10 md:mt-20 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg bg-cyan-100 hover:bg-stone-500 rounded-xl '>
          <img
            src={design}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium py-2'>Design</h3>
          <p className='pt-2 pb-0'>Design and development of custom robots</p>
          <h4 className='py-2 text-teal-600'>Design tools I use</h4>
          <p className='pb-1'>Solidworks</p>
          <p className='py-1'>ROS</p>
          <p className='py-1'>MATLAB/simuLink</p>
        </div>
        <div
          className='md:w-96 md:h-96  dark:bg-stone-900 text-center shadow-lg pt-10 
        transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg bg-cyan-100  hover:bg-stone-500  rounded-xl '
        >
          <img
            src={consult}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium py-2'>Design</h3>
          <p className='pt-2 pb-0'>Design and development of custom robots</p>
          <h4 className='py-2 text-teal-600'>Design tools I use</h4>
          <p className='pb-1'>Solidworks</p>
          <p className='py-1'>ROS</p>
          <p className='py-1'>MATLAB/simuLink</p>
        </div>
        <div
          className='md:w-96 h-96  text-center shadow-lg pt-10 md:mt-20 
        transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg
         bg-pink-100 hover:bg-pink-900 rounded-xl dark:bg-black'
        >
          <img
            src={code}
            alt='service1Design'
            width={100}
            height={100}
            className='mx-auto'
          />
          <h3 className='text-lg font-medium py-2'>Design</h3>
          <p className='pt-2 pb-0'>Design and development of custom robots</p>
          <h4 className='py-2 text-teal-600'>Design tools I use</h4>
          <p className='pb-1'>Solidworks</p>
          <p className='py-1'>ROS</p>
          <p className='py-1'>MATLAB/simuLink</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
