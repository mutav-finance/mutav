# Financial Model — Year 1 Projections

> Model built May 2026. Updated to align with monetization model (May 2026).
> This is a simulation for illustration purposes, not a financial guarantee.
> Reserve rules, distribution gate mechanics, and minimum AUM requirements: [Fund Rules](../../operation/fund-rules.md).

---

## Model Premises

| Parameter | Value | Notes |
|---|---|---|
| Initial capital (genesis investors) | $100,000 USDC | Genesis NAV = $1.00 |
| Genesis token supply | 100,000 MUTAV | |
| Initial active contracts | 600 | ~8–10 agencies in the Sul pilot |
| Average monthly contract growth | ~350–400/month | Ramps as imobiliária network expands |
| Average monthly rent | R$2,000 | Sul region benchmark |
| BRL/USD exchange rate | R$5.00 = $1 | Fixed for model simplicity |
| Guarantee fee | 8–15% of rent (dynamic) | 10% used in all projections |
| Monthly fee per contract (to fund, 80%) | R$160 = $32.00 | 10% of rent × 80% split |
| Monthly fee per contract (to protocol, 20%) | R$40 = $8.00 | MUTAV Soluções Garantidora |
| Treasury yield on reserve (Etherfuse/Stellar) | 7.89% APY net USD (0.636%/month) | SELIC-linked; 13.28% BRL adjusted for ~5% annual BRL depreciation |
| Monthly default loss rate (base) | 3.50% × $400 = $14/contract/month | Brazil average; aligned with technical reserve model |
| Monthly default loss rate (stress) | 5–6% × $400 = $20–24/contract/month | Modeled at M5 (5%), M6 (6%), M10 (5%) |
| Redemption fee | 0.25% | Retained in fund, benefits remaining investors |
| Weekly redemption cap | 2.5% of NAV | Onchain enforced |

---

## Break-Even Analysis

### Stage 1 — Founders Mode (0 to ~125 contracts)

| Cost Item | Monthly |
|---|---|
| Tools / infra | R$5,000 |
| Payroll | R$0 — founders working on equity |
| **Total fixed costs** | **~R$5,000** |

Break-even at **~125 active contracts** → R$5,000/month direct protocol revenue (20% × 10% × R$2,000 × 125).

### Stage 2 — Structured Operation (~2,038 contracts)

| Cost Item | Monthly |
|---|---|
| Tools / infra | R$8,500 |
| Fund Manager | R$15,000 |
| Senior Project Manager | R$6,000 |
| Customer Success | R$7,000 |
| Senior Developer | R$15,000 |
| Senior Growth Manager | R$7,500 |
| Legal Advisory | R$15,000 |
| Accounting | R$1,500 |
| Events / Industry Presence | R$6,000 |
| **Total projected fixed costs** | **~R$81,500** |

Break-even at **~2,038 active contracts** → R$81,500/month direct protocol revenue.

### Milestone Summary

| Milestone | Contracts | Direct Revenue | % of TAM |
|---|---|---|---|
| Stage 1 break-even | ~125 | ~R$5,000/month | ~0.001% |
| Stage 2 break-even | ~2,038 | ~R$81,500/month | ~0.023% |
| Year 1 target | ~5,000 | ~R$200,000/month | ~0.05% |

> TAM = surety insurance contracts (27.63%) + paid guarantee instruments (21.33%) = 48.96% of 17.8M rental households in Brazil.

---

## NAV Mechanics and APY Dilution

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

Returns have two components: **ops_net** (fee minus defaults — fixed at $90,000/month for 5,000 contracts, regardless of AUM) and **treasury yield** (scales with every new deposit). When capital grows faster than contracts, the fixed ops_net is split across a larger base — APY compresses.

| AUM | ops_net/month | Treasury/month (0.636%) | Total net/month | Distributable (AUM × 80%) | APY |
|---|---|---|---|---|---|
| $5M | $90,000 | $31,800 | $121,800 | $4,000,000 | **~43%** |
| $6M | $90,000 | $38,160 | $128,160 | $4,800,000 | **~37%** |
| $10M | $90,000 | $63,600 | $153,600 | $8,000,000 | **~26%** |

New investors bring treasury yield on their deposit but claim a share of the ops_net that pre-existed their entry. APY stabilizes only when contracts grow alongside AUM — target ratio: **1 contract per $1,000 of AUM**.

The APY is a **snapshot** of current AUM and contract count — not a forward guarantee. Entry timing affects forward APY, but all investors enter at fair NAV and prior gains are always preserved.

---

## Investor Event Calendar (18 Simulated Entries/Exits)

| # | Month | Type | Amount | Context |
|---|---|---|---|---|
| 1 | M1 | Deposit | +$15,000 | Early adopter |
| 2 | M2 | Deposit | +$30,000 | Moderate investor |
| 3 | M2 | Redemption | -$5,000 | Early profit taking |
| 4 | M3 | Deposit | +$50,000 | Larger early entry |
| 5 | M4 | Deposit | +$20,000 | Moderate entry |
| 6 | M4 | Redemption | -$8,000 | Exited early |
| 7 | M5 | Redemption | -$15,000 | Nervous during default spike |
| 8 | M5 | Deposit | +$25,000 | Bought the stress |
| 9 | M6 | Redemption | -$20,000 | Peak default month — exited |
| 10 | M6 | Deposit | +$10,000 | Maintained conviction |
| 11 | M7 | Deposit | +$200,000 | Institutional entry |
| 12 | M8 | Deposit | +$40,000 | Fund stabilized |
| 13 | M9 | Deposit | +$80,000 | Continued growth |
| 14 | M9 | Redemption | -$10,000 | Partial redemption |
| 15 | M10 | Deposit | +$20,000 | Second stress entry |
| 16 | M11 | Deposit | +$60,000 | Year-end acceleration |
| 17 | M12 | Redemption | -$30,000 | Year-end redemption |
| 18 | M12 | Deposit | +$100,000 | Large year-end entry |

---

## Month-by-Month Simulation

| Month | Active Contracts | Default Rate | Net Investor Flow | Monthly NAV Growth | Total AUM | Tokens in Circulation | NAV per Token |
|---|---|---|---|---|---|---|---|
| 0 (Genesis) | 600 | — | — | — | $100,000 | 100,000 | $1.000 |
| 1 | 950 | 3.5% | +$15,000 | +$17,736 | $132,736 | 112,739 | $1.177 |
| 2 | 1,300 | 3.5% | +$25,000 | +$24,244 | $181,980 | 130,696 | $1.392 |
| 3 | 1,650 | 3.5% | +$50,000 | +$30,857 | $262,837 | 161,403 | $1.628 |
| 4 | 2,000 | 3.5% | +$12,000 | +$37,672 | $312,509 | 167,847 | $1.862 |
| 5 | 2,350 | 5% ↑ | +$10,000 | — (L3 gate) | $322,509 | 173,218 | $1.862 |
| 6 | 2,700 | 6% ↑ | -$10,000 | — (L3 gate) | $312,509 | 167,847 | $1.862 |
| 7 | 3,050 | 4% ↓ | +$200,000 | +$50,788 | $563,297 | 260,269 | $2.164 |
| 8 | 3,400 | 3.5% | +$40,000 | +$64,783 | $668,080 | 276,846 | $2.413 |
| 9 | 3,750 | 3.5% | +$70,000 | +$71,749 | $809,829 | 303,045 | $2.672 |
| 10 | 4,100 | 5% ↑ | +$20,000 | — (L3 gate) | $829,829 | 310,530 | $2.672 |
| 11 | 4,550 | 3.5% | +$60,000 | +$87,178 | $977,007 | 330,855 | $2.952 |
| 12 | 5,000 | 3.5% | +$70,000 | +$96,214 | $1,143,221 | 352,434 | $3.244 |

> **(L3 gate):** loss ratio exceeded 60% — Layer 3 distribution gate activated. All net income redirected to reserve rebuild; no NAV appreciation that month.

---

## Year 1 Summary

| Metric | Value |
|---|---|
| AUM at genesis | $100,000 |
| AUM at Month 12 | $1,143,221 |
| Net capital raised during Year 1 | $562,000 |
| Total protocol revenue (20% split, MUTAV Soluções) | $278,400 |
| Total defaults provisioned | $559,000 |
| Full-year loss ratio | 50.2% |
| Peak loss ratio (Month 6, 6% default rate) | 75.0% |
| L3 distribution gates activated | M5, M6, M10 |
| Active contracts at Month 12 | 5,000 |
| NAV growth (M0 → M12) | +224% |

---

## Default Stress Analysis

The model includes three default spike months (M5 at 5%, M6 at 6%, M10 at 5%). All three pushed the loss ratio above 60%, activating the Layer 3 gate and fully pausing NAV appreciation — income was redirected to rebuild the reserve instead.

| Month | Default Rate | Loss Ratio | Expected gain at 3.5% | Actual gain | Drag |
|---|---|---|---|---|---|
| M5 | 5% ↑ | 62.5% — L3 active | ~$44,288 | $0 | -$44,288 |
| M6 | 6% ↑ | 75.0% — L3 active | ~$50,651 | $0 | -$50,651 |
| M10 | 5% ↑ | 62.5% — L3 active | ~$78,951 | $0 | -$78,951 |

**Key observation:** stress months completely pause NAV appreciation rather than slow it — the fund protects its reserve before rewarding investors. At the 3.5% base rate, the fund operates at a 43.75% loss ratio, providing a 16.25pp cushion before the L3 gate triggers.

---

## Investor Return Scenarios (M12)

| Investor Profile | Entry Month | Amount Invested | Tokens Held | Value at M12 | Return |
|---|---|---|---|---|---|
| Genesis investor | M0 | $100,000 | 100,000 | $324,400 | +224% |
| Early adopter | M1 | $15,000 | 12,739 | $41,321 | +176% |
| Stress buyer | M5 | $25,000 | 13,427 | $43,557 | +74% |
| Institutional | M7 | $200,000 | 92,422 | $299,897 | +50% |
| Early exit | M4 | — | — | $7,980 received | Left ~$6K on the table |
| Panic exit | M6 | — | — | $19,950 received | Left ~$15K on the table |

---

## Key Model Observations

**The redemption mechanism works.** Exits at M4 and M6 did not affect remaining investors' NAV — the 0.25% redemption fee was redistributed to the pool, marginally benefiting those who stayed.

**Timing is the primary investor risk.** Not credit risk, not regulatory risk — timing. Investors who exited during the M6 default spike received a fraction of the return of those who held through it.

**Scale is the moat.** At the 3.5% base loss rate, the fund operates at a 43.75% loss ratio — a 16.25pp buffer before the L3 gate at 60%. Stress months (M5, M6, M10) pushed the ratio to 62.5–75%, triggering full distribution suspension. As contract volume grows, fee income in dollar terms increases, widening the absolute cushion against default spikes.

**The 2.5% weekly redemption cap is structural, not punitive.** It exists because a significant portion of the reserve is deployed in Brazilian Treasury bonds, which require a structured redemption process. The cap prevents a bank-run scenario that would force the fund to sell Treasury positions at adverse timing.

**The dynamic fee is a competitive lever, not a margin variable.** The 8–15% fee range allows MUTAV to compete for high-quality agencies (lower rate) while capturing margin on riskier profiles. All financial projections use 10% as the base rate.

---

## Assumptions That Require Validation

| Assumption | Status | Risk if wrong |
|---|---|---|
| 3.50%/month loss rate on guaranteed rent | Aligned with technical reserve model; Brazil average baseline | Sul region actual losses likely lower (~2.41%/year default frequency) |
| $100K genesis AUM and 600 initial contracts | Dependent on pre-seed close and pilot launch | Core dependency |
| 7.89% APY net USD on Etherfuse TESOURO | 13.28% BRL SELIC adjusted for ~5% annual BRL depreciation | SELIC dependency; USD-adjusted rate tracks FX movement |
| 8–10 imobiliárias onboarded in Phase 0 | Advisor network gives warm access | Execution risk, not relationship risk |
| BRL/USD at R$5.00 | FX exposure exists | AUM USD value impacted; hedge options being evaluated |
| Stage 2 structured costs of R$81,500/month | Based on current market rates | Headcount timing and sequencing may shift this |
