# Scope

> Phase: brief · Project: landing · Brand: tga · 2026-05-02

## Summary

Single landing page for TGA, framed as **attention/curiosity capture for the rental insurance** (the team's first hypothesis inside the broader rental-market efficiency thesis). Dark-primary canvas (Investidor aesthetic) carries the guiding line *"Aluguel garantido, do jeito que deveria funcionar"*, the manifesto, and a quieter four-phase horizon. One bifurcation moment opens a light Imobiliárias surface for proprietário-facing copy and waitlist segmentation. Two audiences served on one URL, one scroll, one brand contract — both flowing into signal-capture (email + social), not product CTAs.

## Screens

Single route: `/` (with optional locale suffix `/en`). The "screens" below are sections of that single page — each a bounded composition reviewable in its own PR.

| # | Section | Front | Priority | Purpose |
|---|---------|-------|----------|---------|
| 1 | `nav` | investidor | P0 | Logo, live amber dot, language toggle, single ghost CTA "fique por dentro" → scrolls to bifurcation |
| 2 | `hero` | investidor | P0 | Guiding line *"Aluguel garantido, do jeito que deveria funcionar"* + manifesto *"o protocolo que não falha quando o mercado falha"*. Three-layer hierarchy (Geist declaration · Inter explanation · Mono kicker — e.g., "01 / 04 — começamos pela garantia") |
| 3 | `the-gap` | investidor | P0 | Category-level diagnosis — why current rental insurance fails (60-day waits, opacity, fragility from 2025 collapses). No company names. Frames the category opportunity. |
| 4 | `vision-arc` | investidor | P1 | Four-phase horizon as progression: Agora (garantia) → Próximo (score onchain) → Depois (TGA — exposição programável) → Horizonte (pagamentos e fundos programáveis). Mono numerals 01-04, Geist headers, Inter body. No dates. **Quieter than hero — horizon, not headline.** Property tokenization is NOT in scope (Brazilian regulation unfavorable). |
| 5 | `bifurcation` | investidor → split | P0 | Two-card audience self-segmentation. Left: "Sou proprietário ou imobiliária". Right: "Sou investidor". Each opens a short paragraph + waitlist input below |
| 6 | `proprietario-capture` | investidor | P0 | Same dark canvas as rest of landing — no light Imobiliárias front. Three sentences in plain pt-BR (zero jargon) + email input + audience tag. CTA: `[ avise-me ]` (Mono Investidor button style). |
| 7 | `investidor-capture` | investidor | P0 | Mirrored layout, same dark canvas. Three sentences (mecânica, transparência onchain, arquitetura). Email + audience tag. CTA: `[ entrar na lista ]` |
| 8 | `team` | investidor | P0 | Draau + jubs. Real faces (or designed alternatives — see open question). Track record one-liners. Anti-anonymous |
| 9 | `footer` | investidor | P0 | Repos (`tga-protocol` org), Colosseum copilot link, judges link, Twitter/Telegram (TBD), language toggle echo, OG meta target |

P0 sections must ship together. The vision arc (P1) is part of the launch but secondary in hierarchy — keep it quiet. Future P1 reserves: testimonials, press, deeper proof — once they exist.

## Component scope

Used directly from brand `tga.yml` patterns:

- `nav` (investidor variant) — height 56px, live amber dot pulse, 1px bottom border
- `button-primary` (investidor + imobiliarias variants)
- `button-secondary` (investidor variant — for ghost CTAs)
- `card` (investidor + imobiliarias variants)
- `input` (investidor + imobiliarias variants — for waitlist email capture)

Project-specific compositions (built on brand patterns):
- `BifurcationCards` — two side-by-side cards as audience self-segmenters; click expands the capture form below
- `WaitlistForm` — input + submit composition with audience tag (`proprietario` | `investidor`); per-front variant (light for proprietário, dark for investidor)
- `VisionArc` — four-step horizon composition: Mono numeral (01/02/03/04) + Geist label + Inter sub-line, connected by 1px amber rule
- `LiveDot` — header element, the 6px amber pulse signaling "this is alive, we're building"
- `LanguageToggle` — minimal `pt-BR / en` swap, JetBrains Mono 11px

See `target-adaptations.md` for how these compose from the brand spec.

## Project boundaries

**In scope.** One-page vision landing, bilingual (pt-BR primary, en secondary), responsive (mobile-first → desktop), shippable to a static or Vercel-hosted Next.js app. Email waitlist with audience self-tag. OG meta + basic SEO. Founders' team section.

**Out of scope.** Dashboards (live in `sgr-app`). Wallet connect / auth. Documentation site. Pitch deck. Blog / CMS. Quantified product claims (NAV, R$ liquidados, contracts active — no real numbers, no placeholders). Per-product feature pages. Stripe / payment flows.

## Success criteria

- A first-time visitor understands the guiding line (*Aluguel garantido, do jeito que deveria funcionar*) within 30 seconds — guiding line + manifesto land above the fold on `lg+`
- The four-phase vision arc is reachable in ≤2 scrolls from hero, reads as horizon (not roadmap, no dates, no specific deliverables), and stays visually quieter than the hero
- Both audiences self-segment into the waitlist within ≤3 scrolls — no dead-ends, no "log in" prompts
- Email capture works end-to-end with audience tag persisted (`proprietario` or `investidor`)
- Page survives a product pivot — copy frames category, not features
- Lighthouse perf ≥ 90 (mobile + desktop), a11y ≥ 95
- Hero text/canvas pair AAA (16.9:1 — `#F0F0EE` on `#0E0F11`)
- Zero `never` violations from brand spec — 0px radius, no glow, no shadows, no `#22C55E`, no jargon in proprietário-facing sections, amber scarcity holds
- Doesn't read like a hackathon project

## Dependencies

- Brand `tga.yml` patterns (vendored at `.design/branding/tga/patterns/tga.yml`)
- Geist via `next/font/google` (700 only)
- Inter Variable + JetBrains Mono Variable via `@fontsource-variable/{inter,jetbrains-mono}`
- `@phosphor-icons/react` (light weight)
- shadcn/ui CLI for primitive scaffolding
- Waitlist backend (Resend / ConvertKit / Vercel KV — TBD at design time)
- Copy in pt-BR (canonical) authored by founders. Copy in en is a translation, not a rewrite

External signals (P1 if available):
- Founder photography (Draau + jubs) — or designed alternative if no shoot
- Press / mentions / pilot signals — only if real

## Issue framing

Six bounded PRs, each reviewable on its own:

1. **`feat: scaffold landing app + token export`** — Next.js 15 init, Tailwind v4 `@theme` from `tga.yml`, font wiring, shadcn init, repo skeleton
2. **`feat: nav + hero (P0)`** — sections 1–2, manifesto + category claim, three-layer hierarchy, live amber dot
3. **`feat: the gap + vision arc (P0)`** — sections 3–4, category diagnosis + four-phase horizon
4. **`feat: bifurcation + waitlist captures (P0)`** — sections 5–7, two-card segmenter + per-front capture forms with audience tag
5. **`feat: team + footer (P0)`** — sections 8–9, Draau + jubs, repos, social, language toggle echo
6. **`feat: i18n + a11y polish + waitlist backend wiring`** — pt-BR/en routes, contrast verification, focus order, OG meta, Resend/KV/etc. wired

Each PR a small, reviewable issue. Do not bundle.

## Risks / watch-list

- **Pivot risk.** The brief explicitly assumes pivots inside rental vertical. Copy must read true even if SGR Core becomes a different first product. Frame in terms of category, not features.
- **Two-fronts-on-one-page.** Schizophrenic feel if the dark→light handoff for proprietário is abrupt. The bifurcation moment owns the transition.
- **Amber scarcity (<5%)** is hard to honor if every CTA is amber. Audit at design time, not build time.
- **"Não parecer projeto de hackathon"** — non-negotiable. Avoid dev-tool clichés (no faux-CLI hero, no terminal aesthetic on marketing). Manifesto + restraint do the work.
- **Copy quality** is the bottleneck — design can't rescue weak pt-BR. Lock copy before final design pass. Founders own copy authority.
- **Photography availability** — if no shoot-quality founder photos exist, ship with a designed alternative (initials in 0px amber containers, monochrome portraits, etc.). Don't compromise the team section.
- **Quantified placeholders** — never ship made-up numbers. If real data isn't ready, omit the element.

## References

### Brand & strategy
- Brand brief: `.design/branding/tga/BRIEF.md`
- Brand patterns: `.design/branding/tga/patterns/tga.yml` · `STYLE.md` · `guidelines.html`
- Brand strategy chunks: `.design/branding/tga/strategy/{positioning,voice-and-tone,messaging,archetype,brand-platform}.md`
- Brand discover chunks: `.design/branding/tga/discover/{competitive-audit,trend-analysis,market-landscape,mood-board-direction}.md`

### Visual references (use as inspiration)
- **`.design/branding/tga/discover/visual-ref/DESIGN.md`** — *"Sovereign Precision"* visual north star: Bloomberg Terminal meets brutalist editorial; the canonical creative direction document
- **`.design/branding/tga/discover/visual-ref/screen.png`** — earlier landing design pass (full-page mockup). Aesthetic locked here; copy hierarchy will be retooled for the new "Aluguel garantido, do jeito que deveria funcionar" framing
- **`.design/branding/tga/discover/visual-ref/code.html`** — static HTML prototype matching screen.png (336 lines, Tailwind via CDN — reference only, not the build target)
- **`.design/branding/tga/referencia visual/`** — 22 mood-board images. Use as inspiration for visual treatment (texture, hierarchy, density, asymmetry). Not literal references for sections.

### Project
- README: `README.md` (vision phases — SGR Core → Score → TGA → Tokenization)
- Project BRIEF: `../BRIEF.md`
