# Jury Evaluation — Baseline

**Date:** 2026-04-10
**Evaluator:** JURY.md adversarial review
**Status:** Baseline — pre-improvement

---

## Scores

| Dimension | Weight | Score (1–5) | Weighted |
|-----------|--------|-------------|---------|
| Clarity & Positioning | 15% | 2 | 0.30 |
| Market Research | 10% | 4 | 0.40 |
| User Discovery | 10% | 1 | 0.10 |
| Product Focus | 10% | 2 | 0.20 |
| Unit Economics | 15% | 2 | 0.30 |
| Moat & Distribution | 15% | 2 | 0.30 |
| VC Fit (Colosseum lens) | 15% | 3 | 0.45 |
| Execution Quality | 10% | 1 | 0.10 |
| **Total** | 100% | | **2.25 / 5** |

---

## Verdicts

### 1. Clarity & Positioning — WEAK (2/5)
- 10-word test fails. Hero copy requires knowing what a garantia locatícia is.
- No web2 analogy defined anywhere in the docs.
- Suggested 10-word framing: "Solana-based rent default insurance fund for Brazil."
- Suggested analogy: "Think of TGA as Maple Finance but the underlying asset is Brazilian rent guarantees."
- Missing: positioning vs. Centrifuge, Goldfinch, Nexo, Maple (RWA yield funds).

### 2. Market Research — STRONG (4/5)
- Sourced market numbers, real failure events (QuintoCred, CredPago 2025), CredPago/BTG exit case study.
- Colosseum Copilot benchmark shows no direct competitors on Solana.
- Gap: no positioning against existing RWA protocols (Centrifuge, Goldfinch, Maple).
- Cluster crowdedness 204 (real estate tokenization) not addressed.

### 3. User Discovery — WEAK (1/5)
- One unnamed real estate contact mentioned ("30+ years experience").
- No imobiliária conversations documented.
- No landlord or tenant quotes.
- No pilot interest from any garantidora.
- No public signal (tweet, post) testing the idea.

### 4. Product Focus — WEAK (2/5)
- Four ideas in the docs simultaneously: SGR Core, TGA, Score On-chain, Property Tokenization.
- Pitch oscillates between B2B infrastructure (SGR) and B2C investment fund (TGA).
- Recommendation: TGA as the ONE submission product. SGR becomes the technical substrate.

### 5. Unit Economics — NEEDS WORK (2/5)
- Math is correct: 20% × R$300M × 2% = R$1.2M/year.
- 20% penetration assumption is completely undefended for a hackathon-stage team.
- Critical gap: TGA is a CVM-regulated investment fund. Pooling capital + issuing tokens + NAV appreciation = Brazilian SEC jurisdiction. Not mentioned once in the whitepaper.
- This is the single biggest dealbreaker for any serious investor.

### 6. Moat & Distribution — WEAK (2/5)
- Only moat is timing ("first on Solana"). Not structural.
- No signed LOIs, no pilots, no imobiliária partnerships.
- No proprietary data, no regulatory head start, no AUM.
- Path to real moats identified: distribution (imobiliária LOIs), data (payment history), regulatory (CVM sandbox).

### 7. VC Fit — NEEDS WORK (3/5)
- Conviction is genuine — market is real, pain is documented, team has relevant context.
- Gap: no Rust/Anchor dev on the team for a Solana hackathon.
- "Team will be expanded" is not a credible answer at submission.
- CredPago exit story is the best asset in the deck — use it harder.

### 8. Execution Quality — WEAK (1/5)
- No public repo.
- No landing page.
- No prototype or demo.
- No video.
- Deck captured from Google Slides, not submission-ready.
- Whitepaper in Portuguese only.

---

## Top Three Leverage Points

1. **Pick TGA as the ONE product.** Drop SGR from the hero. Every artifact — slides, landing page, tweets — should be about TGA. SGR is the technical layer, not the story.

2. **Get a CVM regulatory answer on paper.** Even "we spoke to a fintech lawyer and are targeting CVM sandbox via Resolução CVM 175" beats silence. This is the dealbreaker question.

3. **One imobiliária on record for a pilot.** One email, one quote, one LOI. Moves from "interesting idea" to "early traction."

---

## Re-evaluation Checklist

Use this to track improvements before the next review:

- [ ] Hero copy passes the 10-word test
- [ ] Web2 analogy defined and used consistently
- [ ] RWA protocol comparison addressed (Centrifuge, Maple, Goldfinch)
- [ ] At least 3 user conversations documented
- [ ] At least 1 imobiliária with pilot interest (email/quote/LOI)
- [ ] Product narrowed to TGA only in submission materials
- [ ] CVM regulatory position documented
- [ ] Unit economics include defended penetration timeline
- [ ] Rust/Anchor dev identified or hired
- [ ] Public repo with skeleton Anchor program
- [ ] Live landing page
- [ ] 2-minute demo video (Loom)
- [ ] English 1-pager
