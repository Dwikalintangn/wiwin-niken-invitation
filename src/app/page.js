"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Quotes from "@/components/Quotes";
import Profile from "@/components/Profile";
import Countdown from "@/components/Countdown";
import EventDetail from "@/components/EventDetail";
import Gallery from "@/components/Gallery";
import DigitalGift from "@/components/DigitalGift";
import BackgroundMusic from "@/components/BackgroundMusic";
import Closing from "@/components/Closing";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Mengunci scroll layar HP/Laptop sebelum tombol diklik
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  /* KODE PINTAR DETEKSI DOMAIN:
     Otomatis menggunakan domain Vercel gratisanmu nanti saat sudah online,
     dan otomatis beralih ke localhost saat kamu mengedit di komputer.
  */
  const websiteUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  // Memaksa pembaruan title & meta secara dinamis di sisi client agar aman dari Hydration Error
  useEffect(() => {
    document.title = "Pernikahan Wiwin & Niken";
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FAFAFA]">
      {/* 
        PERBAIKAN: Tag <head> di bawah ini tetap dipertahankan untuk kebutuhan crawler static,
        namun pastikan tidak ada bentrokan tag title/meta bawaan dari file layout.js kamu.
      */}
      <head>
        <meta name="description" content="Kurnia terindah dalam ikatan suci pernikahan Wiwin & Niken. Mohon doa restu kehadiran Anda." />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteUrl} />
        <meta property="og:title" content="Pernikahan Wiwin & Niken" />
        <meta property="og:description" content="Minggu, 13 September 2026 - Vihara Bhakti Pramuka, Cibubur. Mohon doa restu Anda." />
        <meta property="og:image" content={`${websiteUrl}/images/prewed-3.jpeg`} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={websiteUrl} />
        <meta property="twitter:title" content="Pernikahan Wiwin & Niken" />
        <meta property="twitter:description" content="Minggu, 13 September 2026 - Vihara Bhakti Pramuka, Cibubur. Mohon doa restu Anda." />
        <meta property="twitter:image" content={`${websiteUrl}/images/prewed-3.jpeg`} />
      </head>

      {/* Cover / Amplop Digital */}
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Konten Utama Terbuka Setelah Klik */}
      {isOpen && (
        <div className="w-full">
          <Welcome />
          <Quotes />
          <Profile />
          <Countdown />
          <EventDetail />
          <Gallery />
          <DigitalGift />
          <Closing />

          <footer className="py-8 text-center text-xs tracking-widest text-slate-400 bg-white border-t border-slate-100">
            <p>© 2026 WIWIN & NIKEN. ALL RIGHTS RESERVED.</p>
          </footer>

          <BackgroundMusic />
        </div>
      )}
    </main>
  );
}