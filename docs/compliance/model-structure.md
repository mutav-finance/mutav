# MUTAV — Estrutura do Modelo

> Documento gerado em 2026-05-18. Base para o fluxo de compliance operacional.

---

## Visão Geral

```
┌─────────────────────────────────────────────────────────────────┐
│  BRASIL                          OFFSHORE (jurisdição a definir) │
│                                                                   │
│  MUTAV Garantidora    ──80%──►  MUTAV Fund                      │
│  (Front 1)                      (Front 2)                        │
│                                                                   │
│  MUTAV Gestora  ◄── taxas ──── administra o fundo               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Front 1 — MUTAV Garantidora (Brasil)

**O que é:** empresa operacional brasileira, atua como fiadora institucional nos contratos de locação.

**Base legal:** Art. 37, inciso I da Lei do Inquilinato (fiança). Zona cinza regulatória similar à Credpago — sem enquadramento como seguradora (SUSEP) nem como fundo (CVM).

**Fluxo de receita:**

```
Inquilino paga fee junto do aluguel
        │ (1 boleto)
        ▼
Imobiliária coleta e repassa à Garantidora
        │
        ├─ 20% → caixa operacional da Garantidora (deságio retido)
        └─ 80% → MUTAV Fund (cessão de recebíveis)
```

**Cobertura de defaults:**

```
Inadimplência detectada
        │
        ▼
Garantidora aciona o fundo
        │
        └─ MTVH absorve primeiro (Garantidora é cotista MTVH)
```

**Skin-in-the-game:** Garantidora retém cotas MTVH — perde primeiro em qualquer default.

---

## Front 2 — MUTAV Fund (Offshore)

### Jurisdição

A definir — opções em avaliação:

| Jurisdição | Perfil |
|---|---|
| Cayman Islands | Padrão institucional, mais caro, mais estável |
| BVI | Custo médio, bem estabelecido |
| Bermuda | Usado por OnRe, forte para reinsurance/RWA |
| Marshall Islands | Barato, DAOs com personalidade jurídica |
| UAE / ADGM | Crescendo em Web3, regulação moderna |
| Próspera (Honduras) | Cripto-nativo, mas status jurídico incerto (ZEDE em disputa) |

### Estrutura de cotas

1 fundo com 3 classes de cotas:

```
MUTAV Fund
│
├─ Cota MTVH (Subordinada)
│   Investidores: MUTAV Garantidora + investidores profissionais
│   Risco: absorve todos os defaults primeiro
│   Yield: maior
│
├─ Cota MTVM (Mezzanine)
│   Investidores: qualquer investidor (KYC)
│   Risco: absorve se MTVH zerar
│   Yield: médio
│
└─ Cota MTVL (Sênior)
    Investidores: qualquer investidor (KYC)
    Risco: absorve por último
    Yield: menor, mais seguro
```

### Patrimônio

100% alocado em Tesouro tokenizado via Etherfuse (Stellar).

- NAV aprecia diariamente
- Default = liquidação parcial da posição de Tesouro
- Cascata de perda: MTVH → MTVM → MTVL

### Fluxo do investidor

```
Investidor
  └─ KYC na plataforma MUTAV
  └─ deposita cripto
  └─ recebe token MTVH / MTVM / MTVL
  └─ self-custodial (wallet própria)
  └─ resgate: devolve token → recebe cripto (- taxa de saque)
```

---

## MUTAV Gestora

**O que é:** entidade que administra o MUTAV Fund, registrada na jurisdição do fundo.

**Receita:**
- Taxa de gestão (% a.a. sobre AUM do fundo)
- Taxa de saque (% sobre resgates dos investidores)

**Relação com o grupo:** mesmos fundadores, entidade separada da Garantidora.

---

## Cascata de Defaults (Waterfall)

```
Default acontece na carteira
        │
        ▼
[1] MTVH absorve → NAV do MTVH cai
        │ (se MTVH zerar)
        ▼
[2] MTVM absorve → NAV do MTVM cai
        │ (se MTVM zerar)
        ▼
[3] MTVL absorve → NAV do MTVL cai
```

---

## Mapa de Entidades e Reguladores

| Entidade | País | Regulador | Receita |
|---|---|---|---|
| MUTAV Garantidora | Brasil | BACEN (zona cinza) | 20% do split de fees |
| MUTAV Fund | Offshore (TBD) | Regulador local (TBD) | — |
| MUTAV Gestora | Offshore (TBD) | Regulador local (TBD) | Taxa de gestão + saque |

---

## Decisões em Aberto

- [ ] Jurisdição do fundo offshore (Cayman, BVI, Bermuda, Marshall Islands, UAE/ADGM)
- [ ] Percentual da taxa de gestão
- [ ] Percentual da taxa de saque
- [ ] Proporção mínima de MTVH que a Garantidora deve reter
- [ ] Estrutura societária da Garantidora no Brasil (LTDA vs. SA)
