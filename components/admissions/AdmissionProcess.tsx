"use client";

import { motion } from "framer-motion";
import { FileText, Phone, ClipboardCheck, Calendar, BookOpen, PartyPopper } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Fill Enquiry Form",
    description: "Complete the online admission enquiry form with your child's details and your contact information.",
    icon: FileText,
    color: "from-rose-400 to-pink-500",
    emoji: "📝",
  },
  {
    step: "02",
    title: "Counseling Call",
    description: "Our admissions counselor will call you to understand your requirements and answer all your questions.",
    icon: Phone,
    color: "from-sky-400 to-blue-500",
    emoji: "📞",
  },
  {
    step: "03",
    title: "Campus Visit",
    description: "Schedule a campus tour to see our facilities, meet teachers, and experience the HLS KIDS environment.",
    icon: Calendar,
    color: "from-amber-400 to-orange-500",
    emoji: "🏫",
  },
  {
    step: "04",
    title: "Application Form",
    description: "Submit the completed application form along with required documents (birth certificate, photos, etc.).",
    icon: ClipboardCheck,
    color: "from-emerald-400 to-green-500",
    emoji: "📋",
  },
  {
    step: "05",
    title: "Assessment",
    description: "A friendly interaction session with the child to understand their readiness and place them in the right program.",
    icon: BookOpen,
    color: "from-purple-400 to-violet-500",
    emoji: "🎯",
  },
  {
    step: "06",
    title: "Welcome Aboard!",
    description: "Pay the admission fee, collect your welcome kit, and get ready for an amazing learning journey!",
    icon: PartyPopper,
    color: "from-pink-400 to-rose-500",
    emoji: "🎉",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50/50 to-white py-16 md:py-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🚀</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              Simple Steps
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Admission{" "}
            <span className="text-emerald-500">Process</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Easy and hassle-free admission process. Follow these simple steps to enroll your child.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative bg-white border-2 border-gray-100 hover:border-emerald-200 rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full">
                  {/* Step Number */}
                  <div className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5`}>
                    <step.icon className="w-8 h-8 text-white" />
                    {/* Step Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                      {step.step}
                    </div>
                  </div>

                  {/* Emoji */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-6 right-6 text-2xl"
                  >
                    {step.emoji}
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}