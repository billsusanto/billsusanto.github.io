import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { profilePicture } from "../assets";
import { mediaApplications } from "../constants";

const IntroductionCard = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="holographic-card"
    >
      <div className="card-inner">
        <div className="card-content flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="md:order-1 mb-4 md:mb-0 flex flex-col items-center">
            <div className="profile-picture-wrapper">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/30 shadow-glow profile-picture-container mx-auto">
                <img
                  src={profilePicture}
                  alt="Bill Susanto"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="profile-glow"></div>
            </div>
          </div>

          <div className="md:order-2 w-full text-center md:text-left">
            <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-wider glow-text">
              Bill Susanto
            </h3>

            <div className="profile-social mb-4 md:mb-6 flex justify-center md:justify-start gap-3">
              {mediaApplications.map((app, index) => (
                <a
                  key={index}
                  href={app.hyperlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={app.name}
                >
                  <img
                    src={app.icon}
                    alt={`${app.name} Icon`}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>

            <div className="text-white text-sm md:text-base space-y-3 md:space-y-4 max-w-2xl">
              <p className="leading-relaxed text-base sm:text-lg">
                Computer Science graduate at{" "}
                <span className="text-white font-medium">
                  University of California, Irvine
                </span>{" "}
              </p>
              <p className="leading-relaxed">
                Passionate about software development with experience in
                full-stack web development, mobile applications, and AI
                projects.
              </p>
              <div className="py-1 md:py-2">
                <h4 className="text-sm uppercase tracking-wider text-white/80 mb-1 md:mb-2">
                  TECHNICAL SKILLS
                </h4>
                <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
                  <span className="holographic-badge">Python</span>
                  <span className="holographic-badge">JavaScript</span>
                  <span className="holographic-badge">React</span>
                  <span className="holographic-badge">Node.js</span>
                  <span className="holographic-badge">Java</span>
                  <span className="holographic-badge">C++</span>
                </div>
              </div>
              <p className="leading-relaxed">
                Seeking software engineering internship opportunities to apply
                and enhance my skills in real-world contexts.
              </p>
              <div className="mt-4 md:mt-8 pt-2 md:pt-4 border-t border-white/20">
                <a
                  href="https://drive.google.com/file/d/1KMba6QcTri1FsRY_Ga7oUQrOlSrX0Qes/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holographic-button"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-light-effect"></div>
    </motion.div>
  );
};

const Introduction = () => {
  return (
    <div className="introduction relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-0 sm:px-4 z-10 relative">
        <IntroductionCard />
      </div>
    </div>
  );
};

export default Introduction;
