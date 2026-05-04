# Strengths
> Phase: critique · Project: landing · 2026-05-02

What works and must be preserved through build and beyond. A critique without recognition is demolition; these are the load-bearing decisions the design got right.

---

## Structural

1. **Single route, single scroll, two front-resolutions on one body.** The dual-front composition (`data-front="investidor"` default, `[data-front="imobiliarias"]` scoped to section 06) is technically simple, semantically clean, and brand-faithful. The fact that the entire dark→light→dark fold is owned by **two 1px amber rules** — not by elaborate visual treatments — is a craft signal. Preserve.

2. **The narrative spine is mono-numbered (`01–04 / 04`) and the side-spine sections drop the numeral.** The decision to label `→ 01 — IMOBILIÁRIA`, `→ 02 — INVESTIDOR`, `equipe` differently from the spine is a small but load-bearing rhythm move — it tells the reader "you are in the spine" or "you are at a stop" without an explicit affordance. Preserve.

3. **The bifurcation is the only centered moment.** The brand's ambient stance is asymmetric (left- or right-skewed grids per section). The bifurcation breaks symmetry exactly once, and even centered, the cards are equal-weight (no Stripe-style "Read / Build" persona prioritization). This is the deliberate single exception — keep it deliberate.

4. **The chiral mirror at sections 06 ↔ 07.** Proprietário left-skewed (copy left, form right). Investidor right-skewed (form left, copy right). The inversion is the section-level visual companion to the dark→light→dark fold — the design rhymes at multiple scales. Preserve.

---

## Brand fidelity

5. **Zero brand-contract violations across nine screens.** Every screen ends in a "Brand-contract checks" block that audits radius, shadows, glass, amber budget, three-layer hierarchy, and tabular numerals. The design treats `STYLE.md` as binding, not advisory. This discipline must carry into build — see prioritized-fixes.md item 11 (CI grep for `bg-gradient-` and `box-shadow`).

6. **Amber pixel budgets are computed per screen, not just declared.** The hero is 0% amber, the bifurcation is 0% amber at rest, the captures sit around 0.2–1%, the team caps at 0.7% with designed alternative. Total page amber is well under the 5% ceiling. The amber isn't decorated, it's accounted. Preserve the per-screen audit habit.

7. **The live indicator is a 6×6 amber square — not a circle.** Resolves the brief's `dot` ambiguity correctly in favor of the brand's 0px contract. The pulse is opacity-only (no `box-shadow` glow). This is the kind of decision a less rigorous design would have softened. Preserve as the literal example in the build spec.

8. **The footer is Mono-everything by deliberate exception.** The three-layer hierarchy rule applies to narrative sections; the footer is chrome. The design recognizes this and documents it — Geist is in the page-level `<h1>` already, no Geist in the footer is correct. This kind of rule literacy is rare. Preserve the documentation.

---

## Voice & content

9. **Hero copy is a category claim, not a feature claim.** *"Aluguel garantido, do jeito que deveria funcionar"* survives any pivot inside the rental vertical. The brief explicitly required this; the design honors it. Preserve.

10. **Proprietário copy is jargon-audited at the word level.** Forbidden vocabulary (`wallet`, `onchain`, `liquidação`, `transparência` as marketing) is absent. Approved vocabulary (`inquilino`, `atrasa`, `formulário`, `conta cadastrada`) is present. Outcome-first sentences (*"Quando o inquilino atrasa, você recebe."*). The brand's hardest constraint — "no jargon in proprietário copy" — is held. Preserve and protect through build with a copy-lock document.

11. **Investidor copy trades reassurance for verifiability.** The page doesn't tell Ana to trust it; it links her to `github.com/tga-protocol`. The verifiability link (`[ verifique a arquitetura → ]`) is the trust mechanic. Preserve.

12. **Anti-celebration confirmation copy.** *"recebido — joao@imobiliaria.com.br — você está na lista de proprietários."* — Mono register, no exclamation marks, no auto-redirect, no "Welcome aboard! 🎉." Confident, dignified, on-voice. Preserve as the exact string format.

13. **The "dignity over urgency" line.** *"Vamos te avisar quando estiver pronto. Não vamos te encher."* — every word earns its place. Preserve verbatim.

---

## Restraint moves (what the design refuses to add)

14. **Zero photography on Investidor surfaces** (per brand). No stock photos, no people-with-laptops, no "fintech aesthetic" warmth. The hero is naked typography. The team section is the only place photography is permitted, and even there, the designed-alternative path (initials in amber-on-canvas squares) is documented as on-brand.

15. **No scroll-triggered fade-ins, no parallax, no stagger entrances, no skeleton shimmer.** Sections render fully on load. Reduced-motion downgrades the one ambient animation (the pulse) to static. The motion budget is at the floor and the design doesn't reach for more.

16. **No icons in the bifurcation cards, no iconography per vision-arc phase.** The cards are typography-only because the typographic affordance **is** the choice. The vision arc rule **is** the connection. Adding iconography would dilute both. The brand prohibits amber icons; the design refuses to add icons that would beg to be amber.

17. **No CAPTCHA, no cookie banner, no spinner, no auto-redirect.** Each absence is a brand argument. CAPTCHA breaks the brutalist contract; the cookie banner exists because there's no client-side analytics; the spinner is replaced by opacity-as-busy-state; the auto-redirect would override user agency. Preserve all four absences.

18. **No `<h1>` competing with the hero's guiding line.** The manifesto is `<p>`, not `<h2>`. The vision arc has `<h2 sr-only>` (or implicit via aria-labelledby). The bifurcation has `<h2 sr-only>`. The team section has `<h2 sr-only>`. Only the hero gets a visible `<h1>` — the brand's primary argument is structurally privileged. Preserve.

---

## Craft details to preserve verbatim

19. **The `gap-px bg-border` trick** for the bifurcation cards. Single line, no double-border, no `last:border-r-0` workarounds. Preserve as the canonical pattern for "cards-with-divider-between."

20. **The 1px amber rule connecting the four vision-arc phases**, anchored to the cap-height of the mono numerals so the line passes through the visual middle. Horizontal on `lg+`, vertical on `<lg`. Aria-hidden because it's decoration; the `<ol>` carries the order semantics. Preserve as the canonical "structural amber" pattern.

21. **Decorative bracket characters** (`[ entrar na lista ]`, `[ verifique a arquitetura → ]`) wrapped in `<span aria-hidden="true">` so screen readers announce the label cleanly. This is the kind of accessibility detail that designs at this stage routinely miss. Preserve.

---

## What the rest of the build can ship against

If a reviewer says "this design feels generic" or "this needs more visual interest" or "let's add a hover lift / a glow / an icon", the answer is: every absence is intentional and audited. The strengths above are the design's argument for restraint. Preserve them through build, through review, through any future iteration. The page's strongest move is what it doesn't do.

## Related
- [critique.md](./critique.md)
- [prioritized-fixes.md](./prioritized-fixes.md)
- [alternative-directions.md](./alternative-directions.md)
