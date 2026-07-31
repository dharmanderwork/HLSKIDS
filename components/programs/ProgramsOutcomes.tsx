// app/programs/_sections/ProgramsOutcomes.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Brain, Heart, Users, MessageCircle, Lightbulb, ShieldCheck, Rocket } from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "Cognitive Excellence",
    description: "Strong foundation in literacy, numeracy, and problem-solving skills.",
    metric: "95%",
    metricLabel: "School Readiness",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Self-regulation, empathy, and resilience through guided social-emotional learning.",
    metric: "100%",
    metricLabel: "Confidence Boost",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    icon: Users,
    title: "Social Competence",
    description: "Teamwork, leadership, and effective communication with peers and adults.",
    metric: "90%",
    metricLabel: "Peer Collaboration",
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description: "Fluent expression in multiple languages with strong listening and speaking abilities.",
    metric: "98%",
    metricLabel: "Language Fluency",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Innovative problem-solving and artistic expression across all mediums.",
    metric: "92%",
    metricLabel: "Creative Output",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    icon: ShieldCheck,
    title: "Physical Development",
    description: "Fine and gross motor skills, coordination, and healthy lifestyle habits.",
    metric: "96%",
    metricLabel: "Motor Skills",
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
  },
  {
    icon: Rocket,
    title: "School Readiness",
    description: "Seamless transition to primary school with academic and social preparedness.",
    metric: "99%",
    metricLabel: "Transition Success",
    color: "from-indigo-400 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    icon: Target,
    title: "Holistic Growth",
    description: "Balanced development across all domains — mind, body, heart, and spirit.",
    metric: "97%",
    metricLabel: "Overall Growth",
    color: "from-lime-400 to-green-600",
    bgColor: "bg-lime-50",
    borderColor: "border-lime-200",
  },
];

export default function ProgramsOutcomes() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
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
            style={{ backgroundColor: "#FEF3C7", borderColor: "#FDE68A" }}
          >
            <Target className="w-4 h-4" style={{ color: "#F97316" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
              Proven Results
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Outcomes That{" "}
            <span style={{ color: "#F97316" }}>Matter</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Measurable growth across every dimension — see the difference HLS Kids makes in your child's journey.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div
                className={`relative ${outcome.bgColor} border-2 ${outcome.borderColor} rounded-[2rem] p-6 h-full hover:shadow-xl transition-all duration-300`}
              >
                {/* Metric Badge */}
                <div className="absolute -top-3 -right-3">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${outcome.color} flex flex-col items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform`}
                  >
                    <span className="text-white font-extrabold text-sm font-heading">
                      {outcome.metric}
                    </span>
                    <span className="text-white/80 text-[9px] font-medium text-center leading-tight px-1">
                      {outcome.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${outcome.color} flex items-center justify-center shadow-md mb-4`}
                >
                  <outcome.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-gray-900 font-heading mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}