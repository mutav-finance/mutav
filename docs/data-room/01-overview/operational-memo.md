# Operational Memo: MUTAV

**Pre-Seed Round · May 2026**

---

## The Insight

To rent an apartment in Brazil, you need to find someone who loves you enough to risk their home. That is the rental guarantee system in the world's eighth-largest economy.

74,000 real estate agencies run this system. They screen tenants, manage leases, and when a guarantee fails, absorb the client fallout while waiting for courts to resolve the default. They are the operational pillar of the entire market.

They are also the primary distribution channel for the products that profit from their pain. CredPago, the insurance companies, the capitalização titles: all of them reach tenants through agencies, collect fees, and keep every basis point of return inside a closed capital structure.

When CredPago was acquired by Loft in a deal that returned R$1.4 billion (~$280M) to BTG Pactual in under two years, no agency shared in that outcome.

None of these products treat agencies as partners. They offer a commission at signing and vanish when things go wrong. The agency fields the calls, manages the fallout, and absorbs the friction of a failed guarantee while the capital structure waits on its legal claim.

The agencies who run this market have never had a real partner. The investors who would fund it have never had a way in. Those are the two gaps MUTAV was built to close.

---

## Executive Summary

MUTAV is a digital rental guarantor backed by an onchain capital fund on Stellar. Transparent where the market is opaque. Open where it has always been closed.

Two sides: real estate agencies get a guarantee product faster and more transparent than insurance; investors get yield-bearing exposure to a market that has never been accessible.

---

## The Problem

Brazil has 17.8M rented households. The paid rental guarantee market has grown 195% since 2020, generating ~$1.1B/year in fees with no external capital participation. Four consequences: concentration risk, oligopoly pricing (10-15% of rent), slow default settlement (60-90 days), and complete crypto ecossistem exclusion.

---

## The Solution

Three connected entities:

**MUTAV Soluções (Brazil):** Institutional guarantor under Art. 37, Lei do Inquilinato. Contracts with real estate agencies, collects monthly fees, retains 20% for operations, and passes 80% to the fund.

**Mutav Treasury Fund (offshore):** The investment fund, backed by tokenized Brazilian Treasury bonds via Etherfuse on Stellar. Issues three token classes (MTVH, MTVM, MTVL) to investors at the current token price.

**Mutav Treasury Management (offshore):** Fund administrator. Charges 1% per year on AUM and 0.25% on withdrawals.

**How investors participate:** KYC → deposit USDC → receive tokens (held in their own wallet) → token value grows as fees and Treasury yield accrue → withdraw weekly (cap: 2.5% of fund per week).

**Loss waterfall:**

| Token class | Absorbs losses | Yield | Note |
|---|---|---|---|
| MTVH | First | Highest | Held mandatorily by MUTAV Soluções; we lose first |
| MTVM | If MTVH exhausted | Mid | |
| MTVL | Last | Lowest, most stable | |

---

## Business Model

**Unit economics:** 1,000 contracts × R$160/month to the fund = $32K/month in fee income. At 10,000 contracts: ~$320K/month. Full simulation in Section 02.

---

## Structural Advantages

**Distribution:** Our advisor Cinara Bigóis has 30 years of earned trust in the Sul region. The pilot is not a cold campaign; it is a warm introduction to agencies that already know her. That is the advantage you cannot buy.

**Data:** Every contract registered generates a time-stamped payment record. Over time, that becomes the most accurate rental credit dataset in Brazil. You can only build it by being first.

---

## Go-to-Market

**Phase 1 (0-6 months):** 20-30 agencies in Litoral Norte (RS/SC) via warm introductions through our advisor network. Target: 1,000 contracts, $500K AUM.

**Phase 2 (6-18 months):** National expansion using the pilot track record. Open institutional investor access. Pursue MUTAV token integrations as DeFi collateral.

Crypto investor outreach runs in parallel from day one: X (Twitter), Colosseum Frontier, ETHGlobal, and founders' networks.

---

## Why Now

**Market gap:** QuintoAndar exited the guarantee segment in 2024. CredPago was absorbed by Loft. The next cycle's winner is undecided.

**Proven model:** Maple Finance, Centrifuge, and Goldfinch proved that credit instruments can live on blockchain. None touched Brazilian rental.

**Regulatory tailwind:** The Extrajudicial Eviction Law (PL 3.999/20, CCJ approved June 2025) accelerates eviction timelines, making guarantees more powerful and driving demand for the capital behind them.

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

**Matheus "Draau" de Pauli:** Co-founder. 5+ years in Web3 product and strategy. Co-founder of No Bloco.

**Julia Hoffmann Buratto:** Co-founder, Design Engineer. Architect (UFSC), MBA Responsive Cities. Launched Chainless 2023: 0 → 30,000 users.

**Cinara Bigóis:** Real Estate Advisor. 30 years in RS/SC rental market. The pilot distribution network.

Full bios in Section 05.

---

## North Star

Five years from now, MUTAV is the default capital layer for rental guarantees in Brazil: the infrastructure agencies and investors route through because it is the most transparent and efficient option available.

- 500,000+ rental contracts backed by MUTAV
- $500M+ under management across three risk classes (MTVH, MTVM, MTVL)
- MUTAV tokens recognized as a yield-generating asset in global crypto markets
- A credit engine that prices rental risk better than any incumbent

A market this large, this opaque, and this structurally unchanged is ready for a different kind of capital infrastructure.

---

## The Ask

**Round:** Pre-Seed · **Target:** [TBD, see Section 06]

| Use of proceeds | Allocation |
|---|---|
| Legal & entity constitution (BR + offshore) | ~30% |
| Smart contract audit | ~20% |
| KYC/AML infrastructure | ~15% |
| Pilot operations | ~20% |
| Marketing & investor distribution | ~15% |

Capital gets us to mainnet with 1,000+ active contracts and $500K+ AUM, the point where fee income and Treasury yield sustain operations without another raise.

*Investor deck and prototype video available on request: draauarts@gmail.com*
