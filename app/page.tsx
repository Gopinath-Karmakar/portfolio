"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const projects = [
    {
      title: "Secure Image Steganography",
      desc: "Hide encrypted data inside images using AES encryption.",
      tech: "Python, AES, Web",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      desc: "Real-time weather updates using OpenWeatherMap API.",
      tech: "React, Node.js",
      github: "https://github.com/gopinath-karmakar/weather-app",
      demo: "https://gopinath-karmakar.github.io/weather-app/",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Gopinath</h1>
        <div className="flex gap-6 items-center">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          {/* Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-1 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Gopinath Karmakar
        </motion.h1>
        <p className="text-xl mt-3">Software Developer | M-Tech CSE</p>
        <p className="mt-4 text-gray-400 dark:text-gray-400">
          I build secure and scalable web applications.
        </p>

        <div className="mt-6 flex justify-center gap-4">
      <a
  href="mailto:gopinathkarmakarmit@gmail.com?subject=Hiring Opportunity&body=Hello Gopinath, I would like to discuss a job opportunity with you."
  className="bg-blue-500 px-4 py-2 rounded"
>
  Hire Me
</a>
          <a href="/resume.pdf" className="border px-4 py-2 rounded" download>
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-5 rounded-2xl shadow ${
                darkMode ? "bg-gray-900" : "bg-gray-200"
              }`}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-500">{p.desc}</p>
              <p className="mt-2 text-sm">Tech: {p.tech}</p>
              <div className="mt-3 flex gap-3">
                <a href={p.github} className="text-blue-500">
                  GitHub
                </a>
                <a href={p.demo} className="text-green-500">
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "C",
            "C++",
            "Python",
            "JavaScript",
            "React",
            "HTML",
            "CSS",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 rounded-full text-sm ${
                darkMode ? "bg-gray-800" : "bg-gray-300"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: gopinathkarmakarmit@gmail.com</p>
        <p>GitHub: github.com/Gopinath-Karmakar</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Gopinath Karmakar
      </footer>
    </div>
  );
}