"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../../lib/data";
import Image from "next/image";
import LinkButton from "./common/LinkButton";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories for filter buttons
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-(--primary) mb-4">Portfolio</h2>
          <p className="text-(--text-muted) max-w-2xl mx-auto">
            A showcase of my projects and the technologies I've worked with
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-md border border-(--border) transition-all duration-300 cursor-pointer ${
                activeFilter === category
                  ? "bg-linear-to-r from-(--primary) to-(--gradient) text-white font-medium"
                  : "bg-(--bg-surface) text-(--text-main) hover:bg-[#334155]"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1e293b] flex flex-col justify-between bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden border border-slate-700 hover:border-[#f97316] transition-colors duration-300"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="px-6">
                  <h3 className="text-xl font-bold text-[#f8fafc] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#0f172a] text-[#f97316] text-[10px] rounded-full border border-[#f97316]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                {/* <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-[#0f172a] text-[#f97316] text-[10px] rounded-full border border-[#f97316]">
                    {project.category}
                  </span>
                </div> */}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <LinkButton
                    text="live"
                    href={project.links.live}
                    styles="px-4 py-2 bg-linear-to-r w-1/2 text-center from-[#f97316] to-[#ea580c] rounded-full text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <LinkButton
                    text="Code"
                    href={project.links.github}
                    styles="px-4 py-2 border w-1/2 text-center border-[#f97316] rounded-full text-white text-sm font-medium hover:bg-[#f97316] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}