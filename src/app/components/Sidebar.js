"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { socials } from "../../../lib/data";

const socialIconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaMedium: FaMedium,
};

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-50 h-screen w-15 flex-col items-center py-8 hidden md:flex">
      {/* Vertical line */}
      <div className="h-full w-px bg-[#94a3b8] mb-4"></div>
      
      {/* Social Icons */}
      <div className="flex flex-col space-y-6 mt-4">
        {socials.map((social) => {
          const IconComponent = socialIconMap[social.icon];
          return (
            <Link 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#94a3b8] hover:text-[#f97316] transition-colors duration-300"
            >
              {IconComponent ? <IconComponent size={20} /> : null}
            </Link>
          );
        })}
      </div>
      
      {/* Rotated "FOLLOW ME" text */}
      <div className="mt-auto mb-4">
        <div 
          className="text-[#94a3b8] text-sm font-light tracking-wider origin-center transform -rotate-90"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          FOLLOW ME
        </div>
      </div>
    </aside>
  );
}