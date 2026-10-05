"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Msg =
  | { from: "agent" | "you"; text: string }
  | { from: "card"; title: string; meta: string };

const script: Msg[] = [
  { from: "agent", text: "Hi! What do you want to sell, and where?" },
  { from: "you", text: "US buyers for my cotton bedsheets" },
  { from: "agent", text: "On it. Planning markets, finding buyers, launching outreach." },
  { from: "card", title: "Meeting booked", meta: "Home-textiles importer · USA · Thu 10:00" },
];

export default function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(script.length);
      return;
    }
    if (shown >= script.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 300 : 1300);
    return () => clearTimeout(t);
  }, [inView, shown, reduce]);

  const typing = inView && shown < script.length && shown > 0 && script[shown].from !== "you";

  return (
    <section id="how" className="relative overflow-hidden bg-paper px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green">01 — How it works</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance text-[clamp(2.6rem,6vw,5.25rem)] font-medium leading-[0.95] tracking-[-0.045em]">
              You chat.
              <br />
              <span className="font-serif font-normal italic tracking-[-0.02em] text-green">Agents do the work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-stone">
              Tell Exumo what you sell on WhatsApp. It handles the rest, until a meeting is on your calendar.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <div
            ref={ref}
            className="w-full max-w-[400px] overflow-hidden rounded-[32px] bg-white shadow-[0_40px_80px_-40px_rgba(15,27,38,0.35)] ring-1 ring-ink/5"
          >
            <div className="flex items-center gap-3 bg-forest px-5 py-4 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-lime/15">
                <svg aria-hidden="true" viewBox="0 0 10 10" className="h-3 w-3 text-lime">
                  <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-[15px] font-medium">Exumo</p>
                <p className="text-xs text-white/60">online</p>
              </div>
            </div>

            <ol aria-label="Example conversation with Exumo" className="flex min-h-[380px] flex-col gap-3 bg-[#f6f5f1] p-5">
              <AnimatePresence initial={false}>
                {script.slice(0, shown).map((m, i) => (
                  <motion.li
                    key={i}
                    initial={reduce ? false : { opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className={
                      m.from === "you"
                        ? "ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#dcefd9] px-4 py-3 text-[15px] text-ink"
                        : m.from === "agent"
                          ? "max-w-[85%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-[15px] text-ink shadow-sm"
                          : "mt-2 rounded-2xl bg-ink p-4 text-white"
                    }
                  >
                    {m.from === "card" ? (
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-ink">
                          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-[15px] font-medium">{m.title}</p>
                          <p className="text-[13px] text-white/60">{m.meta}</p>
                        </div>
                      </div>
                    ) : (
                      m.text
                    )}
                  </motion.li>
                ))}
              </AnimatePresence>
              {typing && (
                <li aria-hidden="true" className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-4 shadow-sm">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="h-1.5 w-1.5 rounded-full bg-stone/60"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </li>
              )}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
