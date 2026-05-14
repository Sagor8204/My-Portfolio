// Mock data for the portfolio

export const profile = {
  name: "Md Sagor",
  role: "Software Engineer",
  bio: "Results-driven Software Engineer with 1.5+ years of experience in building scalable web applications. Specialized in React and Next.js for high-performance frontends and Python/Django for robust REST APIs. Proven expertise in bridging design and development to deliver seamless, user-centric digital solutions.",
};

export const experience = [
  {
    id: 1,
    company: "Texon Limited",
    role: "Associate Software Engineer (Web)",
    dateRange: "Oct 2024 - Apr 2026",
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
  {
    id: 2,
    title: "Multi Vendor E-Commerce Platform",
    category: "Full Stack",
    imageUrl: "/images/multi-vendor.png",
    description: "A comprehensive multi-vendor e-commerce platform built with Next.js 16 and Django, featuring a modular architecture, robust API integrations, and a high-performance user interface.",
    techTags: ["React", "Next.js", "Django", "PostgreSQL", "Zustand", "JWT", "Tanstack Query", "Tailwind"],
    links: {
      live: "https://market.mdsagor.site",
      github: "https://github.com/Sagor8204/Multi-vendor-frontend"
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