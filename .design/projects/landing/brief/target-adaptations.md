# Target Adaptations

> Phase: brief · Project: landing · Brand: tga · Target: shadcn (greenfield Next.js + Tailwind v4)

## Token strategy

No token overrides for this project. The landing page consumes brand tokens as-is from `.design/branding/tga/patterns/tga.yml`. The Tailwind v4 `@theme` block is generated directly from the canonical YAML — single source of truth, no project-local divergence.

The landing uses a **single semantic-token resolution** across the entire page — Investidor (dark / Precision Brutalism). The brand's `[data-front="imobiliarias"]` light theming is left in `globals.css` (CSS-only, harmless when unused) but no section on the landing opts into it.

**Why a single front:** Marketing-surface visual coherence beats per-audience surface theming. Audience differentiation lives in copy and audience tag, not in surface color. Dual-front theming is reserved for the dashboards (separate project) where audiences operate the product in different mental modes.

The Terminal front is **not used** on the landing page either — operator-layer aesthetic is reserved for the Terminal app itself.

## Component adaptations

Compositions built **on top of** brand patterns (no override of brand spec — these are project-specific compositions):

### `BifurcationCards`
- **Built on:** `pattern.card` (investidor variant)
- **Composition:** Two `card` instances side-by-side at `lg+`, stacked at `<lg`. Each card carries a Mono label (Inter Medium 12px ALL CAPS), a Geist 32px path label, and an Inter 14px sub-line. On hover the card shifts surface-1 → surface-2 (per brand `effects.interaction-vocabulary.hover`). Click expands the corresponding `WaitlistForm` below the card.
- **Constraint:** No iconography inside the cards (amber-icons rule prohibits coloring icons; bare icons would compete with the manifesto).
- **Brand link:** `.design/branding/tga/patterns/tga.yml#patterns.card.investidor`

### `WaitlistForm`
- **Built on:** `pattern.input.investidor` + `pattern.button-primary.investidor`
- **Composition:** Three short sentences (Inter 14–16px) → email input → submit button. Form posts via Server Action `joinWaitlist(formData)` with `{ email, audience: "proprietario" | "investidor", locale }`. Honeypot field for spam.
- **Single visual variant** (both audiences): transparent input on dark canvas, `#2A2D33` border, transparent submit button with `#E8A020` border, height 44px (per fix-006 — landing-only AAA bump), Mono `[ … ]` label. Audience differs in:
  - Button label — `[ avise-me ]` (proprietário) vs `[ entrar na lista ]` (investidor)
  - Hidden audience tag input
  - Error/success copy mapped per audience
- **Brand link:** `tga.yml#patterns.input.investidor` + `tga.yml#patterns.button-primary.investidor`

### `VisionArc`
- **Built on:** typography three-layer + 1px amber rule from `pattern.layout`
- **Composition:** Four-step horizon. Each step: Mono numeral (`01`, `02`, `03`, `04`) at 11px ALL CAPS in `#8A8F99` → 1px vertical amber rule (cap height) → Geist Bold 24–28px label (e.g., "garantia locatícia", "score onchain", "TGA token", "tokenização imobiliária") → Inter Regular 14px sub-line. Steps connected by a 1px horizontal amber rule on `lg+`, vertical rule on `<lg`.
- **Constraint:** No dates, no progress bar, no "we're here" indicator. The arc is horizon, not roadmap.
- **Brand link:** `tga.yml#tokens.typography.three-layer-hierarchy`

### `LiveDot` (header element)
- **Built on:** `pattern.nav.investidor.live-dot`
- **Composition:** 6px amber circle, `tga-live-pulse` keyframe (opacity 1 → 0.4 → 1, 2s linear infinite). On the landing this signals "we're building, the protocol is alive". No accompanying counter (no real numbers to show — see brand contract).
- **Brand link:** `tga.yml#patterns.nav.investidor.live-dot` + `tga.yml#tokens.motion.animations.live-pulse`

### `LanguageToggle`
- **Built on:** `pattern.button-secondary.investidor` minimal variant
- **Composition:** `[ pt-BR / en ]` JetBrains Mono 11px in `#8A8F99`, active locale in `#F0F0EE`. Click swaps via `next-intl` route. No surrounding chrome.
- **Brand link:** `tga.yml#patterns.button-secondary.investidor`

## Platform considerations

- **Mobile-first.** Bifurcation cards stack vertically on `<lg`. Vision arc switches from horizontal to vertical layout on `<md`. Hero `text-6xl` clamp(3rem → 4rem) handles fluid scaling.
- **Reduced-motion.** Live amber pulse honors `prefers-reduced-motion: reduce` — opacity stays at 1 (per brand `motion.philosophy: functional only`).
- **Touch targets.** Buttons stay at brand-spec heights (40px Investidor, 48px Imobiliárias). Form inputs the same. CTAs pad with 16–24px hit area where heights are tighter.
- **No hover-only affordances.** All hover states have a focus equivalent (1px amber border via `effects.focus`).
- **Form accessibility.** Email inputs have visible labels (Inter Medium 13px), `required` + `type="email"` validation, error states use `--color-error` per active front.

## Implementation target mapping

| Composition | shadcn primitive | Notes |
|-------------|-----------------|-------|
| `BifurcationCards` | `card` (shadcn) → override per `tga.yml#patterns.card.investidor` | 0px radius, no shadow, surface-1 background, 1px `#2A2D33` border |
| `WaitlistForm` | `input` + `button` → overrides per active front | Per-front variants via `data-front`. `Input` uses Mono 14px for the email value, Inter 13px for the label |
| `VisionArc` | none — bare composition | 1px amber rules via Tailwind utility classes |
| `LiveDot` | none — bare 6px element | CSS keyframe defined in `globals.css` |
| `LanguageToggle` | `button` (variant=ghost, size=sm) → override to mono 11px | Two states: active / inactive locale |
| Section CTAs (nav "fique por dentro", capture submits) | `button` (variant=outline / default) → override per `button-primary.{front}` | Investidor: transparent + amber border + hover-fill. Imobiliárias: amber fill + `#1A1A1A` text |
| Nav | none — bare `<header>` | Per `pattern.nav.investidor` |
| Team cards | `card` (investidor variant) | Founder name (Geist 20px), role one-liner (Inter 14px), track record line (Mono 12px). Optional portrait |

shadcn primitive overrides are documented in `install-manifest.md` and applied at build time via component file edits (not via Tailwind config alone — shadcn variants need direct edits to honor 0px-everywhere).

## Brand contract — non-negotiables for this project

- `border-radius: 0` on every UI element. No exceptions.
- No shadows anywhere. `box-shadow: none` is the default.
- No glass / backdrop-blur.
- Amber scarcity rule on dark surfaces (<5% of pixels).
- No blockchain jargon in the proprietário-capture section. No "onchain", "wallet", "smart contract", "token", "NAV", "DeFi". Lead with outcomes ("você recebe automaticamente", "sem formulário, sem fila"). The technical layer comes later, in the dashboards.
- `#1A1A1A` text on amber `#C47E10` in light section. Never white text on amber.
- Three-layer typography on every section: Geist (declaration) · Inter (explanation) · JetBrains Mono (evidence).
- No quantified product claims without real data — no fake NAV, no placeholder R$ values, no invented contract counts.
- No dates on the vision arc. Horizon, not roadmap.
- Founders' faces visible (or designed alternative). Anti-anonymous.

## References

- Brand patterns YAML: `.design/branding/tga/patterns/tga.yml`
- Brand STYLE.md: `.design/branding/tga/patterns/STYLE.md`
- Brand semantic-map (per-front token resolution): `tga.yml#tokens.color.semantic-map`
- Project framing memory: vision capture, not product entry — see project memory
