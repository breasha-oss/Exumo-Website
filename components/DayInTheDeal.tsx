"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";

type Beat = {
  role: string;
  action: string;
  hand: string;
  exumo: string;
  motif: React.ReactNode;
};

const ease = [0.16, 1, 0.3, 1] as const;

function Bars() {
  return (
    <div className="flex items-end gap-1.5">
      {[40, 72, 95, 58, 34, 80].map((h, i) => (
        <motion.span
          key={i}
          className="w-3 rounded-t bg-lime/80"
          initial={{ height: 6 }}
          animate={{ height: h }}
          transition={{ duration: 0.6, delay: i * 0.05, ease }}
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

function Chips() {
  return (
    <div className="flex flex-wrap gap-1.5">
      {["Verified ✓", "VP Procurement", "Dubai, UAE", "+197 more"].map((c) => (
        <span key={c} className="rounded-full bg-lime/10 px-2.5 py-1 text-[12px] text-white ring-1 ring-lime/30">
          {c}
        </span>
      ))}
    </div>
  );
}

function EmailLines() {
  return (
    <div className="space-y-1.5">
      <p className="text-[13px] text-white">Happy 30th, Atlas — a note from Hyderabad</p>
      {[90, 100, 72].map((w, i) => (
        <span key={i} className="block h-1.5 rounded-full bg-white/25" style={{ width: `${w}%` }} />
      ))}
    </div>
  );
}

function Sequence() {
  return (
    <div className="flex items-center gap-2 text-[12px] text-white/80">
      {["Email", "LinkedIn", "Email", "WhatsApp"].map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="h-px w-4 bg-lime/50" />}
          <span className="rounded-full bg-lime/10 px-2 py-0.5 ring-1 ring-lime/30">{c}</span>
        </span>
      ))}
    </div>
  );
}

function Booked() {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl bg-lime px-3 py-2 text-[13px] font-medium text-ink">
      <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Meeting booked
    </div>
  );
}

const beats: Beat[] = [
  {
    role: "Searching",
    action: "Pick the market",
    hand: "Guess across 90 markets. Months of research and gut feel.",
    exumo: "90+ markets scored on demand, tariffs and competition. A shortlist in minutes.",
    motif: <Bars />,
  },
  {
    role: "Qualifying",
    action: "Find the buyers",
    hand: "Dig through Alibaba and IndiaMART. Two in ten leads worth a call.",
    exumo: "200+ ready buyers a week — the right contact, verified.",
    motif: <Chips />,
  },
  {
    role: "Writing",
    action: "Write the outreach",
    hand: "Copy-paste a template. It gets ignored.",
    exumo: "Per-buyer research becomes a note a 20-year veteran would send.",
    motif: <EmailLines />,
  },
  {
    role: "Timing",
    action: "Keep following up",
    hand: "Follow-ups slip. The deal goes cold.",
    exumo: "15+ touches across email, LinkedIn and WhatsApp. Never missed.",
    motif: <Sequence />,
  },
  {
    role: "Closing",
    action: "Close the deal",
    hand: "Show up cold and hope.",
    exumo: "Walk in knowing the market, the buyer and the moment. 8–10 meetings a month.",
    motif: <Booked />,
  },
];

function BeatCards({ beat }: { beat: Beat }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease }}
        className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">By hand</p>
        <p className="mt-5 text-[clamp(1.25rem,2.2vw,1.7rem)] leading-snug text-white/55 line-through decoration-white/25 decoration-1">
          {beat.hand}
        </p>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.05, ease }}
        className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-forest p-6 ring-1 ring-lime/20 sm:p-8"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(139,224,110,0.22),transparent_55%)]"
        />
        <div className="relative">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">With Exumo</p>
          <p className="mt-5 text-[clamp(1.25rem,2.2vw,1.7rem)] font-medium leading-snug text-white">{beat.exumo}</p>
        </div>
        <div className="relative mt-8">{beat.motif}</div>
      </motion.div>
    </div>
  );
}

export default function DayInTheDeal() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(beats.length - 1, Math.max(0, Math.floor(p * beats.length)));
    setActive(next);
  });

  return (
    <section id="day" aria-labelledby="day-title" className="grain relative bg-ink text-white">
      {/* Mobile + reduced-motion: stack every beat, no pinning. */}
      <div className={`${reduce ? "" : "lg:hidden"} px-6 py-24 sm:py-32`}>
        <div className="mx-auto max-w-xl">
          <Header />
          <div className="mt-14 space-y-12">
            {beats.map((b, i) => (
              <div key={b.role}>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-lime">
                    0{i + 1} / 0{beats.length}
                  </span>
                  <h3 className="text-[clamp(1.4rem,6vw,1.9rem)] font-medium tracking-[-0.03em]">{b.action}</h3>
                </div>
                <BeatCards beat={b} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: pinned, scroll-scrubbed beats. */}
      {!reduce && (
        <div ref={ref} className="hidden lg:block" style={{ height: "460vh" }}>
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6">
            <div className="mx-auto w-full max-w-6xl">
              <Header />

              <div className="mt-10 grid grid-cols-[200px_1fr] gap-12">
                {/* Role rail */}
                <ol aria-hidden="true">
                  {beats.map((b, i) => (
                    <li key={b.role} className="relative flex items-center gap-3 py-2.5">
                      <span
                        className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-medium transition-colors duration-500 ${
                          i <= active ? "bg-lime text-ink" : "bg-white/10 text-white/40"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-[15px] transition-colors duration-500 ${
                          i === active ? "text-white" : i < active ? "text-white/60" : "text-white/35"
                        }`}
                      >
                        {b.role}
                      </span>
                    </li>
                  ))}
                </ol>

                {/* One keyed wrapper keeps counter, heading and cards on the same beat. */}
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="mb-5 flex items-baseline gap-3">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-lime">
                      0{active + 1} / 0{beats.length}
                    </span>
                    <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-medium tracking-[-0.03em]">{beats[active].action}</h3>
                  </div>
                  <BeatCards beat={beats[active]} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Header() {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">A day in the deal</p>
      <h2
        id="day-title"
        className="mt-5 text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.045em]"
      >
        The grunt work before every deal, <span className="font-serif font-normal italic text-lime">handled.</span>
      </h2>
    </div>
  );
}
