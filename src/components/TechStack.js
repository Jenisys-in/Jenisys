"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiTailwindcss,
  SiGraphql,
  SiRedis,
  SiFigma,
  SiJest,
  SiExpress,
} from "react-icons/si";

// Categorized technologies
const techCategories = {
  Frontend: [
    { name: "React", icon: <FaReact />, color: "#61DAFB", level: "Expert" },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "#000000",
      level: "Expert",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      level: "Expert",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "#3178C6",
      level: "Expert",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
      level: "Expert",
    },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: "Expert" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: "Expert" },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: "Expert" },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "#000000",
      level: "Expert",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "#3776AB",
      level: "Proficient",
    },
    {
      name: "GraphQL",
      icon: <SiGraphql />,
      color: "#E10098",
      level: "Proficient",
    },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: "Expert" },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#336791",
      level: "Proficient",
    },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D", level: "Proficient" },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker />, color: "#2496ED", level: "Expert" },
    {
      name: "Kubernetes",
      icon: <SiKubernetes />,
      color: "#326CE5",
      level: "Proficient",
    },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: "Expert" },
  ],
  Cloud: [{ name: "AWS", icon: <FaAws />, color: "#FF9900", level: "Expert" }],
  Tools: [
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E", level: "Expert" },
    { name: "Jest", icon: <SiJest />, color: "#C21325", level: "Proficient" },
  ],
};

const TechStack = () => {
  const categories = Object.keys(techCategories);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We leverage the best technologies in the industry to build scalable,
            high-performance, and secure solutions for our clients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Icons grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techCategories[activeCategory].map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              title={`Proficiency: ${tech.level}`}
            >
              <div style={{ color: tech.color }} className="text-5xl">
                {tech.icon}
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-700">
                {tech.name}
              </p>
              <span className="text-sm text-gray-500">{tech.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
