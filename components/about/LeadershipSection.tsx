"use client";

import { motion } from "framer-motion";
import { Quote, Award, BookOpen, PenTool, MapPin } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Rajkumar Sachan 'Hori'",
    role: "Chairman & Director",
    company: "HLS Education Pvt Ltd & HLS KIDS",
    additional: [
      "Manager and Founder - HLS Intercollege Ghatampur Kanpur Nagar (Since 2000)",
      "Ex Officer UP PCS",
      "Famous Hindi Poet and Writer",
      "Founder President AUAA (Allahabad University Alumni Association)",
      "Educationist",
    ],
    image: "/images/OWNER1.png",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    icon: Award,
  },
  {
    name: "Snehal Sachan",
    role: "Director",
    company: "HLS Education Pvt Ltd & HLS KIDS",
    additional: [
      "Postgraduate in Marketing Communication",
      "Bachelor’s in Journalism & Mass Communication",
      "Specializes in branding, marketing communication and digital outreach.",
      "Driving innovation in early childhood education",
      "Works towards building strong parent engagement and enhancing the HLS Kids experience."
    ],
    image: "/images/OWNER2.jpg",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    icon: BookOpen,
  },
];

export default function LeadershipSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-purple-50/30 to-white py-16 md:py-24 overflow-hidden">
       <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-70 before:bg-contain  before:bg-repeat"></div>
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-[5%] text-5xl hidden lg:block"
      >
        🏆
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 left-[8%] text-4xl hidden lg:block"
      >
        📖
      </motion.div>

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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-5 py-2.5 mb-5 border border-purple-200"
          >
            <span className="text-lg">👑</span>
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
              Our Leadership
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Dedicated leaders with decades of experience in education, committed to shaping the future of early childhood learning.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div
                className={`relative flex flex-col md:flex-row gap-6 ${leader.bgColor} border-2 ${leader.borderColor} rounded-[2.5rem] p-6 md:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background decoration */}
                <div
                  className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${leader.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
                />

                {/* Image Side */}
                <div className="relative w-full md:w-2/5 flex-shrink-0">
                  <div className="relative h-64 md:h-full min-h-[280px] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${leader.color} opacity-20`}
                    />

                    {/* Role Badge */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 bg-gradient-to-r ${leader.color} text-white rounded-xl px-4 py-2 text-center shadow-lg`}
                    >
                      <p className="text-xs font-bold uppercase tracking-wider">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${leader.color} flex items-center justify-center shadow-md`}
                    >
                      <leader.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    {/* <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl"
                    >
                      {leader.emoji}
                    </motion.div> */}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 font-heading mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 mb-4">
                    {leader.company}
                  </p>

                  {/* Quote decoration */}
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                    <div className="pl-6 border-l-2 border-gray-200">
                      <ul className="space-y-2">
                        {leader.additional.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${leader.color} mt-2 flex-shrink-0`}
                            />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Decorative pen for poet */}
                  {leader.name.includes("Hori") && (
                    <motion.div
                      animate={{ rotate: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="flex items-center gap-2 text-purple-600"
                    >
                      <PenTool className="w-4 h-4" />
                      <span className="text-xs font-bold">Hindi Poet & Writer</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Office Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                  <span className="text-lg">🏢</span>
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wider">
                    Corporate Office
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-2">
                  HLS Education Pvt Ltd
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  NX ONE Tower 2, Floor UG, A-016, Tech Zone 4, Greater Noida West,
                  <br className="hidden md:block" />
                  Gautam Buddha Nagar, Uttar Pradesh 201306
                </p>
              </div>

              <motion.a
                href= "https://share.google/ffVs0RBn4eLMTp2p2"
                  target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 px-8 py-3.5 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 "
              >
                Get Directions <MapPin  className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}