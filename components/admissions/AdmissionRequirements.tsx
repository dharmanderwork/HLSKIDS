"use client";

import { motion } from "framer-motion";
import { FileCheck, Camera, Syringe, HeartPulse, Baby, UserCheck, School, FileText, Users, MapPin } from "lucide-react";

// const requirements = [
//   {
//     title: "Birth Certificate",
//     description: "Original and photocopy of the child's birth certificate for age verification.",
//     icon: Baby,
//     color: "bg-rose-100 text-rose-600"
//   },
//   {
//     title: "Passport Photos",
//     description: "4 recent passport-size photographs of the child and 2 of each parent.",
//     icon: Camera,
//     color: "bg-sky-100 text-sky-600"
//   },
//   {
//     title: "Aadhar Card",
//     description: "Copy of child's Aadhar card (if available) and parent's Aadhar card.",
//     icon: FileCheck,
//     color: "bg-amber-100 text-amber-600"
//   },
//   {
//     title: "Immunization Record",
//     description: "Updated vaccination card showing all mandatory immunizations.",
//     icon: Syringe,
//     color: "bg-emerald-100 text-emerald-600"
//   },
//   {
//     title: "Medical Certificate",
//     description: "Basic health certificate from a registered medical practitioner.",
//     icon: HeartPulse,
//     color: "bg-red-100 text-red-600"
//   },
//   {
//     title: "Parent ID Proof",
//     description: "Any government-issued ID proof of both parents (PAN/Voter ID/Passport).",
//     icon: UserCheck,
//     color: "bg-purple-100 text-purple-600"
    
//   },
// ];

const requirements = [
  {
    title: "Completed Admission Form",
    description: "Duly filled and signed admission application form.",
    icon: FileText,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Birth Certificate",
    description: "Copy of the child's birth certificate for age verification. Original may be required for verification.",
    icon: Baby,
    color: "bg-rose-100 text-rose-600"
  },
  {
    title: "Child's Photographs",
    description: "2 recent passport-size photographs of the child.",
    icon: Camera,
    color: "bg-sky-100 text-sky-600"
  },
  {
    title: "Parents' Photographs",
    description: "2 recent passport-size photographs of each parent/guardian.",
    icon: Users,
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Child's Aadhaar Card",
    description: "Copy of child's Aadhaar card (if available). Original may be required for verification.",
    icon: FileCheck,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Parent's Aadhaar Card",
    description: "Copy of parent/guardian's Aadhaar card. Original may be required for verification.",
    icon: UserCheck,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Address Proof",
    description: "Valid address proof document for verification.",
    icon: MapPin,
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Vaccination Record",
    description: "Updated immunization/vaccination record showing all mandatory vaccinations.",
    icon: Syringe,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Transfer Certificate",
    description: "Required only if the child is changing from another school.",
    icon: School,
    color: "bg-orange-100 text-orange-600"
  }
];

export default function AdmissionRequirements() {
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
            className="inline-flex items-center gap-2 bg-sky-50 rounded-full px-5 py-2.5 mb-5 border border-sky-200"
          >
            <span className="text-lg">📋</span>
            <span className="text-sm font-bold text-sky-600 uppercase tracking-wider">
              Documents Needed
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Admission{" "}
            <span className="text-sky-500">Requirements</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Please keep these documents ready for a smooth admission process.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white rounded-[2rem] p-6 md:p-8 shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-sky-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${req.color} flex items-center justify-center shadow-md mb-5`}>
                <req.icon className="w-7 h-7" />
              </div>

              {/* Emoji */}
              {/* <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 right-6 text-2xl"
              >
                {req.emoji}
              </motion.div> */}

              <h3 className="text-lg font-bold text-gray-900 font-heading mb-2 group-hover:text-sky-600 transition-colors">
                {req.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {req.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 bg-amber-50 border-2 border-amber-200 rounded-[2rem] p-6 md:p-8 text-center"
        >
          <p className="text-amber-800 text-sm md:text-base">
            <span className="font-bold">Note:</span> Original documents may be required for verification during the admission process. For any queries, please contact our admissions office at{" "}
            <a href="tel:+917303729955" className="font-bold text-amber-600 hover:underline">
              +91 7303729955S
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}