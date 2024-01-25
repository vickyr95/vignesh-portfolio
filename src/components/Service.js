import React from 'react';
import { servicesData } from '../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Service = ({ darkMode, BG, bgLight }) => {
  return (
    <div
      name='service'
      className={`!darkMode ? '' : ${BG}  bg-cover bg-right   dark:bg-left mt-10 
       min-h-screen w-screen lg:mt-0 px-2 md:px-20 py-10 md:py-20 dark:text-gray-400 `}
    >
      <div>
        <h3 className='text-3xl lg:pb-5  text-center  font-bold tracking-widest'>
          Services I offer
        </h3>

        <p
          className='text-md
         md:text-2xl font-burtons bg-gradient-to-r from-blue-900 via-pink-950 to-amber-500 
         bg-clip-text text-transparent
         leading-8 px-7 md:px-0
         py-2 text-center tracking-widest  dark:text-gray-400'
        >
          offering a comprehensive range of services, my team and I specialize
          in
        </p>
      </div>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={4}
        // slidesPerGroup={4}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 2,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: 'true' }}
        className='mt-10  '
      >
        {servicesData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className=' text-center shadow-lg p-5 
           bg-pink-100 mx-5 md:mx-0  rounded-xl  text-black items-center justify-between'
              >
                <img
                  src={item.icon}
                  alt='service1'
                  className=' mx-auto rounded-md'
                />
                {/* <h3 className=''>Design</h3> */}
                <p className='text-xl font-bold py-5'>{item.service}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6 md:mt-10 
       dark:text-gray-100 px-2 
      md:px-10 '
      >

       
      </div> */}
    </div>
  );
};

export default Service;
