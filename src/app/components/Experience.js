"use client";

import { motion } from "framer-motion";
import { experience } from "../../../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#f97316] mb-4">Experience</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            A timeline of my professional journey and the experiences that have shaped my career
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-6 border border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  {/* Placeholder for company logo */}
                  <div className="w-12 h-12 rounded-full bg-[#f97316] flex items-center justify-center">
                    <span className="text-[#0f172a] font-bold text-lg">
                      {item.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f8fafc]">{item.role}</h3>
                    <p className="text-[#f97316] font-medium">{item.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-[#f97316] font-medium">{item.dateRange}</p>
                  <p className="text-[#94a3b8]">{item.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#f97316] mr-2">•</span>
                    <span className="text-[#f8fafc]">{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#0f172a] text-[#f97316] text-sm rounded-full border border-[#f97316]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}