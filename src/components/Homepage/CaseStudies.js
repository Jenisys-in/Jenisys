"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Users,
  Calendar,
  ArrowRight,
  X,
  ExternalLink,
} from "lucide-react";

const CaseStudies = ({
  caseStudies,
  slideStates,
  uiStates,
  setUIStates,
  prevSlide,
  nextSlide,
  goToCaseSlide,
  handleDragEnd,
  carouselRef,
  controls,
  dragControls,
  maxIndex,
  totalSlides,
  containerRef,
  sectionOpacity,
  backgroundElements,
}) => {
  return (
    <motion.section
      ref={containerRef}
      style={{ opacity: sectionOpacity }}
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 font-['Inter'] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundElements}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-100/80 rounded-full text-sm font-medium text-slate-600 mb-4 sm:mb-6"
        >
          <TrendingUp className="w-4 h-4" />
          Case Studies
        </motion.div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-4">
          <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Proven Impact
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Through Innovation
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4"
        >
          Discover how we've transformed businesses across industries with
          cutting-edge technology solutions.
        </motion.p>
      </motion.div>

      {/* Carousel Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Navigation and Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                disabled={slideStates.currentIndex === 0}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  slideStates.currentIndex === 0
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white shadow-md text-slate-700 hover:shadow-lg hover:text-slate-900"
                }`}
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                disabled={slideStates.currentIndex >= maxIndex}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  slideStates.currentIndex >= maxIndex
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white shadow-md text-slate-700 hover:shadow-lg hover:text-slate-900"
                }`}
                aria-label="Next case study"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToCaseSlide(index)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    index === slideStates.currentIndex
                      ? "bg-blue-600 w-6 sm:w-8"
                      : "bg-slate-300 hover:bg-slate-400 w-2"
                  }`}
                  aria-label={`Go to case study slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Cards Container with Drag Support */}
        <div className="relative overflow-hidden pt-4 pb-12">
          <motion.div
            ref={carouselRef}
            animate={controls}
            initial={{
              x: `-${
                (slideStates.currentIndex / slideStates.cardsToShow) * 100
              }%`,
            }}
            drag="x"
            dragControls={dragControls}
            dragConstraints={{
              left: `-${(maxIndex / slideStates.cardsToShow) * 100}%`,
              right: 0,
            }}
            dragElastic={0.1}
            onDragStart={() =>
              setUIStates((prev) => ({ ...prev, isDragging: true }))
            }
            onDragEnd={handleDragEnd}
            className="flex will-change-transform cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateZ(0)`,
              backfaceVisibility: "hidden",
            }}
          >
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="flex-shrink-0 px-2 sm:px-3 lg:px-4 py-2"
                style={{ width: `${100 / slideStates.cardsToShow}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={
                    !uiStates.isDragging
                      ? {
                          y: -12,
                          scale: 1.02,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onHoverStart={() =>
                    !uiStates.isDragging &&
                    setUIStates((prev) => ({
                      ...prev,
                      hoveredCard: study.id,
                    }))
                  }
                  onHoverEnd={() =>
                    setUIStates((prev) => ({ ...prev, hoveredCard: null }))
                  }
                  className="group relative cursor-pointer h-full will-change-transform select-none"
                  onClick={(e) => {
                    if (!uiStates.isDragging) {
                      setUIStates((prev) => ({
                        ...prev,
                        activeStudy: study,
                      }));
                    }
                  }}
                  style={{
                    transform: `translateZ(0)`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${study.color} rounded-2xl sm:rounded-3xl blur-lg opacity-0 transition-opacity duration-500`}
                    animate={{
                      opacity:
                        uiStates.hoveredCard === study.id &&
                        !uiStates.isDragging
                          ? 0.15
                          : 0,
                      scale:
                        uiStates.hoveredCard === study.id &&
                        !uiStates.isDragging
                          ? 1.05
                          : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Card */}
                  <div className="relative bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Header */}
                    <div
                      className={`relative h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${study.color} flex items-center justify-center overflow-hidden`}
                    >
                      <motion.div
                        animate={{
                          rotate:
                            uiStates.hoveredCard === study.id &&
                            !uiStates.isDragging
                              ? 360
                              : 0,
                          scale:
                            uiStates.hoveredCard === study.id &&
                            !uiStates.isDragging
                              ? 1.1
                              : 1,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        className="text-white/90 text-3xl sm:text-4xl lg:text-6xl font-bold select-none"
                      >
                        {study.initial}
                      </motion.div>

                      {/* Industry Tag */}
                      <motion.div
                        className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 px-2 py-1 sm:px-3 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700"
                        whileHover={!uiStates.isDragging ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.2 }}
                      >
                        {study.industry}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 lg:p-8">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 mb-2 sm:mb-3 transition-colors duration-200 group-hover:text-slate-900 line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs text-slate-500 mb-4 sm:mb-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <TrendingUp className="w-3 h-3 flex-shrink-0" />
                          </div>
                          <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                            {study.metrics.improvement}
                          </div>
                          <div className="text-xs opacity-75">Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Users className="w-3 h-3 flex-shrink-0" />
                          </div>
                          <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                            {study.metrics.stores}
                          </div>
                          <div className="text-xs opacity-75">Scale</div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                          </div>
                          <div className="font-semibold text-slate-700 text-xs sm:text-sm">
                            {study.metrics.timeline}
                          </div>
                          <div className="text-xs opacity-75">Time</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300"
                        whileHover={!uiStates.isDragging ? { scale: 1.05 } : {}}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-xs sm:text-sm">Learn More</span>
                        <motion.div
                          animate={{
                            x:
                              uiStates.hoveredCard === study.id &&
                              !uiStates.isDragging
                                ? 4
                                : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Touch indicators for mobile */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-6 sm:hidden">
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCaseSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === slideStates.currentIndex
                      ? "bg-blue-600 w-6"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Drag hint for first-time users */}
        {totalSlides > 1 && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 pointer-events-none"
          >
            ← Drag to explore →
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {uiStates.activeStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() =>
              setUIStates((prev) => ({ ...prev, activeStudy: null }))
            }
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white max-w-4xl w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                onClick={() =>
                  setUIStates((prev) => ({ ...prev, activeStudy: null }))
                }
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 hover:text-slate-800 shadow-lg transition-colors duration-200"
                aria-label="Close case study details"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>

              {/* Header */}
              <div
                className={`relative h-48 sm:h-64 bg-gradient-to-br ${uiStates.activeStudy.color} flex items-center justify-center overflow-hidden`}
              >
                <div className="text-white/10 text-6xl sm:text-9xl font-bold absolute select-none">
                  {uiStates.activeStudy.initial}
                </div>
                <div className="relative z-10 text-center text-white p-6 sm:p-8">
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.25 }}
                    className="text-xl sm:text-3xl font-bold mb-2"
                  >
                    {uiStates.activeStudy.title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.25 }}
                    className="text-white/80 text-sm sm:text-base"
                  >
                    {uiStates.activeStudy.industry}
                  </motion.p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
                >
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.improvement}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Improvement
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.stores}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Scale
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-slate-800">
                      {uiStates.activeStudy.metrics.timeline}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600">
                      Timeline
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4">
                    Project Overview
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {uiStates.activeStudy.fullDetails}
                  </p>

                  <a href="/case-study">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${uiStates.activeStudy.color} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 text-sm sm:text-base`}
                    >
                      View Full Case Study
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

CaseStudies.displayName = "CaseStudies";

export default CaseStudies;
