"use client";

import React, { useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import { Star, User } from "lucide-react";

const TestimonialCard = ({ testimonial, index, isVisible }) => {
  const cardStyle = useMemo(
    () => ({
      transitionDelay: `${index * 150}ms`,
      backfaceVisibility: "hidden",
    }),
    [index]
  );

  const starElements = useMemo(
    () =>
      [...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
      )),
    []
  );

  return (
    <div
      className={`
        bg-[#111827]
        border border-[#374151]
        rounded-2xl p-6 md:p-8
        h-full flex flex-col justify-between
        transform transition-all duration-500 ease-out
        hover:border-[#4F46E5]/30
        will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={cardStyle}
    >
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#4F46E5] p-3 rounded-xl">
            <User className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-base md:text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-xs md:text-sm text-[#6B7280] font-medium">
              {testimonial.title}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-2 -top-2 text-4xl text-[#4F46E5]/20 font-serif">
            "
          </div>
          <p className="text-sm md:text-base 3xl:text-lg leading-[1.65] mb-4 text-[#E5E7EB] relative z-10 pl-4">
            {testimonial.quote}
          </p>
        </div>
      </div>
      <div className="flex gap-1 text-yellow-400 mt-4">{starElements}</div>
    </div>
  );
};

TestimonialCard.displayName = "TestimonialCard";

const Testimonials = ({
  testimonials,
  slideStates,
  goToSlide,
  isVisible,
  maxSlides,
  visibleTestimonials,
}) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => goToSlide(slideStates.currentSlide + 1),
    onSwipedRight: () => goToSlide(slideStates.currentSlide - 1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section
      id="testimonials-section"
      className="bg-[#0F172A] w-full px-4 md:px-16 py-20 text-white font-['Montserrat'] overflow-hidden"
    >
      <div className="text-center mb-16">
        <h2 className="text-sm md:text-[22px] font-medium uppercase tracking-widest mb-4 text-[#E5E7EB]">
          Testimonials
        </h2>
        <p className="text-base md:text-xl 3xl:text-2xl font-semibold mt-4 max-w-4xl mx-auto text-[#E5E7EB] leading-[1.65]">
          Real stories from our clients showcasing our dedication to impactful,
          high-performance solutions.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          {...swipeHandlers}
          className="grid gap-6 md:gap-8 transition-all duration-700 ease-out cursor-grab"
          style={{
            gridTemplateColumns: `repeat(${slideStates.slidesToShow}, 1fr)`,
            transform: "translateZ(0)",
          }}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${slideStates.currentSlide}-${index}`}
              testimonial={testimonial}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
              w-3 h-3 rounded-full transition-all duration-300 ease-out
              ${
                slideStates.currentSlide === index
                  ? "bg-[#4F46E5] scale-125"
                  : "bg-[#374151] hover:bg-[#6B7280]"
              }
            `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonials.displayName = "Testimonials";

export default Testimonials;
