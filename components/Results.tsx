"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function Count({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: setVal });
    return () => c.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toFixed(decimals)}
    </span>
  );
}

const stats = [
  { value: <><Count to={250} />%</>, label: "more buyer outreach" },
  { value: <><Count to={2.5} decimals={1} /><span className="text-[0.45em] tracking-[-0.02em]"> hrs</span></>, label: "saved every day" },
  { value: <>5–<Count to={10} /></>, label: "qualified meetings a month" },
];

export default function Results() {
  return (
    <section id="results" className="grain relative overflow-hidden bg-ink px-6 py-28 text-white sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">02 — From our pilots</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-balance text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            Less chasing. <span className="font-serif font-normal italic text-lime">More meetings.</span>
          </h2>
        </Reveal>

        <dl className="mt-20 grid gap-y-14 sm:mt-28 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 * i} className="border-t border-white/15 pt-6 sm:pr-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-[clamp(4rem,9vw,7.5rem)] font-medium leading-none tracking-[-0.06em]">{s.value}</dd>
              <dd className="mt-4 text-[15px] text-white/60">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
