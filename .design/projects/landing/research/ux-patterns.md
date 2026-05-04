# UX Patterns
> Phase: research | Project: landing | Generated: 2026-05-02

The TGA landing is a vision-led, pre-PMF, signal-capture surface that has to seat **two structurally different audiences on one URL** without devolving into a routing menu, and has to read true even after the team pivots inside the rental vertical. That combination — vision capture, audience segmentation, anti-vaporware tone, and pivot-resilient framing — is rare. Most "waitlist landing" advice (referrals, viral counters, scarcity timers) is wrong for this brief. The patterns below are the ones worth borrowing.

## The Vision-Led Hero (no product to demo)

When there is nothing to show, a hero has to do work with **claim + atmosphere + proof of seriousness** instead of feature copy. The pattern that recurs across Linear's pre-launch (2019–2020), Arc's pre-launch, Stripe's earliest pages, Mercury's first marketing site, and Plain.com today is:

1. **A short editorial declaration** carrying a category claim, not a product claim (Linear: "The issue tracking tool you'll enjoy using" — category, not features). Geist Bold, broadsheet weight, tight tracking. The TGA guiding line *"Aluguel garantido, do jeito que deveria funcionar"* sits exactly in this slot.
2. **A one- or two-sentence manifesto** under the headline that explains why the category fails today. "We believe X" is too soft; the strongest examples (Linear, Mercury early, Plain) pick a fight with the status quo without naming names.
3. **A mono kicker** above or below: section index ("01 / 04"), live status ("LIVE — building"), or category tag ("PROTOCOLO DE LIQUIDEZ IMOBILIÁRIA" in the existing TGA prototype). The mono is the editorial signature — it tells the reader "we work in numbers".
4. **Single primary CTA, no secondary.** Pre-PMF heroes that try to give two equal-weight CTAs (Try / Learn more) split attention and leak conversion. Mercury, Linear, and Arc all run a single CTA in the hero. For TGA the CTA scrolls to bifurcation — it is not the conversion event, it is the entry into the conversion path.

What to avoid: faux-CLI / terminal-aesthetic heroes (Vercel did this in 2018 and abandoned it; Resend tried it briefly), animated product screenshots that don't match the actual product (Linear was disciplined here — only shipped real screenshots once the product was real), and "scroll for more" affordances (the hero earns the scroll or it doesn't).

## The Bifurcation Pattern (two audiences, one URL)

The anti-pattern is **upfront routing** — "I'm a landlord / I'm an investor" in the nav, sending each persona to a parallel page. This fragments the brand and forces a route decision before the visitor knows what TGA is. Stripe, Notion, Airbnb, and Revolut all reject this for their primary marketing page; they let the persona-relevant content surface inside the page after the visitor has read the manifesto.

The pattern that works for TGA: **scroll-driven self-segmentation** — one shared narrative spine (hero → gap → vision arc) that both personas read, then a single "fork" moment where they self-select into the capture form that speaks their language.

Variants worth knowing:

- **Two equal-weight cards side-by-side** (Notion's "personal vs team" pattern, Airbnb's "host vs guest" footer routing). Each card carries a Mono label, a Geist persona claim, and an Inter sub-line. Click expands the form *below the cards*, in-page, no route change. This is the TGA brief's `BifurcationCards` composition — and the right call.
- **Asymmetric weighting** (Stripe's developer/founder split — devs are the primary audience, founders get a smaller surface). Reject this for TGA: both personas are P0, and giving Lucas a smaller card would signal that the team thinks of him as secondary.
- **Tabs / segmented control** (Revolut Personal/Business in the nav). Reject — too app-like, too "we have two products"; the brief is one product, two audiences.

The bifurcation card is not a button. It is a **commitment surface**: clicking it should expand context, not navigate. The visitor should see the form they're committing to before they commit. Notion's homepage segmentation (when present) does this well — the segmented region morphs in place rather than scrolling away. For TGA, the proprietário-capture and investidor-capture sections should sit *under* the cards in DOM order so a click smooth-scrolls + visually highlights the relevant section, with the other section staying visible as context.

## The Vision Arc (horizon, not roadmap)

Showing a multi-phase plan without overcommitting is a known UX problem. The standard SaaS roadmap UI (Gantt, percent-complete bars, dated quarters) is exactly wrong for a pre-PMF protocol — it broadcasts confidence the team doesn't have and paints the team into a corner.

The patterns that survive a pivot:

- **Now / Next / Later columns** (ProdPad, Linear's public roadmap, Productboard's recommendation). Three columns, no dates. TGA's four phases (Agora · Próximo · Depois · Horizonte) are this pattern stretched to four. The fourth phase (Horizonte) is explicitly "we don't know when, we know it's coming" — and that's a feature.
- **Mono numerals as horizon markers** (`01 → 02 → 03 → 04`). Replace dates entirely. The reader gets sequence without commitment. This is the dominant pattern in editorial annual reports and is exactly what the brand contract calls for.
- **A single 1px amber rule connecting the phases.** The visual story is "these are connected, in order". No bar chart, no timeline scale. The Bauhaus/Mies references in the mood board (`19fbb9670e62…jpg`, `3a55038d30…jpg`) are the right reference: typographic markers anchored to a single architectural line.
- **"We're here" indicator: omit.** The temptation is a filled dot or amber underline on phase 01 ("Agora"). Resist. The arc reads as horizon if all four phases are equally articulated; it reads as roadmap the moment one is highlighted as "current". The brief explicitly forbids this and the brief is right.

Linear's public roadmap (`linear.app/method`) is the closest live reference — large headers per phase, prose under each, no dates inside the phases themselves, and the page reads as a *philosophy*, not a release schedule.

## Waitlist Form with Audience Tag

Three approaches in the wild; only one fits TGA:

- **Single form, role as radio cards under the email.** Mercury's early waitlist did this. One email field, four to six role chips (Founder / Engineer / Other), submit returns a personalized confirmation. Pro: lowest friction. Con: the role looks optional, so segmentation data is dirty.
- **Two separate forms, audience pre-selected by which one you click.** Superhuman's waitlist (and the TGA brief's chosen path). Pro: the segmentation is clean — the form can't be filled wrong. The form copy is persona-tuned. Con: more DOM, more layout work.
- **Multi-step form** (email → role → confirm). Reject. Each extra step drops conversion ~10–15% per industry waitlist data; for a vision-capture surface where the email is the only thing that matters, this is over-engineered.

The TGA brief's two-form approach is correct — and the per-front variant (Imobiliárias light vs Investidor dark) is what makes it feel less like "two forms" and more like "two doors into the same house". Critical UX details:

- **Three sentences before the input, not after.** The visitor needs to know what they're signing up for *before* their cursor hits the field. The investidor variant gets mecânica + onchain transparency + arquitetura. The proprietário variant gets outcome language only — what arrives, when, and what they don't have to do.
- **One field, one button.** No name field. No phone. No company. Email + audience tag (implicit from which form) + locale. Anything else costs conversion and gives the team data they can't act on at this stage.
- **Honeypot, not CAPTCHA.** A visible CAPTCHA wrecks the brutalist aesthetic and adds vendor weight. A hidden honeypot field server-side is invisible to the user, kills 90%+ of bot traffic, and is the dominant pattern across modern Next.js form patterns (see `technical-research.md`).
- **Confirmation: anti-celebration.** Mercury's confirmation reads like a receipt, not a champagne pop. Plain text, mono, "recebido — `email@…` — você está na lista de proprietários". No confetti, no exclamation marks, no auto-redirect. The brand voice ("autoridade calma") demands it.

## Editorial Asymmetry as a Layout Discipline

The Bauhaus references in the mood board and the Bloomberg Terminal north star both point to a layout grammar that's underused on SaaS landings: **intentional asymmetry around a strict grid**.

The mechanic: a 12-column grid (the canonical broadsheet width), large headline anchored to a corner (typically left, top of section), small data or annotation in the diagonal corner. The `screen.png` prototype already does this in the "R$1,29 bilhão em garantias locatícias estagnadas" section — left 4-col headline, right 8-col stats grid. Carry this rhythm through every section:

- **Hero:** headline left-anchored, mono kicker top-left, manifesto under, CTA bottom-left. Right side empty, or a single architectural element (per Bauhaus refs, this is where the photographic asymmetry lives — but for TGA, the right side stays as canvas + dot grid).
- **The Gap:** headline left, three short diagnostic statements stacked right, each with a mono numeral.
- **Vision Arc:** mono `01 / 02 / 03 / 04` left-anchored across the row, Geist phase labels following horizontally on `lg+`, vertically on `<lg`.
- **Bifurcation:** the only centered moment in the page — and it's centered because it's the *fork*. After this, asymmetry resumes (proprietário block left-skewed for the light section, investidor block right-skewed for the dark return).
- **Team:** Draau and jubs share the row but at unequal widths — one gets 7 columns and a portrait, the other 5 columns and the track-record stack. Asymmetric on purpose.

The brand never-say "no centered text" survives if the bifurcation is the single deliberate centering moment. Make it the only one.

## Density vs Whitespace Rhythm

Bloomberg Terminal teaches density. Mies van der Rohe teaches whitespace. The landing needs both, and the rhythm matters more than the absolute density. The pattern:

- **Hero: low density, high whitespace.** Reader lands and breathes. One headline, one manifesto, one mono kicker, one CTA. 6–8 vertical rems of empty above the headline on `lg+`.
- **The Gap: medium density.** Three short diagnostic statements, each with a mono numeral. Reader is being told something specific but not yet being asked.
- **Vision Arc: medium density, horizontal.** Four phases sharing a row read as a sentence; same four phases stacked vertically read as a list. Sentence is right.
- **Bifurcation: low density.** Two cards, generous gap. The fork moment.
- **Capture forms: medium density.** Three sentences + form. The form is the only place a button lives in this section.
- **Team: low-medium density.** Two founders, room for portraits. Anti-anonymous means generous photo treatment, not thumbnail.
- **Footer: high density, mono.** Repos, judges link, social, locale toggle, legal. This is the only place where Bloomberg-Terminal density is correct — it reads as instrument-panel chrome, not marketing.

## Sources
- Flowjam, "Waitlist Landing Page Examples" — https://www.flowjam.com/blog/waitlist-landing-page-examples-10-high-converting-pre-launch-designs-how-to-build-yours
- LogRocket, "Linear design: The SaaS design trend" — https://blog.logrocket.com/ux-design/linear-design/
- Setproduct, "Vercel aesthetic: Blueprint Grid" — https://www.setproduct.com/blog/complete-guide-to-blueprint-grid-design
- Stripe Press — https://press.stripe.com/
- Mercury, "Mercury Personal launch" — https://mercury.com/blog/inside-mercury/mercury-personal-launch
- ProdPad, "How do I show time on a lean roadmap?" — https://www.prodpad.com/blog/how-do-i-show-time-on-a-lean-roadmap/
- ConvertFlow, "Audience Segmentation: Segment & Personalize" — https://www.convertflow.com/blog/audience-segmentation
- Search Engine Land, "2-Step Landing Pages" — https://searchengineland.com/segmenting-search-respondents-with-2-step-landing-pages-15472

## Related
- [scope.md](../brief/scope.md)
- [competitor-ux.md](./competitor-ux.md)
- [reference-specs.md](./reference-specs.md)
- [recommendations.md](./recommendations.md)
