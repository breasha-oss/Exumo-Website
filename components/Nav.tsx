"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import DemoButton from "./DemoButton";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#product", label: "Product" },
  { href: "#results", label: "Results" },
  { href: "#team", label: "Team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-5 pr-2 text-white transition-all duration-500 ease-out-expo ${
          scrolled ? "bg-ink/70 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#top" aria-label="Exumo home" className="text-[22px] leading-none">
          <Logo />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/75 transition-colors duration-200 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <DemoButton className="!min-h-10 !px-4 !py-2 !text-sm" />
      </nav>
    </header>
  );
}
