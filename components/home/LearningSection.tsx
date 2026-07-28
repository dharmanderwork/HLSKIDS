"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbulb, Puzzle, Brain } from "lucide-react";

const cards = [
  {
    title: "Scholastic Skills",
    subtitle: "Academic",
    description:
      "Building strong foundational skills in literacy, numeracy, and scientific thinking through interactive and age-appropriate activities.",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=250&fit=crop",
    ribbonColor: "bg-sky-400",
    dots: ["bg-sky-300", "bg-sky-400", "bg-sky-500"],
  },
  {
    title: "Creativity And Imagination",
    subtitle: "Development",
    description:
      "Encouraging artistic expression, storytelling, and imaginative play to help children discover their unique creative potential.",
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&h=250&fit=crop",
    ribbonColor: "bg-orange-400",
    dots: ["bg-orange-300", "bg-orange-400", "bg-orange-500"],
  },
  {
    title: "Problem Solving Development",
    subtitle: "Cognitive",
    description:
      "Developing critical thinking and logical reasoning through puzzles, experiments, and hands-on discovery activities.",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    icon: Puzzle,
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=250&fit=crop",
    ribbonColor: "bg-pink-400",
    dots: ["bg-pink-300", "bg-pink-400", "bg-pink-500"],
  },
];

export default function LearningSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden bg-pattern ">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-[5%] opacity-20 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="#FFB347" strokeWidth="2" strokeDasharray="6 4" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-[8%] opacity-15 hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-12 h-12 bg-yellow-300 rounded-full" />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-4"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-orange-600">
              Learning is an Adventure!
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Learning And Fun{" "}
            <span className="text-orange-500">Come Together!</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Kindergarten is an early childhood educational environment where children engage in learning experiences.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Decorative Dots Above Card */}
              <div className="flex justify-center gap-2 mb-3">
                {card.dots.map((dot, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className={`w-2.5 h-2.5 rounded-full ${dot}`}
                  />
                ))}
              </div>

              {/* Main Card Container */}
              <div
                className={`relative rounded-[2rem] ${card.bgColor} border-2 ${card.borderColor} p-5 pb-8 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                {/* Decorative Ribbon/Badge */}
                <div
                  className={`absolute -top-1 left-1/2 -translate-x-1/2 ${card.ribbonColor} text-white text-xs font-bold px-4 py-1 rounded-b-xl shadow-md z-20`}
                >
                  {card.subtitle}
                </div>

                {/* Image Container with Fun Frame */}
                <div className="relative mt-6 mb-5">
                  {/* Scalloped/Polka dot border frame */}
                  <div className="absolute -inset-2 bg-white rounded-[1.5rem] border-2 border-dashed border-gray-200" />
                  
                  {/* Main Image */}
                  <div className="relative rounded-[1.2rem] overflow-hidden h-48 md:h-52">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-20`} />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <span className="text-lg">🎨</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center px-2">
                  <h3 className="text-xl font-bold text-gray-800 font-heading mb-2 group-hover:text-orange-500 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${card.color} text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow text-sm`}
                  >
                    <card.icon className="w-4 h-4" />
                    Learn More
                  </motion.button>
                </div>

                {/* Bottom Decorative Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-3">
                  <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-full">
                    <path
                      d="M0 10 Q50 0 100 10 Q150 20 200 10 Q250 0 300 10 Q350 20 400 10 V20 H0 Z"
                      fill="currentColor"
                      className="text-white/30"
                    />
                  </svg>
                </div>
              </div>

              {/* Shadow/Ground Effect */}
              <div className="mx-auto w-[80%] h-4 bg-gray-200/50 rounded-full blur-md mt-2 group-hover:w-[90%] transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}