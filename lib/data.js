// Mock data for the portfolio

export const profile = {
  name: "Md Sagor",
  role: "Full Stack Developer",
  bio: "Passionate about creating innovative solutions and building robust systems. With expertise in full-stack development, I bridge the gap between design and functionality to deliver exceptional user experiences.",
};

export const experience = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    dateRange: "2022 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed and maintained scalable web applications using modern JavaScript frameworks.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Optimized application performance, resulting in 40% faster load times."
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    role: "Frontend Developer",
    dateRange: "2020 - 2022",
    location: "Chittagong, Bangladesh",
    description: [
      "Built responsive user interfaces using React and TypeScript.",
      "Implemented RESTful APIs and integrated third-party services.",
      "Participated in code reviews and mentored junior developers."
    ],
    techStack: ["React", "Redux", "TypeScript", "SCSS"]
  },
  {
    id: 3,
    company: "StartUp Ventures",
    role: "Junior Developer",
    dateRange: "2019 - 2020",
    location: "Dhaka, Bangladesh",
    description: [
      "Developed web applications using JavaScript, HTML, and CSS.",
      "Assisted in database design and optimization tasks.",
      "Participated in Agile development processes and sprints."
    ],
    techStack: ["JavaScript", "PHP", "MySQL", "Bootstrap"]
  }
];

export const skills = {
  web: [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Vue.js", level: "Intermediate" },
    { name: "Next.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "SASS", level: "Intermediate" }
  ],
  programming: [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Go", level: "Beginner" },
    { name: "Rust", level: "Beginner" }
  ],
  databases: [
    { name: "MySQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Redis", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" }
  ],
  tools: [
    { name: "Git", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "Jenkins", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "Azure", level: "Beginner" },
    { name: "Webpack", level: "Advanced" },
    { name: "Jira", level: "Intermediate" }
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