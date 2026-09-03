import { shariaPoints } from "@/data/villaData";
import { ArchDivider } from "./icons/ArchDivider";

export function AboutSection() {
  return (
    <section id="tentang" className="border-y border-line/60 bg-grey-dark text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-xl">
          <p className="text-sm text-stone/80">Tentang villa</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Dirancang agar setiap tamu tenang menjalankan ibadah, sekaligus
            beristirahat dengan leluasa.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/80">
            Berdiri di atas lahan tertutup dengan pagar tinggi di sekeliling,
            Villa Imperial Syariah dikelola langsung oleh pemiliknya untuk
            memastikan setiap tamu — keluarga besar, rombongan pengajian,
            maupun pasangan menikah — mendapat kenyamanan yang sama.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {shariaPoints.map((p) => (
            <div key={p.title} className="border-t border-stone/40 pt-5">
              <ArchDivider />
              <h3 className="mt-4 font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}