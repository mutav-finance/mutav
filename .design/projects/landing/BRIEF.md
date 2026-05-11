# Project Brief — TGA Landing Page

**Project:** landing
**Brand:** tga
**Date:** 2026-05-02
**Implementation target:** Next.js + Tailwind v4 + shadcn/ui (greenfield)
**Languages:** pt-BR (primary) · en (secondary)

---

## What we're building

A single public landing page for **TGA — Token de Garantia de Aluguel**. The page is an **attention/curiosity capture surface** focused on the team's first hypothesis: the rental insurance (garantia locatícia). Not the dashboards. Not the docs site. Not the deck.

**Guiding line:** *"Aluguel garantido, do jeito que deveria funcionar."*

The phrase carries double meaning — "garantido" is both the product (garantia locatícia) and the feeling (certainty). The umbrella thesis is rental-market efficiency. The first hypothesis being shipped is the garantia. The page speaks to the present-tense story; the broader vision arc is horizon, not headline.

## Why now

- The team is pre-product-market-fit and expects to **pivot inside the rental vertical** until something sticks. The first hypothesis being tested is the rental insurance — the landing must focus there without painting future moves into a corner.
- CredPago and QuintoCred collapsed in 2025 — the whole rental-guarantee category is exposed as fragile. There is real ambient curiosity about what comes next.
- Colosseum Hackathon and ecosystem watchers (Solana / Superteam Brasil) need a public face that signals seriousness and ambition without overpromising features.
- Proprietários and imobiliárias searching for an alternative to traditional garantidoras need to land somewhere credible.
- Investors searching "garantia locatícia onchain" or RWA-on-Solana need a Brazil-specific entry point that names the team and shows the architecture.

## Audiences (segment, don't route)

The page does not push audiences into different products. It captures interest, segmented for future comms.

**Lucas — Proprietário / Imobiliária.** 45–55, distrust of jargon, burned by the 2025 collapses. Reads in pt-BR. We want him curious enough to leave an email so we can tell him when the proprietário side is ready.

**Ana — Investidora cripto-nativa.** 25–35, DeFi-native, evaluates by transparency and architecture. Reads in pt-BR or en. We want her curious enough to follow the build (waitlist + GitHub + Twitter/Telegram).

The bifurcation moment exists — but as audience self-identification ("which side are you on"), not as a product router.

## The vision arc (horizon, not headline)

The page makes the climb visible without making it the centerpiece. The hero stays focused on the garantia. The arc lives in a quieter section that signals "this is where the work goes":

1. **Agora** — garantia locatícia que cumpre. (SGR Core — the present focus)
2. **Próximo** — score de reputação onchain a partir do histórico de pagamentos.
3. **Depois** — TGA: exposição programável ao spread do mercado de locação.
4. **Horizonte** — pagamentos e fundos programáveis (otimizar transações, pagamentos, custódia de fundos no mercado de locação).

**Property tokenization is OFF the horizon.** Brazilian regulation is unfavorable for residential property tokenization in the near term; the horizon is now framed as **rental-market efficiency** (txs, payments, funds), not tokenizing the underlying asset.

Frame as horizon, not roadmap. No dates. No promises. The implication: *começamos pela garantia. o mercado de locação inteiro vem depois.*

## Success criteria

- A first-time visitor understands within 30 seconds: TGA is building rental insurance the way it should work — automatic, verifiable, on the renter's side
- Both audiences self-segment into a waitlist or social channel without leaving the page
- Hero passes the "would you stop scrolling?" test — the guiding line and the manifesto land in the first viewport
- Page survives a pivot inside the rental vertical: the focus is the garantia today, but the copy doesn't promise specific features that may move
- Lighthouse perf ≥ 90 (mobile + desktop), a11y ≥ 95, AAA contrast on hero pair
- Zero brand-contract violations (0px radius, no glow, no shadows, amber scarcity holds, no jargon in proprietário-facing copy)
- Doesn't read like a hackathon project (brand non-negotiable)

## Conversion goals (signal capture, not log-in)

Primary:
- Email waitlist with audience self-tag (`proprietario` | `investidor`) — so future comms can be segmented

Secondary:
- GitHub link (the build is open — `mutav-finance` org)
- Twitter/X follow (founders + protocol)
- Telegram or Discord community link (TBD — confirm at design time)

No log-in. No wallet connect. No dashboard route from this page.

## Out of scope

- Dashboards (Investidor / Imobiliárias / Terminal) — live in `mutav-app`
- Documentation site — separate project
- Pitch deck — separate project
- Authentication / wallet connect flows
- Blog / CMS infrastructure
- Quantified product claims (NAV, contracts active, R$ liquidados) — no real numbers exist yet, do not ship placeholders
- Per-product feature pages — the page is one route

## Tech & deployment

- Next.js 15 (App Router) — greenfield, likely a new `mutav-landing` repo (TBD at scaffold time)
- Tailwind v4 with `@theme` populated from brand `tga.yml` tokens
- shadcn/ui as primitive base — overridden to TGA spec (0px radius, surface stacking, no shadows)
- Phosphor Icons (light weight)
- Fonts: Geist 700 (`next/font/google`), Inter Variable + JetBrains Mono Variable (`@fontsource-variable/*`)
- Email capture: lightweight backend (Resend, ConvertKit, or Vercel KV — TBD)
- Deploy target: Vercel (assumption — confirm at build time)

## Visual front decision (project-level)

**The landing uses the Investidor (dark / Precision Brutalism) aesthetic across the entire page** — including the proprietário/imobiliária capture section. The brand's Imobiliárias light front is NOT used on the landing; dual-front belongs in the dashboards, not on a marketing surface where visual coherence wins.

Audience differentiation lives in **copy and audience tag** (`proprietario` | `investidor`), not in surface color. Both capture forms use the same Investidor button style (transparent + amber border + Mono `[ … ]` label).

## Constraints inherited from brand

- 0px border-radius everywhere
- No glow, no glass, no shadows — depth via surface stacking only
- Amber scarcity rule (<5% of pixels) on dark surfaces
- Three-layer typography on every section (Geist · Inter · JetBrains Mono)
- No blockchain jargon in proprietário-facing copy
- No `#22C55E` ANSI green anywhere — `#3DAB72` is the success token
- Founders' faces visible — anti-anonymous

## Issue framing

Six bounded PRs, each reviewable on its own:

1. **`feat: scaffold landing app + token export`** — Next.js 15 init, Tailwind v4 `@theme` from `tga.yml`, fonts, shadcn init
2. **`feat: nav + hero (P0)`** — manifesto + category claim, three-layer hierarchy, live amber dot
3. **`feat: the gap section (P0)`** — what's broken in rental finance; category-level (not company-level) anti-positioning
4. **`feat: vision arc (P0)`** — the four-phase horizon as a progression, not a roadmap
5. **`feat: bifurcation + waitlist (P0)`** — audience self-segmentation card pair, email capture with audience tag
6. **`feat: team + footer + i18n + a11y (P0)`** — Draau + jubs faces, repos, social, pt-BR/en toggle, OG meta

## Visual references (use as inspiration)

The brand has an existing visual exploration that locks the aesthetic — *Sovereign Precision* (Bloomberg Terminal meets brutalist editorial). The new landing keeps that direction and retools copy hierarchy for the "Aluguel garantido, do jeito que deveria funcionar" framing.

- `.design/branding/tga/discover/visual-ref/DESIGN.md` — visual north star (canonical creative direction)
- `.design/branding/tga/discover/visual-ref/screen.png` — earlier full-page mockup (aesthetic reference)
- `.design/branding/tga/discover/visual-ref/code.html` — static prototype matching the mockup
- `.design/branding/tga/referencia visual/` — 22 mood-board images (texture, hierarchy, density, asymmetry)

## Open questions (resolve before/during design)

- **Hostname / repo location** — new `mutav-landing` vs route inside an existing repo
- **Waitlist backend** — Resend transactional? ConvertKit? Vercel KV + cron? Telegram-only and skip email?
- **Languages at launch** — ship pt-BR + en together, or pt-BR first and en in a follow-up?
- **Founder photography** — do we have shoot-quality photos of Draau and jubs, or do we ship with a designed alternative (initials, mono portraits, etc.)?
- **Community channel** — Telegram or Discord? Both? Neither (Twitter-only)?
- **Aesthetic continuity** — keep the existing `screen.png` design as the reference floor (refine copy + sections only), or do a clean redesign within the same brand contract?
