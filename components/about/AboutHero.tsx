"use client";

import { motion } from "framer-motion";
import { Sparkles, Star, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-orange-50 via-yellow-50 to-pink-50 py-20 md:py-32">
       <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-70 before:bg-contain  before:bg-repeat"></div>
      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[5%] text-5xl hidden lg:block"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-[8%] text-4xl hidden lg:block"
      >
        🦋
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-[10%] text-4xl hidden lg:block"
      >
        ⭐
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full px-5 py-2.5 mb-6 border border-orange-200"
            >
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                About HLS KIDS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 font-heading leading-tight mb-6"
            >
              Building a Foundation for a{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Lifetime of Learning
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              HLS KIDS is run by{" "}
              <span className="font-bold text-orange-600">HLS Education Pvt Ltd</span>{" "}
              (Registered Company) and facilitated by renowned{" "}
              <span className="font-bold text-purple-600">
                HLS Intercollege DEVMANPUR
              </span>{" "}
              Ghatampur Kanpur Nagar, Uttar Pradesh — a Residential College with a legacy of excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-orange-100">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-bold text-gray-700">Since 2000</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-purple-100">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-bold text-gray-700">Residential College</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Decorative shapes */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-orange-200 to-pink-200 rounded-[3rem] rotate-3" />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 rounded-[3rem] -rotate-3" />

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop"
                  alt="HLS KIDS Learning Environment"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl"
              >
                <p className="text-xs font-bold uppercase">Established</p>
                <p className="text-2xl font-extrabold">2000</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}