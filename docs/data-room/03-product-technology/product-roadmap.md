# Product Roadmap — 18 Months

> May 2026 → October 2027

---

## Phase 0 — Foundation (Months 0-2 | May–June 2026)

**Goal:** Close pre-seed. Constitute entities. Contract ready for production.

- [ ] Select offshore jurisdiction and constitute Mutav Treasury Fund + Management
- [ ] Constitute MUTAV Soluções (Brazil) with fintech/real estate counsel
- [ ] First drafts: Subscription Agreement, Contrato de Parceria (imobiliária), Termo de Adesão (tenant)
- [ ] Complete Soroban contract testnet deployment
- [ ] Etherfuse confirmations: offshore holder eligibility (ET1), B2B settlement extension (ET4)
- [ ] Smart contract audit vendor selected (OpenZeppelin, Halborn, or equivalent)
- [ ] KYC provider selected (Sumsub or alternative), sanctions screening configured
- [ ] Investor dashboard v1, imobiliária dashboard v1, admin panel live

---

## Phase 1 — Pilot Launch (Months 2-6 | July–October 2026)

**Goal:** Live on mainnet. 20-30 imobiliárias. $500K+ AUM.

- [ ] Smart contract audit complete — no critical findings
- [ ] Mainnet deployment (Stellar/Soroban) + Etherfuse TESOURO integration live
- [ ] First 20-30 imobiliárias onboarded (RS/SC, Litoral Norte via Cinara network)
- [ ] 500-1,000 active guarantee contracts
- [ ] First external investor deposits ($500K genesis target)
- [ ] First monthly fee cycle processed end-to-end
- [ ] 3+ investor LOIs or signed Subscription Agreements
- [ ] English landing page + demo video published
- [ ] BCB VASP cliff (Oct 30, 2026): confirm MUTAV's position via counsel before July

---

## Phase 2 — Scale (Months 6-12 | November 2026–April 2027)

**Goal:** 10,000+ contracts. $3M+ AUM. Institutional pipeline open.

- [ ] 10,000+ active guarantee contracts; $3M+ AUM
- [ ] Expand to SP, RJ, Curitiba via direct outreach
- [ ] Risk scoring engine v1: score each incoming contract, output fee tier
- [ ] MTVM and MTVL tranches deployed (v1 launches single-class MTVH-equivalent)
- [ ] First institutional investor KYC (family office or crypto-native fund)
- [ ] MUTAV featured in 1+ DeFi protocol integration as RWA yield asset
- [ ] Independent fund audit (offshore standard requirement)
- [ ] Annual investor report: NAV, default rates, fund composition

---

## Phase 3 — Expansion (Months 12-18 | May–October 2027)

**Goal:** National coverage. $10M+ AUM. Recognized RWA yield product.

- [ ] 50,000+ contracts; 200+ imobiliária partners nationally
- [ ] $10M+ AUM; institutional share 20%+
- [ ] Full three-tranche architecture (MTVH + MTVM + MTVL) in production
- [ ] MUTAV as borrowing collateral in 1+ Stellar lending protocol
- [ ] Seed round raised ($3-5M) on basis of mainnet performance and AUM track record
- [ ] Proprietary credit dataset: tenant payment history powering internal risk engine

---

## Dependency Map

```
Pre-seed close → Entity constitution → Etherfuse confirmations + Audit
                                              ↓
                                       Mainnet deployment
                                              ↓
                              First imobiliárias → First investor deposits
                                              ↓
                                   $500K AUM → model self-sustaining
                                              ↓
                              Tranche architecture → Institutional access
                                              ↓
                                         Seed round
```

---

## Key Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Etherfuse offshore eligibility blocked (ET1) | Medium | BaaS fallbacks: Transfero, Bitso, Foxbit |
| Audit finds critical issue | Low-Medium | 6-week fix buffer built in |
| BCB VASP classification applies | Medium | Counsel engaged before July 2026 |
| Pilot imobiliárias slow to onboard | Low | Warm network; 30-year relationships |
| Fundraise takes longer | Medium | Testnet work proceeds independently |
