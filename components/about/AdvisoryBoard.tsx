"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  Award,
  BookOpen,
  Quote,
} from "lucide-react";

const advisors = [
  {
    name: "Prakash Chandra Sachan",
    qualification: "B.Tech, M.Tech — IIT Kanpur (First Batch)",
    highlights: [
      "Research Fellow at NEERI, Nagpur",
      "32 years of teaching experience at IIT BHU",
      "Experienced educator and academic mentor",
      "Currently engaged in social and educational service",
    ],
    initials: "PCS",
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-600",
    lightColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    name: "Dr. Rashmi Chandra",
    qualification: "M.Tech Biotechnology, PhD in 'Brain Building Nutrition'",
    highlights: [
      "21 years of teaching experience",
      "Former Head of Department at IMS Engineering College",
      "Expertise in Biotechnology and nutrition",
      "Passionate about education and holistic development",
    ],
    initials: "RC",
    icon: FlaskConical,
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
];

export default function AdvisoryBoard() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-sky-50/30 to-white py-16 md:py-24 overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-50 before:bg-contain before:bg-repeat" />

      {/* Decorative blobs */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-[5%] text-5xl hidden lg:block"
      >
        🎓
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 right-[7%] text-4xl hidden lg:block"
      >
        🌟
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-indigo-100 rounded-full px-5 py-2.5 mb-5 border border-sky-200"
          >
            <span className="text-lg">🧠</span>

            <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
              Board of Advisors
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Guided by{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience & Wisdom
            </span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Our Board of Advisors brings decades of academic, research and
            educational experience to guide HLS KIDS towards meaningful and
            holistic early childhood education.
          </p>
        </motion.div>

        {/* Advisors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {advisors.map((advisor, index) => {
            const AdvisorIcon = advisor.icon;

            return (
              <motion.div
                key={advisor.name}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div
                  className={`relative h-full ${advisor.lightColor} border-2 ${advisor.borderColor} rounded-[2.5rem] p-6 md:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br ${advisor.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Top Row */}
                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                    {/* Placeholder Avatar */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                        className={`w-32 h-32 md:w-36 md:h-36 rounded-[2rem] bg-gradient-to-br ${advisor.color} flex items-center justify-center shadow-xl border-4 border-white`}
                      >
                        <div className="text-center text-white">
                          <div className="text-3xl md:text-4xl font-extrabold tracking-wide">
                            {advisor.initials}
                          </div>

                          <div className="mt-1 text-[10px] uppercase tracking-widest font-bold opacity-80">
                            Advisor
                          </div>
                        </div>
                      </motion.div>

                      {/* Icon Badge */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${advisor.color} flex items-center justify-center border-4 border-white shadow-lg`}
                      >
                        <AdvisorIcon className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Name / Qualification */}
                    <div className="flex-1 text-center sm:text-left pt-1">
                      <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-3 py-1 mb-3 shadow-sm">
                        <Award className="w-3.5 h-3.5 text-amber-500" />

                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Board Advisor
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 font-heading leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 transition-all">
                        {advisor.name}
                      </h3>

                      <p className="text-sm md:text-base font-semibold text-gray-500 mt-2 leading-relaxed">
                        {advisor.qualification}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative z-10 my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                  {/* Experience */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-9 h-9 rounded-xl bg-gradient-to-br ${advisor.color} flex items-center justify-center shadow-md`}
                      >
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>

                      <h4 className="text-base font-bold text-gray-800">
                        Experience & Expertise
                      </h4>
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-1 w-8 h-8 text-gray-200" />

                      <ul className="pl-6 space-y-3">
                        {advisor.highlights.map((item, i) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + index * 0.1 + i * 0.08,
                            }}
                            className="flex items-start gap-3 text-sm md:text-base text-gray-600 leading-relaxed"
                          >
                            <span
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${advisor.color} mt-2 flex-shrink-0`}
                            />

                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-10 right-10 h-1 bg-gradient-to-r ${advisor.color} rounded-full opacity-30 group-hover:opacity-70 transition-opacity`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-md">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
              <span className="text-lg">💡</span>
            </div>

            <p className="text-sm md:text-base text-gray-600">
              <span className="font-bold text-gray-800">
                Academic guidance.
              </span>{" "}
              Inspiring better learning experiences for every child.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}