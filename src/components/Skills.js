import React from 'react';
import { motion } from 'framer-motion';
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
const Skills = () => {
  const skillsData = [
    'Python',
    'Flutter',
    'Figma Design',
    'Machine Learning AI',
    'Agile Metholologies',
  ];
  return (
    <section className='my-10 md:mb-10  '>
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
