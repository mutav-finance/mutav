# Legal Structure

> Working hypotheses as of May 2026. Not legal advice. All positions pending counsel opinion.

---

## 1. Group Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│  BRAZIL                                                              │
│  MUTAV Soluções (Guarantor)                                          │
│  Legal basis: Art. 37, Lei do Inquilinato (Lei 8.245/91)            │
│  Revenue: 20% of tenant fees · Skin-in-game: mandatory MTVH holder  │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ 80% fee flow
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  OFFSHORE (jurisdiction TBD)                                         │
│                                                                      │
│  Mutav Treasury Fund                                                 │
│  Reserve: Tokenized Brazilian Treasury via Etherfuse (Stellar)      │
│  Share classes: MTVH · MTVM · MTVL                                  │
│                                                                      │
│  Mutav Treasury Management                                           │
│  Fund administrator · 1% p.a. management fee · 0.25% withdrawal fee │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 2. Entity Profiles

### MUTAV Soluções — Brazil

| | |
|---|---|
| Legal form | LTDA or SA (pending counsel) |
| Legal basis | Art. 37, inciso I, Lei 8.245/91 (fiança) — same basis CredPago used at scale |
| Function | Institutional guarantor in rental contracts |
| Revenue | 20% of tenant fees |
| Obligation | Covers defaults up to ceiling; recovers from defaulting tenant via legal subrogation |
| Skin-in-the-game | Mandatory MTVH holder — company absorbs losses first |
| Regulator | TBD — pending counsel; options: BACEN, SUSEP, CVM, or exempt |

### Mutav Treasury Fund — Offshore

| | |
|---|---|
| Jurisdiction | TBD — Cayman Islands, BVI, or Bermuda (under evaluation) |
| Legal form | Exempted Limited Partnership or equivalent |
| Function | Holds investor capital; receives 80% fee flow; issues tokens at current price |
| Reserve | Tokenized Brazilian Treasury via Etherfuse (Stellar) |
| Investor access | International (identity verification required); Brazilian residents pending legal opinion |
| Withdrawals | Weekly queue, 2.5% cap per week, 0.25% exit fee |

**Token classes:**

| Class | Absorbs losses | Yield | Target investor |
|---|---|---|---|
| MTVH | First | Highest | MUTAV Soluções (mandatory) + qualified investors |
| MTVM | If MTVH exhausted | Mid | KYC-verified investors |
| MTVL | Last | Lowest, most stable | Conservative / institutional |

### Mutav Treasury Management — Offshore

| | |
|---|---|
| Jurisdiction | Same as Treasury Fund |
| Function | Fund administrator; runs day-to-day operations |
| Revenue | 1% p.a. management fee + 0.25% withdrawal fee |

---

## 3. Fee Flow

```
Tenant → monthly payment (rent + fee) → Real estate agency
Agency → consolidated monthly transfer → MUTAV Soluções
MUTAV Soluções:
  20% → operational cost
  80% → Mutav Treasury Fund (→ tokenized Treasury via Etherfuse → token price ↑)
Mutav Treasury Management:
  1% p.a. management fee (monthly deduction from fund)
  0.25% withdrawal fee on exits (stays in fund)
```

---

## 4. Offshore Jurisdiction Options

| Jurisdiction | Setup cost | Annual cost | Setup time | Recognition |
|---|---|---|---|---|
| Cayman Islands | $20–40k | $10–20k | 4–8 wks | Highest |
| BVI | $5–15k | $5–10k | 2–4 wks | High |
| Bermuda | $15–30k | $8–15k | 4–8 wks | High |

> Marshall Islands and UAE/ADGM also evaluated but ranked lower on institutional recognition.
> **Decision status:** TBD — final selection requires counsel and Etherfuse holder eligibility confirmation.

---

## 5. Regulatory Framework

### Brazilian Legal Basis

MUTAV Soluções acts as institutional guarantor (fiador) under Art. 37, inciso I, Lei 8.245/91. Same basis CredPago used to scale to 123,000 contracts. Under this framing, the monthly fee is a service charge (not an insurance premium), and MUTAV is a guarantor (not an insurer).

**Key regulatory deadlines:**

| Date | Event | MUTAV relevance |
|---|---|---|
| **May 2026** (in force) | BCB Resolution 521/2025 — monthly stablecoin reporting | Applies if MUTAV is classified as a crypto asset service provider |
| **Oct 30, 2026** | BCB cliff — end of transition period | Cannot transact with unauthorized counterparties; counsel must confirm MUTAV's position before July 2026 |
| **Pending (Senate)** | PL 3.999/20 — Extrajudicial Eviction | Speeds up eviction timelines — tailwind for demand |

**Key risks:**

| Risk | Likelihood | Mitigation |
|---|---|---|
| Classification as crypto asset service provider | Medium | Counsel engaged by July 2026 |
| Etherfuse eligibility for offshore fund | Medium | Fallbacks: Transfero, Bitso |
| CVM fund-of-funds rules triggered | Medium | Subscription Agreement pre-addresses; CVM filing if required |
| CredPago fiança precedent doesn't hold | Low-Medium | P0 counsel opinion; CredPago operated at scale for years |

---

## 6. Open Questions by Priority

**Must resolve before mainnet (P0)**
- Regulatory classification of MUTAV Soluções (crypto service provider, payment institution, or exempt?)
- Etherfuse authorization covers MUTAV's use case?
- Offshore fund eligible to hold Etherfuse TESOURO?
- Offshore jurisdiction election (blocks all entity constitution)

**Resolve within Phase 1 (P1)**
- Does the two-layer structure trigger CVM fund-of-funds rules?
- Tax treatment of token holders
- MTVH classification — qualified (R$1M+) or professional (R$10M+) investor threshold?
- Minimum MTVH stake MUTAV Soluções must retain

**Before institutional onboarding (P2)**
- LTDA vs. SA for MUTAV Soluções
- Can Brazilian residents invest in the offshore fund?

---

## 7. Pending Agreements

All entity documents are blocked on: (1) offshore jurisdiction election, (2) regulatory classification of the Guarantor, (3) Etherfuse eligibility confirmation.

**Target:** all pending items executed within 60 days of pre-seed round close.

**Hard deadline: October 30, 2026** — BCB transition period ends. If MUTAV is classified as a crypto asset service provider, it cannot transact with unauthorized counterparties after this date.

| Category | Key documents | Status |
|---|---|---|
| Entity constitution | Articles of incorporation (BR + offshore), tax registration | Pending (blocked on J1 + L1) |
| Investor agreements | Subscription Agreement, Fund Regulations, Privacy Policy | Draft |
| Commercial agreements | Agency partnership contract, Tenant acceptance term, Fee assignment agreement | Draft / Pending |
| Governance | Shareholder Agreement, Fund Administrator Agreement, Multisig custody policy | Draft / Pending |
| IP & Confidentiality | IP Assignment (founders), Advisor Agreements, NDA templates | Draft / Pending |
