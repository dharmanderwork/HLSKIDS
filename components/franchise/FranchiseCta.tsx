"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function FranchiseCta() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background with Pattern */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: "url(/pattern-3.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-[10%] text-5xl hidden lg:block"
      >
        🚀
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-[10%] text-5xl hidden lg:block"
      >
        💼
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-4">
            Your Entrepreneurial{" "}
            <span className="text-yellow-300">Journey</span>{" "}
            Starts Here!
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Don't miss this opportunity to build a successful business while making a positive impact on children's lives. Limited franchise slots available!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-violet-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.button>
            <motion.a
              href="tel:+919320063100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-full shadow-lg hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Franchise Team
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/80">
            <div>Franchise Helpline: +91 93200 63100</div>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full" />
            <div>Email: franchise@hlskids.in</div>
            <div className="hidden md:block w-1 h-1 bg-white/50 rounded-full" />
            <div>Available: Mon-Sat, 10AM-6PM</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}