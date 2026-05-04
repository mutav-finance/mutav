# Competitor UX
> Phase: research | Project: landing | Generated: 2026-05-02

The brand-level competitive audit (CredPago, QuintoCred, Ondo, Maple, Centrifuge) has already been done. This chunk goes one level deeper: **what specific interactions do these and adjacent landing pages run** — and what do those interactions teach the TGA landing about hero structure, capture forms, vision presentation, and credibility cues. Where a competitor's site is paywalled or behind auth, I describe the public marketing surface only.

## Maple Finance — institutional DeFi above the fold

Maple's marketing site (maple.finance) is the closest live reference for "institutional onchain credibility on a single dark surface". Hero structure as of May 2026:

- Single declaration: *"Secure, expert-led financial products for individuals and institutions"* — institutional + retail in one sentence, no bifurcation upfront.
- Live AUM counter in the hero (mono numerals, tabular). Even when the value renders as `$0.00` during a partial fetch, the slot is reserved — the Bloomberg-style data ribbon is part of the promise.
- "Trusted By" bar with named partners (BlackRock, Bitwise reference appearances) — this is the **named-counterparty** credibility move that the Brazilian rental insurance space has *zero* examples of.
- Primary CTA "Earn Now" → app. No secondary in the hero. A "Contact Us" appears top-right for the borrower side.
- No tabbed nav for "I'm a lender / I'm a borrower" — instead a dropdown under "Earn" reveals product strands. Maple lets the visitor scroll past the hero before splitting paths.

**TGA takeaway:** Maple shows that you can serve two audiences (yield-seekers and borrowers) with one hero if the headline is category-level. The mistake to avoid is putting an APY in the hero — Maple does this and it dates the page hourly. TGA's brand never-say "APY garantido" is correct; if numbers belong above the fold, they should be category-scale (R$1,29bi market size, not 8.4% yield).

## Ondo Finance — the "boring is the point" hero

Ondo's marketing pages (ondo.finance) read flatter than Maple — softer typography, more whitespace, less terminal energy. The deliberate calm-financial-product aesthetic. Hero structure:

- Headline frames *category* ("Tokenized real-world assets"), not product mechanics.
- Compliance-first language above the fold — "regulated", "broker-dealer", "SPV". The reader is told this is for institutions before they ask.
- Proof of reserves and audit links live in the footer or a dedicated `/security` page, not above the fold. Ondo bets that the institutional reader will dig; the casual reader doesn't need the receipts upfront.
- Conversion is a "Get in touch" form, not a wallet connect. The marketing page is intake, not onboarding.

**TGA takeaway:** Ondo's restraint is a permission slip for the TGA hero to *not* show numbers. The institutional reader will go look. The signal of seriousness is the *availability* of receipts (footer links to repos, audit reports), not the prominence of them.

## Centrifuge — RWA tokenization with a Solana wing

Centrifuge (centrifuge.io) has a denser hero — multiple surfaces, news ribbon, partner logos, TVL above the fold. As of late 2025 they have a Solana-launched product (the $400M Treasury fund expansion) but the marketing site treats Solana as one of several rails.

- Hero shows TVL prominently (real, current, mono numerals — tabular). This is the single most-effective trust cue institutional-leaning DeFi sites deploy. The number does the work of three paragraphs of copy.
- Audience routing is two big cards halfway down: "For Issuers" and "For Investors". Each card is a stub (one paragraph) with a `/learn-more` route. Centrifuge accepts the route, accepts the page split.
- Audit links are in the nav under "Resources", not the hero.

**TGA takeaway:** Centrifuge models the bifurcation cards pattern well — but they route, which TGA explicitly should not. Take Centrifuge's *typography* of the cards (mono label, large persona claim, body sub-line) and replace the route with an in-page expand.

## Linear (current marketing) — editorial confidence

Linear (linear.app) is the dominant aesthetic reference for serious-but-warm SaaS marketing. As of 2025–2026, Linear's homepage:

- Hero is a single Geist-Bold headline, tight tracking, single sentence, single CTA "Sign up".
- Animated product screenshot below — **but only because the product is real.** TGA cannot fake this and shouldn't try; the brief's "no faux-product screenshots" intuition is right.
- Method page (linear.app/method) is the canonical "publish your philosophy" pattern. TGA's vision arc is the same energy at a smaller scale. Linear's method page has no dates, no roadmap UI, no progress bars — just numbered chapters with prose. Same model.
- No bifurcation. Linear treats "engineer" and "PM" as a unified audience. TGA can't do this; the personas are too different.

**TGA takeaway:** Linear's monastery-level discipline ("we say what we mean, we don't decorate") is the voice TGA wants. The mistake to avoid: copying Linear's *interaction density* (animated cards, hover reveals) without the product to back it up. The brand contract's "150ms color/border transitions only" is exactly right — Linear earns its motion because the motion shows real product behavior.

## Mercury (early) — the personalized confirmation

Mercury (mercury.com) is the strongest model for the **post-signup confirmation experience**, which is where most waitlist landings stop thinking. The early-Mercury pattern:

- Single email field on a clean, terminal-ish page (Mercury's brand has more warmth than TGA's, but the structural restraint is similar).
- Submit → confirmation is a *page*, not a toast. Server-rendered with the email visible, the role/audience repeated back, and "next: we will email you when X". This is the receipts-over-promises move done in the conversion mechanic itself.
- No referral mechanic, no "share for early access". Mercury is too institutional to gamify the waitlist. TGA should follow.

**TGA takeaway:** Build the confirmation surface as a real page (or a real in-place state), not a toast. Echo back what was captured: email, segment ("você entrou na lista de proprietários"), locale. The mono on the email value is the receipts gesture.

## Plain.com — brutalist B2B marketing

Plain (plain.com) is the closest aesthetic peer to the TGA visual contract on a non-financial product. Black background, sharp corners, mono accents, large Geist-class headline, single accent color (Plain uses purple-to-pink, TGA uses amber).

- Hero is one declarative sentence, no animation, no screenshot above the fold.
- The whole page reads as a single voice, no audience split. Plain has one buyer (B2B support team).
- Pricing and changelog are linked in the nav as proof of continuity — a small gesture, but it signals "this is a real company shipping real things".

**TGA takeaway:** Plain shows that the brutalist contract doesn't need rescue. The amber-scarcity rule (<5% of pixels) holds across Plain's site too — the accent color appears only at CTAs, charts, and one or two highlight moments. Audit the TGA design at this discipline level.

## Stripe (current) — multi-audience without bifurcation

Stripe (stripe.com) serves dozens of personas. They never put a "Are you a developer or a founder?" gate on the homepage. Instead:

- Hero is product-class neutral ("Financial infrastructure for the internet").
- Below the fold, the page becomes a tour through products. Each product card is a self-contained story — mono code snippet for devs, business-outcome copy for founders, and an icon for everyone.
- Audience-specific marketing lives at `/payments`, `/billing`, `/atlas`, etc. — *deep* pages, reachable via global nav, never via homepage routing.

**TGA takeaway:** TGA is not Stripe — the personas are too different to share a single headline naturally. *But* Stripe's principle of "the homepage is for category, the deep pages are for personas" is the right mental model for TGA's bifurcation: the bifurcation cards are TGA's version of "deep persona pages, but inline".

## Vercel — the grid + mono aesthetic at marketing scale

Vercel (vercel.com) is the most-cited reference for the TGA visual language. Pure black/white palette, Geist Sans + Geist Mono, near-zero radius on marketing surfaces, subtle dot-grid background.

- Hero typography: Geist Bold ~64px on lg+, `-0.04em` letter-spacing, `1.15` line-height. This is the same setup the TGA brand contract specifies.
- The accent color (a near-imperceptible cyan/blue) appears only at links and one logo callout per fold. Tighter scarcity than the brand's <5% even.
- No live counter, no AUM. Vercel is selling infrastructure, not capital, so the "data ribbon" pattern doesn't apply.

**TGA takeaway:** Vercel proves the aesthetic works at marketing scale without becoming cold. Warmth comes from spacing rhythm and copy voice, not from softening the visual language.

## Brazilian rental incumbents — the absence of credibility cues

CredPago (credpago.com.br), QuintoCred (already shut down), Garantia Investe (Loft) — across these, the absence is striking:

- **No founder names** above the fold or in any obvious place.
- **No verifiable disbursement record** — no public dashboard of "X repasses pagos em Y horas".
- **Marketing photography of smiling families** — the genre of sentimental Brazilian fintech that Lucas (45–55) has learned to discount.
- **Generic "fale com um especialista" CTAs** that route to phone forms. No clarity on who you're actually talking to.

**TGA takeaway:** Every gap in the incumbent surface is a TGA opportunity. The *team* section with Draau + jubs (real faces, named) is more competitively differentiating than any feature copy could be. The mono `[ verifique no github ]` link in the footer is more credibility than any incumbent shows. The category never names a competitor — but the visual and structural choices read as anti-everything-else by being concretely the opposite.

## Robinhood / Clubhouse / Superhuman — referral mechanics (reject)

These three are the canonical "viral waitlist" references and they are wrong for TGA. Robinhood's "skip the line" mechanic is gambling psychology applied to fintech onboarding; it works for retail consumers and is the exact wrong tone for a 50-year-old proprietário who's been burned. Clubhouse's invite-only mechanic was hype-economy fuel that aged poorly. Superhuman's "we'll review your application" was high-status filtering — also tonally wrong for TGA's "autoridade calma" voice.

**TGA takeaway:** No referral counter, no "share for priority", no leaderboard. The waitlist is a list — flat, segmented, finite. Conversion comes from the manifesto, not from gamification.

## Sources
- Maple Finance — https://maple.finance/ (analyzed live, May 2026)
- Ondo Finance — https://ondo.finance/
- Centrifuge — https://centrifuge.io/
- Linear method — https://linear.app/method
- Mercury — https://mercury.com/blog/inside-mercury/mercury-personal-launch
- Plain — https://plain.com/
- Vercel design — https://vercel.com/design/guidelines
- InfoMoney, "Encerramento do QuintoCred" — https://www.infomoney.com.br/minhas-financas/encerramento-do-quintocred-expoe-fragilidade-no-mercado-de-garantia-locaticia/
- Mercado Comum, "QuintoCred encerramento" — https://mercadocomum.com/quintocred-encerramento-pelo-quintoandar-expoe-milhares-de-locadores-a-risco-de-prejuizos/

## Related
- [scope.md](../brief/scope.md)
- [ux-patterns.md](./ux-patterns.md)
- [content-strategy.md](./content-strategy.md)
