# Fund Rules

> Operational rules governing reserve layers, distribution gates, minimum AUM requirements, and growth milestones. For investor scenarios, return projections, and NAV simulation, see [Financial Model](financial-model.md).

---

## Why a Technical Reserve

A portion of monthly rental fee income must be set aside to protect the fund from tenant defaults. Distributing everything would expose investor capital to direct loss when defaults spike. The solution: maintain a technical reserve as a buffer.

This reserve uses three independent safeguards, all of which must be met before any yield can be added to the fund.

---

## Base Parameters (Phase 1)

| Parameter | Value |
|---|---|
| Active contracts | 2500 |
| Average monthly rent | R$2,000 = $400 |
| Default coverage per contract | $400/month |
| Monthly fee income to fund (80%) | $80,000 |
| Brazil average default rate | 3.50%/month |
| Stress default rate | 5.15%/month |
| Expected BRL depreciation | ~5%/year |
| Treasury yield (net, USD) | **7.89% APY** |
| Treasury monthly rate (USD) | **0.636%/month** |

---

## Layer 1 — Fixed AUM Floor

**Rule:** 20% of total AUM must be held in liquid reserve at all times.

This capital cannot be distributed as yield. It is the structural floor — the fund never operates below this threshold.

```
Reserve_L1 = AUM × 20%
```

## Layer 2 — Coverage Months Target

**Regra:** A taxa de distribuição do APY é reduzida de forma escalonada conforme o nível de cobertura da reserva técnica (L2). O fundo sempre busca manter 6 meses de cobertura de inadimplência (“target”). Quando a reserva está abaixo desse alvo, a distribuição de rendimento para os detentores do fundo é diminuída (redução do APY), pois parte do lucro líquido deixa de ser distribuído e é direcionado para recompor a reserva técnica L2. Assim, menos valor é adicionado ao fundo e ao AUM nesse período — priorizando a solidez do colchão de liquidez e proteção contra inadimplência, até o parâmetro alvo ser restabelecido.

```
Monthly_defaults = default_rate × contracts × coverage_per_contract
Reserve_L2 = Monthly_defaults × coverage_months
```

### Distribution schedule by coverage level

| Reserve coverage | Distribution rate | Reserve rebuild |
|---|---|---|
| >= 6 months (target) | **100%** — full APY | None required |
| 3–6 months (partial) | **50%** — partial APY | 50% of net income redirected to reserve |
| < 3 months (minimum) | **20%** — APY | 75% of net income redirected to reserve |

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
| 3.50% (Brazil avg) | $70,000 | **43.8%** | Distributions permitted |
| 4.80% (trigger) | $96,000 | **60.0%** | Gate activates |
| 5.15% (Northeast) | $103,000 | **64.4%** | Distributions suspended |

---

## Minimum AUM Requirements

To satisfy all three layers simultaneously at Phase 1 (2,500 contracts, Brazil average 3.50%/month):

| Constraint | Minimum AUM |
|---|---|
| Layer 1 (20% floor, 6-month reserve target) | $210,000 / 20% = **$1,050,000** |
| Layer 2 (6-month coverage absolute) | **$210,000** |
| Layer 3 (loss ratio gate) | N/A — percentage-based, not AUM-based |
| **Binding constraint** | **$1,050,000** |

**Conclusion:** the fund requires at least **$1.05M AUM** to properly back 2,500 contracts with a 6-month reserve under Brazil average default rates.

---

## Reserve and APY

The reserve is capital immobilized — it earns the treasury yield (7.89% net USD APY) but does not generate rental fee income since it is not "at risk" capital.

For APY purposes, only the **distributable AUM** (total AUM minus reserve) is the active base. Treasury income scales with total AUM; fee income and defaults are fixed by contract count.

**2,500 contracts (Brazil avg 3.50%) — APY by AUM level:**

| AUM | Reserve (20%) | Distributable | Ops net* | Treasury | Total net | APY |
|---|---|---|---|---|---|---|
| $1,050,000 | $210,000 | $840,000 | $45,000 | $6,678 | $51,678 | **~104%** |
| $1,500,000 | $300,000 | $1,200,000 | $45,000 | $9,540 | $54,540 | **~70%** |
| $2,500,000 | $500,000 | $2,000,000 | $45,000 | $15,900 | $60,900 | **~43%** |
| $4,000,000 | $800,000 | $3,200,000 | $45,000 | $25,440 | $70,440 | **~30%** |
| $7,650,000 | $1,530,000 | $6,120,000 | $45,000 | $48,654 | $93,654 | **~20%** |

*Ops net = fee income − defaults

---

## Key Observations

**Reserve is self-funding:** 
At Brazil average default rates, the reserve of $420,000 earns 7.89% net USD APY in treasury yield = $33,138/year passively. The reserve partially pays for itself. 

**Scale compresses APY:** 
As AUM grows beyond $5M with stable contract volume (5,000), the APY normalizes to institutional-grade returns (10–30% range). This is by design: at scale, the fund resembles a fixed-income instrument, not a high-growth equity position.

**MTVH absorbs reserve shocks:** 
When the loss ratio gate activates, the addition of yield to the fund (increasing NAV) is paused across all classes. MTVH, as the subordinated class, absorbs the economic drag first — protecting MTVL and MTVM holders from reserve events.

---

## Contract Milestones — AUM Requirements

Each milestone defines the minimum AUM the fund must hold before it can accept that number of active contracts. The binding constraint is Layer 1 (20% floor must cover Layer 2's 6-month reserve).

### Growth Milestones — Minimum AUM for Healthy Scaling

| Milestone | Contracts | Monthly Fee | Monthly Defaults | Monthly Net | 6-mo Reserve | **Min AUM** |
|---|---|---|---|---|---|---|
| Pre-seed | 250 | $8,000 | $3,500 | $4,500 | $21,000 | **$105,000** |
| Pre-seed | 600 | $19,200 | $8,400 | $10,800 | $50,400 | **$252,000** |
| Phase 1 | 1,000 | $32,000 | $14,000 | $18,000 | $84,000 | **$420,000** |
| Phase 1 | 2,500 | $80,000 | $35,000 | $45,000 | $210,000 | **$1,050,000** |
| Phase 1 | 5,000 | $160,000 | $70,000 | $90,000 | $420,000 | **$2,100,000** |
| Phase 2 | 12,000 | $384,000 | $168,000 | $216,000 | $1,008,000 | **$5,040,000** |

> Monthly fee = contracts × $32 (80% of 10% of $400)
> Monthly defaults = contracts × 3.50% × $400
> Monthly net = fee − defaults (before treasury yield)
> Loss ratio is constant at **43.75%** across all milestones 
