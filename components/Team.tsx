import Image from "next/image";
import Reveal from "./Reveal";

const people = [
  { name: "Breasha", role: "CEO · Co-founder", line: "Led export sales & GTM at McKinsey. Stanford GSB, IIT Madras.", img: "/images/breasha.jpg" },
  { name: "Kundan", role: "CTO · Co-founder", line: "Founding engineer at AI Dash, 0 to exit. IIT BHU.", img: "/images/kundan.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="bg-paper px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-green">03 — Team</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-[clamp(2.2rem,4.6vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              Built by people who&apos;ve <span className="font-serif font-normal italic text-green">sold abroad.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {people.map((p, i) => (
            <Reveal as="li" key={p.name} delay={0.08 * i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.img}
                    alt={`${p.name}, ${p.role}`}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover grayscale-[35%] transition-all duration-700 ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-medium tracking-[-0.03em]">{p.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-green">{p.role}</p>
                  <p className="mt-4 text-[15px] leading-snug text-stone">{p.line}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
