"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const VisionMission = ({
  isVisible,
  hoveredItem,
  setUIStates,
  missionItems,
}) => {
  return (
    <div className="section white-section">
      <div className="scroll-on-appear w-screen min-h-[650px] sm:min-h-[700px] md:min-h-[800px] lg:h-screen bg-black px-5 sm:px-8 md:px-12 lg:pl-[60px] lg:px-0 flex flex-col-reverse lg:flex-row text-white">
        <div className="flex flex-col-reverse lg:flex-row w-full">
          {/* Vision Section */}
          <div
            className={`flex flex-col lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative group">
              <Image
                src="/img/image 3.png"
                width={500}
                height={500}
                alt="Our Vision"
                className="pt-[20px] sm:pt-[30px] md:pt-[40px] w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-auto mx-auto lg:mx-0 transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-[20px] sm:mt-[30px] md:mt-[40px]"></div>
            </div>

            <h2 className="font-['Montserrat'] font-extrabold text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] pt-[15px] sm:pt-[20px] md:pt-[25px] lg:pt-[30px] relative group text-center lg:text-left">
              Our Vision
              <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-0 h-[2px] bg-[#7526FE] transition-all duration-500 group-hover:w-full"></div>
            </h2>

            <p className="font-['Montserrat'] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] 3xl:text-[25px] pt-[10px] sm:pt-[15px] md:pt-[20px] lg:pt-0 3xl:mt-[20px] leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
              Our vision is to be the leading transformative technology
              solutions provider, empowering businesses with innovative digital
              solutions and driving transformative growth.
            </p>

            <div className="relative group flex justify-center lg:justify-start">
              <button className="w-[120px] h-[35px] sm:w-[150px] sm:h-[40px] md:w-[180px] md:h-[50px] lg:w-[225px] lg:h-[60px] bg-[#7526FE] font-['Montserrat'] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-semibold my-4 sm:my-6 md:my-8 lg:my-2 rounded-[8px] md:rounded-[10px] lg:mb-[20px] 3xl:mt-[60px] relative overflow-hidden transition-all duration-300 hover:bg-[#8a3bff] holographic-button">
                <span className="relative z-10 flex items-center justify-center h-full">
                  Learn More
                  <ChevronRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Mission Section */}
          <div
            className={`flex flex-col lg:w-1/2 font-['Montserrat'] pt-[20px] sm:pt-[25px] md:pt-[30px] lg:pt-[30px] order-first lg:order-none transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-extrabold mb-[15px] sm:mb-[20px] md:mb-[25px] lg:mb-0 relative group text-center lg:text-left">
              Our Mission
              <div className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-0 h-[2px] bg-[#7526FE] transition-all duration-500 group-hover:w-full"></div>
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-0">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row items-center group cursor-pointer transition-all duration-300 hover:translate-x-2 ${
                    hoveredItem === index ? "bg-white/5" : ""
                  } rounded-lg p-2 -m-2`}
                  onMouseEnter={() =>
                    setUIStates((prev) => ({ ...prev, hoveredItem: index }))
                  }
                  onMouseLeave={() =>
                    setUIStates((prev) => ({ ...prev, hoveredItem: null }))
                  }
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isVisible
                      ? "translateX(0)"
                      : "translateX(-20px)",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div
                    className={`bg-[#A3A3A3] rounded-[6px] sm:rounded-[8px] md:rounded-[10px] lg:rounded-[11px] w-[45px] h-[40px] sm:w-[55px] sm:h-[50px] md:w-[70px] md:h-[65px] lg:w-[89px] lg:h-[89px] mb-[8px] sm:mb-[10px] md:mb-[12px] lg:mb-0 mt-[15px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] flex justify-center items-center transition-all duration-300 group-hover:bg-[#b8b8b8] group-hover:scale-105 ${
                      hoveredItem === index ? "shadow-lg shadow-white/10" : ""
                    } flex-shrink-0`}
                  >
                    <Image
                      src={item.image}
                      width={52}
                      height={52}
                      alt={item.alt}
                      className="w-[24px] h-[22px] sm:w-[28px] sm:h-[26px] md:w-[40px] md:h-[38px] lg:w-[52px] lg:h-[52px] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <p className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[20px] 3xl:text-[25px] 3xl:pt-[15px] ml-3 sm:ml-4 md:ml-4 lg:ml-4 flex-1 transition-all duration-300 group-hover:text-white/90 leading-relaxed max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[524px]">
                    {item.text}
                  </p>

                  <div
                    className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredItem === index ? "opacity-100" : ""
                    } flex-shrink-0`}
                  >
                    <div className="w-1 h-6 sm:h-7 md:h-8 lg:h-8 bg-[#7526FE] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VisionMission.displayName = "VisionMission";

export default VisionMission;
