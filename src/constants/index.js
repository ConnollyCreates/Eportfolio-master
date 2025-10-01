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
    threejsPortfolio,
    wells_fargo,
    strongmanBg,
    knighthacks,
    paracosm,
    memorAI,
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
      id: "/resume",
      title: "Resume",
    },
    {
      id: "https://www.linkedin.com/in/gabriel-connolly-27b732131/", 
      title: "LinkedIn",
    },
    {
      id: "https://github.com/ConnollyCreates", 
      title: "GitHub",
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
      backgroundImage: strongmanBg,
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
      title: "SWE Intern - Sophomore Discovery Fellowship Program",
      company_name: "Wells Fargo",
      icon: wells_fargo,
      iconBg: "#E6DEDD",
      iconSize: "70%", // Corporate logos often need more space
      date: "June 2025 - July 2025",
      points: [
        "Placed on the Wealth and Investment Management Technology team under Investment Solutions in the annuity space.",
        "Gained exposure to the enterprise-wide migration from Pivotal Cloud Foundry to Red Hat OpenShift Container Platform, learning about containerization and CI/CD implications.",
        "Used Postman to analyze RESTful endpoints and validate annuity-related workflows across distributed systems.",
        "Participated in a Taproot Foundation pro bono consulting project supporting the Collective Empowerment Group (CEG), a nonprofit focused on affordable homeownership initiatives in Miami’s Black communities.",
        "Participated in Agile ceremonies, including stand-ups and sprint reviews, gaining hands-on experience with Scrum development methodology.",
      ],
    },
    {
      title: "Outreach Director",
      company_name: "Knight Hacks",
      icon: knighthacks,
      iconBg: "#E6DEDD",
      iconSize: "75%", 
      date: "Dec 2024 - Present",
      points: [
        "Designed and implemented outreach campaigns across UCF’s CS and CE departments, contributing to a 102% increase in new member signups.",
        "Created a repeatable outreach playbook for future directors to manage outreach responsibilities.",
        "Collaborated with the executive board on event planning, volunteer coordination, and outreach campaigns to strengthen the club’s presence on campus and beyond.",
        "Manage Knight Hacks’ Instagram and LinkedIn presence, using social media strategy to expand brand awareness and attract new members and sponsors.",
        "Converted outreach into 1,000+ participants and establishing Knight Hacks as a top Southeast collegiate hackathon.",
      ],
    },
    {
      title: "Risk Manager, Secretary, Scholarship Chair",
      company_name: "Theta Chi Fraternity",
      icon: theta_chi,
      iconBg: "#E6DEDD",
      iconSize: "75%", 
      date: "Nov 2023 - Present",
      points: [
        "Awarded the Victor Simon Memorial Scholarship and Janet Blue Scholarship, recognizing leadership, academic excellence, and commitment to the values of Theta Chi Fraternity.",
        "Received the Resolute Man distinction, one of the most prestigious honors in Theta Chi Fraternity, recognizing exceptional leadership, academic achievement, and dedication to the fraternity’s core values.",
        "Selected as 1 of 10 students nationally to attend the Resolute Man Commercial Banking Experience at Fifth Third Bank Headquarters in Cincinnati, gaining firsthand insights into commercial banking, payments, and executive leadership.",
        "Implemented strategies to identify and promote scholarship opportunities for other members, helping the chapter secure over $15,000 in total scholarships during the year.",
        "Monitored chapter academic performance, tracked GPA standings, and connected members with tutoring and campus resources to promote academic success.",
      ],
    },
    {
      title: "Java Developer",
      company_name: "Freelance Work",
      icon: minecraft,
      iconBg: "#383E56",
      iconSize: "90%", 
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developed a commissioned Java plugin for a server owner, creating a user-friendly GUI to streamline the most recent and frequently used administrative actions. Improving admistrative action speed by 45%",
        "Developed on a Java plugin with a team of four people that optimized server performance and gameplay, resulting in a 34% increase in player retention and a 23% boost in revenue for the company using Spigot API.",
        "Implemented responsive design principles to ensure an optimal experience, enhancing accessibility and user engagement.",
        "Designed and implemented custom administrative commands, usable in-game or in console, tailored to the specific needs of moderators and admins, enhancing server management and control.",
      ],
    },
    
    {
      title: "Software Developer Apprentice",
      company_name: "The Region",
      icon: minecraft,
      iconBg: "#383E56",
      iconSize: "90%", 
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
      iconSize: "82%", 
      date: "Jan 2021 - Feb 2022",
      points: [
        "Maintained records of over 60 club meetings, activities, and events, ensuring clear communication for members and leadership",
        "Coordinated with 45 club members and guest speakers to organize workshops and guest lectures, promoting engagement and skill development in Android Development using Android Studio and Java programming principles such as Polymorphism and Encapsulation. ",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
  ];
  
  const projects = [
    {
      name: "MemorAI",
      description:
        "MemorAI is an AR-enabled web app built at ShellHacks 2025 to support Alzheimer’s patients in recognizing loved ones. I designed the computer vision pipeline using FastAPI, InsightFace, and FAISS. The system integrates with Azure/Firebase for secure photo storage and scales to 100+ enrolled people with over 1,000 stored photos. On the frontend, a Next.js AR interface overlays dynamic “memory cards” with names and relationships, delivering accurate, real-time cues to improve recall and reduce confusion in daily interactions.",
      tags: [
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ShellHacks 2025",
          color: "green-text-gradient",
        },
        {
          name: "Azure/Firebase",
          color: "blue-text-gradient",
        },
      ],
      image: memorAI,
      source_code_link: "https://github.com/ConnollyCreates/MemorAI",
    },
    {
      name: "Paracosm",
      description:
        "Paracosm is a web-accessible program that allows users to enter a world of creation. They can manipulate objects in Unity created 3D environment. Speak through an audio detection system to put objects in their world. And finally dive into an imagined world that was created by them.",
      tags: [
        {
          name: "C#",
          color: "pink-text-gradient",
        },
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Bitcamp 2025",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI Whisper",
          color: "blue-text-gradient",
        },
      ],
      image: paracosm,
      source_code_link: "https://devpost.com/software/paracosm",
    },
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
    {
      name: "Portfolio Website",
      description:
        "After completing a course on Three.js, I decided to create a portfolio website to showcase my work. This website was built using React.js, Tailwind CSS, and Three.js.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
      ],
      image: threejsPortfolio,
      source_code_link: "https://github.com/ConnollyCreates/Eportfolio-master",
    },
    
  ];
  
  export { services, technologies, experiences, projects };