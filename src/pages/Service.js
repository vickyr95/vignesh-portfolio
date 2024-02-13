import React from 'react';
import { servicesData } from '../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Service = ({ BG }) => {
  return (
    <div
      name='service'
      className={`!darkMode ? '' : ${BG}     bg-right-bottom   mt-10 
       lg:min-h-screen w-screen lg:mt-0 px-2 md:px-20 py-10 md:py-5 lg:py-20 dark:text-gray-200 `}
    >
      <div>
        <h3 className='text-3xl lg:pb-5  text-center  font-bold tracking-widest'>
          SERVICES WE OFFER
        </h3>

        <p
          className='text-md 
         md:text-xl font-burtons bg-gradient-to-r from-blue-900 via-pink-950 to-amber-500 
         bg-clip-text text-transparent
         leading-8 px-7 md:px-0
         py-2 text-center tracking-widest  dark:text-gray-200'
        >
          offering a comprehensive range of services, my team and i specialize
          in
        </p>
      </div>
      <Swiper
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
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
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
              delay: 1000,
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
               
                <p className='text-xl font-bold py-5'>{item.service}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Service;
