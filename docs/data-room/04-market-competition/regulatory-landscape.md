# Regulatory Landscape

> Working hypotheses as of May 2026. Not legal advice. All positions pending counsel opinion.

---

## Overview

MUTAV is structured to operate in the gap between SUSEP (insurance), CVM (securities), and BACEN (payment institutions) — using a legal basis already proven at scale by CredPago: **fiança under Art. 37 of Brazil's Lei do Inquilinato**. The offshore fund (Mutav Treasury Fund) is subject to its jurisdiction of domicile, to be elected.

The overall regulatory direction is favorable: extrajudicial eviction law accelerates guarantee value; BCB's open finance agenda supports open capital models; CVM Sandbox is available if the fund structure triggers CVM (incumbents cannot use it — they are already licensed).

---

## Brazilian Legal Basis

MUTAV Soluções acts as institutional fiador under Art. 37, inciso I, Lei 8.245/91. Same basis CredPago used to scale to 123,000 contracts without SUSEP or CVM registration. Under this framing, the monthly tenant fee is a service fee (not an insurance premium), and MUTAV is a fiador (not an insurer).

**Status:** Working hypothesis — P0 priority for counsel engagement (Months 0-2).

---

## Offshore Jurisdiction Options

| Jurisdiction | Setup Cost | Annual Cost | Setup Time | Recognition | Certainty |
|---|---|---|---|---|---|
| Cayman Islands | $20–40k | $10–20k | 4–8 wks | ⭐⭐⭐⭐⭐ | Highest |
| BVI | $5–15k | $5–10k | 2–4 wks | ⭐⭐⭐⭐ | High |
| Bermuda | $15–30k | $8–15k | 4–8 wks | ⭐⭐⭐⭐ | High |
| Marshall Islands | $1–3k | $1–2k | 1–2 wks | ⭐⭐ | Low |

**Working assumption:** Cayman or BVI. Final decision requires counsel and Etherfuse holder eligibility confirmation.

---

## Regulatory Calendar

| Date | Event | MUTAV Relevance |
|---|---|---|
| **May 2026** (in force) | BCB Res 521/2025 — monthly stablecoin reporting | Applies immediately if MUTAV is VASP-classified |
| **Oct 30, 2026** | BCB VASP cliff — end of 270-day transition | Cannot transact with unauthorized counterparties; counsel must confirm before July 2026 |
| **Pending (Senate)** | PL 3.999/20 — Extrajudicial Eviction | Tailwind — faster eviction → more valuable guarantees |

---

## Open Questions by Priority

**P0 — Must resolve before mainnet**

- **L1:** Is MUTAV Soluções a VASP (BCB Res 519-521), payment institution, or exempt under fiança framing? The single most critical question — determines BCB reporting obligations and the October 2026 cliff exposure.
- **L3:** Does Etherfuse's existing CVM/BCB authorization cover MUTAV's use case? If not, MUTAV needs its own authorization before October 2026.

**P1 — Resolve within Phase 1**

- **L2:** Does the two-layer structure (investor → MUTAV token → TESOURO → Tesouro Direto) trigger CVM Res 175 fund-of-funds rules? Determines disclosure obligations for Brazilian resident investors.
- **L4:** Tax treatment of MUTAV token holders (IRRF/IOF vs. direct Tesouro Direto holders). Affects investor disclosure and annual reporting.
- **L7:** CVM 175 classification for MTVH: qualified (R$1M+) or professional (R$10M+)? Determines addressable retail market for the highest-yield tranche.

**P2 — Before institutional onboarding**

- **L5:** LTDA vs. SA for MUTAV Soluções. Affects governance and equity structure.
- **L8:** Can Brazilian residents invest in the offshore fund? Requires dual-regime opinion (CVM 175 + BACEN). Explicitly scoped out of Phase 1.

---

## Risk Summary

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| VASP classification (L1) | Medium | High | Counsel engaged by July 2026 |
| Etherfuse authorization gap (L3) | Medium | High | BaaS fallbacks: Transfero, Bitso |
| CVM 175 fund-of-funds (L2) | Medium | Medium | Subscription Agreement pre-addresses; file CVM if required |
| CredPago fiança precedent doesn't hold | Low-Medium | Very high | P0 counsel opinion; CredPago operated at scale for years |
