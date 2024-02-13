import React from 'react';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '../utils/animation';
import { skillsData } from '../utils/data';

const Skills = () => {
  return (
    <section className='my-10 md:mb-10 md:mt-0  px-5 '>
      <h3 className=' text-xl md:pb-7 my-10 md:my-0 text-center  font-bold tracking-widest'>
        MySkills
      </h3>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white border  border-black/[0.5] rounded-md  px-5 py-1 '
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
