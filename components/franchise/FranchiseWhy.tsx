"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Award, HeartHandshake } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Booming Industry",
    description: "The preschool education sector in India is growing at 25% CAGR. Early childhood education is now a unoptimized for every parent.",
    icon: TrendingUp,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    emoji: "📈",
    stat: "25% CAGR Growth",
  },
  {
    number: "02",
    title: "Low Investment",
    description: "Start your own preschool with an investment as low as ₹8-15 lakhs. Affordable compared to other business opportunities.",
    icon: Shield,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "💰",
    stat: "₹8-15 Lakhs",
  },
  {
    number: "03",
    title: "High Returns",
    description: "Expect ROI of 40-60% from the second year onwards. Steady monthly income with growing enrollment each year.",
    icon: Award,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    emoji: "🏆",
    stat: "40-60% ROI",
  },
  {
    number: "04",
    title: "Social Impact",
    description: "Build a rewarding business while shaping the future of young minds. Make a difference in your community.",
    icon: HeartHandshake,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    emoji: "🤝",
    stat: "1000+ Lives",
  },
];

export default function FranchiseWhy() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/pattern-3.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            className="inline-flex items-center gap-2 bg-violet-50 rounded-full px-5 py-2.5 mb-5 border border-violet-200"
          >
            <span className="text-lg">💡</span>
            <span className="text-sm font-bold text-violet-600 uppercase tracking-wider">
              Why Choose HLS KIDS Franchise
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Why HLS KIDS{" "}
            <span className="text-violet-500">Franchise?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            The perfect blend of business growth and social impact. Here's why entrepreneurs love partnering with us.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative ${reason.bgColor} border-2 ${reason.borderColor} rounded-[2rem] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                {/* Background blob */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${reason.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                <div className="flex items-start gap-5">
                  {/* Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg`}>
                      <reason.icon className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                        {reason.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading group-hover:text-violet-600 transition-colors">
                        {reason.title}
                      </h3>
                      {/* <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xl"
                      >
                        {reason.emoji}
                      </motion.div> */}
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                      {reason.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${reason.color} text-white rounded-full px-4 py-1.5 text-xs font-bold shadow-md`}>
                      {reason.stat}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}