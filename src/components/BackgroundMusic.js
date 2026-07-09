"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Cek secara berkala apakah tombol "BUKA UNDANGAN" sudah diklik
    // Kita mendeteksi lewat hilangnya status overflow / munculnya akses scroll pada body
    const checkOpenStatus = setInterval(() => {
      const isWindowScrollable = document.body.style.overflow !== "hidden";
      
      if (isWindowScrollable && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowButton(true);
            clearInterval(checkOpenStatus);
          })
          .catch((err) => {
            console.log("Autoplay dicegah oleh browser, menunggu interaksi user.", err);
          });
      }
    }, 500);

    return () => clearInterval(checkOpenStatus);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Element Audio Tersembunyi */}
      <audio ref={audioRef} src="/audio/wedding-song.mp3" loop />

      {/* Tombol Kontrol Melayang di Pojok Kanan Bawah */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="fixed bottom-6 right-6 z-99 p-3 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-lg border border-stone-200/50 backdrop-blur-md transition-colors"
          >
            {isPlaying ? (
              // Efek berputar jika lagu sedang aktif
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <Volume2 size={20} className="text-amber-600" />
              </motion.div>
            ) : (
              <VolumeX size={20} className="text-slate-400" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}