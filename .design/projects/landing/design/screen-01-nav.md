# Screen 01 — Nav
> Phase: design · Project: landing · Section: chrome (above the fold) · 2026-05-02

## Purpose

Sticky top chrome that signals identity, liveness, and language without acting as marketing surface. Reads as **chyron**, not as marketing header. The page navigates through scroll; this nav is the protocol's instrument-panel chrome — logo, live indicator, locale.

## User flow position

First visible element. Persistent (sticky) across the entire page scroll. Both Lucas (proprietário) and Ana (investidora) see this in every viewport state — it is the consistent anchor across the dark-light-dark surface arc.

## Layout

```
2xl/xl/lg                                                                  height: 56px
┌─────────────────────────────────────────────────────────────────────────┐
│  tga ▢                                                  [ pt-BR / en ]  │
└─────────────────────────────────────────────────────────────────────────┘
↑ 32px                                                              32px ↑
   logo (Geist Bold lowercase, ~20px height) + 12px gap + live dot
                                                              locale toggle

md / sm / <sm                                                       height: 56px
┌─────────────────────────────────────────────────────────────────────────┐
│  tga ▢                                              [ pt-BR / en ]      │
└─────────────────────────────────────────────────────────────────────────┘
   16–24px outer margin
```

- **Container:** `<header role="banner">` → `<nav aria-label="Principal">` wrapping the layout
- **Background:** `var(--color-canvas)` (`#0E0F11`) — matches body. **No transparency, no blur, no glass.**
- **Border:** 1px solid `var(--color-border)` (`#2A2D33`) on bottom only. No top border, no shadow.
- **Sticky:** `position: sticky; top: 0; z-index: 10`. Background is opaque so content underneath does not bleed through (no glass per brand contract).
- **Inner alignment:** flexbox row, `justify-content: space-between`, `align-items: center`. Left cluster (logo + dot) and right cluster (locale toggle) on either end.

## Components used

From the `New (shared)` plan:

- `Logo` — Geist Bold lowercase wordmark `tga` at `font-size: 20px`, `color: var(--color-accent)` (`#E8A020`). Wrapped in `<a href="/" aria-label="TGA — página inicial">`. **Direction 1** per `tga.yml#patterns.logo.direction-1`.
- `LiveDot` — 6×6 amber square, `border-radius: 0`, `tga-live-pulse` 2s linear infinite. Reduced-motion → static, opacity 1. `aria-hidden="true"`. `title="Protocolo em desenvolvimento"`.
- `LanguageToggle` — `[ pt-BR / en ]` Mono 11px. Active: `var(--color-text)`. Inactive: `var(--color-text-2)`. Hover transitions inactive → active color via `effects.interaction-vocabulary.hover` (150ms ease-out). `aria-current="page"` on active.

## States

### Default (page loaded)
- Logo visible, amber.
- Live dot pulsing (opacity 1 → 0.4 → 1, 2s linear infinite).
- Locale toggle: active locale (e.g., `pt-BR`) in `var(--color-text)`, other in `var(--color-text-2)`, separator `/` in `var(--color-text-3)` (`#555B66`).
- Bottom border 1px `var(--color-border)`.

### Hover (logo)
- No transition. Logo amber stays amber. Cursor `pointer`. (No hover color shift on the logo — amber is already the focus.)

### Hover (locale toggle, inactive locale)
- `color`: `var(--color-text-2)` → `var(--color-text)` over 150ms ease-out.
- Active locale does not transition (already at `var(--color-text)`).

### Hover (live dot)
- Native browser tooltip surfaces the `title` attribute (`"Protocolo em desenvolvimento"`). No custom tooltip chrome.

### Focus (any nav link)
- `outline: 1px solid var(--color-accent)` with `outline-offset: -1px`. No outline animation.

### Reduced-motion
- Live dot animation removed. Dot stays present, fully amber, at opacity 1. Meaning is preserved (the protocol's liveness) without movement.

### Empty / Loading / Error
- N/A. The nav is structural chrome. No data load. No empty state. No error state.

## Interactions

| Trigger | Result |
|---------|--------|
| Click logo | Smooth-scroll to top of page (`href="/"` is the same route — browser default scroll is acceptable; explicit smooth-scroll JS not required). |
| Click `pt-BR` link | Navigate to `/`. Locale resets to pt-BR. Page reloads with `<html lang="pt-BR">`. |
| Click `en` link | Navigate to `/en`. Locale = en. Page reloads with `<html lang="en">`. |
| Tab from URL bar | First focus = SkipLink (visually revealed). Second Tab = Logo. Third Tab = first locale link. Fourth Tab = second locale link. Fifth Tab = exits nav into hero CTA (or first interactive element of hero — currently none, so directly to the-gap). |

## Accessibility

- **VoiceOver order:** `SkipLink → Logo → LiveDot is hidden → "pt-BR, link, current page" → "en, link"`. Live dot is `aria-hidden="true"` so it is skipped entirely by VoiceOver.
- **Skip link:** First focusable element on page. Hidden until `:focus-visible`, then revealed top-left as inset 1px amber-bordered box on `var(--color-canvas)`. `href="#main"` jumps to `<main>`.
- **Heading structure:** Nav contains zero headings. The `<h1>` lives only in the hero section.
- **Landmarks:** `<header role="banner">` (implicit but explicit for clarity) wrapping `<nav aria-label="Principal">`. The `aria-label` disambiguates from any future locale toggle nav (currently inline; if extracted into a sub-nav, it gets `aria-label="Idioma"`).
- **Touch target — locale toggle:** Mono 11px text wrapped in `<a>` with `padding: 8px 12px`. Effective tap zone ~32×50px, exceeds 44×44 horizontally. The vertical 32px is acceptable per WCAG 2.5.8 (24×24 AA minimum) and adjacent links are spaced via the `/` separator with 4px each side.
- **Live dot meaning:** The pulse is decoration. The presence (an amber square at the top of every page) is the signal. Screen readers ignore it (`aria-hidden`). The `title` provides hover-only context for sighted-mouse users.

## Image resources

None. The nav uses zero imagery — the logo is rendered as live text (Geist Bold), the live dot is a CSS box. No SVG needed for either.

If a future favicon export is needed: render the same Direction 1 wordmark `tga` to a 32×32 PNG with `var(--color-accent)` text on transparent background, no padding adjustment beyond the brand 1× cap-height clear space rule. (Out of scope for this design pass.)

## Visual effects (per brand vocabulary)

- **Surface stacking:** Nav is on `var(--color-canvas)`. There is no surface step within the nav — it sits flat on the canvas with a single 1px bottom border separating it from the hero below. The 1px line is the only depth cue.
- **The pulse:** the brand's single ambient animation. Opacity-only, 2s linear, no transform, no shadow. `tga-live-pulse` keyframe per `STYLE.md § The pulse animation`.
- **Hover transitions:** 150ms ease-out on `color` only (locale toggle inactive → active). No transforms.
- **Focus:** 1px solid amber outline with `outline-offset: -1px` (inset). Immediate, no animation.

## Brand-contract checks

- ✅ `border-radius: 0` on all nav elements (logo wordmark has none; live square is 0; locale toggle has no chrome).
- ✅ No shadows.
- ✅ No glass / backdrop-filter (background is opaque `var(--color-canvas)`).
- ✅ Amber pixel budget: logo wordmark at ~20×40 = 800px², live dot at 36px², zero amber elsewhere in nav. At 1440×56 = 80,640px² total nav surface, amber occupies ~836px² = 1.04%. Well under the 5% budget — the nav is amber-scarce by design.
- ✅ Three-layer hierarchy: Geist (logo) + Mono (locale toggle) — Inter is intentionally absent here because the nav has no body/explanation copy. The full three-layer hierarchy lives in the hero (next section).
- ✅ Tabular numerals: not applicable — no numbers in the nav.

## Related
- [shared/navigation.md](./shared/navigation.md)
- [shared/micro-interactions.md](./shared/micro-interactions.md)
- [shared/component-plan.md](./shared/component-plan.md)
- Brand pattern: `.design/branding/tga/patterns/tga.yml#patterns.nav.investidor`
