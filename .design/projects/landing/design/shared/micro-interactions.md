# Micro-Interactions
> Phase: design · Project: landing · 2026-05-02

The brand's effects vocabulary is tight: **only `color`, `background-color`, `border-color`, and `opacity` may transition.** Transform properties (`scale`, `translate`, `rotate`) **never** transition on interaction. There is exactly one ambient animation in the entire system — the live amber pulse. Everything else is instantaneous color/border change at 150ms ease-out.

This document is short on purpose. The brand's motion budget is small and that is the point.

---

## Interaction table

| # | Trigger | Element | Animation | Duration | Easing | Notes |
|---|---------|---------|-----------|----------|--------|-------|
| 1 | Page load | `.tga-live-dot` (nav) | `tga-live-pulse` opacity 1 → 0.4 → 1 | 2s | linear | Infinite. Reduced-motion: `animation: none; opacity: 1`. |
| 2 | `:hover` | `.bifurcation-card` | `background-color`: `var(--color-canvas)` → `var(--color-surface)` | 150ms | ease-out | Surface stacking: one tonal step up. No transform. |
| 3 | `:hover` | `[data-card="proprietario"]` (specific) | Inherits #2 — but stops one step short of `var(--color-surface-2)` to *foreshadow* the light handoff. Surface temperature lift only, no actual hue shift. | 150ms | ease-out | Mitigation for the dark→light jarring (per `recommendations.md`). |
| 4 | `:hover` | `.btn-primary` (Investidor variant) | `background-color`: `transparent` → `var(--color-accent)`; `color`: `var(--color-accent)` → `var(--color-canvas)` | 150ms | ease-out | Outline button fills in. |
| 5 | `:hover` | `.btn-primary` (Imobiliárias variant) | `background-color`: `var(--color-accent)` → `var(--color-accent-dim)` (`#9E6A10`) | 150ms | ease-out | Solid amber deepens; text stays `#1A1A1A`. |
| 6 | `:hover` | `.btn-secondary` (Investidor variant) | `border-color`: `var(--color-border)` → `var(--color-accent)`; `color`: `var(--color-text-2)` → `var(--color-text)` | 150ms | ease-out | Used by language toggle on hover. |
| 7 | `:hover` | `a.locale-link` (inactive) | `color`: `var(--color-text-2)` → `var(--color-text)` | 150ms | ease-out | Active locale doesn't transition (already `var(--color-text)`). |
| 8 | `:hover` | `a.footer-link` | `color`: `var(--color-text-2)` → `var(--color-accent)` | 150ms | ease-out | The single place footer text adopts amber — and only on hover. |
| 9 | `:active` | Any button | `opacity`: 1 → 0.85 | 80ms | linear | Press-down via opacity, never transform. |
| 10 | `:focus-visible` | Buttons, cards, inputs, links | 1px solid `var(--color-accent)` outline, `outline-offset: -1px` | immediate | — | No animation. The border *is* the focus. |
| 11 | `Tab` (skip link) | `a.skip-link` | `clip` reveals from `sr-only` → fixed visible position; `background-color`: → `var(--color-canvas)`; `border`: → `1px solid var(--color-accent)` | 150ms | ease-out | Standard skip link reveal. |
| 12 | Form submit | `button[type=submit]` | Disable + `opacity`: 1 → 0.4 during pending | 80ms | linear | Server Action awaits. No spinner — opacity is the busy state. |
| 13 | Form success | `[role=status]` confirmation | `opacity`: 0 → 1 fade-in (the only fade-in on the page) | 150ms | ease-out | `aria-live="polite"` announces. |
| 14 | Form error | `[role=alert]` error region | `opacity`: 0 → 1 fade-in; `color`: applies `var(--color-error)` instantly | 150ms | ease-out | Inline below input. |
| 15 | Card click (bifurcation) | Smooth-scroll to capture form | `behavior: smooth` via `scrollTo` (or anchor) | ~600ms (browser-determined) | browser default | Then focus moves to first input in target form (per WCAG 2.4.3). |
| 16 | Hover (live dot) | `title="Protocolo em desenvolvimento"` tooltip | Native browser tooltip | — | — | No custom tooltip chrome. |

---

## Reduced-motion behavior

`@media (prefers-reduced-motion: reduce)`:

- **Live amber pulse:** `animation: none; opacity: 1`. Dot stays present, fully visible, just static. Meaning is conveyed by presence, not motion.
- **Smooth-scroll on bifurcation card click:** falls back to `scrollIntoView({ behavior: 'auto' })` — instant jump.
- **All other transitions** (150ms color/border) — kept. They're below the reduced-motion threshold (no transforms, no opacity-flicker, no parallax). The brand's motion is already at the floor; reducing further would damage the focus-visible feedback loop.
- **Form submit `opacity` transition:** kept. Functional state feedback, not decorative.

Per the brand contract: *"Motion: 2 — minimal, functional only."* Reduced-motion drops the one ambient animation and leaves everything else, because the rest is already functional state feedback.

---

## What is explicitly NOT in the system

These are tempting and forbidden. Reviewing this list is a design-review checklist item.

- ❌ Hover `transform: scale()` on cards or buttons
- ❌ Hover `translate` lift effects
- ❌ Box-shadow pulse on the live indicator (opacity only)
- ❌ Parallax on hero or any section
- ❌ Scroll-triggered fade-ins (sections appear instantly when reached)
- ❌ Sticky reveal animations
- ❌ Stagger entrances
- ❌ Rotate or spin loaders
- ❌ Shimmer skeletons (use static `var(--color-surface)` placeholder if needed)
- ❌ Confetti / champagne pop on form success (anti-celebration is the voice)
- ❌ Custom cursor effects
- ❌ Hover-glow on amber elements

If during build or review any of the above appear, they are out-of-contract and must be removed.

## Related
- [../screen-01-nav.md](../screen-01-nav.md) — live dot
- [../screen-05-bifurcation.md](../screen-05-bifurcation.md) — card hover + scroll
- [../screen-06-proprietario-capture.md](../screen-06-proprietario-capture.md) — form interactions
- [../screen-07-investidor-capture.md](../screen-07-investidor-capture.md) — form interactions
