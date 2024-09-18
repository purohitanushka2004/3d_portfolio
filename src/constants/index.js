import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    shopify,
    carrent,
    jobit,
    tripguide,
    adoption,
    shopping_img,
    shamine_img,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "c,c++,python,Java coder",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Adoption of dogs_website",
    //   company_name: "freelancer",
    //   icon: dog,
    //   iconBg: "#383E56",
    //   date: "March 2021 - June 2021",
    //   points: [
    //     "Responsive design for a seamless user experience on various devices.",
    //     "Technologies used: HTML, CSS, JavaScript",
    //     "Challenges: Handling image uploads, adoption application integration, and data security.",
    //     "A project close to the heart, combining web development and a passion for animals.",
    //   ],
    // },
    {
      title: "Shopping website",
      company_name: "Shamine",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "1ST May 2023 - 1STJuly 2023",
      points: [
        "E-Commerce Website: Designed and developed a responsive shopping websit",
        "Frameworks: Experienced with React (or Angular/Vue.js).",
        "IFront-End Web Development: Proficient in HTML, CSS, and JavaScript, API Integration: Integrated payment gateways and product data APIs.",
        "Version Control: Familiar with Git for code management, Project Management: Successfully met project deadlines.",
      ],
    },
    {
      title: "Summer Intern",
      company_name: "opto electronic factory (OLF)",
      icon: shopify,
      iconBg: "#383E56",
      date: "22july2024 - 21August2024",
      points: [
        "Gained experience in cybersecurity protocols and dataset management.",
        "Developed projects to enhance data security and optimize system defenses.",
        "Implemented strategies to protect sensitive information and mitigate vulnerabilities",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [



    {
      name: "Music Application",
      description:
        "The music application, built with HTML, CSS, and JavaScript, offers an intuitive and engaging listening experience with features like playback controls and volume adjustment. Its modern UI ensures effortless navigation and enjoyment of music.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: adoption,
      source_code_link: "https://github.com/purohitanushka2004/Random-Code-Generator",
    },


    // {
    //   name: "Adoption of dog",
    //   description:
    //     "Web-based platform that allows users to search, cats and dogs from various providers, providing a convenient and efficient solution for homless animals.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: adoption,
    //   source_code_link: "",
    // },
    {
      name: "Random Quote Generator",
      description:
        "The random quote generator, created with React, delivers a fresh and inspirational quote at the click of a button. Its sleek interface and efficient performance make it a simple yet engaging tool for daily motivation.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shopping_img,
      source_code_link: "https://github.com/purohitanushka2004/Random-Code-Generator",
  
    },

    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects, };