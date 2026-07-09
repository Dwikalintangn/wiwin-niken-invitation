"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const gridImages = [
    "/images/prewed-1.jpeg",
    "/images/prewed-2.jpeg",
    "/images/prewed-2.jpeg",
    "/images/prewed-1.jpeg",
  ];
  const slideImages = [
    "/images/prewed-4.jpg",
    "/images/prewed-5.jpeg",
    "/images/prewed-6.jpg",
    "/images/pp-niken.jpeg",
    "/images/pp-wiwin.jpg",
  ];

  useEffect(() => {
    if (!slideImages || slideImages.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideIndex, slideImages.length]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-slate-800 tracking-wide">
          Galeri Bahagia
        </h2>
        <div className="w-10 h-0.5 bg-sky-700 mx-auto mt-3"></div>
      </div>

      {/* BAGIAN 1: GRID 4 FOTO (ATAS) */}
      <div className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-2">
          {gridImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setSelectedImg(src)}
              className="w-full aspect-3/4 bg-stone-100 rounded-2xl cursor-pointer relative border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 border-4 border-white rounded-2xl overflow-hidden">
                <img
                  src={src}
                  alt={`Grid ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-24 h-px bg-sky-700 mx-auto mb-16"></div>

      {/* BAGIAN 2: SLIDE SHOW (BAWAH) */}
      <div>
        <div className="relative aspect-4/3 md:aspect-video w-full max-w-2xl mx-auto bg-stone-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-4 border-white">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={slideIndex}
                src={slideImages[slideIndex]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 26 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Slide Show"
              />
            </AnimatePresence>
          </div>
          <button
            onClick={() => {
              setDirection(-1);
              setSlideIndex(
                (prev) => (prev - 1 + slideImages.length) % slideImages.length,
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white z-10 backdrop-blur-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setSlideIndex((prev) => (prev + 1) % slideImages.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white z-10 backdrop-blur-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Pop-up Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white/70 p-3 bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl border-4 border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Popup"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
