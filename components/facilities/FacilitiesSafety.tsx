"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Fingerprint, Siren } from "lucide-react";

const safetyMeasures = [
  {
    title: "24/7 CCTV Monitoring",
    description: "High-definition cameras covering every corner of the campus with live monitoring.",
    icon: Eye,
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Biometric Access",
    description: "Fingerprint-based entry system ensuring only authorized personnel can enter.",
    icon: Fingerprint,
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Trained Security Staff",
    description: "Professional security guards trained in child safety protocols and emergency response.",
    icon: ShieldCheck,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Emergency Protocols",
    description: "Regular fire drills, first-aid training, and tie-ups with nearby hospitals.",
    icon: Siren,
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
  },
];

export default function FacilitiesSafety() {
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
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-red-50 rounded-full px-5 py-2.5 mb-5 border border-red-200"
          >
            <span className="text-lg">🛡️</span>
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
              Safety First
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Your Child's{" "}
            <span className="text-red-500">Safety</span>{" "}
            is Our unoptimized
          </h2>
        </motion.div>

        {/* Safety Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {safetyMeasures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`relative flex items-start gap-5 ${item.bgColor} border-2 border-gray-100 hover:border-red-200 rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 font-heading group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    {/* <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xl"
                    >
                      {item.emoji}
                    </motion.div> */}
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${item.color} opacity-10 rounded-tl-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}