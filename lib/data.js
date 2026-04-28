// Mock data for the portfolio

export const profile = {
  name: "Md Sagor",
  role: "Junior Software Engineer",
  bio: "Results-driven Junior Software Engineer specialized in building scalable web applications with React, Next.js, and Python/Django. Expert in bridging design and technology through robust API integrations and high-performance, user-centric development.",
};

export const experience = [
  {
    id: 1,
    company: "Texon Limited",
    role: "Junior Full Stack Developer",
    dateRange: "Oct 2024 - Present",
    location: "Shewrapara, Dhaka (On-Site)",
    description: [
      "Developed and maintained responsive, high-performance web applications using React and Next.js, ensuring cross-browser compatibility and optimized user experience.",
      "Successfully integrated complex RESTful APIs into frontend components to facilitate dynamic data flow and real-time updates.",
      "Architected and implemented robust backend services and REST APIs using Python and Django, streamlining communication between server and client-side.",
      "Designed and customized comprehensive Django Admin Dashboards to manage internal data, improving workflow efficiency for stakeholders.",
      "Collaborated with the design team to translate UI/UX wireframes into functional, high-quality code.",
      "Optimized application performance and resolved technical bugs to ensure high uptime and a smooth user journey.",
    ],
    techStack: ["React.js", "Next.js", "Django", "PostgreSQL", "JWT", "Linux", "REST API"],
  },
];

export const skills = {
  web: [
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Redux" },
    { name: "Tanstack Query" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "SASS" },
    { name: "Zustand" },
    { name: "GSAP" },
  ],
  programming: [
    { name: "JavaScript" },
    { name: "Python" },
  ],
  databases: [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
  ],
  tools: [
    { name: "Git" },
    { name: "Linux" },
    { name: "Docker" },
  ]
};

export const projects = [
  {
    id: 1,
    title: "Premium Interior Design & Architecture Showcase",
    category: "Frontend",
    imageUrl: "/images/interior-design.png",
    description: "A premium architecture platform built with Next.js 16 & React 19, featuring immersive animations and a high-performance modular UI.",
    techTags: ["Reactjs", "Nextjs", "Framer Motion", "Tailwind", "Swiper"],
    links: {
      live: "https://interior-design-nine-flax.vercel.app/",
      github: "https://github.com/Sagor8204/Interior-design"
    }
  },
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Sagor8204",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mdsagor-dev/",
    icon: "FaLinkedin"
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/gausaltushar",
  //   icon: "FaTwitter"
  // },
  // {
  //   name: "Medium",
  //   url: "https://medium.com/@gausalmunirtushar",
  //   icon: "FaMedium"
  // }
];