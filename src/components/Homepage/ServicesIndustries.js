"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";

const ServicesIndustries = ({
  services,
  industries,
  activeTab,
  setUIStates,
  hoveredService,
  expandedService,
  AnimatedIcon,
}) => {
  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-80 sm:h-96">
        <Image
          src="/img/Services.png"
          alt="Services Background"
          fill
          priority
          style={{
            filter: "brightness(1.2) contrast(0.8)",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0" />
      </div>

      <div
        className={`absolute top-80 sm:top-96 left-0 w-full bottom-0 transition-all duration-700 ${
          activeTab === "industries"
            ? "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
            : "bg-gradient-to-br from-white via-gray-50 to-slate-50"
        }`}
      />

      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-['Montserrat']">
            Explore the services we offer and the industries we empower with
            cutting-edge technology solutions.
          </p>
        </div>

        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex rounded-xl bg-white border border-gray-200 p-1 shadow-lg">
            <button
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === "services"
                  ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() =>
                setUIStates((prev) => ({ ...prev, activeTab: "services" }))
              }
            >
              Services Offered
            </button>
            <button
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === "industries"
                  ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
              onClick={() =>
                setUIStates((prev) => ({ ...prev, activeTab: "industries" }))
              }
            >
              Industries We Serve
            </button>
          </div>
        </div>

        <div className="relative min-h-96">
          {/* Services Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeTab === "services"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[200px] flex flex-col"
                  onMouseEnter={() =>
                    setUIStates((prev) => ({
                      ...prev,
                      hoveredService: index,
                    }))
                  }
                  onMouseLeave={() =>
                    setUIStates((prev) => ({ ...prev, hoveredService: null }))
                  }
                  onClick={() => {
                    setUIStates((prev) => ({
                      ...prev,
                      expandedService:
                        prev.expandedService === index ? null : index,
                    }));
                  }}
                >
                  <div className="text-center flex-grow">
                    <AnimatedIcon
                      Icon={service.icon}
                      isHovered={hoveredService === index}
                    />

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-['Montserrat'] flex items-center justify-center gap-2">
                      {service.title}
                      <ChevronDown
                        size={20}
                        className={`transition-all duration-300 ${
                          expandedService === index
                            ? "rotate-180 text-gray-900"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setUIStates((prev) => ({
                            ...prev,
                            expandedService:
                              prev.expandedService === index ? null : index,
                          }));
                        }}
                      />
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedService === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-2 text-left border-t border-gray-100 mt-4">
                      <p className="text-gray-600 text-sm sm:text-base font-['Montserrat'] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="text-center">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg text-sm sm:text-base"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          Learn More <span className="sr-only">about {service.title}</span>
                          <ExternalLink size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Content */}
          <div
            className={`transition-all duration-700 ease-in-out ${
              activeTab === "industries"
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl sm:text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-['Montserrat'] text-center">
                    {industry.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base font-['Montserrat'] text-center leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesIndustries.displayName = "ServicesIndustries";

export default ServicesIndustries;
