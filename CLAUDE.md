# SGR — Agent Context

## Project
SGR (Sistema de Garantia Registrada) — strategy, brand, docs, and shared specs across all chains.
Part of the [tga-protocol](https://github.com/tga-protocol) org.

## Sibling repos
- `brand` — canonical brand artifacts; vendored into each consumer's `.design/branding/tga/`
- `sgr-solana` — Solana/Anchor smart contracts (Colosseum Frontier hackathon)
- `sgr-stellar` — Stellar/Soroban smart contracts (NearX acceleration)
- `sgr-app` — Next.js dashboard for managing rental guarantees

## Resources
- **Colosseum Dev Resources:** https://colosseum.com/frontier/resources
- **Colosseum Copilot Token:** https://arena.colosseum.org/copilot
- **Colosseum Copilot Docs:** https://docs.colosseum.com/copilot
- **ETHGlobal Skills:** https://github.com/ethglobal-skills/repo — installed at `.claude/skills/ethglobal-skills/`. Searches 17,180 hackathon projects, sponsor bounties, and prize winners. Append `use ethglobal-skills` to invoke. Free under 10 req/min, then $0.05 USDC on Base.
- **The Grid Docs:** https://docs.thegrid.id
- **The Grid Explorer:** https://raw.githubusercontent.com/The-Grid-Data/Explorer/main/README.md

## Branch workflow
Feature branches → squash merge PRs to main. `main` is protected.

## Brand artifacts
Shared brand lives in the sibling `brand/` repo and is vendored into `.design/branding/tga/` here. To refine brand: `cd ../brand && claude`, run `/gsp-brand-*`, commit, then `bun brand:export` from `brand/` and review the resulting diffs in each consumer. To audit alignment: `cd ../brand && bun brand:audit`.
