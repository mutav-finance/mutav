# Project State

## Project: TGA Landing Page (`landing`)
**Started:** 2026-05-02
**Brand:** tga (vendored from sibling `brand/` repo)
**Current Phase:** 6 (Review) — Conditional Pass
**Implementation Target:** shadcn (greenfield) — implemented at `Landings/landing-investidor/`
**Prettiness Level:** 95%

---

## Phase Progress

| # | Phase | Status | Started | Completed |
|---|-------|--------|---------|-----------|
| 1 | Brief | complete | 2026-05-02 | 2026-05-02 |
| 2 | Research | complete | 2026-05-02 | 2026-05-02 |
| 3 | Design | complete | 2026-05-02 | 2026-05-02 |
| 4 | Critique | complete | 2026-05-02 | 2026-05-03 |
| 5 | Build | complete | 2026-05-03 | 2026-05-03 |
| 6 | Review | needs-revision | 2026-05-02 | 2026-05-20 |

## Status Values
<!-- pending | in-progress | complete | needs-revision | skipped -->

## Decisions
- Single landing surface (not multi-page) with two-path bifurcation
- Primary aesthetic: Investidor (dark / Precision Brutalism)
- Secondary surface: Imobiliárias (light / Structured Warmth) for proprietário capture
- Greenfield Next.js 15 + Tailwind v4 + shadcn/ui per brand patterns
- pt-BR primary; en secondary
- Guiding line: *"Aluguel garantido, do jeito que deveria funcionar"* (rental insurance focus)
- Vision arc as horizon, not headline; vision capture not product entry
- Out of scope: dashboards, auth, docs site, pitch deck

## Research-phase calls (open for design phase to honor or revisit)
- Scroll-driven self-segmentation (no upfront persona gate); both capture forms server-rendered
- No "we're here" indicator on the vision arc — protect horizon framing
- Tailwind v4 `data-front` attribute theming via `[data-front="imobiliarias"]` CSS-var override (no JS, no theme provider) — defined in globals.css but NOT used on the landing per dual-front collapse decision (2026-05-03)
- Waitlist backend: Resend + Vercel KV (own list, LGPD-clean, scales into dashboard launch)
- Live indicator → 6×6 amber square (not "dot") to honor 0px-radius contract
- Hold 150ms color/border transitions (per `tga.yml`); ignore stricter "0ms hard cuts" wording in DESIGN.md

## Post-review decisions (2026-05-20 re-review)
- **D-005 — ACCEPTED:** LP investidor page composition intentionally diverged from the original 9-screen design. The dual-front (Bifurcation + ImobiliariaCapture) is not the investidor LP's concern — imobiliária has its own separate package (`landing-imobiliaria`). The 4 new sections (SocialProof, Market, Tiers, MidCta) are accepted product additions that follow the brand token vocabulary and three-layer hierarchy. No design-phase update required for these sections; they are considered implementation-level decisions by the founders.
- **E-002 — FIXED:** `market.tsx` stat values changed from `font-display` to `font-mono` — tabular numerals now active via globals.css rule.
- **Bifurcation + ImobiliariaCapture:** components remain in codebase but are unmounted in LP investidor. They are candidates for the `landing-imobiliaria` package.
- **Founder photos committed:** `public/team/draau.jpg` + `public/team/jubs.png` — resolves design open question.
- **Current page order (LP investidor):** Nav → Hero → SocialProof → TheGap → Market → Tiers → MidCta → VisionArc → InvestidorCapture → Team → Footer.

## Post-review decisions (2026-05-03)
- **Vision arc phase 04 reframed:** "tokenização imobiliária" → "pagamentos e fundos programáveis". Brazilian regulation unfavorable for property tokenization in near term.
- **Dual-front collapsed on landing:** entire page renders Investidor (dark Precision Brutalism). Imobiliárias light front reserved for the dashboard (separate project).
- **i18n shipped:** pt-BR canonical at `/`, en at `/en` via next-intl App Router (`localePrefix: "as-needed"`).
- **Type scale tokens shipped:** all 51 arbitrary `text-[NNpx]` migrated to named utilities driven by `tga.yml#typography.scale`.
- **Hero responsive fix shipped:** `<br>`s replaced with `lg:block` spans + `text-balance`.
- **Closed GitHub issues:** #8, #12, #14. Open: #7 #9 #10 #11 #13.

## Notes
- Brand is vendored — refinements happen in sibling `brand/` repo, not here
- Brief produced from brand BRIEF.md, patterns/tga.yml, README.md, JURY.md context
