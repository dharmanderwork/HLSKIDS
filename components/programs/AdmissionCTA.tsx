// app/programs/_sections/AdmissionCTA.tsx
"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, MapPin, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Limited batch sizes for personalized attention",
  "NEP 2020 aligned curriculum",
  "Trained & caring educators",
  "Safe, hygienic campus",
];

export default function AdmissionCTA() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FFF8E7 0%, #FEF3C7 50%, #FFF8E7 100%)",
          }}
        />
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-orange-200/20 blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-rose-200/20 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-amber-200/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2.5rem] shadow-2xl border-2 border-orange-100 overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-orange-400 via-rose-400 to-violet-400" />

          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 border-2 shadow-sm"
                  style={{ backgroundColor: "#FEF3C7", borderColor: "#FDE68A" }}
                >
                  <Calendar className="w-4 h-4" style={{ color: "#F97316" }} />
                  <span className="text-sm font-bold uppercase tracking-wider" style={{ color: "#F97316" }}>
                    Admissions Open
                  </span>
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4 leading-tight">
                  Give Your Child the{" "}
                  <span style={{ color: "#F97316" }}>Best Start</span>
                </h2>

                <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                  Enroll now for the upcoming academic year. Limited seats available across all programs.
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "#F97316" }} />
                      <span className="text-gray-700 text-sm md:text-base font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.a
                    href="tel:+919876543210"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: "#F97316" }}
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold border-2 shadow-sm hover:shadow-md transition-all"
                    style={{ borderColor: "#F97316", color: "#F97316" }}
                  >
                    <MapPin className="w-5 h-5" />
                    Visit Campus
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Right - Decorative Stats */}
              <div className="lg:w-80 shrink-0">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "500+", label: "Happy Students" },
                    { value: "50+", label: "Expert Teachers" },
                    { value: "15+", label: "Years Experience" },
                    { value: "100%", label: "Safe Campus" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-5 text-center hover:border-orange-300 transition-colors"
                    >
                      <div
                        className="text-2xl md:text-3xl font-extrabold font-heading mb-1"
                        style={{ color: "#F97316" }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-xs font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}