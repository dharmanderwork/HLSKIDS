"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-25 bg-[#FFF8E7]">
      {/* ========== TOP WAVE BACKGROUND ========== */}
      <div className="absolute top-0 left-0 w-full h-[120px] md:h-[180px] z-0">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V100C1440 100 1200 180 720 180C240 180 0 100 0 100V0Z"
            fill="#FFF8E7"
          />
          <path
            d="M0 60C200 120 400 140 720 140C1040 140 1240 120 1440 60V0H0V60Z"
            fill="#FFECD2"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* ========== FLOATING DECORATIVE ELEMENTS ========== */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[5%] md:left-[10%] z-10 hidden md:block"
      >
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <Star className="w-6 h-6 text-white fill-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 right-[8%] md:right-[15%] z-10 hidden md:block"
      >
        <div className="w-8 h-8 bg-orange-400 rounded-full opacity-60" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-40 left-[3%] z-10 hidden md:block"
      >
        <div className="w-10 h-10 bg-pink-300 rounded-full opacity-50" />
      </motion.div>

      {/* ========== MAIN HERO CONTENT ========== */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12 md:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          {/* ========== LEFT CONTENT ========== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] text-center lg:text-left"
          >
            {/* Subtitle Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-4 shadow-sm border border-orange-100"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-600 tracking-wide">
                Learning is an Adventure!
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-gray-900 leading-[1.15] mb-4"
            >
              Happy Beginning for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">tiny Learners!</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 100 2 150 6C200 10 250 10 298 4"
                    stroke="#FFB347"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              Kindergarten is an early childhood educational environment where children engage in learning experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-colors duration-300 flex items-center gap-2"
              >
                Start For Visit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ========== RIGHT CONTENT - KIDS IMAGE ========== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative w-full lg:w-[45%] flex justify-center lg:justify-end"
          >
            {/* Background Blob/Shape behind kids */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-yellow-200/40 via-orange-100/40 to-pink-100/40 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-xl" />

            {/* School Admission Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-30"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-4 py-3 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <p className="text-xs font-bold uppercase tracking-wider">School</p>
                  <p className="text-sm font-extrabold">Admission</p>
                  <p className="text-xs font-bold">Open Now</p>
                </div>
                {/* Badge Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-md" />
              </div>
            </motion.div>

            {/* Main Kids Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <Image
                src="/kids-img.png"
                alt="HLS Kids Play School Students"
                width={500}
                height={500}
                className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] h-auto drop-shadow-2xl object-contain"
                priority
              />
            </motion.div>

            {/* Floating decorative elements around image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 md:bottom-0 md:left-0 z-10"
            >
              <div className="w-16 h-16 md:w-20 md:h-20">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="35" stroke="#FFB347" strokeWidth="3" strokeDasharray="8 6" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-2 md:top-16 md:left-4 z-10"
            >
              <div className="w-6 h-6 bg-yellow-300 rounded-full shadow-md" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========== BOTTOM WAVE SEPARATOR ========== */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ========== CLOUD SHAPES (Like in the image) ========== */}
      <div className="absolute top-[15%] right-[5%] z-0 opacity-40 hidden lg:block">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <ellipse cx="30" cy="35" rx="25" ry="20" fill="#FFE4B5" />
          <ellipse cx="60" cy="30" rx="30" ry="25" fill="#FFE4B5" />
          <ellipse cx="90" cy="35" rx="25" ry="20" fill="#FFE4B5" />
        </svg>
      </div>

      <div className="absolute top-[25%] left-[2%] z-0 opacity-30 hidden lg:block">
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
          <ellipse cx="25" cy="28" rx="20" ry="16" fill="#FFDAB9" />
          <ellipse cx="50" cy="24" rx="25" ry="20" fill="#FFDAB9" />
          <ellipse cx="75" cy="28" rx="20" ry="16" fill="#FFDAB9" />
        </svg>
      </div>
    </section>
  );
}