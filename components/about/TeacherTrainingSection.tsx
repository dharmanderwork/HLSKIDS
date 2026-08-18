"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Brain,
  Heart,
  ShieldCheck,
  Users,
  ArrowUpRight,
} from "lucide-react";

const partners = [
  {
    type: "Curriculum Partner",
    name: "SmartK Learning",
    description:
      "India's leading early childhood curriculum expert, helping us deliver a structured, engaging and age-appropriate learning experience for young children.",
    icon: BookOpen,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    type: "Teacher Training Partner",
    name: "S. Chand Group",
    description:
      "A trusted education company empowering teachers through professional training, helping educators become well-trained, experienced and caring professionals.",
    icon: GraduationCap,
    color: "from-orange-400 to-pink-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
];

const benefits = [
  {
    title: "Proven Curriculum",
    description:
      "A thoughtfully designed curriculum that prepares children for confident and joyful learning.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Trained & Certified Teachers",
    description:
      "Well-trained, experienced and caring educators equipped to understand every child's needs.",
    icon: GraduationCap,
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "Holistic Child Development",
    description:
      "A balanced focus on cognitive, social, emotional and physical development.",
    icon: Brain,
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "Strong Partnerships",
    description:
      "Strong educational partnerships that help us create a better future for every child.",
    icon: Users,
    color: "from-purple-400 to-indigo-500",
  },
];

export default function TeacherTrainingSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-emerald-50/20 to-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-40 before:bg-contain before:bg-repeat" />

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-16 left-[5%] text-5xl hidden lg:block"
      >
        📚
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="absolute bottom-20 right-[6%] text-4xl hidden lg:block"
      >
        🌱
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🎓</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              Teacher Training & Curriculum
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Learning Backed by{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              Strong Partners
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            At HLS KIDS, quality education begins with a strong curriculum and
            well-trained educators. Our partnerships help us create meaningful,
            joyful and holistic learning experiences for every child.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.name}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div
                  className={`relative h-full ${partner.bgColor} border-2 ${partner.borderColor} rounded-[2.5rem] p-7 md:p-9 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Decorative Blob */}
                  <div
                    className={`absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br ${partner.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                  />

                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    {/* Icon / Logo Placeholder */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className={`flex-shrink-0 w-28 h-28 rounded-[2rem] bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-xl border-4 border-white`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-3 py-1.5 mb-3 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          {partner.type}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 font-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-sky-500 transition-all">
                        {partner.name}
                      </h3>

                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r ${partner.color} rounded-full opacity-30 group-hover:opacity-70 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 font-heading">
            What This Means for{" "}
            <span className="text-emerald-500">Your Child</span>
          </h3>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="relative h-full bg-white border-2 border-gray-100 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h4 className="text-lg font-bold text-gray-800 font-heading mb-2">
                    {benefit.title}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  <div
                    className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 rounded-[2rem] p-7 md:p-9 text-center overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-white/5" />

            <div className="relative z-10">
              <Heart className="w-8 h-8 text-white mx-auto mb-3" />

              <p className="text-white text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                When great curriculum meets great teachers, children get the
                confidence, care and learning environment they need to thrive.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-white/80 text-sm font-semibold">
                <span>Building better beginnings</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}