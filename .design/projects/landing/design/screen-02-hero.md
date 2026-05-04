# Screen 02 — Hero
> Phase: design · Project: landing · Section: 01 / 04 — começamos pela garantia · 2026-05-02

## Purpose

The page's load-bearing surface. Establishes — in the first viewport — that TGA is rebuilding rental insurance the way it should work. Carries the **guiding line** as `<h1>` and the **manifesto** as the immediate explanation. Passes the "would I stop scrolling?" test in 30 seconds for both Lucas and Ana.

The hero earns the scroll. There is no "scroll for more" affordance, no animated background, no product screenshot, no demo video. The argument is the typography.

## User flow position

First content section after the nav. Both personas land here. Their first read happens here. If this hero fails, the rest of the page does not get read.

## Layout

```
lg+ (≥1024)                                                          ~100vh
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  ── 24px architectural dot grid texture (3% opacity) on canvas ──     │
│                                                                        │
│  ┌────────────────────────────┬─────────────────────────────────────┐ │
│  │ col-span-7                 │ col-span-5                          │ │
│  │                            │                                     │ │
│  │ 01 / 04 — começamos pela   │   (canvas, no element)              │ │
│  │ garantia                   │                                     │ │
│  │ ↓ 32px                     │                                     │ │
│  │                            │                                     │ │
│  │ Aluguel garantido,         │                                     │ │
│  │ do jeito que               │                                     │ │
│  │ deveria funcionar.         │                                     │ │
│  │ ↓ 32px                     │                                     │ │
│  │                            │                                     │ │
│  │ O protocolo que não        │                                     │ │
│  │ falha quando o mercado     │                                     │ │
│  │ falha.                     │                                     │ │
│  └────────────────────────────┴─────────────────────────────────────┘ │
│                                                                        │
│  ── grid texture fades to canvas via mask (linear-gradient bottom) ── │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
↑ 32px                                                              32px ↑

<md (mobile)                                                         ~85vh
┌──────────────────────────────────┐
│ 01 / 04 — começamos pela         │
│ garantia                         │
│                                  │
│ Aluguel garantido,               │
│ do jeito que                     │
│ deveria funcionar.               │
│                                  │
│ O protocolo que não falha        │
│ quando o mercado falha.          │
└──────────────────────────────────┘
```

- **Container:** `<section aria-labelledby="hero-h1">`. The section *is* the headline's container; it does not nest a card.
- **Background:** `var(--color-canvas)` (`#0E0F11`) with **architectural dot grid texture** (3% opacity, 24px tile) per `imagery-style.md § Architectural Grid`. Texture fades out toward the bottom via a linear-gradient mask (`linear-gradient(to bottom, transparent 60%, var(--color-canvas))`) — the only gradient permitted in the system, used as mask, not as color.
- **Padding:** `lg+`: `200px` top, `128px` bottom. `md`: `160px / 96px`. `<md`: `120px / 80px`.
- **Grid:** 12-column on `lg+`. Text occupies `col-span-7`. Right `col-span-5` stays as canvas + dot grid (per `ux-patterns.md § Editorial Asymmetry` — left-anchored hero, empty right is the breathing room).
- **No CTA bar.** Removed per `recommendations.md`. The hero earns the scroll without prompt; the bifurcation is two scrolls down.

## Composition

### Mono kicker (Layer 1: Evidence)
- Element: `<span class="font-mono text-xs uppercase tracking-[0.10em] text-text-2">`
- Content (pt-BR): `01 / 04 — começamos pela garantia`
- Content (en): `01 / 04 — beginning with the guarantee`
- Color: `var(--color-text-2)` (`#8A8F99`) — **not amber.** The kicker is index, not accent. Amber is reserved for the live dot in the nav and the connecting rule on the vision arc.
- Margin-bottom: 32px to H1.

### H1 (Layer 2: Declaration)
- Element: `<h1 class="font-display font-bold tracking-[-0.04em] leading-[1.05] text-text">`
- Content (pt-BR): `Aluguel garantido,<br>do jeito que deveria funcionar.`
- Content (en): `Rent that arrives,<br>the way it should.`
- Font: Geist Bold (700)
- Size: clamp from 40px (`<sm`) → 48px (`sm`) → 56px (`md`) → 64px (`lg`) → 72px (`xl/2xl`)
- Color: `var(--color-text)` (`#F0F0EE`) on `var(--color-canvas)` = **16.9:1 AAA**.
- Hard line break after the comma. The two-line H1 reads as a sentence with a fold at the comma — the second line's quiet correction is the brand's argument.
- Margin-bottom: 32px to manifesto.

### Manifesto (Layer 3: Explanation)
- Element: `<p class="font-sans text-lg md:text-xl leading-relaxed text-text-2 max-w-prose">`
- Content (pt-BR): `O protocolo que não falha quando o mercado falha.`
- Content (en): `The protocol that doesn't fail when the market does.`
- Font: Inter Regular (400) at 18–20px
- Color: `var(--color-text-2)` (`#8A8F99`)
- Max-width: 60-character measure (~`max-w-prose` ≈ 65ch in Tailwind).

The H1 is `<h1>`, the manifesto is `<p>` (per `accessibility-patterns.md § Headings` — never let the manifesto get tagged `<h2>`).

## Components used

- `MonoKicker` (shared) — passes `index="01 / 04"` and `label="começamos pela garantia"`.
- `SectionHeader` — wraps the kicker + H1. Optional manifesto slot below.
- Native `<h1>` and `<p>` (no shadcn primitives — the hero is naked typography).

## States

### Default (loaded)
All three layers visible. Kicker, H1, manifesto. Background canvas with dot grid at 3% opacity.

### Empty
N/A. The hero has no data dependency. Static copy.

### Loading
N/A. Server-rendered. No client load state for the hero. (Fonts may FOUT briefly — handled by `next/font` swap with the variable Inter + JetBrains Mono CSS fallbacks. The design must render legibly during font swap; fallbacks are system sans-serif and system mono respectively.)

### Error
N/A. Static content.

## Interactions

| Trigger | Result |
|---------|--------|
| Tab from nav | Skip the hero entirely (no interactive elements inside). Next focusable element is the first interactive in the-gap section (currently none either — focus skips to bifurcation cards). |
| Mouse hover | Cursor stays default. No hover affordance; the hero is read, not clicked. |
| Scroll | Section scrolls with body. Sticky nav stays. No parallax. |
| Reduced-motion | No effect — no animations in the hero. |

The hero has zero interactive elements. This is deliberate. The first viewport asks nothing of the visitor except that they read.

## Accessibility

- **VoiceOver order:** kicker text → H1 → manifesto. The kicker is read first because it is the first DOM child. (If this becomes too noisy in screen reader experience, alternative: wrap kicker in `<span aria-hidden="true">` so VoiceOver skips it. Recommendation: **keep it readable** — the index is meaningful context, not decoration.)
- **Heading structure:** Single `<h1>` per page lives here.
- **Section landmark:** `<section aria-labelledby="hero-h1">` where `hero-h1` is the H1's id.
- **Contrast:** H1 `#F0F0EE` on `#0E0F11` = **16.9:1 AAA**. Manifesto `#8A8F99` on `#0E0F11` = **6.46:1 AA** (above AA 4.5:1, below AAA 7:1 — acceptable per the brief's AA target). Kicker same contrast as manifesto.
- **Reduced-motion:** No motion in the hero, so no behavior change.
- **Touch:** No interactive elements; no targets.
- **Language:** if the en variant contains the pt-BR phrase "garantia locatícia" anywhere, wrap it in `<span lang="pt-BR">garantia locatícia</span>` for screen-reader pronunciation correctness.

## Image resources

**Background texture only — no photography.**

| Slot | Type | Description | Treatment |
|------|------|-------------|-----------|
| Canvas background | CSS-only — architectural dot grid | 24px-tile dot grid at 3% opacity, `radial-gradient(rgba(42,45,51,1) 1px, transparent 1px)` background-size 24×24. Aligned to the 8px base unit (24 = 3 × 8). | Linear-gradient mask fades grid out toward bottom of section (`linear-gradient(to bottom, transparent 60%, var(--color-canvas))`). Mask keeps the grid visible behind the headline and dissolves it cleanly into the next section. |

Per `imagery-style.md § Dashboard Investidor — No Photography`: zero photography on the dark front, ever. Data viz would be the alternative — but no real numbers exist for this landing, so no chart renders. The hero is therefore intentionally typographic only. The dot grid carries the architectural / blueprint reference.

## Visual effects (per brand vocabulary)

- **Architectural grid texture:** the 24px dot grid is the brand's signature texture for the Investidor canvas. Apply at 3% opacity maximum (per `imagery-style.md`).
- **Gradient mask:** the bottom-fade is the only gradient in the system, used as a mask, not as color. Per `reference-specs.md § The architectural grid texture`.
- **No glow.** No `box-shadow` on the H1 or any element. No phosphor-glow text effects. No `text-shadow`. The H1 is flat type.
- **No motion.** Hero does not animate. No fade-in, no scroll-trigger reveal, no stagger.
- **Surface stacking:** the hero sits on `var(--color-canvas)`. There are no elevated surfaces in the hero — the entire hero is one canvas plane.

## Brand-contract checks

- ✅ `border-radius: 0` — N/A, no boxed elements.
- ✅ No shadows.
- ✅ No glass / backdrop-filter.
- ✅ Amber pixel budget: zero amber in hero. Logo amber lives in the nav above; the hero contributes nothing to the amber budget. (This is good — the hero passes the budget for free, leaving room for amber elsewhere.)
- ✅ Three-layer hierarchy: Geist (H1) ✓ + Inter (manifesto) ✓ + JetBrains Mono (kicker) ✓ — all three present in DOM order.
- ✅ Tabular numerals: `01 / 04` in the kicker uses `font-feature-settings: "tnum" 1` via the `Mono` wrapper or the `font-mono tabular-nums` class (already in the brand's mono stack).
- ✅ Pivot resilience check: the H1 *"Aluguel garantido, do jeito que deveria funcionar"* claims category, not feature. Survives a pivot inside the rental vertical.

## Related
- [shared/personas.md](./shared/personas.md)
- [shared/responsive.md](./shared/responsive.md)
- [shared/component-plan.md](./shared/component-plan.md)
- Brand: `.design/branding/tga/patterns/STYLE.md § 2. Philosophy`
- Research: `.design/projects/landing/research/ux-patterns.md § The Vision-Led Hero`
- Research: `.design/projects/landing/research/content-strategy.md § Hero`
