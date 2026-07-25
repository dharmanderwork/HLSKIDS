"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[70vh] flex items-center">
      {/* ========== BACKGROUND PATTERN ========== */}
      <div className="absolute inset-0">
        {/* Pattern Image */}
        <Image
          src="/pattern-3.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Gradient Overlay — FIXED: bg-gradient-to-br */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-yellow-50/95 to-pink-50/95" />
      </div>

      {/* ========== FLOATING DECORATIONS ========== */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[8%] text-5xl hidden lg:block z-0"
      >
        📸
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

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border-2 border-orange-200 shadow-sm"
            >
              <Camera className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                Our Gallery
              </span>
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-heading leading-tight mb-6"
            >
              Capturing{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">Joyful</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#FFB347" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>
              <br />
              Moments!
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Step into the vibrant world of HLS KIDS! Explore classrooms filled with laughter, creative activities, festive celebrations, and precious memories.
            </motion.p>

            {/* Stats Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-pink-100">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                <span className="text-sm font-bold text-gray-700">500+ Photos</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-yellow-100">
                <span className="text-lg">🎉</span>
                <span className="text-sm font-bold text-gray-700">50+ Events</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-sky-100">
                <span className="text-lg">🏆</span>
                <span className="text-sm font-bold text-gray-700">Awards</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - PHOTO COLLAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 relative h-[400px] md:h-[500px]"
          >
            {/* Photo 1 - Large */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-[5%] w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop"
                alt="Kids Playing"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
            </motion.div>

            {/* Photo 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-[10%] right-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[3deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop"
                alt="Happy Child"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
            </motion.div>

            {/* Photo 3 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-[5%] left-[15%] w-[40%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] z-30"
            >
              <Image
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=400&fit=crop"
                alt="Classroom Fun"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-500/30 to-transparent" />
            </motion.div>

            {/* Photo 4 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-[0%] right-[10%] w-[35%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=400&fit=crop"
                alt="Art Activity"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent" />
            </motion.div>

            {/* Star Badge */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[5%] right-[40%] z-40"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg">⭐</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}