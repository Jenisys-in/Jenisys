"use client";

import React from "react";
import { motion } from "framer-motion";

const Values = ({ values, hoveredValue, setUIStates }) => {
  return (
    <div className="bg-[#F3F4F6] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[30px] font-semibold text-[#111827] mb-4 font-['Montserrat']">
            Our Values
          </h2>
          <p className="text-lg md:text-xl text-[#374151] font-['Montserrat']">
            Innovative Tech Solutions for{" "}
            <span className="text-[#4F46E5] font-semibold">
              Transformative Growth
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, amount: 0.5 }}
              className="ds-card group relative p-6 lg:p-8 cursor-pointer"
              onMouseEnter={() =>
                setUIStates((prev) => ({ ...prev, hoveredValue: value.id }))
              }
              onMouseLeave={() =>
                setUIStates((prev) => ({ ...prev, hoveredValue: null }))
              }
            >
              <div className="ds-icon-container w-12 h-12 mb-6 transition-transform duration-300 group-hover:scale-105">
                <div className="text-[#4F46E5]">
                  {value.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-4 font-['Montserrat']">
                {value.title}
              </h3>

              <p className="text-sm md:text-base text-[#374151] leading-[1.65] font-['Montserrat']">
                {value.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-[#4F46E5] rounded-b-2xl transition-all duration-500 ease-out ${
                  hoveredValue === value.id ? "w-full" : "w-0"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

Values.displayName = "Values";

export default Values;
