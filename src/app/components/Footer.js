"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const thanksInLanguages = [
    { lang: "English", text: "Thanks" },
    { lang: "Bengali", text: "ধন্যবাদ" },
    { lang: "Hindi", text: "धन्यवाद" },
    { lang: "Spanish", text: "Gracias" },
    { lang: "French", text: "Merci" },
    { lang: "German", text: "Danke" },
    { lang: "Japanese", text: "ありがとう" },
    { lang: "Korean", text: "감사합니다" },
    { lang: "Chinese", text: "谢谢" },
    { lang: "Arabic", text: "شكرًا" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Multilingual Thanks Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {thanksInLanguages.map((item, index) => (
            <motion.button
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full text-[#0f172a] font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.text}
            </motion.button>
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-[#94a3b8]">
          <p>&copy; {currentYear} Gaus Al Munir Tushar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}