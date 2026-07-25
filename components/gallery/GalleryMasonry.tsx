"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Heart, Share2 } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=800&fit=crop",
    title: "First Day at School",
    category: "classroom",
    likes: 234,
    size: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
    title: "Art & Craft Time",
    category: "activities",
    likes: 189,
    size: "wide",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=600&fit=crop",
    title: "Sports Day Fun",
    category: "sports",
    likes: 312,
    size: "normal",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=800&fit=crop",
    title: "Independence Day",
    category: "events",
    likes: 456,
    size: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
    title: "Painting Competition",
    category: "activities",
    likes: 278,
    size: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=600&fit=crop",
    title: "Diwali Celebration",
    category: "celebrations",
    likes: 523,
    size: "normal",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    title: "Reading Corner",
    category: "classroom",
    likes: 167,
    size: "wide",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?w=600&h=800&fit=crop",
    title: "Annual Day",
    category: "events",
    likes: 678,
    size: "tall",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=600&h=600&fit=crop",
    title: "Music Class",
    category: "activities",
    likes: 245,
    size: "normal",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=600&h=400&fit=crop",
    title: "Yoga Session",
    category: "sports",
    likes: 198,
    size: "wide",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1602507343582-9c2b7f3b0a1e?w=600&h=800&fit=crop",
    title: "Christmas Party",
    category: "celebrations",
    likes: 445,
    size: "tall",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
    title: "Science Experiment",
    category: "classroom",
    likes: 289,
    size: "wide",
  },
];

export default function GalleryMasonry() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-orange-50/30 to-white py-16 md:py-24 overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-3">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full px-5 py-2.5 mb-5 border border-pink-200"
          >
            <span className="text-lg">🖼️</span>
            <span className="text-sm font-bold text-pink-600 uppercase tracking-wider">
              Photo Gallery
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 font-heading mb-4">
            Moments of{" "}
            <span className="text-orange-500">Happiness</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Every picture tells a story of joy, learning, and growth at HLS KIDS.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`break-inside-avoid group relative cursor-pointer ${
                item.size === "tall" ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(item.id)}
            >
              <div
                className={`relative overflow-hidden rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  item.size === "tall"
                    ? "h-[400px] md:h-[500px]"
                    : item.size === "wide"
                    ? "h-[220px] md:h-[260px]"
                    : "h-[280px] md:h-[320px]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => toggleLike(item.id, e)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm ${
                      likedImages.has(item.id)
                        ? "bg-rose-500 text-white"
                        : "bg-white/90 text-gray-600 hover:bg-rose-500 hover:text-white"
                    } transition-colors`}
                  >
                    <Heart
                      className={`w-5 h-5 ${likedImages.has(item.id) ? "fill-white" : ""}`}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg backdrop-blur-sm text-gray-600 hover:bg-sky-500 hover:text-white transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                  >
                    <ZoomIn className="w-6 h-6 text-gray-800" />
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-white/80 text-sm flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" />
                      {item.likes + (likedImages.has(item.id) ? 1 : 0)}
                    </span>
                    <span className="text-white/60 text-xs uppercase tracking-wider bg-white/20 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-sm">⭐</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full rounded-[2rem] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  galleryItems.find((i) => i.id === selectedImage)?.src ||
                  ""
                }
                alt="Gallery Image"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                unoptimized
              />

              {/* Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {galleryItems.find((i) => i.id === selectedImage)?.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-white/70 text-sm flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {galleryItems.find((i) => i.id === selectedImage)?.likes}
                  </span>
                  <span className="text-white/50 text-sm uppercase tracking-wider">
                    {galleryItems.find((i) => i.id === selectedImage)?.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}