"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Rocket } from "lucide-react";

const Values = ({ values, hoveredValue, setUIStates }) => {
  return (
    <div className="bg-white w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-blue-600" />
            <Rocket className="w-8 h-8 text-purple-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">
            Our Values
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-800 font-['Montserrat']">
            Innovative Tech Solutions for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
              whileHover={{ y: -12, scale: 1.02 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg cursor-pointer border border-gray-100`}
              onMouseEnter={() =>
                setUIStates((prev) => ({ ...prev, hoveredValue: value.id }))
              }
              onMouseLeave={() =>
                setUIStates((prev) => ({ ...prev, hoveredValue: null }))
              }
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-700 ease-out`}
              ></div>

              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} text-white mb-6 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3`}
              >
                <div className="transition-all duration-700 ease-out">
                  {value.icon}
                </div>
              </div>

              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-4 font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-800">
                {value.title}
              </h3>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-['Montserrat'] transition-all duration-700 ease-out group-hover:text-gray-700">
                {value.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${
                  value.color
                } rounded-b-2xl transition-all duration-700 ease-out ${
                  hoveredValue === value.id ? "w-full" : "w-0"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 md:mt-16 gap-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

Values.displayName = "Values";

export default Values;
