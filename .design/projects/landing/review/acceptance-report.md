# Acceptance Report
> Phase: review · Project: landing · Brand: tga (MUTAV) · Updated: 2026-05-20
> Reviewer: GSP QA Reviewer · Build target: `Landings/landing-imobiliaria/` (Next.js + Tailwind v4 + shadcn/ui)
> Branch: `feat/lp-imobiliaria-components`

## Verdict

**Conditional Pass.**

Both previously-open Major issues are resolved in the committed code. F-001 (`data-front="imobiliarias"` on `<html>`) is fixed at `app/[locale]/layout.tsx:63`. F-002 (`InvestidorCapture` audience mismatch) is resolved — the component has been removed from `page.tsx`.

The Imobiliárias light front now fully activates: `#F7F6F3` canvas, `#1A1A1A` text, `#C47E10` accent, Inter-dominant voice. All four new components (SocialProof, CustoAprovacao, Art37, SeguroPrestamista) are brand-contract-clean in the light context.

One issue has **escalated** as a direct consequence of F-001 being fixed: the disabled language toggle renders `#9E9C98 on #F7F6F3` (2.3:1 contrast ratio), which falls below the WCAG 1.4.3 minimum for all text sizes. This was previously noted as A-003 with an escalation warning — it now requires a fix. Also, `SeguroPrestamista` passes `index` without `total` to `MonoKicker`, silently dropping the `→ 03` counter prefix, though this pattern is consistent with other sections and may be intentional.

| Layer | Result |
|-------|--------|
| Build | Next.js + Tailwind v4 + shadcn/ui — i18n wired via next-intl |
| Brand contract (tokens) | Pass — 0px radius global, no shadows, no glass, no `#22C55E`, no transforms |
| Token usage | Pass — all type scale uses named utilities; zero `text-[NNpx]` in source |
| Three-layer hierarchy | Pass — all new components: Geist H2 (display) + Inter body (sans) + JetBrains Mono kickers/labels (mono) |
| Tabular numerals | Pass — `custo-aprovacao.tsx:27` uses `font-mono font-bold` for stat values — correct |
| Front theming | **Pass** — `data-front="imobiliarias"` on `<html>` at `layout.tsx:63`; light palette activates correctly |
| Audience clarity | **Pass** — `InvestidorCapture` removed from page; `ImobiliariaCapture` is the sole capture form |
| Screen coverage | Partial — 7 original designed sections + 4 new; Bifurcation replaced by Art37; audience-aligned |
| Accessibility | **Minor issue** — disabled `en` toggle fails WCAG 1.4.3 in light context (2.3:1 — see A-003) |
| Responsive | Pass — all new sections use `lg:grid-cols-*` responsive breakpoints |
| i18n | Pass — `next-intl` routing active; both pt-BR and en message keys present for all new components |
| Founder photos | Pass — `draau.jpg` + `jubs.png` in `public/team/` confirmed |

---

## Implementation checklist

| # | Section | Status | Codebase |
|---|---------|--------|----------|
| — | Nav | complete | [`components/site/nav.tsx`](../../../../Landings/landing-imobiliaria/components/site/nav.tsx) |
| — | Hero | complete | [`components/site/hero.tsx`](../../../../Landings/landing-imobiliaria/components/site/hero.tsx) |
| — | SocialProof | complete (undesigned — brand contract followed) | [`components/site/social-proof.tsx`](../../../../Landings/landing-imobiliaria/components/site/social-proof.tsx) |
| — | TheGap | complete | [`components/site/the-gap.tsx`](../../../../Landings/landing-imobiliaria/components/site/the-gap.tsx) |
| — | CustoAprovacao | complete (undesigned — brand contract followed) | [`components/site/custo-aprovacao.tsx`](../../../../Landings/landing-imobiliaria/components/site/custo-aprovacao.tsx) |
| — | VisionArc | complete | [`components/site/vision-arc.tsx`](../../../../Landings/landing-imobiliaria/components/site/vision-arc.tsx) |
| — | Art37 | complete (undesigned — brand contract followed) | [`components/site/art37.tsx`](../../../../Landings/landing-imobiliaria/components/site/art37.tsx) |
| — | ImobiliariaCapture | complete (cobertura block added; sole capture form) | [`components/site/imobiliaria-capture.tsx`](../../../../Landings/landing-imobiliaria/components/site/imobiliaria-capture.tsx) |
| — | SeguroPrestamista | complete (undesigned — brand contract followed) | [`components/site/seguro-prestamista.tsx`](../../../../Landings/landing-imobiliaria/components/site/seguro-prestamista.tsx) |
| — | Team | complete — photo fix applied | [`components/site/team.tsx`](../../../../Landings/landing-imobiliaria/components/site/team.tsx) |
| — | Footer | complete | [`components/site/footer.tsx`](../../../../Landings/landing-imobiliaria/components/site/footer.tsx) |

## Component coverage

| Component | Codebase | Brand contract |
|-----------|----------|----------------|
| Logo | [`components/site/logo.tsx`](../../../../Landings/landing-imobiliaria/components/site/logo.tsx) | Geist Bold lowercase `text-accent`, `tracking-[-0.03em]` — pass |
| LiveSquare | [`components/site/live-square.tsx`](../../../../Landings/landing-imobiliaria/components/site/live-square.tsx) | 6px `bg-accent`, `mutav-live-square` 2s linear infinite, `role="status"` — pass |
| LanguageToggle | [`components/site/language-toggle.tsx`](../../../../Landings/landing-imobiliaria/components/site/language-toggle.tsx) | Inactive locale `text-text-3` (`#9E9C98`) on light canvas (`#F7F6F3`) = 2.3:1 — **fails WCAG 1.4.3** (see A-003) |
| MonoKicker | [`components/site/mono-kicker.tsx`](../../../../Landings/landing-imobiliaria/components/site/mono-kicker.tsx) | Requires both `index` + `total` for counter prefix; sections passing only `index` silently drop counter — see H-001 |
| SocialProof | [`components/site/social-proof.tsx`](../../../../Landings/landing-imobiliaria/components/site/social-proof.tsx) | Three-layer: Geist name + Mono role (amber) + Inter bio — pass; light theme active |
| CustoAprovacao | [`components/site/custo-aprovacao.tsx`](../../../../Landings/landing-imobiliaria/components/site/custo-aprovacao.tsx) | Stat values `font-mono font-bold text-3xl` — tabular numerals active — pass |
| Art37 | [`components/site/art37.tsx`](../../../../Landings/landing-imobiliaria/components/site/art37.tsx) | Geist H2 + Inter body + Mono note — three-layer compliant; label-only kicker (no index) |
| SeguroPrestamista | [`components/site/seguro-prestamista.tsx`](../../../../Landings/landing-imobiliaria/components/site/seguro-prestamista.tsx) | Three-column `lg:grid-cols-3`; `→ 03` index silently dropped (no `total`); item text uses `text-text` (primary) — see H-001, G-002 |
| ImobiliariaCapture | [`components/site/imobiliaria-capture.tsx`](../../../../Landings/landing-imobiliaria/components/site/imobiliaria-capture.tsx) | Cobertura block added: Mono kicker + Inter body at `text-text-2` — token-compliant |
| Team | [`components/site/team.tsx`](../../../../Landings/landing-imobiliaria/components/site/team.tsx) | `jubs.png` extension correct; `grayscale` class applied; `aria-label` on GitHub links — pass |

## Token audit

### Semantic color tokens — Pass

`globals.css` declares Imobiliárias palette under `[data-front="imobiliarias"]`. `<html data-front="imobiliarias">` activates it globally. Light palette values: canvas `#F7F6F3`, surface `#FFFFFF`, text `#1A1A1A`, text-2 `#6B6860`, text-3 `#9E9C98`, accent `#C47E10`. All CSS vars cascade correctly — the `@theme inline` Tailwind aliases resolve to Imobiliárias values.

**Hardcoded hex:** `#1A1A1A` in `button.tsx:17` (imobiliarias variant) — documented exception (5.3:1 AA on `#C47E10`). No other hardcoded hex in component source.

### Type scale — Pass

All 12 named scale utilities (`text-2xs` through `text-6xl`) defined in `globals.css` `@theme inline`. Zero `text-[NNpx]` arbitrary values in component source.

### Tabular numerals — Pass

`custo-aprovacao.tsx:27` uses `font-mono font-bold` for market stat values — `font-feature-settings: "tnum" 1` active via global rule. Pattern is correct.

### Radius / Shadow / Blur — Pass

`* { border-radius: 0 !important }` in globals.css. All `--radius-*: 0px`. `backdrop-blur-[0px]` in nav. Zero `shadow-*` / `rounded-*` in new component source. Zero transform utilities.

### Amber budget — Pass

New sections use amber only on SocialProof advisor role labels (`text-accent text-2xs`) and section kicker/label accents. No amber overuse. Budget within `<5%` scarcity rule.

## Accessibility compliance

### New sections — light context contrast

| Pair | Where | Ratio | Level |
|------|-------|-------|-------|
| `#1A1A1A` on `#F7F6F3` | body text, h2 | 18.1:1 | AAA |
| `#6B6860` on `#F7F6F3` | `text-text-2` (body notes, kickers) | 5.4:1 | AA |
| `#C47E10` on `#F7F6F3` | `text-accent` (role labels, kickers) | 3.1:1 | AA (large text only) |
| `#9E9C98` on `#F7F6F3` | `text-text-3` (disabled lang toggle) | 2.3:1 | **Fail** |

All new sections pass contrast in the Imobiliárias light context. The language toggle disabled state (`text-text-3`) fails — see A-003.

### Section landmarks — Pass

| Section | Landmarks | Heading | ARIA |
|---------|-----------|---------|------|
| SocialProof | `<section aria-labelledby="sp-h2">` | `<h2 id="sp-h2">` | list semantics |
| CustoAprovacao | `<section aria-labelledby="custo-h2">` | `<h2 id="custo-h2">` | `<ul>` + `<li>` |
| Art37 | `<section aria-labelledby="art37-h2">` | `<h2 id="art37-h2">` | — |
| SeguroPrestamista | `<section aria-labelledby="seguro-h2">` | `<h2 id="seguro-h2">` | `<ul>` + `<li>` |

### Focus management — Pass

`*:focus-visible { outline: 1px solid var(--accent); outline-offset: 2px }` applies globally. `#C47E10` (light accent) renders on focus — 3.1:1 on `#F7F6F3` (AA large text only, borderline for focus indicators).

### Reduced motion — Pass

`@media (prefers-reduced-motion: reduce)` disables `mutav-live-pulse` and smooth scroll.

## Responsive verification

- SocialProof `lg:grid-cols-2` (gap-px bg-border) — pass
- CustoAprovacao `lg:grid-cols-3` (gap-px bg-border) — pass
- Art37 `lg:grid-cols-2 lg:gap-16` — pass
- SeguroPrestamista `lg:grid-cols-3 lg:gap-8` — pass
- ImobiliariaCapture `lg:grid-cols-2 lg:gap-16` — pass
- Team `lg:grid-cols-2` (gap-px bg-border) — pass

## Resolved issues from prior review

| Issue | Description | Status |
|-------|-------------|--------|
| F-001 | `landing-imobiliaria` rendered Investidor dark theme | **Resolved** — `data-front="imobiliarias"` added to `<html>` at `layout.tsx:63` |
| F-002 | `InvestidorCapture` mounted on imobiliária landing | **Resolved** — component removed from `page.tsx` |

## Open issues

| Issue | Severity | Description |
|-------|----------|-------------|
| A-003 | **Major** (escalated) | Disabled `en` toggle: `#9E9C98 on #F7F6F3` = 2.3:1 — fails WCAG 1.4.3; must fix alongside F-001 |
| H-001 | Minor | `SeguroPrestamista` passes `index` without `total` to `MonoKicker`; `→ 03` counter silently dropped |
| G-002 | Minor | `SeguroPrestamista` item text uses `text-text` (primary) instead of `text-text-2` (secondary) |
| D-003 | Minor | Both packages share one design project config — co-mingled review/build history |

## Related

- [issues.md](./issues.md) — remaining open issues
- [design/INDEX.md](../design/INDEX.md) — original 9-screen designs
- Brand: `.design/branding/tga/patterns/tga.yml`
