"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

export default function FranchiseHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[75vh] flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/pattern-3.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/95 via-purple-50/95 to-pink-50/95" />
      </div>

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[8%] text-5xl hidden lg:block z-0"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-[10%] text-4xl hidden lg:block z-0"
      >
        💼
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
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">
                Business Opportunity
              </span>
              <Sparkles className="w-4 h-4" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 font-heading leading-tight mb-6"
            >
              Start Your Own{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-violet-500">Preschool</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#A78BFA" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                </svg>
              </span>
              <br />
              Business Today!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Join the HLS KIDS family and build a rewarding business in early childhood education. Low investment, high returns, and complete support every step of the way.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-violet-100">
                <TrendingUp className="w-4 h-4 text-violet-500" />
                <span className="text-sm font-bold text-gray-700">High ROI</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-purple-100">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-bold text-gray-700">Full Support</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-pink-100">
                <span className="text-lg">🎯</span>
                <span className="text-sm font-bold text-gray-700">Proven Model</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <motion.button
              type="button"
              onClick={() => {
      document.getElementById("franchise-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Apply for Franchise
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-violet-600 font-bold text-lg rounded-full shadow-lg border-2 border-violet-200 hover:border-violet-400 transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-lg">📞</span>
                Talk to Our Team
              </motion.button> */}
               <motion.a
    href="tel:+917845556827"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white text-violet-600 font-bold text-lg rounded-full shadow-lg border-2 border-violet-200 hover:border-violet-400 transition-colors flex items-center justify-center gap-2"
  >
    <span className="text-lg">📞</span>
    Talk to Our Team
  </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image Collage */}
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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop"
                alt="Business Meeting"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/30 to-transparent" />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute top-[10%] right-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[3deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                alt="Team Collaboration"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent" />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-[5%] left-[15%] w-[40%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[2deg] z-30"
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop"
                alt="Success"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
            </motion.div>

            {/* Image 4 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-[0%] right-[10%] w-[35%] h-[40%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-2deg] z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Growth"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent" />
            </motion.div>

            {/* Badge */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-[5%] right-[40%] z-40"
            >
              <div className="w-14 h-14 bg-violet-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-2xl">💰</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}