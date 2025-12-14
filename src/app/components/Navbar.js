"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-full py-3 px-6 shadow-lg border border-slate-700 max-w-md w-full mx-4">
      <div className="flex items-center justify-between">
        {/* Hexagon logo on the left */}
        <Logo />

        {/* Navigation links on the right */}
        <div className="flex space-x-6">
          {['Experience', 'Skill', 'Portfolio', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}