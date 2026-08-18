// app/programs/_sections/ProgramsActivities.tsx
"use client";

import { motion } from "framer-motion";
import { Palette, Music, Dumbbell, Globe, FlaskConical, Drama, Puzzle, TreePine } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    title: "Art & Craft",
    description: "Painting, clay modeling, origami, and mixed-media projects to unleash creativity.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    title: "Music & Dance",
    description: "Rhythm training, instrument exploration, and expressive movement classes.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    title: "Sports & Yoga",
    description: "Age-appropriate physical training, games, and mindfulness through kids yoga.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=400&h=300&fit=crop",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    title: "Language Lab",
    description: "English, Hindi, and introductory foreign language through stories and songs.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    title: "Science Discovery",
    description: "Hands-on experiments, nature walks, and STEM exploration for curious minds.",
    icon: FlaskConical,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    title: "Drama & Storytelling",
    description: "Role-play, puppet shows, and narrative skills to build confidence and expression.",
    icon: Drama,
    image: "https://images.unsplash.com/photo-1701773055020-9d2b09b7ca5e?w=400&h=300&fit=crop",
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    title: "Brain Games",
    description: "Puzzles, memory games, and logic challenges for cognitive sharpness.",
    icon: Puzzle,
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=300&fit=crop",
    color: "from-indigo-400 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    title: "Nature Connect",
    description: "Gardening, pet care, and environmental awareness activities.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    color: "from-lime-400 to-green-600",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
  },
];

export default function ProgramsActivities() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#FFF8E7" }}>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #F97316 2px, transparent 2px)",
            backgroundSize: "32px 32px",
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
            <Palette className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Beyond Academics
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Activities That{" "}
            <span style={{ color: "#F97316" }}>Inspire</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A rich variety of extracurricular activities to discover and nurture every child's unique talents.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div
                className={`relative ${activity.bgColor} border-2 ${activity.borderColor} rounded-[2rem] overflow-hidden h-full hover:shadow-xl transition-all duration-300`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon badge */}
                  <div
                    className={`absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-lg`}
                  >
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-gray-900 font-heading mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}