"use client";

import { motion } from "framer-motion";
import { Check, X, Star, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Standard",
    icon: Star,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "⭐",
    price: "₹35,000",
    period: "per year",
    description: "Perfect for getting started with quality education",
    features: [
      { text: "All Program Activities", included: true },
      { text: "Learning Materials", included: true },
      { text: "Annual Events", included: true },
      { text: "Progress Reports", included: true },
      { text: "Transportation", included: false },
      { text: "Extended Daycare", included: false },
      { text: "Special Workshops", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    icon: Zap,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    emoji: "⚡",
    price: "₹50,000",
    period: "per year",
    description: "Most popular choice with added benefits",
    features: [
      { text: "All Program Activities", included: true },
      { text: "Learning Materials", included: true },
      { text: "Annual Events", included: true },
      { text: "Progress Reports", included: true },
      { text: "Transportation", included: true },
      { text: "Extended Daycare", included: true },
      { text: "Special Workshops", included: false },
    ],
    popular: true,
  },
  {
    name: "Elite",
    icon: Crown,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    emoji: "👑",
    price: "₹65,000",
    period: "per year",
    description: "Complete package with exclusive perks",
    features: [
      { text: "All Program Activities", included: true },
      { text: "Learning Materials", included: true },
      { text: "Annual Events", included: true },
      { text: "Progress Reports", included: true },
      { text: "Transportation", included: true },
      { text: "Extended Daycare", included: true },
      { text: "Special Workshops", included: true },
    ],
    popular: false,
  },
];

export default function AdmissionFees() {
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
            className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-5 py-2.5 mb-5 border border-purple-200"
          >
            <span className="text-lg">💰</span>
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">
              Fee Structure
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Transparent &{" "}
            <span className="text-purple-500">Affordable</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your needs. No hidden charges, complete transparency.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div className={`relative ${plan.bgColor} border-2 ${plan.borderColor} rounded-[2.5rem] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${plan.popular ? "ring-4 ring-amber-200/50" : ""}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg mb-5`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Emoji */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 right-6 text-2xl"
                >
                  {plan.emoji}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 font-heading text-center mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-5">{plan.description}</p>

                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-gray-400" />
                        </div>
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3.5 bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-shadow`}
                >
                  Choose {plan.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            * Registration fee of ₹5,000 applicable for all plans. Annual charges may vary based on program selected.
            <br />
            Contact us for detailed fee breakdown and payment options.
          </p>
        </motion.div>
      </div>
    </section>
  );
}