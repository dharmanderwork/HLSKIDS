"use client";

import { motion } from "framer-motion";
import { Wallet, TrendingUp, Clock, MapPin, Building2, Users } from "lucide-react";

const breakdown = [
  { item: "Franchise Fee", amount: "₹3,00,000", icon: Wallet, color: "text-violet-600", bg: "bg-violet-50" },
  { item: "Infrastructure Setup", amount: "₹5,00,000", icon: Building2, color: "text-blue-600", bg: "bg-blue-50" },
  { item: "Furniture & Equipment", amount: "₹3,00,000", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
  { item: "Marketing & Launch", amount: "₹1,50,000", icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
  { item: "Working Capital", amount: "₹2,00,000", icon: TrendingUp, color: "text-rose-600", bg: "bg-rose-50" },
  { item: "Miscellaneous", amount: "₹50,000", icon: Clock, color: "text-cyan-600", bg: "bg-cyan-50" },
];

export default function FranchiseInvestment() {
  return (
    <section className="relative w-full bg-gradient-to-b from-amber-50/30 to-white py-16 md:py-24 overflow-hidden">
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left - Investment Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-rose-50 rounded-full px-5 py-2.5 mb-5 border border-rose-200"
            >
              <span className="text-lg">💰</span>
              <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">
                Investment Breakdown
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading mb-6">
              Total Investment:{" "}
              <span className="text-rose-500">₹14.5 Lakhs</span>
            </h2>

            <div className="space-y-4">
              {breakdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">{item.item}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{item.amount}</p>
                </motion.div>
              ))}
            </div>

            {/* Total */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl p-5 text-white text-center"
            >
              <p className="text-sm opacity-90">Total Initial Investment</p>
              <p className="text-3xl font-extrabold">₹14,50,000</p>
              <p className="text-xs opacity-75 mt-1">*Excluding property cost</p>
            </motion.div>
          </motion.div>

          {/* Right - Returns & Space */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border-2 border-gray-100 h-full">
              <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">
                Expected Returns
              </h3>

              {/* ROI Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                  <p className="text-3xl font-extrabold text-emerald-600">40-60%</p>
                  <p className="text-sm text-gray-600 mt-1">ROI from Year 2</p>
                </div>
                <div className="bg-sky-50 rounded-xl p-5 text-center border border-sky-100">
                  <p className="text-3xl font-extrabold text-sky-600">18-24</p>
                  <p className="text-sm text-gray-600 mt-1">Months Break-even</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-100">
                  <p className="text-3xl font-extrabold text-amber-600">₹3-5L</p>
                  <p className="text-sm text-gray-600 mt-1">Monthly Revenue</p>
                </div>
                <div className="bg-rose-50 rounded-xl p-5 text-center border border-rose-100">
                  <p className="text-3xl font-extrabold text-rose-600">60-80</p>
                  <p className="text-sm text-gray-600 mt-1">Students Capacity</p>
                </div>
              </div>

              {/* Space Requirements */}
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">
                Space Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-violet-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Minimum Area</p>
                    <p className="text-xs text-gray-500">2000-3000 sq. ft. (Ground floor preferred)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <Building2 className="w-5 h-5 text-violet-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Location</p>
                    <p className="text-xs text-gray-500">Residential area with good visibility & parking</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                  <Users className="w-5 h-5 text-violet-500" />
                  <div>
                    <p className="text-sm font-bold text-gray-800">Target Market</p>
                    <p className="text-xs text-gray-500">Families with children aged 2-6 years</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}