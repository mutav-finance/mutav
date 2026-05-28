# Technical Reserve Model

> Built May 2026. Based on Superlógica Rental Default Index and MUTAV Phase 1 parameters.
> This model governs how much capital the fund must retain before distributing yield to token holders.

---

## Why a Technical Reserve

Fee income from rental contracts flows into the fund every month. Not all of it can be distributed — a portion must be held to absorb defaults. Without a reserve, a spike in defaults would draw down investor principal rather than a pre-funded buffer.

The reserve model has three independent layers. All three must be satisfied simultaneously before distribution is permitted.

---

## Base Parameters (Phase 1)

| Parameter | Value | Source |
|---|---|---|
| Active contracts | 5,000 | Phase 1 target |
| Average monthly rent | R$2,000 = $400 | Sul region benchmark |
| Default coverage per contract | $400/month | 1 month of rent (USD) |
| Monthly fee income to fund (80%) | $160,000 | 5,000 × $406 × 10% × 80% |
| Sul region default rate | 2.89%/month | Superlógica IIL, March 2026 |
| Brazil average default rate | 3.50%/month | Superlógica IIL, 2025 average |
| Stress default rate | 5.15%/month | Superlógica IIL, Northeast peak |
| Treasury yield (nominal, BRL) | 13.28% APY | SELIC-linked Tesouro via Etherfuse/Stellar |
| Expected BRL depreciation | ~5%/year | Conservative assumption (rate differential) |
| Treasury yield (net, USD) | **7.89% APY** | (1 + 13.28%) / (1 + 5%) − 1 |
| Treasury monthly rate (USD) | **0.636%/month** | (1.0789)^(1/12) − 1 |

---

## Layer 1 — Fixed AUM Floor

**Rule:** 20% of total AUM must be held in liquid reserve at all times.

This capital cannot be distributed as yield. It is the structural floor — the fund never operates below this threshold.

```
Reserve_L1 = AUM × 20%
```

| AUM | Reserve (20%) | Distributable AUM |
|---|---|---|
| $500,000 | $100,000 | $400,000 |
| $1,000,000 | $200,000 | $800,000 |
| $2,000,000 | $400,000 | $1,600,000 |
| $5,000,000 | $1,000,000 | $4,000,000 |

**Why 20%:** Brazilian Treasury (Etherfuse) redemptions require structured processing. The 20% floor ensures the fund can honor weekly redemption requests (capped at 2.5% of NAV) for up to 8 consecutive weeks without touching operational capital.

---

## Layer 2 — Coverage Months Target

**Rule:** The reserve must cover at least 3 months of expected default payouts. Target is 6 months.

```
Monthly_defaults = default_rate × contracts × coverage_per_contract
Reserve_L2 = Monthly_defaults × coverage_months
```

### Brazil average (3.50%/month) — base case

| Coverage | Monthly defaults | Reserve required |
|---|---|---|
| 3 months (minimum) | $70,000 | **$210,000** |
| 6 months (target) | $70,000 | **$420,000** |

### Sul region (2.89%/month) — optimistic scenario

| Coverage | Monthly defaults | Reserve required |
|---|---|---|
| 3 months (minimum) | $57,800 | **$173,400** |
| 6 months (target) | $57,800 | **$346,800** |

### Stress (5.15%/month) — Northeast / high-risk scenario

| Coverage | Monthly defaults | Reserve required |
|---|---|---|
| 3 months (minimum) | $103,000 | **$309,000** |
| 6 months (target) | $103,000 | **$618,000** |

**Active reserve = max(Reserve_L1, Reserve_L2).** The binding constraint is whichever is larger.

---

## Layer 3 — Loss Ratio Distribution Gate

**Rule:** If monthly defaults exceed 60% of monthly fee income, distributions are suspended. All net income is redirected to rebuild the reserve until the ratio falls back below 50%.

```
Loss_ratio = Monthly_defaults / Monthly_fee_income

If Loss_ratio > 60% → suspend distributions
If Loss_ratio < 50% → resume distributions
```

### Loss ratio by default rate (5,000 contracts, $160K/month fee income)

| Default rate | Monthly defaults | Loss ratio | Status |
|---|---|---|---|
| 2.89% (Sul) | $57,800 | **36.1%** | Distributions permitted |
| 3.50% (Brazil avg) | $70,000 | **43.8%** | Distributions permitted |
| 4.80% (trigger) | $96,000 | **60.0%** | Gate activates |
| 5.15% (Northeast) | $103,000 | **64.4%** | Distributions suspended |
| 6.00% (stress peak) | $120,000 | **75.0%** | Distributions suspended |

**Trigger threshold:** defaults exceed 4.80%/month of contracts. Brazil average (3.50%) operates with 1.3 percentage points of margin before the gate activates.

---

## Minimum AUM Requirements

To satisfy all three layers simultaneously at Phase 1 (5,000 contracts, Brazil average 3.50%/month):

| Constraint | Minimum AUM |
|---|---|
| Layer 1 (20% floor, 6-month reserve target) | $420,000 / 20% = **$2,100,000** |
| Layer 2 (6-month coverage absolute) | **$420,000** |
| Layer 3 (loss ratio gate) | N/A — percentage-based, not AUM-based |
| **Binding constraint** | **$2,100,000** |

**Conclusion:** the fund requires at least **$2.1M AUM** to properly back 5,000 contracts with a 6-month reserve under Brazil average default rates.

Under Sul region rates (2.89%/month), the minimum drops to $1.73M.

---

## Distribution Rules Summary

Before any yield is distributed to token holders each month, the fund checks three conditions in order:

```
1. AUM > Reserve_L1 (20% floor)?          → if NO: no distribution
2. Reserve balance > 6 months of defaults? → if NO: redirect income to reserve
3. Loss_ratio < 60%?                       → if NO: suspend distribution

All three YES → distribute net income to MTVL, MTVM, MTVH per waterfall
```

---

## Treasury Yield — FX Adjustment

The fund holds Brazilian Treasury (Tesouro Selic) tokenized via Etherfuse/Stellar. The nominal yield is **13.28% APY in BRL**. Because investors deposit and redeem in USD (USDC), the effective USD yield must account for BRL/USD exchange rate movement.

```
Treasury_USD_APY = (1 + Treasury_BRL_APY) / (1 + BRL_depreciation) − 1
                 = (1 + 13.28%) / (1 + 5.00%) − 1
                 = 7.89% APY in USD

Treasury_monthly_rate = (1 + 7.89%)^(1/12) − 1 = 0.636%/month
```

**FX sensitivity:**

| BRL depreciation | Net USD APY | Monthly rate |
|---|---|---|
| 0% (BRL holds) | 13.28% | 1.044% |
| 5% (base case) | **7.89%** | **0.636%** |
| 8% (rate parity) | 4.89% | 0.398% |
| 10% (stress) | 2.98% | 0.245% |

The treasury yield is material only at large AUM. At 5,000 contracts generating $160K/month in fees, treasury becomes relevant when AUM exceeds ~$5M.

---

## Reserve and APY

The reserve is capital immobilized — it earns the treasury yield (7.89% net USD APY) but does not generate rental fee income since it is not "at risk" capital.

For APY purposes, only the **distributable AUM** (total AUM minus reserve) is the active base. Treasury income scales with total AUM; fee income and defaults are fixed by contract count.

```
Monthly_treasury  = AUM × 0.636%
Monthly_net       = fee_income + Monthly_treasury − defaults
Effective_APY     = (1 + Monthly_net / Distributable_AUM)^12 − 1

where Distributable_AUM = AUM − Reserve_L1 (= AUM × 80%)
```

**5,000 contracts (Brazil avg 3.50%) — APY by AUM level:**

| AUM | Reserve (20%) | Distributable | Ops net* | Treasury | Total net | APY |
|---|---|---|---|---|---|---|
| $2,100,000 (min) | $420,000 | $1,680,000 | $90,000 | $13,356 | $103,356 | **~104%** |
| $3,000,000 | $600,000 | $2,400,000 | $90,000 | $19,080 | $109,080 | **~68%** |
| $5,000,000 | $1,000,000 | $4,000,000 | $90,000 | $31,800 | $121,800 | **~43%** |
| $8,000,000 | $1,600,000 | $6,400,000 | $90,000 | $50,880 | $140,880 | **~30%** |
| $15,300,000 | $3,060,000 | $12,240,000 | $90,000 | $97,308 | $187,308 | **~20%** |

*Ops net = $160,000 fees − $70,000 defaults (fixed for 5k contracts regardless of AUM)

---

## Key Observations

**Reserve is self-funding.** At Brazil average default rates, the reserve of $420,000 earns 7.89% net USD APY in treasury yield = $33,138/year passively. The reserve partially pays for itself. (Gross BRL yield is $55,776/year at 13.28%, but ~$22,638 is offset by BRL depreciation at 5%/year.)

**Scale compresses APY.** As AUM grows beyond $5M with stable contract volume (5,000), the APY normalizes to institutional-grade returns (10–30% range). This is by design: at scale, the fund resembles a fixed-income instrument, not a high-growth equity position.

**MTVH absorbs reserve shocks.** When the loss ratio gate activates, distributions are suspended across all classes. MTVH, as the subordinated class, absorbs the economic drag first — protecting MTVL and MTVM holders from reserve events.

---

---

## NAV, Investor Entry, and APY Dilution

### How the NAV mechanism works

The fund does not split income equally between investors. All net income accrues into the **token NAV**. Each investor holds tokens; their return is the appreciation of those tokens over time.

```
NAV_per_token = Total_AUM / Tokens_in_circulation
```

When a new investor enters, they buy tokens at the **current NAV price** — not genesis price. This ensures existing investors keep all previously accumulated gains.

```
New_tokens_issued = Deposit / Current_NAV
AUM increases, tokens increase proportionally → NAV per token unchanged
```

### APY dilution from new investors

`ops_net` ($90,000/month at 5k contracts) is **fixed by contract count, not by AUM**. As more capital enters with the same contract base, ops_net gets divided across more capital — APY falls for everyone going forward.

| AUM | Net/month | Distributable | APY |
|---|---|---|---|
| $5M | $121,800 | $4,000,000 | **~43%** |
| $6M | $128,160 | $4,800,000 | **~38%** |
| $10M | $153,600 | $8,000,000 | **~26%** |

New investors contribute treasury yield on their deposit but claim a share of the ops_net that pre-existed their entry — this is the dilution mechanism.

### The anti-dilution rule

APY stays stable only if contracts grow proportionally with AUM:

```
Target ratio: 1 contract per $1,000 of AUM
(5k contracts / $5M = 10k contracts / $10M)

If AUM doubles without doubling contracts → APY falls
If both double together → APY held constant
```

### What the APY figure represents

The APY calculated at any point is a **snapshot** — it reflects current AUM and current contract count. It is not a guaranteed forward rate. Investors entering at different AUM levels will experience different forward APYs, but all enter at fair NAV and keep prior gains intact.

---

*Model assumptions subject to revision. Default rates sourced from Superlógica Arbo IIL (March 2026). Treasury is SELIC-linked Tesouro via Etherfuse/Stellar — nominal 13.28% APY in BRL, adjusted to 7.89% net USD assuming 5% annual BRL depreciation. All USD figures at R$5.00 exchange rate.*

---

## Contract Milestones — AUM Requirements

Each milestone defines the minimum AUM the fund must hold before it can accept that number of active contracts. The binding constraint is Layer 1 (20% floor must cover Layer 2's 6-month reserve).

### Formula

```
Monthly_defaults  = contracts × 3.50% × $400
6-month reserve   = Monthly_defaults × 6
Minimum AUM       = 6-month reserve ÷ 20%

Per contract constant: $420.00 of AUM required
```

### Milestone Table (Brazil average, 3.50%/month default rate)

| Milestone | Contracts | Monthly Fee | Monthly Defaults | Monthly Net | 6-mo Reserve | **Min AUM** |
|---|---|---|---|---|---|---|
| Pre-seed | 500 | $16,000 | $7,000 | $9,000 | $42,000 | **$210,000** |
| Seed | 1,000 | $32,000 | $14,000 | $18,000 | $84,000 | **$420,000** |
| Phase 1a | 2,500 | $80,000 | $35,000 | $45,000 | $210,000 | **$1,050,000** |
| Phase 1 | 5,000 | $160,000 | $70,000 | $90,000 | $420,000 | **$2,100,000** |
| Phase 2 | 10,000 | $320,000 | $140,000 | $180,000 | $840,000 | **$4,200,000** |

> Monthly fee = contracts × $32 (80% of 10% of R$2,000 rent at R$5.00)
> Monthly defaults = contracts × 3.50% × $400
> Monthly net = fee − defaults (before treasury yield)
> Loss ratio is constant at **43.75%** across all milestones — well below the 60% distribution gate

### With Treasury Yield at Minimum AUM (corrected: 7.89% net USD)

Treasury income at minimum AUM (0.636%/month on AUM):

| Milestone | Min AUM | Treasury/month | Net + Treasury | APY at Min AUM |
|---|---|---|---|---|
| Pre-seed | $210,000 | $1,336 | $10,336 | ~104% |
| Seed | $420,000 | $2,671 | $20,671 | ~104% |
| Phase 1a | $1,050,000 | $6,678 | $51,678 | ~104% |
| Phase 1 | $2,100,000 | $13,356 | $103,356 | ~104% |
| Phase 2 | $4,200,000 | $26,712 | $206,712 | ~104% |

APY at minimum AUM is constant (~104%) across all milestones — fee income, defaults, and reserve all scale linearly with contract count.

### What This Means for Fundraising

The minimum AUM is the floor — not the fundraising target. At minimum AUM, the APY is ~104%, which reflects an under-capitalized fund (fee income >> AUM). As more capital is raised beyond the minimum, APY normalizes toward institutional-grade returns.

| Milestone | Min AUM (reserve floor) | Meaning |
|---|---|---|
| Pre-seed | $210K | Fund can go live — barely covered |
| Seed | $420K | Solid 1-year reserve at 1k contracts |
| Phase 1a | $1.05M | Comfortable buffer entering Phase 1 |
| Phase 1 | $2.1M | Full Phase 1 reserve at 5k contracts |
| Phase 2 | $4.2M | Expansion-ready reserve at 10k contracts |

The minimum AUM per contract is fixed at **$420.00**, regardless of scale.
