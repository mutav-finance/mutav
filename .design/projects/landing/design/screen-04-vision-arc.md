# Screen 04 — Vision Arc
> Phase: design · Project: landing · Section: 03 / 04 — horizonte · 2026-05-02

## Purpose

Four-phase horizon. Communicates the full ambition (rental insurance → score → token → tokenization) without committing to dates or feature specifics. Reads as horizon, not roadmap. Quieter than the hero. The 1px amber rule connecting the four phases is the section's only accent — and the rule is the mechanic.

## User flow position

Third content section. After the gap names the problem, the arc shows the road. Reader understands "this team is not just shipping rental insurance — there is a longer thesis behind it." Critically, the arc does **not** become the centerpiece — the hero stays anchored as the dominant viewport.

## Layout

```
lg+ (≥1024)                                                          ~70vh
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  03 / 04 — horizonte                                                   │
│  ↓ 64px                                                                │
│                                                                        │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐            │
│  │ 01          │ 02          │ 03          │ 04          │            │
│  │             │             │             │             │            │
│  │ ───────────────────────────────────────────────────── │            │
│  │ ↑ 1px amber rule connects all four (cap-height aligned)│            │
│  │             │             │             │             │            │
│  │ Garantia    │ Score       │ TGA         │ Tokenização │            │
│  │ locatícia   │ onchain     │ token       │ imobiliária │            │
│  │             │             │             │             │            │
│  │ Repasse     │ Reputação   │ Liquidez    │ O contrato  │            │
│  │ automático  │ verificável │ para a      │ de aluguel  │            │
│  │ ao proprie- │ e portátil  │ garantia.   │ como ativo. │            │
│  │ tário …     │ entre …     │             │             │            │
│  └─────────────┴─────────────┴─────────────┴─────────────┘            │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

<lg                                                                  ~auto
┌──────────────────────────────────┐
│ 03 / 04 — horizonte              │
│                                  │
│ ┌──┬─────────────────────────┐   │
│ │  │ 01                      │   │
│ │ ▏│                         │   │
│ │ ▏│ Garantia locatícia      │   │
│ │ ▏│ Repasse automático…     │   │
│ │ ▏│                         │   │
│ │ ▏│ 02                      │   │
│ │ ▏│                         │   │
│ │ ▏│ Score onchain           │   │
│ │ ▏│ Reputação verificável…  │   │
│ │ ▏│                         │   │
│ │ ▏│ 03                      │   │
│ │ ▏│ TGA token               │   │
│ │ ▏│ Liquidez para…          │   │
│ │ ▏│                         │   │
│ │ ▏│ 04                      │   │
│ │ ▏│ Tokenização imobiliária │   │
│ │ ▏│ O contrato como ativo…  │   │
│ └──┴─────────────────────────┘   │
│  ↑ 1px amber rule, vertical, full height of the four phases  │
└──────────────────────────────────┘
```

- **Container:** `<section aria-labelledby="arc-h2">`.
- **Background:** `var(--color-canvas)` (`#0E0F11`). No texture.
- **Padding:** `lg+`: 96px top, 96px bottom (intentionally tighter than gap section — quieter rhythm). `<lg`: 64px / 64px.
- **Grid:** `lg+`: 12-column, four phases each `col-span-3` with `gap-0` (the rule connects them visually so no gap is correct). `<lg`: 12-column where col 1 is the vertical amber rule (1 col wide max-12px) and cols 2–12 hold the four phases stacked vertically.

## Composition

### Section header (intentionally muted)
- Mono kicker: `03 / 04 — horizonte` (en: `03 / 04 — horizon`)
- **No H2 title or sub-line.** This is intentional — per `recommendations.md § Anticipate` and `content-strategy.md § Vision Arc`, the section is quieter than the hero. A bold "Horizonte" H2 would compete with the hero. The kicker carries the section identity alone.
- Margin-bottom from kicker to phases: 64px (`lg+`) / 48px (`<lg`).

### The 1px amber rule (the section's only accent)
- **`lg+`:** Horizontal 1px line, color `var(--color-accent)` (`#E8A020`), spanning all four phases. Anchored to the cap-height baseline of the mono numerals (so the line passes through the visual middle of the `01–04` numerals).
- **`<lg`:** Vertical 1px line, color `var(--color-accent)`, full height of the stacked phases. Anchored to col 1.
- Implementation per `reference-specs.md § The vision arc`:

```html
<ol class="vision-arc grid grid-cols-1 lg:grid-cols-4 relative">
  <span aria-hidden class="absolute left-0 right-0 top-[20px] h-px bg-accent hidden lg:block"></span>
  <span aria-hidden class="absolute left-[8px] top-0 bottom-0 w-px bg-accent block lg:hidden"></span>
  <li>...</li>
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ol>
```

The `aria-hidden` is correct — the rule is decoration. Screen readers should not announce "image" or "ruler". The phases are an `<ol>` so their order is announced as a list.

### Each phase

Composition (top to bottom in DOM):

```
<li class="vision-arc__step">
  <span class="font-mono text-xs uppercase tracking-[0.10em] text-accent">01</span>
  <h3 class="font-display font-bold text-2xl mt-6 text-text">garantia locatícia</h3>
  <p class="font-sans text-sm mt-2 text-text-2 max-w-[24ch]">Repasse automático ao proprietário quando o inquilino para de pagar.</p>
</li>
```

| # | Phase headline (pt-BR) | Phase headline (en) | Sub-line (pt-BR) | Sub-line (en) |
|---|------------------------|---------------------|-------------------|---------------|
| 01 | garantia locatícia | rental guarantee | Repasse automático ao proprietário quando o inquilino para de pagar. | Automatic transfer to the owner when the tenant stops paying. |
| 02 | score onchain | onchain score | Reputação de inquilino verificável e portátil entre garantidoras. | Tenant reputation that is verifiable and portable across guarantors. |
| 03 | TGA token | TGA token | Liquidez para a garantia. Capital que escala com o mercado. | Liquidity for the guarantee. Capital that scales with the market. |
| 04 | tokenização imobiliária | real estate tokenization | O contrato de aluguel como ativo. Yield real, lastreado em renda real. | The rental contract as an asset. Real yield, backed by real income. |

Per `recommendations.md`: phase 04 headline is the **concrete noun** ("tokenização imobiliária"), not the abstract ("Horizonte"). Concrete reads faster.

### Critical absences

These are deliberately **not** in this section — the brief calls them out explicitly:

- ❌ No dates ("Q1 2026", "early 2027", "soon", etc.).
- ❌ No "we're here" indicator. Phase 01 does not get a filled dot, an active state, an underline, or any visual differentiation from phases 02/03/04. All four are equally articulated.
- ❌ No "Now / Next / Later" temporal labels above phase rows.
- ❌ No progress bar.
- ❌ No CTA at the end of the arc ("Join us", "Stay tuned"). The arc is not a sales tool.
- ❌ No iconography per phase (would compete with the rule).

### Typography per phase

- Mono numeral (`01`, `02`, `03`, `04`): JetBrains Mono Medium 12px, **`var(--color-accent)`** (`#E8A020`), `tracking-[0.10em]`, `tabular-nums`. **This is the only place in the section where amber text appears.** The numerals are not just labels — they're anchor points the amber rule passes through.
- Phase headline (H3): Geist Bold 24px (`lg+`) / 20px (`<lg`), `var(--color-text)` (`#F0F0EE`). **Lowercase** — the brand uses lowercase for the wordmark and the brand voice prefers lowercase for these labels (per `discover/visual-ref/DESIGN.md` precedent and `tga.yml#tokens.typography`). Margin-top from numeral: 24px (allowing space for the amber rule between).
- Sub-line: Inter Regular 14px, `var(--color-text-2)` (`#8A8F99`), `leading-[1.5]`, `max-width: 24ch` (forces a 2–3 line break per phase, making the four phases visually rhythmic). Margin-top from H3: 8px.

## Components used

- `MonoKicker` (shared)
- `SectionHeader` (shared) — kicker only, no headline.
- `Mono` (shared) — wraps numerals with `tabular-nums`.
- `VisionArc` (local) — composition wrapping the `<ol>`, the rule, and the four `<li>` phases.

## States

### Default
All four phases visible. Amber rule connects them (horizontal `lg+`, vertical `<lg`). No phase is highlighted relative to any other.

### Empty / Loading / Error
N/A — static content.

## Interactions

| Trigger | Result |
|---------|--------|
| Hover (any phase) | None. The arc is not interactive. No tooltip, no expand, no link. |
| Click (any phase) | None. The phases are not links. (Future iteration: each phase could link to a deeper docs page when those exist — out of scope.) |
| Tab | Skip — no focusable elements. |
| Reduced-motion | No effect. No animations. |

## Accessibility

- **VoiceOver order:** kicker → "list of 4 items" → "1, 01, garantia locatícia, Repasse automático…" → "2, 02, score onchain…" → … The `<ol>` ensures the count is announced.
- **The amber rule is `aria-hidden="true"`** — decoration only. Screen readers do not announce it.
- **Heading structure:** `<h2>` is implicit via the section's `aria-labelledby` pointing to the kicker (or alternatively, an `sr-only` `<h2 id="arc-h2">Horizonte</h2>`). Each phase headline is `<h3>` to maintain the heading tree (h1 hero → h2 sections → h3 sub-items).
- **Section landmark:** `<section aria-labelledby="arc-h2">`.
- **Contrast:**
  - Mono numeral amber `#E8A020` on `#0E0F11` = **6.92:1 AA**, AAA for large text. The numerals at 12px are normal text by WCAG; passes AA. (12px Mono with bold weight tracks closer to 14px equivalent — comfortably legible.)
  - H3 (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Sub-line (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
- **The amber rule is purely decorative.** It does not convey information about progress or state — its meaning is "these are connected, in order", which is already conveyed by the `<ol>` structure.

## Image resources

**No imagery.**

The amber rule is the only visual element beyond typography. Per the brand: no charts here (no real numbers, and the arc isn't a data viz). No icons (would compete with the rule and dilute amber). No illustrations.

The mood-board references (`19fbb9670e62…jpg`, `3a55038d30…jpg`) suggested Bauhaus / Mies typographic markers anchored to a single architectural line — exactly what this section does. The "imagery" of this section is the rule itself.

## Visual effects

- **The 1px amber rule** is the section's signature. It is the brand's structural-architectural argument compressed into one element. No glow on the rule, no blur, no animation.
- **Surface stacking:** the section stays on `var(--color-canvas)`. No elevated surface.
- **No motion.** No fade-in, no scroll-trigger reveal, no draw-on animation for the rule (tempting but forbidden — the rule appears fully drawn on load).

## Brand-contract checks

- ✅ `border-radius: 0` — N/A, no boxed elements.
- ✅ No shadows.
- ✅ Amber pixel budget: the 1px rule on a 1280px-wide section ≈ 1280px². Four mono numerals at ~16×16 each = ~1024px². Total ~2304px². At 1280×~640 = 819,200px² section surface, amber occupies 0.28%. Well under budget. (Even doubled for the larger 2xl breakpoint, the amber stays sub-1%.)
- ✅ Three-layer hierarchy: Geist (phase headlines) ✓ + Inter (sub-lines) ✓ + JetBrains Mono (kicker + numerals) ✓.
- ✅ Tabular numerals: numerals use `font-feature-settings: "tnum" 1`.
- ✅ No dates, no progress indicator, no "we're here" — per brand contract and brief.
- ✅ "Quieter than the hero" — section padding 96px (vs hero 200px), no bold H2, only one accent (the rule). Visually subdued by design.
- ✅ Pivot resilience: phase 01 = "garantia locatícia" — if the team pivots inside the rental vertical, this phase headline can shift to whatever the next first-product becomes ("score onchain" if SGR Core becomes a credit primitive first, etc.) without breaking the arc's structure.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/responsive.md](./shared/responsive.md)
- Research: `.design/projects/landing/research/ux-patterns.md § The Vision Arc`
- Research: `.design/projects/landing/research/content-strategy.md § Vision Arc`
- Research: `.design/projects/landing/research/recommendations.md § Anticipate (vision arc as roadmap)`
- Brand: `.design/branding/tga/identity/imagery-style.md § No imagery references`
