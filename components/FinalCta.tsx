import Image from "next/image";
import DemoButton from "./DemoButton";
import Logo from "./Logo";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Image src="/images/night.jpg" alt="" fill sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />
      </div>

      <div className="relative mx-auto flex min-h-[90svh] max-w-6xl flex-col px-6">
        <div className="flex flex-1 flex-col items-center justify-center py-32 text-center">
          <Reveal>
            <h2 className="text-balance text-[clamp(2.8rem,7.6vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.05em]">
              Your next buyer
              <br />
              <span className="font-serif font-normal italic tracking-[-0.02em] text-lime">is already looking.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <DemoButton className="!px-7 !py-3.5 !text-base" />
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <Logo className="text-xl text-white" />
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
            {site.email}
          </a>
          <p>© {new Date().getFullYear()} Exumo</p>
        </div>
      </div>
    </footer>
  );
}
