"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Clock, Calendar } from "lucide-react";

const videos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=350&fit=crop",
    title: "Annual Day Celebration 2024",
    duration: "5:30",
    date: "15 Mar 2024",
    views: "2.5K",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=350&fit=crop",
    title: "Sports Day Highlights",
    duration: "3:45",
    date: "10 Feb 2024",
    views: "1.8K",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=350&fit=crop",
    title: "Art Exhibition by Kids",
    duration: "4:15",
    date: "25 Jan 2024",
    views: "3.2K",
  },
];

export default function GalleryGrid() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full px-5 py-2.5 mb-5 border border-red-200"
          >
            <span className="text-lg">🎬</span>
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
              Video Gallery
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Watch Our{" "}
            <span className="text-red-500">Journey</span>
          </h2>
        </motion.div>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-[220px] md:h-[260px]">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <Play className="w-7 h-7 ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="bg-gray-50 p-5 border-t-2 border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 font-heading mb-2 group-hover:text-red-500 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {video.date}
                    </span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}