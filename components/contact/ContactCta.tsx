"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight } from "lucide-react";

export default function ContactCta() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-[10%] text-5xl hidden lg:block"
      >
        🎓
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-[10%] text-5xl hidden lg:block"
      >
        🌟
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
            Still Have{" "}
            <span className="text-yellow-300">Questions?</span>
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Our admissions team is just a call away. Schedule a free consultation or campus visit today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-rose-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
            </motion.button>
            <motion.a
              href="tel:+917303729955"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/20 text-white font-bold text-lg rounded-full shadow-lg hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}