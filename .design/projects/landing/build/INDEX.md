# Build
> Phase: build · Project: landing · Brand: tga · Generated: 2026-05-03

## Summary

The landing page is implemented as a greenfield Next.js 16 + Tailwind v4 + shadcn/ui app at `landing/` in this repo. It compiles cleanly (`bun run build`), passes TypeScript, renders all 9 sections from the design phase, and serves at `/` in pt-BR with a placeholder English toggle for a follow-up PR.

This phase produces no design chunks — the design lives in code now. This INDEX serves as the build manifest.

## What was built

- **Stack:** Next.js 16.2.4 (App Router, Turbopack) + React 19 + Tailwind v4 + shadcn/ui (radix base, nova preset, css-variables theming) + TypeScript
- **Fonts:** Geist 700 (`next/font/google`) + Inter Variable + JetBrains Mono Variable (`@fontsource-variable/*`)
- **Icons:** `@phosphor-icons/react` (installed; not yet used — landing relies on naked typography per design)
- **i18n:** `next-intl` installed but not yet wired (pt-BR ships at `/`; en is a follow-up PR)
- **Waitlist:** Server Action stub at `app/actions/waitlist.ts` with 4 error states. `TGA_WAITLIST_FORCE` env var triggers each branch in dev. Real backend (Resend + Vercel KV) deferred.

## File map

```
landing/
├── app/
│   ├── actions/
│   │   └── waitlist.ts             — Server Action stub (4 error states)
│   ├── globals.css                 — TGA tokens + data-front override + live-pulse + grid texture
│   ├── layout.tsx                  — pt-BR root, Geist 700, OG meta, skip link
│   └── page.tsx                    — composes all 9 sections
├── components/
│   ├── site/                       — TGA-specific compositions
│   │   ├── nav.tsx                 — sticky chyron: logo + LiveSquare + LanguageToggle
│   │   ├── logo.tsx                — Geist Bold lowercase amber wordmark
│   │   ├── live-square.tsx         — 6×6 amber pulsing square (not "dot" — fix-006 spirit)
│   │   ├── language-toggle.tsx     — pt-BR active / en disabled (em breve)
│   │   ├── mono.tsx                — utility wrapper for tabular-nums Mono
│   │   ├── mono-kicker.tsx         — section kicker (`01 / 04 — label` pattern)
│   │   ├── hero.tsx                — guiding line + manifesto + Mono kicker
│   │   ├── the-gap.tsx             — 3-up category diagnosis (no company names)
│   │   ├── vision-arc.tsx          — 4-phase horizon, no dates, no "we're here"
│   │   ├── bifurcation.tsx         — 2 cards split by 1px divider, scroll-anchor to forms
│   │   ├── waitlist-form.tsx       — useActionState + useFormStatus, 4 error codes mapped
│   │   ├── proprietario-capture.tsx — light front (data-front="imobiliarias")
│   │   ├── investidor-capture.tsx  — dark front, mirrored layout
│   │   ├── team.tsx                — 2 founders, designed-alternative initials
│   │   └── footer.tsx              — 4 columns + bottom row
│   └── ui/                         — shadcn primitives, overridden to brand spec
│       ├── button.tsx              — 4 variants: investidor, imobiliarias, outline, ghost
│       ├── card.tsx                — 0px radius, no shadow, surface stacking only
│       ├── input.tsx               — Mono 14px, 1px amber focus border, no ring
│       └── label.tsx               — Inter 13px Medium
└── lib/
    └── utils.ts                    — cn helper from shadcn init
```

## Brand contract checks

- ✅ **0px radius enforced globally** via `* { border-radius: 0 !important }` and explicit `--radius-*: 0px` in @theme
- ✅ **No shadows** — `box-shadow` not used anywhere; depth is surface stacking
- ✅ **No glass / backdrop-blur** — explicit `backdrop-blur-[0px]` on nav (kept the bg-canvas/95 for opacity rhythm only, no blur)
- ✅ **Three-layer typography** — Geist (display), Inter (body), JetBrains Mono (evidence/labels) wired via `--font-display`/`--font-sans`/`--font-mono`
- ✅ **Tabular numerals** — global rule on `.font-mono` and `[class*="font-mono"]`
- ✅ **No #22C55E** — success token resolves to `#3DAB72` per front
- ✅ **No jargon in proprietário copy** — `data-front="imobiliarias"` section uses only: `aluguel`, `inquilino`, `atrasa`, `repasse`, `formulário`, `fila`, `cobertura`, `garantia`, `proprietário`, `imobiliária`. Forbidden terms absent (audited).
- ✅ **#1A1A1A on amber #C47E10** — Imobiliárias button variant explicitly sets `text-[#1A1A1A]`
- ✅ **Live "dot" → 6×6 amber square** — honors 0px-radius contract
- ✅ **Architectural grid texture** — body background, 24px lines at 3% opacity; suppressed inside `[data-front="imobiliarias"]`
- ✅ **Live pulse** — 2s linear infinite, `prefers-reduced-motion` downgrades to static

## Critique fixes applied

| # | Fix | Status |
|---|-----|--------|
| 001 | Consent line `text-text-3` → `text-text-2` | **APPLIED** in `proprietario-capture.tsx` |
| 002 | Track-record `text-text-3` → `text-text-2` | **APPLIED** in `team.tsx` |
| 003 | Footer 11px Mono `text-text-3` → `text-text-2` | **APPLIED** in `footer.tsx` |
| 004 | Error state enum + concrete recovery copy | **APPLIED** — 4 codes × 2 fronts in `waitlist-form.tsx`; copy is pt-BR only this commit (en follow-up with i18n PR) |
| 005 | `aria-busy` + Mono "enviando…" status text | **APPLIED** in `waitlist-form.tsx` via `useFormStatus` |
| 006 | Investidor button 40 → 44px (landing-only) | **APPLIED** — `size="lg"` on the investidor capture submit |

## Verification

```
bun run build
✓ Compiled successfully in 1052ms
✓ TypeScript ok in 937ms
✓ Static pages 4/4 generated
```

Smoke test against `bun run dev`:
- HTTP 200, ~62KB initial HTML
- `<html lang="pt-BR">` ✓
- 7 `<section>` elements (hero, the-gap, vision-arc, bifurcation, proprietario, investidor, team)
- Heading tree: 1× h1 + 6× h2 — no skipped levels
- Title: *"tga — aluguel garantido, do jeito que deveria funcionar"*

## Open from build phase (deferred)

- **Waitlist real backend** — wire Resend + Vercel KV; replace stub
- **i18n /en route** — wire next-intl; move to `app/[locale]/page.tsx`; translate all 32 strings
- **Real founder copy lock** — Draau + jubs canonical track-record line (currently placeholder)
- **Repo decision** — extract `landing/` to its own repo (`sgr-landing`) when ready to ship; current location is co-located with the strategy repo
- **Deploy** — point at Vercel project; configure env vars; pick domain
- **Privacy + Terms pages** — `/privacidade` and `/termos` are linked from the footer but don't exist yet

None of the above blocks the current build from being demo-able.

## Related

- [design/INDEX.md](../design/INDEX.md) — designs implemented
- [critique/accessibility-fixes.md](../critique/accessibility-fixes.md) — 6 fixes; 1–6 applied above
- [brief/install-manifest.md](../brief/install-manifest.md) — original install plan; matches reality

## Next phase

`/gsp-project-review` — QA validation against designs.
