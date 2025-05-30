import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useEffect } from "react";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "rgba(15, 18, 30, 0.4)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "10px solid rgba(15, 18, 30, 0.4)" }}
    date={experience.date}
    iconStyle={{ background: "rgba(15, 18, 30, 0.6)" }}
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
    <div className="backdrop-blur-sm">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-white/80 text-[16px] font-semibold"
        style={{ margin: 0, color: "white !important" }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white/90 text-[14px] pl-1 tracking-wider"
          style={{ color: "white !important" }}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  useEffect(() => {
    // Add scroll observer to trigger animation for timeline elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all timeline elements and observe them
    setTimeout(() => {
      const timelineElements = document.querySelectorAll(
        ".vertical-timeline-element"
      );
      timelineElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      const timelineElements = document.querySelectorAll(
        ".vertical-timeline-element"
      );
      timelineElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <div>
        <h2
          className="text-white text-center font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          style={{
            color: "white !important",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
          }}
        >
          My Journey
        </h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

// Custom SectionWrapper for Experience with transparent background
const ExperienceWrapper = (Component) => SectionWrapper(Component, "work");

export default ExperienceWrapper(Experience);
