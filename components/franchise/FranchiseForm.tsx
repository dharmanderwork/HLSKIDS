"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MapPin, Building2, Briefcase, IndianRupee, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function FranchiseForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    investment: "",
    property: "",
    experience: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Thank you for your franchise enquiry! Our team will contact you within 24 hours.");
  // };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/franchise-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    const result = await response.text();

    if (result.trim() === "success") {
      alert(
        "Thank you for your franchise enquiry! Our team will contact you within 24 hours."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        investment: "",
        property: "",
        experience: "",
        message: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Unable to submit the form. Please try again.");
  }
};

  const inputClasses = "w-full px-5 py-3.5 rounded-xl border-2 border-gray-200 bg-white focus:border-violet-400 focus:ring-4 focus:ring-violet-100 outline-none transition-all text-gray-700 placeholder-gray-400";
  const labelClasses = "flex items-center gap-2 text-sm font-bold text-gray-700 mb-2";

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-violet-50 rounded-full px-5 py-2.5 mb-5 border border-violet-200"
            >
              <span className="text-lg">📝</span>
              <span className="text-sm font-bold text-violet-600 uppercase tracking-wider">
                Franchise Enquiry
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-heading mb-4">
              Ready to Start?{" "}
              <span className="text-violet-500">Apply Now!</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Fill out the form below and our franchise team will get in touch with you within 24 hours with all the details.
            </p>

            {/* Quick Benefits */}
            <div className="space-y-4">
              {[
                { icon: Briefcase, text: "Low investment, high returns", color: "bg-violet-100 text-violet-600" },
                { icon: Building2, text: "Complete setup support", color: "bg-emerald-100 text-emerald-600" },
                { icon: IndianRupee, text: "Transparent fee structure", color: "bg-amber-100 text-amber-600" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-gray-800">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8 p-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-[1.5rem] text-white">
              <p className="text-sm opacity-90 mb-1">For urgent queries</p>
              <p className="text-2xl font-extrabold">+91 78455 56827</p>
              <p className="text-sm opacity-75 mt-1">info@hlskids.in</p>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-400 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className={labelClasses}>
                    <User className="w-4 h-4 text-violet-500" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={labelClasses}>
                    <Mail className="w-4 h-4 text-violet-500" />
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
                    <Phone className="w-4 h-4 text-violet-500" />
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

                {/* City */}
                <div>
                  <label className={labelClasses}>
                    <MapPin className="w-4 h-4 text-violet-500" />
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* State */}
                <div>
                  <label className={labelClasses}>
                    <MapPin className="w-4 h-4 text-violet-500" />
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Your state"
                    className={inputClasses}
                    required
                  />
                </div>

                {/* Investment Capacity */}
                <div>
                  <label className={labelClasses}>
                    <IndianRupee className="w-4 h-4 text-violet-500" />
                    Investment Capacity *
                  </label>
                  <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="10-15">₹10-15 Lakhs</option>
                    <option value="15-20">₹15-20 Lakhs</option>
                    <option value="20-25">₹20-25 Lakhs</option>
                    <option value="25+">₹25+ Lakhs</option>
                  </select>
                </div>

                {/* Property Status */}
                <div>
                  <label className={labelClasses}>
                    <Building2 className="w-4 h-4 text-violet-500" />
                    Property Status *
                  </label>
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="owned">Own Property</option>
                    <option value="rented">Rented Property</option>
                    <option value="looking">Looking for Property</option>
                    <option value="none">No Property Yet</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className={labelClasses}>
                    <Briefcase className="w-4 h-4 text-violet-500" />
                    Business Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select Experience</option>
                    <option value="none">No Experience</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className={labelClasses}>
                  <MessageSquare className="w-4 h-4 text-violet-500" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vision, preferred location, or any questions..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Franchise Application
              </motion.button>

              <p className="text-center text-xs text-gray-400 mt-4">
                By submitting, you agree to our terms and privacy policy. Our team will contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}