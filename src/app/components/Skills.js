"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../../lib/data";
import { FaGlobe, FaCode, FaDatabase, FaWrench } from "react-icons/fa";

const skillIcons = {
  web: <FaGlobe size={24} className="text-[#f97316]" />,
  programming: <FaCode size={24} className="text-[#f97316]" />,
  databases: <FaDatabase size={24} className="text-[#f97316]" />,
  tools: <FaWrench size={24} className="text-[#f97316]" />,
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
    <section id="skill" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#f97316] mb-4">Skills</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A showcase of my technical abilities across different domains
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-[#0f172a] font-medium"
                  : "bg-[#1e293b] text-[#f8fafc] hover:bg-[#334155]"
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
              className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-slate-700 flex flex-col items-center text-center hover:border-[#f97316] transition-colors duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="mb-4">
                {skillIcons[activeTab]}
              </div>
              <h3 className="text-lg font-bold text-[#f8fafc] mb-1">{skill.name}</h3>
              <p className="text-sm text-[#94a3b8]">{skill.level}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}