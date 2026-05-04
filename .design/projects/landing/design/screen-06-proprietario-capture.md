# Screen 06 — Proprietário Capture
> Phase: design · Project: landing · Section: → 01 — IMOBILIÁRIA · Front: Imobiliárias (light) · 2026-05-02

## Purpose

The light surface where Lucas commits. Three sentences in plain pt-BR (zero jargon), an email field, a single CTA. The brand's first moment of warmth — light canvas, amber-fill button, dignified copy. Dignity over urgency: *Vamos te avisar quando estiver pronto. Não vamos te encher.*

## User flow position

First section after the bifurcation fork. Lucas (proprietário) lands here directly via the proprietário card click; Ana (investidora) reads it on her way down to the investidor capture below. Both forms are server-rendered and always visible — there is no toggle.

The dark→light handoff is the single most-watched moment of the page (per `recommendations.md § Anticipate (jarring handoff)`). The 1px amber rule at the top of this section *is* the fold; the section itself is the warmth.

## Layout

```
lg+ (≥1024)                                                         ~80vh
┌────────────────────────────────────────────────────────────────────────┐
│ ─────────────── 1px amber rule (the fold, top) ─────────────────       │
│                                                                        │
│  [data-front="imobiliarias"] — section wrapper                        │
│  background: var(--color-canvas) = #F7F6F3 (warm off-white)           │
│                                                                        │
│  ┌──────────────────────────┬──────────────────────────────────────┐  │
│  │ col-span-5               │ col-span-6 (cols 7–12, 1-col gap)    │  │
│  │                          │                                      │  │
│  │ → 01 — IMOBILIÁRIA       │  ┌──────────────────────────────┐   │  │
│  │                          │  │ Seu e-mail                   │   │  │
│  │ Quando o inquilino       │  │ ▏joao@imobiliaria.com.br     │   │  │
│  │ atrasa, você recebe.     │  │ └──────────────────────────┘ │   │  │
│  │                          │  │                              │   │  │
│  │ Sem ligar, sem           │  │ ┌──────────────────────────┐ │   │  │
│  │ formulário, sem espera.  │  │ │  avise-me                │ │   │  │
│  │                          │  │ └──────────────────────────┘ │   │  │
│  │ O dinheiro chega na      │  │                              │   │  │
│  │ conta cadastrada.        │  │  Vamos te avisar quando      │   │  │
│  │                          │  │  estiver pronto. Não vamos   │   │  │
│  │                          │  │  te encher.                  │   │  │
│  │                          │  │                              │   │  │
│  │                          │  │  Ao entrar na lista, você    │   │  │
│  │                          │  │  consente …                  │   │  │
│  └──────────────────────────┴──────────────────────────────────────┘  │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

<lg                                                                  ~auto
┌──────────────────────────────────┐
│ ──── 1px amber rule (top) ────   │
│                                  │
│ → 01 — IMOBILIÁRIA               │
│                                  │
│ Quando o inquilino atrasa,       │
│ você recebe.                     │
│                                  │
│ Sem ligar, sem formulário,       │
│ sem espera.                      │
│                                  │
│ O dinheiro chega na conta        │
│ cadastrada.                      │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ Seu e-mail                   │ │
│ │ ▏joao@imobiliaria.com.br     │ │
│ └──────────────────────────────┘ │
│                                  │
│ ┌────────────────────┐           │
│ │  avise-me          │           │
│ └────────────────────┘           │
│                                  │
│ Vamos te avisar quando…          │
│ Ao entrar na lista, você…        │
└──────────────────────────────────┘
```

- **Container:** `<section id="proprietario-form" data-front="imobiliarias" aria-labelledby="prop-h2">`. The `data-front="imobiliarias"` attribute re-resolves the CSS variables within this scope — `--color-canvas` becomes `#F7F6F3`, `--color-text` becomes `#1A1A1A`, etc.
- **Background:** `var(--color-canvas)` resolved on `imobiliarias` = `#F7F6F3` (warm off-white).
- **Padding:** `lg+`: 96px / 96px. `<lg`: 64px / 64px. **No texture** (per brand: Imobiliárias has no texture — warm canvas is clean).
- **Top fold:** 1px solid `var(--color-accent)` (`#C47E10` resolved on imobiliarias front) at section top — the amber rule that marks the dark→light handoff.
- **Bottom fold:** 1px solid `var(--color-accent)` at section bottom — marks the return to dark for the investidor capture below.
- **Grid (`lg+`):** 12-column. Heading + three sentences in cols 1–5 (left-skewed). Form in cols 7–12. 1-col gap.
- **Grid (`<lg`):** single column, vertical stack.

## Composition

### Mono kicker (Imobiliárias variant — no brackets)
- Element: `<span class="font-mono text-xs uppercase tracking-[0.10em] text-text-2">→ 01 — IMOBILIÁRIA</span>`
- Color: `var(--color-text-2)` resolved on imobiliarias = `#6B6860`. Contrast on `#F7F6F3` = 6.93:1 AA.
- Per `content-strategy.md`: the kicker uses the `→ 01` "trail-marker" style (off the narrative spine, sub-spine).

### Heading + three sentences

```
<h2 id="prop-h2" class="font-display font-bold text-3xl lg:text-4xl text-text leading-[1.15]">
  Você não fica esperando.
</h2>
<ol class="mt-10 space-y-8 max-w-[36ch]">
  <li class="font-sans text-base lg:text-lg text-text leading-[1.5]">Quando o inquilino atrasa, você recebe.</li>
  <li class="font-sans text-base lg:text-lg text-text leading-[1.5]">Sem ligar, sem formulário, sem espera.</li>
  <li class="font-sans text-base lg:text-lg text-text leading-[1.5]">O dinheiro chega na conta cadastrada.</li>
</ol>
```

- H2 (pt-BR): `Você não fica esperando.` — 24–32px Geist Bold, color `var(--color-text)` (`#1A1A1A`).
- H2 (en): `You don't wait.`
- Three sentences (pt-BR / en) — per `content-strategy.md § Proprietário Capture`:
  1. *Quando o inquilino atrasa, você recebe.* / *When the tenant is late, you get paid.*
  2. *Sem ligar, sem formulário, sem espera.* / *No phone calls, no forms, no waiting.*
  3. *O dinheiro chega na conta cadastrada.* / *The money arrives in the registered account.*
- Sentences as `<ol>` to match the discipline — they read in order (outcome → anti-bureaucracy → mechanism).

### The form

```
<form action={joinWaitlist} id="proprietario-form-element" data-front="imobiliarias">
  <input type="hidden" name="audience" value="proprietario" />
  <input type="hidden" name="locale" value="pt-BR" />
  <input type="text" name="company_url" tabIndex={-1} autoComplete="off"
         aria-hidden="true" className="sr-only" />

  <label htmlFor="email-prop" className="font-sans font-medium text-[13px] text-text-2">
    Seu e-mail
  </label>
  <input id="email-prop" type="email" name="email" required
         placeholder="joao@imobiliaria.com.br"
         className="mt-2 w-full h-12 border border-border bg-surface px-4
                    font-mono text-sm text-text placeholder:text-text-3
                    focus:border-accent focus:outline-none rounded-none" />

  <button type="submit"
          className="mt-6 h-12 px-6 bg-accent text-canvas
                     font-sans font-medium text-sm rounded-none
                     hover:bg-accent-dim transition-colors duration-150">
    avise-me
  </button>

  <p role="status" aria-live="polite" className="mt-4 font-mono text-[11px] text-text-2">
    Vamos te avisar quando estiver pronto. Não vamos te encher.
  </p>
  <p className="mt-2 font-mono text-[11px] text-text-3">
    Ao entrar na lista, você consente com o uso do seu e-mail para receber novidades sobre o protocolo. Pode sair quando quiser — basta responder qualquer e-mail com "sair".
  </p>
</form>
```

#### Input
- Background: `var(--color-surface)` resolved on imobiliarias = `#FFFFFF` (white).
- Border: 1px solid `var(--color-border)` = `#D9D7D2`.
- Height: 48px (Imobiliárias spec).
- Text: JetBrains Mono Regular 14px (the email value is data → mono). `var(--color-text)` = `#1A1A1A`.
- Placeholder: `var(--color-text-3)` = `#9E9C98`.
- Focus: `border-color: var(--color-accent)` = `#C47E10`. **No ring, no glow, no shadow.**
- Label: visible, Inter Medium 13px, `var(--color-text-2)` = `#6B6860`. Above input, 8px gap.

#### Button (Imobiliárias primary variant)
- Background: `var(--color-accent)` = `#C47E10` (solid amber fill). **The light front uses solid amber CTAs**; the dark front uses transparent + border.
- Text: `var(--color-canvas)` = `#1A1A1A` text on `#C47E10` amber = **7.04:1 AAA** (per brand contract — never white text on amber).
- Font: Inter Medium 14px (no Mono brackets in light front). Label `avise-me` (lowercase, no brackets).
- Height: 48px. Padding: `12px 24px`.
- Hover: `background-color: #C47E10 → #9E6A10` (`var(--color-accent-dim)`), 150ms ease-out. Text stays `#1A1A1A`.
- Border: none (the fill is the affordance).
- Border-radius: **0px** (overridden from shadcn default).

#### Honeypot
- Field name: `company_url`. Type `text`. Tab-index `-1`. `aria-hidden="true"`. Visually `sr-only`. Server validates `company_url` must be empty string. Per `reference-specs.md`.

#### LGPD lines
- Dignity line (Mono 11px, `var(--color-text-2)` = `#6B6860`): *Vamos te avisar quando estiver pronto. Não vamos te encher.*
- Consent line (Mono 11px, `var(--color-text-3)` = `#9E9C98`): full LGPD-compliance line per `content-strategy.md § Footer`.

## Components used

- `MonoKicker` (shared, imobiliarias variant — no brackets).
- `WaitlistForm` (shared) — passes `audience="proprietario"`, `data-front="imobiliarias"`.
- shadcn `Button` (refactored — variant `primary-imobiliarias`).
- shadcn `Input` (refactored — `data-front` resolves background and border).
- shadcn `Label` (refactored — visible, Inter Medium 13px).

## States

### Default
Form rendered. Empty input. Button enabled.

### Empty
Same as default. The form is empty by definition until typed.

### Focus (input)
- Border: `1px solid #C47E10`. No ring, no glow.
- Cursor in input.

### Loading (form submitting)
- Button: `opacity: 0.4`, `cursor: not-allowed`, `disabled`.
- Button label: stays `avise-me` (no spinner, no "loading…" text — the opacity is the busy state, per brand effects vocabulary).
- Input: `disabled` to prevent double-submit.

### Success
- Form replaced (or augmented) with confirmation block:
  - `<div role="status" aria-live="polite" className="font-mono text-sm text-text">recebido — joao@imobiliaria.com.br — você está na lista de proprietários.</div>`
  - Mono register, anti-celebration. No confetti, no exclamation marks, no auto-redirect.
  - Per `content-strategy.md § Proprietário Capture`: voice is "anti-celebration".

### Error
- `role="alert"` div appears below input:
  - `<div role="alert" className="mt-2 font-sans text-sm text-error">E-mail inválido. Verifique e tente de novo.</div>` (`var(--color-error)` resolved on imobiliarias = `#B83232`).
- Input border: `border-color: var(--color-error)`.
- Button stays enabled (re-submit possible).

## Interactions

| Trigger | Result |
|---------|--------|
| Click input or Tab into input | Input focuses. Border becomes `var(--color-accent)`. |
| Type in input | Native HTML5 `type="email"` validation hint on blur if invalid. |
| Tab from input | Focus moves to submit button. Button gets focus outline (1px amber inset). |
| Click submit / Enter when input or button focused | Form submits via Server Action `joinWaitlist`. Button enters loading state (opacity 0.4, disabled). |
| Server Action returns success | Form replaced with `role="status"` confirmation. Focus moves to confirmation region for screen reader announcement. |
| Server Action returns error | Inline `role="alert"` appears below input. Focus moves to input (re-edit). Border switches to error color. |
| Reduced-motion | All transitions kept (color only, no transforms — already below threshold). |

## Accessibility

- **VoiceOver order:** kicker → "heading 2, Você não fica esperando" → "list of 3 items, item 1, Quando o inquilino atrasa, você recebe…" (etc.) → "Seu e-mail, edit text, required" → "Avise-me, button" → "Vamos te avisar quando estiver pronto…" → "Ao entrar na lista, você consente…".
- **Heading structure:** `<h2 id="prop-h2">` — section's heading. No `<h1>` here (only hero has `<h1>`).
- **Section landmark:** `<section id="proprietario-form" data-front="imobiliarias" aria-labelledby="prop-h2">`.
- **Label association:** `<label htmlFor="email-prop">` + `<input id="email-prop">`. Visible label, not placeholder-as-label.
- **Required field:** `required` attribute. Native validation message overridden by custom `role="alert"` region.
- **Error region:** `<div role="alert">` paired with `aria-describedby="email-error"` on input when error present.
- **Status region:** `<p role="status" aria-live="polite">` for the dignity line. Announces on render. The success state replaces this region's content with the confirmation.
- **Honeypot:** `aria-hidden="true"`, `tabIndex={-1}`, `sr-only`. Invisible to screen readers and keyboard. Bots fill it.
- **Audience tag:** `<input type="hidden" name="audience" value="proprietario">`. Implicit, not visible, not focusable. Screen readers ignore hidden inputs by default.
- **Submit button label:** `avise-me` — no brackets in Imobiliárias variant. Screen reader announces "Avise-me, button". Clean.
- **Touch targets:** Input 48px height + horizontal padding 16px → exceeds 44×44. Button 48px + padding → exceeds 44×44. Touch passes AAA.
- **Contrast:**
  - H2 (`#1A1A1A` on `#F7F6F3`) = 16.7:1 AAA.
  - Sentences (`#1A1A1A` on `#F7F6F3`) = 16.7:1 AAA.
  - Label (`#6B6860` on `#F7F6F3`) = 6.93:1 AA.
  - Input bg `#FFFFFF` text `#1A1A1A` = 19.6:1 AAA.
  - Input border `#D9D7D2` on `#F7F6F3` = 1.16:1 — fine, decorative.
  - Button text `#1A1A1A` on `#C47E10` = 7.04:1 AAA.
  - Mono dignity line `#6B6860` on `#F7F6F3` = 6.93:1 AA.
  - Mono consent line `#9E9C98` on `#F7F6F3` = 4.10:1 — **fails AA at 11px.** Bump consent line to `#6B6860` = 6.93:1 AA. (Consent fine print is required text and must pass AA.)

## Image resources

**No imagery.**

Per `responsive.md § Image rendering`: even on the Imobiliárias front, this landing uses no apartment photography. Apartment photos belong to the dashboard, not the landing. The capture section is dignified white space + typography + form — that's the warmth, not photography.

If a future iteration wants imagery here, the brand spec calls for "real Brazilian apartments in use" with warm photography treatment (see `imagery-style.md § Front 2`). Out of scope for this design pass.

## Visual effects

- **Surface stacking:** section background = canvas (`#F7F6F3`). Input background = surface (`#FFFFFF`). One step lift. Button is a flat amber fill. No shadows.
- **The fold:** the 1px amber rule at the section top (and at the bottom marking the return to dark) is the only place amber appears outside the button. It is the architectural element that owns the front transition.
- **Focus:** 1px `var(--color-accent)` border on input. **No ring.**
- **Hover (button):** `background-color` shift `#C47E10 → #9E6A10` (150ms ease-out).
- **No motion** beyond color transitions. No fade-ins, no scroll reveals.

## Brand-contract checks

- ✅ `border-radius: 0` on input, button, all elements.
- ✅ No shadows.
- ✅ No glass.
- ✅ Amber pixel budget: button at ~144×48 = 6,912px². Top + bottom amber rules each 1px × ~1280px = 2,560px². Total ~9,472px². On Imobiliárias the budget is less strict (light front uses 60-30-10 with amber as the 10) but staying disciplined keeps the brand voice. At ~1280×768 = 983,040px², amber occupies 0.96%. Comfortable.
- ✅ Three-layer hierarchy: Geist (H2) ✓ + Inter (sentences, label) ✓ + JetBrains Mono (kicker, input value, dignity/consent lines) ✓.
- ✅ Tabular numerals: numerals in kicker (`01`) use `tabular-nums`.
- ✅ **No jargon.** Audited every word. Approved: `inquilino`, `atrasa`, `formulário`, `espera`, `dinheiro`, `conta cadastrada`. Forbidden and absent: `wallet`, `carteira`, `onchain`, `smart contract`, `blockchain`, `Solana`, `protocolo` (technological sense — the word "protocolo" appears in the dignity line but in plain Portuguese sense; acceptable), `token`, `DeFi`, `liquidação`, `transparência` (as marketing adjective).
- ✅ `#1A1A1A` on amber `#C47E10` (button) — never white text on amber.
- ✅ Anti-celebration confirmation. Mono receipt, no exclamation marks, no auto-redirect.
- ✅ Honeypot, not CAPTCHA.

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/personas.md](./shared/personas.md) — Lucas
- [./screen-05-bifurcation.md](./screen-05-bifurcation.md)
- [./screen-07-investidor-capture.md](./screen-07-investidor-capture.md)
- Research: `.design/projects/landing/research/content-strategy.md § Proprietário Capture`
- Research: `.design/projects/landing/research/accessibility-patterns.md § Form labels, errors, audience tag`
- Research: `.design/projects/landing/research/reference-specs.md § The waitlist form`
- Brand: `.design/branding/tga/patterns/STYLE.md § 3.2 Button — Primary (Imobiliárias)`
- Brand: `.design/branding/tga/patterns/STYLE.md § 3.4 Input (Imobiliárias)`
