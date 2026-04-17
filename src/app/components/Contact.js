"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./common/Button";

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
      <div className="mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-(--primary) mb-4">Contact</h2>
          <p className="text-(--text-muted) max-w-2xl mx-auto">
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
            className="bg-(--bg-surface) bg-opacity-50 backdrop-blur-lg rounded-md p-8 border border-(--border)"
          >
            <h3 className="text-2xl font-bold text-(--text-main) mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-(--text-main) mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-(--bg-main) border border-(--border) rounded-lg text-(--text-main) focus:outline-none focus:ring-2 focus:ring-(--primary)"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-(--text-main) mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-(--bg-main) border border-(--border) rounded-lg text-(--text-main) focus:outline-none focus:ring-2 focus:ring-(--primary)"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-(--text-main) mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-(--bg-main) border border-(--border) rounded-lg text-(--text-main) focus:outline-none focus:ring-2 focus:ring-(--primary)"
                  placeholder="Your message"
                ></textarea>
              </div>

              <Button
                text="Message Me"
                styles="w-full py-3 bg-(--primary) rounded-lg font-bold text-white hover:bg-(--primary-hover) transition-all duration-300"
                type="submit"
              />
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
            <div className="bg-(--bg-surface) bg-opacity-50 backdrop-blur-lg rounded-md p-8 border border-(--border)">
              <h3 className="text-2xl font-bold  mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-(--primary) font-medium mb-2">Email</h4>
                  <p className="">sagormiah8204@gmail.com</p>
                </div>

                <div>
                  <h4 className="text-(--primary) font-medium mb-2">
                    Book a Meeting
                  </h4>
                  <a
                    href="https://calendar.app.google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--primary) hover:underline"
                  >
                    Schedule a meeting
                  </a>
                </div>

                <div>
                  <h4 className="text-(--primary) font-medium mb-2">Location</h4>
                  <p className="">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-(--bg-surface) bg-opacity-50 backdrop-blur-lg rounded-md p-8 border border-(--border)">
              <h4 className="text-(--primary) font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Sagor8204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-(--primary) transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mdsagor-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-(--primary) transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}