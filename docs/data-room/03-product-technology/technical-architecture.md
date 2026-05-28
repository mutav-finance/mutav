# Technical Architecture

> Stellar/Soroban smart contract. Source: `mutav-stellar/contracts/contract-introduction.md`

---

## System Overview

```
┌──────────────────────────────────────────────────────────────┐
│  BRAZIL — MUTAV Soluções (Garantidora)                       │
│  Collects monthly fees via imobiliárias                      │
│  Retains 20% → Operational cost                              │
│  Passes 80% → Fund wallet (BRL → USDC on-ramp)              │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  STELLAR / SOROBAN — Mutav Treasury Fund Contract            │
│  ├── AUM tracking (USDC equivalent)                         │
│  ├── Token supply (MUTAV, SEP-0041)                         │
│  ├── NAV = AUM ÷ supply (onchain, per event)                │
│  ├── Redemption queue (weekly, 2.5% cap)                    │
│  ├── Default coverage (owner cold wallet only)              │
│  ├── Treasury yield recording (operator)                    │
│  └── Emergency pause (owner)                                │
│                                                              │
│  Reserve: TESOURO via Etherfuse (tokenized BR Treasury)     │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  INVESTORS (self-custodial wallets)                           │
│  MTVH / MTVM / MTVL tokens appreciate as NAV rises          │
│  Exit via on-chain redemption queue                          │
└──────────────────────────────────────────────────────────────┘
```

---

## Access Control: Owner + Operator

| Role | Wallet | Permissions |
|---|---|---|
| **Owner** | Cold wallet | Cover defaults, change operator, pause, transfer ownership |
| **Operator** | Hot wallet | Record yield, receive payments, process redemption queue, charge management fee |

Separating these prevents a compromised hot wallet from covering fraudulent defaults or draining the fund.

---

## NAV Mechanics

```
NAV = Total AUM ÷ Total Tokens in Circulation
```

| Event | AUM | Token Supply | NAV |
|---|---|---|---|
| Investor deposit | ↑ | ↑ proportional | Unchanged |
| Fee income recorded | ↑ | Unchanged | ↑ |
| Treasury yield recorded | ↑ | Unchanged | ↑ |
| Default covered | ↓ | Unchanged | ↓ (waterfall absorbs) |
| Redemption processed | ↓ | ↓ proportional | Unchanged |
| Management fee charged | ↓ | Unchanged | ↓ |

**Key invariant:** deposits and redemptions never affect other investors' NAV.

---

## Redemption Queue

1. Investor submits request → tokens locked immediately; exit price not calculated yet
2. Operator processes weekly → 2.5% AUM cap, FIFO, NAV calculated on processing day, tokens burned, 0.25% fee deducted
3. Operator retrieves USDC from Etherfuse → sends to investor wallet
4. **Investor protection:** if operator misses the payment deadline, investor can reclaim tokens — never permanently locked out

Requests beyond the weekly cap remain in the visible queue and continue accumulating yield.

---

## Default Coverage Flow

```
Imobiliária reports default via dashboard
        ↓
MUTAV verifies: contract active, fees current, amount within ceiling
        ↓
Internal review (5 business day SLA)
        ↓
Owner triggers cover_default() — AUM reduced, NAV drops
        Waterfall: MTVH first → MTVM → MTVL
        ↓
Fund sends USDC to MUTAV Soluções → Pix/TED to imobiliária/landlord
```

---

## Security Model

| Mechanism | Protection |
|---|---|
| Owner/operator split | Compromised hot wallet cannot drain fund |
| Two-step ownership transfer | Typo cannot lock fund control permanently |
| Emergency pause | Operations halt; redemption cancellation always available |
| Redemption safety valve | Investors reclaim tokens if operator fails to pay |
| Per-call yield cap | Max 5% of AUM per call — prevents manipulation |
| On-chain audit trail | Every state change permanently recorded |

---

## Etherfuse / Stellar Integration

TESOURO is a Stellar-native tokenized Brazilian Treasury bond. The fund reserve lives in TESOURO: SELIC-linked yield accruing daily, structured redemption (not instant DEX exit), BRL-denominated.

**Pending confirmations pre-mainnet:**
1. Offshore fund entity eligibility as TESOURO holders (ET1)
2. B2B settlement extension — BRL → TESOURO via imobiliária fee collections (ET4)
3. Multisig custody model for the fund's Stellar signing keys (ET2)

MUTAV tokens follow **Stellar SEP-0041** — standard transfer, approve spending allowances, query balance. Compatible with Stellar DEX and lending protocols without custom bridging.

---

## Pre-Mainnet Checklist

| Item | Status |
|---|---|
| Soroban contract design | Complete |
| Contract documentation | Complete |
| Testnet deployment | In progress |
| Etherfuse confirmations (ET1, ET4) | Pending |
| KYC/AML vendor integration | Evaluating |
| Smart contract audit | Planned |
| Multisig owner wallet | Planned |
| Admin UI for operator | ~8-10 weeks |
