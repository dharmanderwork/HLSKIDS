"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Headphones, Globe } from "lucide-react";

const contactCards = [
  {
    title: "Call Us",
    info: "+91 7303729955",
    subInfo: "Mon-Sat, 9AM - 6PM",
    icon: Phone,
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    emoji: "📞",
    href: "tel:+917303729955",
  },
  {
    title: "Email Us",
    info: "info@hlskids.in , kidshls103@gmail.com",
    subInfo: "We reply within 24 hours",
    icon: Mail,
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "📧",
    href: "mailto:info@hlskids.in , kidshls103@gmail.com",
  },
  {
    title: "Visit Us",
    info: "Kanpur & Greater Noida",
    subInfo: "Campus tours available",
    icon: MapPin,
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    emoji: "🏫",
    href: "#map",
  },
  {
    title: "Office Hours",
    info: "Monday - Saturday",
    subInfo: "9:00 AM - 6:00 PM",
    icon: Clock,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    emoji: "⏰",
    href: null,
  },
  {
    title: "Support",
    info: "Admission Helpline",
    subInfo: "+91 7303729955",
    icon: Headphones,
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    emoji: "🎧",
    href: "tel:+917303729955",
  },
  {
    title: "Website",
    info: "www.hlskids.in",
    subInfo: "Online resources & more",
    icon: Globe,
    color: "from-cyan-400 to-teal-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    emoji: "🌐",
    href: "https://hlskids.in",
  },
];

export default function ContactInfo() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Multiple Ways to{" "}
            <span className="text-rose-500">Connect</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose the most convenient way to reach us. We're always happy to help!
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className={`relative ${card.bgColor} border-2 ${card.borderColor} rounded-[2rem] p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full text-center`}
              >
                {/* Background blob */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg mb-5`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                  {/* <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 text-xl"
                  >
                    {card.emoji}
                  </motion.div> */}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 font-heading mb-1">
                  {card.title}
                </h3>
                <p className="text-xl font-extrabold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                  {card.info}
                </p>
                <p className="text-sm text-gray-500">{card.subInfo}</p>

                {/* CTA */}
                {card.href && (
                  <a
                    href={card.href}
                    className={`inline-flex items-center gap-1 mt-4 text-sm font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent hover:underline`}
                  >
                    Connect Now →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}