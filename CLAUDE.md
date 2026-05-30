# MUTAV — Agent Context

## Project
MUTAV — tokenização de garantia de aluguel. Strategy, brand, docs, and shared specs across all chains.
Part of the [mutav-finance](https://github.com/mutav-finance) org.

## Sibling repos

Per [`mutav-stellar#57`](https://github.com/mutav-finance/mutav-stellar/issues/57) (2026-05-30) the **Stellar protocol delivery** is two repos: `mutav-stellar` (contracts + SDK) and `mutav-app` (Turborepo monorepo holding all persona apps + the Mutav API on Convex). The Solana implementation is its own repo. `mutav-fund` is soft-deprecating into `mutav-app/apps/fund/` (see [`mutav-fund#11`](https://github.com/mutav-finance/mutav-fund/issues/11)).

- `brand` — canonical brand artifacts; vendored into each consumer's `.design/branding/mutav/`
- `mutav-solana` — Solana/Anchor smart contracts (Colosseum Frontier hackathon)
- `mutav-stellar` — Stellar/Soroban Fund contract + TS SDK (NearX acceleration). Canonical architecture map: [`mutav-stellar/docs/architecture/`](https://github.com/mutav-finance/mutav-stellar/tree/main/docs/architecture)
- `mutav-app` — Turborepo monorepo: persona apps (agency / fund / admin / etc.) + the **Mutav API** (Convex backend). Replaces the standalone `mutav-fund` repo over time.

## Resources
- **Colosseum Dev Resources:** https://colosseum.com/frontier/resources
- **Colosseum Copilot Skill:** installed at `.claude/skills/colosseum-copilot/`. Solana/crypto startup research — builder history, investor theses, market signals. Token at https://arena.colosseum.org/copilot, docs at https://docs.colosseum.com/copilot.
- **ETHGlobal Skills:** https://github.com/ethglobal-skills/repo — installed at `.claude/skills/ethglobal-skills/`. Searches 17,180 hackathon projects, sponsor bounties, and prize winners. Append `use ethglobal-skills` to invoke. Free under 10 req/min, then $0.05 USDC on Base.
- **The Grid Docs:** https://docs.thegrid.id
- **The Grid Explorer:** https://raw.githubusercontent.com/The-Grid-Data/Explorer/main/README.md

## Branch workflow
Feature branches → squash merge PRs to main. `main` is protected.

## Brand artifacts
Shared brand lives in the sibling `brand/` repo and is vendored into `.design/branding/mutav/` here. To refine brand: `cd ../brand && claude`, run `/gsp-brand-*`, commit, then `bun brand:export` from `brand/` and review the resulting diffs in each consumer. To audit alignment: `cd ../brand && bun brand:audit`.
