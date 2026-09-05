import Image from "next/image";

const facilities = [
  {
    title: "Ruang Utama Keluarga",
    points: [
      "Sofa santai & lapang",
      "1 TV di ruang utama",
      "Full AC & Wi-Fi 400 Mbps",
    ],
    image: "/mainRoom.JPG",
    alt: "Ruang Utama Villa",
  },
  {
    title: "3 Kamar Tidur Privat",
    points: [
      "3 Kamar tidur + Kamar mandi",
      "2 TV di dalam kamar",
      "Full AC di setiap kamar",
    ],
    image: "/room1.webp",
    alt: "Kamar Tidur Villa",
  },
  {
    title: "Dapur & Area Makan",
    points: [
      "Kitchen set lengkap & alat masak",
      "Meja makan keluarga",
      "Kulkas & peralatan makan",
    ],
    image: "/kitchen.webp",
    alt: "Dapur & Ruang Makan Villa",
  },
  {
    title: "Kamar Mandi Modern",
    points: [
      "Kamar mandi bersih & terawat",
      "Perlengkapan saniter lengkap",
      "Fasilitas air hangat",
    ],
    image: "/bathRoom.webp",
    alt: "Kamar Mandi Villa",
  },
  {
    title: "Area Cuci & Internet",
    points: [
      "Wi-Fi super cepat 400 Mbps",
      "Washroom & fasilitas cuci",
      "Ruangan ber-AC",
    ],
    image: "/washingRoom.webp",
    alt: "Area Laundry Villa",
  },
  {
    title: "Akses & Garasi Privat",
    points: [
      "Parkir luas (muat 2 mobil)",
      "Pagar tertutup & aman",
      "Akses privat keluarga",
    ],
    image: "/entrance.JPG",
    alt: "Garasi & Akses Villa",
  },
];

export function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone">
            Fasilitas
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-bold text-grey-dark">
            Fasilitas Utama Villa
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream/60 transition-all duration-500 hover:-translate-y-1.5 hover:bg-cream hover:shadow-2xl"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-grey-dark">
                    {item.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm sm:text-base font-medium text-grey-dark/90">
                        <span className="flex h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}