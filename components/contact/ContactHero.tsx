"use client";

import { motion } from "framer-motion";
import { Phone, Sparkles, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[60vh] flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/pattern-3.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/95 via-rose-50/95 to-pink-50/95" />
      </div>

      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[8%] text-5xl hidden lg:block z-0"
      >
        📞
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-32 right-[10%] text-4xl hidden lg:block z-0"
      >
        💌
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
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border-2 border-rose-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">
              Get In Touch
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
            We'd Love to Hear{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-rose-500">From You!</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C40 2 80 2 100 6C120 10 160 10 198 4" stroke="#FB7185" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600 text-lg leading-relaxed mb-8"
          >
            Have questions about admissions, programs, or want to schedule a visit? 
            Our friendly team is here to help you every step of the way.
          </motion.p>

          {/* Quick Contact Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a href="tel:+917845556827" className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all">
              <Phone className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-bold text-gray-700">+91 78455 56827</span>
            </a>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-orange-100">
              <span className="text-lg">📧</span>
              <span className="text-sm font-bold text-gray-700">info@hlskids.in</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-md border border-pink-100">
              <span className="text-lg">⏰</span>
              <span className="text-sm font-bold text-gray-700">Mon-Sat: 9AM - 6PM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}