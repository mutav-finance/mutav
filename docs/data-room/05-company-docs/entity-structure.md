# Entity Structure

---

## Group Architecture

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
│  OFFSHORE (Cayman / BVI / Bermuda — TBD)                            │
│                                                                      │
│  Mutav Treasury Fund                                                 │
│  Reserve: TESOURO via Etherfuse (Stellar)                           │
│  Share classes: MTVH · MTVM · MTVL                                  │
│                                                                      │
│  Mutav Treasury Management                                           │
│  Fund administrator · 1% p.a. management fee · 0.25% redemption fee │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Entity Profiles

### MUTAV Soluções — Brazil

| | |
|---|---|
| Legal form | LTDA or SA (pending counsel, decision L5) |
| Regulatory basis | Art. 37, inciso I, Lei 8.245/91 (fiança) |
| Function | Institutional fiador in rental contracts |
| Revenue | 20% of tenant fees |
| Obligation | Covers defaults up to ceiling; recovers via sub-rogação (Art. 831 CC) |
| Skin-in-the-game | Mandatory MTVH holder — company loses first on any default |
| Regulator (working hypothesis) | BACEN (pending L1); likely exempt from SUSEP/CVM under fiança framing |

---

### Mutav Treasury Fund — Offshore

| | |
|---|---|
| Jurisdiction | TBD — Cayman (primary) or BVI |
| Legal form | Exempted Limited Partnership or equivalent |
| Function | Holds investor capital; receives 80% fee flow; issues tokens at NAV |
| Reserve | Etherfuse TESOURO (Stellar SEP-0041) |
| Investor access | International (KYC required); Brazilian residents pending L8 |
| Redemption | Weekly queue, 2.5% AUM cap, 0.25% exit fee |

**Share classes:**

| Class | Default Absorption | Yield | Target |
|---|---|---|---|
| MTVH | First | Highest | MUTAV Soluções (mandatory) + qualified investors |
| MTVM | If MTVH exhausted | Mid | KYC investors |
| MTVL | Last | Lowest, most stable | Conservative / institutional |

---

### Mutav Treasury Management — Offshore

| | |
|---|---|
| Jurisdiction | Same as Treasury Fund |
| Function | Fund administrator; runs operator (hot wallet) functions |
| Revenue | 1% p.a. management fee + 0.25% redemption fee |
| Founders | Same as MUTAV Soluções — separate legal entity |

---

## Fee Flow

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

## Pending Decisions

| Decision | Owner | Blocks |
|---|---|---|
| Offshore jurisdiction | Founders + counsel | Entity constitution, Etherfuse eligibility |
| MUTAV Soluções: LTDA vs. SA | Counsel | Governance, equity structure |
| MTVH: CVM 175 qualified vs. professional | Counsel | KYC depth, BR investor marketing |
| Minimum MTVH stake (MUTAV Soluções) | Founders + counsel | First-loss cushion sizing |
| Blocked investor jurisdictions (e.g., US persons) | Counsel | Sanctions screening, Reg S |
