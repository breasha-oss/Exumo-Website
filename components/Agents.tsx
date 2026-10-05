import {
  Envelope,
  GlobeHemisphereWest,
  Handshake,
  LinkedinLogo,
  MagnifyingGlass,
  PaperPlaneTilt,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import Reveal from "./Reveal";

type Agent = {
  n: string;
  name: string;
  line: string;
  icon: Icon;
  points: string[];
  channels?: boolean;
};

const agents: Agent[] = [
  {
    n: "01",
    name: "Plan",
    line: "Picks the markets worth your time.",
    icon: GlobeHemisphereWest,
    points: ["Scores every market for your product", "Flags buying cycles and trade-policy shifts", "Defines exactly who to target"],
  },
  {
    n: "02",
    name: "Find",
    line: "Finds importers ready to buy now.",
    icon: MagnifyingGlass,
    points: ["New buyers surfaced every day", "The right decision-maker, not a generic inbox", "Verified emails and numbers"],
  },
  {
    n: "03",
    name: "Reach",
    line: "Outreach on every channel, on autopilot.",
    icon: PaperPlaneTilt,
    channels: true,
    points: ["Personalised and sequenced", "Never misses a follow-up"],
  },
  {
    n: "04",
    name: "Close",
    line: "Gets you to the meeting, ready to win.",
    icon: Handshake,
    points: ["Handles every reply until a meeting is booked", "Buyer verification", "Pricing and deal context"],
  },
];

const channels = [
  { label: "WhatsApp", icon: WhatsappLogo },
  { label: "LinkedIn", icon: LinkedinLogo },
  { label: "Email", icon: Envelope },
];

function Diamond() {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" className="mt-[0.45em] h-2 w-2 shrink-0 text-green">
      <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
    </svg>
  );
}

export default function Agents() {
  return (
    <section className="bg-paper px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              Four agents. <span className="font-serif font-normal italic tracking-[-0.02em] text-green">Always on.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[17px] leading-relaxed text-stone lg:justify-self-end">
              Exumo doesn&apos;t wait to be asked. It watches your markets, finds buyers and follows up,{" "}
              <span className="text-ink">every single day.</span>
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a, i) => {
            const AgentIcon = a.icon;
            return (
              <Reveal as="li" key={a.n} delay={i * 0.08}>
                <article className="group flex h-full flex-col rounded-[28px] bg-white p-3 ring-1 ring-ink/5">
                  <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-[22px] bg-forest">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:16px_16px]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,224,110,0.28),transparent_60%)] transition-transform duration-700 ease-out-expo group-hover:scale-125"
                    />
                    <span className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.2em] text-white/55">{a.n}</span>
                    <span className="relative grid h-20 w-20 place-items-center rounded-full bg-lime/10 ring-1 ring-lime/30 transition-transform duration-700 ease-out-expo group-hover:scale-110">
                      <AgentIcon aria-hidden="true" size={38} weight="light" className="text-lime" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-5 pt-6">
                    <h3 className="text-[1.75rem] font-medium leading-none tracking-[-0.04em]">{a.name}</h3>
                    <p className="mt-3 text-[15px] leading-snug text-ink">{a.line}</p>

                    {a.channels && (
                      <ul aria-label="Channels" className="mt-5 flex flex-wrap gap-1.5">
                        {channels.map((c) => {
                          const ChannelIcon = c.icon;
                          return (
                            <li
                              key={c.label}
                              className="inline-flex items-center gap-1.5 rounded-full bg-paper px-2.5 py-1 text-[13px] text-ink ring-1 ring-ink/10"
                            >
                              <ChannelIcon aria-hidden="true" size={14} weight="regular" className="text-green" />
                              {c.label}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    <ul className="mt-5 space-y-2.5 border-t border-ink/10 pt-5">
                      {a.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-[14px] leading-snug text-stone">
                          <Diamond />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
