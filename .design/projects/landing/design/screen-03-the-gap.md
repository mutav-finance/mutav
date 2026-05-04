# Screen 03 — The Gap
> Phase: design · Project: landing · Section: 02 / 04 — onde o mercado falha · 2026-05-02

## Purpose

Category-level diagnosis. Three short, declarative statements about why current rental insurance fails — written so true that Lucas recognizes the experience and Ana recognizes the systemic problem. **No competitor names**, no hedge language, no tentative qualifiers. The reader is being told something specific.

The brand's voice is *autoridade calma*: the sentence is true, or it isn't. This section is where that voice gets tested.

## User flow position

Second content section, after hero. Reader has read the guiding line + manifesto and is now being told what's broken. Before the vision arc shows the road forward, the gap section names the problem.

## Layout

```
lg+ (≥1024)                                                          ~80vh
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ┌──────────────────────┬───────────────────────────────────────────┐ │
│  │ col-span-4           │ col-span-8                                │ │
│  │                      │                                           │ │
│  │ 02 / 04 — onde o     │   01 — A garantia depende de quem te     │ │
│  │ mercado falha        │        aprovou.                           │ │
│  │ ↓ 32px               │        quando a garantidora trava,        │ │
│  │                      │        sua garantia trava junto.          │ │
│  │ O que não            │   ──────────────────────────────────      │ │
│  │ funciona hoje.       │   02 — O repasse pode esperar 60 dias.   │ │
│  │ (Geist Bold 40px)    │        o aluguel não pode.                │ │
│  │                      │   ──────────────────────────────────      │ │
│  │                      │   03 — A liquidação é opaca.             │ │
│  │                      │        você não sabe quando, nem por      │ │
│  │                      │        quê, nem se.                       │ │
│  └──────────────────────┴───────────────────────────────────────────┘ │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

<lg                                                                  ~auto
┌──────────────────────────────────┐
│ 02 / 04 — onde o mercado falha   │
│                                  │
│ O que não funciona hoje.         │
│                                  │
│ ─────────────────────────────    │
│                                  │
│ 01 — A garantia depende de       │
│      quem te aprovou.            │
│      quando a garantidora trava, │
│      sua garantia trava junto.   │
│                                  │
│ ─────────────────────────────    │
│                                  │
│ 02 — O repasse pode esperar      │
│      60 dias.                    │
│      o aluguel não pode.         │
│                                  │
│ ─────────────────────────────    │
│                                  │
│ 03 — A liquidação é opaca.       │
│      você não sabe quando, nem   │
│      por quê, nem se.            │
└──────────────────────────────────┘
```

- **Container:** `<section aria-labelledby="gap-h2">` on default canvas.
- **Background:** `var(--color-canvas)` (`#0E0F11`). No texture in this section — the dot grid lives only in the hero.
- **Padding:** `lg+`: 128px top, 128px bottom. `<lg`: 80px / 80px.
- **Grid:** 12-column on `lg+`. Section header (kicker + Geist H2) anchored left in cols 1–4. Three diagnostics stacked vertically in cols 5–12. Each diagnostic spans the full 8 cols.
- **Diagnostic dividers:** 1px solid `var(--color-border)` (`#2A2D33`) between each diagnostic. **Not amber** — the rule is structural, not accent.

## Composition

### Section header
- Mono kicker: `02 / 04 — onde o mercado falha` (en: `02 / 04 — where the market fails`)
- H2: `O que não funciona hoje.` (en: `What doesn't work today.`)
- H2 size: Geist Bold 40px on `lg+`, 32px on `md`, 28px on `<md`
- H2 color: `var(--color-text)` (`#F0F0EE`)
- No sub-line under H2 — the three diagnostics are the body.

### Three diagnostic statements

Each diagnostic is a `<li>` inside an `<ol>` (ordered list — the numerals are meaningful). Composition:

```
<li>
  <Mono number>01</Mono> <span class="font-mono small text-text-2">—</span>
  <h3 class="font-display font-bold text-2xl">A garantia depende de quem te aprovou.</h3>
  <p class="font-sans text-sm text-text-2">quando a garantidora trava, sua garantia trava junto.</p>
</li>
```

| # | Statement (pt-BR) | Sub-line (pt-BR) |
|---|-------------------|------------------|
| 01 | A garantia depende de quem te aprovou. | quando a garantidora trava, sua garantia trava junto. |
| 02 | O repasse pode esperar 60 dias. | o aluguel não pode. |
| 03 | A liquidação é opaca. | você não sabe quando, nem por quê, nem se. |

| # | Statement (en) | Sub-line (en) |
|---|----------------|---------------|
| 01 | The guarantee depends on who approved you. | when the guarantor stops, your guarantee stops with it. |
| 02 | The transfer can wait 60 days. | rent can't. |
| 03 | Settlement is opaque. | you don't know when, why, or if. |

### Typography per diagnostic

- Mono numeral (`01`, `02`, `03`): JetBrains Mono Medium 12px, `var(--color-text-2)`, `tracking-[0.10em]`, `tabular-nums`. Followed by an em dash and 16px gap before the H3.
- H3 (statement): Geist Bold 24px (`lg+`) / 20px (`<lg`), `var(--color-text)`, `leading-[1.15]`, `tracking-[-0.02em]`. Margin-top from numeral row: 8px. Period at end of each — the brand voice is declarative.
- Sub-line: Inter Regular 14px, `var(--color-text-2)` (`#8A8F99`), `leading-[1.5]`. Lowercase. Margin-top from H3: 12px.
- Vertical gap between diagnostics: 32px (`lg+`) / 40px (`<lg`). 1px `var(--color-border)` rule between, with 32px / 40px padding on each side.

## Components used

- `MonoKicker` (shared)
- `SectionHeader` (shared) — for the kicker + H2.
- `Mono` (shared) — wraps the numerals (`01`, `02`, `03`) for guaranteed `tabular-nums`.
- Native `<ol>`, `<li>`, `<h3>`, `<p>` — semantic, no shadcn primitive.

## States

### Default
All three diagnostics rendered. Static content.

### Empty / Loading / Error
N/A — static content.

## Interactions

| Trigger | Result |
|---------|--------|
| Hover | None. The diagnostics are read, not clicked. No interactive elements. |
| Tab | Skip — no focusable elements. Next focus = bifurcation cards (after vision arc). |
| Reduced-motion | No effect. No animations. |

## Accessibility

- **VoiceOver order:** kicker → H2 → "1, A garantia depende de quem te aprovou. quando a garantidora trava, sua garantia trava junto." → "2, O repasse pode esperar..." → "3, A liquidação é opaca..."
- **The `<ol>` choice** ensures screen readers announce the count ("list of 3 items") and the position ("item 1 of 3"). This is meaningful context — the reader hears that there are three claims, in order.
- **Heading structure:** `<h2>` is the section heading. Each diagnostic uses `<h3>`. No skip from `<h2>` to `<h4>`.
- **Section landmark:** `<section aria-labelledby="gap-h2">`.
- **Contrast:**
  - H3 (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Mono numeral + sub-line (`#8A8F99` on `#0E0F11`) = 6.46:1 AA (passes 4.5:1 AA, below 7:1 AAA — acceptable per AA target).
  - 1px `#2A2D33` divider on `#0E0F11` = 1.30:1 — fine, this is decorative not text.
- **Reading order:** the mono numeral *precedes* the H3 in DOM. Visual reading order matches DOM order on every breakpoint.

## Image resources

**No imagery.**

The Gap section is pure typography. Per `imagery-style.md § Dashboard Investidor — No Photography`, zero photography on the dark front. No charts (no real numbers). No illustrations (Imobiliárias-only, and only for empty states / explainers). No iconography (icon at the start of each diagnostic would compete with the mono numerals and add noise).

If a visual element is later wanted, the only on-brand option is a single faint vertical 1px amber rule running the full height of the right column connecting the three diagnostics — but this would compete with the vision arc's amber rule and dilute the budget. **Recommendation: omit.** Section stays naked.

## Visual effects

- **Surface stacking:** stays on `var(--color-canvas)`. No elevated surface.
- **Dividers:** 1px solid `var(--color-border)` between diagnostics. Static — no hover, no transition.
- **No motion.** No fade-in. No scroll-trigger reveal.

## Brand-contract checks

- ✅ `border-radius: 0` — N/A, no boxed elements.
- ✅ No shadows.
- ✅ Amber pixel budget: zero amber in this section. Section contributes 0px² to the budget.
- ✅ Three-layer hierarchy: Geist (H2 + H3) ✓ + Inter (sub-lines) ✓ + JetBrains Mono (kicker + numerals) ✓.
- ✅ Tabular numerals: numerals `01 / 02 / 03` use `font-feature-settings: "tnum" 1` via the `Mono` wrapper.
- ✅ No company names. The diagnostics are category-true — they describe CredPago, QuintoCred, Porto Seguro, Sul-América all simultaneously without naming any. Per `content-strategy.md § The Gap`.
- ✅ No hedge language. No "muitas vezes", "pode acontecer", "em alguns casos". Per voice contract `autoridade calma`.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/information-architecture.md](./shared/information-architecture.md)
- Research: `.design/projects/landing/research/content-strategy.md § The Gap`
- Research: `.design/projects/landing/research/ux-patterns.md § Editorial Asymmetry`
