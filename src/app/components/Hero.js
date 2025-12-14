"use client";

import { motion } from "framer-motion";
import { profile } from "../../../lib/data";
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaJava, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const floatingIcons = [
  { icon: <FaReact size={30} className="text-[#f97316]" />, delay: 0 },
  { icon: <SiTypescript size={30} className="text-[#f97316]" />, delay: 0.4 },
  { icon: <FaNodeJs size={30} className="text-[#f97316]" />, delay: 0.8 },
  { icon: <FaAws size={30} className="text-[#f97316]" />, delay: 1.2 },
  { icon: <SiNextdotjs size={30} className="text-[#f97316]" />, delay: 1.6 },
  { icon: <FaDatabase size={30} className="text-[#f97316]" />, delay: 2.0 },
  { icon: <FaJava size={30} className="text-[#f97316]" />, delay: 2.4 },
  { icon: <FaFigma size={30} className="text-[#f97316]" />, delay: 2.8 },
];

export default function Hero() {
  return (
    <section id="hero" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="text-[#f97316] text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello! I am
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f8fafc] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f97316] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {profile.role}
            </motion.h2>

            <motion.p
              className="text-[#94a3b8] text-lg mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {profile.bio}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="px-8 py-3 bg-linear-to-r from-[#f97316] to-[#ea580c] rounded-full font-medium text-[#0f172a] hover:opacity-90 transition-opacity">
                Resume / CV
              </button>
              <button className="px-8 py-3 border border-[#f97316] rounded-full font-medium text-[#f97316] hover:bg-[#f97316] hover:text-[#0f172a] transition-colors">
                Hire Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Floating Icons */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-b from-[#f97316] to-[#ea580c] flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-2 bg-[#0f172a] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/avatar.png"
                  alt="Gaus Al Munir Tushar"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </motion.div>

            {/* Floating Technology Icons */}
            {floatingIcons.map((item, index) => {
              // Calculate position around the circle
              const angle =
                index * (360 / floatingIcons.length) * (Math.PI / 180);
              const radius = 150; // Distance from center

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    x: x,
                    y: y,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [y, y - 20, y],
                  }}
                  transition={{
                    duration: 4,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}