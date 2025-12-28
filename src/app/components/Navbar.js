"use client";

import Link from "next/link";
import Logo from "./Logo";
import { FaBriefcase, FaCode, FaFolder, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const navItems = [
    { name: 'Experience', icon: <FaBriefcase className="-mt-0.5" size={14} />, href: '#experience' },
    { name: 'Skill', icon: <FaCode className="-mt-0.5" size={14} />, href: '#skill' },
    { name: 'Portfolio', icon: <FaFolder className="-mt-0.5" size={14} />, href: '#portfolio' },
    { name: 'Contact', icon: <FaEnvelope className="-mt-0.5" size={14} />, href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-full py-3 px-6 shadow-lg border border-slate-700 max-w-lg w-full mx-4">
      <div className="flex items-center justify-between">
        {/* Hexagon logo on the left */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Navigation links on the right */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-1.5 text-[#94a3b8] hover:text-[#f8fafc] transition-colors duration-300 text-sm font-medium"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}