# TGA — Gaps & Reference Analysis

Working document. Accumulates points identified by comparing against reference protocols.
Do not edit the whitepaper before consolidating all sources.

---

## Product Decisions — Open Items

Questions still unanswered. They block final technical definitions before the whitepaper.

---

### GAP 3 — Liquidity Layer Yield

**3.1** Will the stablecoin liquidity layer (USDC/USDT) sit idle or be allocated to a passive yield protocol (e.g. Kamino, Marginfi)? Which partner and what expected APY?

*Resolved: USDC/USDT stablecoins accepted; fixed percentage of the active layer removed from whitepaper.*

---

### GAP 6 — Custody and Legal Structure

**6.2** Multisig confirmed for critical operations — how many signers and who are they (e.g. 2/3 founders + advisor)?

**6.3** Will TGA SA have a formal legal vehicle (FIDC, offshore, LLC) or operate as a pure protocol in the initial phase? This is the largest regulatory exposure identified.

---

### GAP 7 — Oracles

**7.1** Will the onchain NAV calculation need any external price or rate (collateral yield, BRL/USD exchange rate)? If so, which oracle: Pyth, Switchboard, or Chainlink?

---

*Resolved on: 2026-05-06*

---

## Reference 1: OnRe (https://docs.onre.finance)

**What it is:** Bermuda-licensed reinsurer that tokenizes exposure to the P&C reinsurance market ($800B/year). ONyc token = fund share with appreciating NAV. Structurally identical model to TGA.

---

### On-Ramp

| Dimension | OnRe | TGA (gap) |
|---|---|---|
| Retail access | Permissionless, no KYC, no minimum | Not defined |
| Institutional access | KYC/KYB + accredited investor check | Not defined |
| Accepted assets | USDC, USDG, USDT | "stablecoin" — vague |
| Custody on mint | Non-custodial, self-custody | Not specified |
| Entry fee | Zero (network fee only) | Not defined |

**Action:** Define two access flows (retail permissionless / institutional with KYC) and list accepted stablecoins.

---

### Off-Ramp

| Dimension | OnRe | TGA (gap) |
|---|---|---|
| Primary market | Onchain queue, weekly execution | Queue mentioned, no details |
| Weekly cap | **2.5% of NAV** | Not defined |
| Redemption fee | **0.25% (25 bps)** | "redemption fee" without a value |
| Execution price | NAV at time of execution, not submission | Not specified |
| Secondary market | Orca, Raydium, Kamino, Jupiter (24/7) | Absent — only mentioned as future DeFi |
| Liquidity reserve | **15% of capital** | 20% without weekly cap |

**Action:** Define weekly cap (e.g. 2%), redemption fee in bps, and specify secondary market (TGA/USDC pool on Orca or Raydium).

---

### Money Flow

**OnRe (full flow):**
```
Investor deposits USDC
  → Minting contract
  → ONyc SA (Segregated Account, Bermuda)
    → 85% deployed: reinsurance programs + collateral
      → Premiums paid upfront by cedents
      → Collateral: 3m T-bills + sUSDe + syrupUSDC + USCC
    → 15% liquidity reserve (USDC/USDG for redemptions)
  → Return: premiums earned daily + collateral yield → NAV rises
  → Redemption: NAV at time of execution − 0.25%
```

**TGA gaps:**
- Premium timing: when and how the tenant fee enters the fund — not described
- Collateral composition: TGA says "stablecoins"; needs to specify each asset and rationale
- Custody: no custody partner mentioned (OnRe uses Coinbase Prime + Squads multisig)

---

### Technical Definitions

| Element | OnRe | TGA (gap) |
|---|---|---|
| NAV formula | Onchain: base price × annual rate × time | "Appreciating NAV" — no formula |
| NAV update | Daily, onchain, no offchain service | Not specified |
| Solana program | Public address listed | Anchor programs mentioned vaguely |
| Audit | Quantstamp (Jan 2026) | None |
| Oracles | Pyth + Chainlink (for DeFi integrators) | Not mentioned |
| Custody | Coinbase Prime + Squads multisig | Not mentioned |
| Liquidation trigger | Offchain notification, onchain settlement | "Offchain integrations" — vague |

---

### Structuring Strategies

| Element | Description | TGA Application |
|---|---|---|
| Segregated Account legal | Bermuda SAC Act — each program has a separate legal ring | BR equivalent: FIDC or offshore structure. TGA SA has no defined legal vehicle — largest regulatory gap |
| Redemption cap with a number | 2.5%/week of NAV | Adopt a concrete number (e.g. 2%/week) |
| Explicit collateral | Lists each asset with risk/liquidity/yield rationale | Specify: USDC base + Kamino/Marginfi yield + eventual tokenized T-bill |
| Secondary market | DEX pool for 24/7 exit without compromising the fund | TGA/USDC pool on Orca or Raydium |
| Pure onchain NAV | No offchain service dependency to calculate NAV | Define formula before the hackathon |
| Buyback mechanism | Protocol buys back ONyc on DEX when it deviates from NAV | Simple mechanism to maintain peg and generate demand |

---

### TGA Advantages Over OnRe

| Advantage | Argument |
|---|---|
| Specific and defensible market | Brazilian rental guarantees is a niche; OnRe competes in $800B against giants |
| More predictable risk | Rental default is more stable than global climate catastrophes |
| Proprietary origination via SGR | OnRe depends on external cedents; TGA controls the end-to-end flow |
| Social impact narrative | 46.5M Brazilians paying rent — a story that reinsurance doesn't have |

---

## Reference 2: BENJI — Franklin Templeton (FOBXX)

**What it is:** Franklin OnChain U.S. Government Money Fund — the first U.S.-registered mutual fund to use a public blockchain as its official record system. Each BENJI token = 1 fund share. Runs on Stellar.

**Numbers (April 2026):** $650M individual AUM · $1.98B suite AUM · $211M P2P volume · +140% investor growth after P2P retail opening (May 2025).

---

### Structure

```
Financial Institution
  → Tokenizes FOBXX fund on Stellar
  → Each BENJI token = 1 share
  → Investor accesses via app (retail) or institutional portal
  → Yield distributed daily onchain (365 days, weekends included)
  → Intraday accrual proportional to the second in P2P transfers
```

**Regulation:** SEC mutual fund (not a DeFi product — it's tokenized TradFi). Blockchain is the official record system, not a mirror or wrapper. Expansion: UCITS Luxembourg (2024), retail Singapore (2025).

---

### Comparison with TGA

| Dimension | BENJI | TGA (gap) |
|---|---|---|
| Nature | Tokenized TradFi mutual fund | Native DeFi protocol |
| Regulation | SEC (USA) | CVM (BR) — not defined |
| Underlying asset | U.S. Treasury / gov obligations | Brazilian rental guarantees |
| Blockchain as official record | Yes — primary system | Yes via SGR — but not communicated that way |
| Yield | Distributed daily onchain | Built into NAV — no defined cadence |
| Retail access | Mobile app | Solana wallet — no app defined |
| Institutional access | Separate web portal | Not differentiated in whitepaper |
| P2P transferability | Yes (retail since May 2025) | Not mentioned |
| NAV update | Daily, onchain | Not specified |

---

### Learnings for TGA

| Point | Description |
|---|---|
| Blockchain as record, not layer | BENJI positions blockchain as the primary system. TGA does the same via SGR — needs to communicate it that way: the protocol **is** the infrastructure |
| Retail / institutional separation | Mobile app (retail) + web portal (institutional) for the same fund. TGA has this in the design brief but not in the whitepaper |
| P2P transferability = growth | Opening P2P to retail generated +140% in investors. Transferable TGA token + DEX pool = same vector |
| Daily NAV as trust signal | Yield every day, including weekends. For TGA: daily onchain NAV update is a critical trust signal — not mentioned in the whitepaper |

---

## GAP 8 — Fund Management & Early Adopter Structure

**8.1** What benefits will early adopters of the first tokenized fund receive? Options to evaluate: reduced management fee, higher yield allocation (ex: 85% vs 80%), priority access to lower-risk tiers, Phase 2 whitelist. No decision made — needs fund management expertise to define.

**8.2** Fund management layer is an open gap — who administers the fund operationally? Does MUTAV SA self-manage or partner with a licensed administrator (required for CVM registration)?

---

## Cross-Cutting Gaps (independent of reference)

Identified via JURY.md baseline (score 2.25/5, 2026-04-10):

- **Regulatory:** TGA SA has no defined legal vehicle. Pooling capital + token issuance + appreciating NAV = likely CVM jurisdiction. Not mentioned anywhere.
- **Unit economics:** 20% penetration completely without defense. No claims rate assumption, no pool size modeling, no explicit yield assumption on the collateral.
- **User discovery:** no interview with a real estate agency, landlord, or tenant documented.
- **Competitive landscape:** no positioning against RWA protocols (Centrifuge, Goldfinch, Maple, Ondo).
- **Liquidation trigger:** "via offchain integrations" — mechanism not described.
- **Technical team:** no Rust/Anchor dev identified for a Solana hackathon.

---

*Last updated: 2026-05-04 — source: OnRe docs + JURY.md baseline*
