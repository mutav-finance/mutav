# Financial Model — Year 1 Projections

> Model built May 2026. Assumptions subject to revision as operational parameters are finalized.
> This is a simulation for illustration purposes, not a financial guarantee.

---

## Model Premises

| Parameter | Value | Notes |
|---|---|---|
| Initial capital (seed investors) | $500,000 USDC | Genesis NAV = $1.00 |
| Genesis token supply | 500,000 MUTAV | |
| Initial active contracts | 1,000 | ~30 imobiliárias in the Sul pilot |
| Average monthly growth | ~2,000 contracts/month | Ramps as imobiliária network expands |
| Average monthly rent | R$2,000 | Sul region benchmark |
| BRL/USD exchange rate | R$5.00 = $1 | Fixed for model simplicity |
| Monthly fee per contract (to fund, 80%) | R$160 = $32.00 | 10% of rent × 80% split |
| Monthly fee per contract (to protocol, 20%) | R$40 = $8.00 | |
| Treasury yield on reserve (Etherfuse/Stellar) | 5% APY | Brazilian Treasury SELIC-linked |
| Base default rate | 3% per year | Sul region: lowest in Brazil (2.41%) |
| Stress default rate (modeled spike months) | 5-6% per year | Modeled at M5, M6, M10 |
| Default payout per event | 3 months of rent = $1,200 | Standard coverage per contract |
| Redemption fee | 0.25% | Retained in fund, benefits remaining investors |
| Weekly redemption cap | 2.5% of NAV | Onchain enforced |

---

## Investor Event Calendar (20 Simulated Entries/Exits)

| # | Month | Type | Amount | Context |
|---|---|---|---|---|
| 1 | M1 | Deposit | +$50,000 | Early adopter |
| 2 | M1 | Deposit | +$5,000 | Small retail investor |
| 3 | M2 | Deposit | +$200,000 | Medium investor |
| 4 | M2 | Redemption | -$10,000 | Realized early profit |
| 5 | M3 | Deposit | +$500,000 | Large investment |
| 6 | M3 | Deposit | +$1,000 | Minimum ticket |
| 7 | M4 | Redemption | -$30,000 | Exited early |
| 8 | M4 | Deposit | +$15,000 | Moderate entry |
| 9 | M5 | Redemption | -$50,000 | Nervous during default spike |
| 10 | M5 | Deposit | +$100,000 | Bought the stress |
| 11 | M6 | Redemption | -$80,000 | Peak default month — exited |
| 12 | M6 | Deposit | +$25,000 | Maintained conviction |
| 13 | M7 | Deposit | +$1,000,000 | Institutional entry |
| 14 | M8 | Deposit | +$75,000 | Fund stabilized |
| 15 | M9 | Deposit | +$300,000 | Continued growth |
| 16 | M9 | Redemption | -$20,000 | Partial redemption |
| 17 | M10 | Deposit | +$50,000 | Second stress entry |
| 18 | M11 | Deposit | +$200,000 | Year-end acceleration |
| 19 | M12 | Redemption | -$100,000 | Year-end redemption |
| 20 | M12 | Deposit | +$500,000 | Large year-end entry |

---

## Month-by-Month Simulation

| Month | Active Contracts | Default Rate | Net Investor Flow | Monthly NAV Growth | Total AUM | Tokens in Circulation | NAV per Token |
|---|---|---|---|---|---|---|---|
| 0 (Genesis) | 1,000 | — | — | — | $500,000 | 500,000 | $1.000 |
| 1 | 1,800 | 3% | +$55,000 | +$55,233 | $610,233 | 555,000 | $1.099 |
| 2 | 3,200 | 3% | +$190,025 | +$97,415 | $897,673 | 727,884 | $1.233 |
| 3 | 5,000 | 3% | +$501,000 | +$152,828 | $1,551,501 | 1,134,210 | $1.368 |
| 4 | 7,500 | 3% | -$14,925 | +$226,902 | $1,763,478 | 1,123,245 | $1.570 |
| 5 | 9,000 | 5% ↑ | +$50,125 | +$253,932 | $2,067,535 | 1,155,092 | $1.790 |
| 6 | 11,500 | 6% ↑ | -$54,800 | +$311,527 | $2,324,262 | 1,124,365 | $2.067 |
| 7 | 13,000 | 4% ↓ | +$1,000,000 | +$382,921 | $3,707,183 | 1,608,157 | $2.305 |
| 8 | 15,500 | 3% ↓ | +$75,000 | +$471,459 | $4,253,642 | 1,640,695 | $2.593 |
| 9 | 17,000 | 3% | +$280,050 | +$518,691 | $5,052,383 | 1,748,696 | $2.890 |
| 10 | 19,500 | 5% ↑ | +$50,000 | +$555,072 | $5,657,455 | 1,765,997 | $3.203 |
| 11 | 21,000 | 3% ↓ | +$200,000 | +$641,806 | $6,499,261 | 1,828,438 | $3.555 |
| 12 | 23,500 | 3% | +$400,250 | +$720,648 | $7,620,159 | 1,940,956 | $3.926 |

---

## Year 1 Summary

| Metric | Value |
|---|---|
| AUM at genesis | $500,000 |
| AUM at Month 12 | $7,620,159 |
| Net capital raised during Year 1 | $2,731,000 |
| Total protocol revenue (20% split, MUTAV Soluções) | $1,196,225 |
| Total defaults paid | $555,678 |
| Loss ratio (full year) | 11.6% |
| Peak loss ratio (Month 6, 6% default rate) | 18.8% |
| Active contracts at Month 12 | 23,500 |
| NAV growth (M0 → M12) | +293% |

---

## Default Stress Analysis

The model includes three default spike months (M5 at 5%, M6 at 6%, M10 at 5%). In all cases, the NAV continued to rise — the spikes reduced the *rate* of appreciation, they did not reverse it.

| Month | Default Rate | Expected gain at 3% | Actual gain | Drag |
|---|---|---|---|---|
| M5 | 5% | ~$278,000 | $253,932 | -$24,068 |
| M6 | 6% | ~$350,000 | $311,527 | -$38,473 |
| M10 | 5% | ~$610,000 | $555,072 | -$54,928 |

**Key observation:** at scale, fee income from the growing contract base absorbs default losses without drawing down the principal. The model is self-reinforcing: more contracts → more fee income → higher tolerance for default spikes.

---

## Investor Return Scenarios (M12)

| Investor Profile | Entry Month | Amount Invested | Tokens Held | Value at M12 | Return |
|---|---|---|---|---|---|
| Genesis founder | M0 | $500,000 | 500,000 | $1,963,000 | +293% |
| Institutional | M7 | $1,000,000 | 433,792 | $1,702,826 | +70% |
| Large deposit | M3 | $500,000 | 365,693 | $1,435,591 | +187% |
| Stress buyer | M5 | $100,000 | 55,866 | $219,285 | +119% |
| Early exit | M4 | — | — | $29,925 received | Left $79K+ on the table |
| Panic exit | M6 | — | — | $79,800 received | Left $113K+ on the table |

---

## Key Model Observations

**The redemption mechanism works.** Exits at M4 and M6 did not affect remaining investors' NAV — the 0.25% redemption fee was redistributed to the pool, marginally benefiting those who stayed.

**Timing is the primary investor risk.** Not credit risk, not regulatory risk — timing. Investors who exited during the M6 default spike received less than half the return of those who held through it.

**Scale is the moat.** The loss ratio at M6 (peak default, 6%) was 18.8% — severe but manageable. At $7M+ AUM and 20,000+ contracts, a 6% default month generates proportionally lower NAV impact. The larger the fund, the more resilient the portfolio.

**The 2.5% weekly redemption cap is structural, not punitive.** It exists because a significant portion of the reserve is deployed in Brazilian Treasury bonds, which require a structured redemption process. The cap prevents a bank-run scenario that would force the fund to sell Treasury positions at adverse timing.

---

## Assumptions That Require Validation

| Assumption | Status | Risk if wrong |
|---|---|---|
| 3% annual default rate in Sul region | Consistent with Superlógica data (2.41% Sul) | Conservative; actual risk is lower |
| $500K seed AUM and 1,000 initial contracts | Dependent on pilot fundraise close | Core dependency |
| 5% APY on Etherfuse TESOURO | Brazilian SELIC rate dependency | SELIC currently 10.5%; 5% is conservative |
| 20-30 imobiliárias onboarded in Phase 1 | Advisor network gives warm access | Execution risk, not relationship risk |
| BRL/USD at R$5.00 | FX exposure exists | AUM USD value impacted; hedge options being evaluated |
