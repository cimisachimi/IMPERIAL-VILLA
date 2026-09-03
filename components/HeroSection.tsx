import Image from "next/image";
import { waLink } from "@/data/villaData";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function HeroSection() {
  return (
    <section className="relative pb-12 pt-10 sm:pt-14 md:pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-xs sm:text-sm font-semibold text-stone">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          Villa Keluarga · Ramah Syariah
        </div>

        {/* Heading */}
        <h1 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-grey-dark">
          Menginap tenang, sesuai kaidah, bersama orang tersayang.
        </h1>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-stone px-8 py-3.5 text-sm sm:text-base font-semibold text-cream transition-all duration-300 hover:bg-stone/90"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Booking via WhatsApp
          </a>
          <a
            href="#ulasan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cream/60 px-8 py-3.5 text-sm sm:text-base font-semibold text-grey-dark transition-all duration-300 hover:bg-cream"
          >
            Lihat ulasan
          </a>
        </div>
      </div>

      {/* Image Banner */}
      <div className="relative mt-10 sm:mt-14 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/frontVilla.JPG"
            alt="Tampak Depan Villa Imperial Syariah"
            width={2900}
            height={1500}
            className="w-full h-auto object-cover aspect-[2900/1500] max-h-[640px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}