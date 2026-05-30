# Operational Memo — MUTAV

**Pre-Seed Round · May 2026**

---

## The Insight

To rent an apartment in Brazil, you need to find someone who loves you enough to risk their home. That is the rental guarantee system in the world's eighth-largest economy.

When I came across the CredPago story — a startup that replaced the personal guarantor, grew 10x in three years, and was acquired by Loft in a deal that returned R$1.4 billion (~$280M) to BTG Pactual in under two years — I had one question: *what comes next?*

The capital behind these guarantees is still completely closed. CredPago, QuintoAndar, the insurance companies: they all raise their own capital and keep the entire return. No external participation. No transparency. A market generating ~$1.1B/year in fees, inaccessible to outside investors.

That is the gap MUTAV was built to close.

---

## Executive Summary

MUTAV is onchain infrastructure for Brazil's rental guarantee market — the role CredPago played before its billion-dollar acquisition by Loft, with one structural difference: the capital pool is open to external investors via a tokenized fund on Stellar.

Two sides: real estate agencies get a digital guarantee product faster than insurance; investors get yield-bearing exposure to a ~$1.1B/year market that has never been accessible.

---

## The Problem

Brazil has 17.8M rented households. The paid rental guarantee market has grown 195% since 2020 and generates ~$1.1B/year in fees. The capital behind those guarantees is entirely closed — CredPago ran on BTG's balance sheet, insurers run on their own, and the capitalização title locks up the tenant's own savings. No transparency, no outside participation, no competition for that capital.

Four consequences: concentration risk, oligopoly pricing (10–15% of rent), slow default settlement (6–12+ months via courts), and complete investor exclusion from a multi-billion market.

---

## The Solution

Three connected entities:

**MUTAV Soluções (Brazil)** — Acts as institutional guarantor under Art. 37, Lei do Inquilinato. Contracts with real estate agencies, collects monthly fees, retains 20% for operations, and passes 80% to the fund.

**Mutav Treasury Fund (offshore)** — The investment fund. Backed by tokenized Brazilian Treasury bonds via Etherfuse on Stellar. Issues three classes of tokens (MTVH, MTVM, MTVL) to investors at the current token price.

**Mutav Treasury Management (offshore)** — Fund administrator. Charges 1% per year on assets under management and 0.25% on withdrawals.

**How investors participate:** verify identity (KYC) → deposit USDC → receive tokens (held in their own wallet) → token value grows as fees and Treasury yield accrue → withdraw weekly (cap: 2.5% of fund per week).

**Loss waterfall — who absorbs defaults first:**

| Token class | Absorbs losses | Yield | Note |
|---|---|---|---|
| MTVH | First | Highest | MUTAV Soluções holds mandatorily — we lose first |
| MTVM | If MTVH exhausted | Mid | |
| MTVL | Last | Lowest, most stable | |

---

## Business Model

| Revenue source | Mechanics |
|---|---|
| Guarantor split | 20% of tenant fees → MUTAV Soluções |
| Management fee | 1% per year on assets under management → Mutav Treasury Management |
| Withdrawal fee | 0.25% on redemptions → stays in the fund |

**Unit economics:** 1,000 contracts × R$160/month to the fund = $32K/month in fee income. At 10,000 contracts: ~$320K/month. Full simulation in Section 02.

---

## Structural Advantages

**Distribution:** Brazil's rental market flows through 74,000 real estate agencies. Our advisor Cinara Bigóis has 30 years of earned trust in the Sul region. The pilot is not a cold campaign — it is a warm introduction to agencies that already know us. That is the advantage you cannot buy.

**Data:** Every contract registered generates a time-stamped payment record. Over time, that becomes the most accurate rental credit dataset in Brazil. You can only build it by being first.

---

## Go-to-Market

**Phase 1 (Months 0–6):** 20–30 agencies in Litoral Norte (RS/SC), accessed through Cinara Bigóis's 30-year network. No cold outreach — warm introductions to operators with real pain. Target: 1,000 contracts, $500K AUM at genesis.

**Phase 2 (Months 6–18):** Expand nationally using pilot track record. Open institutional investor access. Pursue MUTAV token integrations as DeFi collateral.

**Crypto investor outreach** runs in parallel from day one via X (Twitter), hackathon community (Colosseum Frontier, ETHGlobal), and founders' networks.

---

## Why Now

**Market gap:** QuintoAndar exited the guarantee segment in 2024. CredPago was absorbed by Loft. The next cycle's winner is undecided.

**Proven model:** Maple Finance, Centrifuge, and Goldfinch proved that credit instruments can live on blockchain. None touched Brazilian rental. We are applying a validated model to a market that has never seen it.

**Regulatory tailwind:** The Extrajudicial Eviction Law (PL 3.999/20, CCJ approved June 2025) accelerates eviction timelines — making guarantees more powerful and increasing demand for the capital behind them.

---

## Current Status

| Area | Status |
|---|---|
| Smart contract (Stellar) | Designed and documented; testnet in progress |
| Legal & compliance framework | Fully documented; pending counsel on jurisdiction |
| Financial model | Year 1 simulation complete |
| Pilot distribution | First conversations underway via advisor network |
| Identity verification (KYC) vendor | Evaluating Sumsub and alternatives |
| Offshore jurisdiction | Cayman, BVI, Bermuda under evaluation |
| Smart contract security audit | Planned before mainnet launch |

---

## Team

**Matheus "Draau" de Pauli** — Co-founder. 5+ years in Web3 product and strategy. Co-founder of No Bloco.

**Julia Hoffmann Buratto** — Co-founder, Design Engineer. Architect (UFSC), MBA Responsive Cities. Launched Chainless 2023: 0 → 30,000 users.

**Cinara Bigóis** — Real Estate Advisor. 30 years in RS/SC rental market. The pilot distribution network.

Full bios in Section 05.

---

## North Star

Five years from now, MUTAV is the capital reserve infrastructure for rental guarantees in Brazil — the layer that agencies and investors route capital through because it is the most transparent and efficient option.

- 500,000+ rental contracts backed by MUTAV
- $500M+ under management across three risk classes (MTVH, MTVM, MTVL)
- MUTAV tokens recognized as a yield-generating asset in global crypto markets
- A credit engine that prices rental risk better than any incumbent

CredPago replaced the personal guarantor. MUTAV replaces the closed capital structure behind it — and opens it to the world.

---

## The Ask

**Round:** Pre-Seed · **Target:** [TBD — see Section 06]

| Use of proceeds | Allocation |
|---|---|
| Legal & entity constitution (BR + offshore) | ~30% |
| Smart contract audit | ~20% |
| KYC/AML infrastructure | ~15% |
| Pilot operations | ~20% |
| Marketing & investor distribution | ~15% |

Capital gets us to mainnet with 1,000+ active contracts and $500K+ AUM — the threshold where fee income and Treasury yield sustain operations without another raise.

*Investor deck and prototype video available on request: draauarts@gmail.com*
