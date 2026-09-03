import { reviews } from "@/data/villaData";

export function ReviewsSection() {
  return (
    <section id="ulasan" className="bg-cream-dim">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-stone">Kata tamu kami</p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight text-grey-dark">
              Ulasan asli dari Booking.com &amp; Traveloka.
            </h2>
          </div>
          <div className="flex gap-3 text-sm">
            <a
              href="https://www.booking.com/searchresults.html?ss=Villa+Imperial+Syariah"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-grey-dark/30 px-4 py-2 text-grey-dark hover:bg-grey-light/60"
            >
              Semua ulasan di Booking.com ↗
            </a>
            <a
              href="https://www.traveloka.com/en-id/hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-grey-dark/30 px-4 py-2 text-grey-dark hover:bg-grey-light/60"
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
              className="group flex flex-col justify-between rounded-sm border border-line bg-cream p-6 transition hover:border-stone"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-grey-dark">{r.source}</span>
                  <span className="font-display text-lg text-stone">
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
                <span className="text-grey-dark group-hover:text-stone">
                  Baca di {r.source} ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}