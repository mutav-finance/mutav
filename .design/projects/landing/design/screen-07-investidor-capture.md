# Screen 07 — Investidor Capture
> Phase: design · Project: landing · Section: → 02 — INVESTIDOR · Front: Investidor (dark) · 2026-05-02

## Purpose

The dark surface where Ana commits. Three sentences, technical register — *mecânica + transparência onchain + arquitetura*. Verifiability as invitation, not as defense. The form is followed by a single mono link to GitHub: `[ verifique a arquitetura → github.com/mutav-finance ]`. The trust mechanic is the link to the code, not a paragraph.

## User flow position

Second capture section, immediately after the proprietário capture. The 1px amber rule at the top of this section is the **return** from light to dark. The reader has crossed the fold twice — that round trip is the page's most kinetic visual moment, and it happens entirely through 1px lines and surface color shifts (no transforms, no fades).

## Layout

```
lg+ (≥1024)                                                          ~70vh
┌────────────────────────────────────────────────────────────────────────┐
│ ─────────────── 1px amber rule (the fold, return to dark) ──────       │
│                                                                        │
│  [data-front="investidor"] (back to default)                          │
│  background: var(--color-canvas) = #0E0F11                            │
│                                                                        │
│  ┌──────────────────────────┬──────────────────────────────────────┐  │
│  │ col-span-6               │ col-span-5 (cols 8–12, 1-col gap)    │  │
│  │                          │                                      │  │
│  │ ┌──────────────────────┐ │   → 02 — INVESTIDOR                  │  │
│  │ │ Seu e-mail           │ │                                      │  │
│  │ │ ▏ana@gmail.com        │ │   Capital lastreado em garantias    │  │
│  │ └──────────────────────┘ │   reais.                              │  │
│  │                          │                                      │  │
│  │ ┌──────────────────┐     │   O capital lastreia garantias       │  │
│  │ │ [ entrar na      │     │   reais — contratos de aluguel       │  │
│  │ │   lista ]        │     │   ativos no Brasil.                  │  │
│  │ └──────────────────┘     │                                      │  │
│  │                          │   O fluxo é onchain. Cada repasse,   │  │
│  │ Vamos te avisar…          │   cada execução, verificável.        │  │
│  │ Ao entrar na lista…      │                                      │  │
│  │                          │   A primeira RWA brasileira          │  │
│  │ [ verifique a            │   específica de garantia locatícia,  │  │
│  │   arquitetura → ]        │   na Solana.                          │  │
│  └──────────────────────────┴──────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

The grid is mirrored relative to the proprietário section — form left, copy right. The chiral mirror is intentional (per `responsive.md § 07`).

<lg                                                                  ~auto
┌──────────────────────────────────┐
│ ──── 1px amber rule (top) ────   │
│                                  │
│ → 02 — INVESTIDOR                │
│                                  │
│ Capital lastreado em             │
│ garantias reais.                 │
│                                  │
│ O capital lastreia garantias…    │
│ O fluxo é onchain…                │
│ A primeira RWA brasileira…        │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ Seu e-mail                   │ │
│ │ ▏ana@gmail.com                │ │
│ └──────────────────────────────┘ │
│                                  │
│ ┌────────────────────────┐       │
│ │ [ entrar na lista ]    │       │
│ └────────────────────────┘       │
│                                  │
│ Vamos te avisar quando…          │
│ Ao entrar na lista, você…        │
│                                  │
│ [ verifique a arquitetura →      │
│   github.com/mutav-finance ]      │
└──────────────────────────────────┘
```

- **Container:** `<section id="investidor-form" data-front="investidor" aria-labelledby="inv-h2">`. (`data-front="investidor"` is redundant with body default but explicit for clarity and to scope-protect against future inheritance changes.)
- **Background:** `var(--color-canvas)` = `#0E0F11`.
- **Padding:** `lg+`: 96px / 96px. `<lg`: 64px / 64px.
- **Top fold:** 1px solid `var(--color-accent)` = `#E8A020` (resolved on investidor) — the return from light. (The proprietário section's bottom rule and this section's top rule are *the same single line* visually; in DOM they're both rendered to keep the section boundaries clean for SEO and scrolling.)
- **Grid (`lg+`):** 12-column. Form in cols 1–6 (left). Heading + three sentences in cols 8–12 (right-skewed). 1-col gap. **Mirror of proprietário section** — proprietário was left-copy / right-form; this is left-form / right-copy. The chiral mirror reinforces the dark→light→dark round trip.
- **Grid (`<lg`):** single column, vertical stack. Heading + sentences first, then form (mobile-first reading order: read why before commit).

## Composition

### Mono kicker (Investidor variant — no brackets in kicker, only in CTA)
- Element: `<span class="font-mono text-xs uppercase tracking-[0.10em] text-text-2">→ 02 — INVESTIDOR</span>`
- Color: `var(--color-text-2)` = `#8A8F99`. Contrast 6.46:1 AA.

### Heading + three sentences

```
<h2 id="inv-h2" class="font-display font-bold text-3xl lg:text-4xl text-text leading-[1.15]">
  Capital lastreado em garantias reais.
</h2>
<ol class="mt-10 space-y-8 max-w-[40ch]">
  <li class="font-sans text-base lg:text-lg text-text-2 leading-[1.5]">
    O capital lastreia garantias reais — contratos de aluguel ativos no Brasil.
  </li>
  <li class="font-sans text-base lg:text-lg text-text-2 leading-[1.5]">
    O fluxo é onchain. Cada repasse, cada execução, verificável.
  </li>
  <li class="font-sans text-base lg:text-lg text-text-2 leading-[1.5]">
    A primeira RWA brasileira específica de garantia locatícia, na Solana.
  </li>
</ol>
```

- H2 (pt-BR): `Capital lastreado em garantias reais.`
- H2 (en): `Capital backed by real guarantees.`
- Three sentences (per `content-strategy.md § Investidor Capture`):
  1. *O capital lastreia garantias reais — contratos de aluguel ativos no Brasil.* / *Capital backs real guarantees — active rental contracts in Brazil.*
  2. *O fluxo é onchain. Cada repasse, cada execução, verificável.* / *The flow is onchain. Every payout, every execution, verifiable.*
  3. *A primeira RWA brasileira específica de garantia locatícia, na Solana.* / *The first Brazilian RWA specific to rental insurance, on Solana.*
- Sentences as `<ol>` — same discipline as proprietário (mecânica → transparência onchain → arquitetura).

### The form (Investidor variant)

```
<form action={joinWaitlist} id="investidor-form-element" data-front="investidor">
  <input type="hidden" name="audience" value="investidor" />
  <input type="hidden" name="locale" value="pt-BR" />
  <input type="text" name="company_url" tabIndex={-1} autoComplete="off"
         aria-hidden="true" className="sr-only" />

  <label htmlFor="email-inv" className="font-sans font-medium text-[13px] text-text-2">
    Seu e-mail
  </label>
  <input id="email-inv" type="email" name="email" required
         placeholder="ana@gmail.com"
         className="mt-2 w-full h-10 border border-border bg-transparent px-4
                    font-mono text-sm text-text placeholder:text-text-3
                    focus:border-accent focus:outline-none rounded-none" />

  <button type="submit"
          className="mt-6 h-10 px-6 bg-transparent border border-accent
                     text-accent font-mono text-[13px] font-medium rounded-none
                     hover:bg-accent hover:text-canvas transition-colors duration-150">
    [ entrar na lista ]
  </button>

  <p role="status" aria-live="polite" className="mt-4 font-mono text-[11px] text-text-2">
    Vamos te avisar quando estiver pronto. Não vamos te encher.
  </p>
  <p className="mt-2 font-mono text-[11px] text-text-2">
    Ao entrar na lista, você consente com o uso do seu e-mail para receber novidades sobre o protocolo. Pode sair quando quiser — basta responder qualquer e-mail com "sair".
  </p>

  <a href="https://github.com/mutav-finance"
     target="_blank" rel="noopener noreferrer"
     className="mt-8 inline-block font-mono text-xs text-text-2
                hover:text-accent transition-colors duration-150">
    [ verifique a arquitetura → github.com/mutav-finance ]
  </a>
</form>
```

#### Input (Investidor variant)
- Background: `transparent` (canvas shows through).
- Border: 1px solid `var(--color-border)` = `#2A2D33`.
- Height: 40px (Investidor spec — denser than Imobiliárias).
- Text: JetBrains Mono Regular 14px. `var(--color-text)` = `#F0F0EE`.
- Placeholder: `var(--color-text-3)` = `#555B66`.
- Focus: `border-color: var(--color-accent)` = `#E8A020`. **No ring, no glow.**
- Label: Inter Medium 13px, `var(--color-text-2)` = `#8A8F99`.

#### Button (Investidor primary variant)
- Background: `transparent` (per brand — Investidor button is outline-only).
- Border: 1px solid `var(--color-accent)` = `#E8A020`.
- Text: `var(--color-accent)` = `#E8A020`. **JetBrains Mono Medium 13px** (per brand `tga.yml#patterns.button-primary.investidor`).
- Label: `[ entrar na lista ]` — bracket convention is on-brand for the dark front (per `target-adaptations.md § WaitlistForm`).
- Height: 40px. Padding: `12px 24px`.
- Hover: `background-color: transparent → #E8A020`; `color: #E8A020 → #0E0F11` (`var(--color-canvas)`). 150ms ease-out. Border stays.
- Border-radius: **0px**.

#### Honeypot + audience tag
Same mechanism as proprietário capture. `name="company_url"` honeypot, `name="audience" value="investidor"` hidden field.

#### LGPD lines
- Dignity line: same text as proprietário but Mono 11px in `var(--color-text-2)` = `#8A8F99`. (Higher contrast on dark — 6.46:1 — than the proprietário equivalent because the dark front has a clearer text-2 hierarchy.)
- Consent line: same text. Same color (`#8A8F99` = 6.46:1 AA).

#### Verifiability link
- The single most important investidor-trust mechanic. Per `content-strategy.md § Investidor Capture` ("Ana doesn't need a paragraph of reassurance, she needs a link to the code").
- Element: `<a href="https://github.com/mutav-finance" target="_blank" rel="noopener noreferrer">[ verifique a arquitetura → github.com/mutav-finance ]</a>`
- Style: Mono 12px, `var(--color-text-2)`. Hover: `color → var(--color-accent)`.
- The `→` arrow inside the brackets is a Phosphor `ArrowRight` icon at `weight="light"` 14px — or the Unicode `→` character if rendering as inline text. Recommendation: Unicode `→` keeps it pure-typographic and avoids loading the icon font for one glyph.
- Position: under the LGPD lines. 32px gap.

## Components used

- `MonoKicker` (shared, investidor variant — no brackets).
- `WaitlistForm` (shared) — passes `audience="investidor"`, `data-front="investidor"`.
- shadcn `Button` (refactored — variant `primary-investidor`).
- shadcn `Input` (refactored).
- shadcn `Label` (refactored).

## States

### Default
Form rendered. Heading + three sentences right. Verifiability link below form.

### Empty
Same as default.

### Focus (input)
- Border: `1px solid #E8A020`.

### Loading (form submitting)
- Button: `opacity: 0.4`, `cursor: not-allowed`, `disabled`.
- Button label stays `[ entrar na lista ]`.
- Input: disabled.

### Success
- `<div role="status" aria-live="polite" className="font-mono text-sm text-text">recebido — ana@gmail.com — você está na lista de investidores.</div>`
- Mono register. Anti-celebration. Below the form replaces the form's contents (form + LGPD lines remain available for re-submission with another email if desired — or hidden).
- The verifiability link **stays visible** under the confirmation. Even after committing, Ana may want to inspect the architecture.

### Error
- `<div role="alert" className="mt-2 font-sans text-sm text-error">E-mail inválido. Verifique e tente de novo.</div>` (`var(--color-error)` = `#C94040`).
- Input border: `border-color: var(--color-error)`.

## Interactions

| Trigger | Result |
|---------|--------|
| Click input or Tab | Input focuses. Border becomes amber. |
| Tab from input | Focus moves to submit button. Button gets focus outline (1px amber inset, but already has 1px amber border — implementation note: focus uses `outline-offset: -2px` to stay inside the visible border). |
| Click submit / Enter | Server Action `joinWaitlist` runs. Button enters loading state. |
| Hover button | `bg-transparent → bg-accent`, `text-accent → text-canvas`. 150ms ease-out. |
| Click verifiability link | Opens `github.com/mutav-finance` in new tab (`target="_blank"`, `rel="noopener noreferrer"`). |
| Reduced-motion | Color transitions kept. No transforms, so no behavior change. |

## Accessibility

- **VoiceOver order:** kicker → "heading 2, Capital lastreado em garantias reais" → "list of 3 items, item 1, O capital lastreia garantias reais…" (etc.) → "Seu e-mail, edit text, required" → "Entrar na lista, button" → status + consent → "verifique a arquitetura, github dot com slash mutav-finance, link, opens in new tab".
- **Bracket convention:** the `[` and `]` around the button label and link label are decorative. Wrap the brackets in `<span aria-hidden="true">[ </span>` and `<span aria-hidden="true"> ]</span>` so screen readers announce "Entrar na lista, button" cleanly. Same for the verifiability link.
- **Heading structure:** `<h2 id="inv-h2">`. No h1 here.
- **Section landmark:** `<section id="investidor-form" data-front="investidor" aria-labelledby="inv-h2">`.
- **External link:** `target="_blank" rel="noopener noreferrer"` for security. The `aria-label="verifique a arquitetura, abre em nova aba"` (or rely on screen reader's default announcement of `target="_blank"`).
- **Touch targets:** Input 40px + 16px horizontal padding → ~32×~64px effective vertical, ~40×60px horizontal — passes AA (24×24). Button 40px + 24px padding → ~64×40 effective. Both pass AA target size; horizontal padding pushes effective touch zone over 44 to satisfy AAA on the horizontal axis. The 40px height is below AAA (44×44) on the vertical axis but within the brief's AA commitment.
- **Contrast:**
  - H2 (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Sentences (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - Label (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - Input text (`#F0F0EE` on `#0E0F11`) = 16.9:1 AAA.
  - Input placeholder (`#555B66` on `#0E0F11`) = 3.16:1 — **fails AA for normal text**. Acceptable for placeholder per WCAG (placeholders are exempt from the 4.5:1 requirement when a visible label is present, which it is). However, recommend bumping placeholder to `#7A7A82` for 4.95:1 AA compliance to be safe.
  - Button border + text amber (`#E8A020` on `#0E0F11`) = 6.92:1 AA, AAA for large text. Mono 13px is borderline normal text (qualifies as large text only at 14pt+ or 18pt+ depending on weight). At Medium weight 13px, treat as normal — passes AA.
  - Verifiability link `#8A8F99` on `#0E0F11` = 6.46:1 AA.

## Image resources

**No imagery.**

Per `imagery-style.md § Dashboard Investidor — No Photography`. The investidor section is pure typography + form + link. Data viz would be the alternative if real numbers existed — but the brief explicitly forbids placeholder/fake numbers, so no chart renders.

## Visual effects

- **Surface stacking:** section sits on `var(--color-canvas)`. Input is transparent (canvas shows through with 1px border outlining the input area). Button transparent until hover. The composition reads as four flat planes: canvas, input outline, button outline, link.
- **The fold:** 1px amber rule at the section top marks the return from light to dark.
- **Hover (button):** `bg-transparent → bg-accent` is a fill-in. Text inverts to `#0E0F11`. The button "lights up" amber on hover — strongest amber moment in the section, reserved for primary affordance.
- **Hover (verifiability link):** `color → var(--color-accent)`. The link flashes amber on hover — secondary trust mechanic gets a quieter amber treatment.
- **Focus:** 1px amber outline (inset `-2px` on the button to stay inside the 1px amber border).
- **No motion** beyond color transitions.

## Brand-contract checks

- ✅ `border-radius: 0` on input, button, and the link is inline text with no chrome.
- ✅ No shadows.
- ✅ No glass.
- ✅ Amber pixel budget (Investidor capture section): button border + button hover amber fill (~120×40 on hover = 4,800px², though hover is transient — count border only at default = ~280px²). Top amber rule = 1px × ~1280 = 1,280px². Verifiability link mono text in `text-2` (gray) by default, amber on hover only. Total amber default ≈ 1,560px². At 1280×~640 = 819,200px² section, amber occupies 0.19%. Well under budget.
- ✅ Three-layer hierarchy: Geist (H2) ✓ + Inter (sentences, label) ✓ + JetBrains Mono (kicker, input value, button label, LGPD lines, verifiability link) ✓.
- ✅ Tabular numerals: kicker numerals (`02`) use `tabular-nums`.
- ✅ Investor-facing voice. Approved language: `capital`, `garantias reais`, `contratos de aluguel ativos`, `onchain`, `repasse`, `execução`, `verificável`, `RWA`, `garantia locatícia`, `Solana`. Forbidden and absent: *"confie em nós"*, *"acreditamos"*, *"nosso objetivo é"*, *APY garantido*, *"hackathon"*, *"moonshot/alpha/degen"*, *"alta liquidez" without data*, *"ecossistema"* (generic), *"oportunidade única"*.
- ✅ Verifiability gesture: GitHub link present and labeled `[ verifique a arquitetura → ]` per `content-strategy.md`.
- ✅ Anti-celebration confirmation. Mono receipt.
- ✅ Honeypot, not CAPTCHA.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/personas.md](./shared/personas.md) — Ana
- [./screen-05-bifurcation.md](./screen-05-bifurcation.md)
- [./screen-06-proprietario-capture.md](./screen-06-proprietario-capture.md)
- Research: `.design/projects/landing/research/content-strategy.md § Investidor Capture`
- Research: `.design/projects/landing/research/accessibility-patterns.md § Form labels`
- Research: `.design/projects/landing/research/reference-specs.md § The waitlist form`
- Brand: `.design/branding/tga/patterns/STYLE.md § 3.2 Button — Primary (Investidor)`
- Brand: `.design/branding/tga/patterns/STYLE.md § 3.4 Input (Investidor)`
