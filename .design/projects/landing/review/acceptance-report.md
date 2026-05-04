# Acceptance Report
> Phase: review · Project: landing · Brand: tga · Generated: 2026-05-02
> Reviewer: GSP QA Reviewer · Build target: `landing/` (Next.js 16 + Tailwind v4 + shadcn/ui)

## Verdict

**Conditional Pass.**

The build is shippable for the Colosseum demo. All 9 designed sections render, the brand contract holds (0px radius global, no shadows, no glass, no `#22C55E`, no transforms, no jargon in proprietário copy), and `bun run build` compiles cleanly with TypeScript passing and 4/4 static pages generated. Critique fixes 001–006 are all wired in code.

What blocks an unconditional pass is one **Major** WCAG-AA contrast bug missed by the contrast pass (hero kicker `text-text-3` at 13px Mono on dark canvas — 3.16:1, identical pattern to fix-002/003) and a token-discipline drift: every section uses arbitrary `text-[NNpx]` values instead of the brand's defined Tailwind type scale (`text-xs`, `text-sm`, `text-lg` etc. from `tga.yml#typography.scale`). Both are surface-level fixes — neither requires a design re-loop or brand refinement.

| Layer | Result |
|-------|--------|
| Build | `bun run build` ✓ — Next.js 16.2.4 Turbopack, TS clean, 4/4 static pages |
| Brand contract | Pass — 0px radius global, no shadows, no glass, no `#22C55E`, no transforms |
| Token usage | **Conditional** — semantic color tokens used correctly; type-scale tokens bypassed via arbitrary `text-[NNpx]` everywhere |
| Screen coverage | 9/9 sections implemented |
| Component coverage | 11/11 site components + 4/4 ui primitives present |
| Critique fixes | 001–006 all applied |
| Accessibility | **Conditional** — landmarks/ARIA strong, but 1 missed contrast bump (hero kicker) |
| Responsive | Pass — `lg:` breakpoint behavior matches design intent |
| Imagery | N/A — landing is naked-typography by design (no photography) |

---

## Implementation checklist

| # | Screen | Status | Codebase |
|---|--------|--------|----------|
| 01 | Nav | complete | [`components/site/nav.tsx`](../../../../landing/components/site/nav.tsx) |
| 02 | Hero | complete | [`components/site/hero.tsx`](../../../../landing/components/site/hero.tsx) |
| 03 | The Gap | complete | [`components/site/the-gap.tsx`](../../../../landing/components/site/the-gap.tsx) |
| 04 | Vision Arc | complete | [`components/site/vision-arc.tsx`](../../../../landing/components/site/vision-arc.tsx) |
| 05 | Bifurcation | complete | [`components/site/bifurcation.tsx`](../../../../landing/components/site/bifurcation.tsx) |
| 06 | Proprietário Capture | complete | [`components/site/proprietario-capture.tsx`](../../../../landing/components/site/proprietario-capture.tsx) |
| 07 | Investidor Capture | complete | [`components/site/investidor-capture.tsx`](../../../../landing/components/site/investidor-capture.tsx) |
| 08 | Team | complete | [`components/site/team.tsx`](../../../../landing/components/site/team.tsx) |
| 09 | Footer | complete | [`components/site/footer.tsx`](../../../../landing/components/site/footer.tsx) |

All sections render at `/`. Heading tree is clean: 1× h1 (hero) + 6× h2 (gap, vision, bifurcation, proprietário, investidor, team). Card primitive in `components/ui/card.tsx` has an internal `<h3>` but is unused on the landing — no skipped levels in the rendered page.

## Component coverage

| Component | Codebase | Brand contract |
|-----------|----------|----------------|
| Logo | [`components/site/logo.tsx`](../../../../landing/components/site/logo.tsx) | Geist Bold lowercase amber, `tracking-[-0.03em]`, no icon variant rendered (wordmark only) |
| LiveSquare | [`components/site/live-square.tsx`](../../../../landing/components/site/live-square.tsx) | 6×6 amber square (0px radius via global rule), 2s linear infinite pulse, `prefers-reduced-motion` honored |
| LanguageToggle | [`components/site/language-toggle.tsx`](../../../../landing/components/site/language-toggle.tsx) | Mono 11px, `pt-BR` `aria-current="true"`, `en` `aria-disabled` + `cursor-not-allowed` |
| MonoKicker | [`components/site/mono-kicker.tsx`](../../../../landing/components/site/mono-kicker.tsx) | Mono 11px ALL CAPS `tracking-[0.03em]`, supports `index/total — label` and `label`-only forms |
| Mono | [`components/site/mono.tsx`](../../../../landing/components/site/mono.tsx) | Wrapper, tnum enforced globally |
| WaitlistForm | [`components/site/waitlist-form.tsx`](../../../../landing/components/site/waitlist-form.tsx) | Discriminated union return, 4 error codes × 2 audiences, `aria-busy` semantics, honeypot, `role=alert` for errors, `role=status`+`aria-live=polite` for success |
| Hero / TheGap / VisionArc / Bifurcation / Proprietário / Investidor / Team / Footer | per row above | per row above |
| Button (ui) | [`components/ui/button.tsx`](../../../../landing/components/ui/button.tsx) | 4 variants (`investidor`, `imobiliarias`, `outline`, `ghost`), 5 sizes incl. `lg=44px` for fix-006 |
| Card (ui) | [`components/ui/card.tsx`](../../../../landing/components/ui/card.tsx) | Surface stacking only, no shadow. Not used on landing — primitive carried for future surfaces |
| Input (ui) | [`components/ui/input.tsx`](../../../../landing/components/ui/input.tsx) | Mono 14px, `focus:border-accent`, no ring, `aria-[invalid=true]:border-error`, scoped white surface inside `[data-front=imobiliarias]` |
| Label (ui) | [`components/ui/label.tsx`](../../../../landing/components/ui/label.tsx) | Inter 13px Medium, `text-text-2` |

## Token audit (actual source vs `tga.yml`)

### Semantic color tokens — Pass

[`app/globals.css`](../../../../landing/app/globals.css) declares the full Investidor palette as `:root` CSS vars and the Imobiliárias overrides under `[data-front="imobiliarias"]` exactly per `tga.yml#fronts.investidor.css-vars` and `tga.yml#fronts.imobiliarias.css-vars`. Tailwind's `@theme inline` block re-exposes them as `--color-canvas`, `--color-surface`, `--color-text-2`, `--color-accent` etc., and shadcn aliases (`--color-background`, `--color-primary`, `--color-destructive`) are mapped to TGA semantic tokens — primitives keep working without coupling to shadcn defaults.

The `--color-accent-foreground` and `--color-primary-foreground` are explicitly overridden to `#1A1A1A` inside `[data-front="imobiliarias"]` — honors the "no white-on-amber" contract from `tga.yml#patterns.button-primary.imobiliarias`.

A grep across `components/` and `app/` finds **only one hardcoded hex**: `#1A1A1A` in [`components/ui/button.tsx:17`](../../../../landing/components/ui/button.tsx) on the `imobiliarias` button variant. This is the documented exception (5.3:1 AA pass on `#C47E10` — same value the brand spec hardcodes). Acceptable.

No `rgb()` / `hsl()` / `oklch()` literals appear in component source. The only `rgba()` usage is the architectural-grid background in [`globals.css:121-122`](../../../../landing/app/globals.css) — `rgba(240, 240, 238, 0.03)` matches the spec's `#F0F0EE` at 3% opacity.

### Type scale — Conditional

`tga.yml#typography.scale` defines a Major-Third scale (text-2xs … text-6xl) and `@theme inline` in `globals.css` exposes Geist as `--font-display`, Inter as `--font-sans`, JetBrains Mono as `--font-mono` — all correctly wired. **However:** every section component uses arbitrary `text-[11px]`, `text-[13px]`, `text-[18px]`, `text-[36px]` etc. instead of the brand's named scale (`text-2xs`, `text-sm`, `text-lg`, `text-4xl`).

51 occurrences of `text-[NNpx]` across `components/`. This compiles, the values resolve to the same pixel sizes the scale would produce, and the visual output matches the design — but it bypasses the token system. If the brand scale ever shifts (e.g. fluid clamp curves on `text-5xl/6xl`), these arbitrary values won't pick up the change.

This is a **Major** style-discipline issue, not a brand-contract violation — the page renders identically today. Track as a follow-up refactor.

### Spacing — Pass

All spacing values map to the 8px baseline (`mx-auto`, `px-6`, `lg:px-8`, `py-24`, `mt-6`, `mt-8`, `gap-8`, `gap-12`, `gap-16`). No arbitrary `mt-[NNpx]` or `gap-[NNpx]` values found in component source. `gap-px` in bifurcation and team grids correctly draws the 1px amber/border rules per `tga.yml#patterns`.

### Radius — Pass

Global `* { border-radius: 0 !important }` in [`globals.css:108`](../../../../landing/app/globals.css). All `--radius*` Tailwind tokens overridden to `0px` in `@theme inline`. Zero `rounded-*` utility usage found in component source. Contract holds.

### Shadow / blur — Pass

Zero `shadow-*` / `box-shadow:` / `drop-shadow` usage. Only `backdrop-blur` reference is `backdrop-blur-[0px]` in [`nav.tsx:7`](../../../../landing/components/site/nav.tsx) — explicit zero, defensive. Contract holds.

### Transforms — Pass

Zero `scale-`, `translate-`, `rotate-`, `hover:scale-`, `hover:translate-` usage. `tga.yml#motion.prohibited` honored.

### Banned values — Pass

Grep for `#22C55E` returns zero matches in component source. The only references in the repo are inside `branding/tga/` documentation explaining why it is excluded.

## Critique fixes verification

| # | Fix | Codebase evidence | Status |
|---|-----|-------------------|--------|
| 001 | Consent line `text-text-3 → text-text-2` | [`proprietario-capture.tsx:36,39`](../../../../landing/components/site/proprietario-capture.tsx) — both consent lines use `text-text-2` | ✓ applied |
| 002 | Track-record `text-text-3 → text-text-2` | [`team.tsx:58`](../../../../landing/components/site/team.tsx) — track line uses `text-text-2` | ✓ applied |
| 003 | Footer 11px Mono `text-text-3 → text-text-2` | [`footer.tsx:55,63,73,86`](../../../../landing/components/site/footer.tsx) — all 11px/12px Mono use `text-text-2` | ✓ applied |
| 004 | Error state enum + recovery copy | [`waitlist.ts:13`](../../../../landing/app/actions/waitlist.ts) discriminated union; [`waitlist-form.tsx:10-31`](../../../../landing/components/site/waitlist-form.tsx) maps 4 codes × 2 audiences | ✓ applied (pt-BR only this commit, en deferred — documented in BUILD-LOG.md) |
| 005 | `aria-busy` + Mono "enviando…" status | [`waitlist-form.tsx:55,62-66,102`](../../../../landing/components/site/waitlist-form.tsx) — `useFormStatus` drives `pending`, button gets `disabled` + `aria-disabled`, status string renders below | ✓ applied (note: `aria-busy={false}` is hardcoded on the form — see issues.md A-001) |
| 006 | Investidor button 40 → 44px (landing-only) | [`button.tsx:28`](../../../../landing/components/ui/button.tsx) — `lg: "h-11 px-6"`; [`waitlist-form.tsx:57`](../../../../landing/components/site/waitlist-form.tsx) — `size={isInvestor ? "lg" : "imo"}` | ✓ applied |

## Accessibility compliance (code-level)

No prior `review/accessibility-audit.md` exists for this build, so the inline checks below stand as the audit of record.

### Landmarks + heading order — Pass

`<header>` (nav) → `<main id="main">` → `<section>` × 7 → `<footer>` → inside footer `<nav aria-label="Rodapé">`. One `<h1>` (hero), `<h2>` per section. Skip link `pular para o conteúdo` is the first focusable element ([`layout.tsx:33`](../../../../landing/app/layout.tsx)) and is revealed on focus by `.skip-link:focus { top: 0 }` ([`globals.css:150-152`](../../../../landing/app/globals.css)).

### Focus management — Pass

Global `*:focus-visible { outline: 1px solid var(--accent); outline-offset: 2px }` in [`globals.css:154-157`](../../../../landing/app/globals.css). Every interactive element ([`nav.tsx:11`](../../../../landing/components/site/nav.tsx), [`bifurcation.tsx:48`](../../../../landing/components/site/bifurcation.tsx), [`team.tsx:47`](../../../../landing/components/site/team.tsx), [`footer.tsx:73`](../../../../landing/components/site/footer.tsx), [`button.tsx:8`](../../../../landing/components/ui/button.tsx)) layers a `focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-offset-2` (or `-4` on the larger nav target) explicitly. Inputs use `focus:border-accent` per `tga.yml#patterns.input.investidor.focus-border`. Brand "no ring, no glow" contract holds.

### ARIA — Strong

33 ARIA attribute occurrences across the site components. Notable patterns:

- `LiveSquare` carries `role="status"` + visible label ([`live-square.tsx:3`](../../../../landing/components/site/live-square.tsx)) so screen readers announce "protocolo ativo" without seeing the pulse animation.
- `MonoKicker` separators (`/` and `—`) are `aria-hidden` so screen readers read "01 04 começamos pela garantia" rather than "01 slash 04 dash começamos…".
- `WaitlistForm` honeypot is `aria-hidden` and visually offscreen ([`waitlist-form.tsx:108-115`](../../../../landing/components/site/waitlist-form.tsx)). Error region uses `role="alert"` + `aria-describedby` + `aria-invalid`. Success region uses `role="status"` + `aria-live="polite"`.
- `LanguageToggle` `aria-current="true"` on active locale, `aria-disabled="true"` on the in-progress locale.

### Touch targets — Pass

- Investidor capture submit: 44×44 (`size="lg"` → `h-11 px-6`) — fix-006 applied
- Imobiliárias capture submit: 48×48 (`size="imo"` → `h-12 px-6`) — exceeds AAA
- Inputs: 48px height (`h-12` in [`input.tsx:11`](../../../../landing/components/ui/input.tsx)) — exceeds AAA
- Team founder avatar links: 48×48 (`size-12`)
- Bifurcation cards: full `px-8 py-12` block — well over 44×44

The brand spec's `tga.yml#patterns.button-primary.investidor.height: 40px` is intentionally bypassed for the landing only — documented in fix-006.

### Reduced motion — Pass

`prefers-reduced-motion: reduce` clause in [`globals.css:100-103`](../../../../landing/app/globals.css) freezes the live-pulse animation and disables smooth scroll. The only ambient animation in the system is gated correctly.

### Contrast — One miss

`tga.yml#tokens.color.wcag` records the verified pairs. Spot-checked usage in actual rendered pages against those pairs:

| Pair | Where in code | Ratio | Verdict |
|------|---------------|-------|---------|
| `#F0F0EE` on `#0E0F11` | body, h1, h2 | 16.9:1 | AAA |
| `#8A8F99` on `#0E0F11` | `text-text-2` (kickers, labels, body 2) | 6.0:1 | AA |
| `#E8A020` on `#0E0F11` | logo, accents, `text-accent` | 8.8:1 | AAA |
| `#1A1A1A` on `#F7F6F3` | proprietário copy | 16.1:1 | AAA |
| `#6B6860` on `#F7F6F3` | proprietário consent, secondary copy | 6.93:1 | AA |
| `#1A1A1A` on `#C47E10` | imobiliárias button text | 5.3:1 | AA |
| **`#555B66` on `#0E0F11`** | **hero kicker `text-text-3` 13px Mono ([`hero.tsx:28`](../../../../landing/components/site/hero.tsx))** | **3.16:1** | **FAIL** |

The hero's "O protocolo que não falha quando o mercado falha." line uses `text-text-3` at 13px Mono on the dark canvas — same anti-pattern that fix-002 and fix-003 caught for the team and footer. The contrast pass should have swept this one too. See `issues.md` A-002.

A few `text-text-3` usages are exempt: language toggle brackets/slash/em-dash are `aria-hidden` decorative ([`language-toggle.tsx:14,20,30`](../../../../landing/components/site/language-toggle.tsx), [`mono-kicker.tsx:26`](../../../../landing/components/site/mono-kicker.tsx), [`vision-arc.tsx:56`](../../../../landing/components/site/vision-arc.tsx), [`bifurcation.tsx:52`](../../../../landing/components/site/bifurcation.tsx)) and the input placeholder is exempt under WCAG 1.4.11 (incidental text). The disabled `en` toggle uses `text-text-3` and is borderline — flagged Minor (A-003).

## Responsive verification

[`shared/responsive.md`](../design/shared/responsive.md) calls for `lg:` (1024px) as the bifurcation breakpoint. The implementation honors this:

- Hero `py-24 lg:py-40`, fluid H1 via `clamp(2.25rem, 1.544rem + 1.127vw, 4rem)` matches `tga.yml#tokens.typography.scale.text-6xl`
- TheGap `lg:grid-cols-3` — single column on mobile, 3-up on lg
- VisionArc `lg:grid-cols-4` — single column on mobile, 4-up on lg
- Bifurcation `lg:grid-cols-2` with `gap-px bg-border` — 1px amber rule appears on lg and above
- Proprietário/Investidor captures `lg:grid-cols-2 lg:gap-16` — copy + form mirror correctly. Investidor uses `lg:order-2`/`lg:order-1` to swap visual order while keeping DOM source order (form first for keyboard users) — this matches `screen-07` chiral-mirror intent
- Team `lg:grid-cols-2`
- Footer `lg:grid-cols-[2fr_3fr]` for the brand block + nav split, then nav `grid-cols-2 sm:grid-cols-4` for the 4 columns

Submit button uses `w-full sm:w-auto` ([`waitlist-form.tsx:58`](../../../../landing/components/site/waitlist-form.tsx)) — full-width on mobile (mobile-first thumb comfort), auto on tablet+.

## Brand contract checklist

| Bet | Verified |
|-----|----------|
| 0px radius global | [`globals.css:108`](../../../../landing/app/globals.css) `* { border-radius: 0 !important }` + every `--radius-*: 0px` |
| Amber as precious metal (<5%) | Amber appears only on logo, focus outlines, ambient pulse, kicker accent, accent-color CTAs, error/success indicators. Not measured pixel-wise here — visually well under 5% |
| Tabular numerals | [`globals.css:131-135`](../../../../landing/app/globals.css) global `font-feature-settings: "tnum" 1` on `.font-mono` and `[class*="font-mono"]` |
| Three-layer hierarchy (Geist/Inter/Mono) | Every narrative section pairs Geist H2 + Inter body + Mono kicker. Footer uses Mono everywhere by design (chrome, not narrative) |
| Surface stacking, no shadow | Bifurcation, team, footer all use `gap-px bg-border` for rules; hover transitions `bg-surface → bg-surface-2` — no shadow utilities anywhere |
| Effects vocabulary respected | Only `color`, `background-color`, `border-color`, `opacity`, occasionally `border-color` in transitions. No transform, no filter |
| No `#22C55E`, no glass, no glow, no gradients | Greps clean |
| No jargon in `[data-front="imobiliarias"]` | [`proprietario-capture.tsx`](../../../../landing/components/site/proprietario-capture.tsx) uses only allowed vocabulary — no blockchain/wallet/onchain/DeFi/token/smart-contract/liquidação |
| `#1A1A1A` on `#C47E10` (never white) | Imobiliárias button variant text is hardcoded `#1A1A1A` ([`button.tsx:17`](../../../../landing/components/ui/button.tsx)) |
| Live "dot" → 6×6 amber square | [`live-square.tsx`](../../../../landing/components/site/live-square.tsx) uses `size-[6px] bg-accent` (square via global 0px-radius rule) |

## Open from build phase (not blocking)

These were declared deferred in BUILD-LOG.md and confirmed unchanged here:

- Waitlist real backend (Resend + Vercel KV) — stub returns `{ ok: true }` for any valid email
- `/en` route (next-intl wired but unused)
- Founder track-record copy lock (placeholder line for jubs is short and on-brand; Draau's is plausible but unverified)
- `/privacidade` and `/termos` pages don't exist — footer links currently 404
- No deploy / domain configured
- No CI guard for forbidden tokens (gradient, box-shadow) per fix-11 Polish

## Related

- [issues.md](./issues.md) — Major/Minor issue ledger with file:line references
- [build/INDEX.md](../build/INDEX.md) — what the builder claimed
- [critique/prioritized-fixes.md](../critique/prioritized-fixes.md), [critique/accessibility-fixes.md](../critique/accessibility-fixes.md) — fixes verified above
- [design/INDEX.md](../design/INDEX.md) — designs validated against
- Brand: `.design/branding/tga/patterns/tga.yml`, `STYLE.md`
