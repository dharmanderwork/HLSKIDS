"use client";

import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Paintbrush, 
  UserPlus, 
  Rocket, 
  BarChart, 
  Headphones 
} from "lucide-react";

const phases = [
  {
    phase: "Pre-Launch",
    title: "Setup Phase",
    duration: "Month 1-2",
    items: [
      "Location feasibility study",
      "Interior design & layout",
      "Legal documentation",
      "Recruitment assistance",
    ],
    icon: ClipboardList,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    emoji: "🚀",
  },
  {
    phase: "Launch",
    title: "Opening Phase",
    duration: "Month 3",
    items: [
      "Teacher training program",
      "Marketing campaign",
      "Admission drive",
      "Soft launch events",
    ],
    icon: Rocket,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    emoji: "🎉",
  },
  {
    phase: "Post-Launch",
    title: "Growth Phase",
    duration: "Month 4+",
    items: [
      "Regular audits & visits",
      "Enrollment strategies",
      "Parent engagement",
      "Quality assurance",
    ],
    icon: BarChart,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    emoji: "📈",
  },
];

export default function FranchiseSupport() {
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
            className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🤝</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              Hand-Holding Support
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Support at Every{" "}
            <span className="text-emerald-500">Step</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From day one to daily operations — we're with you throughout your journey.
          </p>
        </motion.div>

        {/* Support Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`relative ${phase.bgColor} border-2 border-gray-100 hover:border-emerald-200 rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full`}>
                {/* Phase Badge */}
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${phase.color} text-white rounded-full px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-wider`}>
                  <phase.icon className="w-4 h-4" />
                  {phase.phase}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-gray-500 mb-5">{phase.duration}</p>

                {/* Items */}
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Emoji */}
                {/* <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 text-3xl"
                >
                  {phase.emoji}
                </motion.div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { icon: Paintbrush, title: "Design Support", desc: "Interior & exterior design guidance", color: "from-pink-400 to-rose-500", emoji: "🎨" },
            { icon: UserPlus, title: "Recruitment", desc: "Help hiring qualified teachers & staff", color: "from-violet-400 to-purple-500", emoji: "👥" },
            { icon: Headphones, title: "24/7 Helpline", desc: "Round-the-clock support for queries", color: "from-cyan-400 to-teal-500", emoji: "📞" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[1.5rem] p-6 shadow-md border-2 border-gray-100 hover:border-emerald-200 transition-all text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-3`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}