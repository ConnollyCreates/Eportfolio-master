import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    c,
    nodejs,
    mongodb,
    git,
    bishopkenny,
    minecraft,
    theta_chi,
    hurricane,
    datastructs,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "https://drive.google.com/file/d/1MR2Zf7vc_OG84wDZbRsRHAn0sQaGq-wf/view",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Amateur Strongman",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Apprentice",
      company_name: "The Region",
      icon: minecraft,
      iconBg: "#383E56",
      date: "May 2021 - July 2022",
      points: [
        "Aided development of Java plugins using Spigot API and Bungee API for a video game server peaking at 1000+ concurrent players.",
        "Oversaw the full development lifecycle from concept and design through development, testing, deployment, and support ensuring high quality additions to the consumer base. ",
        "Implemented and configured optimization techniques minimizing downtime by 25% and improving user experience.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Secretary",
      company_name: "Java Programming Club",
      icon: bishopkenny,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Maintained records of over 60 club meetings, activities, and events, ensuring clear communication for members and leadership",
        "Coordinated with 45 club members and guest speakers to organize workshops and guest lectures, promoting engagement and skill development in Android Development using Android Studio and Java programming principles such as Polymorphism and Encapsulation. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Java Developer",
      company_name: "Freelance Work",
      icon: minecraft,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed a commissioned Java plugin for a server owner, creating a user-friendly GUI to streamline the most recent and frequently used administrative actions. Improving admistrative action speed by 45%",
        "Developed on a Java plugin with a team of four people that optimized server performance and gameplay, resulting in a 34% increase in player retention and a 23% boost in revenue for the company using Spigot API.",
        "Implemented responsive design principles to ensure an optimal experience, enhancing accessibility and user engagement.",
        "Designed and implemented custom administrative commands, usable in-game or in console, tailored to the specific needs of moderators and admins, enhancing server management and control.",
      ],
    },
    {
      title: "Risk Manager, Secretary, Scholarship Chair",
      company_name: "Theta Chi Fraternity",
      icon: theta_chi,
      iconBg: "#E6DEDD",
      date: "Nov 2023 - Present",
      points: [
        "Implemented strategies to identify and secure scholarship opportunities for members, garnering over $11,000 in scholarships to members.",
        "Collaborated with chapter leadership and external advisors to enforce policies related to alcohol consumption, event planning, and member conduct, contributing to a significant decrease in incidents during events.",
        "Tracked members’ GPA standings and provided resources to those in need of academic support.",
        "Oversaw and updated fraternity documents, including membership rosters, meeting agendas, By-Laws, and policies.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "HurricaneGIS",
      description:
        "Engineered a real-time GIS tool to map and track hurricane hazards using MongoDB for efficient data storage and Google Maps API for dynamic hazard visualization. ",
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
          name: "Google Maps API",
          color: "pink-text-gradient",
        },
        {
          name: "Hackathon",
          color: "blue-text-gradient",
        },
      ],
      image: hurricane,
      source_code_link: "https://github.com/dylanmc1ntee/Hurricane-GIS",
    },
    {
      name: "Data Structures and Algorithms Coursework",
      description:
        "Learned the implementation of common data structures and algorithms in C, including linked lists, stacks, queues, trees, and sorting algorithms.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "Data Structures",
          color: "green-text-gradient",
        },
        {
          name: "Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: datastructs,
      source_code_link: "https://github.com/ConnollyCreates/CS1/tree/main",
    },
    
  ];
  
  export { services, technologies, experiences, projects };