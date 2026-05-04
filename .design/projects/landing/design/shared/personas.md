# Personas
> Phase: design · Project: landing · 2026-05-02

Two primary personas. The page does not route them — it lets them self-segment. Both must read the entire narrative spine (hero → the-gap → vision-arc) before they reach the bifurcation moment. The capture forms speak each persona's language.

---

## Lucas — Proprietário / Imobiliária

**Demographics**
- Age 45–55, São Paulo / Curitiba / Porto Alegre / Belo Horizonte / Florianópolis
- Owns 1–6 apartments rented to third parties, or runs a small/mid imobiliária managing 30–200 contracts
- Middle-class professional; reads in pt-BR; English is functional, not preferred
- Device usage: ~60% mobile (iPhone or mid-tier Android), ~40% desktop. Reads on the bus, validates on the laptop

**Goals**
- Receive the rental payment on time, every month, without intermediation
- Avoid the formulário-fila-cartório bureaucracy when something goes wrong
- Have a credible alternative to traditional garantidoras after the QuintoCred shutdown (Aug 2025) and the CredPago disbursement-delay episode

**Pain points**
- 60-day waits on disbursements after default — *o repasse pode esperar 60 dias, mas o aluguel não pode*
- Opacity: when a garantidora trips, he has no visibility into where his money sits
- Was told "rental insurance is solved" for years, just learned it isn't
- Allergic to jargon — "blockchain", "wallet", "smart contract", "DeFi" all read as either irrelevance or red flag

**Usage context**
- Lands on the page from a referral, a Twitter mention, or a Google search ("alternativa quintocred", "garantia locatícia onchain" — though he doesn't know what "onchain" means)
- Reads on mobile during commute, returns to desktop in the evening to fill the form
- Will not log in. Will not connect a wallet. Will leave an email if the page reads true

**What this persona needs from the design**
- Plain language. Outcome before mechanism. *"Quando o inquilino atrasa, você recebe."*
- A surface that looks like serious infrastructure, not a hackathon project — but warm enough that he doesn't feel like he's being talked at by a protocol
- Real founder names and faces — anti-anonymous is a credibility cue against the entire incumbent surface
- An obvious commitment surface at the fork. The proprietário card is left, the form light. Familiar light surface, amber CTA, `[ avise-me ]`

---

## Ana — Investidora cripto-nativa

**Demographics**
- Age 25–35, São Paulo / Rio / Florianópolis / abroad (Brazilian diaspora)
- DeFi-native, has held tokens on Solana, has read Maple / Centrifuge / Ondo docs
- Reads in pt-BR or en interchangeably
- Device usage: ~70% desktop, ~30% mobile. Validates protocols at her workstation

**Goals**
- Find a Brazil-specific RWA opportunity with verifiable architecture
- Evaluate the team, the code, and the on-chain mechanics before committing attention
- Follow the build through GitHub + Twitter + waitlist — wants to be in the room when the protocol opens

**Pain points**
- Brazilian DeFi surface is thin and largely speculative; very few protocols address real local cash flows
- Hackathon-aesthetic landings are an instant credibility kill. So is anonymous teams
- Wants verifiability ("show me the contract") not reassurance ("trust us")

**Usage context**
- Lands from Twitter, Superteam Brasil, Colosseum Frontier, or a direct search ("garantia locatícia onchain", "RWA Solana Brazil")
- Reads quickly. If the hero passes the "would I stop scrolling?" test, she scrolls; if not, she leaves in 8 seconds
- Will follow the GitHub link before she submits the email. The email submission is the second act, after she has verified the architecture

**What this persona needs from the design**
- A hero that signals seriousness without overpromising — category claim, not feature claim
- A vision arc that reads as horizon, not roadmap. Dates would be a red flag
- Mecânica + onchain transparency + arquitetura in the investidor-capture form
- A footer with `github.com/tga-protocol` and the verifiability link `[ verifique a arquitetura → ]` — the trust mechanic for her is the link to the code, not a paragraph

---

## Cross-persona shared rhythm

Both personas read the same hero, the same gap, the same vision arc. The bifurcation is the only point at which the page acknowledges they're different. Until that moment, both are being addressed by a single voice — *autoridade calma* — that names the category problem without overcommitting to a specific feature.

After the bifurcation, the page splits visually (dark for Ana, light for Lucas) and linguistically (mecânica vs. outcome) but stays under one URL, one scroll, one brand contract.

## Related
- [information-architecture.md](./information-architecture.md)
- [navigation.md](./navigation.md)
- [../screen-05-bifurcation.md](../screen-05-bifurcation.md)
- [../screen-06-proprietario-capture.md](../screen-06-proprietario-capture.md)
- [../screen-07-investidor-capture.md](../screen-07-investidor-capture.md)
