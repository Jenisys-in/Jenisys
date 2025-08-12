"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Code, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";

const processSteps = [
  {
    icon: <Eye className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "1. Discovery & Strategy",
    description:
      "We start by understanding your vision, goals, and target audience. Our team collaborates with you to define the project scope, create a roadmap, and develop a strategy for success.",
  },
  {
    icon: <Pencil className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "2. UI/UX Design",
    description:
      "Our designers create intuitive, user-friendly interfaces that provide an exceptional user experience. We build wireframes, mockups, and prototypes to visualize the final product.",
  },
  {
    icon: <Code className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "3. Development",
    description:
      "Our expert developers bring the designs to life using cutting-edge technologies. We follow agile methodologies to ensure a flexible and efficient development process.",
  },
  {
    icon: <Rocket className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "4. Testing & Deployment",
    description:
      "We conduct rigorous testing to ensure your application is bug-free, secure, and performs flawlessly. After successful testing, we deploy the solution to a scalable cloud infrastructure.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "5. Quality Assurance",
    description:
      "Our QA team performs comprehensive testing to ensure the highest standards of quality. We check for functionality, performance, security, and usability across all devices.",
  },
  {
    icon: <LifeBuoy className="w-10 h-10 mb-4 text-[#361CA9]" />,
    title: "6. Maintenance & Support",
    description:
      "We provide ongoing maintenance and support to ensure your application remains up-to-date, secure, and optimized for performance. Our team is always here to help you.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We follow a structured and transparent process to ensure the
            successful delivery of your project. Here’s how we bring your ideas
            to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
