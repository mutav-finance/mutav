# Legal Structure

> Working hypotheses as of May 2026. Not legal advice. All positions pending counsel opinion.

---

## 1. Group Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│  BRAZIL                                                              │
│  MUTAV Soluções (Garantidora)                                        │
│  Legal basis: Art. 37, Lei do Inquilinato (Lei 8.245/91)            │
│  Revenue: 20% of tenant fees · Skin-in-game: mandatory MTVH holder  │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ 80% fee flow (cessão de recebíveis)
                               ▼
┌─────────────────────────────────────────────────────────────────────┐
│  OFFSHORE (jurisdiction TBD)                                         │
│                                                                      │
│  Mutav Treasury Fund                                                 │
│  Reserve: TESOURO via Etherfuse (Stellar)                            │
│  Share classes: MTVH · MTVM · MTVL                                  │
│                                                                      │
│  Mutav Treasury Management                                           │
│  Fund administrator · 1% p.a. management fee · 0.25% redemption fee │
└─────────────────────────────────────────────────────────────────────┘
```

**Convention:** "the Garantidora" → MUTAV Soluções · "the Fund" → Mutav Treasury Fund · "the Manager" → Mutav Treasury Management

---

## 2. Entity Profiles

### MUTAV Soluções — Brazil

| | |
|---|---|
| Legal form | LTDA or SA (pending counsel, decision L5) |
| Legal basis (product/service) | Art. 37, inciso I, Lei 8.245/91 (fiança) — product framing only, not regulatory structure |
| Function | Institutional fiador in rental contracts |
| Revenue | 20% of tenant fees |
| Obligation | Covers defaults up to ceiling; recovers via sub-rogação (Art. 831 CC) |
| Skin-in-the-game | Mandatory MTVH holder — company loses first on any default |
| Regulator | TBD — pending counsel (L1); options: BACEN, SUSEP, CVM, or exempt. Art. 37 frames the product/service only, not the regulatory structure |

### Mutav Treasury Fund — Offshore

| | |
|---|---|
| Jurisdiction | TBD — options in evaluation: Cayman Islands, BVI, Bermuda, Marshall Islands, UAE/ADGM |
| Legal form | Exempted Limited Partnership or equivalent |
| Function | Holds investor capital; receives 80% fee flow; issues tokens at NAV |
| Reserve | Etherfuse TESOURO (Stellar SEP-0041) |
| Investor access | International (KYC required); Brazilian residents pending L8 |
| Redemption | Weekly queue, 2.5% AUM cap, 0.25% exit fee |

**Share classes:**

| Class | Default Absorption | Yield | Target |
|---|---|---|---|
| MTVH | First | Highest | MUTAV Soluções (mandatory) + qualified/professional investors (TBD — L7) |
| MTVM | If MTVH exhausted | Mid | KYC investors |
| MTVL | Last | Lowest, most stable | Conservative / institutional |

### Mutav Treasury Management — Offshore

| | |
|---|---|
| Jurisdiction | Same as Treasury Fund |
| Function | Fund administrator; runs operator (hot wallet) functions |
| Revenue | 1% p.a. management fee + 0.25% redemption fee |
| Founders | Same as MUTAV Soluções — separate legal entity |

---

## 3. Fee Flow

```
Tenant → monthly boleto (rent + fee) → Imobiliária
Imobiliária → consolidated monthly transfer → MUTAV Soluções
MUTAV Soluções:
  20% → operational cost
  80% → Mutav Treasury Fund (→ TESOURO via Etherfuse → NAV ↑ for all token holders)
Mutav Treasury Management:
  1% p.a. management fee (monthly deduction from AUM)
  0.25% redemption fee on exits (retained in fund)
```

---

## 4. Offshore Jurisdiction Options

| Jurisdiction | Setup Cost | Annual Cost | Setup Time | Recognition | Certainty |
|---|---|---|---|---|---|
| Cayman Islands | $20–40k | $10–20k | 4–8 wks | ⭐⭐⭐⭐⭐ | Highest |
| BVI | $5–15k | $5–10k | 2–4 wks | ⭐⭐⭐⭐ | High |
| Bermuda | $15–30k | $8–15k | 4–8 wks | ⭐⭐⭐⭐ | High |
| Marshall Islands | $1–3k | $1–2k | 1–2 wks | ⭐⭐ | Low |
| UAE / ADGM | $10–25k | $8–15k | 4–8 wks | ⭐⭐⭐ | Medium |
| Próspera (Honduras) | ~$1k | Very low | Fast | ⭐ | ⚠️ Critical — ZEDE framework declared unconstitutional retroactively by Honduras Supreme Court (2024); Próspera contesting via ICSID arbitration ($10.7B); operating via workarounds |

**Decision status:** TBD — all options under evaluation. Final decision requires counsel and Etherfuse holder eligibility confirmation (ET1).

---

## 5. Regulatory Framework

### Brazilian Legal Basis

MUTAV Soluções acts as institutional fiador under Art. 37, inciso I, Lei 8.245/91. Same basis CredPago used to scale to 123,000 contracts. Under this framing, the monthly tenant fee is a service fee (not an insurance premium), and MUTAV is a fiador (not an insurer).

**Status:** Product/service framing established. Who oversees MUTAV Soluções is TBD — P0 priority for counsel engagement (Months 0–2). No regulatory structure pre-defined.

**Favorable signals:**
- Extrajudicial eviction law (PL 3.999/20, pending Senate) — faster eviction → more valuable guarantees
- BCB open finance agenda supports open capital models
- CVM Sandbox available if fund structure triggers CVM (incumbents cannot use it — they are already licensed)

### Regulatory Calendar

| Date | Event | MUTAV Relevance |
|---|---|---|
| **May 2026** (in force) | BCB Res 521/2025 — monthly stablecoin reporting | Applies immediately if MUTAV is VASP-classified |
| **Oct 30, 2026** | BCB VASP cliff — end of 270-day transition | Cannot transact with unauthorized counterparties; counsel must confirm before July 2026 — hard deadline |
| **Pending (Senate)** | PL 3.999/20 — Extrajudicial Eviction | Tailwind for demand; no direct compliance obligation |

### Risk Summary

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| VASP classification (L1) | Medium | High | Counsel engaged by July 2026 |
| Etherfuse authorization gap (L3) | Medium | High | BaaS fallbacks: Transfero, Bitso |
| CVM 175 fund-of-funds trigger (L2) | Medium | Medium | Subscription Agreement pre-addresses; file CVM if required |
| CredPago fiança precedent doesn't hold | Low-Medium | Very high | P0 counsel opinion; CredPago operated at scale for years |

---

## 6. Open Questions by Priority

**P0 — Must resolve before mainnet**

- **L1:** Regulatory framing of MUTAV Soluções — VASP (BCB Res 519–521), payment institution, or exempt under fiança? Determines reporting obligations and October 2026 cliff exposure.
- **L3:** Does Etherfuse's existing CVM/BCB authorization cover MUTAV's use case? If not, MUTAV needs its own authorization before October 2026.
- **ET1:** Is Etherfuse eligible for offshore fund holders? If restricted, entire treasury structure must be reconsidered — existential dependency.
- **J1:** Offshore jurisdiction election. Blocks entity constitution, ET1 confirmation, and L3.

**P1 — Resolve within Phase 1**

- **L2:** Does the two-layer structure (investor → MUTAV token → TESOURO → Tesouro Direto) trigger CVM Res 175 fund-of-funds rules?
- **L4:** Tax treatment of MUTAV token holders (IRRF/IOF vs. direct Tesouro Direto holders).
- **L7:** CVM 175 classification for MTVH — qualified (R$1M+) or professional (R$10M+)?
- **F3:** Minimum MTVH stake that MUTAV Soluções must retain (skin-in-the-game floor).
- **F5:** Blocked investor jurisdictions (e.g., US persons).

**P2 — Before institutional onboarding**

- **L5:** LTDA vs. SA for MUTAV Soluções.
- **L8:** Can Brazilian residents invest in the offshore fund? Dual-regime opinion (CVM 175 + BACEN) required. Explicitly scoped out of Phase 1.

---

## 7. Pending Legal Agreements

### Entity Documents

| Document | Status | Notes |
|---|---|---|
| Articles of incorporation — MUTAV Soluções (BR) | PENDING | Requires regulatory framing (L1) + counsel engagement |
| Articles of incorporation — Mutav Treasury Fund (offshore) | PENDING | Requires offshore jurisdiction election (J1) |
| Articles of incorporation — Mutav Treasury Management (offshore) | PENDING | Co-registered with Treasury Fund |
| Tax registration — MUTAV Soluções (CNPJ) | PENDING | Post-incorporation |
| Tax registration — offshore entities | PENDING | Per jurisdiction requirements |

### Investor Agreements

| Document | Status | Notes |
|---|---|---|
| Subscription Agreement (Mutav Treasury Fund) | DRAFT | Governs investor participation: KYC, class selection, NAV mechanics, risk disclosure, management/redemption fees, waterfall |
| Fund Regulations (Regulamento do Fundo) | DRAFT | Defines fund rules, governance, operator/owner roles, cap structure |
| Privacy Policy / LGPD compliance | DRAFT | Required for investor onboarding and imobiliária data processing |
| Extrato anual de movimentação — investor | PENDING | Annual statement of deposits, redemptions, and NAV appreciation per investor for IR tax reporting support |

### Commercial Agreements

| Document | Status | Notes |
|---|---|---|
| Contrato de Parceria — Imobiliária | DRAFT | Formalizes imobiliária as distribution channel + fee collection agent; must specify repasse deadline and form |
| Termo de Adesão — Tenant | DRAFT | Tenant's acceptance of MUTAV guarantee terms; part of the rental contract; must not characterize fee as insurance premium |
| Contrato de Cessão de Recebíveis | PENDING | Documents the 80% fee pass-through — recurring per transfer, not a single master document |
| Notificação formal ao inquilino inadimplente | PENDING | Required for extrajudicial debt collection post-coverage; must comply with CDC |
| Nota fiscal de serviço (ISS) | PENDING | MUTAV Soluções must issue service invoices to imobiliárias for each guarantee period — municipal ISS obligation |

### Intellectual Property & Confidentiality

| Document | Status | Notes |
|---|---|---|
| IP Assignment Agreement — founders | PENDING | Assigns all IP developed pre-incorporation to the entity |
| Advisor Agreements (Lucas Oliveira, Cinara Bigóis) | DRAFT | Formalizes advisory relationships; includes IP assignment + non-compete |
| NDA template (investor) | DRAFT | Standard mutual NDA for diligence conversations |
| NDA template (partner/imobiliária) | DRAFT | For pre-partnership conversations with imobiliárias |

### Governance Documents

| Document | Status | Notes |
|---|---|---|
| Shareholder Agreement — MUTAV Soluções | PENDING | Governs founder rights, vesting, drag-along/tag-along |
| Fund Administrator Agreement | PENDING | Formalizes Mutav Treasury Management as administrator of Mutav Treasury Fund |
| Multisig Key Custody Policy | DRAFT | Documents owner (cold wallet) key management and signing procedures |

---

## 8. Timeline & Deadlines

All entity constitution documents are blocked on the pre-seed round close and the selection of:
1. Offshore jurisdiction (J1)
2. Regulatory framing of Garantidora (L1)
3. Brazilian legal form — LTDA or SA (L5)
4. Offshore legal agent

Target: all PENDING items converted to EXECUTED within 60 days of round close.

> **Hard regulatory deadline: October 30, 2026** — BCB Res 521/2025 VASP cliff. If MUTAV is classified as a VASP, it cannot transact with unauthorized counterparties after this date. L1 must be resolved before this deadline regardless of round close timing.
