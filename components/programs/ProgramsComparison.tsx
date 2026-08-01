// app/programs/_sections/ProgramsComparison.tsx
"use client";

import { motion } from "framer-motion";
import { Check, X, Baby, BookOpen, Star, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    name: "Play Group",
    icon: Baby,
    age: "2 - 3 Years",
    duration: "3 Hours",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    features: {
      "Sensorial Activities": true,
      "Motor Skills": true,
      "Social Play": true,
      "Rhymes & Songs": true,
      "Phonics Intro": false,
      "Number Concepts": false,
      "Reading Readiness": false,
      "Writing Practice": false,
      "STEM Activities": false,
      "Computer Basics": false,
      "Leadership Tasks": false,
      "School Prep": false,
    },
  },
  {
    name: "Nursery",
    icon: BookOpen,
    age: "3 - 4 Years",
    duration: "3 Hours",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    features: {
      "Sensorial Activities": true,
      "Motor Skills": true,
      "Social Play": true,
      "Rhymes & Songs": true,
      "Phonics Intro": true,
      "Number Concepts": true,
      "Reading Readiness": false,
      "Writing Practice": false,
      "STEM Activities": false,
      "Computer Basics": false,
      "Leadership Tasks": false,
      "School Prep": false,
    },
  },
  {
    name: "Junior KG",
    icon: Star,
    age: "4 - 5 Years",
    duration: "4 Hours",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: {
      "Sensorial Activities": true,
      "Motor Skills": true,
      "Social Play": true,
      "Rhymes & Songs": true,
      "Phonics Intro": true,
      "Number Concepts": true,
      "Reading Readiness": true,
      "Writing Practice": true,
      "STEM Activities": true,
      "Computer Basics": false,
      "Leadership Tasks": false,
      "School Prep": false,
    },
  },
  {
    name: "Senior KG",
    icon: GraduationCap,
    age: "5 - 6 Years",
    duration: "4 Hours",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    features: {
      "Sensorial Activities": true,
      "Motor Skills": true,
      "Social Play": true,
      "Rhymes & Songs": true,
      "Phonics Intro": true,
      "Number Concepts": true,
      "Reading Readiness": true,
      "Writing Practice": true,
      "STEM Activities": true,
      "Computer Basics": true,
      "Leadership Tasks": true,
      "School Prep": true,
    },
  },
];

const featureList = [
  "Sensorial Activities",
  "Motor Skills",
  "Social Play",
  "Rhymes & Songs",
  "Phonics Intro",
  "Number Concepts",
  "Reading Readiness",
  "Writing Practice",
  "STEM Activities",
  "Computer Basics",
  "Leadership Tasks",
  "School Prep",
];

export default function ProgramsComparison() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden" style={{ backgroundColor: "#FEF3C7" }}>
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
            style={{ backgroundColor: "#FFF8E7", borderColor: "#FDE68A" }}
          >
            <GraduationCap className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Compare Programs
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Find the Perfect{" "}
            <span style={{ color: "#F97316" }}>Fit</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Compare our programs side-by-side to choose the right stage for your child's learning journey.
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block overflow-x-auto"
        >
          <div className="bg-white rounded-[2rem] shadow-xl border-2 border-orange-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-0">
              <div className="p-6 bg-orange-50 border-b-2 border-orange-100 flex items-end">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Features
                </span>
              </div>
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`p-6 ${program.bgColor} border-b-2 ${program.borderColor} text-center`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-md mx-auto mb-3`}
                  >
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 font-heading">
                    {program.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{program.age}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "#F97316" }}>
                    {program.duration}/day
                  </p>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            {featureList.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className={`grid grid-cols-5 gap-0 ${
                  featureIndex % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <div className="p-4 px-6 border-r border-orange-100 flex items-center">
                  <span className="text-sm font-semibold text-gray-700">{feature}</span>
                </div>
                {programs.map((program, programIndex) => (
                  <div
                    key={programIndex}
                    className={`p-4 text-center border-r ${program.borderColor} last:border-r-0 flex items-center justify-center`}
                  >
                    {program.features[feature as keyof typeof program.features] ? (
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center shadow-sm`}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-gray-300" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-5 gap-0 border-t-2 border-orange-100">
              <div className="p-6 bg-orange-50 flex items-center">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Action
                </span>
              </div>
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`p-6 ${program.bgColor} text-center`}
                >
                  <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md hover:shadow-lg transition-all bg-gradient-to-r ${program.color}`}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] shadow-lg border-2 border-orange-100 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`${program.bgColor} p-6 border-b-2 ${program.borderColor}`}>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center shadow-md`}
                  >
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 font-heading">
                      {program.name}
                    </h3>
                    <p className="text-sm text-gray-500">{program.age} • {program.duration}/day</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {featureList.map((feature, fIndex) => {
                    const hasFeature = program.features[feature as keyof typeof program.features];
                    return (
                      <div
                        key={fIndex}
                        className={`flex items-center gap-2 p-2 rounded-xl ${
                          hasFeature ? "bg-green-50" : "bg-gray-50"
                        }`}
                      >
                        {hasFeature ? (
                          <Check className="w-4 h-4 text-green-500 shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 shrink-0" />
                        )}
                        <span className={`text-xs font-medium ${hasFeature ? "text-gray-700" : "text-gray-400"}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-3 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg transition-all bg-gradient-to-r ${program.color} flex items-center justify-center gap-2`}
                >
                  Enroll in {program.name}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}