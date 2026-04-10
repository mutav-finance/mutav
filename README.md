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

## Colosseum Copilot Setup

Copilot gives the team access to 5,400+ hackathon projects, 84,000+ archive documents, and ecosystem data to benchmark SGR against the Solana landscape.

**1. Get a Personal Access Token**

Log in to [arena.colosseum.org/copilot](https://arena.colosseum.org/copilot) and generate a PAT. It's shown once — copy it immediately.

**2. Set environment variables**

```bash
export COLOSSEUM_COPILOT_API_BASE="https://copilot.colosseum.com/api/v1"
export COLOSSEUM_COPILOT_PAT="your-token-here"
```

Add these to your shell profile (`.zshrc`, `.bashrc`) so they persist.

**3. Install the skill**

```bash
npx skills add ColosseumOrg/colosseum-copilot
```

**4. Verify the connection**

```bash
curl "$COLOSSEUM_COPILOT_API_BASE/status" \
  -H "Authorization: Bearer $COLOSSEUM_COPILOT_PAT"
```

Expected: `{ "authenticated": true, "expiresAt": "...", "scope": "..." }`

**5. Run a query**

```
What Solana hackathon projects have worked on rent default insurance?
```

For deep analysis: prefix with "vet this idea" or "deep dive" to trigger the full 8-step research workflow.

Tokens expire after 90 days. Research outputs are saved to `docs/colosseum/`.

## Links

- [Colosseum Hackathon](https://colosseum.com/hackathon)
- [Colosseum Copilot Docs](https://docs.colosseum.com/copilot)
