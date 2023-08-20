import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { services } from '../constants';
import { fadeIn } from '../utils/motion';

import { armory } from "../assets";

const ServiceCard = ({ index, title, icon, back }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full p-[1px] rounded-[20px] shadow-card' onClick={handleClick}>
        <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='front-content bg-teal rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
              >
                <img src={icon} alt={title} className='w-40 h-40 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
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
    <div className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl" style={{ backgroundImage: `url(${armory})` }}>
      <div className="w-full flex flex-col justify-end">

          <h2 className="text-white font-bold text-6xl">
            <div className="ml-8 mt-20">My Strengths</div>
          </h2>
      </div>

      <div className="w-full mx-auto">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="text-white text-[30px] max-w-3xl leading-[30px]">
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
