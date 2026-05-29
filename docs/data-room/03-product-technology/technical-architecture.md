# Technical Architecture

> Smart contract on Stellar/Soroban. Source: `mutav-stellar/contracts/contract-introduction.md`

---

## How the System Works

```
┌──────────────────────────────────────────────────────────────┐
│  BRAZIL — MUTAV Soluções (Guarantor)                         │
│  Collects monthly fees via real estate agencies              │
│  Retains 20% → Operations                                    │
│  Passes 80% → Fund wallet (BRL → USDC)                      │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  STELLAR BLOCKCHAIN — Mutav Treasury Fund Contract           │
│  ├── Total assets tracked (in USDC equivalent)              │
│  ├── Token supply (MUTAV tokens)                            │
│  ├── Token price = Total Assets ÷ Tokens issued             │
│  ├── Withdrawal queue (weekly, 2.5% cap)                    │
│  ├── Default coverage (cold wallet only)                    │
│  ├── Treasury yield recording                               │
│  └── Emergency pause                                        │
│                                                              │
│  Reserve: Tokenized Brazilian Treasury via Etherfuse        │
└─────────────────────────┬────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│  INVESTORS (self-custodial wallets)                           │
│  MTVH / MTVM / MTVL tokens appreciate as price rises        │
│  Exit via on-chain withdrawal queue                          │
└──────────────────────────────────────────────────────────────┘
```

---

## Access Control

Two separate roles prevent a single point of failure:

| Role | Wallet type | What it can do |
|---|---|---|
| **Owner** | Offline (cold) wallet | Cover defaults, pause operations, transfer ownership |
| **Operator** | Online (hot) wallet | Record yield, receive payments, process withdrawals, charge management fee |

If the online wallet is compromised, it cannot cover fraudulent defaults or drain the fund — only the offline wallet can do that.

---

## How the Token Price (NAV) Works

```
Token price = Total fund assets ÷ Total tokens in circulation
```

| Event | Fund assets | Tokens issued | Token price |
|---|---|---|---|
| Investor deposits | ↑ | ↑ proportional | Unchanged |
| Fee income received | ↑ | Unchanged | ↑ |
| Treasury yield credited | ↑ | Unchanged | ↑ |
| Default covered | ↓ | Unchanged | ↓ (waterfall absorbs) |
| Withdrawal processed | ↓ | ↓ proportional | Unchanged |
| Management fee charged | ↓ | Unchanged | ↓ |

**Key rule:** new deposits and withdrawals never affect other investors' token price.

---

## Withdrawal Process

1. Investor submits request → tokens are locked immediately; final price not calculated yet
2. Operator processes weekly → FIFO order, 2.5% of fund cap, price calculated on processing day, 0.25% fee deducted
3. Operator retrieves USDC from Etherfuse → sends to investor wallet
4. **Safety valve:** if operator misses the payment deadline, investor can reclaim their tokens — funds are never permanently locked

Requests beyond the weekly cap stay in the queue and continue accumulating yield.

---

## Default Coverage Flow

```
Agency reports default via dashboard
        ↓
MUTAV verifies: contract active, fees current, amount within limit
        ↓
Internal review (5 business day SLA)
        ↓
Owner triggers coverage — fund assets reduced, token price drops
        Loss absorbed in order: MTVH first → MTVM → MTVL
        ↓
Fund sends USDC to MUTAV Soluções → Pix/TED to agency/landlord
```

---

## Security Measures

| Mechanism | What it protects against |
|---|---|
| Owner/operator separation | Online wallet breach cannot drain the fund |
| Two-step ownership transfer | Typo cannot permanently lock fund control |
| Emergency pause | All operations halt; withdrawal cancellation always available |
| Withdrawal safety valve | Investors reclaim tokens if operator fails to pay |
| Per-call yield cap (5% of assets) | Prevents manipulation of yield recording |
| On-chain audit trail | Every change permanently and publicly recorded |

---

## Etherfuse / Stellar Integration

The fund reserve is held in tokenized Brazilian Treasury bonds (TESOURO) via Etherfuse on the Stellar blockchain. Yield accrues daily at SELIC-linked rates. Redemption is structured (not instant) — which is why the weekly withdrawal cap exists.

MUTAV tokens follow the Stellar token standard — compatible with Stellar's decentralized exchange and lending protocols without custom integrations.

**Confirmations needed before mainnet:**
1. Offshore fund entity eligibility as TESOURO holders (ET1)
2. Settlement extension for fee collections via real estate agencies (ET4)
3. Multi-signature custody model for the fund's Stellar keys (ET2)

---

## Pre-Mainnet Checklist

| Item | Status |
|---|---|
| Smart contract design | Complete |
| Contract documentation | Complete |
| Testnet deployment | In progress |
| Etherfuse confirmations (ET1, ET4) | Pending |
| Identity verification (KYC) vendor integration | Evaluating |
| Smart contract security audit | Planned |
| Multi-signature owner wallet | Planned |
| Admin dashboard for operator | ~8–10 weeks |
