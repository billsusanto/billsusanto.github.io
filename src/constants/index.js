import {
    fast,
    efficient,
    discipline,
    teamwork,

    // web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    // tailwind,
    // nodejs,
    // mongodb,
    // git,
    // figma,
    // docker,

    fossasia,
    commando,
    thecoderschool,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    // threejs,
    python,
    cpp,
    csharp,
    java,
    golang,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "billyBot",
      title: "Billy Bot",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Fast",
      icon: fast,
      back: "I live by the quote \"If you are early, you are on time. If you are on time, you are late\""
    },
    {
      title: "Efficient",
      icon: efficient,
      back: "I achieve great outcomes while upholding high quality and precision"
    },
    {
      title: "Discipline",
      icon: discipline,
      back: "I show strong control at work, strictly following schedules and tasks for steady, good results"
    },
    {
      title: "Teamwork",
      icon: teamwork,
      back: "I am an adept communicator and a dedicated problem solver, contributing to cohesive teamwork"
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "golang",
      icon: golang,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Speaker/ Presenter",
      company_name: "FOSSASIA 2019 Building BloCS Code Labs",
      icon: fossasia,
      iconBg: "#000000",
      date: "Mar 2019",
      points: [
        "Collaborating with cross-functional teams including professors, students, and other presenters to create high-quality presentation.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in presentation reviews and providing constructive feedback to other speakers.",
      ],
    },
    {
      title: "Company Sergeant Major",
      company_name: "Singapore Armed Forces - Commando Unit",
      icon: commando,
      iconBg: "#fff",
      date: "Jan 2020 - Nov 2021",
      points: [
        "Developing and maintaining hygiene and discipline.",
        "Implementing military tactics on the ground.",
        "Participating in large scale military exercises.",
      ],
    },
    {
      title: "Youth Coding Coach",
      company_name: "theCoderSchool",
      icon: thecoderschool,
      iconBg: "#000000",
      date: "August 2022 - January 2023",
      points: [
        "Developing and maintaining Introduction Courses using Scratch and other related technologies.",
        "Collaborating with coaches to create innovative educational content.",
        "Designed child friendly introductory courses for C#, C++ and Python.",
        "Participating in Summer Bootcamps including mbot bootcamp and 3D printing bootcamp.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };