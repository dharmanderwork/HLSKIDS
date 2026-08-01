"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket, BookOpen } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To provide exceptional early childhood education that nurtures every child's unique potential through joyful learning, creativity, and holistic development in a safe and stimulating environment.",
    icon: Target,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted and loved preschool brand in India, shaping confident, compassionate, and curious young minds who are ready to embrace the future with enthusiasm and resilience.",
    icon: Eye,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    title: "Our Values",
    description:
      "Integrity, Innovation, Inclusivity, and Inspiration drive everything we do. We believe every child deserves the best start in life, filled with love, laughter, and limitless learning opportunities.",
    icon: Rocket,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    title: "Our Approach",
    description:
      "A perfect blend of structured curriculum and playful exploration. We follow the Foundational Stage guidelines of NEP 2020, ensuring age-appropriate learning that builds strong academic and life skills.",
    icon: BookOpen,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

export default function MissionVision() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
       <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-70 before:bg-contain  before:bg-repeat"></div>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-50/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🌟</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              What Drives Us
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Mission & Vision
            </span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative h-full ${card.bgColor} border-2 ${card.borderColor} rounded-[2rem] p-6 md:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background blob */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                    {/* <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 text-xl"
                    >
                      {card.emoji}
                    </motion.div> */}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${card.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}