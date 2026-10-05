"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const items = [
  { name: "Apparel", note: "Clothing lines", img: "/images/cat/apparel.jpg" },
  { name: "Couture", note: "Designer wear", img: "/images/cat/couture.jpg" },
  { name: "Textiles", note: "Fabrics & home", img: "/images/cat/textiles.jpg" },
  { name: "Handicraft", note: "Décor & gifting", img: "/images/cat/handicraft.jpg" },
  { name: "Tiles & Bath", note: "Surfaces & fittings", img: "/images/cat/tiles.jpg" },
  { name: "Steel", note: "Engineered components", img: "/images/cat/steel.jpg" },
  { name: "Packaging", note: "Plastic & rigid", img: "/images/cat/packaging.jpg" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5">
      {items.map((it) => (
        <li key={it.name} className="w-[220px] shrink-0 sm:w-[280px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper-2">
            <Image src={it.img} alt={hidden ? "" : `${it.name} exports`} fill sizes="280px" className="object-cover" />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-3 px-1">
            <p className="text-lg font-medium tracking-[-0.02em]">{it.name}</p>
            <p className="text-[13px] text-stone">{it.note}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Industries() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="industries-title" className="overflow-hidden bg-paper py-28 sm:py-40">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 sm:flex-row sm:items-end">
        <Reveal>
          <h2
            id="industries-title"
            className="max-w-2xl text-balance text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.045em]"
          >
            Already selling abroad across{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-green">seven categories.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 text-sm text-stone ring-1 ring-ink/15 transition-colors hover:text-ink"
          >
            {paused ? "Play" : "Pause"}
            <span className="sr-only"> category carousel</span>
          </button>
        </Reveal>
      </div>

      <div
        className="mt-14 flex w-max animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: "60s", animationPlayState: paused ? "paused" : undefined }}
      >
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
