import Image from "next/image";

const galleryImages = [
  {
    src: "/frontVilla.webp",
    title: "Fasad & Pagar Utama",
    category: "Eksterior",
    description:
      "Area gerbang tertutup dengan pagar tinggi privat untuk menjamin keamanan dan privasi penuh seluruh anggota keluarga selama menginap.",
    className: "md:col-span-2 md:row-span-2 h-[350px] md:h-[500px]",
  },
  {
    src: "/mainRoom.webp",
    title: "Ruang Utama Keluarga",
    category: "Interior",
    description:
      "Ruang kumpul yang nyaman dilengkapi sofa empuk, pendingin udara (AC), dan Smart TV untuk momen kebersamaan santai.",
    className: "md:col-span-1 h-[240px] md:h-[240px]",
  },
  {
    src: "/room1.webp",
    title: "Kamar Tidur Utama",
    category: "Kamar",
    description:
      "Suasana istirahat yang tenang dengan kasur berkualitas, penata cahaya hangat, AC, serta akses TV pribadi.",
    className: "md:col-span-1 h-[240px] md:h-[240px]",
  },
  {
    src: "/kitchen.webp",
    title: "Dapur & Area Makan",
    category: "Fasilitas",
    description:
      "Kitchen set lengkap dengan kompor, kulkas, peralatan memasak, dan perlengkapan makan siap pakai.",
    className: "md:col-span-1 h-[240px] md:h-[240px]",
  },
  {
    src: "/bathRoom.webp",
    title: "Kamar Mandi Modern",
    category: "Sanitari",
    description:
      "Area kamar mandi bersih dan higienis yang dilengkapi shower air hangat serta sanitari terawat.",
    className: "md:col-span-1 h-[240px] md:h-[240px]",
  },
];

export function GallerySection() {
  return (
    <section id="galeri" className="py-16 sm:py-24 bg-cream/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone">
            Galeri Foto
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-grey-dark">
            Suasana & Sudut Villa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-grey-dark shadow-md ${item.className}`}
            >
              {/* Gambar Background */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay Gradient (Gelap Saat Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Badge Kategori Top-Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-sm border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Konten Teks & Penjelasan (Reveals on Hover) */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-cream/90 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}