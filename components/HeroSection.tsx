import Image from "next/image";
import { waLink } from "@/data/villaData";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] sm:h-screen overflow-hidden">
      {/* Background Image Fullscreen */}
      <Image
        src="/frontVilla.JPG"
        alt="Tampak Depan Villa Imperial Syariah Yogyakarta"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay Gradient Halus */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      {/* Konten Teks Terintegrasi dengan Max-Width Grid Page */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Villa Keluarga · Ramah Syariah · Yogyakarta
          </div>

          {/* Nama Villa */}
          <h1 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white sm:whitespace-nowrap">
            Villa Imperial <span className="text-amber-400">Syariah</span>
          </h1>

          {/* Deskripsi */}
          <p className="mt-3 max-w-lg text-xs sm:text-sm lg:text-base leading-relaxed text-white/80">
            Oase hunian privat yang tenang dan nyaman untuk momen liburan hangat keluarga di Istimewanya Yogyakarta.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-stone px-8 py-3.5 text-sm sm:text-base font-semibold text-cream transition-all duration-300 hover:bg-stone/90 shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Booking via WhatsApp
            </a>
            <a
              href="#ulasan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-8 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-white/30"
            >
              Lihat ulasan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}