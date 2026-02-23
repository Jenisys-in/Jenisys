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
    <section className="py-20 bg-[#F3F4F6]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[30px] md:text-4xl font-semibold text-[#111827] tracking-tight">
            Our Development Process
          </h2>
          <p className="text-base text-[#6B7280] mt-4 max-w-2xl mx-auto leading-[1.65]">
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
                  <div className="ds-icon-container w-14 h-14">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#111827] text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-center leading-[1.65]">
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
