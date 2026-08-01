"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-500 to-orange-400" />
       <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-90 before:bg-cover  before:bg-no-repeat"></div>
      {/* Background Gradient */}

      {/* Decorative Circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"
      />

      {/* Floating Emojis */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-[10%] text-4xl hidden lg:block"
      >
        🎓
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-[15%] text-4xl hidden lg:block"
      >
        🌟
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         {/* <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-3.png')] before:opacity-90 before:bg-contain  before:bg-repeat"></div> */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading mb-4">
              Ready to Start Your Child's{" "}
              <span className="text-yellow-300">Learning Journey?</span>
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Join thousands of happy parents who trust HLS KIDS for their child's early education. Admissions open for 2024-25!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              
              <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2"
              >
                Admission Enquiry
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              </Link>
              
              <Link href="/franchise">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-full shadow-lg hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                Start a Franchise
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60">Call Us</p>
                  <p className="font-bold">+91 78455 56827</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60">Email</p>
                  <p className="font-bold">info@hlskids.in</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60">Visit Us</p>
                  <p className="font-bold">Kanpur & Greater Noida</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}