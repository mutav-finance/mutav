# SGR — Sistema de Garantia Registrada

Onchain rental guarantee infrastructure on Solana.

## What

A programmable settlement layer for rental guarantees (*garantias locatícias*) in the Brazilian market. Replaces opaque, slow, and expensive traditional guarantee instruments with transparent onchain protocols.

## Phases

1. **SGR Core** — Registered Guarantee System + Programmable Settlement Layer
2. **Score On-chain** — Onchain reputation scoring from rental payment history
3. **TGA** — Token de Garantia de Aluguel (Rental Guarantee Token)
4. **Property Tokenization** — Fractionalized property ownership

## Team

- **Draau** — Founder, 5+ years Web3
- **jubs** — Fullstack development & design

## Stack

- Solana (Anchor/Rust) — smart contracts
- TBD — frontend

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
