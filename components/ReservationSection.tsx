import { waLink } from "@/data/villaData";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export function ReservationSection() {
  return (
    <section id="reservasi" className="mx-auto max-w-6xl px-6 py-16">
      <div className="arch-frame overflow-hidden rounded-sm bg-grey-dark px-8 py-14 text-center text-cream sm:px-16">
        <p className="text-sm text-stone/80">Reservasi</p>
        <h2 className="mx-auto mt-3 max-w-lg font-display text-3xl leading-tight sm:text-4xl">
          Tanya ketersediaan dan pesan langsung ke pemilik villa.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-cream/75">
          Tanpa perantara — chat langsung dengan owner untuk cek tanggal,
          harga, dan syarat menginap.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone px-8 py-3.5 text-sm font-medium text-grey-deep transition hover:bg-stone/80"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}