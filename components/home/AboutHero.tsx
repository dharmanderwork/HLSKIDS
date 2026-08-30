"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";

const features = [
  "Interactive storytelling to build listening and language",
  "Playground time, sports, and movement-based learning",
  "Structured curriculum focusing on foundational skills",
];

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden bg-pattern ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative">
              {/* Background decorative shape */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-100 rounded-[30px] rotate-3" />

              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[30px] p-6 md:p-8 overflow-hidden">
                <Image
                  src="/images/kid-3.png"
                  alt="Happy Student at HLS Kids"
                  width={400}
                  height={400}
                  className="w-full max-w-[320px] mx-auto h-auto object-contain " unoptimized
                />

                {/* Since 2000 Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute bottom-8 left-4 md:bottom-12 md:left-8"
                >
                  <div className="bg-yellow-400 text-white font-bold text-sm px-4 py-2 rounded-xl shadow-lg transform -rotate-6">
                    Since<br />2000
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[55%]"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              <span className="text-sm font-medium text-orange-600">
                Learning is an Adventure!
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-4">
              Happy Place Where{" "}
              <span className="text-orange-500">Creativity Grows!</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Kindergarten is an early childhood educational environment where most young children, typically ages 3-5, engage in structured learning experiences. The focus is on fostering social, emotional, and cognitive.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA & Phone */}
            <div className="flex flex-col sm:flex-row items-center gap-4">

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 transition-colors"
              >
                Start For Visit
              </motion.a>

              <a
                href="tel:+917303729955"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Phone className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Us Today</p>
                  <p className="text-sm font-bold">+91 73037-29955</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}