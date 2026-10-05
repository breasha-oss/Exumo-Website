import Reveal from "./Reveal";

// Customer names intentionally omitted. `em` is the phrase highlighted in each quote.
const quotes = [
  {
    pre: "Trade databases gave me 2 good buyers out of 10. With Exumo, ",
    em: "70–80% of my buyers are the right fit",
    post: ", every single day.",
    who: "Exporter · India",
  },
  {
    pre: "Trade shows used to be hit or miss. Now Exumo ",
    em: "sets up meetings around my travel",
    post: ", so every trip abroad is worth it.",
    who: "Exporter · India",
  },
  {
    pre: "Done by hand, follow-ups slip. Exumo ",
    em: "keeps our team on track",
    post: " and brings real rigour to selling globally.",
    who: "Exporter · India",
  },
  {
    pre: "It tells us when to move: a country entering a buying cycle, a policy shift opening a market. ",
    em: "We love how proactive it is.",
    post: "",
    who: "Exporter · India",
  },
];

export default function Voices() {
  return (
    <section aria-labelledby="voices-title" className="bg-paper-2 px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2
            id="voices-title"
            className="text-[clamp(2.2rem,5vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.045em]"
          >
            What customers <span className="font-serif font-normal italic tracking-[-0.02em] text-green">have to say.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={0.08 * (i % 2)}>
              <figure className="flex h-full flex-col justify-between rounded-[28px] bg-paper p-8 sm:p-10">
                <blockquote className="text-balance font-serif text-[clamp(1.6rem,2.6vw,2.15rem)] leading-[1.12] tracking-[-0.01em] text-ink/70">
                  “{q.pre}
                  <span className="bg-[linear-gradient(var(--color-lime),var(--color-lime))] bg-[length:100%_0.12em] bg-[position:0_95%] bg-no-repeat text-ink [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
                    {q.em}
                  </span>
                  {q.post}”
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-green">
                  <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
                    <rect x="1.5" y="1.5" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
                  </svg>
                  {q.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
