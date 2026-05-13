# MUTAV — Pitch Deck

---

## Cover

**MUTAV**
The protocol that opens Brazil's $770M rental guarantee market to crypto investors — real asset, real yield.

*Seed stage · 2026*

---

## 01 · Problem

> "In 2025, QuintoCred — one of Brazil's largest rental guarantors — shut down overnight. 45,000 contracts cancelled. 3,000 agencies without coverage."

### 01 — Concentrated capital, systemic risk

Guarantors operate with their own isolated capital. When one fails, the entire market collapses.

- **QuintoCred — shut down (2025):** 45,000 contracts cancelled · 3,000 agencies left without coverage
- **CredPago — default (2025):** Payment delays · settlement failure across 16,000 agencies

For the agencies left exposed, there was no recourse and no timeline for resolution.

### 02 — Lack of transperency, slow settlement

When the guarantee is triggered, what follows are days of bureaucracy and little clarity around deadlines and required documentation. Meanwhile, tenants pay **10–15% per month** in fees, with no transparency regarding where that capital goes.

### 03 — A billion-reais asset class with no entry point

An investor watching BTG Pactual generate billion-reais profits in rental guarantees in under two years has no mechanism to replicate that exposure. Over **$770 million flows through rental guarantee premiums annually** in Brazil, and the sector is structurally closed to outside capital. No entry point.

---

## 02 · Solution

MUTAV opens the Brazilian rental guarantee market — distributing risk across a tokenized fund, automating settlement through smart contracts, and making real yield from rental contracts accessible to crypto investors.

| Problem | MUTAV's answer |
|---|---|
| Concentrated capital, systemic risk | Risk distributed across tokenized fund pools — no single-guarantor failure point |
| Lack of transperency, slow settlement | Smart contract Automation: Clear timelines, full transparency, and fast default settlement.|
| Market closed to investors | Tokenized RWA fund: any crypto investor enters from **$1K**, earning real yield from Brazilian rental contracts |

**Two operating fronts:**

| Front | Role |
|---|---|
| **B2B — Rent Guarantee** | Rental guarantee layer for real estate agencies — contracts registered and settled onchain |
| **B2C — Crypto Investors** | Tokenized RWA fund giving the crypto ecosystem direct access to rental guarantee premiums |

> The first onchain protocol operating in the Brazilian rental guarantee market.

---

## 03 · Traction

### Market validation

| Signal | Status |
|---|---|
| Agencies in active conversation | **30** |
| Agencies with signed letters of intent | **10** |
| Target region | Northern RS · SC coast |

### Product

- **MVP in active development** — smart contracts (Solana/Anchor) + agency dashboard + investor dashboard

### Distribution advantage

**B2C — Crypto investors**
- **Chainless (Julia Buratto)** — launched 2023 · **0 → 30,000 crypto-native users** · still running
  30,000 crypto-native users = MUTAV's target B2C investor base, already reachable at zero CAC

**B2B — Real estate agencies**
- **Advisor network** — 30 years in the Southern Brazil rental market
  Direct relationships across RS and SC — the source behind 30 active conversations and 10 signed LOIs

---

## 04 · Market

### Market size

| Layer | Value | Notes |
|---|---|---|
| **TAM** — total paid rental guarantee premiums | **$770M/year** | Rental Insurance $385M + Digital Guarantees ~$385M · SUSEP 2025 |
| **SAM** — digital guarantee market (garantias onerosas) | **$304M/year** | 21% of 17.8M contracts · growing +254% since 2020 · ABMI |
| **SOM** — MUTAV Phase 1 target | **$1.5M/year** | ~5,000 contracts · Southern Brazil pilot |

> **17.8 million** Brazilian households renting (2024, +54% vs 2016) · **74,000** active real estate agencies · **650,000** registered brokers. Paid guarantees now represent **49% of all rental contracts** — already surpassing the traditional guarantor figure for the first time.

### Market signals

The sector is undergoing rapid consolidation and tech investment — validating the opportunity:

- **Paid guarantees overtook the guarantor** — from 18% (2020) to 49% (2024) of all contracts · +254% in 4 years · ABMI
- **Default rate rising** — 3.8% in 2025 (vs 3.14% in 2024) · increasing pressure on guarantee demand · Superlógica
- **CredAluga** — fintech raised US$ 5M from Grupo OLX · 30K active contracts · +200% growth in 2024
- **BTG Pactual** — billion-dollar profit in under 2 years operating in the guarantee sector
- **CredPago / Grupo Loft** — acquired for over $200M · 16k agencies · $8.1B in assets

MUTAV brings what none of these players have: onchain infrastructure and open investor participation.

---

## 05 · How It Works

### 01 — Agencies connect via dashboard

Each real estate agency joins the protocol through a dedicated dashboard and receives an **individual smart contract**. Tenant and landlord contracts are registered inside it.

- Agency → Smart Contract → Protocol
- Each contract registered onchain
- Non-custodial — funds held in smart contracts · multisig admin

### 02 — Risk engine: scoring and fund grouping

Every contract receives a **risk score**. The agency's score is the weighted average of all active contracts. The protocol groups agencies into risk-tiered funds — enabling granular risk management at scale.

| Fund | Profile |
|---|---|
| 🔴 High risk | Agencies with elevated default history |
| 🟡 Medium risk | Mixed portfolio agencies |
| 🟢 Low risk | Consistent performing agencies |

### 03 — Investors allocate capital and earn yield

The investor accesses the dashboard, browses available funds by risk tier, and allocates capital freely. The protocol handles risk at the protocol level — the investor controls their own exposure and return profile.

| Risk | Return |
|---|---|
| High | ↑ Higher yield |
| Medium | → Balanced yield |
| Low | ↓ Stable yield |

**Fund mechanics:**
- New deposits enter at current NAV — existing holders not diluted
- Yield accrues automatically to all positions, no action required
- KYC required · no minimum lockup · 2.5% weekly redemption cap · onchain queue

### Settlement flow

**B2B:** Tenant / Landlord → Rental Agency → Agency Dashboard ⇄ **MUTAV Protocol**

**B2C:** Crypto Investor → Investor Dashboard ⇄ **MUTAV Protocol**

**Result:** Default settlement from 60 days (manual) to **10 days** via automated onchain execution.

---

## 06 · Business Model

**B2B2C model:** the B2B side integrates real estate agencies as guarantee infrastructure; the B2C side operates as an RWA fund tokenization protocol.

### Revenue streams

| Stream | Mechanics |
|---|---|
| **Fee spread** | MUTAV retains **20% of the tenant's existing guarantee fee** as protocol spread — remainder allocated to the fund as yield |
| **Management fee** | **[X]%** annually on AUM (MUTAV SA) |
| **Redemption fee** | **0.25%** charged on investor withdrawals |
| **NAV appreciation** | Value accrues to all fund positions via fees + collateral yield |

### Unit economics (Phase 1 illustration)

| Variable | Value |
|---|---|
| Average tenant guarantee fee | **$25/month** per contract ($304/year) |
| MUTAV's 20% protocol spread | **$5/month** per contract ($61/year) |
| Investor fund yield (80%) | **$20/month** per contract ($243/year) allocated as fund yield |
| Agency with 50 contracts | $3,043/year in fees → $609 to MUTAV · **$2,434/year to the fund** |
| 20 agencies at full pilot | 1,000 contracts → $61K/year to MUTAV · **$243K/year to investors** |

### Conservative projection (Phase 1 ceiling)

- Base market: **$304M/year** digital guarantees (SAM)
- Phase 1 target: **~5,000 contracts** · Southern Brazil pilot → **$1.5M/year in guarantee fees**
- Protocol spread: **20% of guarantee fees** → **$300K/year to MUTAV**
- Investor fund yield: **80% of guarantee fees** → **$1.2M/year distributed to the fund**

> Total guarantee flow at Phase 1 target: **$1.5M/year** — $300K protocol revenue + $1.2M investor yield.
> Excludes management fee, redemption fee, and NAV appreciation.

---

## 07 · Team

### Matheus "Draau" de Pauli — CEO · Project Manager · Web3 Builder

5+ years building products at the intersection of technology, brand, and market. Multidisciplinary team coordination and blockchain product development. Co-founder of No Bloco — inserting creative professionals into the Web3 ecosystem. Direct exposure to the Southern Brazil real estate network gave him the first look at the rental guarantee gap.

### Julia Hoffmann Buratto — CTO · Design Engineer · Architect (UFSC)

Founder of jubs.studio. Launched Chainless in 2023 — from zero to **30,000 users**, still running. Works at the intersection of systems architecture, UX, and onchain infrastructure, with experience in fintech and Web3 products.

### Lucas Oliveira — Blockchain Engineer · Cryptographer

5+ years in blockchain product development — design, architecture, security auditing, and mainnet deployment. Head of Education at Nearx, leading Web3 and AI education in Latin America. Former Blockchain Engineer at Clearsale. Mathematics degree · Berkeley Blockchain certification.

### Advisor

**Cinara Bigóis — Real Estate Market Advisor**
30 years of experience in the Brazilian rental market. Active real estate broker · [CRECI-XX]. Direct access to agencies, pilots, and early adoption network in Southern Brazil.

### Why this team

Three complementary builders — product, design-engineering, and blockchain — with a proven execution track record and direct domain access through an embedded real estate advisor. Julia's 30,000-user product and Lucas's mainnet deployments prove this team ships. Cinara's network is what gets the first 10 agencies to production.

---

## 08 · Financials

### Phase 1 milestones — 12-month trajectory

| Milestone | Target |
|---|---|
| MVP launch · first agencies onboarded | Month [X] |
| 5 agencies live · first contracts onchain | Month [X] |
| 15 agencies active · first AUM deployed | Month [X] |
| 25–30 agencies · $[X]M AUM | Month [X] |
| Phase 2 trigger: contracts + AUM threshold + sustained operation | Month [X] |

### Revenue trajectory (fee spread only)

| Active agencies | Avg contracts/agency | Annual spread revenue |
|---|---|---|
| 5 | 50 | $15K |
| 15 | 50 | $45K |
| 30 | 50 | $90K |
| Phase 1 target (~5,000 contracts) | — | **$300K** |

### Current state

- AUM deployed: pre-launch
- Burn rate: [$/month]
- Runway: [months]

---

## 09 · Ask

### We are raising

> **[$X]** via **[SAFE / equity / grant / acceleration program]**

### Use of funds

| Allocation | Purpose |
|---|---|
| **[X]%** | Product — MVP to production-ready |
| **[X]%** | Operations — agency onboarding, legal, CVM registration |
| **[X]%** | Growth — investor community, agency acquisition beyond pilot |

### What this capital unlocks

- **30 agencies onboarded** — from 10 signed LOIs to live contracts
- **$[X]M in AUM** deployed
- **CVM registration** completed — required for fund operation at scale
- **Phase 2 trigger** reached — institutional investors + DeFi collateral integration
