"use client";

import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section
      className="py-24 pb-40 px-4 max-w-5xl mx-auto overflow-hidden bg-white bg-no-repeat bg-bottom"
      style={{
        backgroundImage: "url('/images/bg-profile.jpg')",
        backgroundSize: "100% auto", 
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Bingkai foto lingkaran dengan shadow soft sky blue */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(14,165,233,0.15)] mb-6">
            <img
              src="/images/pp-wiwin2.jpg"
              alt="Wiwin"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h2 className="text-3xl font-serif text-slate-800">Wiwin</h2>
          <p className="text-sm font-semibold text-sky-600 tracking-widest mt-1">
            WIWIN KATELI
          </p>
          <p className="text-xs text-slate-400 mt-3 max-w-xs leading-relaxed">
            Putra dari <br />{" "}
            <span className="font-medium text-slate-600">
              Bapak Kalitasan & Ibu Sui Yin
            </span>
          </p>
        </motion.div>

        {/* Mempelai Wanita */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Bingkai foto lingkaran dengan shadow soft sky blue */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_30px_rgba(14,165,233,0.15)] mb-6">
            <img
              src="/images/pp-niken2.jpg"
              alt="Niken"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h2 className="text-3xl font-serif text-slate-800">Niken</h2>
          <p className="text-sm font-semibold text-sky-600 tracking-widest mt-1">
            NIKEN PERMATA HATI
          </p>
          <p className="text-xs text-slate-400 mt-3 max-w-xs leading-relaxed">
            Putri dari <br />{" "}
            <span className="font-medium text-slate-600">
              Bapak (Mendiang) Sukoyo & Ibu Sri Sunarni Budi Rahayu
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
