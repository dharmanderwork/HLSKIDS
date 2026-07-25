"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  BookOpen, 
  Palette, 
  Music, 
  Gamepad2, 
  Apple, 
  Bus,
  Shield,
  HeartPulse
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    description: "Digital learning boards, interactive screens, and age-appropriate furniture for comfortable learning.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1564429238984-b3cd3a5ba0b4?w=500&h=350&fit=crop",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "📚",
  },
  {
    title: "Art & Craft Studio",
    description: "Dedicated creative space with all art supplies for painting, drawing, and craft activities.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=350&fit=crop",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    emoji: "🎨",
  },
  {
    title: "Music & Dance Room",
    description: "Sound-proof room with musical instruments and mirror walls for dance and music classes.",
    icon: Music,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=350&fit=crop",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    emoji: "🎵",
  },
  {
    title: "Indoor Play Zone",
    description: "Safe indoor play area with soft flooring, slides, ball pool, and climbing structures.",
    icon: Gamepad2,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&h=350&fit=crop",
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    emoji: "🎮",
  },
  {
    title: "Nutritious Cafeteria",
    description: "Hygienic kitchen serving balanced, nutritious meals prepared under expert supervision.",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=350&fit=crop",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    emoji: "🍎",
  },
  {
    title: "Safe Transport",
    description: "GPS-enabled school vans with trained attendants ensuring safe pick-up and drop.",
    icon: Bus,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=350&fit=crop",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    emoji: "🚌",
  },
  {
    title: "CCTV Security",
    description: "24/7 surveillance across all areas with monitored access control for complete safety.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&h=350&fit=crop",
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    emoji: "📹",
  },
  {
    title: "Medical Room",
    description: "In-house nurse and tie-up with nearby hospitals for any emergency medical needs.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&h=350&fit=crop",
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    emoji: "🏥",
  },
];

export default function FacilitiesGrid() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🏫</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              What We Offer
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Our{" "}
            <span className="text-emerald-500">Facilities</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Every corner of HLS KIDS is designed with your child's comfort, safety, and growth in mind.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`relative ${facility.bgColor} border-2 ${facility.borderColor} rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-20`} />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Emoji */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 left-4 text-2xl"
                  >
                    {facility.emoji}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 font-heading mb-2 group-hover:text-emerald-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}