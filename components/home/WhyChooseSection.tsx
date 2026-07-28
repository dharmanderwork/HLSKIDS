"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users, Star, Award, Sparkles } from "lucide-react";

const features = [
  {
    title: "Holistic Learning",
    description:
      "Fostering all-round development through a balanced blend of academics, play, and essential life skills for every child.",
    icon: Heart,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    emoji: "🎯",
    delay: 0,
  },
  {
    title: "Expert Educators",
    description:
      "Skilled and passionate teachers dedicated to nurturing every child's unique potential with personalized attention.",
    icon: Users,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "👩‍🏫",
    delay: 0.1,
  },
  {
    title: "Safe & Secure",
    description:
      "A protected, child-friendly environment ensuring complete safety and peace of mind for parents every single day.",
    icon: Shield,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    emoji: "🛡️",
    delay: 0.2,
  },
  {
    title: "Innovative Learning",
    description:
      "Engaging, modern teaching methods that make learning fun, impactful, and memorable for young minds.",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    emoji: "💡",
    delay: 0.3,
  },
];

const stats = [
  { number: "15+", label: "Years Experience", suffix: "+", color: "text-rose-500" },
  { number: "5000", label: "Happy Children", suffix: "+", color: "text-sky-500" },
  { number: "50", label: "Expert Teachers", suffix: "+", color: "text-emerald-500" },
  { number: "98", label: "Parent Satisfaction", suffix: "%", color: "text-amber-500" },
];

export default function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-yellow-50/40 to-white py-16 md:py-24 ">
       <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-70"></div>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-[5%] text-6xl opacity-20"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-[8%] text-5xl opacity-15"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 left-[10%] text-4xl opacity-15"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-[15%] text-5xl opacity-15"
        >
          🌈
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-5 py-2.5 mb-5 border border-purple-200"
          >
            <Award className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              HLS KIDS?
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            HLS KIDS is your experienced trusted partner in providing exceptional early education for your child.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-white rounded-2xl p-5 md:p-6 shadow-lg border-2 border-gray-100 text-center overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className={`text-3xl md:text-4xl font-extrabold ${stat.color} font-heading mb-1`}
              >
                {stat.number}
                <span className="text-lg">{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</p>

              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative flex items-start gap-5 ${feature.bgColor} border-2 ${feature.borderColor} rounded-[2rem] p-6 md:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background Gradient Blob */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  {/* Floating Emoji */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-xl"
                  >
                    {feature.emoji}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-heading mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-linear-to-tl from-white/40 to-transparent rounded-tl-full" />

                {/* Sparkle decoration */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-4 right-4"
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            Start Your Child's Journey Today
            <Sparkles className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}