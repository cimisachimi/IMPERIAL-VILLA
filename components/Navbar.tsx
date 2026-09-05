import Image from "next/image";
import { waLink } from "@/data/villaData";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Villa Imperial Syariah Logo"
            width={240}
            height={60}
            className="h-11 sm:h-12 w-auto"
            priority
          />
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-grey-dark md:flex">
          <a href="#tentang" className="hover:text-stone transition-colors">
            Tentang
          </a>
          <a href="#fasilitas" className="hover:text-stone transition-colors">
            Fasilitas
          </a>
          <a href="#galeri" className="hover:text-stone transition-colors">
            Galeri
          </a>
          <a href="#ulasan" className="hover:text-stone transition-colors">
            Ulasan
          </a>
          <a href="#reservasi" className="hover:text-stone transition-colors">
            Reservasi
          </a>
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-stone px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-stone/90"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Pesan
        </a>
      </div>
    </header>
  );
}