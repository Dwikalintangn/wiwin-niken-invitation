"use client";

import { motion } from "framer-motion";
import { MailOpen } from "lucide-react";

export default function Hero({ isOpen, setIsOpen }) {
  return (
    <motion.section
      animate={{ y: isOpen ? "-100%" : "0%" }}
      transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-slate-800 px-4 bg-sky-50"
      style={{
        /* Menggunakan hamparan gradasi biru muda transparan di atas foto background */
        backgroundImage: `linear-gradient(rgba(240, 249, 255, 0.5), rgba(224, 242, 254, 0.65)), url('/images/welcome-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SALAM PEMBUKA */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-sky-600 font-semibold tracking-[0.3em] text-xs md:text-sm mb-3"
      >
        NAMO BUDDHAYA
      </motion.p>

      {/* NAMA MEMPELAI UTAMA */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-5xl md:text-7xl font-serif italic text-center font-light tracking-wide my-4 text-slate-800 drop-shadow-sm"
      >
        Wiwin & Niken
      </motion.h1>

      {/* DETAIL LOKASI SINGKAT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center max-w-md text-xs md:text-sm text-slate-600 tracking-wide leading-relaxed"
      >
        Pemberkatan Pernikahan di Vihara Bhakti Pramuka, Cibubur
      </motion.p>

      {/* TOMBOL UTAMA BUKA UNDANGAN (WARNA BABY BLUE PREMIUM) */}
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#bae6fd" }} // Efek hover agak cerah sedikit (sky-200)
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="mt-10 px-6 py-3 bg-sky-100 hover:bg-sky-200 text-sky-800 font-semibold rounded-full shadow-lg transition-all text-xs tracking-widest flex items-center gap-2.5 border border-sky-200/60 backdrop-blur-sm"
      >
        <MailOpen size={15} className="text-sky-700" />
        BUKA UNDANGAN
      </motion.button>
    </motion.section>
  );
}