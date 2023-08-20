import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ( { experience }) => (
  <VerticalTimelineElement
    contentStyle={{background: '#fff', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    </div>
    
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-black-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-white text-center font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          My Journey
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")