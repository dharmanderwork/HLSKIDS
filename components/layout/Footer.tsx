"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Programs", href: "/programs" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
];

const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "bg-blue-600", label: "Facebook" },
    { icon: FaXTwitter, href: "#", color: "bg-sky-400", label: "Twitter" },
    { icon: FaInstagram, href: "#", color: "bg-pink-500", label: "Instagram" },
    { icon: FaYoutube, href: "#", color: "bg-red-500", label: "Youtube" },
    { icon: FaLinkedinIn, href: "#", color: "bg-blue-700", label: "Linkedin" },
];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden">
            {/* ========== SKY BACKGROUND SECTION ========== */}
            <div className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-green-50">

                {/* Animated Clouds */}
                <div className="absolute top-6 left-[8%] opacity-70">
                    <motion.div
                        animate={{ x: [0, 25, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg width="120" height="60" viewBox="0 0 120 60" fill="white">
                            <ellipse cx="30" cy="35" rx="25" ry="18" />
                            <ellipse cx="60" cy="28" rx="30" ry="22" />
                            <ellipse cx="90" cy="35" rx="25" ry="18" />
                        </svg>
                    </motion.div>
                </div>

                <div className="absolute top-10 right-[12%] opacity-50">
                    <motion.div
                        animate={{ x: [0, -20, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg width="90" height="45" viewBox="0 0 90 45" fill="white">
                            <ellipse cx="22" cy="28" rx="18" ry="14" />
                            <ellipse cx="45" cy="22" rx="22" ry="18" />
                            <ellipse cx="68" cy="28" rx="18" ry="14" />
                        </svg>
                    </motion.div>
                </div>

                <div className="absolute top-20 left-[40%] opacity-40 hidden md:block">
                    <motion.div
                        animate={{ x: [0, 15, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg width="70" height="35" viewBox="0 0 70 35" fill="white">
                            <ellipse cx="17" cy="22" rx="14" ry="11" />
                            <ellipse cx="35" cy="17" rx="17" ry="14" />
                            <ellipse cx="53" cy="22" rx="14" ry="11" />
                        </svg>
                    </motion.div>
                </div>

                {/* ========== MAIN FOOTER CONTENT ========== */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

                        {/* Column 1: Logo & About */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center md:text-left"
                        >
                            <div className="flex items-center gap-3 justify-center md:justify-start mb-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl">😊</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-extrabold text-orange-500 font-heading tracking-wide">
                                        HLS KIDS
                                    </h3>
                                    <p className="text-xs text-green-700 font-semibold tracking-wider uppercase">
                                        Professional Childhood Education
                                    </p>
                                </div>
                            </div>
                            <p className="text-green-800 text-sm leading-relaxed mb-5">
                                Nurturing young minds through joyful learning, creativity, and holistic development since 2008. Where every child shines!
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-2.5 justify-center md:justify-start">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.2, y: -4 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`${social.color} text-white p-2.5 rounded-full shadow-md transition-shadow hover:shadow-xl`}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Column 2: Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center md:text-left"
                        >
                            <h4 className="text-lg font-bold text-green-800 mb-5 font-heading flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-8 h-1 bg-orange-400 rounded-full" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-green-700 hover:text-orange-500 transition-colors text-sm flex items-center gap-3 justify-center md:justify-start group"
                                        >
                                            <span className="w-2 h-2 bg-orange-300 rounded-full group-hover:bg-orange-500 group-hover:scale-150 transition-all" />
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Column 3: Photo Frame with Rotating Text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative">
                                {/* Rotating "LATEST PHOTOS" text */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-5"
                                >
                                    <svg viewBox="0 0 220 220" className="w-full h-full">
                                        <defs>
                                            <path
                                                id="circlePath"
                                                d="M 110, 110 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
                                            />
                                        </defs>
                                        <text className="fill-green-600 text-[12px] font-bold tracking-[0.35em] uppercase">
                                            <textPath href="#circlePath">
                                                • LATEST PHOTOS • LATEST PHOTOS • LATEST PHOTOS •
                                            </textPath>
                                        </text>
                                    </svg>
                                </motion.div>

                                {/* Grass Circle Frame with Kid Image */}
                                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-[5px] border-green-400 shadow-2xl ring-4 ring-green-200/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500" />
                                    <Image
                                        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=face"
                                        alt="Happy Kid at HLS"
                                        fill
                                        className="object-cover relative z-10"
                                        unoptimized
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-green-500/70 to-transparent z-20" />
                                </div>

                                {/* Floating Flower Decorations */}
                                <motion.div
                                    animate={{ rotate: [-8, 8, -8], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-3 -right-3 text-3xl drop-shadow-md"
                                >
                                    🌸
                                </motion.div>
                                <motion.div
                                    animate={{ rotate: [8, -8, 8], scale: [1, 1.15, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -bottom-2 -left-3 text-2xl drop-shadow-md"
                                >
                                    🌼
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-1/2 -right-6 text-xl"
                                >
                                    🦋
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Column 4: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center md:text-left"
                        >
                            <h4 className="text-lg font-bold text-green-800 mb font-heading flex items-center gap-2 justify-center md:justify-start">
                                <span className="w-8 h-1 bg-orange-400 rounded-full" />
                                Contact Us
                            </h4>

                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 justify-center md:justify-start cursor-pointer"
                                >
                                    <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 font-medium">Call today</p>
                                        <p className="text-base font-bold text-green-800">+91 78455 56827</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 justify-center md:justify-start cursor-pointer"
                                >
                                    <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 font-medium">Email us</p>
                                        <p className="text-sm font-bold text-green-800">info@hlskids.in</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 justify-center md:justify-start cursor-pointer"
                                >
                                    <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-green-600 font-medium">Visit us</p>
                                        <p className="text-sm font-bold text-green-800">Delhi, India</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            {/* </div> */}

            {/* ========== YOUR UPLOADED GARDEN BACKGROUND ========== */}
            {/* <div className="relative w-full"> */}
                {/* The uploaded background image */}
                <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px]">
                    <Image
                        src="/footer-background.png"
                        alt="Garden Footer Background"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                </div>

                {/* Floating toys/elements above the grass */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-16 left-[5%] md:left-[8%] lg:left-[12%]"
                >
                    <div className="text-4xl md:text-5xl drop-shadow-lg">🧮</div>
                </motion.div>

                {/* ABC Blocks */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute bottom-20 left-[18%] md:left-[22%]"
                >
                    <div className="flex gap-1.5">
                        <div className="w-9 h-9 md:w-11 md:h-11 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg transform -rotate-6 border-2 border-red-300">A</div>
                        <div className="w-9 h-9 md:w-11 md:h-11 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg transform rotate-3 mt-3 border-2 border-blue-300">B</div>
                        <div className="w-9 h-9 md:w-11 md:h-11 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg transform -rotate-3 border-2 border-yellow-300">C</div>
                    </div>
                </motion.div>

                {/* Sunflower */}
                <motion.div
                    animate={{ rotate: [0, 12, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute bottom-24 right-[18%] md:right-[22%]"
                >
                    <div className="text-4xl md:text-5xl drop-shadow-lg">🌻</div>
                </motion.div>

                {/* Tulip */}
                <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-16 right-[8%] md:right-[10%]"
                >
                    <div className="text-3xl md:text-4xl drop-shadow-lg">🌷</div>
                </motion.div>

                {/* Daisy */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-28 right-[35%] md:right-[38%]"
                >
                    <div className="text-2xl md:text-3xl drop-shadow-md">🌼</div>
                </motion.div>

                {/* Butterfly */}
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute bottom-32 left-[35%] md:left-[40%]"
                >
                    <div className="text-xl md:text-2xl">🦋</div>
                </motion.div>
            </div>

            {/* ========== DARK GREEN BOTTOM BAR ========== */}
            <div className="relative bg-gradient-to-b from-green-600 to-green-800">
                {/* Grass edge transition */}
                <div className="absolute -top-2 left-0 w-full h-4 overflow-hidden">
                    <svg viewBox="0 0 1440 20" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M0 20 Q20 2 40 20 Q60 2 80 20 Q100 2 120 20 Q140 2 160 20 Q180 2 200 20 Q220 2 240 20 Q260 2 280 20 Q300 2 320 20 Q340 2 360 20 Q380 2 400 20 Q420 2 440 20 Q460 2 480 20 Q500 2 520 20 Q540 2 560 20 Q580 2 600 20 Q620 2 640 20 Q660 2 680 20 Q700 2 720 20 Q740 2 760 20 Q780 2 800 20 Q820 2 840 20 Q860 2 880 20 Q900 2 920 20 Q940 2 960 20 Q980 2 1000 20 Q1020 2 1040 20 Q1060 2 1080 20 Q1100 2 1120 20 Q1140 2 1160 20 Q1180 2 1200 20 Q1220 2 1240 20 Q1260 2 1280 20 Q1300 2 1320 20 Q1340 2 1360 20 Q1380 2 1400 20 Q1420 2 1440 20 V20 H0 Z"
                            fill="#16A34A"
                        />
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <span className="text-2xl">😊</span>
                            <div>
                                <p className="text-white font-bold text-sm font-heading">HLS KIDS</p>
                                <p className="text-green-200 text-[10px]">PROFESSIONAL CHILDHOOD EDUCATION</p>
                            </div>
                        </motion.div>

                        {/* Center: Contacts */}
                        <div className="text-center">
                            <p className="text-green-200 text-xs">Get in touch</p>
                            <p className="text-white text-sm font-semibold">info@hlskids.in | +91 78455 56827</p>
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-green-200 text-xs">© 2024 HLS Kids Play School</p>
                            <p className="text-white text-xs font-medium">All rights reserved ❤️</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}