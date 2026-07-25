"use client";

import { motion } from "framer-motion";
import { 
  Wifi, 
  AirVent, 
  Droplets, 
  Sun,
  Trees,
  Monitor
} from "lucide-react";

const features = [
  {
    title: "Air Conditioned",
    description: "Fully AC classrooms for comfortable learning in all seasons.",
    icon: AirVent,
    color: "bg-sky-100 text-sky-600",
    emoji: "❄️",
  },
  {
    title: "Purified Water",
    description: "RO purified drinking water stations on every floor.",
    icon: Droplets,
    color: "bg-cyan-100 text-cyan-600",
    emoji: "💧",
  },
  {
    title: "Solar Power",
    description: "Eco-friendly solar panels for sustainable energy use.",
    icon: Sun,
    color: "bg-yellow-100 text-yellow-600",
    emoji: "☀️",
  },
  {
    title: "High-Speed WiFi",
    description: "Campus-wide internet for digital learning resources.",
    icon: Wifi,
    color: "bg-purple-100 text-purple-600",
    emoji: "📶",
  },
  {
    title: "Green Campus",
    description: "Lush gardens and open spaces for outdoor activities.",
    icon: Trees,
    color: "bg-emerald-100 text-emerald-600",
    emoji: "🌳",
  },
  {
    title: "Smart Boards",
    description: "Interactive digital boards in every classroom.",
    icon: Monitor,
    color: "bg-orange-100 text-orange-600",
    emoji: "💻",
  },
];

export default function FacilitiesFeatures() {
  return (
    <section className="relative w-full bg-gradient-to-b from-emerald-50/50 to-white py-16 md:py-24 overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/pattern-3.png)",
            backgroundSize: "250px",
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
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Modern{" "}
            <span className="text-teal-500">Amenities</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Thoughtful additions that make every day at HLS KIDS comfortable and enriching.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-[1.5rem] p-6 shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 mx-auto rounded-2xl ${feature.color} flex items-center justify-center shadow-md mb-4`}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              {/* Emoji */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 text-xl"
              >
                {feature.emoji}
              </motion.div>

              <h3 className="text-lg font-bold text-gray-800 font-heading mb-2 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}