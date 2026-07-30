"use client";

import { motion } from "framer-motion";
import { 
  BookOpen, 
  Users, 
  Megaphone, 
  Wrench, 
  GraduationCap, 
  BarChart3,
  Building2,
  FileCheck
} from "lucide-react";

const benefits = [
  {
    title: "Brand Name",
    description: "Use the trusted HLS KIDS brand with 20+ years of educational excellence.",
    icon: Megaphone,
    color: "from-rose-400 to-pink-500",
    emoji: "🏷️",
  },
  {
    title: "Curriculum Support",
    description: "Complete academic curriculum, lesson plans, and teaching materials provided.",
    icon: BookOpen,
    color: "from-sky-400 to-blue-500",
    emoji: "📚",
  },
  {
    title: "Teacher Training",
    description: "Comprehensive training programs for teachers and staff members.",
    icon: GraduationCap,
    color: "from-amber-400 to-orange-500",
    emoji: "👩‍🏫",
  },
  {
    title: "Marketing Support",
    description: "Digital marketing, local advertising, and enrollment campaigns handled.",
    icon: Megaphone,
    color: "from-purple-400 to-violet-500",
    emoji: "📢",
  },
  {
    title: "Operations Manual",
    description: "Detailed SOPs for daily operations, admissions, and parent communication.",
    icon: FileCheck,
    color: "from-emerald-400 to-green-500",
    emoji: "📋",
  },
  {
    title: "Interior Design",
    description: "Complete classroom layout, furniture specs, and child-friendly design plans.",
    icon: Building2,
    color: "from-cyan-400 to-teal-500",
    emoji: "🏫",
  },
  {
    title: "IT Systems",
    description: "ERP software, parent app, and digital attendance systems provided.",
    icon: BarChart3,
    color: "from-indigo-400 to-blue-600",
    emoji: "💻",
  },
  {
    title: "Ongoing Support",
    description: "Regular visits, audits, and continuous guidance from head office.",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    emoji: "🤝",
  },
];

export default function FranchiseBenefits() {
  return (
    <section className="relative w-full bg-gradient-to-b from-violet-50/50 to-white py-16 md:py-24 overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-5 py-2.5 mb-5 border border-amber-200"
          >
            <span className="text-lg">🎁</span>
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
              What You Get
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Complete{" "}
            <span className="text-amber-500">Franchise Kit</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to start and run a successful preschool — all in one package.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-[2rem] p-6 shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-violet-200 transition-all duration-300 h-full text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-xl"
                  >
                    {benefit.emoji}
                  </motion.div>
                </motion.div>

                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 group-hover:text-violet-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}