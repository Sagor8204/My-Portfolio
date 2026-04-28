"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../../lib/data";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaSass, 
  FaPython, 
  FaGitAlt, 
  FaLinux, 
  FaDocker,
  FaGlobe,
  FaCode,
  FaDatabase,
  FaWrench,
  FaBrain
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiRedux, 
  SiReactquery, 
  SiTailwindcss, 
  SiFramer, 
  SiGreensock, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb 
} from "react-icons/si";

const skillIcons = {
  "HTML5": <FaHtml5 size={40} className="text-[#E34F26]" />,
  "CSS3": <FaCss3Alt size={40} className="text-[#1572B6]" />,
  "JavaScript": <FaJs size={40} className="text-[#F7DF1E]" />,
  "React": <FaReact size={40} className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs size={40} className="text-(--text-main)" />,
  "Redux": <SiRedux size={40} className="text-[#764ABC]" />,
  "Tanstack Query": <SiReactquery size={40} className="text-[#FF4154]" />,
  "Tailwind CSS": <SiTailwindcss size={40} className="text-[#06B6D4]" />,
  "Framer Motion": <SiFramer size={40} className="text-(--text-main)" />,
  "SASS": <FaSass size={40} className="text-[#CC6699]" />,
  "Zustand": <FaBrain size={40} className="text-[#443E38]" />,
  "GSAP": <SiGreensock size={40} className="text-[#88CE02]" />,
  "Python": <FaPython size={40} className="text-[#3776AB]" />,
  "MySQL": <SiMysql size={40} className="text-[#4479A1]" />,
  "PostgreSQL": <SiPostgresql size={40} className="text-[#4169E1]" />,
  "MongoDB": <SiMongodb size={40} className="text-[#47A248]" />,
  "Git": <FaGitAlt size={40} className="text-[#F05032]" />,
  "Linux": <FaLinux size={40} className="text-(--text-main)" />,
  "Docker": <FaDocker size={40} className="text-[#2496ED]" />,
};

const renderCategoryIcon = (id, isActive) => {
  const className = isActive ? "text-white" : "text-(--primary)";
  const icons = {
    web: <FaGlobe size={24} className={className} />,
    programming: <FaCode size={24} className={className} />,
    databases: <FaDatabase size={24} className={className} />,
    tools: <FaWrench size={24} className={className} />,
  };
  return icons[id];
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Web" },
    { id: "programming", label: "Programming" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <section id="skill" className="py-10 md:py-20 px-4">
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-(--primary) mb-4">Skills</h2>
          <p className="text-(--text-muted) max-w-2xl mx-auto">
            A showcase of my technical abilities across different domains
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-md border border-(--border) transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-(--primary) text-white font-medium"
                  : "bg-(--bg-surface) text-(--text-main) hover:bg-[#334155]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {renderCategoryIcon(tab.id, activeTab === tab.id)}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-(--border) flex flex-col items-center text-center hover:border-(--primary-hover) transition-colors duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="mb-4">
                {skillIcons[skill.name] || renderCategoryIcon(activeTab, false)}
              </div>
              <h3 className="text-lg font-bold text-(--text-main) mb-1">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}