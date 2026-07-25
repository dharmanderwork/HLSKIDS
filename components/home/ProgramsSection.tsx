"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Users, ArrowRight, Baby, BookOpen, GraduationCap, Sun, Heart } from "lucide-react";

const programs = [
  {
    title: "Play Group",
    subtitle: "Toddlers",
    age: "2 - 3 Years",
    duration: "3 Hours/Day",
    description:
      "Children in this age group are identified as Toddlers. Children are born curious. They begin to explore the world around them through sensory experiences and playful interactions.",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    badge: "Begin",
    shape: "rounded-tr-[3rem] rounded-bl-[3rem]",
  },
  {
    title: "Nursery",
    subtitle: "Pre-schooler",
    age: "3 - 4 Years",
    duration: "3 Hours/Day",
    description:
      "The child is now identified as a Pre-schooler. This is the mandatory level 1 of the Foundational Stage as per NEP, focusing on building essential early learning skills.",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    badge: "Explore",
    shape: "rounded-tl-[3rem] rounded-br-[3rem]",
  },
  {
    title: "Junior KG",
    subtitle: "Foundation",
    age: "4 - 5 Years",
    duration: "4 Hours/Day",
    description:
      "This is level 2 of the Foundational Stage — mandatory as per NEP. Children develop advanced literacy, numeracy, and social skills through structured learning.",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop",
    badge: "Grow",
    shape: "rounded-tr-[3rem] rounded-bl-[3rem]",
  },
  {
    title: "Senior KG",
    subtitle: "Advanced",
    age: "5 - 6 Years",
    duration: "4 Hours/Day",
    description:
      "Level 3 of the Foundational Stage — the final preparatory year. Children master essential skills needed for a smooth transition to primary school.",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    icon: Sun,
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop",
    badge: "Shine",
    shape: "rounded-tl-[3rem] rounded-br-[3rem]",
  },
];

export default function ProgramsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white via-orange-50/30 to-white py-16 md:py-24">
      {/* Floating Decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[3%] hidden lg:block"
      >
        <div className="text-5xl">🎈</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute top-40 right-[5%] hidden lg:block"
      >
        <div className="text-4xl">🦋</div>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-32 left-[8%] hidden lg:block"
      >
        <div className="text-3xl">⭐</div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 rounded-full px-5 py-2.5 mb-5 border border-orange-200"
          >
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">
              Our Programmes
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Learning Through{" "}
            <span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Play And Fun!
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Age-appropriate programmes designed to nurture every stage of your child's early development journey.
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
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`relative flex flex-col sm:flex-row gap-5 ${program.bgColor} border-2 ${program.borderColor} ${program.shape} p-5 md:p-6 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${program.color} opacity-10 rounded-bl-full`} />

                {/* Image Side */}
                <div className="relative w-full sm:w-2/5 shrink-0">
                  <div className="relative h-48 sm:h-full min-h-45 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-t ${program.color} opacity-20`} />

                    {/* Badge */}
                    <div className={`absolute top-3 left-3 bg-linear-to-r ${program.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
                      {program.badge}
                    </div>

                    {/* Icon Circle */}
                    <div className={`absolute -bottom-4 -right-4 w-14 h-14 bg-linear-to-br ${program.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider bg-linear-to-r ${program.color} bg-clip-text text-transparent`}>
                      {program.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 font-heading mb-2 group-hover:text-orange-500 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm border border-gray-100">
                      <Users className="w-3.5 h-3.5 text-orange-500" />
                      Age: {program.age}
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-white/80 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm border border-gray-100">
                      <Clock className="w-3.5 h-3.5 text-sky-500" />
                      {program.duration}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 text-sm font-bold bg-linear-to-r ${program.color} bg-clip-text text-transparent group/btn`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 text-orange-500 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Floating Decoration */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute -top-2 -right-2 text-2xl opacity-60"
                >
                  {index === 0 ? "🧸" : index === 1 ? "📚" : index === 2 ? "🎨" : "🌟"}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daycare Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 relative overflow-hidden rounded-[2rem] bg-linear-to-r from-purple-500 via-pink-500 to-orange-400 p-8 md:p-10 shadow-xl"
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-3">
                <Sun className="w-4 h-4 text-yellow-200" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Daycare Available</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white font-heading mb-2">
                HLS Daycare — A Home Away From Home!
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Flexible hours, post-school schedules, and a nurturing environment where your child feels safe, secure, and happy.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0 px-8 py-3.5 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Enquire Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}