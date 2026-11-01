"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import DemoButton from "./DemoButton";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // The video can be ready before React hydrates, so its canplay event is missed.
  useEffect(() => {
    if ((videoRef.current?.readyState ?? 0) >= 3) setVideoReady(true);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="grain relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-white">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
        <Image
          src="/images/port.jpg"
          alt="A container port at dusk, cranes over a docked cargo ship"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
        {!reduce && (
          <video
            ref={videoRef}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-[50%_60%] transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
            src="/videos/hero.mp4"
            poster="/images/port.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onTimeUpdate={videoReady ? undefined : () => setVideoReady(true)}
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/10 to-ink/85" />

      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10 sm:pb-14"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="mb-6 inline-flex w-fit items-center gap-2.5 rounded-full bg-white/10 py-2 pl-3 pr-4 text-sm text-white ring-1 ring-white/20 backdrop-blur-md sm:mb-8"
        >
          <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5 text-lime">
            <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
          </svg>
          For exporters &amp; manufacturers
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="text-balance text-[clamp(2.4rem,6.6vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.045em]"
        >
          Turn export reps into
          <br />
          <span className="font-serif font-normal italic tracking-[-0.02em] text-lime">expert dealmakers.</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-[17px] leading-relaxed text-white/75">
            Exumo does the hunting — markets, buyers, timing, outreach — so your team walks into every deal
            already knowing the market, the buyer and the moment.{" "}
            <span className="text-white">8–10 qualified meetings a month.</span>
          </p>
          <div className="flex items-center gap-3">
            <DemoButton />
            <a
              href="#how"
              className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] text-white/75 transition-colors hover:text-white"
            >
              How it works
            </a>
          </div>
        </motion.div>

        <div className="mt-10 hidden items-center justify-between border-t border-white/15 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 sm:flex">
          <span>Markets · Buyers · Outreach · Timing</span>
          <span>Done for your team</span>
          <span>Scroll ↓</span>
        </div>
      </motion.div>
    </section>
  );
}
