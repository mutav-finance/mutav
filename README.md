# SGR — Registered Guarantee System

Onchain rental guarantee infrastructure — transparent programmable protocols for the Brazilian market.

> *Sistema de Garantia Registrada — infraestrutura onchain de garantia locatícia para o mercado brasileiro.*

## What

A programmable settlement layer for rental guarantees. Replaces opaque, slow, and expensive traditional guarantee instruments with transparent onchain protocols.

> *Camada de liquidação programável para garantias locatícias. Substitui instrumentos tradicionais opacos, lentos e caros por protocolos onchain transparentes.*

## Repos

| Repo | Chain | Purpose |
|------|-------|---------|
| [`sgr`](https://github.com/tga-protocol/sgr) | — | Strategy, brand, docs, shared specs |
| [`sgr-solana`](https://github.com/tga-protocol/sgr-solana) | Solana | Anchor programs — Colosseum hackathon |
| [`sgr-stellar`](https://github.com/tga-protocol/sgr-stellar) | Stellar | Soroban contracts — NearX acceleration |

## Phases

1. **SGR Core** — Registered Guarantee System + Programmable Settlement Layer
2. **Score On-chain** — Onchain reputation scoring from rental payment history
3. **TGA** — Rental Guarantee Token (*Token de Garantia de Aluguel*)
4. **Property Tokenization** — Fractionalized property ownership

## Team

- **Draau** — Founder, 5+ years Web3
- **jubs** — Fullstack development & design

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch workflow, code standards, and PR guidelines.

The org uses team-based access:

| Team | Access | Purpose |
|------|--------|---------|
| **builders** | maintain | Core team — push branches, open & merge PRs |
| **judges** | read | Hackathon/competition judges — view code only |

> *O projeto usa times com controle de acesso: **builders** para desenvolvimento, **judges** para avaliadores com acesso somente leitura.*

### Setup (run once after cloning any repo)

```bash
git config core.hooksPath .githooks
```

### For Judges

1. Accept the GitHub org invitation from `tga-protocol`
2. You'll have read access to all repos linked to the `judges` team
3. Browse code, issues, and PRs — no write access

> *Jurados: aceite o convite da org `tga-protocol` no GitHub. Vocês terão acesso de leitura para navegar código, issues e PRs.*

## Agent Skills

Two coding-agent research skills ship in this repo at `.claude/skills/` — they're available as soon as you `git pull` and open Claude Code in the project. No separate install needed.

### Colosseum Copilot

5,400+ Solana hackathon projects, 84,000+ archive documents, and ecosystem data. Use to benchmark SGR against the Solana landscape, vet ideas, or research builders.

**Setup**

1. Generate a PAT at [arena.colosseum.org/copilot](https://arena.colosseum.org/copilot) — shown once, copy it immediately.
2. Add to your shell profile (`.zshrc`, `.bashrc`):

   ```bash
   export COLOSSEUM_COPILOT_API_BASE="https://copilot.colosseum.com/api/v1"
   export COLOSSEUM_COPILOT_PAT="your-token-here"
   ```

3. Verify:

   ```bash
   curl "$COLOSSEUM_COPILOT_API_BASE/status" \
     -H "Authorization: Bearer $COLOSSEUM_COPILOT_PAT"
   ```

   Expected: `{ "authenticated": true, "expiresAt": "...", "scope": "..." }`

**Usage**

Ask conversational research questions, e.g. *"What Solana hackathon projects have worked on rent default insurance?"*. Prefix with *"vet this idea"* or *"deep dive"* to trigger the full 8-step research workflow. Tokens expire after 90 days. Research outputs are saved to `docs/colosseum/`.

### ETHGlobal Skills

17,180 ETHGlobal hackathon projects, sponsor bounty docs, and prize winners. Use to scout EVM ecosystem precedents and sponsor opportunities.

**Setup**

No token needed — the API allows 10 free requests per minute. Beyond that, requests return HTTP 402 and require **$0.05 USDC on Base mainnet** per request. To pay automatically, install [AgentCash](https://docs.agentcash.com) and fund it with a small balance.

**Usage**

Append `use ethglobal-skills` to a prompt, e.g. *"find past projects on lending markets — use ethglobal-skills"*. The skill won't activate without that explicit invocation.

### Updating skills

Both skills are pinned in `skills-lock.json` at the repo root. To pull a newer version:

```bash
npx skills update colosseum-copilot --project
npx skills update ethglobal-skills --project
```

Commit the updated files and `skills-lock.json`.

## Links

- [Colosseum Hackathon](https://colosseum.com/hackathon)
- [Colosseum Copilot Docs](https://docs.colosseum.com/copilot)
- [ETHGlobal Skills repo](https://github.com/ethglobal-skills/repo)
- [AgentCash docs](https://docs.agentcash.com)
