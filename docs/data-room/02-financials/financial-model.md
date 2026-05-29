# Financial Model — Year 1 Projections

> Model built May 2026. This is a simulation for illustration purposes, not a financial guarantee.
> Reserve and distribution gate rules: [Fund Rules](../../operation/fund-rules.md).

---

## Model Premises

| Parameter | Value | Notes |
|---|---|---|
| Initial capital | $100,000 | Token price = $1.00 at launch |
| Initial token supply | 100,000 MUTAV | |
| Initial active contracts | 600 | ~8–10 agencies in the Sul pilot |
| Average monthly contract growth | ~350–400/month | Ramps as agency network expands |
| Average monthly rent | R$2,000 | Sul region benchmark |
| BRL/USD rate | R$5.00 = $1 | Fixed for model simplicity |
| Guarantee fee charged to tenant | 8–15% of rent | 10% used in all projections |
| Monthly fee going to fund (80% of fee) | R$160 = $32.00/contract | |
| Monthly fee going to protocol (20% of fee) | R$40 = $8.00/contract | MUTAV Soluções revenue |
| Treasury yield on reserve | 7.89% per year (net USD) | SELIC-linked; adjusted for ~5% annual BRL depreciation |
| Monthly default loss (base case) | 3.50% of covered rent | Brazil average |
| Monthly default loss (stress months) | 5–6% | Modeled at months 5, 6, and 10 |
| Withdrawal fee | 0.25% | Stays in fund |
| Weekly withdrawal cap | 2.5% of fund | Enforced on-chain |

---

## Break-Even Analysis

| Milestone | Contracts needed | Direct revenue | Cost basis |
|---|---|---|---|
| Stage 1 (founders only) | ~125 | ~R$5,000/month | Tools + infra only; founders on equity |
| Stage 2 (structured team) | ~2,038 | ~R$81,500/month | Full team + legal + ops |
| Year 1 target | ~5,000 | ~R$200,000/month | — |

> Break-even for Stage 2 uses 20% × 10% × R$2,000 × contracts = protocol revenue.

---

## How the Token Price Works

The fund does not distribute income as cash. All net income accrues into the **token price**. Each investor holds tokens; their return is the price appreciation of those tokens over time.

**Token price = Total fund assets ÷ Total tokens in circulation**

When a new investor enters, they buy at the **current price** — not the launch price. This ensures existing investors keep all previously accumulated gains. Deposits and withdrawals never affect other investors' token price.

**Why the annual return (APY) compresses as the fund grows:** Fee income from contracts is roughly fixed per contract count, regardless of how much capital is in the fund. When new capital enters faster than new contracts are added, that fixed income is shared across a larger base — the return per dollar compresses. Target ratio: **1 contract per $1,000 of assets under management**.

| Assets under management | Fee income/month | Treasury yield/month | Total net/month | Annual return (approx.) |
|---|---|---|---|---|
| $5M / 5,000 contracts | $90,000 | $31,800 | $121,800 | **~43%** |
| $6M / 5,000 contracts | $90,000 | $38,160 | $128,160 | **~37%** |
| $10M / 5,000 contracts | $90,000 | $63,600 | $153,600 | **~26%** |

> The annual return shown is a snapshot of current conditions — not a forward guarantee. Entry timing affects forward returns, but all investors enter at a fair price and prior gains are always preserved.

---

## Month-by-Month Simulation

The simulation models 18 investor entries and exits over 12 months, including three default stress months (M5 at 5%, M6 at 6%, M10 at 5%). When the loss ratio exceeds 60%, the reserve protection gate activates: all income is redirected to rebuild the reserve, and the token price does not appreciate that month.

| Month | Active contracts | Default rate | Net investor flow | Token price growth | Total assets | Tokens issued | Token price |
|---|---|---|---|---|---|---|---|
| 0 (Launch) | 600 | — | — | — | $100,000 | 100,000 | $1.000 |
| 1 | 950 | 3.5% | +$15,000 | +$17,736 | $132,736 | 112,739 | $1.177 |
| 2 | 1,300 | 3.5% | +$25,000 | +$24,244 | $181,980 | 130,696 | $1.392 |
| 3 | 1,650 | 3.5% | +$50,000 | +$30,857 | $262,837 | 161,403 | $1.628 |
| 4 | 2,000 | 3.5% | +$12,000 | +$37,672 | $312,509 | 167,847 | $1.862 |
| 5 | 2,350 | 5% ↑ | +$10,000 | — (gate active) | $322,509 | 173,218 | $1.862 |
| 6 | 2,700 | 6% ↑ | -$10,000 | — (gate active) | $312,509 | 167,847 | $1.862 |
| 7 | 3,050 | 4% ↓ | +$200,000 | +$50,788 | $563,297 | 260,269 | $2.164 |
| 8 | 3,400 | 3.5% | +$40,000 | +$64,783 | $668,080 | 276,846 | $2.413 |
| 9 | 3,750 | 3.5% | +$70,000 | +$71,749 | $809,829 | 303,045 | $2.672 |
| 10 | 4,100 | 5% ↑ | +$20,000 | — (gate active) | $829,829 | 310,530 | $2.672 |
| 11 | 4,550 | 3.5% | +$60,000 | +$87,178 | $977,007 | 330,855 | $2.952 |
| 12 | 5,000 | 3.5% | +$70,000 | +$96,214 | $1,143,221 | 352,434 | $3.244 |

---

## Year 1 Summary

| Metric | Value |
|---|---|
| Assets at launch | $100,000 |
| Assets at Month 12 | $1,143,221 |
| Net capital raised during Year 1 | $562,000 |
| Total protocol revenue (20% split, MUTAV Soluções) | $278,400 |
| Total defaults covered | $559,000 |
| Full-year loss ratio | 50.2% |
| Peak loss ratio (Month 6, 6% default rate) | 75.0% |
| Reserve gates activated | Months 5, 6, 10 |
| Active contracts at Month 12 | 5,000 |
| Token price growth (launch → Month 12) | +224% |

---

## Default Stress Analysis

Three default spike months were modeled. All three pushed the loss ratio above 60%, triggering the reserve protection gate and pausing token price appreciation — income was redirected to rebuild the reserve instead.

| Month | Default rate | Loss ratio | Expected gain | Actual gain | Impact |
|---|---|---|---|---|---|
| 5 | 5% ↑ | 62.5% — gate active | ~$44,288 | $0 | -$44,288 |
| 6 | 6% ↑ | 75.0% — gate active | ~$50,651 | $0 | -$50,651 |
| 10 | 5% ↑ | 62.5% — gate active | ~$78,951 | $0 | -$78,951 |

At the base 3.5% default rate, the fund runs at a 43.75% loss ratio — a 16-point buffer before the gate triggers at 60%.

---

## Investor Return Scenarios (Month 12)

| Investor profile | Entry | Amount invested | Value at M12 | Return |
|---|---|---|---|---|
| Genesis investor | Launch | $100,000 | $324,400 | +224% |
| Early adopter | Month 1 | $15,000 | $41,321 | +176% |
| Entered during stress | Month 5 | $25,000 | $43,557 | +74% |
| Institutional entry | Month 7 | $200,000 | $299,897 | +50% |
| Early exit | Month 4 | — | $7,980 received | Left ~$6K on the table |
| Panic exit | Month 6 | — | $19,950 received | Left ~$15K on the table |

---

## Key Observations

**Withdrawals don't hurt other investors.** Exits at months 4 and 6 did not move the token price for remaining investors — the 0.25% withdrawal fee was distributed to the pool.

**Timing is the main investor risk.** Not credit risk, not regulatory risk — timing. Investors who exited during the month 6 default spike received a fraction of the return of those who held through it.

**Scale widens the cushion.** As contract volume grows, fee income in dollar terms increases, widening the absolute buffer against default spikes. At 5,000 contracts, a stress month costs the fund ~$44–79K in deferred gains — recoverable in the following months.

**The weekly withdrawal cap protects everyone.** A significant portion of the reserve is in Brazilian Treasury bonds, which require structured redemption. The cap prevents a scenario where the fund is forced to sell Treasury positions at unfavorable timing to cover a rush of withdrawals.

**The dynamic fee (8–15%) is a competitive lever.** It allows MUTAV to compete for high-quality agencies with lower rates while maintaining margin on riskier profiles. All projections use 10%.

---

## Assumptions That Require Validation

| Assumption | Status | Risk if wrong |
|---|---|---|
| 3.50%/month default loss rate | Brazil average baseline; Sul region likely lower (~2.41%/year) | Conservative estimate — actual losses may be lower |
| $100K launch capital, 600 initial contracts | Dependent on pre-seed close and pilot | Core dependency |
| 7.89% APY net USD on Etherfuse Treasury | SELIC at 13.28% BRL, adjusted for ~5% BRL annual depreciation | Tracks SELIC and FX movement |
| 8–10 agencies onboarded in Phase 0 | Warm access via advisor network | Execution risk, not relationship risk |
| BRL/USD at R$5.00 | FX exposure exists | Fund USD value impacted; hedge options under evaluation |
| Stage 2 costs of R$81,500/month | Based on current market rates | Headcount timing may shift this |
