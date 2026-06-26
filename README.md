# Synapse AI — Landing Page

Premium, high-converting, responsive landing page for an AI-driven data automation platform. Built for the **Next-Gen AI Platform Speed Run** brief.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript
- Tailwind CSS + custom CSS variables
- Zero external UI/animation libraries (per brief constraints)

## Feature Implementation Notes

### Feature 1 — Matrix-Driven Pricing & Performance-Isolated Currency Switcher
- `src/lib/pricing.ts` builds `PRICING_MATRIX` programmatically: `tier → billing → currency`, computed from a base USD rate, a regional tariff multiplier, and a flat 20% annual discount. Nothing is hardcoded.
- `src/components/PricingSection.tsx` stores `billing` and `currency` in **refs**, not `useState`. Toggling either calls `updatePrices()`, which mutates `[data-price-tier]`, `[data-period-tier]`, and `[data-savings-tier]` text nodes directly via `document.querySelector`. No parent re-render occurs — verify in React DevTools Profiler or Chrome Performance tab.

### Feature 2 — Bento-to-Accordion with State Persistence
- `src/components/FeaturesSection.tsx` renders a 12-column bento grid on desktop (`≥768px`) and an accordion on mobile, driven by the same `activeIndex` state.
- A `ResizeObserver` watches `document.documentElement` and flips `isMobile` only when crossing the breakpoint, preserving `activeIndex` across the swap — satisfying the "Context Lock Constraint."
- No animation libraries: all transitions are native CSS (`max-height`, `opacity`, `transform`) defined in `globals.css`.

### Motion Timing
- Micro-interactions (hover/toggle): 150–200ms ease-out (`--ease-micro`, `--ease-hover`)
- Layout reflows (accordion/bento): 300–400ms (`--ease-layout`, `cubic-bezier(0.4, 0, 0.2, 1)`)
- Entry orchestration: staggered `hero-reveal` keyframes, total timeline under 500ms
- Scroll reveals use `IntersectionObserver` (`src/lib/useScrollReveal.ts`), not a JS animation engine

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export)

```bash
npm run build
```

Output is written to `/out` (see `next.config.js` — `output: 'export'`). Deploy `/out` to any static host (Vercel, Netlify, GitHub Pages).

## Project Structure

```
src/
  app/
    layout.tsx       — root layout, metadata, JSON-LD, font loading
    page.tsx          — assembles all sections
    globals.css       — design tokens, animations, component classes
    sitemap.ts        — SEO sitemap
  components/
    Nav.tsx
    Hero.tsx
    FeaturesSection.tsx   — Feature 2
    PricingSection.tsx    — Feature 1
    SocialProof.tsx
    Footer.tsx
    Icons.tsx         — inline SVG icon set (no icon library)
  lib/
    pricing.ts        — pricing matrix + formatters
    features.ts       — feature content data
    useScrollReveal.ts
public/
  robots.txt
```
