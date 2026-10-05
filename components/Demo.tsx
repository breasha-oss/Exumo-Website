"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const VIDEO_ID = "-R4K6Zsc2TU";

type Tab = { id: string; label: string; caption: string; img?: string; alt?: string };

const tabs: Tab[] = [
  {
    id: "markets",
    label: "Market map",
    caption: "Every market scored for your product. The best ones first.",
    img: "/images/product/markets.webp",
    alt: "Exumo GTM analysis: a world map of 98 markets scored for one product, with Spain and the UK ranked highest",
  },
  {
    id: "buyers",
    label: "Live buyers",
    caption: "New importers enrolled every day. The agent never stops scouting.",
    img: "/images/product/leads.webp",
    alt: "Exumo sales agent: a list of 289 enrolled buyer companies with outreach status",
  },
  {
    id: "outreach",
    label: "Outreach flow",
    caption: "Personalised email and LinkedIn sequences that follow up for you.",
    img: "/images/product/outreach.webp",
    alt: "Exumo outreach flow: parallel email and LinkedIn sequences with wait steps between messages",
  },
  { id: "video", label: "Watch the demo", caption: "Company profile → GTM analysis → Sales automation, in a few minutes." },
];

export default function Demo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = tabs[active];

  const select = (i: number) => {
    setActive(i);
    tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") select((active + 1) % tabs.length);
    else if (e.key === "ArrowLeft") select((active - 1 + tabs.length) % tabs.length);
    else return;
    e.preventDefault();
  };

  return (
    <section id="product" className="grain relative overflow-hidden bg-ink px-6 py-28 text-white sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">The product</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 text-[clamp(2.4rem,5.4vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em]">
                See it <span className="font-serif font-normal italic tracking-[-0.02em] text-lime">work.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div
              role="tablist"
              aria-label="Product views"
              onKeyDown={onKeyDown}
              className="-mx-6 flex gap-1 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:rounded-full sm:bg-white/5 sm:p-1 sm:ring-1 sm:ring-white/10 [&::-webkit-scrollbar]:hidden"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={active === i}
                  aria-controls="product-panel"
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative min-h-11 shrink-0 cursor-pointer rounded-full px-4 text-sm transition-colors duration-300 ${
                    active === i ? "text-ink" : "text-white/65 hover:text-white"
                  }`}
                >
                  {active === i && (
                    <motion.span
                      layoutId="product-tab"
                      className="absolute inset-0 rounded-full bg-lime"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 sm:mt-14">
          <div
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className="rounded-[30px] bg-white/[0.06] p-2 ring-1 ring-white/10 sm:p-3"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] sm:aspect-[5/3] bg-[#f6f7f9]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={tab.id}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {tab.img ? (
                    <Image
                      src={tab.img}
                      alt={tab.alt ?? ""}
                      fill
                      sizes="(min-width:1200px) 1150px, 100vw"
                      className="object-cover object-left-top"
                    />
                  ) : playing ? (
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                      title="Exumo product demo"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlaying(true)}
                      aria-label="Play the Exumo product demo"
                      className="group absolute inset-0 grid cursor-pointer place-items-center bg-forest"
                    >
                      <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,224,110,0.22),transparent_60%)]" />
                      <span className="relative grid h-20 w-20 place-items-center rounded-full bg-lime text-ink transition-transform duration-500 ease-out-expo group-hover:scale-110 sm:h-24 sm:w-24">
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor">
                          <path d="M7 4.5v15l13-7.5z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>
              {tab.img && (
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6f7f9] to-transparent" />
              )}
            </div>
          </div>
          <p aria-live="polite" className="mt-6 text-center text-[15px] text-white/60">
            {tab.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
