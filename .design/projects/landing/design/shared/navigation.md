# Navigation
> Phase: design · Project: landing · 2026-05-02

Single landing surface — there is no app navigation. The "navigation" is a top chrome bar that signals identity, liveness, and locale. The page itself navigates through scroll.

---

## Pattern

**Type:** Sticky top header (chyron register, not marketing chrome).

**Justification:** Per `recommendations.md § Push back`, the team considered dropping the nav CTA entirely. Decision: **keep the nav, drop the CTA**. The nav becomes a status bar — logo, live indicator, locale toggle — and reads as instrumentation, not marketing. The page is short enough that bifurcation is reachable in two scrolls without a CTA push.

This honors the brand contract more honestly: a marketing-style header would have been a centered logo + horizontal nav links + a CTA on the right. That's the SaaS template the brand explicitly refuses. A chyron — logo, live dot, locale — is the brand argument.

## Items

| Slot | Element | Spec |
|------|---------|------|
| Left | `tga` logo wordmark | Direction 1 — Geist Bold lowercase, `var(--color-accent)` (`#E8A020` Investidor / `#C47E10` Imobiliárias) |
| Center-left | Live indicator (square 6×6 amber patch) | `var(--color-accent)`, `border-radius: 0`, `tga-live-pulse` 2s linear infinite |
| Right | Locale toggle | `[ pt-BR / en ]`, JetBrains Mono 11px, active locale `var(--color-text)`, inactive `var(--color-text-2)` |

**No primary nav links.** No "About / Docs / Pricing / Login". The page is the entire surface; there is nothing else to navigate to.

**No `[ fique por dentro ]` ghost CTA.** Removed per the recommendation. The bifurcation is reachable in two scrolls; a CTA would feel redundant and would dilute the chyron register.

## Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ tga ▢                                            [ pt-BR / en ]  │  56px
└──────────────────────────────────────────────────────────────────┘
  32px      8px gap                                            32px
   │         │
   │         └─ 6×6 amber square, pulse animation
   └─ Geist Bold lowercase, ~20px height
```

- **Height:** 56px (per brand spec — `tga.yml#patterns.nav.investidor.height`)
- **Background:** `var(--color-canvas)` — matches body. Borderless on top, 1px `var(--color-border)` bottom.
- **Margin:** 32px left/right outer (per `tga.yml#layout.margin`)
- **Logo + dot gap:** 12px between wordmark and live square. Logo and dot share a single horizontal baseline.

## Responsive behavior

| Breakpoint | Behavior |
|------------|----------|
| `2xl` (≥1440) | Full layout. 32px outer margins. Locale toggle + live dot visible. |
| `xl` (1280) | Same as 2xl. |
| `lg` (1024) | Same as 2xl. |
| `md` (768) | Same — nav is already minimal, no collapse needed. 24px outer margins. |
| `sm` (640) | Same — preserve full layout. 16px outer margins. |
| `<sm` | Same — preserve full layout. 16px outer margins. Locale toggle stays right-aligned. |

The nav has so few elements (logo, dot, locale) that it never needs a hamburger collapse. This is a feature: the chyron register survives every breakpoint identically.

## Sticky behavior

- `position: sticky; top: 0; z-index: 10`
- `background: var(--color-canvas)` ensures content underneath doesn't bleed through
- 1px bottom border separates from the hero canvas on scroll
- **Imobiliárias section (proprietario-capture):** the nav's `data-front` resolution stays `investidor` (the dark front) because the nav is in the body's default. Only the proprietario-capture wrapper carries `data-front="imobiliarias"`. The amber dot stays the dark-front amber `#E8A020` throughout the page — a single accent across both fronts is the visual continuity.

## Skip link

The first focusable element on the page is a visually hidden skip link:

```html
<a href="#main"
   class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2
          focus:z-50 focus:px-4 focus:py-2 focus:bg-canvas focus:text-text
          focus:border focus:border-accent">
  Pular para o conteúdo
</a>
```

When focused (Tab from the URL bar), it reveals as an inset 1px amber-bordered box on `var(--color-canvas)` at top-left. Click or Enter scrolls to `<main id="main">`.

## Accessibility

- `<header role="banner">` wraps the nav
- `<nav aria-label="Principal">` for the locale toggle group (disambiguates from any future nav)
- Logo: `<a href="/" aria-label="TGA — página inicial">` wraps the wordmark + live dot
- Live dot is decorative for screen readers — `aria-hidden="true"`. The pulse meaning ("protocol is alive") is conveyed by the rest of the page; the dot is a visual signal only.
- Live dot `title="Protocolo em desenvolvimento"` per `recommendations.md` — appears on hover only, no visible chrome
- Locale toggle: `<a hreflang="pt-BR" lang="pt-BR" href="/">` + `<a hreflang="en" lang="en" href="/en">`. Active state via `aria-current="page"`.

## Related
- [../screen-01-nav.md](../screen-01-nav.md)
- [information-architecture.md](./information-architecture.md)
- [micro-interactions.md](./micro-interactions.md)
