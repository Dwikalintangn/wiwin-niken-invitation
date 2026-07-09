"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function Countdown() {
  // Target Tanggal Acara (Sesuaikan tahun, bulan, hari, jam)
  const targetDate = new Date("2026-07-12T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(interval);
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hari: d, jam: h, menit: m, detik: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.hari },
    { label: "Hours", value: timeLeft.jam },
    { label: "Mins", value: timeLeft.menit },
    { label: "Secs", value: timeLeft.detik },
  ];

  return (

    <section 
      className="relative w-full min-h-screen py-20 px-4 bg-cover bg-center flex flex-col items-center justify-start overflow-hidden select-none"
      style={{ backgroundImage: "url('/images/prewed-3.jpeg')" }}
    >
      {/* Efek Overlay Gradasi Gelap (Vignette) di bagian atas agar teks putihnya kontras dan sangat jelas terbaca */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-0"></div>

      {/* Konten Utama */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-xl mx-auto text-center z-10 pt-10"
      >
        
        <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-8 drop-shadow-md">
          Save The Date
        </h2>

        {/* Blok Angka Waktu Minimalis Transparan Tanpa Box Putih */}
        <div className="flex justify-center gap-6 md:gap-8 mb-8">
          {timeBlocks.map((block, index) => (
            <div key={index} className="text-center min-w-12.5">
              {/* Angka Putih Bersih */}
              <span className="block text-3xl md:text-4xl font-serif text-white font-light drop-shadow-md">
                {String(block.value).padStart(2, '0')}
              </span>
              {/* Label Bahasa Inggris Sesuai Contoh */}
              <span className="text-xs tracking-wider text-stone-200/90 font-light mt-1 block drop-shadow-sm">
                {block.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tombol Kalender Lonjong Berwarna Putih Bersih */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="https://calendar.google.com/"
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2 bg-white/95 hover:bg-white text-slate-700 text-xs tracking-wide rounded-full shadow-md transition-colors font-medium border border-stone-100"
        >
          <CalendarDays size={13} className="text-cyan-800" />
          Add to Calendar
        </motion.a>
      </motion.div>
    </section>
  );
}