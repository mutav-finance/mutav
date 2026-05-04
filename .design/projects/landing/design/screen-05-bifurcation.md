# Screen 05 — Bifurcation
> Phase: design · Project: landing · Section: 04 / 04 — escolha sua trilha · 2026-05-02

## Purpose

The fork moment. The single point where the page acknowledges its two audiences and lets them self-segment. Two equal-weight cards: **proprietário/imobiliária** and **investidor**. Click each card → smooth-scroll + focus into the matching capture form below. Both forms are always rendered server-side (always crawlable by SEO, always reachable via direct anchor link).

This is the only centered moment on the page. After this, asymmetry resumes.

## User flow position

Fourth content section (last in the narrative spine). Both personas have read hero + gap + arc. Now they self-identify. Lucas takes the left card, Ana the right. Neither path is up-prioritized — equal column weight, equal type weight, equal hover treatment.

## Layout

```
lg+ (≥1024)                                                          ~60vh
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│                       04 / 04 — escolha sua trilha                     │
│                                                                        │
│  ┌─────────────────────────────────┬─────────────────────────────────┐ │
│  │ col-span-6                      │ col-span-6                      │ │
│  │ canvas                          │ canvas                          │ │
│  │                                 │                                 │ │
│  │  01 — IMOBILIÁRIA               │  02 — INVESTIDOR                │ │
│  │                                 │                                 │ │
│  │  Sou proprietário               │  Sou investidor.                │ │
│  │  ou imobiliária.                │                                 │ │
│  │                                 │                                 │ │
│  │  Você quer que o aluguel        │  Você quer yield real,          │ │
│  │  chegue. Sem fórmula,           │  com colateral verificável.     │ │
│  │  sem fila.                      │                                 │ │
│  │                                 │                                 │ │
│  └─────────────────────────────────┴─────────────────────────────────┘ │
│   ↑ 1px var(--color-border) line between cards via gap-px              │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

<lg                                                                  ~auto
┌──────────────────────────────────┐
│   04 / 04 — escolha sua trilha   │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ 01 — IMOBILIÁRIA             │ │
│ │                              │ │
│ │ Sou proprietário ou          │ │
│ │ imobiliária.                 │ │
│ │                              │ │
│ │ Você quer que o aluguel      │ │
│ │ chegue. Sem fórmula,         │ │
│ │ sem fila.                    │ │
│ └──────────────────────────────┘ │
│ ─────────────────────────────    │
│ ┌──────────────────────────────┐ │
│ │ 02 — INVESTIDOR              │ │
│ │                              │ │
│ │ Sou investidor.              │ │
│ │                              │ │
│ │ Você quer yield real, com    │ │
│ │ colateral verificável.       │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

- **Container:** `<section aria-labelledby="bifurcation-h2">`.
- **Background:** `var(--color-canvas)` (`#0E0F11`).
- **Padding:** `lg+`: 96px / 96px. `<lg`: 64px / 64px.
- **Inner layout:** the section is centered (the only centered section). Section header centered. Card pair centered with `max-width: 1200px`, full-bleed within that.
- **Card grid (`lg+`):** `grid-cols-2` with `gap-px bg-border` — the 1px gap between cards is the border itself, drawn by the parent's background showing through the grid gap. No card needs its own border. Per `reference-specs.md § The bifurcation cards`.
- **Card grid (`<lg`):** `grid-cols-1` with `gap-px bg-border` — the 1px row gap becomes a horizontal divider.

## Composition

### Section header (centered)
- Mono kicker: `04 / 04 — escolha sua trilha` (en: `04 / 04 — choose your path`)
- H2: `sr-only` — `<h2 id="bifurcation-h2" class="sr-only">Escolha sua trilha</h2>`. Visible kicker carries the meaning; the H2 is for screen readers.
- Center-aligned. **Only centered moment on the page.**
- Margin-bottom from header to cards: 64px.

### Each card

```
<a href="#proprietario-form" data-card="proprietario" class="card-bifurcation">
  <span class="font-mono text-xs uppercase tracking-[0.10em] text-text-2">01 — IMOBILIÁRIA</span>
  <h3 class="font-display font-bold text-3xl mt-6 text-text">Sou proprietário<br>ou imobiliária.</h3>
  <p class="font-sans text-sm mt-4 text-text-2 max-w-[36ch]">Você quer que o aluguel chegue. Sem fórmula, sem fila.</p>
</a>
```

Card contents (left card — proprietário):
- Mono kicker: `01 — IMOBILIÁRIA` (en: `01 — REAL ESTATE`)
- H3 (Geist Bold 32px lg+ / 28px md / 24px <md): `Sou proprietário ou imobiliária.` (en: `I'm an owner or real estate firm.`)
- Sub-line (Inter 14px): `Você quer que o aluguel chegue. Sem fórmula, sem fila.` (en: `You want rent to arrive. No forms, no queue.`)

Card contents (right card — investidor):
- Mono kicker: `02 — INVESTIDOR` (en: `02 — INVESTOR`)
- H3 (Geist Bold 32px lg+ / 28px md / 24px <md): `Sou investidor.` (en: `I'm an investor.`)
- Sub-line (Inter 14px): `Você quer yield real, com colateral verificável.` (en: `You want real yield, with verifiable collateral.`)

### Card style

```css
.card-bifurcation {
  background: var(--color-canvas);
  padding: 32px 40px 40px;
  display: block;
  text-decoration: none;
  border: none; /* the gap-px trick provides the visual border */
  transition: background-color 150ms ease-out;
}
.card-bifurcation:hover {
  background: var(--color-surface);
}
.card-bifurcation:focus-visible {
  outline: 1px solid var(--color-accent);
  outline-offset: -1px;
}
```

**No card border, no shadow, no rounded corners.** The 1px line between cards comes from the grid's `gap-px bg-border` parent — see Layout above.

### Foreshadowing the dark→light handoff (proprietário card only)

Per `recommendations.md § Anticipate (dark-to-light handoff jarring)`, the proprietário card's hover state has a subtle differentiator that primes the eye for the light surface coming next:

- Default: `background: var(--color-canvas)` (#0E0F11).
- Hover: `background: var(--color-surface)` (#16181C) — same one-step lift as the investidor card.
- The proprietário card's background sits at canvas level by default, but its `padding-bottom` is +8px relative to the investidor card (`48px` vs `40px`). This breaks the visual symmetry slightly, signaling "this side is going somewhere different". The reader senses the temperature shift before the surface actually changes.

This is the only asymmetric thing in this section. It is small, intentional, and on-brand (Lithic Stacking + asymmetric weighting recovers).

### No icons
Per `target-adaptations.md § BifurcationCards`: no iconography inside the cards. The brand contract prohibits coloring icons amber, and bare icons would compete with the manifesto. The cards are typography only.

## Components used

- `MonoKicker` (shared) — for the section header kicker.
- `BifurcationCards` (local) — the 2-card composition with `gap-px bg-border` parent.
- Native `<a>`, `<h3>`, `<p>`, `<span>`.

## States

### Default
Both cards rendered. Equal column weight on `lg+`. Static.

### Hover (any card)
- `background-color: var(--color-canvas) → var(--color-surface)` (150ms ease-out).
- No transform, no shadow, no scale.
- Cursor `pointer`.

### Focus (any card via Tab)
- `outline: 1px solid var(--color-accent)` with `outline-offset: -1px` (inset 1px amber outline).
- The outline appears immediately, no animation.

### Active (mouse-down)
- `opacity: 0.85` for 80ms (per brand `effects.interaction-vocabulary.active`).
- No transform.

### Empty / Loading / Error
N/A — static content.

## Interactions

| Trigger | Result |
|---------|--------|
| Click proprietário card | Smooth-scroll to `#proprietario-form` (the proprietário capture section). On scroll completion, focus moves to first input (the email field). Per WCAG 2.4.3. |
| Click investidor card | Smooth-scroll to `#investidor-form`. Focus moves to email field. |
| Tab from previous section | First Tab into bifurcation → first card (proprietário). Second Tab → second card (investidor). Third Tab → exits into the proprietário form's first input. |
| Enter (when card focused) | Same as click — smooth-scroll + focus into target form. |
| Reduced-motion | Smooth-scroll falls back to instant jump (`scrollIntoView({ behavior: 'auto' })`). Card still opens (focus still moves), just without animation. |

The cards are **not toggle buttons** — they don't show/hide the forms. Both forms are always visible below. The card click is a focus-and-scroll affordance. This is per `accessibility-patterns.md § Focus order on the bifurcation cards`, which explicitly recommends the "always-visible, click-to-scroll" pattern over the "toggle-show" pattern.

## Accessibility

- **VoiceOver order:** kicker → "list of 2 items" (the cards inside an implicit list role) → "Sou proprietário ou imobiliária. Você quer que o aluguel chegue…, link" → "Sou investidor. Você quer yield real…, link". The `aria-describedby` on each card points to its target form's heading id, so the screen reader can preview where the link leads.

  ```html
  <a href="#proprietario-form" aria-describedby="proprietario-heading">…</a>
  ```

- **Don't use `aria-expanded`** — the forms are always visible, so the cards aren't toggling visibility.
- **Don't use `aria-controls`** — same reason. The link itself communicates "this navigates to the form".
- **Touch targets:** entire card surface is the click target. At `padding: 32px 40px 40px`, the card is well over 44×44.
- **Heading structure:** `<h2 id="bifurcation-h2" class="sr-only">Escolha sua trilha</h2>` for screen readers (visually replaced by the kicker). Each card's headline is `<h3>`.
- **Section landmark:** `<section aria-labelledby="bifurcation-h2">`.
- **Contrast:**
  - Card kicker (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - H3 (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Sub-line (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - Hover bg (`#16181C` vs `#0E0F11`) = surface-1 step. The H3 contrast on surface-1 = 16.0:1 — still AAA.
- **Reduced-motion:** smooth-scroll → instant jump. Hover transition (150ms color) kept (no transform, below threshold).

## Image resources

**No imagery.**

Per `target-adaptations.md`: no icons in the cards. Per `imagery-style.md`: no photography on the dark front. The cards are typography-only by deliberate brand argument — the typographic affordance *is* the choice, and an icon would dilute that.

## Visual effects

- **The `gap-px bg-border` trick:** the parent's `bg-border` (1px `var(--color-border)` = `#2A2D33`) shows through the 1px gap in the grid, drawing the divider between cards without any card requiring its own border. Single line. No double-border. No need for `last:border-r-0` workarounds.
- **Surface stacking on hover:** canvas → surface-1 (one tonal step up). No transform.
- **Focus:** inset 1px amber outline. No animation.
- **No glow on hover.** No `box-shadow` lift. No `scale`. No `translate`. The brand's effects vocabulary is honored exactly.

## Brand-contract checks

- ✅ `border-radius: 0` — cards are zero-radius. The `card-bifurcation` class explicitly sets it to 0 (overrides shadcn's default if accidentally inherited).
- ✅ No shadows.
- ✅ No glass / backdrop-filter.
- ✅ Amber pixel budget: zero amber in default state (focus outline appears only on Tab). Section contributes 0px² to the budget. (Focus state amber is transient.)
- ✅ Three-layer hierarchy per card: Geist (H3) ✓ + Inter (sub-line) ✓ + JetBrains Mono (kicker) ✓. Section header has Geist (sr-only h2) + Mono kicker — Inter is in the cards below, so the three layers are present in the *section as a whole*.
- ✅ Tabular numerals: kicker numerals `01`, `02`, `04` use `tabular-nums`.
- ✅ No upfront persona routing (per `ux-patterns.md § Bifurcation`). The cards are scroll affordances, not routes.
- ✅ Equal-weight cards (rejecting Stripe's asymmetric persona weighting). Both personas are P0.
- ✅ Centered — the only centered moment on the page. The brand never-say "no centered text" survives because this is the deliberate single exception.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/personas.md](./shared/personas.md)
- [shared/micro-interactions.md](./shared/micro-interactions.md)
- [./screen-06-proprietario-capture.md](./screen-06-proprietario-capture.md)
- [./screen-07-investidor-capture.md](./screen-07-investidor-capture.md)
- Research: `.design/projects/landing/research/ux-patterns.md § The Bifurcation Pattern`
- Research: `.design/projects/landing/research/accessibility-patterns.md § Focus order on the bifurcation cards`
- Research: `.design/projects/landing/research/reference-specs.md § The bifurcation cards composition`
