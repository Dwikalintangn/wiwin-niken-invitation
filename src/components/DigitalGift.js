"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Copy, Check } from "lucide-react";

export default function DigitalGift() {
  // State untuk melacak ID rekening mana yang sedang aktif disalin
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);
    
    // Kembalikan ikon tombol salin setelah 2 detik
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Menggunakan data rekening asli yang diinput user
  const accountData = [
    { id: "mandiri-1", bank: "Bank Mandiri", number: "1030011151384", name: "Niken Permata Hati" },
    { id: "mandiri-2", bank: "Bank Mandiri", number: "084201044053536", name: "Niken Permata Hati" },
    { id: "bca", bank: "Bank BCA", number: "7460209905", name: "Wiwin Kateli" },
  ];

  return (
    /* Latar belakang menggunakan stone-50 dengan transisi border atas yang halus */
    <section className="py-24 px-4 bg-stone-50 text-center border-t border-stone-100">
      <div className="max-w-md mx-auto">
        {/* Mengubah warna ikon Gift ke Baby Blue Cerah (text-sky-600) */}
        <div className="flex justify-center mb-4 text-sky-600">
          <Gift size={32} className="stroke-[1.5]" />
        </div>
        <h2 className="text-2xl font-serif text-slate-900 tracking-wide mb-2">
          Tanda Kasih Digital
        </h2>
        <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto mb-8">
          Doa restu Anda merupakan karunia terindah. Namun jika ingin memberikan
          tanda kasih, Anda dapat menyalurkannya melalui:
        </p>

        <div className="bg-white p-6 rounded-2xl border border-sky-100/50 shadow-[0_8px_30px_rgba(14,165,233,0.02)] divide-y divide-stone-100">
          {accountData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`text-center flex flex-col items-center py-4 ${index !== 0 ? "pt-6" : "pt-2"}`}
            >
              {/* Nama Bank menggunakan warna Navy kalem (text-slate-500) */}
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                {item.bank}
              </p>
              <p className="text-xl font-mono text-slate-800 font-bold tracking-wide mt-1">
                {item.number}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 mb-4">
                a.n. {item.name}
              </p>
              
              {/* 
                TOMBOL COPY KUSTOM NAVY-BABY BLUE:
                - Saat normal: Berwarna navy (bg-slate-900).
                - Saat sukses disalin: Berwarna hijau emerald lembut yang interaktif.
              */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCopy(item.number, item.id)}
                className={`inline-flex items-center justify-center h-8 gap-2 px-5 rounded-full text-[10px] font-medium tracking-widest border transition-all ${
                  copiedId === item.id
                    ? "bg-emerald-50 border-emerald-200 text-emerald-600 font-semibold"
                    : "bg-slate-900 border-slate-950 text-white hover:bg-slate-950 shadow-md"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copiedId === item.id ? (
                    <motion.span
                      key="checked"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <Check size={12} className="stroke-[2.5]" />
                      BERHASIL DISALIN
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.7, opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      {/* Ikon kecil diberi sentuhan Baby Blue (text-sky-300) */}
                      <Copy size={11} className="text-sky-300" />
                      SALIN REKENING
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}