"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function EventDetail() {
  return (
    <section className="py-24 px-4 bg-[#FAFAFA] text-center">
      <div className="max-w-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-serif text-slate-900 mb-8 tracking-wide"
        >
          Waktu & Tempat Acara
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-sky-50/40 p-8 rounded-2xl border border-sky-100/80 shadow-[0_8px_30px_rgba(14,165,233,0.03)] flex flex-col items-center"
        >
          {/* ILUSTRASI STUPA EMAS ASLI (TANPA FILTER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-28 h-28 md:w-32 md:h-32 mb-6 select-none pointer-events-none"
          >
            <img 
              src="/images/stupa.png" 
              alt="Stupa Ornament" 
              className="w-full h-full object-contain" // Bersih tanpa className filter CSS apa pun
            />
          </motion.div>

          <h3 className="font-serif text-2xl text-slate-800 mb-2">Pemberkatan Nikah</h3>
          <p className="text-sky-600 font-semibold tracking-widest text-xs mb-6">MINGGU, 12 JULI 2026</p>
          
          <div className="text-slate-600 space-y-2 text-sm md:text-base font-light">
            <p className="font-semibold text-slate-800">Pukul 09.00 WIB - Selesai</p>
            <div className="w-6 h-px bg-sky-200 mx-auto my-4"></div>
            <p className="font-serif text-xl text-slate-900 font-semibold">Vihara Bhakti Pramuka</p>
            <p className="px-4 text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
              Kompleks Bumi Perkemahan Cibubur (Buperta), <br />
              Jl. Transyogi KM. 2, Cibubur, Jakarta Timur
            </p>
            <p className="text-[11px] font-medium italic text-sky-700 pt-4 px-6 leading-relaxed">
              *Catatan untuk Umat: Akses masuk langsung melalui pintu gerbang utama Buperta Cibubur.
            </p>
          </div>

          {/* TOMBOL MAPS NAVY / BIRU DONGKER UTAMA */}
          <motion.a
            whileHover={{ scale: 1.03, backgroundColor: "#0f172a" }}
            whileTap={{ scale: 0.97 }}
            href="https://maps.app.goo.gl/1hjBhQSY36UPnvUh7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-900 hover:bg-slate-950 text-white text-xs tracking-widest rounded-full shadow-lg transition-colors font-medium border border-slate-800"
          >
            <MapPin size={14} className="text-sky-400" />
            GOOGLE MAPS DIRECTION
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}