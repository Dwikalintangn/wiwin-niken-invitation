"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    /* 
      KUNCI UTAMA:
      - w-full min-h-screen membuat halaman penutup ini tampil megah memenuhi satu layar penuh.
      - Taruh file foto dansa prewed kamu di folder public/images/closing-bg.jpg
    */
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-start pt-16 pb-12 px-6 overflow-hidden select-none bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/prewed-1.jpeg')" }}
    >
      {/* 
        Efek Overlay Vignette Gelap:
        Memberikan lapisan redup halus di bagian atas agar tipografi teks putih 
        tetap kontras, jelas, dan dramatis seperti contoh gambar.
      */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-0"></div>

      {/* Konten Teks Atas */}
      <div className="relative z-10 text-center space-y-4 max-w-sm mx-auto">
        {/* Ungkapan Romantis Bahasa Inggris */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-serif tracking-wider font-light text-stone-100 drop-shadow-md"
        >
          Two souls become one, two hearts beat as one
        </motion.p>

        {/* Nama Mempelai dengan Font Serif Estetik */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif italic tracking-wide font-light drop-shadow-md text-white py-1"
        >
          Wiwin & Niken
        </motion.h2>

        {/* Ucapan Terima Kasih Penutup */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base font-serif tracking-wide text-stone-200 font-light drop-shadow-sm pt-1"
        >
          Thank you
        </motion.p>
      </div>
    </section>
  );
}