"use client";

import { useState } from "react";
import Image from "next/image";

// Data 5 Wilayah DIY + Foto Visual & Objek Wisata
const diyRegions = [
  {
    id: "sleman",
    name: "Kab. Sleman",
    fullName: "Kabupaten Sleman",
    distance: "15 - 30 Menit",
    top: "22%",
    left: "50%",
    description:
      "Kawasan utara Jogja yang asri dengan latar Gunung Merapi, udara sejuk, dan candi-candi megah bersejarah.",
    image: "/frontVilla.JPG",
    objects: ["Candi Prambanan", "Lava Tour Merapi", "Kaliurang", "Candi Ratu Boko"],
  },
  {
    id: "kota",
    name: "Kota Jogja",
    fullName: "Kota Yogyakarta",
    distance: "10 - 15 Menit",
    top: "43%",
    left: "48%",
    description:
      "Jantung budaya dan sejarah Jogja. Pusat keramaian belanja Malioboro, museum, dan kuliner khas.",
    image: "/frontVilla.JPG",
    objects: ["Jalan Malioboro", "Keraton Yogyakarta", "Taman Sari", "Alun-Alun Selatan"],
  },
  {
    id: "bantul",
    name: "Kab. Bantul",
    fullName: "Kabupaten Bantul",
    distance: "5 - 25 Menit",
    top: "58%",
    left: "48%",
    description:
      "Wilayah tempat villa berada. Terkenal dengan wisata alam perbukitan pinus, seni kerajinan, dan pantai.",
    image: "/frontVilla.JPG",
    objects: ["Hutan Pinus Mangunan", "Pantai Parangtritis", "Desa Wisata Kasongan", "Gumuk Pasir"],
  },
  {
    id: "kulonprogo",
    name: "Kab. Kulon Progo",
    fullName: "Kabupaten Kulon Progo",
    distance: "30 - 45 Menit",
    top: "48%",
    left: "28%",
    description:
      "Gerbang utama masuk Jogja melalui Bandara YIA, dihiasi perbukitan Menoreh dan waduk yang indah.",
    image: "/frontVilla.JPG",
    objects: ["Bandara Int. YIA", "Waduk Sermo", "Kebun Teh Nglinggo", "Pantai Glagah"],
  },
  {
    id: "gunungkidul",
    name: "Kab. Gunungkidul",
    fullName: "Kabupaten Gunungkidul",
    distance: "40 - 60 Menit",
    top: "68%",
    left: "68%",
    description:
      "Surga pantai pasir putih eksotis, tebing karang laut megah, dan wahana pemandangan tebing.",
    image: "/frontVilla.JPG",
    objects: ["Pantai Indrayanti & Drini", "HeHa Sky View", "Goa Pindul", "Pantai Timang"],
  },
];

// Data Akses Transportasi Utama
const transportHubs = [
  {
    icon: "✈️",
    name: "Bandara Internasional Yogyakarta (YIA)",
    distance: "± 45 Menit",
    detail: "Akses langsung via Jalur Bebas Hambatan / Wates",
  },
  {
    icon: "🚆",
    name: "Stasiun Tugu Yogyakarta",
    distance: "± 15 Menit",
    detail: "Melayani Kereta Eksekutif & Kereta Bandara",
  },
  {
    icon: "🚆",
    name: "Stasiun Lempuyangan",
    distance: "± 18 Menit",
    detail: "Melayani Kereta Ekonomi Intercity & KRL Commuter",
  },
];

export function LocationMapSection() {
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const activeRegion = diyRegions.find((r) => r.id === hoveredRegionId);

  const handleRegionClick = (id: string) => {
    setHoveredRegionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      {/* Header Seksi */}
      <div className="mb-8 sm:mb-12 text-center md:text-left">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone">
          Peta Lokasi &amp; Destinasi Wisata
        </p>
        <h2 className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl text-grey-dark">
          Eksplorasi Seluruh Wilayah DI Yogyakarta
        </h2>
        <p className="mt-3 text-sm sm:text-lg text-ink/75 max-w-2xl">
          Posisi villa yang strategis memudahkan akses Anda menuju berbagai atraksi populer dan pusat transportasi.
        </p>
      </div>

      {/* Container Utama (Rasio Seimbang 6:6 / 50:50) */}
      <div className="grid gap-6 sm:gap-8 rounded-3xl bg-cream p-4 sm:p-6 lg:p-8 shadow-lg lg:grid-cols-12 items-stretch">

        {/* ================= SISI KIRI: PETA (6 KOLOM - DIPERBESAR & SEIMBANG) ================= */}
        <div
          className="relative min-h-[380px] sm:min-h-[500px] lg:min-h-[580px] w-full overflow-hidden rounded-2xl lg:col-span-6 flex items-center justify-center bg-transparent"
          onMouseLeave={() => setHoveredRegionId(null)}
        >
          {/* Wrapper Gambar Peta dengan Proporsi Maksimal */}
          <div className="relative w-full h-full min-h-[380px] sm:min-h-[500px] lg:min-h-[580px]">
            <Image
              src="/maps-jogja.png"
              alt="Peta DI Yogyakarta"
              fill
              className="object-contain mix-blend-multiply p-0 sm:p-2"
              priority
            />

            {/* Pin Tiap Daerah */}
            {diyRegions.map((region) => {
              const isHovered = hoveredRegionId === region.id;
              return (
                <button
                  key={region.id}
                  onMouseEnter={() => setHoveredRegionId(region.id)}
                  onClick={() => handleRegionClick(region.id)}
                  style={{ top: region.top, left: region.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs lg:text-sm font-bold transition-all duration-300 shadow-md whitespace-nowrap ${isHovered
                    ? "bg-stone text-cream scale-110 z-20 ring-4 ring-stone/30"
                    : "bg-white/95 text-grey-dark hover:bg-stone hover:text-cream z-10"
                    }`}
                >
                  <span className="sm:hidden">{region.name}</span>
                  <span className="hidden sm:inline">{region.fullName}</span>
                </button>
              );
            })}

            {/* Pin Lokasi Villa */}
            <div
              style={{ top: "52%", left: "42%" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center gap-1 sm:gap-1.5 bg-red-600 text-white text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1 rounded-full font-extrabold shadow-xl animate-bounce whitespace-nowrap"
            >
              📍 Villa Anda
            </div>
          </div>
        </div>

        {/* ================= SISI KANAN: PANEL DETAIL (6 KOLOM - SEIMBANG) ================= */}
        <div className="flex flex-col justify-between rounded-2xl bg-white/95 p-5 sm:p-7 lg:p-8 lg:col-span-6 shadow-sm min-h-[450px]">
          {activeRegion ? (
            /* 1. TAMPILAN SAAT DAERAH DI-HOVER / DI-TAP */
            <div className="flex flex-col h-full justify-between animate-fadeIn space-y-5">
              <div>
                {/* Foto Visual Wilayah */}
                <div className="relative h-48 sm:h-60 lg:h-64 w-full overflow-hidden rounded-2xl shadow-sm mb-5">
                  <Image
                    src={activeRegion.image}
                    alt={activeRegion.fullName}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-xl bg-stone/90 backdrop-blur-sm px-3.5 py-1.5 text-xs sm:text-sm font-bold text-cream shadow">
                    ⏱️ Jarak Tempuh: ± {activeRegion.distance}
                  </span>
                </div>

                {/* Nama & Deskripsi Wilayah */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-grey-dark">
                  {activeRegion.fullName}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-ink/80">
                  {activeRegion.description}
                </p>
              </div>

              {/* List Objek Wisata Populer */}
              <div className="pt-2">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone mb-2.5">
                  📍 Destinasi Populer Sekitar:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeRegion.objects.map((obj) => (
                    <span
                      key={obj}
                      className="rounded-xl bg-cream px-3 py-1.5 text-xs sm:text-sm font-semibold text-grey-dark shadow-sm"
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* 2. TAMPILAN DEFAULT */
            <div className="flex flex-col h-full justify-between space-y-5">
              <div>
                {/* Foto Visual Default */}
                <div className="relative h-44 sm:h-56 lg:h-60 w-full overflow-hidden rounded-2xl shadow-sm mb-5">
                  <Image
                    src="/frontVilla.JPG"
                    alt="Aksesibilitas Villa"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 text-cream">
                    <p className="text-xs font-semibold text-stone-light uppercase tracking-wider">
                      Kemudahan Akses &amp; Lokasi
                    </p>
                    <p className="font-display text-lg sm:text-2xl font-bold mt-0.5">
                      Pusat Transportasi Utama
                    </p>
                  </div>
                </div>

                {/* List Kartu Transportasi */}
                <div className="space-y-3">
                  {transportHubs.map((hub) => (
                    <div
                      key={hub.name}
                      className="flex items-center gap-3.5 sm:gap-4 rounded-2xl bg-cream/70 p-3.5 sm:p-4 transition-all hover:bg-cream hover:shadow-sm"
                    >
                      <span className="text-2xl sm:text-3xl">{hub.icon}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-xs sm:text-sm font-bold text-grey-dark">
                            {hub.name}
                          </p>
                          <span className="text-xs sm:text-sm font-extrabold text-stone">
                            {hub.distance}
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs text-ink/70">
                          {hub.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panduan Aksi */}
              <div className="pt-2 text-center">
                <p className="text-xs sm:text-sm font-medium text-stone animate-pulse">
                  👆 Tap / Arahkan kursor ke wilayah pada peta untuk melihat informasi objek wisata.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}