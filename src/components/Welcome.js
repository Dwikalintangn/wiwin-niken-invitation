"use client";

import { motion } from "framer-motion";

export default function Welcome() {
  return (
    /* KUNCI UTAMA:
      - w-full h-screen membuat halaman penyambut ini tampil penuh satu layar setelah amplop diklik.
      - Taruh gambar latar belakang tema alam hutan/bunga kamu di public/images/welcome-bg.jpg
    */
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-between py-20 px-6 overflow-hidden select-none bg-cover bg-center"
      style={{ backgroundImage: "url('/images/welcome-bg.jpg')" }}
    >
      {/* Efek hamparan transparan halus agar teks di atasnya tetap kontras dan mudah dibaca */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none z-0"></div>

      {/* Bagian Atas: Label Pernikahan */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10"
      >
        <span className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
          THE WEDDING OF
        </span>
      </motion.div>

      {/* Bagian Tengah: Nama Mempelai Luhur (Tipografi Elegan) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="text-center z-10 my-auto space-y-2"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">
          Wiwin & Niken
        </h1>
        <div className="w-12 h-px bg-amber-500/60 mx-auto my-3"></div>
        <p className="text-xs tracking-[0.2em] text-amber-800 font-medium uppercase">
          12 Juli 2026
        </p>
      </motion.div>

      {/* Bagian Bawah: Petunjuk Scroll Ke Bawah */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-slate-400 font-medium uppercase animate-pulse">
          Scroll Down
        </span>
        {/* Simbol panah vertikal minimalis */}
        <div className="w-px h-6 bg-slate-300 animate-bounce mt-1"></div>
      </motion.div>
    </section>
  );
}