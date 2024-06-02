import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
  });
  console.log(formDetails);
  let handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormDetails({ ...formDetails, [name]: value });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formDetails);
    let templateParams = {
      from_name: formDetails.name,
      to_name: 'Vignesh',
      from_email: formDetails.email,
      to_email: 'connect@vigneshrajendran.in',
      form_message: formDetails.message,
    };
    emailjs
      .send('service_yxceu8n', 'template_kzp0jzl', templateParams, {
        publicKey: 'cZYmNlv8L_wgdd91I',
      })
      .then(
        (response) => {
          alert('Thank you. We will get back to you as soon as possible');
          console.log('SUCCESS!', response.status, response.text);
          setFormDetails({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          alert('OOPS..Sorry something went wrong.Try again.');
          console.log('FAILED...', err);
        }
      );
  };
  return (
    <motion.section
      className={` min-h-screen dark:bg-stone-900 bg-amber-50 pb-10 md:pb-20 `}
      name='contact'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 4,
      }}
    >
      <div className={`container mx-auto `}>
        {/* {Text & image} */}
        <div className='grid lg:grid-cols-2 pt-12 lg:h-[420px] mb-6 md:mb-24 mx-10 md:mx-20'>
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-orange-300'></span>
              Say Hello 👋
            </div>
            <h1 className='text-4xl font-bold max-w-md mb-8'>
              Let's Work Together.
            </h1>
            <p className=' max-w-[400px] leading-7  font-medium'>
              Ready to elevate your robotics projects? 
              <br></br>
              <br></br>
              Our expert robotics engineers are here to help. 
              <br></br>
              <br></br>
              Whether you're a researcher, a company seeking automation solutions, or an enthusiast with a robotics vision, we've got you covered. 
              <br></br>
              <br></br>
              Contact us for collaborations, consultations, or to discuss your specific needs.
            </p>
          </div>

          <div
            className={`hidden lg:flex w-full h-96  bg-contact_light dark:bg-contact_dark  bg-contain bg-no-repeat`}
          ></div>
        </div>

        {/* Info & form */}
        <div className='grid md:grid-cols-2   mx-10 md:mx-20  '>
          {/* info text */}
          <div className='flex flex-col gap-y-4 text-lg font-semibold md:gap-y-10 mb-12 md:mb-24'>
            {/* mail */}
            <a
              href='https://mail.google.com/?view=cm&fs=1&to=connect@vigneshrajendran.in'
              target='_blank'
              rel='noreferrer'
            >
              <div className='flex items-center gap-x-8 '>
                <IoIosMail className='w-7 h-7 hover:text-slate-700' />

                <div className='hover:text-slate-700'>
                  connect@vigneshrajendran.in
                </div>
              </div>
            </a>
          </div>
          <form className='' onSubmit={handleSubmit}>
            <h1 className='md:hidden flex text-xl font-bold  mb-5'>
              Contact me
            </h1>
            <input
              type='text'
              name='name'
              placeholder='Your name'
              value={formDetails.name}
              onChange={handleChange}
              className='h-10 mb-3 px-4 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              value={formDetails.email}
              onChange={handleChange}
              className='block my-3 px-4 h-10 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
            />
            <textarea
              className='h-52 my-3 p-4 w-full rounded-lg border border-black/50 dark:border-black dark:bg-stone-950/50'
              name='message'
              onChange={handleChange}
              value={formDetails.message}
              placeholder='Your message'
            />
            <button
              type='submit'
              className='group flex items-center justify-center 
              gap-2 h-[3rem] w-[8rem] text-white bg-gray-900 dark:bg-black rounded-full 
              outline-none transition-all
              focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-pink-950 active:scale-105'
            >
              Submit{' '}
              <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
