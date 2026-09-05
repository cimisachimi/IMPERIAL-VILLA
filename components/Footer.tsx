import { waLink } from "@/data/villaData";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-grey-dark text-cream border-t border-stone/20 pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-12 pb-12 border-b border-stone/20">

          {/* Col 1: About Brief */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">
              Villa Imperial <span className="text-amber-400">Syariah</span>
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 leading-relaxed max-w-sm">
              Hunian privat ramah syariah yang menghadirkan kenyamanan, ketenangan, dan kelengkapan fasilitas modern untuk momen kebersamaan keluarga Anda di Yogyakarta.
            </p>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/80">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-amber-400 transition-colors">
                  Tentang Villa
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-400 transition-colors">
                  Fasilitas Utama
                </a>
              </li>
              <li>
                <a href="#ulasan" className="hover:text-amber-400 transition-colors">
                  Ulasan Tamu
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-amber-400 transition-colors">
                  Reservasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone">
              Kontak & Alamat
            </h4>
            <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
              Ngijo RT 03, Jl. Parangtritis Km 6.5, Bangunharjo, Sewon, Bantul, Yogyakarta 55188
            </p>
            <div className="pt-2 space-y-2.5 text-xs sm:text-sm">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream hover:text-amber-400 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href="mailto:info@villaimperialsyariah.com"
                className="flex items-center gap-2 text-cream hover:text-amber-400 transition-colors"
              >
                <svg className="h-4 w-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@villaimperialsyariah.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Villa Imperial Syariah. All rights reserved.</p>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-stone/30 px-5 py-2.5 text-xs font-medium text-cream hover:border-amber-400 hover:text-amber-400 transition-all"
          >
            <span>Kembali ke Atas</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}