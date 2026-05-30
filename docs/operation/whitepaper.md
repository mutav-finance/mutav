# Whitepaper — MUTAV

# MUTAV — Tokenization of Rental Guarantees

## 1. Overview

Brazil's rental market moves billions annually, sustained by a broad real estate ecosystem with millions of active contracts and growing demand for alternatives to the traditional personal guarantor. Despite its scale, this market still operates with low efficiency, manual processes, and capital concentrated in a few players — limiting access, transparency, and innovation.

MUTAV addresses this by applying blockchain infrastructure to transform how rental guarantees are structured, financed, and executed. By connecting onchain infrastructure to an underexplored local market, the model reduces operational friction, improves risk management, and creates a new asset class based on real economic cash flows.

MUTAV operates as **onchain rental guarantee infrastructure**, opening access to a billion-dollar market today concentrated in a few participants and building the foundation for a more efficient, transparent, and scalable financial layer.

The paid rental guarantee market generates **$1.1B/year (TAM)**, with an addressable digital segment of **$700M/year (SAM)**. Brazil has **17.8 million rented households in 2024**, growing 44.7% since 2016. Paid guarantees jumped from 18% to **49% of all contracts** between 2020 and 2024 (+254%), surpassing the personal guarantor as the dominant modality.

Key market data:

- Real estate ecosystem (COFECI): Brazil's agency segment moves **R$110 billion ($22B) annually**
- Jan–Nov 2024 (CQCS): Surety insurance collected **R$1.29 billion in premiums** in the first 11 months of 2024
- Brazilians paying rent reached **46.5 million in 2024**, a historic record
- The digital rental guarantee market moves approximately **R$300 million/year (~$60M)**, still early-stage but expanding amid rising defaults
- Loft/CredPago acquisition data: at the time of acquisition (July 2021), CredPago had 123,000+ contracts, **R$40 billion ($8B) in assets under guarantee**, 16,000 agency partners, and 145,000 end clients. The company had grown 10x in three years. BTG Pactual's investment returned **R$1.4 billion (~$280M) in under two years**
- Loft recorded 1.2 million transactions in 2025, grew 35%, and **plans to invest R$100 million ($20M) in technology in 2026**, with focus on mortgage credit, **rental guarantees**, and SaaS

---

## 2. The Problem

The capital backing rental guarantees today is highly **concentrated**. Guarantors operate with their own capital, price risk asymmetrically, and capture the entire return — with no transparency, no external participation, and limited structural competition.

This creates four distortions:

- **For the market:** risk concentration in a few players. When one fails — as seen in 2025 when QuintoCred (one of Brazil's largest guarantors) shut down overnight, canceling **45,000 contracts** and leaving **3,000 agencies** without coverage — there is no efficient collective absorption mechanism
- **For tenants:** oligopoly pricing with high costs (10–15% of rent)
- **For landlords:** slow default settlement (up to 90 days)
- **For investors:** a multi-billion market in annual fees remains inaccessible to individuals and the crypto ecosystem

The real estate agency is the operational center of each contract — and traditional guarantors have never treated them as partners. MUTAV is different: the protocol is built around how agencies actually operate, not around them.

---

## 3. The Solution

MUTAV proposes opening the rental guarantee market so that any investor can participate in a sector historically restricted to a few players. Through tokenization, the capital backing these guarantees moves from concentrated to distributed — creating a more transparent, accessible, and efficient model where anyone can gain direct exposure to a billion-dollar market that was previously inaccessible.

MUTAV is structured as three distinct entities: **MUTAV Soluções** (Brazilian guarantor, operational), **Mutav Treasury Fund** (offshore fund, investment vehicle), and **Mutav Treasury Management** (offshore fund administrator).

MUTAV Soluções acts as institutional guarantor in rental contracts, retaining 20% of collected fees and passing 80% to the Mutav Treasury Fund. The fund issues three token classes — **MTVH** (subordinated, first-loss), **MTVM** (mezzanine), and **MTVL** (senior) — with reserves allocated in tokenized Brazilian Treasury bonds via Etherfuse (Stellar). Investors receive tokens of their chosen class proportional to the current token price, held in their own wallet (self-custodial).

The model is based on an **appreciating token price (NAV)**, where returns are not distributed as cash but incorporated into the fund. Revenue from guarantee fees and capital yield increases the total assets under management, reflected directly in each token's appreciation over time.

### Core Mechanism

MUTAV's operation follows a structured model based on mechanisms already consolidated in onchain protocols. The flow divides into three main stages: capital entry, yield generation, and exit.

**Entry (Mint):**

The investor deposits stablecoins into the protocol, which automatically calculates the current token price and issues the proportional number of tokens. Capital is then directed to the segregated account and begins backing the rental guarantee portfolio.

**Yield Generation:**

The fund's total yield comes from two sources: **fees paid by tenants** on active guarantee contracts (80% of fees passed by the Guarantor), and **yield from tokenized Brazilian Treasury bonds** via Etherfuse (Stellar), where fund reserves are allocated. This combined flow is continuously reintegrated into the fund, raising total assets and reflecting directly in token price appreciation over time.

Fund capital is structured in two layers:

- **Active layer:** allocated in tokenized Treasury (Etherfuse/Stellar), committed to backing active guarantee contracts and generating daily yield while not called upon
- **Liquidity layer:** portion available for redemptions within the weekly cap, also maintained in tokenized Treasury with programmable liquidation

**Exit (Redeem):**

To redeem, the investor deposits MUTAV tokens into the contract and enters an onchain queue. Execution occurs at the token price at the time of processing. The investor receives the corresponding amount in stablecoins, debited from the fund and reducing the token price proportionally for all participants.

Immediate liquidity is not by design, as part of the capital is committed to long-term contracts (12–24 months). The existing liquidity reserve allows gradual exits without compromising fund integrity.

---

### Technical Infrastructure

#### Token Price (NAV) Calculation and Update

The Mutav Treasury Fund's Net Asset Value is calculated purely onchain, executed directly in the smart contract without dependency on external services or offchain data feeds. Any participant can independently verify and reproduce the calculation. The token price updates **per event** — fee income, processed default payments, executed redemptions, and Treasury yield — ensuring each operation is immediately reflected in token value.

Each MUTAV token's value is determined by the ratio between total assets under management and tokens in circulation:

```
Token price = total_assets / tokens_issued
```

**New investor deposit:** when an investor deposits stablecoins, the protocol calculates the current token price and issues the proportional number of MUTAV tokens. The deposit simultaneously increases total assets and token count in the same proportion — the token price remains unchanged. A new investor does not subsidize others' exits or dilute existing holders: they enter at the fair price.

**Fee and yield income:** tenant fees and Treasury yield enter the fund without creating new tokens. Total assets grow while token count stays the same — the token price rises. Returns are automatically distributed among all holders proportionally to their position.

**Default:** when the protocol executes a guarantee, tokenized Treasury is liquidated at the default value without creating or destroying tokens. The impact follows the absorption cascade: **MTVH** (subordinated) token price falls first; only if MTVH is exhausted does the impact migrate to **MTVM** (mezzanine) and then **MTVL** (senior). This waterfall protects the lower-risk classes and concentrates exposure in higher-yield holders.

**Investor redemption:** to exit, the investor deposits MUTAV tokens into the contract. The protocol burns exactly the token quantity corresponding to the value redeemed at the current token price and returns the equivalent in stablecoins. Assets and tokens exit in the same proportion — other holders' token price is not affected. A 0.25% redemption fee applies.

**Investor risk:** risk varies by token class. MTVH holders take first-loss in exchange for higher yield; MTVL holders have lower default exposure and lower return. In any scenario, there is no structural entry or exit advantage between investors of the same class. If the default rate chronically exceeds fee revenue, the affected class's token price may fall below the entry price, resulting in capital loss. The 2.5% weekly AUM cap and the tokenized Treasury liquidity layer exist to give the fund time to absorb shocks without compromising operations.

#### Redemption Mechanism

MUTAV token redemption follows a structured model to preserve fund integrity:

- **KYC required:** redemption requires identity verification. No minimum lock-up period — any KYC-approved investor may request redemption at any time
- **2.5% weekly cap:** the protocol limits exits to 2.5% of total fund value per week. Requests exceeding this limit enter an onchain queue and are processed in the following week, in submission order
- **0.25% redemption fee:** charged on the withdrawn amount at time of execution
- **Execution price:** the token price applied is the one at the time the request is processed by the queue, not at the time of submission

Queued requests continue accumulating yield proportional to their position while waiting.

#### Programmable Liquidation — Default Flow

Guarantee execution in case of default follows a hybrid process, with detection by the agency and onchain execution:

1. The agency identifies the default and notifies the protocol via dashboard, providing validation data
2. The backend triggers the smart contract, which automatically verifies contract conditions — term, amounts, payment history
3. The contract returns pre-approval or rejection. If rejected, the agency receives guidance on what to correct
4. Pre-approved requests go through internal MUTAV team audit for final validation
5. After approval, liquidation is executed onchain and funds are directed to the agency for transfer to the landlord

#### Custody

Investor capital is held in **non-custodial** fashion — funds stay in onchain smart contracts, with no intermediary having access to assets. Critical administrative operations are protected by **multisig**, with signatories to be defined before launch.

#### Secondary Market

The secondary market for MUTAV tokens — a liquidity pool on a decentralized exchange for exits outside the redemption queue — is a feature planned for a phase after the initial launch. In MVP, the only exit path is redemption via the onchain queue.

---

### Token Class Structure and Waterfall

Risk management at the Mutav Treasury Fund is operationalized through three token classes with sequential loss absorption (waterfall).

**Level 1 — Individual contract scoring:**
Each registered guarantee contract receives a risk score calculated based on tenant data, payment history, and property profile. This score determines the fee charged to the tenant.

**Level 2 — Token classes:**
The fund issues three classes with distinct risk and return profiles:

| Class | Profile | Default absorption | Yield |
|---|---|---|---|
| **MTVH** (Subordinated) | First-loss — absorbs all defaults first | First | Highest |
| **MTVM** (Mezzanine) | Absorbs only if MTVH is exhausted | Second | Mid |
| **MTVL** (Senior) | Absorbs last | Third | Lowest, most stable |

MUTAV Soluções (the Guarantor) is a mandatory MTVH holder, aligning the group's incentives with portfolio quality — the Guarantor loses first on any default.

**Investor allocation:**
The investor accesses the dashboard, views available classes, and allocates according to their risk preference. MTVH offers higher potential return with higher exposure; MTVL offers stable return with structural protection.

---

### Risk Management

MUTAV's risk management operates on two complementary levels: at the contract level, via individual scoring that determines the fee and risk exposure; and at the fund level, via the three-class waterfall (MTVH → MTVM → MTVL), weekly redemption cap, and programmable liquidation mechanism. This combination allows the protocol to absorb default shocks without compromising fund integrity or other investors' positions.

---

### Benefits to Participants

The model aligns interests among all agents in the rental ecosystem:

- **Crypto-native investor** accesses the rental guarantee market via token price appreciation, with real estate exposure, crypto-uncorrelated returns, self-custody via their own wallet, and potential DeFi integrations
- **Institutional investor** gains access to a structured real-world asset (RWA) with full onchain transparency and auditability
- **Real estate agencies** gain operational efficiency and new revenue sources by integrating the tokenized guarantee model
- **Landlords** benefit from greater security and faster default settlement
- **Tenants** have easier access to rentals without restrictive traditional guarantees

---

## 4. Business Model

MUTAV operates as **hybrid B2B + B2C infrastructure** for the rental guarantee market. On the B2B side, the protocol integrates with agencies and sector operators responsible for contract origination, tenant onboarding, and guarantee registration. On the B2C side, investors access the system directly by depositing stablecoins and receiving MUTAV tokens.

The economic flow is sustained by real system revenue: **tenant fees** on guarantee contracts and **capital yield** from the tokenized Treasury. These returns are incorporated into the fund, generating token price appreciation.

Value capture by the protocol occurs through four mechanisms:

- **Fee split:** 20% of tenant fees stay with MUTAV Soluções; 80% pass to Mutav Treasury Fund
- **1% p.a. management fee** on Mutav Treasury Fund AUM, charged by Mutav Treasury Management
- **0.25% redemption fee** on the withdrawn amount at time of redemption
- **Return reflected in token price** — continuous appreciation via fees and tokenized Treasury yield

---

## 5. Go-to-Market

### Phase 1 — Pilot (Months 0–6)

**Real estate agencies — entry via existing network**

- Target: **20–30 agencies** — Litoral Norte (RS/SC)
- Access via network with **30+ years of experience** in the Sul rental market — the region with the lowest default rate in Brazil (**2.41%**), ideal for the pilot
- Pitch: operational automation + competitive fee structure for tenants and landlords
- Landlords and tenants acquired via partner agencies

**Investors — crypto-native, in parallel with pilot**

- Ticket: **$1K–$10K** retail crypto-native
- Seed capital: hackathon prizes + CMJ investment + founders' network
- Primary channel: **X (Twitter)** — organic reach + strategic network
- Narrative: the only onchain protocol with direct exposure to the Brazilian rental guarantee market

### Phase 2 — Scale (Months 6–18)

**Agencies**
- Cold outreach to new markets beyond the pilot region
- Pilot track record as proof of adoption for new agencies
- Less friction, more predictability, additional revenue source

**Investors**
- MUTAV as collateral in DeFi protocols (integration)
- Opening for institutional investors with KYC
- Scale narrative: Brazil has **74,000+ active agencies** and **650,000 registered brokers** — one of the largest real estate distribution networks in the world

---

## 6. Team

**Matheus "Draau" de Pauli** — Co-founder. Project Manager and Web3 builder with 5+ years of experience building and managing products at the intersection of technology, brand, and market. Coordinates multidisciplinary teams and develops blockchain solutions. Co-founder of **No Bloco**, an initiative inserting creative professionals into the Web3 ecosystem.

**Julia Hoffmann Buratto** — Co-founder, Design Engineer. Architect and urban planner (UFSC), MBA in Responsive Cities, founder of **jubs.studio**. Launched **Chainless** in 2023 — from zero to 30,000 users, still running. Works at the intersection of systems architecture, UX, and onchain infrastructure.

**Advisor**

**Cinara Bigóis** — Real Estate Market Advisor. 30 years of experience in the Sul rental market, active licensed broker with consolidated relationships across the RS/SC agency ecosystem. Enables direct market validation and access to the pilot's first partners.

---

## 7. Roadmap

| Phase | Period | Key milestones |
|---|---|---|
| **Phase 0 — Foundation** | Months 0–2 | Entity constitution · Smart contract testnet · Legal & KYC setup |
| **Phase 1 — Pilot Launch** | Months 2–6 | Mainnet live · 20–30 agencies onboarded · 500–1,000 active contracts · $500K genesis AUM · First fee cycle closed |
| **Phase 2 — Scale** | Months 6–18 | 10,000+ contracts · $3M+ AUM · National expansion · Institutional investors · MTVM/MTVL deployed |
| **Phase 3 — Expansion** | Months 18–36 | 50,000+ contracts · $10M+ AUM · Seed round ($3–5M) |

---

## 8. Conclusion

MUTAV proposes new infrastructure for the rental guarantee market, making it more open, efficient, and transparent through tokenization and blockchain. By connecting investor capital with real real estate sector demand, the model creates a sustainable system based on real yield and structured risk management.

With an architecture that combines agency integration, programmable liquidity, a risk engine for credit segmentation, and DeFi expansion, MUTAV establishes the foundation for a new standard in guarantees — more accessible, scalable, and aligned with the advances of the digital economy.
