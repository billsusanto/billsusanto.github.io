import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/common/ProjectCard";
import SectionHeader from "@/components/common/SectionHeader";

const Projects = () => {
  // Example projects data - you should replace this with your actual projects
  const [projects, setProjects] = useState([
    {
      name: "Billybot",
      description:
        "An AI chatbot using Next.js and OpenAI API, providing detailed information about my achievements and contributions.",
      tags: [
        { name: "nextjs", color: "text-blue-500" },
        { name: "openai", color: "text-green-500" },
        { name: "tailwindcss", color: "text-purple-500" },
      ],
      image: "https://via.placeholder.com/500x300?text=Billybot",
      source_code_link: "https://github.com/billsusanto/billybot",
      live_link: "https://billybot-v1.vercel.app/",
    },
    {
      name: "Coba",
      description:
        "A collaborative matchmaking platform designed to enhance student project engagement.",
      tags: [
        { name: "react", color: "text-blue-500" },
        { name: "mongodb", color: "text-green-500" },
        { name: "express", color: "text-purple-500" },
      ],
      image: "https://via.placeholder.com/500x300?text=Coba",
      source_code_link: "https://github.com/billsusanto/Coba",
    },
    {
      name: "TheraAI",
      description:
        "An emotion detection system integrating OpenCV with HUME API on the backend using Flask.",
      tags: [
        { name: "python", color: "text-blue-500" },
        { name: "flask", color: "text-green-500" },
        { name: "opencv", color: "text-purple-500" },
      ],
      image: "https://via.placeholder.com/500x300?text=TheraAI",
      source_code_link: "https://github.com/billsusanto/TheraAI",
    },
    {
      name: "Portfolio Website",
      description:
        "A modern, interactive portfolio built with React, Three.js, and Tailwind CSS showcasing my projects and skills.",
      tags: [
        { name: "react", color: "text-blue-500" },
        { name: "threejs", color: "text-green-500" },
        { name: "tailwindcss", color: "text-purple-500" },
      ],
      image: "https://via.placeholder.com/500x300?text=Portfolio",
      source_code_link: "https://github.com/billsusanto/billsusanto.github.io",
      live_link: "https://billsusanto.github.io/",
    },
  ]);

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Projects" subtitle="My recent work" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-muted-foreground max-w-3xl"
        >
          These projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. They reflect my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
