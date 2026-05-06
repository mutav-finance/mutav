# TGA — Gaps & Reference Analysis

Documento de trabalho. Acumula pontos identificados na comparação com protocolos de referência.
Não editar o whitepaper antes de consolidar todas as fontes.

---

## Decisões de Produto — Pendências

Perguntas ainda sem resposta. Bloqueiam definições técnicas finais antes do whitepaper.

---

### GAP 1 — Fórmula do NAV

**1.3** Qual é a fórmula base do NAV? Duas opções principais:
- `NAV = total_assets / tokens_emitidos` — baseado no valor real dos ativos a cada atualização
- `NAV = base_price × (1 + annual_rate × elapsed_days / 365)` — taxa fixa acumulada (modelo OnRe)

*Definido: calculado onchain, atualizado diariamente.*

---

### GAP 3 — Yield da Camada de Liquidez

**3.1** A camada de liquidez em stablecoins (USDC/USDT) ficará parada ou alocada em protocolo de yield passivo (ex: Kamino, Marginfi)? Qual parceiro e qual APY esperado?

*Definido: stablecoins USDC/USDT aceitas; percentual fixo da camada ativa removido do whitepaper.*

---

### GAP 6 — Custódia e Estrutura Legal

**6.2** Multisig confirmado para operações críticas — quantos signatários e quem são (ex: 2/3 founders + advisor)?

**6.3** A TGA SA terá veículo legal formal (FIDC, offshore, LLC) ou opera como protocolo puro na fase inicial? Esta é a maior exposição regulatória identificada.

---

### GAP 7 — Oráculos

**7.1** O cálculo do NAV onchain precisará de algum preço ou taxa externa (yield do colateral, taxa de câmbio BRL/USD)? Se sim, qual oráculo: Pyth, Switchboard ou Chainlink?

---

*Respondido em: 2026-05-06*

---

## Referência 1: OnRe (https://docs.onre.finance)

**O que é:** Reinsegurador licenciado em Bermuda que tokeniza exposição ao mercado de resseguros P&C ($800B/ano). Token ONyc = cota de fundo com NAV apreciável. Modelo estrutural idêntico ao TGA.

---

### On-Ramp

| Dimensão | OnRe | TGA (gap) |
|---|---|---|
| Acesso retail | Permissionless, sem KYC, sem mínimo | Não definido |
| Acesso institucional | KYC/KYB + accredited investor check | Não definido |
| Ativos aceitos | USDC, USDG, USDT | "stablecoin" — vago |
| Custódia no mint | Non-custodial, self-custody | Não especificado |
| Taxa de entrada | Zero (só fee de rede) | Não definido |

**Ação:** Definir dois fluxos de acesso (retail permissionless / institucional com KYC) e listar stablecoins aceitas.

---

### Off-Ramp

| Dimensão | OnRe | TGA (gap) |
|---|---|---|
| Mercado primário | Fila onchain, execução semanal | Fila mencionada, sem detalhes |
| Cap semanal | **2.5% do NAV** | Não definido |
| Taxa de resgate | **0.25% (25 bps)** | "taxa de resgate" sem valor |
| Preço de execução | NAV no momento da execução, não da submissão | Não especificado |
| Mercado secundário | Orca, Raydium, Kamino, Jupiter (24/7) | Ausente — só mencionado como DeFi futuro |
| Reserva de liquidez | **15% do capital** | 20% sem cap semanal |

**Ação:** Definir cap semanal (ex: 2%), taxa de resgate em bps, e especificar mercado secundário (pool TGA/USDC em Orca ou Raydium).

---

### Money Flow

**OnRe (fluxo completo):**
```
Investidor deposita USDC
  → Minting contract
  → ONyc SA (Segregated Account, Bermuda)
    → 85% deployed: reinsurance programs + colateral
      → Prêmios pagos upfront pelas cedentes
      → Colateral: T-bills 3m + sUSDe + syrupUSDC + USCC
    → 15% reserva de liquidez (USDC/USDG para resgates)
  → Retorno: prêmios ganhos diariamente + yield do colateral → NAV sobe
  → Resgate: NAV no momento da execução − 0.25%
```

**Gaps TGA:**
- Timing do prêmio: quando e como a taxa do inquilino entra no fundo — não descrito
- Composição do colateral: TGA diz "stablecoins"; precisa especificar cada ativo e justificativa
- Custódia: nenhum parceiro de custódia mencionado (OnRe usa Coinbase Prime + Squads multisig)

---

### Definições Técnicas

| Elemento | OnRe | TGA (gap) |
|---|---|---|
| Fórmula do NAV | Onchain: base price × annual rate × time | "NAV apreciável" — sem fórmula |
| Atualização do NAV | Diária, onchain, sem serviço offchain | Não especificado |
| Programa Solana | Endereço público listado | Anchor programs mencionados vagamente |
| Auditoria | Quantstamp (Jan 2026) | Nenhuma |
| Oráculos | Pyth + Chainlink (para integradores DeFi) | Não mencionado |
| Custódia | Coinbase Prime + Squads multisig | Não mencionado |
| Trigger de liquidação | Notificação offchain, settlement onchain | "Integrações offchain" — vago |

---

### Estratégias de Estruturação

| Elemento | Descrição | Aplicação TGA |
|---|---|---|
| Segregated Account legal | Bermuda SAC Act — cada programa tem anel jurídico separado | Equivalente BR: FIDC ou estrutura offshore. TGA SA não tem veículo legal definido — maior gap regulatório |
| Cap de resgate com número | 2.5%/semana do NAV | Adotar número concreto (ex: 2%/semana) |
| Colateral explicitado | Lista cada ativo com justificativa de risco/liquidez/yield | Especificar: USDC base + Kamino/Marginfi yield + eventual T-bill tokenizado |
| Mercado secundário | Pool DEX para saída 24/7 sem comprometer fundo | Pool TGA/USDC em Orca ou Raydium |
| NAV onchain puro | Sem dependência de serviço offchain para calcular NAV | Definir fórmula antes do hackathon |
| Buyback mechanism | Protocolo recompra ONyc no DEX quando desvia do NAV | Mecanismo simples para manter peg e gerar demanda |

---

### Vantagens TGA sobre OnRe

| Vantagem | Argumento |
|---|---|
| Mercado específico e defensável | Garantias locatícias BR é nicho; OnRe compete em $800B com gigantes |
| Risco mais previsível | Inadimplência de aluguel é mais estável que catástrofes climáticas globais |
| Originação própria via SGR | OnRe depende de cedentes externas; TGA controla o fluxo end-to-end |
| Narrativa de impacto social | 46.5M brasileiros pagando aluguel — história que resseguro não tem |

---

## Referência 2: BENJI — Franklin Templeton (FOBXX)

**O que é:** Franklin OnChain U.S. Government Money Fund — primeiro fundo mútuo registrado nos EUA a usar blockchain pública como sistema oficial de registro. Cada token BENJI = 1 cota do fundo. Roda na Stellar.

**Números (abril 2026):** $650M AUM individual · $1.98B AUM suite · $211M volume P2P · +140% crescimento de investidores após abertura P2P ao retail (maio 2025).

---

### Estrutura

```
Instituição Financeira
  → Tokeniza fundo FOBXX na Stellar
  → Cada token BENJI = 1 cota
  → Investidor acessa via app (retail) ou portal institucional
  → Yield distribuído diariamente onchain (365 dias, fins de semana incluídos)
  → Accrual intraday proporcional ao segundo em transferências P2P
```

**Regulação:** Fundo mútuo SEC (não é produto DeFi — é TradFi tokenizado). Blockchain é o sistema de registro oficial, não um espelho ou wrapper. Expansão: UCITS Luxembourg (2024), retail Singapore (2025).

---

### Comparativo com TGA

| Dimensão | BENJI | TGA (gap) |
|---|---|---|
| Natureza | Fundo mútuo TradFi tokenizado | Protocolo DeFi nativo |
| Regulação | SEC (EUA) | CVM (BR) — não definido |
| Ativo subjacente | U.S. Treasury / gov obligations | Garantias locatícias BR |
| Blockchain como registro oficial | Sim — sistema primário | Sim via SGR — mas não comunicado assim |
| Yield | Distribuído diariamente onchain | Incorporado ao NAV — sem cadência definida |
| Acesso retail | App mobile | Wallet Solana — sem app definido |
| Acesso institucional | Portal web separado | Não diferenciado no whitepaper |
| P2P transferability | Sim (retail desde maio 2025) | Não mencionado |
| Atualização do NAV | Diária, onchain | Não especificado |

---

### Aprendizados para TGA

| Ponto | Descrição |
|---|---|
| Blockchain como registro, não camada | BENJI posiciona blockchain como sistema primário. TGA faz o mesmo via SGR — precisa comunicar dessa forma: o protocolo **é** a infraestrutura |
| Separação retail / institucional | App mobile (retail) + portal web (institucional) para o mesmo fundo. TGA tem isso no design brief mas não no whitepaper |
| P2P transferability = crescimento | Abertura P2P ao retail gerou +140% em investidores. Token TGA transferível P2P + pool DEX = mesmo vetor |
| NAV diário como trust signal | Yield todo dia, inclusive fins de semana. Para TGA: atualização diária do NAV onchain é trust signal crítico — não mencionado no whitepaper |

---

## Gaps Transversais (independentes de referência)

Identificados via JURY.md baseline (score 2.25/5, 2026-04-10):

- **Regulatory:** TGA SA não tem veículo legal definido. Pooling capital + emissão de token + NAV apreciável = provável jurisdição CVM. Não mencionado em lugar nenhum.
- **Unit economics:** penetração de 20% completamente sem defesa. Sem claims rate assumption, sem pool size modeling, sem yield assumption explícito no colateral.
- **User discovery:** nenhuma entrevista com imobiliária, proprietário ou inquilino documentada.
- **Competitive landscape:** nenhum posicionamento contra RWA protocols (Centrifuge, Goldfinch, Maple, Ondo).
- **Trigger de liquidação:** "via integrações offchain" — mecanismo não descrito.
- **Equipe técnica:** nenhum dev Rust/Anchor identificado para um hackathon Solana.

---

*Última atualização: 2026-05-04 — fonte: OnRe docs + JURY.md baseline*
