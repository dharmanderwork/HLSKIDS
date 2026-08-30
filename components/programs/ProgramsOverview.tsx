"use client";

import { motion } from "framer-motion";
import { Baby, BookOpen, Star, GraduationCap, Clock, Users, ArrowRight,Heart } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Day Care",
    subtitle: "Safe & Nurturing",
    age: "1.5 - 10 Years",
    duration: "Full Day / Half Day",
    icon: Heart,
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    image:
      "/images/Day_Care.png",
    emoji: "💜",
    description:
      "A safe, caring and nurturing environment where children can learn, play, rest and enjoy their day with confidence.",
    highlights: [
      "Safe Environment",
      "Nutritious Meals",
      "Homework Support",
      "Recreational Activities",
    ],
  },
  {
    title: "Play Group",
    subtitle: "First Steps",
    age: "2 - 3 Years",
    duration: "3 Hours/Day",
    icon: Baby,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    image: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?w=400&h=300&fit=crop",
    emoji: "🧸",
    description: "A gentle introduction to the world of learning through play, exploration, and sensory activities.",
    highlights: ["Sensorial Play", "Motor Skills", "Social Interaction", "Rhymes & Songs"],
  },
  {
    title: "Nursery",
    subtitle: "Foundation",
    age: "3 - 4 Years",
    duration: "3 Hours/Day",
    icon: BookOpen,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    image: "/images/Nursery.png",
    emoji: "📚",
    description: "Building foundational literacy and numeracy skills through structured yet playful learning.",
    highlights: ["Phonics & Reading", "Number Concepts", "Art & Craft", "Outdoor Play"],
  },
  {
    title: "Junior KG",
    subtitle: "Explorer",
    age: "4 - 5 Years",
    duration: "4 Hours/Day",
    icon: Star,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    image: "/images/juniorkg.png",
    emoji: "⭐",
    description: "Advanced learning with focus on reading fluency, problem-solving, and creative expression.",
    highlights: ["Advanced Literacy", "Math Skills", "Science Discovery", "Dance & Music"],
  },
  {
    title: "Senior KG",
    subtitle: "Achiever",
    age: "5 - 6 Years",
    duration: "4 Hours/Day",
    icon: GraduationCap,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    image: "/images/senior_kg.png",
    emoji: "🎓",
    description: "Preparatory program ensuring seamless transition to primary school with confidence and competence.",
    highlights: ["Reading Fluency", "Problem Solving", "Computer Basics", "Leadership Skills"],
  },
];

export default function ProgramsOverview() {
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
            className="inline-flex items-center gap-2 bg-sky-50 rounded-full px-5 py-2.5 mb-5 border border-sky-200"
          >
            <span className="text-lg">🎓</span>
            <span className="text-sm font-bold text-sky-600 uppercase tracking-wider">
              Age-Appropriate Learning
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Programs for Every{" "}
            <span className="text-sky-500">Stage</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From first steps to school readiness — each program is carefully crafted to match your child's developmental needs.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className={`relative ${program.bgColor} border-2 ${program.borderColor} rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 h-56 md:h-auto overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-20`} />
                    
                    {/* Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase shadow-md`}>
                      {program.subtitle}
                    </div>

                    {/* Emoji */}
                    {/* <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-4 right-4 text-3xl"
                    >
                      {program.emoji}
                    </motion.div> */}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-md`}>
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-500 transition-all">
                          {program.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>

                    {/* Info */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm border border-gray-100">
                        <Users className="w-3.5 h-3.5 text-rose-500" />
                        Age: {program.age}
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm border border-gray-100">
                        <Clock className="w-3.5 h-3.5 text-sky-500" />
                        {program.duration}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`} />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {/* <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 bg-gradient-to-r ${program.color} text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2`}
                    >
                      Explore Curriculum
                      <ArrowRight className="w-4 h-4" />
                    </motion.button> */}
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