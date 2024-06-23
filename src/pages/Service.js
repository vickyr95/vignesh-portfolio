import React from 'react';
import { servicesData } from '../utils/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';

const Service = ({ BG }) => {
  return (
    <div
      name='service'
      className={`!darkMode ? '' : ${BG} bg-right-bottom lg:min-h-screen w-screen lg:mt-0 px-2 md:px-20 py-10 md:py-5 lg:py-20 dark:text-gray-200`}
    >
      <div>
        <h3 className=' text-2xl lg:pb-5 mt-5 md:mt-0 text-center font-bold tracking-widest'>
          <span className='text-xl line-through'>
            WHAT CAN I OFFER
          </span>
          &nbsp;
          &nbsp;
          <span className='text-2xl text-center font-bold bg-gradient-to-r from-fuchsia-700 via-pink-900 to-indigo-950 dark:text-orange-200  bg-clip-text text-transparent  py-2'>
            WHAT CAN WE OFFER
          </span>
        </h3>




        <p className='text-2xl leading-10 px-2 py-4 text-gray-800 dark:text-gray-100 text-center'>
          My friends and I specialize in various sub-domains of robotics development, both hardware and software.
          <br></br>
          This allows us to offer a wide range of services, including:
        </p>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerGroup: 4,
          },
        }}
        autoplay={{
          delay: 1500, // Adjust the delay as needed
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className='mt-10'
      >
        {servicesData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className='text-center shadow-lg p-5 bg-pink-100 mx-5 md:mx-0 rounded-xl text-black items-center justify-between'
              >
                <img
                  src={item.icon}
                  alt='service1'
                  className='mx-auto rounded-md'
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
