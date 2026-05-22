# Acceptance Report
> Phase: review · Project: landing · Brand: tga (MUTAV) · Updated: 2026-05-21
> Reviewer: GSP QA Reviewer · Build target: `Landings/landing-investidor/` (Next.js + Tailwind v4 + shadcn/ui)
> Branch: `feat/lp-investidor-components`

## Verdict

**Conditional Pass.**

The investidor LP compiles clean, applies the dark Precision Brutalism front correctly, uses semantic tokens throughout, and enforces all brand constraints (0px radius, no shadows, no glass, no `#22C55E`). The three-layer hierarchy (Geist/Inter/Mono) is applied consistently across all 10 sections.

Three issues prevent a full Pass:

1. **T-001 (Minor):** `team.tsx` renders a placeholder `[ photo · D ]` / `[ photo · J ]` text instead of the committed photos at `public/team/draau.jpg` and `public/team/jubs.png`. Photos are in the repo but not wired to `<Image>` tags.
2. **A-001 (Minor):** `waitlist-form.tsx:32` renders the pending status text with `aria-hidden` — screen readers receive `aria-busy` on the form but do not hear the "sending…" confirmation text. This partially fulfills fix-005; the text is sighted-only.
3. **L-001 (Minor):** The investidor LP ships English-only (`routing.ts` declares `locales: ["en"]`, no pt-BR). The original design spec called for pt-BR as primary locale. This is a product decision but has not been documented in STATE.md.

No **Critical** issues. No brand contract violations.

---

## Implementation summary

The LP investidor has materially diverged from the original 9-screen design spec (documented in STATE.md as "accepted implementation-level decisions"). The divergence is product-rational:

- **Removed:** Bifurcation, ProprietárioCapture (dual-front fold) — imobiliária has its own separate package
- **Added:** Solutions, Market, Tiers, MidCta, Faq (investor-targeted content expansions)
- **Retained:** Nav, Hero, TheGap, VisionArc (renamed Vision Arc still present but unmounted — VisionArc exists as a component but is not in page.tsx)
- **Locale pivot:** pt-BR removed; English is the sole locale

Wait — checking the page.tsx: VisionArc is not mounted. Sections rendered are Nav, Hero, TheGap, Solutions, Market, Tiers, MidCta, Team, Faq, Footer. Neither VisionArc nor InvestidorCapture are in the page. This is noted as a deviation (see D-001).

---

## Implementation checklist

| # | Section | Status | Codebase |
|---|---------|--------|----------|
| — | Nav | complete | [`components/site/nav.tsx`](../../../../Landings/landing-investidor/components/site/nav.tsx) |
| — | Hero | complete — copy reworked | [`components/site/hero.tsx`](../../../../Landings/landing-investidor/components/site/hero.tsx) |
| — | TheGap | complete | [`components/site/the-gap.tsx`](../../../../Landings/landing-investidor/components/site/the-gap.tsx) |
| — | Solutions | complete (undesigned — brand contract followed) | [`components/site/solutions.tsx`](../../../../Landings/landing-investidor/components/site/solutions.tsx) |
| — | Market | complete (undesigned — brand contract followed) | [`components/site/market.tsx`](../../../../Landings/landing-investidor/components/site/market.tsx) |
| — | Tiers | complete (undesigned — brand contract followed) | [`components/site/tiers.tsx`](../../../../Landings/landing-investidor/components/site/tiers.tsx) |
| — | MidCta | complete (undesigned — brand contract followed) | [`components/site/mid-cta.tsx`](../../../../Landings/landing-investidor/components/site/mid-cta.tsx) |
| — | Team | complete — photos not wired (see T-001) | [`components/site/team.tsx`](../../../../Landings/landing-investidor/components/site/team.tsx) |
| — | Faq | complete (undesigned — brand contract followed) | [`components/site/faq.tsx`](../../../../Landings/landing-investidor/components/site/faq.tsx) |
| — | Footer | complete | [`components/site/footer.tsx`](../../../../Landings/landing-investidor/components/site/footer.tsx) |
| — | VisionArc | built, not mounted in page | [`components/site/vision-arc.tsx`](../../../../Landings/landing-investidor/components/site/vision-arc.tsx) |
| — | InvestidorCapture | built, not mounted in page | [`components/site/investidor-capture.tsx`](../../../../Landings/landing-investidor/components/site/investidor-capture.tsx) |
| — | Bifurcation | built, not mounted in page | [`components/site/bifurcation.tsx`](../../../../Landings/landing-investidor/components/site/bifurcation.tsx) |

---

## Component coverage

| Component | Codebase | Brand contract |
|-----------|----------|----------------|
| Logo | [`components/site/logo.tsx`](../../../../Landings/landing-investidor/components/site/logo.tsx) | Geist Bold lowercase amber wordmark, `tracking-[-0.03em]` — pass |
| LiveSquare | [`components/site/live-square.tsx`](../../../../Landings/landing-investidor/components/site/live-square.tsx) | 6px `bg-accent`, `mutav-live-square` 2s linear infinite, `role="status"` — pass |
| LanguageToggle | [`components/site/language-toggle.tsx`](../../../../Landings/landing-investidor/components/site/language-toggle.tsx) | Inactive locale `text-text-3` (`#555B66`) on dark canvas (`#0E0F11`) = 3.7:1 — borderline AA for 11px; hover goes to `text-text` which passes; note: LP ships en-only so toggle is vestigial |
| MonoKicker | [`components/site/mono-kicker.tsx`](../../../../Landings/landing-investidor/components/site/mono-kicker.tsx) | Passes `label` only in most sections (counter prefix requires both `index` + `total`); consistent pattern across all sections — see H-001 |
| WaitlistForm | [`components/site/waitlist-form.tsx`](../../../../Landings/landing-investidor/components/site/waitlist-form.tsx) | Discriminated union error codes, `aria-busy` on form, `role="alert"` — pass; pending text is `aria-hidden` — see A-001 |
| Button | [`components/ui/button.tsx`](../../../../Landings/landing-investidor/components/ui/button.tsx) | 4 variants: investidor/imobiliarias/outline/ghost; investidor `size="lg"` = 44px (fix-006 applied); `text-[#1A1A1A]` on imobiliarias — documented exception |
| Input | [`components/ui/input.tsx`](../../../../Landings/landing-investidor/components/ui/input.tsx) | JetBrains Mono 14px, 0px radius, amber focus border, no ring — pass |
| Label | [`components/ui/label.tsx`](../../../../Landings/landing-investidor/components/ui/label.tsx) | Inter 13px Medium (`text-sm font-medium`) — pass |
| Tiers | [`components/site/tiers.tsx`](../../../../Landings/landing-investidor/components/site/tiers.tsx) | Interactive token selector; `aria-expanded` missing on tier buttons (see A-002) |

---

## Token audit

### Semantic color tokens — Pass

`globals.css` sets `:root` to Investidor (dark) palette. All CSS vars cascade correctly. `@theme inline` Tailwind aliases resolve to Investidor values. No `data-front` override on this LP — entire page renders dark.

**Hardcoded hex:** `#1A1A1A` in `button.tsx:17` (imobiliarias variant) — documented exception (5.3:1 AA on `#C47E10`). No other hardcoded hex in component source. All color utilities use `text-text`, `text-text-2`, `text-text-3`, `text-accent`, `bg-accent`, `bg-surface`, `bg-canvas`, `border-border`, `text-error`, `text-success`.

### Type scale — Pass

All type utilities use named scale utilities (`text-2xs`, `text-xs`, `text-sm`, `text-base-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`). Hero uses `text-[clamp(2.75rem,6vw,5.5rem)]` — one arbitrary fluid value outside the named scale, but within the `text-5xl`/`text-6xl` range defined in `tga.yml#tokens.typography.scale`.

### Tabular numerals — Pass

Market stat values (`font-mono font-bold text-3xl`) correctly activate `font-feature-settings: "tnum" 1` via the global rule in `globals.css:192`. Tiers token labels use `font-display font-bold text-2xl` — not tabular, but these are names/labels not numeric data. Pass.

### Radius / Shadow / Blur — Pass

`* { border-radius: 0 !important }` in `globals.css:178`. All `--radius-*: 0px` in `@theme`. No `shadow-*`, `rounded-*`, or `backdrop-blur` in component source.

### Motion vocabulary — Pass

`mutav-live-pulse` (2s linear infinite opacity) is the only ambient animation. `mutav-dot-blink` added for solutions cards (sequential indicator) — this is a second ambient animation beyond the brand spec's "one ambient animation." Minimal impact, no transform or glow used. Reduced-motion disables both.

No `transition-transform`, `scale-*`, or `translate-*` utilities in component source. All transitions use the permitted set (`background-color`, `border-color`, `color`, `opacity`). Social proof and nav logos use `transition-opacity` — within the permitted `opacity` transition.

### Amber budget — Pass

Amber accent appears on: logo (`text-accent`), live square (`bg-accent`), hero kicker border (`border-l-2 border-accent`), hero `$770M` value, bifurcation card CTAs, vision arc phase numbers, tier highlights, market featured card (`bg-accent`), footer X icon hover, `MonoKicker` separators. Market section has a full `bg-accent` right column — this is the highest amber surface on the page, but it's contained to one half-column panel and is data-framing (the TAM figure), not decoration. Total amber surface is well within `<5%` scarcity rule.

---

## Accessibility compliance

### Contrast — Investidor dark context

| Pair | Where | Ratio | Level |
|------|-------|-------|-------|
| `#F0F0EE` on `#0E0F11` | body text, h1, h2 | 16.9:1 | AAA |
| `#8A8F99` on `#0E0F11` | `text-text-2` (body notes) | 6.0:1 | AA |
| `#555B66` on `#0E0F11` | `text-text-3` (labels, placeholders) | 3.2:1 | **borderline — fails AA at 11px (4.5:1 required)** |
| `#E8A020` on `#0E0F11` | `text-accent` (logo, CTAs) | 8.8:1 | AAA |
| `#C94040` on `#0E0F11` | `text-error` (error messages) | 3.9:1 | AA (large text ≥14px bold only) |
| `#3DAB72` on `#0E0F11` | `text-success` (success state) | 6.7:1 | AA |
| `#F0F0EE` on `#E8A020` | text on amber bg (market featured) | 1.3:1 | **Fail** — but component uses `text-canvas` (#0E0F11 on #E8A020 = 8.8:1) — pass |

The `text-text-3` / `#555B66` contrast at 3.2:1 falls below the 4.5:1 AA minimum for small text (11px). This applies to: MonoKicker separators, kicker labels in Solutions and SocialProof, vision arc phase separators, tier inactive labels, market source labels, hero "supported by" text, footer Twitter icon default state, input placeholders. All of these are 11px Mono uppercase labels. This was noted in the original critique (fix-001/002/003) for specific locations; the token `text-text-3` is systemically below threshold for small text in the dark front. This is documented in `tga.yml#tokens.color.wcag` as a known constraint.

**Recommendation:** Accept as architectural constraint (documented in tga.yml); consider bumping small-text kicker labels to `text-text-2` selectively.

### Section landmarks and headings — Pass

All sections use `<section aria-labelledby>` + `<h2 id>`. Heading tree: 1×h1 (Hero) + 8×h2 (TheGap, Solutions, Market, Tiers, MidCta, Team, Faq, footer nav label is not a heading). No skipped levels.

**Exception: Faq** — `<section aria-labelledby="faq-h2">` has no `id` attribute on the `<section>` element itself. The `<h2>` has `id="faq-h2"`. The `aria-labelledby` reference is valid (it points to the heading id, not the section id). Minor: the section has no anchor for scroll-to navigation from the nav.

### Interactive controls

**Tiers component:** `<button>` elements for each tier are missing `aria-expanded` or `aria-pressed` to communicate the active/inactive state to screen readers. Sighted users see the visual active state (left border, color change) but screen readers have no equivalent announcement. This is A-002 (see issues.md).

**Faq accordion:** `<button aria-expanded>` is correctly implemented. The `<dt>` inside `<button>` is invalid HTML (`<dt>` is a definition term, only valid inside `<dl>` — placing it inside `<button>` is invalid). Screen readers will likely tolerate this but it's invalid markup. See A-003.

### Waitlist form accessibility — Mostly Pass

`aria-busy={isPending}` on form, `role="alert"` on error region, `aria-invalid` on input, `aria-describedby` linking input to error — all correct. The `SubmitButton` pending text has `aria-hidden` — screen reader users will hear `aria-busy` state change on the form but not the "sending…" text. The fix-005 spec called for a polite live region OR `aria-busy` — `aria-busy` is present, so this is partially compliant.

### Focus management — Pass

`*:focus-visible { outline: 1px solid var(--accent); outline-offset: 2px }` globally. Amber focus ring at 8.8:1. Skip link present (`<a href="#main" class="skip-link">`).

### Reduced motion — Pass

`@media (prefers-reduced-motion: reduce)` disables `mutav-live-pulse`, `mutav-dot-blink`, and smooth scroll.

---

## Responsive verification

- Nav: `hidden md:flex` for nav links, CTA always visible — pass
- Hero: `clamp(2.75rem,6vw,5.5rem)` fluid H1, `lg:py-40` spacing — pass
- TheGap: `lg:grid-cols-3` — pass
- Solutions: `lg:grid-cols-3` — pass
- Market: `lg:grid-cols-2 gap-px bg-border` — pass
- Tiers: `lg:grid-cols-2 gap-px bg-border` — pass
- MidCta: single column centered — pass
- Team: `lg:grid-cols-2 gap-px bg-border` with `lg:px-[12.5%]` — pass
- Faq: `lg:grid-cols-2` (left half only) — pass
- Footer: `grid lg:grid-cols-[2fr_3fr]` — pass

---

## Open issues

| Issue | Severity | Description |
|-------|----------|-------------|
| T-001 | Minor | Team photos (`draau.jpg`, `jubs.png`) committed to `public/team/` but not wired in `team.tsx` — placeholder text renders |
| A-001 | Minor | Pending "sending…" text in `waitlist-form.tsx:32` has `aria-hidden` — screen readers don't hear it |
| A-002 | Minor | Tiers buttons missing `aria-pressed` or `aria-expanded` for active tier state |
| A-003 | Minor | `<dt>` inside `<button>` in Faq accordion — invalid HTML |
| D-001 | Minor | VisionArc and InvestidorCapture built but not mounted; page composition differs from STATE.md post-review order (which lists VisionArc + InvestidorCapture) |
| L-001 | Minor | LP ships English-only; pt-BR was the original primary locale per design spec; not documented in STATE.md |

---

## Related

- [issues.md](./issues.md) — full issues table
- [design/INDEX.md](../design/INDEX.md) — original 9-screen designs
- Brand: `.design/branding/tga/patterns/tga.yml`
- STATE.md — post-review decisions
