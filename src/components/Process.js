"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Code, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";

const processSteps = [
  {
    icon: Eye,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your vision, goals, and target audience. Together, we define the scope, create a roadmap, and craft a winning strategy.",
  },
  {
    icon: Pencil,
    title: "UI/UX Design",
    description:
      "Our designers create beautiful, user-friendly interfaces. We build wireframes, mockups, and prototypes to visualize the perfect user journey.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our expert developers turn designs into reality with cutting-edge technologies, following agile practices for flexibility and speed.",
  },
  {
    icon: Rocket,
    title: "Testing & Deployment",
    description:
      "We test rigorously for performance, security, and usability before deploying to a scalable cloud infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Our QA team ensures your product meets the highest quality standards across devices and platforms.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "We keep your solution secure, up-to-date, and optimized — with ongoing support from our dedicated team.",
  },
];

const Process = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>
        <div className="absolute w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 bottom-0 right-0"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800"
          >
            Our Development Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            A proven, transparent, and client-focused approach — turning your
            ideas into impactful digital solutions.
          </motion.p>
        </div>

        {/* Process grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group p-8 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white w-12 h-12 flex items-center justify-center font-bold rounded-full shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-purple-700" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
