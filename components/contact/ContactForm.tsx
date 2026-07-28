"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare, Building, Baby } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  const inputClasses = "w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 bg-white focus:border-rose-400 focus:ring-4 focus:ring-rose-100 outline-none transition-all text-gray-700 placeholder-gray-400";
  const labelClasses = "flex items-center gap-2 text-sm font-bold text-gray-700 mb-2";

  return (
    <section className="relative w-full bg-gradient-to-b from-rose-50/50 to-white py-16 md:py-24 overflow-hidden">
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
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-rose-50 rounded-full px-5 py-2.5 mb-5 border border-rose-200"
            >
              <span className="text-lg">📝</span>
              <span className="text-sm font-bold text-rose-600 uppercase tracking-wider">
                Admission Enquiry
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading mb-4">
              Send Us a{" "}
              <span className="text-rose-500">Message</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Fill out the form and our admissions team will reach out to you within 24 hours with all the information you need.
            </p>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                  <Baby className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Programs Available</p>
                  <p className="text-xs text-gray-500">Play Group to Senior KG</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  <Building className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Campus Locations</p>
                  <p className="text-xs text-gray-500">Kanpur & Greater Noida</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-2 border-gray-100"
            >
              {/* Decorative top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-rose-400 via-pink-500 to-orange-400 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Parent Name */}
                <div>
                  <label className={labelClasses}>
                    <User className="w-4 h-4 text-rose-500" />
                    Parent's Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClasses}>
                    <Mail className="w-4 h-4 text-rose-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={labelClasses}>
                    <Phone className="w-4 h-4 text-rose-500" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Child Name */}
                <div>
                  <label className={labelClasses}>
                    <Baby className="w-4 h-4 text-rose-500" />
                    Child's Name
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Enter child's name"
                    className={inputClasses}
                  />
                </div>

                {/* Child Age */}
                <div>
                  <label className={labelClasses}>
                    <span className="text-rose-500 text-sm">🎂</span>
                    Child's Age
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select Age</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                  </select>
                </div>

                {/* Program */}
                <div>
                  <label className={labelClasses}>
                    <Building className="w-4 h-4 text-rose-500" />
                    Interested Program *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="playgroup">Play Group (2-3 Years)</option>
                    <option value="nursery">Nursery (3-4 Years)</option>
                    <option value="junior-kg">Junior KG (4-5 Years)</option>
                    <option value="senior-kg">Senior KG (5-6 Years)</option>
                    <option value="daycare">Daycare</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className={labelClasses}>
                  <MessageSquare className="w-4 h-4 text-rose-500" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </motion.button>

              <p className="text-center text-xs text-gray-400 mt-4">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}