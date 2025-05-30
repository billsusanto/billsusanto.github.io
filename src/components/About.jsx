import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { profilePicture } from "../assets";
import StarsCanvas from "./canvas/Stars";
import "../index.css";

const IntroductionCard = () => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-[20px] p-10 w-full max-w-4xl mx-auto shadow-2xl intro-card backdrop-blur-sm bg-opacity-80 min-h-[600px] flex flex-col justify-center"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:order-2 mb-8 md:mb-0">
          <div className="profile-picture-wrapper">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#4fd1c5] shadow-lg profile-picture-container mx-auto md:mx-0">
              <img
                src={profilePicture}
                alt="Bill Susanto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="profile-glow"></div>
          </div>

          <div className="profile-social mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/billsusanto"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/bill-susanto/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div className="md:order-1 w-full text-center md:text-left">
          <h3 className="text-[#4fd1c5] text-4xl md:text-5xl font-bold mb-6 tracking-wider">
            Bill Susanto
          </h3>
          <div className="text-gray-100 text-sm md:text-base space-y-4 max-w-2xl">
            <p className="leading-relaxed text-lg">
              Computer Science student at{" "}
              <span className="text-[#4fd1c5] font-medium">
                University of California, Irvine
              </span>{" "}
              (Expected June 2025)
            </p>
            <p className="leading-relaxed">
              Passionate about software development with experience in
              full-stack web development, mobile applications, and AI projects.
            </p>
            <div className="py-2">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                Technical Skills
              </h4>
              <p className="leading-relaxed">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">C++</span>
              </p>
            </div>
            <p className="leading-relaxed">
              Previously served as Company Sergeant Major in Singapore Armed
              Forces and worked as a Coding Mentor at theCoderSchool.
            </p>
            <p className="leading-relaxed">
              Seeking software engineering internship opportunities to apply and
              enhance my skills in real-world contexts.
            </p>
            <div className="mt-8 pt-4 border-t border-gray-700">
              <a
                href="https://drive.google.com/file/d/1KMba6QcTri1FsRY_Ga7oUQrOlSrX0Qes/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div
      id="About"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black to-[#0a0a1a]"
    >
      <StarsCanvas />
      <div className="w-full max-w-6xl mx-auto z-10 relative">
        <IntroductionCard />
      </div>
    </div>
  );
};

export default About;
