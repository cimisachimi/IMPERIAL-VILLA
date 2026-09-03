export const WA_NUMBER = "6281234567890"; // format internasional tanpa "+"
export const WA_MESSAGE =
  "Assalamualaikum, saya ingin tanya ketersediaan kamar di Villa Imperial Syariah.";

export const waLink = (msg: string = WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const facilities = [
  {
    title: "Kenyamanan Kamar Ber-AC",
    desc: "Kamar bebas rokok dengan AC, linen lengkap, rak baju, dan fasilitas setrika untuk kenyamanan istirahat Anda.",
    imageLabel: "Kamar Tidur Utama",
  },
  {
    title: "Dapur Lengkap & Mesin Cuci",
    desc: "Tersedia kulkas, microwave, oven, kompor, mesin cuci, hingga kursi makan anak (high chair) untuk keluarga.",
    imageLabel: "Dapur Bersih",
  },
  {
    title: "Kamar Mandi Bersih & Privat",
    desc: "Dilengkapi shower/bathtub, bidet, handuk, tisu toilet, serta didukung oleh layanan kebersihan harian.",
    imageLabel: "Kamar Mandi",
  },
  {
    title: "Ruang Keluarga & Teras",
    desc: "Area duduk yang luas dengan sofa yang nyaman, TV layar datar untuk hiburan, dan teras luar ruangan.",
    imageLabel: "Ruang Keluarga",
  },
  {
    title: "Wi-Fi Gratis & Area Kerja",
    desc: "Koneksi internet nirkabel (Wi-Fi) gratis di seluruh area kamar, lengkap dengan meja kerja.",
    imageLabel: "Meja Kerja",
  },
  {
    title: "Parkir Garasi & Ekstra",
    desc: "Tersedia garasi parkir pribadi gratis di lokasi (tanpa reservasi), layanan sarapan, hingga opsi penyewaan mobil.",
    imageLabel: "Garasi Parkir",
  },
];

export const shariaPoints = [
  {
    title: "Tamu Sesuai Ketentuan",
    desc: "Reservasi untuk keluarga, rombongan sejenis, atau pasangan dengan bukti nikah — kami jaga kenyamanan bersama.",
  },
  {
    title: "Bebas Alkohol & Zat Terlarang",
    desc: "Villa sepenuhnya bebas minuman keras dan aktivitas yang bertentangan dengan syariat.",
  },
  {
    title: "Privasi Terjaga",
    desc: "Pagar tinggi, kolam renang tertutup dari pandangan luar, dan staf yang menghormati privasi tamu.",
  },
];

export const reviews = [
  {
    source: "Booking.com",
    rating: "9.4",
    scale: "/ 10",
    name: "Tamu dari Semarang",
    quote:
      "Villa sangat bersih dan tenang, cocok untuk keluarga besar. Kolam renangnya privat sehingga anak-anak bisa berenang dengan nyaman.",
    href: "https://www.booking.com/searchresults.html?ss=Villa+Imperial+Syariah",
  },
  {
    source: "Traveloka",
    rating: "4.8",
    scale: "/ 5",
    name: "Tamu dari Solo",
    quote:
      "Suasananya asri dan sesuai syariah, ada mukena dan sajadah lengkap. Proses check-in ramah dan cepat.",
    href: "https://www.traveloka.com/en-id/hotel",
  },
  {
    source: "Booking.com",
    rating: "9.1",
    scale: "/ 10",
    name: "Tamu dari Yogyakarta",
    quote:
      "Lokasinya tenang, jauh dari keramaian tapi tetap mudah dijangkau. Owner responsif saat dihubungi lewat WhatsApp.",
    href: "https://www.booking.com/searchresults.html?ss=Villa+Imperial+Syariah",
  },
];

export interface RegionData {
  id: "kota" | "gunungkidul" | "kulonprogo";
  name: string;
  subtitle: string;
  description: string;
  distance: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

export const locationRegions: RegionData[] = [
  {
    id: "kota",
    name: "Kota Yogyakarta",
    subtitle: "Pusat Budaya & Wisata Kota",
    description: "Akses mudah dan cepat dari villa menuju pusat keramaian kota, wisata sejarah Keraton, serta pusat kuliner dan oleh-oleh Malioboro.",
    distance: "15 - 20 Menit",
    image: "/frontVilla.JPG", // Ganti dengan foto ikonik Kota Jogja / Malioboro
    imageAlt: "Kota Yogyakarta dan Malioboro",
    highlights: ["Malioboro & Tugu", "Keraton & Taman Sari", "Pusat Kuliner Gudeg"],
  },
  {
    id: "gunungkidul",
    name: "Gunungkidul",
    subtitle: "Eksotisme Pantai Pasir Putih",
    description: "Nikmati perjalanan menyenangkan menuju deretan pantai pasir putih tercantik dan pemandangan perbukitan karst eksotis di sisi timur Jogja.",
    distance: "45 - 60 Menit",
    image: "/frontVilla.JPG", // Ganti dengan foto Pantai / HeHa Sky View
    imageAlt: "Pantai dan Perbukitan Gunungkidul",
    highlights: ["HeHa Sky View", "Pantai Indrayanti & Drini", "Wisata Goa Pindul"],
  },
  {
    id: "kulonprogo",
    name: "Kulon Progo & Selatan",
    subtitle: "Bandara YIA & Pesona Pesisir",
    description: "Jalur langsung menuju Bandara Internasional Yogyakarta (YIA), kebun teh pegunungan Menoreh, dan pantai pesisir selatan.",
    distance: "30 - 45 Menit",
    image: "/frontVilla.JPG", // Ganti dengan foto Bandara YIA / Kebun Teh
    imageAlt: "Kulon Progo dan Jogja Selatan",
    highlights: ["Bandara YIA", "Kebun Teh Nglinggo", "Pantai Parangtritis"],
  },
];