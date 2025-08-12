"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact className="w-12 h-12" />, color: "#61DAFB" },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-12 h-12" />,
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-12 h-12" />,
    color: "#339933",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-12 h-12" />,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-12 h-12" />,
    color: "#F7DF1E",
  },
  {
    name: "Python",
    icon: <FaPython className="w-12 h-12" />,
    color: "#3776AB",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12" />,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-12 h-12" />,
    color: "#336791",
  },
  { name: "AWS", icon: <FaAws className="w-12 h-12" />, color: "#FF9900" },
  {
    name: "Docker",
    icon: <FaDocker className="w-12 h-12" />,
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="w-12 h-12" />,
    color: "#326CE5",
  },
  { name: "Git", icon: <FaGitAlt className="w-12 h-12" />, color: "#F05032" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We use a modern, robust, and scalable technology stack to build
            high-quality solutions for our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div style={{ color: tech.color }}>{tech.icon}</div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
