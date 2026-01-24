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
      "Architected and developed scalable RESTful APIs using Python and Django REST Framework (DRF) following clean architecture and best practices.",
      "Implemented secure authentication and authorization using JWT, role-based access control (RBAC), and Django permission classes.",
      "Designed and optimized PostgreSQL database schemas, complex joins, indexing strategies, and query optimizations for high-performance data access.",
      "Built multi-tenant backend systems with tenant-aware data isolation and access control.",
      "Integrated third-party and social media APIs including Facebook, Twitter (X), LinkedIn, and Google APIs for authentication, data synchronization, and user activity management.",
      "Implemented OAuth 2.0 authentication flows, token lifecycle management, and handled webhooks and API rate limiting for reliable external service integration.",
      "Developed seamless API integrations for Next.js frontend applications, supporting SSR and client-side rendering to improve performance and SEO.",
      "Collaborated closely with frontend teams to design clean, consistent, and scalable API contracts.",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=E-Commerce+Platform",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=Task+Management",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=Weather+Dashboard",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=Reservation+System",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=Fitness+Tracker",
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
    imageUrl: "https://via.placeholder.com/600x400/1e293b/f8fafc?text=Inventory+Mgmt",
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