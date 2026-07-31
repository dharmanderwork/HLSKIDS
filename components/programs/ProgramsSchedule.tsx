// app/programs/_sections/DailySchedule.tsx
"use client";

import { motion } from "framer-motion";
import { Clock, Sun, BookOpen, Utensils, Gamepad2, Moon } from "lucide-react";

const schedule = [
  {
    time: "8:30 AM",
    title: "Morning Arrival",
    description: "Warm welcome, free play, and settling in activities.",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    time: "9:00 AM",
    title: "Circle Time",
    description: "Songs, rhymes, calendar, and discussion of the day's theme.",
    icon: BookOpen,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    time: "9:30 AM",
    title: "Learning Centers",
    description: "Rotating through literacy, math, science, and art stations.",
    icon: BookOpen,
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    time: "11:00 AM",
    title: "Snack Break",
    description: "Healthy, nutritious snacks and social mealtime etiquette.",
    icon: Utensils,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    time: "11:30 AM",
    title: "Outdoor Play",
    description: "Physical activities, games, and nature exploration.",
    icon: Gamepad2,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    time: "12:30 PM",
    title: "Wind Down & Dismissal",
    description: "Story time, reflection, and preparation for home.",
    icon: Moon,
    color: "from-indigo-400 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
];

export default function DailySchedule() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
            <Clock className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Daily Routine
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            A Day at{" "}
            <span style={{ color: "#F97316" }}>HLS Kids</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A balanced day of learning, play, and rest designed to keep young minds engaged and happy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 via-rose-300 to-violet-300 md:-translate-x-px" />

          {schedule.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-400 md:-translate-x-1/2 z-10 mt-6 shadow-md" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`${item.bgColor} border-2 ${item.borderColor} rounded-[1.5rem] p-5 md:p-6 hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md shrink-0`}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{ backgroundColor: "#FEF3C7", color: "#F97316" }}
                      >
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900 font-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}