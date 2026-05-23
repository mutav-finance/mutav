# MUTAV TGA — Documento de Posicionamento de Mercado

**Data:** Maio 2026

---

## 1. Modelo de Monetização

### Como o MUTAV monetiza

O MUTAV cobra uma taxa de garantia de **10% do aluguel mensal** por contrato ativo. O valor é cobrado junto ao boleto do aluguel e dividido em:

- **80%** → Mutav Treasury Fund (atualiza o NAV dos tokens MTV)
- **20%** → MUTAV Soluções Garantidora (receita operacional direta do protocolo)

Com aluguel médio de R$2.000/mês, a receita direta por contrato é de **R$40/mês**.

### Revenue Stack

| Camada | Fonte | Valor |
|---|---|---|
| **Core (principal)** | Taxa de garantia — 2% do aluguel retidos pelo protocolo | R$40/contrato/mês |
| **Expansion** | Taxa de gestão sobre AUM do fundo tokenizado | 1% a.a. sobre AUM |
| **Ecosystem** | Taxa de resgate + yield do colateral (Tesouro tokenizado) | 0,25% no resgate + ~5% APY |

### Break-even

- **500 contratos ativos** → R$20.000/mês de receita direta do protocolo
- A operação inicia com 1.000 contratos → acima do break-even desde M0
- Projeção Ano 1: 23.500 contratos ao final do mês 12, AUM de $7,6M, NAV apreciando de $1,00 → $3,93

---

## 2. Competidores Reais

### Nível 1 — Diretos (mesma solução, mesmo público)

| Player | Posição |
|---|---|
| **CredAluga** | +200% em 2024; 30k contratos ativos; R$60M captados (Provence Partners + Grupo OLX). Fintech mais próxima em modelo operacional. |
| **Creditas** | Produto de garantia locatícia para imobiliárias; cresceu 280% por default de confiança de mercado, não por diferencial de mecanismo. |

### Nível 2 — Indiretos (mesma dor, solução diferente)

| Player | Modelo |
|---|---|
| **Porto Seguro / SulAmérica / Tokio Marine** | Seguro fiança tradicional (prêmio mensal, processo de sinistro manual, opaco). Tokio Marine cresceu 52,1% no segmento em 2024. |
| **Título de Capitalização** | Caução via título financeiro; R$1,9 bi/ano em 2025; sem liquidação automática, capital imobilizado. |

### Nível 3 — Substitutos (mesma necessidade, forma diferente)

| Substituto | Situação atual |
|---|---|
| **Fiador tradicional** | Garantidor pessoa física com imóvel quitado; caiu de 62% (2020) para 39% do mercado (2024) — em declínio estrutural. |
| **Caução em dinheiro** | Depósito de até 3 meses de aluguel; imobiliza capital do inquilino sem qualquer rendimento. |

### Nível 4 — Status Quo (o concorrente mais perigoso)

- Imobiliária que não exige garantia formal → proprietário assume o risco sozinho
- Processo judicial de despejo como "solução padrão": 6 a 12+ meses sem receber, depósito em juízo de 3 meses

---

## 3. Matriz de Posicionamento

### 3.1 Mercado Brasileiro de Garantias Locatícias

**Eixos:**
- X: Produto-Serviço (promessa de terceiro) ↔ Infraestrutura (mecanismo programático)
- Y: Opaco / sem auditoria ↔ Verificável / registro público

```
                     VERIFICÁVEL / AUDITÁVEL
                              |
                              |     ← MUTAV TGA  [quadrante vazio]
                              |
  PRODUTO-SERVIÇO ────────────┼──────────────── INFRAESTRUTURA
                              |
    Porto Seguro  Creditas    |
    SulAmérica   CredAluga    |
      Tokio Marine            |
                              |
                   OPACO / SEM AUDITORIA
```

**Por que o quadrante está vazio:** Nenhum incumbente tem incentivo para publicar registros de desembolso. A auditabilidade real exigiria transparência de reservas que nenhum player tradicional escolheria voluntariamente. MUTAV ocupa esse espaço por construção técnica — onchain é auditável por design, não por promessa.

**Risco:** Creditas é o concorrente com maior capacidade de entrar nesse quadrante. Sua limitação: stack legada, sem experiência onchain, incentivo organizacional para manter opacidade. Janela estimada: **18 a 24 meses**.

### 3.2 Mercado Stellar RWA (Perspectiva do Investidor)

**Eixos:**
- X: Genérico (yield sem especificidade setorial) ↔ Específico (colateral real com tese definida)
- Y: Institucional / alto mínimo ↔ Acessível / Retail

```
              INSTITUCIONAL / ALTO MÍNIMO
                        |
          Maple Finance | Ondo Finance
                        |
  GENÉRICO ─────────────┼──────────────── ESPECÍFICO
                        |
   Projetos hackathon   |        ← MUTAV TGA  [quadrante vazio]
           Centrifuge   |
                        |
               ACESSÍVEL / RETAIL
```

**Por que o quadrante está vazio:** A maioria dos projetos RWA começa nos EUA. O mercado de garantias locatícias brasileiro não é óbvio para quem não conhece a Lei do Inquilinato. O boleto como trilho de pagamento exige parceria operacional no Brasil — barreira real de entrada para projetos sem presença local.

---

## 4. Diferenciais Sustentáveis

Mapeamento pelo framework Sustainable vs. False Differentials:

| Tipo | Diferencial | Como o MUTAV expressa |
|---|---|---|
| **Sustentável** | Proprietary Data | Score de adimplência onchain acumulado por contrato — cada contrato novo torna o dataset mais valioso e exclusivo |
| **Sustentável** | Deep Integrations | Boleto unificado com a imobiliária aumenta custo de troca; integração operacional com Lei do Inquilinato é barreira técnica e jurídica |
| **Sustentável** | Brand & Trust | Founders identificados, transparência onchain pública e auditável vs. opacidade estrutural dos incumbentes |

**Falsos diferenciais eliminados do discurso:**
- "Usamos blockchain" — tecnologia agora é padrão, não é diferencial
- "Temos mais features que o seguro fiança" — facilmente copiável
- "Somos mais baratos" — destrói margem e atrai clientes de baixa qualidade

---

## 5. Métricas de Validação (Simulação Ano 1)

| Métrica | Valor Projetado |
|---|---|
| Contratos ativos (M12) | 23.500 |
| AUM do fundo | $7,62M |
| NAV (início → fim) | $1,00 → $3,93 |
| Receita direta do protocolo (Ano 1) | ~$1,19M |
| Taxa de inadimplência base | 3% a.a. |
| Loss ratio no stress test (M6, default 6%) | 18,8% — ainda lucrativo |
| Capital líquido aportado no Ano 1 | $2,73M |

---

## 6. Tamanho e Contexto do Mercado

| Indicador | Dado | Fonte |
|---|---|---|
| Domicílios alugados no Brasil (2024) | 17,8 milhões | IBGE / FipeZap |
| Crescimento do mercado (2016→2024) | +44,7% | IBGE |
| Alta nos preços de aluguel (2024) | +13,5% | FipeZap |
| Garantias pagas — market share (2024) | 48,96% dos contratos | Universal Software |
| Crescimento garantias digitais (2020→2024) | +254% | ABMI |
| Mercado capturado (Seguro + Capitalização) | ~R$3,8 bi/ano | SUSEP / FenaCap |
| TAM total endereçável | R$6–9 bi/ano | Projeção interna |
| QuintoAndar encerrou garantias (2024) | Vácuo aberto para novos players | Imobi Report |
| PL Despejo Extrajudicial (aprovado CCJ 2025) | Acelera execução — valoriza garantia com cobertura | Câmara |
