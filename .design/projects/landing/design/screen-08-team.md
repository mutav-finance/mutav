# Screen 08 — Team
> Phase: design · Project: landing · Section: equipe · 2026-05-02

## Purpose

Anti-anonymous. Two founders — **Draau** and **jubs** — with real names, real roles, real one-liner track records. The named-founder gesture is the single most differentiating credibility cue against the entire incumbent surface (which is largely anonymous). No long bios. No photo essays. No corporate "leadership team" header. Two people, named, willing to be named.

## User flow position

After both captures. The reader has either committed (left an email) or is here verifying who they'd be committing to. Either way, the team section answers the question "who is shipping this?" with two specific people, not a rendered "Team" page.

## Layout

```
lg+ (≥1024)                                                          ~70vh
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  equipe                                                                │
│  ↓ 64px                                                                │
│                                                                        │
│  ┌──────────────────────────────────┬─────────────────────────────┐   │
│  │ col-span-7 (Draau)               │ col-span-5 (jubs)           │   │
│  │                                  │                             │   │
│  │  ┌────────────┐                  │  ┌────────────┐             │   │
│  │  │            │                  │  │            │             │   │
│  │  │  portrait  │                  │  │  portrait  │             │   │
│  │  │  160×160   │                  │  │  160×160   │             │   │
│  │  │  grayscale │                  │  │  grayscale │             │   │
│  │  │            │                  │  │            │             │   │
│  │  └────────────┘                  │  └────────────┘             │   │
│  │  ↓ 32px                          │  ↓ 32px                     │   │
│  │                                  │                             │   │
│  │  Draau                           │  jubs                       │   │
│  │  (Geist Bold 24px)               │  (Geist Bold 24px)          │   │
│  │                                  │                             │   │
│  │  Engenharia de protocolo.        │  Design e produto.          │   │
│  │  Solana / Anchor.                │  Sistemas e marca.          │   │
│  │  (Inter 14px text-2)             │  (Inter 14px text-2)        │   │
│  │                                  │                             │   │
│  │  Colosseum Frontier 2026         │  ex-{role}                  │   │
│  │  (JetBrains Mono 12px text-3)    │  (JetBrains Mono 12px)      │   │
│  └──────────────────────────────────┴─────────────────────────────┘   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

The 7/5 column split is intentional — asymmetric per `ux-patterns.md § Editorial Asymmetry`.
Both founders get the same portrait size (160×160). The asymmetry is column width, not portrait weight.

<lg                                                                  ~auto
┌──────────────────────────────────┐
│ equipe                           │
│                                  │
│ ┌────────────┐                   │
│ │ portrait   │                   │
│ │ 160×160    │                   │
│ └────────────┘                   │
│ Draau                            │
│ Engenharia de protocolo.         │
│ Solana / Anchor.                 │
│ Colosseum Frontier 2026          │
│                                  │
│ ↓ 64px gap                       │
│                                  │
│ ┌────────────┐                   │
│ │ portrait   │                   │
│ │ 160×160    │                   │
│ └────────────┘                   │
│ jubs                             │
│ Design e produto.                │
│ Sistemas e marca.                │
│ ex-{role}                        │
└──────────────────────────────────┘
```

- **Container:** `<section id="equipe" aria-labelledby="team-h2">`.
- **Background:** `var(--color-canvas)` = `#0E0F11`.
- **Padding:** `lg+`: 96px / 96px. `<lg`: 64px / 64px.
- **Grid (`lg+`):** 12-column. Draau cols 1–7. jubs cols 8–12. Asymmetric.
- **Grid (`md`):** 12-column. 50/50 split (cols 1–6 / 7–12). Symmetric on tablet (the 7/5 asymmetry only kicks in at lg+ where the layout has room to breathe).
- **Grid (`<md`):** single column, vertical stack. 64px gap between founders.

## Composition

### Section header (off-spine — labeled, not numbered)
- Mono kicker: `equipe` (en: `team`). No numeral, no bracket. Lowercase. Per `information-architecture.md § Narrative spine`.
- H2: `sr-only` — `<h2 id="team-h2" class="sr-only">Equipe</h2>`.
- Margin-bottom 64px before the founders.

### Each founder

```
<article>
  <picture>
    <img src="/team/draau.webp"
         alt="Foto retrato em preto e branco de Draau"
         width="160" height="160"
         class="block w-40 h-40 object-cover" />
  </picture>
  <h3 class="font-display font-bold text-2xl mt-8 text-text">Draau</h3>
  <p class="font-sans text-base text-text-2 mt-2">
    Engenharia de protocolo.<br>Solana / Anchor.
  </p>
  <p class="font-mono text-xs text-text-3 mt-3">
    Colosseum Frontier 2026
  </p>
</article>
```

#### Founder 1 — Draau
- Name: `Draau` (Geist Bold 24px lg+ / 20px <md, `var(--color-text)`)
- Role one-liner (Inter 14px lg+ / 14px <md, `var(--color-text-2)`):
  - pt-BR: *Engenharia de protocolo. Solana / Anchor.*
  - en: *Protocol engineering. Solana / Anchor.*
- Track record (JetBrains Mono 12px, `var(--color-text-3)` = `#555B66`):
  - pt-BR: *Colosseum Frontier 2026* (or actual track record line — TBD by founders)
  - en: *Colosseum Frontier 2026*

#### Founder 2 — jubs
- Name: `jubs` (Geist Bold 24px lg+ / 20px <md)
- Role one-liner:
  - pt-BR: *Design e produto. Sistemas e marca.*
  - en: *Design and product. Systems and brand.*
- Track record (Mono 12px):
  - pt-BR: *ex-{role}* — placeholder until founders confirm specific track-record line. Out-of-scope for this design pass.
  - **Watch-list:** never invent a track-record line. If founders don't lock copy here, ship the section without the Mono line — name + role only.

### Founder typography hierarchy

The three-layer brand hierarchy is honored at the founder-card level:

- **Geist** = name (declaration)
- **Inter** = role (explanation)
- **JetBrains Mono** = track record (evidence — the venue, the year, the number)

If the track-record line is omitted (per copy-lock concern above), the section *as a whole* still has all three layers via the kicker (`equipe` Mono) + name (Geist) + role (Inter). Acceptable.

### Portraits

Per `responsive.md § Image rendering`:

- **Size:** 160×160px square (`aspect-square`, `object-cover`).
- **Treatment:** grayscale + 1.1 contrast — `filter: grayscale(1) contrast(1.1)`.
- **Border-radius:** `0px`. **No rounded crop.** This is a brand-contract violation if it appears.
- **Border:** none on the image itself. The 1px line below the image is provided by the page rhythm, not the image.
- **Loading:** Next.js `<Image>` with `placeholder="blur"` and `blurDataURL` (LQIP). Skeleton fallback color: `var(--color-surface)` = `#16181C`.

**Designed alternative (if no portraits exist):**

- 160×160 square, `var(--color-canvas)` background, `1px solid var(--color-border)` outline.
- Geist Bold 64px lowercase initial(s) centered. Color: `var(--color-accent)` = `#E8A020`.
  - Draau → `D` (or `dr` per the wordmark precedent).
  - jubs → `j` (or `ju`).
- This carries amber inside the section — adds ~2 × ~3,000px² = 6,000px² to the section's amber budget. Still well under the 5% page-level limit, but flag at design review.
- Per `recommendations.md § Anticipate ("hackathon project" risk on team section)`: ship one or the other deliberately, never in-between. If the photos are not editorial-grade, use the designed alternative. Don't compromise.

## Components used

- `MonoKicker` (shared) — for `equipe` label.
- `TeamSection` (local) — composition with the 7/5 grid and two founder cards.
- Native `<article>`, `<img>` (or Next.js `<Image>`), `<h3>`, `<p>`.

## States

### Default (with photography)
Both founder cards rendered. Portraits grayscale.

### Default (designed alternative)
Both founder cards rendered with initials in 0px amber-on-canvas square.

### Empty
N/A — static content. (If founder data is missing at build time, the section collapses gracefully — render only the founders that have data; if both missing, render section header only with placeholder copy *"Equipe — em breve."*)

### Loading
Next.js `<Image>` blur placeholder during photo load. Static text always renders SSR.

### Error
N/A — if a portrait fails to load, the `<img>` `alt` text is announced by screen readers; visually, the alt area is the same dimension, with `alt` text in `var(--color-text-2)` (graceful degradation via browser's broken-image fallback). Designed alternative is preferred.

## Interactions

| Trigger | Result |
|---------|--------|
| Hover (founder card) | None. Founders are not interactive. No link to a profile page (no profile pages exist). |
| Click | None. Same. |
| Tab | Skip — no focusable elements. (If LinkedIn/GitHub links are added in a later iteration, those become focusable; for this design pass, the team section has zero interactive elements.) |
| Reduced-motion | No effect. No animations. |

## Accessibility

- **VoiceOver order:** "team" (kicker, lowercase) → "heading 3, Draau" → "Engenharia de protocolo. Solana slash Anchor." → "Colosseum Frontier 2026" → "heading 3, jubs" → "Design e produto. Sistemas e marca." → "ex-role".
- **Heading structure:** `<h2 id="team-h2" class="sr-only">Equipe</h2>` is the section heading. Each founder is `<h3>`.
- **Section landmark:** `<section id="equipe" aria-labelledby="team-h2">`.
- **Portrait `alt`:** descriptive but brief. `alt="Foto retrato em preto e branco de Draau"` (en: `Black-and-white portrait of Draau`). Designed alternative uses `alt=""` — purely decorative since the name is rendered as text below.
- **Touch targets:** N/A — no interactive elements.
- **Contrast:**
  - Name (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Role (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - Track record Mono (`#555B66` on `#0E0F11`) = 3.16:1 — **fails AA at 12px**. Bump track-record line to `var(--color-text-2)` = `#8A8F99` for 6.46:1 AA. Acceptable trade-off — the line is still visually quieter than the role due to font + size, even at the same color.
  - Initials (designed alt) `#E8A020` on `#0E0F11` = 6.92:1 AA.

## Image resources

| Slot | Type | Description / search terms | Treatment |
|------|------|----------------------------|-----------|
| Draau portrait | Photo (real, founder) | Editorial portrait of Draau, Brazilian, 25–40, neutral background, sharp shadow, looking at camera or 3/4 angle. **Not a phone snapshot.** Commission a 30-min editorial shoot if no decent photo exists. | Grayscale + 1.1 contrast. 160×160 square crop. 0px radius. |
| jubs portrait | Photo (real, founder) | Editorial portrait of jubs, Brazilian, 25–40, similar to Draau treatment for visual consistency. | Same: grayscale + 1.1 contrast, 160×160 square, 0px radius. |
| Draau alt (if no photo) | CSS-only — initials block | 160×160 square. Geist Bold 64px lowercase `d`. `var(--color-accent)` text on `var(--color-canvas)` bg, 1px `var(--color-border)` outline. | Pure CSS. No raster. |
| jubs alt (if no photo) | CSS-only — initials block | 160×160 square. Geist Bold 64px lowercase `j`. Same treatment. | Pure CSS. |

**Decision required before final design:** photo or designed alternative. Per `recommendations.md`: commit to one direction, do not ship in-between. Treating this as an open question — see `STATE.md § Open questions`.

## Visual effects

- **Surface stacking:** the team section stays on `var(--color-canvas)`. No card chrome around the founders — the section *is* the surface. Each founder is just typography + portrait, sitting on the canvas with column-based separation.
- **Grayscale photos:** treatment per `imagery-style.md` adapted for the dark front (the brand's photography vocabulary is for Imobiliárias front; on Investidor, photos are normally absent — for the team section, photos are an exception, but the grayscale + contrast filter aligns them with the architectural-photography treatment used in marketing surfaces).
- **No motion.** No fade-ins, no portrait reveals.
- **No hover effect on portraits.** They are not interactive.

## Brand-contract checks

- ✅ `border-radius: 0` on portraits and any container.
- ✅ No shadows on portraits or text.
- ✅ Amber pixel budget: zero amber if shipping with photographs. ~6,000px² if shipping with designed alternative initials. At ~1280×~640 = 819,200px², designed alternative occupies 0.73% — under budget.
- ✅ Three-layer hierarchy per founder: Geist (name) ✓ + Inter (role) ✓ + JetBrains Mono (track record) ✓.
- ✅ Tabular numerals: `2026` in track-record lines uses `tabular-nums` via the `Mono` wrapper.
- ✅ Anti-anonymous: real names, identifiable. Per the brief and `recommendations.md § Hold the line`.
- ✅ Asymmetric column weighting (7/5 lg+) per `ux-patterns.md § Editorial Asymmetry`. Both founders share equal portrait size — the asymmetry is column space, not status.
- ✅ No corporate "Our Team" / "Leadership" header. The kicker is lowercase `equipe`. Anti-corporate posture maintained.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/responsive.md](./shared/responsive.md)
- Research: `.design/projects/landing/research/recommendations.md § Anticipate (team section credibility risk)`
- Research: `.design/projects/landing/research/reference-specs.md § The team section`
- Brand: `.design/branding/tga/identity/imagery-style.md`
