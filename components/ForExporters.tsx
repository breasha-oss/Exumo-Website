import Reveal from "./Reveal";

const fits = [
  { title: "You make it.", line: "Apparel, textiles, steel, packaging, handicraft, tiles and more." },
  { title: "You sell it abroad.", line: "Or want to. Any B2B product, any market." },
  { title: "You're doing $1–10M.", line: "With a small team finding buyers by hand." },
  { title: "You want meetings, not lists.", line: "Importers ready to talk, on your calendar." },
];

export default function ForExporters() {
  return (
    <section id="for" aria-labelledby="for-title" className="bg-paper px-6 pt-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green">Who it&apos;s for</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="for-title"
              className="mt-6 text-[clamp(2.8rem,6.5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.05em]"
            >
              Built for <span className="font-serif font-normal italic tracking-[-0.02em] text-green">exporters.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-stone">
              Manufacturers and export houses selling B2B across borders.
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-ink/15">
          {fits.map((f, i) => (
            <Reveal as="li" key={f.title} delay={0.06 * i} className="border-b border-ink/15">
              <div className="flex items-start gap-5 py-6 sm:gap-8 sm:py-7">
                <span className="mt-2 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime text-ink">
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-tight tracking-[-0.035em]">{f.title}</h3>
                  <p className="mt-1.5 text-[15px] text-stone">{f.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
