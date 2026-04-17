// Mock data for the portfolio

export const profile = {
  name: "Md Sagor",
  role: "Full Stack Developer",
  bio: "Passionate about creating innovative solutions and building robust systems. With expertise in full-stack development, I bridge the gap between design and functionality to deliver exceptional user experiences.",
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
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Redux", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "SASS", level: "Intermediate" }
  ],
  programming: [
    { name: "JavaScript", level: "Advanced" },
    { name: "Python", level: "Advanced" },
  ],
  databases: [
    { name: "MySQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
  ],
  tools: [
    { name: "Git", level: "Expert" },
    { name: "Linux", level: "Intermediate" },
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "FullStack",
    imageUrl: "",
    description: "A full-featured e-commerce platform with payment integration, product search, and admin dashboard.",
    techTags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web App",
    imageUrl: "",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    techTags: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    category: "Frontend",
    imageUrl: "",
    description: "Real-time weather forecast application with location-based services and predictive analytics.",
    techTags: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 4,
    title: "Restaurant Reservation System",
    category: "Backend",
    imageUrl: "",
    description: "Backend system for restaurant table reservations with calendar integration and notification system.",
    techTags: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 5,
    title: "Fitness Tracker",
    category: "Web App",
    imageUrl: "",
    description: "Comprehensive fitness tracking application with workout plans and nutrition monitoring.",
    techTags: ["React Native", "Redux", "GraphQL", "Apollo"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  },
  {
    id: 6,
    title: "Inventory Management",
    category: "FullStack",
    imageUrl: "",
    description: "Cloud-based inventory management solution for small to medium businesses.",
    techTags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "https://example.com",
      github: "https://github.com/example"
    }
  }
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/gausalmunirtushar",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/gausalmunirtushar",
    icon: "FaLinkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/gausaltushar",
    icon: "FaTwitter"
  },
  {
    name: "Medium",
    url: "https://medium.com/@gausalmunirtushar",
    icon: "FaMedium"
  }
];