# Design
> Phase: design | Project: landing | Brand: tga | Generated: 2026-05-02

## Screens

| # | Screen | File | Components Used |
|---|--------|------|-----------------|
| 01 | Nav | [screen-01-nav.md](./screen-01-nav.md) | Logo, LiveDot, LanguageToggle |
| 02 | Hero | [screen-02-hero.md](./screen-02-hero.md) | MonoKicker, SectionHeader |
| 03 | The Gap | [screen-03-the-gap.md](./screen-03-the-gap.md) | MonoKicker, SectionHeader, Mono |
| 04 | Vision Arc | [screen-04-vision-arc.md](./screen-04-vision-arc.md) | MonoKicker, SectionHeader, Mono, VisionArc |
| 05 | Bifurcation | [screen-05-bifurcation.md](./screen-05-bifurcation.md) | MonoKicker, BifurcationCards |
| 06 | Proprietário Capture | [screen-06-proprietario-capture.md](./screen-06-proprietario-capture.md) | MonoKicker, WaitlistForm, Button (imobiliarias), Input, Label |
| 07 | Investidor Capture | [screen-07-investidor-capture.md](./screen-07-investidor-capture.md) | MonoKicker, WaitlistForm, Button (investidor), Input, Label |
| 08 | Team | [screen-08-team.md](./screen-08-team.md) | MonoKicker, TeamSection |
| 09 | Footer | [screen-09-footer.md](./screen-09-footer.md) | LanguageToggle, FooterSection |

## Shared

| Chunk | File | ~Lines |
|-------|------|--------|
| Personas | [personas.md](./shared/personas.md) | ~75 |
| Information Architecture | [information-architecture.md](./shared/information-architecture.md) | ~95 |
| Navigation | [navigation.md](./shared/navigation.md) | ~110 |
| Micro-interactions | [micro-interactions.md](./shared/micro-interactions.md) | ~95 |
| Responsive | [responsive.md](./shared/responsive.md) | ~125 |
| Component Plan | [component-plan.md](./shared/component-plan.md) | ~165 |

## Reading order

1. **`shared/personas.md`** — who reads this page (Lucas + Ana) and what each needs from the design.
2. **`shared/information-architecture.md`** — the vertical sequence, the narrative spine, the fork moment.
3. **`shared/navigation.md`** — the chyron-register top bar and skip link.
4. **`shared/responsive.md`** — breakpoints, section adaptations, touch targets.
5. **`screen-01-nav.md`** through **`screen-09-footer.md`** — section by section, in narrative order.
6. **`shared/micro-interactions.md`** — the very small motion vocabulary (one ambient animation; everything else is 150ms color transitions).
7. **`shared/component-plan.md`** — refactor / new shared / new local breakdown for the build phase.

## Design summary

The TGA landing is a **single-route, single-scroll, two-front composition**. Body default `[data-front="investidor"]` (dark). Sections 01–05 + 07–09 share that resolution. Section 06 (proprietário capture) carries `[data-front="imobiliarias"]` to flip CSS variables in scope and render a true light surface. The dark→light→dark round trip is owned by **two 1px amber rules** — the only places amber acts as a structural element rather than as text/CTA accent.

### Key design calls

- **Nav as chyron, not marketing chrome.** Logo + live dot + locale toggle. No primary CTA. The page is short enough that bifurcation is reachable in two scrolls without a CTA push (per `recommendations.md`).
- **Hero is naked typography.** Three-layer hierarchy (Mono kicker + Geist H1 + Inter manifesto), zero photography, zero icons, zero data viz, zero CTA. The hero earns the scroll.
- **The vision arc is horizon, not roadmap.** Four phases, equally articulated, no dates, no "we're here" indicator. The 1px amber rule connecting them is the only accent. Quieter than the hero by deliberate padding + no H2 headline.
- **Bifurcation is the only centered moment.** Two equal-weight cards with `gap-px bg-border` 1px divider. Click = smooth-scroll + focus into target form. Both forms render server-side and are always visible (no toggle).
- **Captures are mirrored.** Proprietário left-skewed (col 1–5 copy, col 7–12 form). Investidor right-skewed (col 1–6 form, col 8–12 copy). The chiral mirror is the section-level visual companion to the dark→light→dark fold.
- **Proprietário copy is jargon-zero.** Three sentences in plain pt-BR. Audited every word. Approved: outcome language. Forbidden and absent: blockchain, wallet, smart contract, token, DeFi, onchain, liquidação, transparência (as marketing).
- **Investidor copy is verifiability-as-invitation.** Three sentences (mecânica + onchain + arquitetura). The `[ verifique a arquitetura → github.com/tga-protocol ]` link is the trust mechanic.
- **Team is anti-anonymous.** Draau + jubs, real names, real roles, real one-liners. 7/5 column asymmetry on lg+. Photography or designed alternative — not in-between.
- **Footer is mono everything.** Bloomberg-Terminal density. Repos, colosseum, comunidade, locale echo, legal. Hover amber on links is the single transient amber moment in the footer.

### Brand fidelity self-check

- [x] Every constraint respected — `border-radius: 0`, no shadows, no glass, no `#22C55E`, no jargon in proprietário copy, no white text on amber, surface stacking only for depth, three-layer hierarchy in every narrative section.
- [x] Every bold bet appears in at least one screen:
  - **Bold bet 1 — Zero-radius enforcement everywhere.** Every screen.
  - **Bold bet 2 — Amber as precious metal.** Audited per-screen pixel budgets; total page well under 5%.
  - **Bold bet 3 — Tabular numerals on every number.** Mono kickers, vision-arc numerals, copyright year, all use `font-feature-settings: "tnum" 1`.
  - **Bold bet 4 — Three-layer hierarchy at the screen level.** Verified in each section's brand-contract checks. Footer is the deliberate exception (chrome, not narrative).
  - **Bold bet 5 — Surface stacking without shadows.** Bifurcation cards hover via canvas → surface-1. No `box-shadow` anywhere.
- [x] Effects vocabulary respected — only `color`, `background-color`, `border-color`, `opacity` transition. No transforms.
- [x] Intensity dials calibrated — variance: 3 (two front-resolutions + the chyron register), motion: 2 (one ambient animation, one transient hover state per element), density: 6 (footer is high-density, hero is low-density, sections rhythm between).
- [x] No generic visual treatments — every effect references a named brand technique (Lithic Stacking, the fold, the amber rule, the chyron, the chiral mirror).

### Critical absences (deliberate)

These design moves are **not** in the system — flagging them so a build-phase reviewer doesn't add them by reflex:

- ❌ No glow effects
- ❌ No backdrop-blur / glass
- ❌ No transform animations on hover or active
- ❌ No fade-in / scroll-trigger reveal
- ❌ No parallax
- ❌ No icons in bifurcation cards
- ❌ No iconography per vision-arc phase
- ❌ No "we're here" indicator on vision arc
- ❌ No dates anywhere
- ❌ No spinner on form submission (opacity is the busy state)
- ❌ No confetti / champagne on form success (anti-celebration register)
- ❌ No social platform icons in footer (URL text is the icon)
- ❌ No CAPTCHA (honeypot only)
- ❌ No cookie consent banner (no client-side analytics planned for launch)
- ❌ No founder photos that look like phone snapshots — editorial shoot or designed alternative

### Open questions surfaced for build phase

- **Founder photography vs designed alternative.** Decide before screen-08 final build (per `recommendations.md`). Treated in `STATE.md § Open questions`.
- **Community channel — Telegram / Discord / X-only.** Footer column 3 (`comunidade`) waits on this confirmation.
- **Jury link.** Footer column 2 (`colosseum`) needs the actual judges URL or the section ships with `copilot` only.
- **Track-record line for jubs.** If founders don't lock copy, ship name + role only (no Mono evidence line). Don't invent.

## Cross-references

- Brief: [../brief/INDEX.md](../brief/INDEX.md)
- Research: [../research/INDEX.md](../research/INDEX.md)
- Brand patterns: `.design/branding/tga/patterns/STYLE.md`
- Brand identity: `.design/branding/tga/identity/INDEX.md`
- Project state: [../STATE.md](../STATE.md)
- Project exports: [../exports/INDEX.md](../exports/INDEX.md)

## Next phase

`/gsp-project-critique` — design + accessibility critique pass. The critique will surface design issues (hierarchy, rhythm, copy-design coherence) and accessibility issues (focus order, ARIA, contrast). Issues are written to `critique/prioritized-fixes.md` and `critique/accessibility-fixes.md`; revision mode then re-enters the design phase to address.
