import Image from "next/image";

const facilities = [
  {
    title: "Ruang Utama Keluarga",
    description: "Area santai yang lapang untuk kumpul bersama seluruh anggota keluarga.",
    image: "/mainRoom.webp",
    alt: "Ruang Utama Villa",
  },
  {
    title: "3 Kamar Tidur Privat",
    description: "Kamar tidur nyaman dengan suasana tenang untuk istirahat maksimal.",
    image: "/room1.webp",
    alt: "Kamar Tidur Villa",
  },
  {
    title: "Dapur & Area Makan",
    description: "Lengkap dengan peralatan memasak modern dan meja makan keluarga.",
    image: "/kitchen.webp",
    alt: "Dapur & Ruang Makan Villa",
  },
  {
    title: "Kamar Mandi Modern",
    description: "Fasilitas kamar mandi bersih dan terawat dengan perlengkapan saniter lengkap.",
    image: "/bathRoom.webp",
    alt: "Kamar Mandi Villa",
  },
  {
    title: "Area Cuci & Laundry",
    description: "Fasilitas mesin cuci dan tempat jemur untuk menginap jangka panjang.",
    image: "/washingRoom.webp",
    alt: "Area Laundry Villa",
  },
  {
    title: "Akses & Garasi Privat",
    description: "Parkir tertutup dan aman untuk menjaga privasi kendaraan Anda.",
    image: "/entrance.webp",
    alt: "Garasi & Akses Villa",
  },
];

export function FacilitiesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-stone">
            Fasilitas
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-grey-dark">
            Fasilitas Utama Villa
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-cream/50 transition-all duration-300 hover:bg-cream"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-grey-dark">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink/75">
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