"use client";

import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, Star, Clock, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Play Group",
    subtitle: "First Steps",
    age: "2 - 3 Years",
    duration: "3 Hours/Day",
    icon: Baby,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    emoji: "🧸",
    features: ["Sensorial Activities", "Motor Skills", "Social Interaction", "Rhymes & Songs"],
    fee: "₹35,000/year",
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
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    emoji: "📚",
    features: ["Phonics & Reading", "Number Concepts", "Art & Craft", "Outdoor Play"],
    fee: "₹40,000/year",
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
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
    emoji: "⭐",
    features: ["Advanced Literacy", "Math Skills", "Science Discovery", "Dance & Music"],
    fee: "₹45,000/year",
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
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop",
    emoji: "🎓",
    features: ["Reading Fluency", "Problem Solving", "Computer Basics", "Leadership Skills"],
    fee: "₹50,000/year",
  },
];

export default function AdmissionPrograms() {
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
            className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-5 py-2.5 mb-5 border border-amber-200"
          >
            <span className="text-lg">🎓</span>
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
              Programs Offered
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Choose the Right{" "}
            <span className="text-amber-500">Program</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Age-appropriate programs designed to nurture every stage of your child's development.
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
              className="group relative"
            >
              <div className={`relative ${program.bgColor} border-2 ${program.borderColor} rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-30`} />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase shadow-md`}>
                    {program.subtitle}
                  </div>

                  {/* Emoji */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 text-3xl"
                  >
                    {program.emoji}
                  </motion.div>

                  {/* Icon */}
                  <div className={`absolute bottom-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg border-4 border-white`}>
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-heading mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                    {program.title}
                  </h3>

                  {/* Info Pills */}
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

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Fee & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
                    <div>
                      <p className="text-xs text-gray-500">Annual Fee</p>
                      <p className="text-xl font-extrabold text-gray-900">{program.fee}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-2.5 bg-gradient-to-r ${program.color} text-white font-bold text-sm rounded-full shadow-md hover:shadow-lg transition-shadow`}
                    >
                      Apply Now
                    </motion.button>
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