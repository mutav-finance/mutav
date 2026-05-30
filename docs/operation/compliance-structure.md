# MUTAV — Compliance Structure

> Consolidated document generated 2026-05-19. Covers operational flows, compliance processes, and open decisions.
> Companion document — legal structure, entities, and pending agreements: [`docs/data-room/05-company-docs/legal-structure.md`](../data-room/05-company-docs/legal-structure.md).
> Treasury policy decisions for the app: [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

---

## Index

1. [Overview](#overview)
2. [Front 1 — MUTAV Soluções (BR Guarantor)](#front-1--mutav-soluções-br-guarantor)
3. [Front 2 — Mutav Treasury Fund (Offshore)](#front-2--mutav-treasury-fund-offshore)
4. [Mutav Treasury Management](#mutav-treasury-management)
5. [Default Waterfall](#default-waterfall)
6. [Entity and Regulator Map](#entity-and-regulator-map)
7. [Agency Onboarding](#1-agency-onboarding)
8. [Tenant Guarantee Contract](#2-tenant-guarantee-contract)
9. [Investor Onboarding](#3-investor-onboarding)
10. [Monthly Fee Flow](#4-monthly-fee-flow)
11. [Default Event](#5-default-event)
12. [Liquidation and Fund Coverage](#6-liquidation-and-fund-coverage)
13. [Credit Recovery](#7-credit-recovery)
14. [Investor Redemption](#8-investor-redemption)
15. [Ongoing Obligations](#9-ongoing-obligations)
16. [Open Decisions](#open-decisions)

---

## Overview

```
┌──────────────────────────────────────────────────────────────────────┐
│  BRAZIL                             OFFSHORE (jurisdiction TBD)      │
│                                                                       │
│  MUTAV Soluções        ──80%──►  Mutav Treasury Fund                │
│  (Guarantor)                        (Front 2)                        │
│                                                                       │
│  Mutav Treasury Management  ◄── fees ──── manages the fund          │
└──────────────────────────────────────────────────────────────────────┘
```

**Reference convention in this document:**
- "the Guarantor" → MUTAV Soluções
- "the Fund" → Mutav Treasury Fund
- "the Manager" → Mutav Treasury Management

---

## Front 1 — MUTAV Soluções (BR Guarantor)

**What it is:** Brazilian operational company, acts as institutional guarantor in rental contracts.

**Legal basis (product/service):** Art. 37, inciso I, Lei do Inquilinato (fiança) — product framing, not the regulatory structure. **Regulatory classification:** TBD — pending counsel (L1). Options under evaluation: BACEN, SUSEP, CVM, or none (exempt under fiança). No pre-defined regulatory position.

**Revenue flow:**

```
Tenant pays fee with rent
        │ (single invoice)
        ▼
Agency collects and transfers to Guarantor
        │
        ├─ 20% → Guarantor operational account
        └─ 80% → Mutav Treasury Fund
```

**Default coverage:**

```
Default detected
        │
        ▼
Guarantor triggers the Fund
        │
        └─ MTVH absorbs first (Guarantor is mandatory MTVH holder)
```

**Skin-in-the-game:** Guarantor holds MTVH tokens — loses first on any default.

---

## Front 2 — Mutav Treasury Fund (Offshore)

### Jurisdiction

TBD — options under evaluation:

| Jurisdiction | Profile |
|---|---|
| Cayman Islands | Institutional standard, higher cost, most stable |
| BVI | Mid cost, well established |
| Bermuda | Used by OnRe, strong for reinsurance/RWA |
| Marshall Islands | Low cost, DAOs with legal personhood |
| UAE / ADGM | Growing in Web3, modern regulation |

### Token class structure

1 fund with 3 token classes:

```
Mutav Treasury Fund
│
├─ MTVH Token (Subordinated)
│   Investors: MUTAV Soluções (mandatory holder) + qualified/professional investors
│   Note: CVM Res. 175 Arts. 4/11 classification applicable to BR resident investors;
│         offshore fund subject to domicile jurisdiction regulation — pending counsel
│   Risk: absorbs all defaults first
│   Yield: highest
│
├─ MTVM Token (Mezzanine)
│   Investors: any investor (KYC)
│   Risk: absorbs if MTVH is exhausted
│   Yield: mid
│
└─ MTVL Token (Senior)
    Investors: any investor (KYC)
    Risk: absorbs last
    Yield: lowest, most stable
```

### Fund reserves

Working hypothesis: reserves allocated in tokenized Treasury via Etherfuse (Stellar) — pending confirmation with Etherfuse on:
1. Offshore holder eligibility (residency/KYB restrictions)
2. Custody and key segregation model (standard offshore jurisdiction requirement)
3. BRL redemption flow — Etherfuse liquidates in BRL to a BR account, not in crypto; FX path for offshore fund TBD

Assuming confirmation:
- Token price appreciates daily
- Default = partial liquidation of Treasury position
- Loss cascade: MTVH → MTVM → MTVL

### Investor flow

```
Investor
  └─ KYC on MUTAV platform
  └─ deposits crypto
  └─ receives MTVH / MTVM / MTVL tokens
  └─ self-custodial (own wallet)
  └─ redemption: returns tokens → receives crypto (- withdrawal fee)
```

---

## Mutav Treasury Management

**What it is:** entity that administers the Mutav Treasury Fund, registered in the fund's jurisdiction.

**Revenue:**
- Management fee (% p.a. on fund AUM)
- Withdrawal fee (% on investor redemptions)

**Group relationship:** same founders, separate legal entity from the Guarantor.

---

## Default Waterfall

```
Default occurs in portfolio
        │
        ▼
[1] MTVH absorbs → MTVH token price falls
        │ (if MTVH exhausted)
        ▼
[2] MTVM absorbs → MTVM token price falls
        │ (if MTVM exhausted)
        ▼
[3] MTVL absorbs → MTVL token price falls
```

---

## Entity and Regulator Map

> Canonical entity names for the group. Legal suffix (LTDA / SA) TBD with counsel before incorporation.

| Entity | Country | Regulator | Revenue |
|---|---|---|---|
| MUTAV Soluções | Brazil | TBD — pending counsel (L1) | 20% of fee split |
| Mutav Treasury Fund | Offshore (TBD) | Local regulator (TBD) | — |
| Mutav Treasury Management | Offshore (TBD) | Local regulator (TBD) | Management fee + withdrawal fee |

---

## 1. Agency Onboarding

**Actors:** Agency, Guarantor

**What happens:** agency registers on the platform and begins offering the MUTAV guarantee to its rental contracts.

### Required documents

| Document | Purpose |
|---|---|
| MUTAV Partnership Contract | Formalizes agency as distribution channel and fee collection agent |
| Active CNPJ certificate | Business entity verification |
| CRECI license certificate | Legal authorization for real estate intermediation |
| Bank details | Account for fee transfers to the Guarantor |
| Legal representative ID | KYC of the individual representing the agency |

### Regulatory obligations

- **AML/KYC:** collect and verify agency and legal representative data before activating access
- **Collection agent contract:** formalize in contract that the agency collects the tenant fee on behalf of the Guarantor and transfers in full
- **Privacy policy / LGPD:** agency must accept the terms for processing tenant data

---

## 2. Tenant Guarantee Contract

**Actors:** Agency, Tenant, Guarantor

**What happens:** agency initiates the analysis on the MUTAV platform before any interaction with the tenant. Only after approval is the tenant involved to sign.

**Legal basis:** Art. 37, inciso I, Lei do Inquilinato (Lei 8.245/91) — fiança.

### Activation flow

```
Agency accesses MUTAV dashboard
        │
        ▼
Agency enters tenant + property + documents
        │
        ▼
MUTAV platform analyzes automatically:
  — Tenant score (payment history and legal actions)
  — Agency reputation (contract management history)
  — Fund capacity (available coverage)
  — Contract conditions (rent amount, term, property)
        │
        ├─ Rejected → agency notified, tenant not contacted
        │
        └─ Approved → score defines risk tier and fee:
                        Low risk  → lower fee
                        Mid risk  → mid fee
                        High risk → higher fee
                              │
                              ▼
                 Agency informs tenant of approval and fee
                              │
                              ▼
                 Tenant signs MUTAV Acceptance Term
                              │
                              ▼
                 Guarantee clause enters the rental contract
                              │
                              ▼
                 Contract activated on platform linked to agency
                              │
                              ▼
                 Monthly invoice begins (rent + MUTAV fee)
```

### Required documents

| Document | When | Purpose |
|---|---|---|
| Tenant + property data | Before analysis — provided by agency | Basis for score |
| Risk analysis result | Generated by platform | Record of approval and fee tier |
| MUTAV Acceptance Term | Signed by tenant after approval | Acceptance of terms and billing authorization |
| Guarantee clause | Inserted in rental contract | Formalizes MUTAV as guarantor |

### Regulatory obligations

- **LGPD:** agency collects tenant data — must have legal basis (contract execution) and clear privacy policy
- **Lei do Inquilinato:** guarantee clause must identify MUTAV as guarantor, scope, and maximum coverage ceiling
- **No double guarantee:** contract cannot require another modality alongside MUTAV (Art. 37, sole paragraph)
- **Fee:** monthly amount expressed in Acceptance Term — must not be characterized as an insurance premium

---

## 3. Investor Onboarding

**Actors:** Investor, Fund (offshore), Manager

**What happens:** investor registers on the platform, passes KYC, deposits crypto, and receives MTVH / MTVM / MTVL tokens in their wallet.

> **Scope:** flow directed at international investors. English-language platform, crypto-native audience, self-directed access.
> Access for Brazilian resident investors subject to pending legal opinion — dual regime CVM 175 + BACEN to be documented when counsel confirms feasibility.

### Flow

```
Investor accesses the platform
        │
        ▼
KYC on MUTAV platform
  — identity document
  — proof of address
  — source of funds declaration (AML)
  — sanctions screening
        │
        ├─ Rejected → access denied
        │
        └─ Approved
                │
                ▼
        Investor signs Subscription Agreement
        (fund terms, risks, token classes, fees)
                │
                ▼
        Investor chooses class (MTVH / MTVM / MTVL)
        and investment amount
                │
                ▼
        Deposits crypto to fund address
                │
                ▼
        Smart contract issues tokens proportional to current token price
        Tokens go directly to investor's wallet (self-custodial)
```

### Required documents

| Document | Purpose |
|---|---|
| Identity document (passport or national ID) | KYC — identification |
| Proof of address | KYC — address |
| Source of funds declaration | AML — for deposits above threshold (TBD) |
| Subscription Agreement | Offshore fund participation contract — acceptance of terms, risks, and token classes |

### Regulatory obligations

- **FATF / AML:** KYC mandatory by international standard regardless of fund jurisdiction — identity, address, source of funds
- **Sanctions screening:** verify investor against sanctions lists (OFAC, UN, EU) before activation
- **Subscription Agreement:** legal document formalizing investor participation in the offshore fund — must contain risks, token class, default waterfall mechanics, management fee, and withdrawal fee
- **Self-custodial:** token goes to investor's wallet — fund does not hold investor assets; investor is responsible for wallet security

---

## 4. Monthly Fee Flow

**Actors:** Tenant, Agency, Guarantor, Fund

**What happens:** every month the tenant pays rent + fee in a single invoice. The agency collects and transfers to the Guarantor, which splits the amount.

### Flow

```
Tenants pay monthly invoice (rent + MUTAV fee) individually
        │
        ▼
Agency accumulates fees from all active contracts in the month
        │
        ▼
1 consolidated monthly charge: agency transfers
total month fees to the Guarantor
        │
        ▼
Guarantor splits total received:
  ├─ 20% → Guarantor operational account
  └─ 80% → transfer to the Fund
               │
               ▼
           Smart contract records the deposit
           Token price updated
```

### Regulatory obligations

- **Collection agent contract:** agency transfer to Guarantor must have defined deadline and form in contract
- **Service invoice:** Guarantor must issue service invoices to agencies for the guarantee service rendered (municipal ISS tax)
- **Accounting segregation:** Guarantor's 20% and fund's 80% must be accounted for separately from receipt
- **Assignment registration:** the 80% transfer to the fund must be registered as a receivables assignment — each transfer is a documented assignment
- **Offshore tax:** BRL → crypto → offshore fund transfer may generate FX obligations (BACEN) and income tax on currency variation — specific tax opinion required

---

## 5. Default Event

**Actors:** Tenant (defaulting), Agency, Guarantor

**What happens:** tenant misses rent payment. Agency detects and notifies MUTAV to trigger coverage.

### Triggering flow

```
Tenant does not pay on due date
        │
        ▼
Agency waits X days (grace period — TBD)
        │
        ▼
Agency notifies MUTAV via platform
  — contract number
  — amount overdue
  — original due date
        │
        ▼
MUTAV verifies notification:
  — contract active?
  — fee was being paid?
  — amount requested within guarantee ceiling?
        │
        ├─ Verification OK → triggers coverage (see section 6)
        │
        └─ Inconsistency → MUTAV requests additional documentation from agency
```

### Required documents

| Document | Purpose |
|---|---|
| Formal default notification | Triggering record — generated by platform |
| Unpaid invoice proof | Default evidence |
| Active rental contract | Confirm guarantee is active |

### Regulatory obligations

- **Event logging:** every triggering must be recorded with timestamp, amount, and contract — auditability
- **Response deadline:** Guarantor must define and comply with an SLA to respond to agency after notification
- **Coverage ceiling:** guarantee covers up to contractual maximum — MUTAV cannot be triggered for amounts beyond what was agreed in the Acceptance Term

---

## 6. Liquidation and Fund Coverage

**Actors:** Guarantor, Fund, Manager, Agency / Landlord

**What happens:** Guarantor authorizes the fund to liquidate tokenized Treasury position and pay the overdue amount.

### Flow

```
Guarantor approves the triggering
        │
        ▼
Manager instructs the Fund to liquidate position
        │
        ▼
Smart contract in the Fund:
  1. Liquidates tokenized Treasury (Etherfuse/Stellar) at default value
  2. Converts to crypto / stablecoin
  3. Transfers to Guarantor payment account
        │
        ▼
Guarantor pays agency / landlord
  (in BRL via Pix/TED or stablecoin — TBD)
        │
        ▼
Token price adjustment:
  — MTVH token price reduced first
  — If MTVH exhausted → MTVM → MTVL
        │
        ▼
Liquidation event recorded on platform
```

### Regulatory obligations

- **Formal authorization:** every liquidation requires documented instruction from the Manager — cannot be automatic without record
- **Token price adjustment:** impact on each token class must be calculated and published to investors within X hours (TBD)
- **Onchain record:** liquidation is recorded on blockchain — immutable and auditable
- **FX:** crypto → BRL conversion may have FX obligations in Brazil (BACEN) — tax opinion required

---

## 7. Credit Recovery

**Actors:** Guarantor, Defaulting Tenant

**What happens:** after covering the default, MUTAV becomes the creditor and attempts to recover the paid amount from the tenant.

### Flow

```
Guarantor pays the agency
        │
        ▼
MUTAV assumes the tenant's debt
  (legal subrogation — MUTAV takes the place of the original creditor)
        │
        ▼
Extrajudicial notification to tenant
  — amount owed
  — deadline for payment
  — consequences if unpaid
        │
        ├─ Tenant pays → amount reversed to fund (increases token price)
        │
        └─ Tenant does not pay → judicial collection action
                                or sale of debt to collection company
```

### Regulatory obligations

- **Subrogation:** by paying the tenant's debt, the Guarantor becomes creditor by legal subrogation (Art. 831, Civil Code) — no formal assignment required
- **Formal notification:** extrajudicial collection must comply with the Consumer Protection Code — no harassment, no contact during prohibited hours, no public exposure
- **Credit bureau:** MUTAV may report the tenant to credit bureaus (Serasa, SPC) after notification and payment deadline
- **Legal action:** if necessary, the Guarantor files a collection lawsuit — executive instrument is the rental contract + proof of payment made

---

## 8. Investor Redemption

**Actors:** Investor, Fund, Manager

**What happens:** investor decides to redeem their position, returns tokens, and receives crypto.

### Flow

```
Investor initiates redemption on the platform
  — specifies amount or quantity of tokens to redeem
        │
        ▼
Platform verifies:
  — lock-up period completed?
  — liquidity available in fund?
        │
        ▼
Investor enters onchain redemption queue
(queue position visible and transparent)
        │
        ▼
Investor approves transaction in wallet (self-custodial)
        │
        ▼
Smart contract:
  1. Receives investor's tokens
  2. Calculates crypto value based on current token price
  3. Applies withdrawal fee
  4. Burns tokens
  5. Transfers crypto to investor's wallet
        │
        ▼
Fund liquidates Treasury position if necessary
  (proportional to redemption)
        │
        ▼
Token price updated for remaining investors
```

### Regulatory obligations

- **Fair token price:** redemption value calculated at token price at time of execution — not at time of request
- **Withdrawal fee:** must be stated in Subscription Agreement — cannot be charged without prior consent
- **Onchain queue:** full position transparency — investor knows exactly when they will be served
- **Auditable record:** every redemption operation recorded with timestamp, token price applied, and fee charged
- **Tax report:** MUTAV issues transaction statement for investor's income tax declaration support

---

## 9. Ongoing Obligations

### Daily
- Update token price for all 3 classes based on tokenized Treasury yield
- Monitor default events notified by agencies

### Monthly
- Accounting reconciliation: fees received × transfers to fund × defaults covered
- Movement report for investors (deposits, redemptions, token price)
- Service invoices issuance (Guarantor → agencies)
- FX declaration to BACEN if applicable (remittances to offshore fund)

### Annual
- Independent fund audit (standard offshore jurisdiction requirement)
- Annual report for investors (yield, defaults, token price by class)
- KYC renewal for investors with active positions (ongoing AML)
- Fund regulations update if structural changes occur

### Ongoing AML
- Screen active investors against updated sanctions lists
- Monitor atypical transactions (deposits or redemptions outside normal pattern)
- Enhanced due diligence for PEP (Politically Exposed Person) investors

---

## Open Decisions

> Master index of all open questions — structural, legal, operational, vendors, and engineering.
> **Conventions:** Owner = who is responsible | Blocks = what depends on the answer.
> When a decision is resolved, move to the **Resolved** section in the same PR. The next editor deletes resolved items before adding new ones.
>
> Treasury policy decisions for the app (NAV epoch, deposit pricing, Pix quarantine): [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

---

### ✅ Resolved

| # | Decision | Resolution | Date |
|---|---|---|---|
| R1 | Group entity naming | MUTAV Soluções (BR Guarantor), Mutav Treasury Fund (offshore fund), Mutav Treasury Management (offshore manager), MUTAV (brand/platform) — legal suffix pending counsel | 2026-05-19 |
| R2 | Guarantor regulatory framing | "Gray area" treated as working hypothesis pending counsel — not as established fact | 2026-05-19 |
| R3 | Fund market focus | Platform directed at international investors (English, crypto-native, self-directed); Brazilian resident access pending legal opinion | 2026-05-19 |
| T1a | NAV update trigger | Per event (not fixed epoch). Note: verify operational capacity before implementing | 2026-05-19 |
| T1b | NAV variation cap per epoch | ±1.0% with two update types: Treasury yield (automatic, no approval) and tenant fee/default (manual, requires approval) | 2026-05-19 |
| T1c | Circuit breaker tolerance | ±0.5% — if variation exceeds this threshold, triggers pause | 2026-05-19 |
| T1d | Policy during NAV pause | Refund mints + hold redeems (new investor gets refund; redemptions wait in queue until NAV returns to range) | 2026-05-19 |
| F1 | Management fee | 1% p.a. on AUM | 2026-05-19 |
| F2 | Withdrawal fee | 0.25% on redeemed amount | 2026-05-19 |
| O1 | Agency analysis and approval deadline | 48 business hours | 2026-05-19 |
| O2 | Agency minimum portfolio requirement | No minimum in v1 | 2026-05-19 |
| O3 | Agency → Guarantor transfer deadline | Fixed date in month (date defined in partnership contract) | 2026-05-19 |
| O4 | Guarantor → Fund transfer deadline | 2 business days after receipt from agency | 2026-05-19 |
| O7 | Default grace period | 15 calendar days after rent due date before triggering MUTAV | 2026-05-19 |
| O8 | MUTAV response + coverage SLA after notification | 5 business days to verify triggering and release payment to landlord/agency | 2026-05-19 |
| O9 | Maximum liquidation deadline after Guarantor approval | 2 business days — from approval to payment in agency/landlord account | 2026-05-19 |
| O10 | Payment currency for agency/landlord | BRL via Pix or TED | 2026-05-19 |
| O11 | Token price adjustment publication deadline after default | Immediate onchain — adjustment visible once transaction confirms on Stellar. Note: verify indexing infrastructure capacity before committing to SLA | 2026-05-19 |
| O15 | Grace period before starting extrajudicial collection | 30 days after MUTAV covers default before triggering formal collection against tenant | 2026-05-19 |
| O16 | Tenant debt installment policy | Yes — installments available. Operational flow detail TBD (number of installments, interest, platform) | 2026-05-19 |
| O18 | Policy for selling delinquent credit portfolio | Case by case — founders evaluate volume and portfolio profile before selling | 2026-05-19 |
| O20 | Weekly redemption cap | 2.5% of AUM per week — no daily limit, onchain queue processes in arrival order within weekly cap | 2026-05-19 |

---

### Fund Structure — pending founders

| # | Decision | Owner | Blocks |
|---|---|---|---|
| J1 | Offshore fund jurisdiction | Founders | Regulator, reporting obligations, constitution cost, L1, L3 |

**Options under evaluation:**

| | Cayman Islands | BVI | Bermuda | Marshall Islands | UAE / ADGM |
|---|---|---|---|---|---|
| **Setup cost** | $20–40k | $5–15k | $15–30k | $1–3k | $10–25k |
| **Annual cost** | $10–20k | $5–10k | $8–15k | $1–2k | $8–15k |
| **Setup time** | 4–8 weeks | 2–4 weeks | 4–8 weeks | 1–2 weeks | 4–8 weeks |
| **Institutional recognition** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| **Crypto-friendly** | ✓ | ✓ | ✓ | ✓ (DAOs) | ✓ |
| **Legal certainty** | Highest | High | High | Low | Medium |

---

### Regulatory / Legal — pending counsel

| # | Decision | Owner | Blocks |
|---|---|---|---|
| L1 | Legal classification of Guarantor: VASP (BCB Res 519–521), payment institution (BCB Res 494–497), FIDC, FIF, or none? | Counsel | Audit log cadence, regulatory reporting, whether BCB Res 521/2025 (in force since May 2026) applies directly to MUTAV |
| L2 | CVM 175 fund-of-funds: does the two-layer structure (investor → MUTAV token → Treasury → Tesouro Direto) trigger CVM 175 Annex II? | Counsel | Investor disclosure UI, CVM filing template |
| L3 | Etherfuse authorizations: do Etherfuse's existing CVM/BCB authorizations cover MUTAV's use case (guarantee treasury + investor on-ramp)? If not, MUTAV needs its own authorization before Oct/2026 | Counsel + Etherfuse legal | Authorization track scope; related to L1 |
| L4 | Tax treatment of MUTAV token holders: IRRF and IOF equivalent, worse, or better than direct Tesouro Direto holders? | Counsel + tax advisor | Fiscal disclosure UI, annual reporting tooling |
| L5 | Legal type for Guarantor in Brazil (LTDA vs. SA) | Counsel + founders | Governance, share issuance, constitution cost |
| L6 | Legal name validation "MUTAV Soluções" — risk of regulatory classification by name | Counsel | Final legal name before registration |
| L7 | CVM 175: MTVH access classification — qualified (Art. 4, R$1M+) or professional (Art. 11, R$10M+)? | Counsel | KYC depth, marketing rules, Subscription Agreement |
| L8 | BR investor: feasibility of dual regime CVM 175 + BACEN for platform access | Counsel | Whether and how Brazilian residents can invest; expansion of section 3 of this doc |

---

### Etherfuse / Treasury Architecture

| # | Question | Owner | Blocks |
|---|---|---|---|
| ET1 | Offshore holder eligibility: does Etherfuse impose residency/KYB restrictions on who can hold TESOURO? | Business (Etherfuse account manager) | Validates or reformulates the offshore fund structure |
| ET2 | Custody model: who holds the signing keys for the Treasury position on Stellar? Multisig? Segregation required by fund jurisdiction? | Eng + counsel | Fund governance, audit requirements |
| ET3 | Default redemption flow: Etherfuse liquidates in BRL to a BR account — what is the FX path for the offshore fund to receive these funds? | Business + counsel | Section 6 (Liquidation and Coverage), O13, O14 |
| ET4 | Etherfuse B2B settlement extension: can existing integration be extended to cover B2B settlement on the agency side (Pix fee collection → TESOURO mint)? | Business (Etherfuse account manager) | Settlement rail design; fallback for V3 if not feasible |

---

### Vendors

| # | Decision | Owner | Blocks |
|---|---|---|---|
| V1 | KYC provider: confirm Sumsub or alternative. Sub-questions: biometric liveness (ISO/IEC 30107-3 PAD Level 2+), SERPRO/Datavalid integration, LGPD DPA with ANPD SCCs | Eng + business | Investor onboarding flow — blocker for v1 retail |
| V2 | BaaS hedge: choose one of Transfero / Bitso / Foxbit as fallback rail for Etherfuse. Sub-questions by vendor: Transfero (Stellar-native USDC?), Bitso (webhook + correlation-id), Foxbit (volume pricing) | Eng + business | Failover playbook; not blocking for v1 if Etherfuse is healthy |

---

### Treasury Policy — pending Draau

Three detailed treasury policy decisions with trade-off tables and starting point recommendations in [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

| # | Decision | Blocks |
|---|---|---|
| T2 | Deposit pricing approach: single BRL NAV / dual share class (USD + BRL) / USD NAV with TESOURO underlying | Investor portfolio UI, currency schema, CVM disclosure |
| T3 | Pix quarantine window: 7 / 30 / 80 days — trade-off between MED reversal exposure and float capital | TESOURO float sizing, quarantine UI, reconciliation |

---

### Financial / Commercial

| # | Decision | Owner | Blocks |
|---|---|---|---|
| F3 | Minimum MTVH proportion Guarantor must retain (skin-in-the-game floor) | Founders + counsel | Minimum first-loss buffer, risk policy |
| F4 | Deposit threshold requiring source-of-funds declaration (AML) | Counsel | Enhanced KYC, section 3 operations |
| F5 | Blocked investor jurisdictions (e.g., US persons, sanctioned countries) | Counsel + business | Geographic access policy, sanctions screening |

---

### Operational — Agency and Contract

| # | Decision | Owner | Blocks |
|---|---|---|---|
| O5 | Maximum coverage amount per contract (guarantee ceiling) | Founders + counsel | Maximum exposure per tenant, Acceptance Term |
| O6 | Grace period before guarantee takes effect | Business + counsel | Protection against onboarding fraud |

---

### Operational — Default and Liquidation

> **Double receipt flow (platform — to track):**
> If MUTAV has already covered the default and the tenant pays afterward, the agency receives twice.
> The platform must detect this event and trigger the refund flow: agency returns amount to MUTAV → MUTAV restores fund token price.
> This flow must be designed and implemented in the platform before v1 in production.

| # | Decision | Owner | Blocks |
|---|---|---|---|
| O12 | Minimum MTVH balance Guarantor must maintain (minimum buffer) | Founders | Prevents exhausting the first-loss buffer |
| O13 | Transfer currency to Fund (BRL → stablecoin → tokenized Treasury) | Business + eng | Financial flow architecture, ET3 |

**Options under evaluation:**

| Path | How it works | Pro | Con |
|---|---|---|---|
| BRL → Etherfuse → TESOURO | Guarantor sends Pix to Etherfuse; Etherfuse mints TESOURO directly to Fund's Stellar wallet | Fewer steps, lower cost | Blocked by ET1 (offshore eligibility) and ET4 (B2B settlement extension) |
| BRL → USDC → TESOURO | Guarantor converts BRL to USDC via exchange, uses USDC to buy TESOURO | Does not depend on Etherfuse accepting BRL offshore | More steps, BRL/USD FX cost, FX exposure |
| BRL → BRZ (BR stablecoin) → TESOURO | Via BRZ on Stellar as intermediary | Maintains BRL exposure | BRZ has lower liquidity, dependency on additional vendor |

> Decision blocked by ET1 and ET4 — working hypothesis: BRL → Etherfuse → TESOURO (path 1) pending Etherfuse confirmation.

| O14 | Tax treatment of BRL → crypto conversion | Counsel + tax advisor | Tax opinion, BACEN obligations |

---

### Operational — Credit Recovery

| # | Decision | Owner | Blocks |
|---|---|---|---|
| O17 | Extrajudicial / legal collection partner | Business | Recovery process and cost |

---

### Operational — Investor

| # | Decision | Owner | Blocks |
|---|---|---|---|
| O19 | Minimum lock-up period before first redemption | Business + counsel | Fund liquidity, Subscription Agreement |
| O21 | Settlement deadline after position reaches top of redemption queue | Business + eng | SLA with investor |

---

### Engineering Deferrals — pending eng

Each item has a defined forcing function; intentionally not built now.

| # | Item | Forcing function | Context |
|---|---|---|---|
| E1 | Hash-chained audit log (append-only, immutable) | Before VASP authorization (L1) — Oct/2026 at latest; before real investor capital in production | `mutav-app/docs/architecture/admin.md` line 234 |
| E2 | Square Books ledger (`ledger_accounts` + `journal_entries`, sum=0 invariant) | When payment collection moves from anchors to in-house | PR #72 of pricing-module |
| E3 | Daily onchain ↔ Convex reconciliation job | If L1 resolves as VASP: BCB Res 521/2025 already in force (May/2026) — daily reconciliation is the operational substrate | `architecture/reliability.md` § Reconciliation |
| E4 | Stellar treasury proposal queue UI (XDR, signature collection, Lobstr deep links) | Before any real treasury operation in production (~1–2 weeks of work) | `architecture/admin.md` §§ A3, A6 |
| E5 | Money type system: branded `Cents`, `currency` field per column, rounding policy, fast-check suite | Second currency type (Stroop/USDC) or first NFS-e issuance | PR #72 |
| E6 | Conversion boundary module (`brlCentsToStroopsFloor`, etc.) | When onchain settlement code path lands | PR #72 |
| E7 | Versioned rate cards in DB (`pricing_tables` with `effective_from/to`) | First fee change with real clients, or SUSEP filing | `src/lib/pricing/tiers.ts` |
| E8 | `endToEndId` as idempotency key for Pix webhooks | When Pix webhook integration deepens | PR #72 |
| E9 | Auth0 wiring (decided 2026-05-16, not implemented) | Before real user accounts | `docs/auth.md`, `convex/lib/auth.ts` |
| E10 | Telemetry / alerting infrastructure for indexer and cron | Before real client impact | `architecture/onchain-integration.md` line 353 |
| E11 | Migration trigger thresholds for indexer (Convex → direct chain reads) | UX degradation observed at specific volume | `architecture/onchain-integration.md` line 75 |

---

### Calendar Pins

| Date | Event | Affects |
|---|---|---|
| **May/2026** (in force) | BCB Res 521/2025 — monthly stablecoin reporting begins | L1: if MUTAV is VASP, applies directly now |
| **May/2026** (ongoing) | BCB Res 494–497 — IP authorization window | L1, L3, V1, V2 |
| **Oct 30, 2026** | BCB VASP cliff — end of 270-day transition period (from Feb/2026) | Cannot transact with unauthorized counterparties after this date; L1 defines whether MUTAV is directly subject |
| **Dec/2026** | Estimated completion of OpenZeppelin audit for Stellar Smart Accounts | E4 may use these contracts instead of native multisig in v2 |
