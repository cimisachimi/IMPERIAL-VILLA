export function AboutSection() {
  return (
    <section id="tentang" className="bg-grey-dark py-10 sm:py-14 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          {/* Judul Kiri */}
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-widest text-stone">
              Tentang Villa & Yogyakarta
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl text-white">
              Hunian Privat Nyaman di Suasana Istimewa Jogja
            </h2>
          </div>

          {/* Deskripsi & Ringkasan Kanan */}
          <div className="md:col-span-7 md:pl-6">
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-cream/80">
              Terletak di kawasan Sewon, Bantul, Villa Imperial Syariah menawarkan oase privat yang tenang dengan akses strategis ke pusat kota dan ragam destinasi wisata budaya Yogyakarta. Dilengkapi 3 kamar tidur ber-AC dengan kamar mandi, dapur set lengkap, area cuci, akses internet Wi-Fi 400 Mbps, garasi untuk 2 mobil, serta hiburan TV interaktif keluarga.
            </p>

            {/* Quick Stats Bar */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-stone/20 pt-4">
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-amber-400">
                  4.9 <span className="text-sm font-sans text-amber-400">★</span>
                </span>
                <span className="text-[11px] sm:text-xs text-cream/70">Rating Ulasan</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-amber-400">
                  500+
                </span>
                <span className="text-[11px] sm:text-xs text-cream/70">Tamu Menginap</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-amber-400">
                  Strategis
                </span>
                <span className="text-[11px] sm:text-xs text-cream/70">Akses Wisata Jogja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}