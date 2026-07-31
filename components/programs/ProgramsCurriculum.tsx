// app/programs/_sections/CurriculumApproach.tsx
"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Users, Palette, Music, Dumbbell } from "lucide-react";

const approaches = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description: "Problem-solving, critical thinking, and early literacy through interactive activities.",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    icon: Heart,
    title: "Emotional Growth",
    description: "Building self-awareness, empathy, and emotional regulation in a nurturing environment.",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    icon: Users,
    title: "Social Skills",
    description: "Teamwork, communication, and friendship-building through collaborative play.",
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description: "Art, craft, and imaginative play to unlock every child's creative potential.",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Music,
    title: "Performing Arts",
    description: "Dance, music, and drama to boost confidence and self-expression.",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    icon: Dumbbell,
    title: "Physical Development",
    description: "Gross and fine motor skills through structured outdoor and indoor activities.",
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
];

export default function CurriculumApproach() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#FFF8E7" }}>
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #F97316 1px, transparent 1px)",
            backgroundSize: "24px 24px",
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
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-5 border-2 shadow-sm"
            style={{ backgroundColor: "#FEF3C7", borderColor: "#FDE68A" }}
          >
            <Brain className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Our Methodology
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Holistic Development{" "}
            <span style={{ color: "#F97316" }}>Approach</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We nurture every dimension of your child — mind, body, heart, and spirit — through our comprehensive curriculum.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <div
                className={`relative ${item.bgColor} border-2 ${item.borderColor} rounded-[2rem] p-7 md:p-8 h-full transition-all duration-300 hover:shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-extrabold text-gray-900 font-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}