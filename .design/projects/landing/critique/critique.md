# Critique
> Phase: critique · Project: landing · Brand: tga · Reviewer: Apple Design Director · 2026-05-02

A first-pass design critique of the TGA landing — evaluating strategy fit, brand contract adherence, Nielsen usability heuristics, accessibility hooks, content quality, implementation discipline, and taste. The page is a single-route, single-scroll, two-front composition (dark Investidor → light Imobiliárias → dark Investidor) intended to capture two audiences (Lucas, Ana) on a single URL.

---

## 1. Strategy alignment

The design serves the BRIEF cleanly. The hero stays anchored to *"Aluguel garantido, do jeito que deveria funcionar"* — category claim, not feature claim — which protects against pivots inside the rental vertical. The vision arc is treated as horizon (no dates, no "we're here", quieter rhythm than the hero), which is exactly what the brief asks for. The bifurcation is the only centered moment and resolves the two-audience problem without an upfront persona gate. Both capture forms render server-side.

What works strategically:
- Hero passes the "would I stop scrolling?" test with naked typography (no CTA, no demo, no screenshot). The argument is the headline + manifesto.
- The Gap section names category problems without naming companies — survives even if CredPago/QuintoCred return.
- Investidor capture trades reassurance copy for a verifiability link (`[ verifique a arquitetura → github.com/tga-protocol ]`) — exactly Ana's trust mechanic.
- Proprietário copy is jargon-audited at the word level and stays outcome-first (*"Quando o inquilino atrasa, você recebe."*).

Strategic gaps:
- The team section depends on a copy lock that hasn't been confirmed (jubs's track-record line). The design defends well by allowing graceful collapse to name + role only, but the open question carries risk into build.
- Founder photography vs. designed alternative is unresolved. The design correctly refuses to ship in-between, but a decision must precede build, not be made during build.

**Score:** 4.5/5 — design is strategically anchored; only unresolved upstream content/photography decisions block a 5.

---

## 2. Brand contract (X/25)

`STYLE.md` is treated as binding here. The design checks every constraint deliberately — every screen ends in a "Brand-contract checks" block.

| Dimension | Score | Notes |
|-----------|-------|-------|
| Constraint adherence | 5 | 0px radius enforced everywhere, no shadows, no glass, no `#22C55E`, no jargon in proprietário copy, no white text on amber CTA, surface stacking only. The single permitted "gradient" is the hero mask (mask, not color) — explicitly justified. |
| Pattern fidelity | 5 | Every component matches `STYLE.md § 3` patterns. Investidor button = transparent + amber border + 40px height + Mono `[ … ]` label. Imobiliárias button = solid `#C47E10` + `#1A1A1A` text + 48px height. Live indicator is the 6×6 amber square (not "dot") — resolves the brief's `dot` ambiguity correctly. |
| Effects vocabulary | 5 | Only `color`, `background-color`, `border-color`, `opacity` transition. Reduced-motion downgrades the pulse to static and smooth-scroll to instant. The single permitted fade-in is `[role=status]` confirmation — disciplined. |
| Intensity calibration | 5 | variance: 3 (chyron + Investidor + Imobiliárias resolutions). motion: 2 (one ambient animation, one transient hover state per element). density: 6 average — hero is sparse, footer is Bloomberg-dense, sections rhythm between. Matches `STYLE.md § 1` exactly. |
| Bold bet presence | 5 | All five bold bets are deliberately surfaced: zero-radius (every screen), amber-as-precious-metal (per-screen pixel budgets audited), tabular numerals (`Mono` wrapper), three-layer hierarchy (verified per narrative section, with the footer as a deliberate chyron exception), surface stacking (bifurcation hover canvas → surface-1, no shadows). |

**Total brand contract: 25/25.** Zero constraint violations. The design reads like it was authored by someone who understands the brand is the design.

---

## 3. Usability — Nielsen heuristics (X/50)

| # | Heuristic | Score | Notes |
|---|-----------|-------|-------|
| 1 | Visibility of system status | 4 | Live amber pulse + `[role=status]` aria-live + `[role=alert]` errors + button opacity 0.4 disabled state cover all states. **−1**: form submission disables the button via `opacity: 0.4` but keeps the label `avise-me` / `[ entrar na lista ]` static — sighted users with low vision may not register opacity alone as "submitting." Consider augmenting with an `aria-busy="true"` attribute or a Mono-register status text below button (`enviando…`) to give sighted parity with the screen reader's polite announcement. |
| 2 | Match between system & real world | 5 | Proprietário copy is jargon-zero, in plain pt-BR. Investidor copy uses operator language (`onchain`, `RWA`, `Solana`) that Ana already speaks. The split honors each persona's mental model. |
| 3 | User control & freedom | 4 | Locale toggle is reachable from nav and footer. Bifurcation cards scroll-to-form; the user can scroll back without state loss. **−1**: form success replaces the form contents — the screen-07 spec keeps the verifiability link visible after submit, but proprietário capture (screen-06) doesn't explicitly say what happens to the form chrome. State the post-submit behavior unambiguously: does the section scroll-lock? Does focus return to the bifurcation cards? Is there a re-submit option for a different email? |
| 4 | Consistency & standards | 5 | Section kickers, mono numerals, transition durations (150ms), focus outline (1px amber inset), and amber rules all repeat as a system. The chiral mirror at sections 06↔07 is consistent inversion, not inconsistency. |
| 5 | Error prevention | 4 | Native HTML5 `type="email"` validation + honeypot + server-side audience tag prevent the common errors. **−1**: there is no client-side disable of the submit button until the email is valid. A user who clicks submit on an empty/invalid input pays a roundtrip + error redraw before getting feedback. Either pre-validate the email with `:invalid` styling and `disabled` until valid, or accept the roundtrip as a deliberate trade (and document it). |
| 6 | Recognition over recall | 5 | All form labels are visible (no placeholder-as-label), navigation is anchor-based (no hidden routes to remember), the bifurcation cards preview the audience labels (`01 — IMOBILIÁRIA`, `02 — INVESTIDOR`) before the user commits. |
| 7 | Flexibility & efficiency of use | 4 | Keyboard users get a skip link → nav → form-by-form Tab order. **−1**: no in-page anchor jump shortcuts beyond the bifurcation cards. The footer's locale toggle echo is good (a power-user detour) but there's no `Tab into footer column 4 → second locale link → click` shortcut from anywhere mid-page. Acceptable for a single-scroll page; flagged because keyboard power users on this audience profile (Ana) often expect skip-to-section landmarks. Consider adding a single `<nav aria-label="Sections">` with anchor links rendered visually `sr-only` but reachable via the skip-link + Tab pattern. |
| 8 | Aesthetic & minimalist design | 5 | Naked-typography hero, no decorative iconography, no scroll-triggered reveals, no parallax, no champagne on success. The amber rule between sections is the load-bearing decoration. Minimum signal, maximum meaning. |
| 9 | Help users recognize, diagnose, recover from errors | 4 | `[role=alert]` inline error region with plain-language copy ("E-mail inválido. Verifique e tente de novo.") is correct. **−1**: the error copy is generic for a single failure mode (invalid format). A duplicate-email submission, a rate-limit response, or a backend outage will look identical to the user. Define the additional error states the Server Action can return and pair each with concrete recovery copy: "Esse e-mail já está na lista." / "Muitas tentativas. Tente novamente em alguns minutos." / "Não foi possível salvar. Tente novamente." |
| 10 | Help & documentation | 4 | The verifiability link to `github.com/tga-protocol` is the documentation gesture for Ana. The dignity line ("Vamos te avisar quando estiver pronto. Não vamos te encher.") is the documentation gesture for Lucas. **−1**: there is no FAQ, no "what is TGA" disclosure, no answer to "what does my email get used for beyond the waitlist." The LGPD consent line is good, but Lucas may want a softer "como funciona" moment. The brief explicitly excludes a docs site; acceptable trade. Score 4 not 5 because a future iteration may want a single inline disclosure on the proprietário side. |

**Total usability: 44/50.**

---

## 4. Accessibility hand-off

The design specs already audit contrast per text/background pair and call out three specific bumps required (consent line on light, track-record line on dark, footer column labels on dark). The auditor sub-pass will formalize these into `accessibility-audit.md` and `accessibility-fixes.md`. Headlines from the design itself:

- All hero, gap, arc, capture H1/H2/H3 pairs pass AAA on the dark canvas.
- Three placeholder/secondary text bumps are needed (see `accessibility-fixes.md`).
- Reduced-motion is explicitly handled (pulse → static, smooth-scroll → instant).
- Skip link is the first focusable element, revealed on focus.
- Heading tree is `h1` (hero) → `h2` per section → `h3` per item — no skipped levels.
- Forms have visible labels (not placeholder-as-label), `<label htmlFor>`, `[role=alert]` errors, `[role=status]` confirmations, honeypot for bots (not CAPTCHA), and decorative bracket characters wrapped in `aria-hidden` spans.

---

## 5. Content quality

Real copy throughout — no Lorem Ipsum, no AI clichés ("Elevate", "Seamless", "Unleash" — absent). Every line is authored:

- Hero: *"Aluguel garantido, do jeito que deveria funcionar."* — category claim with an embedded double meaning (garantido = product + feeling). Anti-feature, anti-promise.
- Gap diagnostics: declarative, specific, period-terminated. *"O repasse pode esperar 60 dias. o aluguel não pode."* — no hedge words ("muitas vezes", "pode acontecer"), category-true statements.
- Vision arc phase 04 uses the concrete noun *"tokenização imobiliária"*, not the abstract *"horizonte"*. Per the recommendation; correctly applied.
- Proprietário voice: outcome-first. Forbidden words (`wallet`, `onchain`, `smart contract`, `liquidação`, `transparência` as marketing) absent. Approved words (`inquilino`, `atrasa`, `formulário`, `conta cadastrada`) present.
- Investidor voice: technical register. Approved words (`capital`, `garantias reais`, `RWA`, `Solana`, `repasse`, `verificável`) present. Banned phrases (*"confie em nós"*, *"acreditamos"*, *"APY garantido"*, *"oportunidade única"*) absent.
- Microcopy: anti-celebration confirmation (*"recebido — joao@imobiliaria.com.br — você está na lista de proprietários."*) — Mono register, no exclamation marks, no auto-redirect. Confident.
- Names: real (Draau, jubs). Not "John Doe."

**Watch-list:**
- jubs's track-record line is a placeholder (`ex-{role}`). The design correctly refuses to invent — flag this in `prioritized-fixes.md` as a content gate before build, or accept the graceful-collapse path documented in screen-08.

---

## 6. Implementation quality

The component plan is disciplined. shadcn primitives are explicitly **refactored**, never used as-is — the brand contract (0px radius, no rings, no shadows) requires it. New shared components live in `components/brand/`, one-off section compositions in `components/sections/`. Server Action via Resend + Vercel KV (per technical research) — no client-side analytics, no cookie banner, no log-in.

Layout discipline:
- 12-column grid, 24px gutter, 32px outer margin (per `STYLE.md § 3.7`).
- `max-width: 1440px` ceiling honored.
- The hero, gap, arc, captures all use asymmetric grids (left- or right-skewed) — no centered-everything.
- The bifurcation is the **only** centered moment, used as the deliberate exception.

Surfaces:
- Surface stacking only (canvas → surface-1 on bifurcation hover). No `box-shadow` anywhere.
- The `gap-px bg-border` trick (parent's border color shows through 1px grid gap) avoids double-borders cleanly.

Motion:
- 150ms ease-out on color/border transitions. No `linear` on UI affordances. No transforms.
- One ambient animation (the pulse) — opacity-only, 2s linear infinite, reduced-motion-aware.

**Watch:**
- The hero's bottom mask is `linear-gradient(to bottom, transparent 60%, var(--color-canvas))`. Technically a gradient. The design justifies it as "mask, not color." That's correct in CSS terms but it's worth a build-time check that no other gradient creeps in via shadcn defaults or Tailwind utilities — add a CI grep for `bg-gradient-` to the build workflow.

---

## 7. Taste signals

The design crosses from "correct" into "good." Specific moves:

- **The fold is two 1px amber rules.** The dark→light→dark round trip is owned by two single-pixel lines, not by a hero illustration or a banner. That's the brand's structural-architectural argument compressed into the smallest possible element.
- **The vision arc rule is the mechanic.** The 1px horizontal amber line at lg+, vertical at <lg, anchored to cap-height of the mono numerals — the rule is the only accent in the section, and the rule **is** the connection. No "we're here" dot. No progress bar. The line carries the meaning.
- **Bifurcation as the only centered moment.** Asymmetry resumes immediately after. The brand's never-say-centered-text rule survives because this is the deliberate single exception, and even centered, the cards are equal-weight (the brief explicitly rejects asymmetric persona weighting like Stripe's Read/Build pair).
- **The chiral mirror at captures.** Proprietário left-skewed, Investidor right-skewed — the inversion is the section-level visual companion to the dark→light→dark fold.
- **No glow on the live indicator.** The 6×6 amber square pulses opacity-only. The brand explicitly forbids `box-shadow` pulse and the design holds the line.
- **Anti-celebration confirmation copy.** *"recebido — joao@imobiliaria.com.br — você está na lista de proprietários."* — Mono receipt register, not "Welcome aboard! 🎉".
- **The verifiability link as the trust mechanic.** *"Ana doesn't need a paragraph of reassurance, she needs a link to the code"* — the page acts on that.

**Restraint signals:**
- Zero photography on Investidor (per imagery-style.md).
- No scroll-triggered fade-ins. Sections render fully on load.
- No icons inside bifurcation cards (typography is the affordance).
- No social platform icons in footer (URL text is the icon).
- No CAPTCHA, no cookie banner, no spinner, no champagne on submit.

If someone asked "who designed this?" the answer reads as a person, not a template.

---

## Synthesis

The design is shippable. Brand contract is at 25/25, Nielsen at 44/50, content is real and on-voice, taste signals are present and load-bearing. The verdict is **Pass** — proceed to build.

Critical fixes are absent. Important fixes (form pre-validation, expanded error states, post-submit affordance clarity, photography decision lock) are documented in `prioritized-fixes.md` as build-time content gates and form-state expansions. Polish suggestions (a hidden section-anchor nav for keyboard power users, an inline FAQ moment for Lucas) are deferred to a post-launch iteration.

The design's biggest strength is what it refuses to add. The brief said "doesn't read like a hackathon project" and "amber scarcity holds" — the design's restraint is the brand argument. Let it stay restrained in build.

## Related
- [prioritized-fixes.md](./prioritized-fixes.md)
- [alternative-directions.md](./alternative-directions.md)
- [strengths.md](./strengths.md)
- [accessibility-audit.md](./accessibility-audit.md)
- [accessibility-fixes.md](./accessibility-fixes.md)
- Brand: `.design/branding/tga/patterns/STYLE.md`
- Design: [../design/INDEX.md](../design/INDEX.md)
