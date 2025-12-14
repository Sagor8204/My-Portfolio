"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#f97316] mb-4">Contact</h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Get in touch with me for collaborations or just to say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-[#f8fafc] mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#f8fafc] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[#f8fafc] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#f8fafc] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-lg font-bold text-[#0f172a] hover:opacity-90 transition-opacity"
              >
                Message Me
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-[#f8fafc] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#f97316] font-medium mb-2">Email</h4>
                  <p className="text-[#f8fafc]">gausalmunirtushar@example.com</p>
                </div>
                
                <div>
                  <h4 className="text-[#f97316] font-medium mb-2">Book a Meeting</h4>
                  <a 
                    href="https://calendar.app.google" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#f97316] hover:underline"
                  >
                    Schedule a meeting
                  </a>
                </div>
                
                <div>
                  <h4 className="text-[#f97316] font-medium mb-2">Location</h4>
                  <p className="text-[#f8fafc]">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1e293b] bg-opacity-50 backdrop-blur-lg rounded-xl p-8 border border-slate-700">
              <h4 className="text-[#f97316] font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/gausalmunirtushar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f8fafc] hover:text-[#f97316] transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/gausalmunirtushar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f8fafc] hover:text-[#f97316] transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/gausalmunirtushar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#f8fafc] hover:text-[#f97316] transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}