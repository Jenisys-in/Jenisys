"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const heroSectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking with throttling
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        if (e.currentTarget) {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePosition({
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
          });
        }
        animationFrameId = null;
      });
    };

    const section = heroSectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="hero-section"
      className="section white-section relative overflow-hidden bg-white"
    >
      <div className="absolute w-[500px] h-[500px] bg-[#7526FE]/10 blur-[120px] rounded-full left-[60%] top-[20%] -z-10" />

      <div className="w-screen px-6 sm:px-8 md:px-[70px] lg:px-[100px] xl:px-[120px] 3xl:px-[150px] py-10 md:py-20 flex flex-col lg:flex-row justify-between items-center lg:h-screen gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="text-black w-full lg:flex-1 max-w-full lg:max-w-none">
          <h1 className="font-['Montserrat'] text-black text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] 3xl:text-[60px] font-semibold leading-tight sm:leading-[28px] md:leading-[40px] lg:leading-[44px] xl:leading-[48px] 2xl:leading-[56px] 3xl:leading-[64px] mt-6">
            Revolutionize your business with{" "}
            <span className="text-[#7042F8]">Jenisys</span>
          </h1>

          <p className="font-['Montserrat'] text-black text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl mt-4 leading-relaxed max-w-full sm:max-w-[500px] md:max-w-[620px] lg:max-w-[580px] xl:max-w-[620px]">
            Jenisys: Where Innovation Begins. We craft top-tier software and
            digital solutions, ensuring your business thrives with unmatched
            quality and excellence. From consultation to development, our
            expertise drives your success beyond limits.
          </p>

          <div className="mt-6">
            <Link href="/about" className="inline-block">
              <button className="relative bg-[#361CA9] hover:bg-[#4b2ffb] transition duration-300 text-white w-[130px] h-[36px] sm:w-[160px] sm:h-[44px] md:w-[200px] md:h-[55px] lg:w-[220px] lg:h-[60px] xl:w-[240px] xl:h-[65px] 2xl:w-[260px] 2xl:h-[70px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-semibold rounded-md shadow-lg  overflow-hidden group holographic-button">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4b2ffb] via-[#7042F8] to-[#361CA9] opacity-0 group-hover:opacity-20 transition duration-300" />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content - Video */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <video
            className="rounded-2xl shadow-xl border border-black/10 hover:shadow-purple-400/30 transition-all duration-300 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[580px] xl:max-w-[660px] 2xl:max-w-[750px] 3xl:max-w-[850px] h-[180px] sm:h-[220px] md:h-[320px] lg:h-[380px] xl:h-[430px] 2xl:h-[460px] 3xl:h-[480px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/Home Page Video.mp4" type="video/mp4" />
            <source src="/Home-Page-Video.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = "Hero";

export default Hero;
