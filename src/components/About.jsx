import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { services } from '../constants';
import { fadeIn } from '../utils/motion';

import { armory } from "../assets";
import "../index.css";

const ServiceCard = ({ index, title, icon, back }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Tilt className="flex xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[300px]">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full p-[1px] rounded-[20px] shadow-card service-card' onClick={handleClick}>
        <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='front-content bg-teal rounded-[30px] py-5 px-12 xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] flex justify-evenly items-center flex-col'
              >
                <img src={icon} alt={title} className='xs:w-[50px] xs:h-[50px] sm:w-[54px] sm:h-[54px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px] object-contain' />
                <h3 className='xs:hidden sm:hidden md:block xl:block text-white text-[20px] font-bold text-center'>{title}</h3>
              </motion.div>
            </div>
            <div className="flip-card-back">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='back-content bg-teal rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <h3 className='text-white text-[15px] font-bold'>{back}</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div id="About" className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl" style={{ backgroundImage: `url(${armory})` }}>
      <div className="w-full flex flex-col justify-end">

          <h2 className="text-white font-bold text-6xl xs:text-[35px] sm:text-[45px] md:text-[55px] xl:text-[65px]">
            <div className="ml-8 mt-20">My Strengths</div>
          </h2>
      </div>

      <div className="w-full mx-auto">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="text-white xs:text-[20px] sm:text-[25px] md:text-[30px] xl:text-[30px] max-w-3xl leading-[30px]">
          <div className="ml-8 mt-10">Each card represents my attributes</div>
        </motion.p>
      </div>

      <div className="flex justify-center">
        <div className="mt-36">
          <div className="flex flex-wrap justify-center gap-10">
            {services.map((service, index, back) => (
              <ServiceCard key={service.title} index={index} back={back} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
