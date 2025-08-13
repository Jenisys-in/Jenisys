"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Code, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";

const processSteps = [
  {
    icon: Eye,
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your vision, goals, and audience. Together, we define the roadmap and strategy to ensure success.",
  },
  {
    icon: Pencil,
    title: "UI/UX Design",
    description:
      "We design intuitive, user-focused experiences with wireframes and prototypes to align with your vision.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our team builds robust, scalable, and efficient solutions using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Testing & Deployment",
    description:
      "We conduct rigorous testing for performance and security, followed by a smooth deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product undergoes strict quality checks to meet the highest industry standards.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Support",
    description:
      "We provide ongoing support, updates, and improvements to keep your product performing.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            A transparent, step-by-step approach to building impactful digital
            solutions.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full border border-gray-200 bg-gradient-to-b from-gray-50 to-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-800 text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-center leading-relaxed">
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
