# Exumo — brand kit

Source of truth for the marketing site. Values pulled from `app/globals.css`
and `app/layout.tsx`. Use this when producing demo videos, decks, or new UI so
everything stays on-brand.

## Colours

| Token | Hex | Where it's used |
|---|---|---|
| **Ink** (primary dark) | `#0F1B26` | Dark section backgrounds, primary text on light |
| **Ink-2** | `#172736` | Slightly lifted dark surfaces / cards on ink |
| **Forest** | `#123A28` | Deep-green cards / panels on dark (the "With Exumo" cards) |
| **Green** | `#1E7A4C` | Accent / labels on light backgrounds, links |
| **Lime** (signature accent) | `#8BE06E` | Hero accent, CTAs, the diamond mark, highlights, progress |
| **Paper** (primary light) | `#F3F1EC` | Main light background (warm off-white, not pure white) |
| **Paper-2** | `#E9E6DF` | Alternating light sections, muted surfaces |
| **Stone** | `#59636D` | Secondary / body text on light |

**Pairings that always work:** lime on ink · white on forest · ink on lime
(buttons) · stone on paper · green eyebrows on paper.

Keep pure white (`#FFFFFF`) only for text/UI *on* dark — the page background is
warm paper, never white.

## Typography

Three Google fonts, each with one job:

- **Geist** — headlines and body. Headlines are `font-medium` (500) or 600,
  **tight tracking (≈ −0.045em)**, tight leading (0.92–0.98). Body is regular,
  15–17px.
- **Instrument Serif** *(italic, 400)* — the **accent word** inside a headline,
  always in **lime or green**. E.g. "Turn export reps into *expert dealmakers.*"
  Use it for exactly one phrase per headline, never for whole sentences.
- **Geist Mono** — small eyebrow labels: 11px, **UPPERCASE, letter-spacing
  ≈ 0.2em**, in green (on light) or lime (on dark). E.g. `A DAY IN THE DEAL`,
  `01 / 05`.

## Logo mark

"Exumo" wordmark in Geist, followed by a small **lime diamond** (a square
rotated 45°) set at the top-right, like a superscript.

## Motion

- **Signature easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (a soft ease-out). Use
  it for almost everything.
- **Durations:** 0.5–0.9s for reveals, up to 1.2s for the hero. Exits ~60–70%
  of the enter duration.
- **Feel:** calm, confident, cinematic — things rise and settle (fade + 10–40px
  up), chips spring in, lists stagger 50–60ms apart. Never bouncy or fast-cut.
- Respect reduced motion (show the final state).

## Tone for on-screen captions

Short, plain, confident. Owner's voice. Lead with the outcome. Contrast "by
hand" (the grind) vs "with Exumo" (handled). No hype words.
