import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Villa Imperial Syariah",
};

// ---------------------------------------------------------------------------
// GANTI DATA DI BAWAH INI dengan data villa yang sebenarnya:
// nomor WhatsApp, alamat, harga, tautan listing Booking.com/Traveloka,
// serta foto asli (ganti komponen <PhotoPlaceholder /> dengan <Image />).
// ---------------------------------------------------------------------------

const WA_NUMBER = "6281234567890"; // format internasional tanpa "+"
const WA_MESSAGE =
  "Assalamualaikum, saya ingin tanya ketersediaan kamar di Villa Imperial Syariah.";
const waLink = (msg: string = WA_MESSAGE) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const facilities = [
  { title: "4 Kamar Tidur Ber-AC", desc: "Setiap kamar dengan kasur king/twin, AC, dan lemari pakaian." },
  { title: "Kolam Renang Privat", desc: "Dikelilingi pagar tinggi, terpisah dari pandangan luar." },
  { title: "Mushola Kecil & Perlengkapan Sholat", desc: "Sajadah, mukena, dan arah kiblat tersedia di setiap kamar." },
  { title: "Dapur & Ruang Makan", desc: "Dapur bersih siap pakai untuk keluarga yang menginap lebih lama." },
  { title: "Parkir Tertutup", desc: "Area parkir pribadi di dalam pagar villa, muat hingga 3 mobil." },
  { title: "Wi-Fi & Smart TV", desc: "Internet cepat dan hiburan keluarga bebas konten yang tidak pantas." },
];

const shariaPoints = [
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

const reviews = [
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

function PhotoPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`relative flex items-end overflow-hidden bg-gradient-to-br from-emerald to-emerald-deep ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--brass-light) 0 1px, transparent 1px 26px)",
        }}
      />
      <span className="relative z-10 m-4 rounded-full border border-brass-light/60 px-3 py-1 text-xs text-sage">
        Ganti dengan foto: {label}
      </span>
    </div>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.36.66 4.56 1.8 6.44L4 29l7.75-1.75A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.6 1.04 1.02-4.48-.25-.4A9.63 9.63 0 0 1 5.3 15c0-5.9 4.8-10.7 10.72-10.7S26.74 9.1 26.74 15 21.94 24.7 16.02 24.7Zm5.86-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1 1.26-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.72-1.75-.99-2.4-.26-.62-.53-.54-.72-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.43 5.4 4.81.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function ArchDivider() {
  return (
    <svg width="34" height="20" viewBox="0 0 34 20" fill="none" aria-hidden="true" className="mx-auto text-brass">
      <path
        d="M1 19V9.5C1 4.8 5.5 1 11 1h12c5.5 0 10 3.8 10 8.5V19"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg tracking-tight text-emerald">
            Villa Imperial <span className="italic text-brass">Syariah</span>
          </span>
          <nav className="hidden gap-8 text-sm text-ink/80 md:flex">
            <a href="#tentang" className="hover:text-emerald">Tentang</a>
            <a href="#fasilitas" className="hover:text-emerald">Fasilitas</a>
            <a href="#ulasan" className="hover:text-emerald">Ulasan</a>
            <a href="#reservasi" className="hover:text-emerald">Reservasi</a>
          </nav>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald px-4 py-2 text-sm font-medium text-ivory transition hover:bg-emerald-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        <div className="reveal flex flex-col justify-center">
          <p className="mb-4 text-sm text-brass">Villa keluarga · ramah syariah</p>
          <h1 className="font-display text-4xl leading-[1.1] text-emerald sm:text-5xl">
            Menginap tenang, sesuai kaidah, bersama orang tersayang.
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">
            Villa Imperial Syariah menghadirkan penginapan privat dengan kolam
            renang tertutup, mushola kecil di setiap kamar, dan lingkungan
            yang menjaga kenyamanan keluarga Muslim — tanpa mengorbankan
            kemewahan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-medium text-ivory transition hover:bg-brass-light hover:text-emerald-deep"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Booking langsung via WhatsApp
            </a>
            <a
              href="#ulasan"
              className="inline-flex items-center gap-2 rounded-full border border-emerald/30 px-6 py-3 text-sm font-medium text-emerald hover:bg-sage/50"
            >
              Lihat ulasan tamu
            </a>
          </div>
        </div>
        <div className="arch-frame">
          <PhotoPlaceholder className="arch h-[420px] w-full" label="tampak depan villa" />
        </div>
      </section>

      {/* TENTANG + PRINSIP SYARIAH */}
      <section id="tentang" className="border-y border-line/60 bg-emerald text-ivory">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-xl">
            <p className="text-sm text-brass-light">Tentang villa</p>
            <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Dirancang agar setiap tamu tenang menjalankan ibadah, sekaligus
              beristirahat dengan leluasa.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ivory/80">
              Berdiri di atas lahan tertutup dengan pagar tinggi di sekeliling,
              Villa Imperial Syariah dikelola langsung oleh pemiliknya untuk
              memastikan setiap tamu — keluarga besar, rombongan pengajian,
              maupun pasangan menikah — mendapat kenyamanan yang sama.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {shariaPoints.map((p) => (
              <div key={p.title} className="border-t border-brass-light/40 pt-5">
                <ArchDivider />
                <h3 className="mt-4 font-display text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/75">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FASILITAS */}
      <section id="fasilitas" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm text-brass">Fasilitas</p>
        <h2 className="mt-3 max-w-lg font-display text-3xl leading-tight text-emerald">
          Semua kebutuhan menginap keluarga, dalam satu villa.
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="border-l border-line pl-5">
              <h3 className="font-display text-base text-emerald">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <PhotoPlaceholder className="h-40 rounded-sm" label="kamar tidur" />
          <PhotoPlaceholder className="h-40 rounded-sm" label="kolam renang" />
          <PhotoPlaceholder className="h-40 rounded-sm" label="ruang keluarga" />
          <PhotoPlaceholder className="h-40 rounded-sm" label="mushola" />
        </div>
      </section>

      {/* ULASAN */}
      <section id="ulasan" className="bg-ivory-dim">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm text-brass">Kata tamu kami</p>
              <h2 className="mt-3 max-w-md font-display text-3xl leading-tight text-emerald">
                Ulasan asli dari Booking.com &amp; Traveloka.
              </h2>
            </div>
            <div className="flex gap-3 text-sm">
              <a
                href="https://www.booking.com/searchresults.html?ss=Villa+Imperial+Syariah"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald/30 px-4 py-2 text-emerald hover:bg-sage/60"
              >
                Semua ulasan di Booking.com ↗
              </a>
              <a
                href="https://www.traveloka.com/en-id/hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald/30 px-4 py-2 text-emerald hover:bg-sage/60"
              >
                Semua ulasan di Traveloka ↗
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-ink/50">
            *Contoh tampilan kartu ulasan — ganti kutipan, rating, dan tautan
            di bawah dengan ulasan asli dari dashboard listing Anda.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-sm border border-line bg-ivory p-6 transition hover:border-brass"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-emerald">{r.source}</span>
                    <span className="font-display text-lg text-brass">
                      {r.rating}
                      <span className="text-xs text-ink/50">{r.scale}</span>
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/75">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-xs">
                  <span className="text-ink/50">{r.name}</span>
                  <span className="text-emerald group-hover:text-brass">
                    Baca di {r.source} ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVASI */}
      <section id="reservasi" className="mx-auto max-w-6xl px-6 py-16">
        <div className="arch-frame overflow-hidden rounded-sm bg-emerald px-8 py-14 text-center text-ivory sm:px-16">
          <p className="text-sm text-brass-light">Reservasi</p>
          <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
            Tanya ketersediaan dan pesan langsung ke pemilik villa.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ivory/75">
            Tanpa perantara — chat langsung dengan owner untuk cek tanggal,
            harga, dan syarat menginap.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brass px-8 py-3.5 text-sm font-medium text-emerald-deep transition hover:bg-brass-light"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat via WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line/60 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-ink/60">
          <span className="font-display text-emerald">Villa Imperial Syariah</span>
          <span>[Alamat villa — lengkapi di sini]</span>
          <span>© {new Date().getFullYear()} Villa Imperial Syariah</span>
        </div>
      </footer>
    </div>
  );
}
