"use client";

import { motion } from "framer-motion";

export default function Quotes() {
  return (
    /* 
      KUNCI UTAMA: 
      - w-full h-screen membuat ukuran section ini pas satu layar penuh di HP maupun Laptop.
      - flex flex-col items-center justify-center menyeimbangkan teks kutipan tepat di tengah layar.
    */
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }} // Hanya memicu animasi sekali saat masuk layar
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center space-y-6"
      >
        {/* 
          ILUSTRASI BUNGA TERATAI:
          - Menggunakan filter hue-rotate-[180deg] dan brightness untuk mengubah oranye menjadi biru dongker tema alam.
          - md:w-32 dan w-24 membuat ukurannya proporsional dan manis di layar HP maupun laptop.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-24 h-24 md:w-32 md:h-32 mb-2 select-none pointer-events-none"
        >
          <img 
            src="/images/lotus.png" 
            alt="Lotus Ornament" 
            className="w-full h-full object-contain invert-20 sepia-40 saturate-2000 hue-rotate-190 brightness-40 contrast-90"
          />
        </motion.div>

        <p className="text-xl md:text-2xl italic text-slate-600 font-serif leading-relaxed px-4">
          "Bila dua orang memiliki keyakinan yang sama, sila yang sama,
          kemurahan hati yang sama, dan kebijaksanaan yang sama, mereka akan
          bertemu kembali di kehidupan ini dan kehidupan yang akan datang."
        </p>
        
        {/* Mengubah warna garis pembatas dari amber-400 ke slate-300 agar match dengan tema biru */}
        <div className="w-12 h-0.5 bg-slate-300 mx-auto my-2"></div>
        
        {/* Mengubah warna teks sumber dari amber-600 ke slate-500 */}
        <span className="block text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
          — Samajivina Sutta (Anguttara Nikaya 4.55)
        </span>
      </motion.div>
    </section>
  );
}