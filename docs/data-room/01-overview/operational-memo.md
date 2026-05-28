# Operational Memo — MUTAV

**Pre-Seed Round · May 2026**

---

## Executive Summary

MUTAV is onchain infrastructure for Brazil's rental guarantee market — the role CredPago played before its billion-dollar acquisition by Loft, with one structural difference: the capital pool is open to external investors via a tokenized fund on Stellar.

Two sides: real estate agencies get a digital guarantee product faster than insurance; investors get yield-bearing exposure to a ~$1.1B/year (R$5.4B) market that has never been accessible.

---

## The Problem

Brazil has 17.8M rented households. The market for paid rental guarantees has grown 195% since 2020 and generates ~$1.1B/year (R$5.4B) in fees across all onerosas modalities. The capital backing those guarantees is entirely closed — CredPago ran on BTG's balance sheet, insurers run on their own, título de capitalização locks tenant savings. No transparency, no participation, no competition for that capital.

Four consequences: concentration risk, oligopoly pricing (10-15% of rent), slow default settlement (6-12+ months judicial process), and complete investor exclusion from a multi-billion market.

---

## The Solution

Three connected entities:

**MUTAV Soluções (Brazil)** — Institutional fiador under Art. 37, Lei do Inquilinato. Originates contracts via imobiliária partnerships, collects fees, retains 20%, passes 80% to the fund.

**Mutav Treasury Fund (offshore)** — Tokenized fund backed by Brazilian Treasury bonds via Etherfuse/Stellar. Three share classes (MTVH subordinated, MTVM mezzanine, MTVL senior). Issues tokens to investors at current NAV.

**Mutav Treasury Management (offshore)** — Fund administrator. 1% p.a. management fee on AUM, 0.25% redemption fee.

**Investor flow:** KYC → deposit USDC → receive tokens (self-custodial) → fees + Treasury yield appreciate NAV → redeem via weekly on-chain queue (2.5% AUM cap).

**Waterfall:**

| Tranche | Absorbs defaults | Yield | Note |
|---|---|---|---|
| MTVH | First | Highest | MUTAV Soluções holds mandatorily — we lose first |
| MTVM | If MTVH exhausted | Mid | |
| MTVL | Last | Lowest, most stable | |

---

## Business Model

| Revenue source | Mechanics |
|---|---|
| Guarantidora split | 20% of tenant fees → MUTAV Soluções |
| Management fee | 1% p.a. on AUM → Mutav Treasury Management |
| Redemption fee | 0.25% on withdrawals → retained in fund |

**Unit economics (Year 1 pilot):** 1,000 contracts × R$160/month to fund = $32K/month in fee income. At 10,000 contracts: ~$320K/month. Full simulation in Section 02.

---

## Go-to-Market

**Phase 1 (Months 0-6):** 20-30 imobiliárias in Litoral Norte (RS/SC), accessed through advisor Cinara Bigóis's 30-year network. No cold outreach — warm introductions to operators with real pain. Target: 1,000 contracts, $500K AUM at genesis.

**Phase 2 (Months 6-18):** Expand nationally using pilot track record. Open institutional investor access. Pursue MUTAV token integrations as DeFi collateral.

**Crypto distribution** runs in parallel from day one via X (Twitter), hackathon community (Colosseum Frontier, ETHGlobal), and founders' networks.

---

## Current Status

| Area | Status |
|---|---|
| Smart contract (Stellar/Soroban) | Designed and documented; testnet in progress |
| Compliance framework | Fully documented; pending counsel on jurisdiction |
| Financial model | Year 1 simulation complete |
| Pilot distribution | First conversations underway via advisor network |
| KYC/AML vendor | Evaluating Sumsub and alternatives |
| Offshore jurisdiction | Cayman, BVI, Bermuda under evaluation |
| Smart contract audit | Planned pre-mainnet |

---

## Team

**Matheus "Draau" de Pauli** — Co-founder. 5+ years in Web3 product and strategy. Co-founder of No Bloco.

**Julia Hoffmann Buratto** — Co-founder, Design Engineer. Architect (UFSC), MBA Responsive Cities. Launched Chainless 2023: 0 → 30,000 users.

**Lucas Oliveira** — Technical Advisor. Senior blockchain engineer (Clearsale, Nearx). Stellar Ambassador. Smart contract architect.

**Cinara Bigóis** — Real Estate Advisor. 30 years in RS/SC rental market. The pilot distribution network.

Full bios in Section 05.

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
