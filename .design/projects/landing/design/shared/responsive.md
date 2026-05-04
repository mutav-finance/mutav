# Responsive Behavior
> Phase: design · Project: landing · 2026-05-02

Mobile-first. Tailwind v4 default breakpoints. The page is content-led — every section adapts by reflowing the **same** semantic structure across breakpoints, never by hiding or rearranging content.

---

## Breakpoints

| Token | Min width | Use |
|-------|-----------|-----|
| `sm` | 640px | Larger phones, small tablets |
| `md` | 768px | Tablets, vertical orientation |
| `lg` | 1024px | Tablets horizontal, small laptops, desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Wide desktop — `max-width` ceiling |

Per `tga.yml#layout.breakpoints`. The 1440px max-width is the brand's hard ceiling — no full-bleed past it on any section except the hero grid texture.

## Outer margins

| Breakpoint | Margin |
|------------|--------|
| `<sm` | 16px |
| `sm` | 16px |
| `md` | 24px |
| `lg` | 32px |
| `xl` / `2xl` | 32px |

These are page edges. Section internal padding is independent (24–32px per section).

## Section adaptations

### 01 — nav
| Breakpoint | Behavior |
|------------|----------|
| All | 56px height. Logo + live dot left, locale toggle right. No collapse — already minimal. |

### 02 — hero
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Stacked. Mono kicker → H1 → manifesto → no CTA bar. H1 `40–48px` clamp. Vertical padding `120px` top, `80px` bottom. |
| `md` | H1 `56px`. Vertical padding grows to `160px / 96px`. |
| `lg+` | H1 `64–72px`. Left-anchored grid (text in 7 cols, right 5 cols stay as canvas + dot grid). Vertical padding `200px / 128px`. |

### 03 — the-gap
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Section header at top. Three diagnostic statements stacked vertically below, each its own row. Mono numeral above each Geist line. |
| `md` | Section header left (4 cols), three diagnostics right (8 cols stacked vertically). |
| `lg+` | Section header left (4 cols), three diagnostics right (8 cols, stacked but with `padding-left: 24px` and a 1px left border per diagnostic). |

The three statements never go horizontal — they always stack vertically. The asymmetric column split is the only thing that changes.

### 04 — vision-arc
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Vertical layout. Four phases stacked. 1px amber rule **vertical** on the left (col-span-1 of a 12-col grid), phases occupy cols 2–12. Phase content: mono numeral → Geist label → Inter sub-line. |
| `md` | Same as `<md` — keeps vertical for tablet readability. |
| `lg+` | **Horizontal layout.** Four phases sharing a single row (12-col grid → each phase span-3). 1px amber rule **horizontal**, anchored to the cap-height of the mono numerals across all four. Phase content stacks vertically inside each column. |

The horizontal-vs-vertical switch at `lg` is the page's single layout discipline. On `lg+` the arc reads as a sentence; below `lg` it reads as a list.

### 05 — bifurcation
| Breakpoint | Behavior |
|------------|----------|
| `<lg` | Cards stack vertically. 1px amber rule between them (the gap-px trick rendered as a horizontal line). |
| `lg+` | Cards side-by-side, 50/50 split. 1px amber rule between them (vertical, via `gap-px` on the parent). Both cards keep `padding: 32px 40px 40px`. |

The bifurcation is the only centered moment on the page. Even centered, the cards are equal-weight (the brief rejects asymmetric persona weighting).

### 06 — proprietario-capture
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Single column. Three sentences → email label + input → submit button → LGPD line + dignity line. Input full-width, button full-width below. |
| `md` | Single column, narrower (max-width `560px`). Input + button on the same horizontal row (input grows, button auto). |
| `lg+` | Two-column grid: left 5 cols (heading + the three sentences), right 6 cols (form, label-input-button stacked). 1 col gap between. Light surface fills the entire section width — no card chrome inside. The section *is* the card. |

The handoff into this section is the 1px amber rule (the "fold"). The whole section background is `var(--color-canvas)` resolved on `[data-front="imobiliarias"]` = `#F7F6F3`.

### 07 — investidor-capture
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Single column. Mirrors proprietario layout. Dark surface. |
| `md` | Single column, narrower (`560px`). Same row pattern (input + button). |
| `lg+` | Two-column grid: same as proprietario, right-skewed for visual continuity. Heading + three sentences right (5 cols), form left (6 cols). Reverses the proprietario asymmetry. |

The right-skew on the investidor capture intentionally mirrors and inverts the proprietario left-skew. Together the two captures create a chiral pair across the amber-rule fold.

### 08 — team
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Single column. Each founder: portrait 160×160px → Geist name → Inter role one-liner → Mono track-record. Stack vertically with 64px gap between founders. |
| `md` | Two-column 50/50. Founders side-by-side. Portraits 160×160px. |
| `lg+` | Asymmetric 7/5 split (Draau 7 cols, jubs 5 cols). The asymmetry is intentional per `ux-patterns.md § Editorial Asymmetry`. Portraits stay 160×160px. |

Asymmetric on purpose — the brief calls for it. Both founders get the same portrait size; only the available column width differs.

### 09 — footer
| Breakpoint | Behavior |
|------------|----------|
| `<md` | Single column. Stacked groups: `código` / `colosseum` / `comunidade`. Locale toggle echo + legal line at bottom. |
| `md` | 2×2 grid for the three link groups + the locale toggle. |
| `lg+` | 4-column row: `código` / `colosseum` / `comunidade` / locale toggle echo. Legal line full-width below, mono 9–10px. |

Footer is the only section where Bloomberg-Terminal density is correct — it reads as instrument-panel chrome.

---

## Touch targets

Per `accessibility-patterns.md § Touch targets`:

| Element | Visible size | Effective tap zone |
|---------|--------------|--------------------|
| Investidor button (40px tall) | `h-10 px-6` | `padding: 12px 24px` → 64×~52px effective |
| Imobiliárias button (48px tall) | `h-12 px-6` | `padding: 14px 24px` → 76×60px effective |
| Locale toggle link (`pt-BR` / `en`) | 11px Mono | Wrap in button with `padding: 8px 12px` → 32×~50px effective |
| Bifurcation card | full card surface | `padding: 32px 40px 40px` — entire surface is the click target, far exceeds 44×44 |
| Email input | `h-10` Investidor / `h-12` Imobiliárias | At width ≥ 280px, target far exceeds 44×44 |

All passes WCAG 2.5.8 (AA, 24×24 minimum). Buttons clear AAA (44×44) once horizontal padding is included.

## Image rendering

Per the brand:

- **Hero / sections 01–05, 07–09:** zero photography. Data viz only — but no real numbers exist for this landing, so no chart renders. Section backgrounds are flat `var(--color-canvas)` with the optional 24px architectural grid texture (3% opacity).
- **Section 06 — proprietario-capture:** light surface. **No photography either** for this landing — the section uses negative space and typographic hierarchy, not Imobiliárias-style apartment photography. (Apartment photos are dashboard imagery, not landing imagery.)
- **Section 08 — team:** founder portraits at 160×160px square. `aspect-square`. `object-fit: cover`. Grayscale treatment per brand `imagery-style.md § Warm Photography` adapted for the dark front: `filter: grayscale(1) contrast(1.1)`. **0px radius** — no rounded crops.

If founder photos don't exist by the build, fall back to designed alternative: initials in a 160×160 square, `var(--color-accent)` `Geist Bold 64px` lowercase, `var(--color-canvas)` background, 1px `var(--color-border)` outline.

## Related
- [navigation.md](./navigation.md)
- [information-architecture.md](./information-architecture.md)
- [../screen-02-hero.md](../screen-02-hero.md)
- [../screen-08-team.md](../screen-08-team.md)
