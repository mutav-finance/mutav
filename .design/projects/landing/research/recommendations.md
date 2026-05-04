# Recommendations
> Phase: research | Project: landing | Generated: 2026-05-02

Opinionated calls for the design phase, tied to the specific findings in the other chunks. Where the research suggests a path, this chunk picks one. Where the brief contradicts current best practice, this chunk surfaces the contradiction explicitly so the team can decide intentionally rather than discovering it at build time.

## Hold the line on these (research confirms the brief)

- **Two separate forms over one form with a role picker.** See `ux-patterns.md § Waitlist Form`. The brief's call is right; segmentation cleanliness > marginal conversion savings.
- **Scroll-driven self-segmentation, not upfront routing.** See `ux-patterns.md § Bifurcation`. Stripe, Linear, Notion, Mercury all reject upfront persona gates. So should TGA.
- **No referral mechanic, no "skip the line".** See `competitor-ux.md § Robinhood/Clubhouse/Superhuman`. Tonally wrong for the audiences. The waitlist is a list, not a game.
- **Single CTA in the hero.** See `ux-patterns.md § Vision-Led Hero`. Two CTAs in a vision-capture surface split attention. The CTA's job is to scroll to bifurcation, not to convert.
- **Honeypot, not CAPTCHA.** See `technical-research.md § Form security`. CAPTCHA breaks the brutalist contract and ships unwanted JS. Honeypot is invisible, server-side, and effective.
- **Resend + Vercel KV as the waitlist backend.** See `technical-research.md § Waitlist backend`. Owns the list, LGPD-clean, scales into the dashboard launch.
- **Founders named with real faces (or designed alternative).** See `competitor-ux.md § Brazilian rental incumbents`. The named-founder gesture is the single most differentiating credibility cue against the entire incumbent surface.
- **Tabular numerals everywhere mono appears.** See `reference-specs.md § Hero typography`. `font-feature-settings: "tnum" 1` is non-negotiable.
- **`<h1>` only on the guiding line, no second headline.** See `accessibility-patterns.md § Headings`. The manifesto is a `<p>`, not an `<h2>`.

## Push back on these (research suggests rethinking)

- **The "scroll to bifurcation" CTA in the nav.** The brief's `[ fique por dentro ]` ghost button in the nav is fine but somewhat redundant with the page's natural scroll. Consider: drop it. The nav becomes logo + locale toggle + live dot, no CTA. The page is short enough that the bifurcation is reachable in two scrolls. Removing the CTA makes the nav feel like a chyron, not a marketing header — which is more on-brand. *If* kept, ensure it's secondary (transparent + amber border), never primary, and that the click target is a smooth-scroll, not a route change.
- **Mono kicker numbering across all sections.** The proposal in `reference-specs.md` to label every section `0X / 04` runs the risk of feeling over-systemic. Recommend: number the *narrative spine* (Hero, The Gap, Vision Arc, Bifurcation) but let Capture, Team, and Footer carry only a label kicker (`→ INVESTIDOR`, `equipe`, etc.) without a numeral. The numeric sequence becomes the spine; the labeled sections become the deeper stops.
- **The live dot — square or circle?** See `reference-specs.md § The live amber dot`. The brand contract says 0px radius everywhere. The brief calls it a "dot" (visually ambiguous). Decide explicitly in the install manifest: **square 6×6 amber patch**, named "live indicator", and remove the word "dot" from the spec. Or accept this as the single brand-contract exception. Recommend the square — preserves the contract, reads as architectural.

## Anticipate these failure modes

- **The amber budget will blow.** <5% pixel scarcity is hard to hit if every CTA, every focus state, every kicker, and the live indicator all carry amber. Audit at design time, not build time. Run a pixel-count of amber per breakpoint across the full page comp. Likely cuts: kicker color shifts to text-secondary except in the vision arc (where amber on the rule is the mechanic); only the proprietário button is solid amber (Imobiliárias front), the investidor button is transparent + amber border.
- **The dark-to-light handoff at the proprietário-capture section will feel jarring.** The brief calls this out as a watch-list item and they're right. Mitigate: add a 1px amber rule as the section divider (becomes the "fold" the canvas turns on), and let the dark-front bifurcation card for proprietário visually echo the light front by stepping through surface-1 (slightly lighter dark) on hover *before* the section actually goes light. The reader senses the temperature shift before it happens.
- **Lucas-facing copy will drift into jargon under iteration pressure.** The brand never-say list is long; a designer iterating on copy will reach for "transparente" or "automático" in a way that crosses the line. Mitigate: pin the proprietário-front copy in the YAML (or a sibling pt-BR copy file), reference it from the component, treat copy edits as a separate review concern from layout edits. Founders own the copy lock.
- **"Não parecer projeto de hackathon" is hard at the team section.** The brief flags this. The single highest-risk element is the founder photography — if the photos look like phone snapshots taken under fluorescent kitchen light, the entire credibility play collapses. Either commission a 30-minute editorial shoot (monochrome, sharp shadow, architectural) or commit to the designed alternative (initials, monogram) and own it. Don't ship in-between.
- **The vision arc will get read as a roadmap.** Despite the no-dates rule, readers project. Mitigate: the section header ("horizonte" not "roadmap"), the Inter sub-line copy ("o que vem depois", not "próximos lançamentos"), and the absence of any progress-indicator hint. If the design phase produces a comp where any phase looks "active" relative to others, kill that comp.

## Open questions for the design phase

- **Founder photography vs designed alternative.** Decide before final design pass; the team section reads radically different in each direction. If photography, commit to a shoot date in the next sprint; if designed, lock the alternative spec early.
- **The `[ fique por dentro ]` nav CTA — drop or keep.** Recommend drop (above), but the team should weigh against the conversion-funnel intuition. If kept, define explicitly as a smooth-scroll affordance and not a primary CTA.
- **English variant scope.** The brief calls for `/en` but the audience read for English is unclear — is `/en` for Ana-the-Brazilian-DeFi-investor-who-prefers-English, or for an international investor audience that doesn't currently exist? If the latter, the en variant might want a different hero. Recommend: en variant ships as a translation, not a different page, and the team revisits at the next phase if international interest materializes.
- **The vision arc's fourth phase — "Horizonte" or "Tokenização imobiliária".** The brief calls the phase "Horizonte" with the sub-line "tokenização imobiliária". Decide whether the headline is the abstract noun (`Horizonte`) or the concrete noun (`Tokenização`). Recommend: the concrete noun for the headline, with the sub-line carrying the abstract framing — readers parse concrete nouns faster, and the abstraction doesn't need both layers.
- **Live amber dot — does it carry a tooltip?** A `title` attribute or hover label that says "Protocolo em desenvolvimento" reinforces the meaning without adding visible chrome. Recommend yes, but keep it subtle (Mono 11px, appears on hover only, no animation).

## Sources / dependencies

This chunk is derivative — every recommendation traces back to a finding in:

- [ux-patterns.md](./ux-patterns.md)
- [competitor-ux.md](./competitor-ux.md)
- [technical-research.md](./technical-research.md)
- [accessibility-patterns.md](./accessibility-patterns.md)
- [content-strategy.md](./content-strategy.md)
- [reference-specs.md](./reference-specs.md)

## Related
- [scope.md](../brief/scope.md)
- [target-adaptations.md](../brief/target-adaptations.md)
