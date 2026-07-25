"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Palette, Music, Trophy, Users, Sparkles } from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All Photos",
    icon: Camera,
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    count: "500+",
    emoji: "📸",
  },
  {
    id: "classroom",
    label: "Classroom",
    icon: Palette,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    count: "120+",
    emoji: "🎨",
  },
  {
    id: "events",
    label: "Events",
    icon: Music,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    count: "80+",
    emoji: "🎉",
  },
  {
    id: "sports",
    label: "Sports Day",
    icon: Trophy,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    count: "60+",
    emoji: "🏆",
  },
  {
    id: "activities",
    label: "Activities",
    icon: Sparkles,
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    count: "150+",
    emoji: "✨",
  },
  {
    id: "celebrations",
    label: "Celebrations",
    icon: Users,
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    count: "90+",
    emoji: "🎊",
  },
];

export default function GalleryCategories() {
  const [active, setActive] = useState("all");

  return (
    <section className="relative w-full bg-white py-12 md:py-16 overflow-hidden">
      {/* Pattern Background */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
            Browse by <span className="text-orange-500">Category</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat.id)}
              className={`relative group flex flex-col items-center gap-2 px-6 py-4 rounded-[1.5rem] border-2 transition-all duration-300 ${
                active === cat.id
                  ? `${cat.bgColor} ${cat.borderColor} shadow-xl scale-105`
                  : "bg-white border-gray-100 hover:border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md`}
              >
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-bold ${
                  active === cat.id ? "text-gray-900" : "text-gray-600"
                }`}
              >
                {cat.label}
              </span>
              <span className="text-xs text-gray-400 font-medium">{cat.count}</span>

              {/* Active indicator */}
              {active === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className={`absolute -bottom-1 w-8 h-1 rounded-full bg-gradient-to-r ${cat.color}`}
                />
              )}

              {/* Emoji float */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 text-lg"
              >
                {cat.emoji}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}