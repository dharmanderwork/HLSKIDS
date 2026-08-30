"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdmissionsHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[75vh] flex items-center pt-20">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0">
        <Image
          src="/pattern-3.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-yellow-50/95" />
      </div> */}

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[8%] text-5xl hidden lg:block z-0"
      >
        🎓
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-[10%] text-4xl hidden lg:block z-0"
      >
        ✏️
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
        🏆
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
            {/* Admission Open Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg animate-pulse"
            >
              <span className="text-lg">🔥</span>
              <span className="text-sm font-bold uppercase tracking-wider">
                Admissions Open 2026-27
              </span>
              <span className="text-lg">🔥</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-heading leading-tight mb-6"
            >
              Your Child's Bright{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-amber-500">Future</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
              <br />
              Starts Here!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Give your child the gift of quality early education. HLS KIDS welcomes applications for Play Group through Senior KG for the academic year 2026-27.
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-amber-100">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-bold text-gray-700">Session: 2026-27</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-orange-100">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-gray-700">Limited Seats</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-yellow-100">
                <GraduationCap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-bold text-gray-700">Age: 2-6 Years</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Apply Now
              </motion.button> */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-amber-600 font-bold text-lg rounded-full shadow-lg border-2 border-amber-200 hover:border-amber-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Visit
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Photo Collage */}
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
              className="absolute top-0 left-[5%] w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] z-20"
            >
              <Image
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=500&fit=crop"
                alt="Happy Kids at HLS KIDS"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-[10%] right-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[3deg] z-10"
            >
              <Image
                src="/images/secondimage.jpg"
                alt="Learning Activity"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
            </motion.div>

            {/* Image 3 */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 to-transparent" />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-[0%] right-[10%] w-[35%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] z-10"
            >
              <Image
                src="/images/senior_kg.png"
                alt="Art Activity"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[5%] right-[40%] z-40"
            >
              <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-2xl">🎯</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}