// app/programs/_sections/LearningEnvironment.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, TreePine, Monitor, Paintbrush, Music2, BookMarked } from "lucide-react";
import Image from "next/image";

const facilities = [
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    description: "CCTV surveillance, child-safe infrastructure, and trained staff ensuring complete safety.",
    image: "https://images.unsplash.com/photo-1566938089211-5821c49b3548?w=500&h=350&fit=crop",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: TreePine,
    title: "Outdoor Play Zone",
    description: "Spacious garden with slides, swings, sandpit, and nature exploration area.",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=500&h=350&fit=crop",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description: "Interactive digital boards and age-appropriate tech tools for modern learning.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=350&fit=crop",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Paintbrush,
    title: "Art & Craft Studio",
    description: "Dedicated creative space with materials for painting, clay work, and crafts.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=350&fit=crop",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: Music2,
    title: "Music & Dance Room",
    description: "Sound-proof studio for rhythm, movement, and performing arts activities.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=350&fit=crop",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: BookMarked,
    title: "Reading Corner",
    description: "Cozy library with picture books, storybooks, and quiet reading nooks.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=350&fit=crop",
    color: "from-cyan-400 to-teal-500",
  },
];

export default function LearningEnvironment() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#FEF3C7" }}>
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
            className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 mb-5 border-2 border-orange-200 shadow-sm"
          >
            <TreePine className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Our Campus
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            World-Class{" "}
            <span style={{ color: "#F97316" }}>Learning Spaces</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Every corner of our campus is designed to inspire curiosity, creativity, and joyful learning.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative h-72 md:h-80 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg mb-3`}
                  >
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white font-heading mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Hover border effect */}
                <div
                  className={`absolute inset-0 rounded-[2rem] border-4 border-transparent group-hover:border-orange-400/50 transition-all duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}