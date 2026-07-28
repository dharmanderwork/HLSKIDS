"use client";

import { motion } from "framer-motion";
import { Building2, Star, Sparkles } from "lucide-react";
import Image from "next/image";

export default function FacilitiesHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/pattern-3.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/95 via-teal-50/95 to-cyan-50/95" />
      </div>

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[8%] text-5xl hidden lg:block z-0"
      >
        🏫
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-[10%] text-4xl hidden lg:block z-0"
      >
        🎨
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-[15%] text-4xl hidden lg:block z-0"
      >
        ⭐
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        className="absolute bottom-32 right-[12%] text-5xl hidden lg:block z-0"
      >
        🌈
      </motion.div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border-2 border-emerald-200 shadow-sm"
            >
              <Building2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                Our Facilities
              </span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-heading leading-tight mb-6"
            >
              World-Class{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-500">Facilities</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#34D399" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>
              <br />
              For Little Stars!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              At HLS KIDS, we provide a nurturing environment with state-of-the-art facilities designed to inspire creativity, ensure safety, and promote holistic development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-emerald-100">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-gray-700">5-Star Rated</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-teal-100">
                <span className="text-lg">🛡️</span>
                <span className="text-sm font-bold text-gray-700">100% Safe</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-cyan-100">
                <span className="text-lg">✨</span>
                <span className="text-sm font-bold text-gray-700">Modern</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Facility Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]"
          >
            {/* Main Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-[5%] w-[60%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1564429238984-b3cd3a5ba0b4?w=500&h=500&fit=crop"
                alt="Modern Classroom"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-[15%] right-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[3deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop"
                alt="Play Area"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-[5%] left-[10%] w-[50%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] z-30"
            >
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop"
                alt="Learning Activity"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent" />
            </motion.div>

            {/* Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-[10%] right-[15%] z-40"
            >
              <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-2xl">🏆</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}