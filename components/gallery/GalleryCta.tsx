"use client";

import { motion } from "framer-motion";
import { Camera, ArrowRight, Upload } from "lucide-react";
import Image from "next/image";

export default function GalleryCta() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background with Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/pattern-3.png"
          alt="Pattern"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-[10%] text-5xl hidden lg:block"
      >
        📸
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-[10%] text-5xl hidden lg:block"
      >
        🎨
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-4">
            Have Photos to{" "}
            <span className="text-yellow-300">Share?</span>
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Parents can share their child's special moments with us. We'd love to feature them in our gallery!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-orange-500 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Upload Photos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 text-white font-bold text-lg rounded-full shadow-lg hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
              <Camera className="w-5 h-5" />
              View All Photos
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}