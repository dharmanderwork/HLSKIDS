"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";

const locations = [
  {
    name: "HLS KIDS - Kanpur",
    address: "HLS Intercollege Campus, DEVMANPUR, Ghatampur, Kanpur Nagar, Uttar Pradesh",
    phone: "+91 78455 56827",
    type: "Main Campus",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    emoji: "🏫",
  },
  {
    name: "HLS Education Pvt Ltd",
    address: "NX ONE Tower 2, Floor UG, A-016, Tech Zone 4, Greater Noida West, Gautam Buddha Nagar, UP 201306",
    phone: "+91 78455 56827",
    type: "Corporate Office",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    emoji: "🏢",
  },
];

export default function ContactMap() {
  return (
    <section id="map" className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
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
            className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-5 py-2.5 mb-5 border border-emerald-200"
          >
            <span className="text-lg">🗺️</span>
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">
              Find Us
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Our{" "}
            <span className="text-emerald-500">Locations</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Visit us at any of our campuses. We'd love to show you around!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4764399185!2d80.2784!3d26.5126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMwJzQ1LjQiTiA4MMKwMTYnNDIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-bold text-gray-700">Live Location</span>
            </div>
          </motion.div>

          {/* Location Cards */}
          <div className="flex flex-col gap-6">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`relative ${loc.bgColor} border-2 ${loc.borderColor} rounded-[2rem] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {/* Type Badge */}
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${loc.color} text-white rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider`}>
                    <span>{loc.emoji}</span>
                    {loc.type}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-heading mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all">
                    {loc.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${loc.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pt-1">
                        {loc.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${loc.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-gray-700 font-bold text-sm hover:text-rose-500 transition-colors pt-1">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Get Directions */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-5 w-full py-3 bg-gradient-to-r ${loc.color} text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2`}
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}