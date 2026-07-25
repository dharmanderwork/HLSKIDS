"use client";

import { motion } from "framer-motion";
import { Calendar, School, Award, Users, Building2 } from "lucide-react";

const milestones = [
  {
    year: "2000",
    title: "HLS Intercollege Founded",
    description:
      "Rajkumar Sachan 'Hori' established HLS Intercollege in DEVMANPUR, Ghatampur, Kanpur Nagar — a Residential College that became a beacon of quality education in Uttar Pradesh.",
    icon: Building2,
    color: "from-purple-400 to-indigo-500",
    side: "left",
  },
  {
    year: "2008",
    title: "HLS KIDS Launched",
    description:
      "Expanding the legacy of excellence into early childhood education, HLS KIDS was born with a vision to nurture young minds from their very first steps.",
    icon: School,
    color: "from-orange-400 to-pink-500",
    side: "right",
  },
  {
    year: "2015",
    title: "Curriculum Innovation",
    description:
      "Introduced play-based learning methodologies and structured foundational programs aligned with modern educational standards.",
    icon: Award,
    color: "from-sky-400 to-blue-500",
    side: "left",
  },
  {
    year: "2020",
    title: "NEP 2020 Alignment",
    description:
      "Seamlessly integrated the National Education Policy 2020 guidelines, ensuring our programs meet the highest national standards.",
    icon: Calendar,
    color: "from-emerald-400 to-green-500",
    side: "right",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description:
      "Embraced technology-enabled learning with smart classrooms, parent apps, and interactive digital content for enhanced early education.",
    icon: Users,
    color: "from-amber-400 to-orange-500",
    side: "left",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full px-5 py-2.5 mb-5 border border-amber-200"
          >
            <span className="text-lg">📅</span>
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">
              Our Journey
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            A Legacy of{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 rounded-full hidden md:block transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:flex md:items-center ${
                  milestone.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } mb-12 md:mb-16`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative bg-white rounded-[2rem] p-6 md:p-8 shadow-lg border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 ${
                      milestone.side === "left" ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${milestone.color} text-white rounded-full px-4 py-2 mb-4 shadow-md`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-bold">{milestone.year}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-heading mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Decorative corner */}
                    <div
                      className={`absolute ${
                        milestone.side === "left" ? "-bottom-2 -right-2" : "-bottom-2 -left-2"
                      } w-12 h-12 bg-gradient-to-br ${milestone.color} opacity-20 rounded-full blur-xl`}
                    />
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-xl border-4 border-white`}
                  >
                    <milestone.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}