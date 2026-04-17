"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../../lib/data";
import { FaGlobe, FaCode, FaDatabase, FaWrench } from "react-icons/fa";

const skillIcons = {
  web: <FaGlobe size={24} className="text-(--primary)" />,
  programming: <FaCode size={24} className="text-(--primary)" />,
  databases: <FaDatabase size={24} className="text-(--primary)" />,
  tools: <FaWrench size={24} className="text-(--primary)" />,
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
              className={`px-6 py-3 rounded-md border border-(--border) transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-(--primary) text-white font-medium"
                  : "bg-(--bg-surface) text-(--text-main) hover:bg-[#334155]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
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
                {skillIcons[activeTab]}
              </div>
              <h3 className="text-lg font-bold text-(--text-main) mb-1">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}