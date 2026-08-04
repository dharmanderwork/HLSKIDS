"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, Clock, Calendar, X, Volume2, VolumeX } from "lucide-react";

const videos = [
  {
    id: 1,
    thumbnail: "/images/VID1.jpg",
    videoSrc: "/videos/VID1.mp4",
    title: "Annual Day Celebration 2024",
    duration: "5:30",
    date: "15 Mar 2024",
    views: "2.5K",
  },
  {
    id: 2,
    thumbnail: "/images/VID2.jpg",
    videoSrc: "/videos/VID2.mp4",
    title: "Sports Day Highlights",
    duration: "3:45",
    date: "10 Feb 2024",
    views: "1.8K",
  },
  {
    id: 3,
    thumbnail: "/images/VID3.jpg",
    videoSrc: "/videos/VID3.mp4",
    title: "Art Exhibition by Kids",
    duration: "4:15",
    date: "25 Jan 2024",
    views: "3.2K",
  },
  {
    id: 4,
    thumbnail: "/images/VID4.jpg",
    videoSrc: "/videos/VID4.mp4",
    title: "Independence Day Performance",
    duration: "6:20",
    date: "15 Aug 2024",
    views: "4.1K",
  },
  {
    id: 5,
    thumbnail: "/images/VID5.jpg",
    videoSrc: "/videos/VID5.mp4",
    title: "Graduation Day Ceremony",
    duration: "7:10",
    date: "20 Mar 2024",
    views: "5.5K",
  },
];

export default function GalleryGrid() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string>("");
  const [isMuted, setIsMuted] = useState(true);

  const openVideo = (videoSrc: string, title: string) => {
    setActiveVideo(videoSrc);
    setActiveTitle(title);
    setIsMuted(true);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setActiveTitle("");
  };

  return (
    <>
      <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url(/pattern-3.png)",
              backgroundSize: "300px",
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
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Relive the magical moments and celebrations at HLS KIDS through our video collection.
            </p>
          </motion.div>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openVideo(video.videoSrc, video.title)}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-500 group-hover:text-white transition-all duration-300"
                      >
                        <Play className="w-7 h-7 ml-1" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {video.duration}
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-sm">⭐</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="bg-gray-50 p-5 border-t-2 border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 font-heading mb-2 group-hover:text-red-500 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {video.date}
                      </span>
                      <span className="bg-red-100 text-red-600 px-2.5 py-1 rounded-full text-xs font-semibold">
                        {video.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal / Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={closeVideo}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Mute Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>

            {/* Video Player */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                muted={isMuted}
                className="w-full h-full object-contain bg-black"
                playsInline
              >
                Your browser does not support the video tag.
              </video>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                <h3 className="text-white text-xl font-bold">{activeTitle}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}