# MUTAV — Compliance Structure

> Documento consolidado gerado em 2026-05-19. Fonte única de verdade para estrutura do modelo e fluxo de compliance operacional.
> Decisões de política de treasury do app em [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Front 1 — MUTAV Soluções (Garantidora BR)](#front-1--mutav-soluções-garantidora-br)
3. [Front 2 — Mutav Treasury Fund (Offshore)](#front-2--mutav-treasury-fund-offshore)
4. [Mutav Treasury Management (Gestora)](#mutav-treasury-management-gestora)
5. [Cascata de Defaults (Waterfall)](#cascata-de-defaults-waterfall)
6. [Mapa de Entidades e Reguladores](#mapa-de-entidades-e-reguladores)
7. [Onboarding de Imobiliária](#1-onboarding-de-imobiliária)
8. [Contrato de Garantia com Inquilino](#2-contrato-de-garantia-com-inquilino)
9. [Onboarding de Investidor](#3-onboarding-de-investidor)
10. [Fluxo Mensal de Fee](#4-fluxo-mensal-de-fee)
11. [Evento de Default](#5-evento-de-default)
12. [Liquidação e Cobertura pelo Fundo](#6-liquidação-e-cobertura-pelo-fundo)
13. [Recuperação de Crédito](#7-recuperação-de-crédito)
14. [Resgate de Investidor](#8-resgate-de-investidor)
15. [Obrigações Contínuas](#9-obrigações-contínuas)
16. [Decisões em Aberto](#decisões-em-aberto)

---

## Visão Geral

```
┌──────────────────────────────────────────────────────────────────────┐
│  BRASIL                             OFFSHORE (jurisdição a definir)  │
│                                                                       │
│  MUTAV Soluções        ──80%──►  Mutav Treasury Fund                │
│  (Garantidora)                      (Front 2)                        │
│                                                                       │
│  Mutav Treasury Management  ◄── taxas ──── administra o fundo       │
└──────────────────────────────────────────────────────────────────────┘
```

**Convenção de referência neste documento:**
- "a Garantidora" → MUTAV Soluções
- "o Fundo" → Mutav Treasury Fund
- "a Gestora" → Mutav Treasury Management

---

## Front 1 — MUTAV Soluções (Garantidora BR)

**O que é:** empresa operacional brasileira, atua como fiadora institucional nos contratos de locação.

**Base legal:** Art. 37, inciso I da Lei do Inquilinato (fiança). Working hypothesis: o modelo de fiança institucional sob Art. 37 da Lei do Inquilinato mantém a Garantidora fora dos regimes SUSEP (seguro) e CVM (fundos), espelhando o precedente Credpago — pendente opinião de counsel.

**Fluxo de receita:**

```
Inquilino paga fee junto do aluguel
        │ (1 boleto)
        ▼
Imobiliária coleta e repassa à Garantidora
        │
        ├─ 20% → caixa operacional da Garantidora (deságio retido)
        └─ 80% → Mutav Treasury Fund (cessão de recebíveis)
```

**Cobertura de defaults:**

```
Inadimplência detectada
        │
        ▼
Garantidora aciona o Fundo
        │
        └─ MTVH absorve primeiro (Garantidora é cotista MTVH)
```

**Skin-in-the-game:** Garantidora retém cotas MTVH — perde primeiro em qualquer default.

---

## Front 2 — Mutav Treasury Fund (Offshore)

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
Mutav Treasury Fund
│
├─ Cota MTVH (Subordinada)
│   Investidores: MUTAV Soluções (cotista obrigatória) + investidores qualificados/profissionais
│   Nota: classificação CVM Res. 175 Arts. 4/11 aplicável a investidores BR residentes;
│         fundo offshore sujeito à regulação da jurisdição de domicílio — pendente counsel
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

Working hypothesis: patrimônio alocado em Tesouro tokenizado via Etherfuse (Stellar) — pendente confirmação com Etherfuse sobre:
1. Elegibilidade de titulares offshore (restrições de residência/KYB)
2. Modelo de custódia e segregação de chaves (requisito padrão de jurisdições offshore)
3. Fluxo de resgate em BRL — Etherfuse liquida em BRL para conta BR, não em cripto; caminho de câmbio para fundo offshore a definir

Assumindo confirmação:
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

## Mutav Treasury Management (Gestora)

**O que é:** entidade que administra o Mutav Treasury Fund, registrada na jurisdição do fundo.

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

> Nomes canônicos das entidades do grupo. Sufixo societário (LTDA / SA) a definir com counsel antes da constituição.

| Entidade | País | Regulador | Receita |
|---|---|---|---|
| MUTAV Soluções | Brasil | BACEN (working hypothesis — pendente counsel) | 20% do split de fees |
| Mutav Treasury Fund | Offshore (TBD) | Regulador local (TBD) | — |
| Mutav Treasury Management | Offshore (TBD) | Regulador local (TBD) | Taxa de gestão + saque |

---

## 1. Onboarding de Imobiliária

**Atores:** Imobiliária, Garantidora

**O que acontece:** imobiliária se cadastra na plataforma e passa a oferecer a garantia MUTAV para seus contratos de locação.

### Documentos necessários

| Documento | Finalidade |
|---|---|
| Contrato de Parceria MUTAV | Formaliza a imobiliária como canal de distribuição e agente de cobrança do fee |
| Comprovante de CNPJ ativo | Verificação de pessoa jurídica |
| Comprovante de CRECI | Habilitação legal para intermediação imobiliária |
| Dados bancários | Conta de onde sai o repasse do fee para a Garantidora |
| Identificação do responsável legal | KYC da pessoa física que representa a imobiliária |

### Obrigações regulatórias

- **AML/KYC:** coletar e verificar dados da imobiliária e do responsável legal antes de ativar o acesso
- **Contrato de agente de cobrança:** formalizar em contrato que a imobiliária coleta o fee do inquilino em nome da Garantidora e repassa integralmente
- **Política de privacidade / LGPD:** imobiliária deve aceitar os termos de tratamento de dados dos inquilinos

---

## 2. Contrato de Garantia com Inquilino

**Atores:** Imobiliária, Inquilino, Garantidora

**O que acontece:** imobiliária inicia a análise na plataforma MUTAV antes de qualquer interação com o inquilino. Só após aprovação o inquilino é envolvido para assinar.

**Base legal:** Art. 37, inciso I da Lei do Inquilinato (Lei 8.245/91) — fiança.

### Fluxo de ativação

```
Imobiliária acessa o dashboard MUTAV
        │
        ▼
Imobiliária insere dados do inquilino + imóvel + documentos
        │
        ▼
Plataforma MUTAV analisa automaticamente:
  — Score do inquilino (histórico de pagamentos e ações judiciais)
  — Reputação da imobiliária (histórico de contratos gerenciados)
  — Capacidade do fundo (cobertura disponível no momento)
  — Condições do contrato (valor do aluguel, prazo, imóvel)
        │
        ├─ Reprovado → imobiliária notificada, inquilino não é acionado
        │
        └─ Aprovado → score define a faixa de risco e o fee:
                        Baixo risco  → fee menor
                        Médio risco  → fee intermediário
                        Alto risco   → fee maior
                              │
                              ▼
                 Imobiliária informa o inquilino da aprovação e do fee
                              │
                              ▼
                 Inquilino assina o Termo de Adesão MUTAV
                              │
                              ▼
                 Cláusula de fiança entra no contrato de locação
                              │
                              ▼
                 Contrato ativado na plataforma vinculado à imobiliária
                              │
                              ▼
                 Boleto mensal começa (aluguel + fee MUTAV)
```

### Documentos necessários

| Documento | Momento | Finalidade |
|---|---|---|
| Dados do inquilino + imóvel | Antes da análise — fornecido pela imobiliária | Base para o score |
| Resultado da análise de risco | Gerado pela plataforma | Registro da aprovação e faixa de fee |
| Termo de Adesão MUTAV | Assinado pelo inquilino após aprovação | Aceite das condições e autorização de cobrança |
| Cláusula de fiança | Inserida no contrato de locação | Formaliza MUTAV como fiadora |

### Obrigações regulatórias

- **LGPD:** imobiliária coleta dados do inquilino — deve ter base legal (execução de contrato) e política de privacidade clara
- **Lei do Inquilinato:** cláusula de fiança deve identificar a MUTAV como fiadora, o alcance e o limite máximo coberto
- **Proibição de dupla garantia:** o contrato não pode exigir outra modalidade além da MUTAV (Art. 37, parágrafo único)
- **Fee:** valor mensal expresso no Termo de Adesão — não pode ser caracterizado como prêmio de seguro

---

## 3. Onboarding de Investidor

**Atores:** Investidor, Fundo (offshore), Gestora

**O que acontece:** investidor se cadastra na plataforma, passa por KYC, deposita cripto e recebe tokens MTVH / MTVM / MTVL em sua wallet.

> **Escopo:** fluxo direcionado a investidores internacionais. Plataforma em inglês, público cripto-nativo, acesso self-directed.
> Acesso de investidores brasileiros residentes sujeito a análise jurídica pendente — dual regime CVM 175 + BACEN a ser documentado quando counsel confirmar viabilidade.

### Fluxo

```
Investidor acessa a plataforma
        │
        ▼
KYC na plataforma MUTAV
  — documento de identidade
  — comprovante de residência
  — declaração de origem dos fundos (AML)
  — sanctions screening
        │
        ├─ Reprovado → acesso negado
        │
        └─ Aprovado
                │
                ▼
        Investidor assina Subscription Agreement
        (termos do fundo, riscos, classes de cota, taxas)
                │
                ▼
        Investidor escolhe a classe (MTVH / MTVM / MTVL)
        e o valor a aportar
                │
                ▼
        Deposita cripto no endereço do fundo
                │
                ▼
        Smart contract emite tokens proporcionais ao NAV atual
        Tokens vão direto para a wallet do investidor (self-custodial)
```

### Documentos necessários

| Documento | Finalidade |
|---|---|
| Documento de identidade (passaporte ou RG+CPF) | KYC — identificação |
| Comprovante de residência | KYC — endereço |
| Declaração de origem dos fundos | AML — para aportes acima de threshold (TBD) |
| Subscription Agreement | Contrato de adesão ao fundo offshore — aceite dos termos, riscos e classes de cotas |

### Obrigações regulatórias

- **FATF / AML:** KYC obrigatório por padrão internacional independentemente da jurisdição do fundo — identidade, endereço, origem dos recursos
- **Sanctions screening:** verificar investidor contra listas de sanções (OFAC, ONU, UE) antes de ativar
- **Subscription Agreement:** documento legal que formaliza a participação do investidor no fundo offshore — deve conter riscos, classe de cota, mecânica de default waterfall, taxa de gestão e taxa de saque
- **Self-custodial:** o token vai para a wallet do investidor — o fundo não guarda ativos do investidor, o investidor é responsável pela segurança da sua wallet

---

## 4. Fluxo Mensal de Fee

**Atores:** Inquilino, Imobiliária, Garantidora, Fundo

**O que acontece:** todo mês o inquilino paga aluguel + fee em um único boleto. A imobiliária coleta e repassa à Garantidora, que faz o split.

### Fluxo

```
Inquilinos pagam boleto mensal (aluguel + fee MUTAV) individualmente
        │
        ▼
Imobiliária acumula os fees de todos os contratos ativos no mês
        │
        ▼
1 cobrança mensal consolidada: imobiliária repassa
o total de fees do mês à Garantidora
        │
        ▼
Garantidora faz o split sobre o total recebido:
  ├─ 20% → conta operacional da Garantidora
  └─ 80% → transferência para o Fundo
               │
               ▼
           Smart contract registra o aporte
           NAV das cotas é atualizado
```

### Obrigações regulatórias

- **Contrato de agente de cobrança:** o repasse da imobiliária para a Garantidora precisa ter prazo e forma definidos em contrato
- **Nota fiscal:** a Garantidora deve emitir nota fiscal de serviço para a imobiliária pelo serviço de garantia prestado (ISS municipal)
- **Segregação contábil:** os 20% da Garantidora e os 80% do fundo devem ser contabilizados separadamente desde o recebimento
- **Registro da cessão:** o repasse dos 80% para o fundo deve ser registrado como cessão de recebíveis — cada transferência é uma cessão documentada
- **Tributação offshore:** a transferência de BRL → cripto → fundo offshore pode gerar obrigações de câmbio (BACEN) e imposto de renda sobre variação cambial — necessário parecer fiscal específico

---

## 5. Evento de Default

**Atores:** Inquilino (inadimplente), Imobiliária, Garantidora

**O que acontece:** inquilino atrasa o pagamento do aluguel. A imobiliária detecta e notifica a MUTAV para acionar a cobertura.

### Fluxo de acionamento

```
Inquilino não paga no vencimento
        │
        ▼
Imobiliária aguarda X dias (prazo de tolerância — TBD)
        │
        ▼
Imobiliária notifica MUTAV via plataforma
  — número do contrato
  — valor em atraso
  — data de vencimento original
        │
        ▼
MUTAV verifica a notificação:
  — contrato está ativo?
  — fee estava sendo pago?
  — valor solicitado está dentro do teto da fiança?
        │
        ├─ Verificação OK → aciona cobertura (ver seção 6)
        │
        └─ Inconsistência → MUTAV solicita documentação adicional à imobiliária
```

### Documentos necessários

| Documento | Finalidade |
|---|---|
| Notificação formal de inadimplência | Registro do acionamento — gerado pela plataforma |
| Comprovante do boleto não pago | Evidência do default |
| Contrato de locação vigente | Confirmar que a garantia está ativa |

### Obrigações regulatórias

- **Registro do evento:** todo acionamento deve ser registrado com timestamp, valor e contrato — auditabilidade
- **Prazo de resposta:** a Garantidora deve definir e cumprir um SLA de resposta à imobiliária após notificação
- **Limite de cobertura:** a fiança cobre até o teto contratual — MUTAV não pode ser acionada por valores além do acordado no Termo de Adesão

---

## 6. Liquidação e Cobertura pelo Fundo

**Atores:** Garantidora, Fundo, Gestora, Imobiliária / Proprietário

**O que acontece:** Garantidora autoriza o fundo a liquidar posição de Tesouro tokenizado e pagar o valor em atraso.

### Fluxo

```
Garantidora aprova o acionamento
        │
        ▼
Gestora instrui o Fundo a liquidar posição
        │
        ▼
Smart contract no Fundo:
  1. Liquida Tesouro tokenizado (Etherfuse/Stellar) no valor do default
  2. Converte para cripto / stablecoin
  3. Transfere para conta de pagamento da Garantidora
        │
        ▼
Garantidora paga a imobiliária / proprietário
  (em BRL via TED ou stablecoin — TBD)
        │
        ▼
Ajuste de NAV:
  — NAV do MTVH é reduzido primeiro
  — Se MTVH insuficiente → MTVM → MTVL
        │
        ▼
Registro do evento de liquidação na plataforma
```

### Obrigações regulatórias

- **Autorização formal:** toda liquidação precisa de instrução documentada da Gestora — não pode ser automática sem registro
- **Ajuste de NAV:** o impacto no NAV de cada classe de cota deve ser calculado e publicado para investidores em até X horas (TBD)
- **Registro onchain:** a liquidação fica registrada no blockchain — imutável e auditável
- **Câmbio:** conversão cripto → BRL pode ter obrigações de câmbio no Brasil (BACEN) — necessário parecer fiscal

---

## 7. Recuperação de Crédito

**Atores:** Garantidora, Inquilino inadimplente

**O que acontece:** após cobrir o default, MUTAV assume a posição de credora e tenta recuperar o valor pago do inquilino.

### Fluxo

```
Garantidora paga a imobiliária
        │
        ▼
MUTAV assume o crédito do inquilino
  (sub-rogação — MUTAV ocupa o lugar do credor original)
        │
        ▼
Notificação extrajudicial ao inquilino
  — valor devido
  — prazo para quitação
  — consequências em caso de não pagamento
        │
        ├─ Inquilino paga → valor é revertido ao fundo (aumenta NAV)
        │
        └─ Inquilino não paga → ação judicial de cobrança
                                ou venda do crédito para empresa de cobrança
```

### Obrigações regulatórias

- **Sub-rogação:** ao pagar o débito do inquilino, a Garantidora se torna credora por sub-rogação legal (Art. 831 do Código Civil) — sem necessidade de cessão formal
- **Notificação formal:** a cobrança extrajudicial deve seguir o Código de Defesa do Consumidor — sem constrangimento, sem contato em horários proibidos, sem exposição pública
- **Negativação:** MUTAV pode negativar o inquilino nos órgãos de proteção ao crédito (Serasa, SPC) após notificação e prazo para pagamento
- **Ação judicial:** se necessário, a Garantidora entra com ação de cobrança — título executivo é o contrato de locação + comprovante do pagamento feito

---

## 8. Resgate de Investidor

**Atores:** Investidor, Fundo, Gestora

**O que acontece:** investidor decide resgatar sua posição, devolve tokens e recebe cripto.

### Fluxo

```
Investidor inicia resgate na plataforma
  — informa valor ou quantidade de tokens a resgatar
        │
        ▼
Plataforma verifica:
  — período de lock-up cumprido?
  — liquidez disponível no fundo?
        │
        ▼
Investidor entra na fila de resgate onchain
(posição na fila visível e transparente)
        │
        ▼
Investidor aprova transação na wallet (self-custodial)
        │
        ▼
Smart contract:
  1. Recebe os tokens do investidor
  2. Calcula o valor em cripto baseado no NAV atual
  3. Aplica taxa de saque
  4. Queima os tokens
  5. Transfere cripto para a wallet do investidor
        │
        ▼
Fundo liquida posição de Tesouro se necessário
  (proporcional ao resgate)
        │
        ▼
NAV é atualizado para os demais investidores
```

### Obrigações regulatórias

- **NAV justo:** valor de resgate calculado pelo NAV do momento da execução — não do momento da solicitação
- **Taxa de saque:** deve estar prevista no Subscription Agreement — não pode ser cobrada sem consentimento prévio
- **Fila onchain:** transparência total de posição — investidor sabe exatamente quando será atendido
- **Registro auditável:** toda operação de resgate registrada com timestamp, NAV aplicado e taxa cobrada
- **Relatório fiscal:** MUTAV emite extrato de movimentação para suporte à declaração de IR do investidor

---

## 9. Obrigações Contínuas

### Diárias
- Atualização do NAV das 3 classes de cotas com base no rendimento do Tesouro tokenizado
- Monitoramento de eventos de inadimplência notificados pelas imobiliárias

### Mensais
- Conciliação contábil: fees recebidos × repasses ao fundo × defaults cobertos
- Relatório de movimentação para investidores (aportes, resgates, NAV)
- Emissão de notas fiscais de serviço (Garantidora → imobiliárias)
- Declaração de câmbio ao BACEN se aplicável (remessas ao fundo offshore)

### Anuais
- Auditoria independente do fundo (exigência padrão da jurisdição offshore)
- Relatório anual para investidores (rendimento, defaults, NAV por classe)
- Renovação de KYC para investidores com posições ativas (AML contínuo)
- Atualização do regulamento do fundo se houver mudanças estruturais

### AML contínuo
- Screening de investidores ativos contra listas de sanções atualizadas
- Monitoramento de transações atípicas (aportes ou resgates fora do padrão)
- Diligência reforçada para investidores PEP (Pessoa Politicamente Exposta)

---

## Decisões em Aberto

> Master index de todas as questões abertas — estruturais, jurídicas, operacionais, vendors e engenharia.
> **Convenções:** Owner = quem responde | Bloqueia = o que depende da resposta.
> Quando uma decisão for resolvida, mova para a seção **Resolvidas** no mesmo PR. O próximo editor apaga o que estiver em Resolvidas antes de adicionar novas.
>
> Decisões de política de treasury do app (NAV epoch, deposit pricing, Pix quarantine): [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

---

### ✅ Resolvidas

| # | Decisão | Resolução | Data |
|---|---|---|---|
| R1 | Naming das entidades do grupo | MUTAV Soluções (Garantidora BR), Mutav Treasury Fund (fundo offshore), Mutav Treasury Management (gestora offshore), MUTAV (brand/plataforma) — sufixo societário pendente counsel | 2026-05-19 |
| R2 | Framing regulatório da Garantidora | "Zona cinza" tratada como working hypothesis pending counsel — não como fato estabelecido | 2026-05-19 |
| R3 | Foco de mercado do fundo | Plataforma direcionada a investidores internacionais (inglês, cripto-nativos, self-directed); acesso de brasileiros residentes pendente opinião jurídica | 2026-05-19 |
| T1a | NAV update trigger | Por evento (não por epoch fixo). Observação: verificar capacidade operacional antes de implementar. | 2026-05-19 |
| T1b | Cap de variação de NAV por epoch | ±1.0% com dois tipos de update: Tesouro yield (automático, sem aprovação) e taxa de inquilino/default (manual, requer aprovação) | 2026-05-19 |
| T1c | Circuit breaker tolerance | ±0.5% — se variação superar esse threshold, aciona pausa | 2026-05-19 |
| T1d | Política durante pausa do NAV | Refund mints + hold redeems (investidor novo recebe de volta; resgates ficam em fila até NAV voltar ao range) | 2026-05-19 |
| F1 | Taxa de gestão | 1% a.a. sobre AUM | 2026-05-19 |
| F2 | Taxa de saque | 0.25% sobre o valor resgatado | 2026-05-19 |
| O1 | Prazo de análise e aprovação da imobiliária | 48h úteis | 2026-05-19 |
| O2 | Critério mínimo de carteira da imobiliária | Sem mínimo na v1 | 2026-05-19 |
| O3 | Prazo de repasse imobiliária → Garantidora | Data fixa no mês (dia a definir no contrato de parceria) | 2026-05-19 |
| O4 | Prazo de repasse Garantidora → Fundo | 2 dias úteis após recebimento da imobiliária | 2026-05-19 |
| O7 | Prazo de tolerância para default | 15 dias corridos após o vencimento do aluguel antes de acionar a MUTAV | 2026-05-19 |
| O8 | SLA de resposta + cobertura da MUTAV após notificação | 5 dias úteis para verificar o acionamento e liberar o pagamento ao proprietário/imobiliária | 2026-05-19 |
| O9 | Prazo máximo para liquidação após aprovação da Garantidora | 2 dias úteis — da aprovação até o pagamento na conta da imobiliária/proprietário | 2026-05-19 |
| O10 | Moeda de pagamento para imobiliária/proprietário | BRL via Pix ou TED | 2026-05-19 |
| O11 | Prazo para publicação do ajuste de NAV após default | Imediato onchain — ajuste visível assim que a transação confirma no Stellar. Observação: verificar capacidade da infraestrutura de indexação antes de comprometer o SLA | 2026-05-19 |
| O15 | Prazo de carência antes de iniciar cobrança extrajudicial | 30 dias após MUTAV cobrir o default antes de acionar cobrança formal contra o inquilino | 2026-05-19 |
| O16 | Política de parcelamento da dívida com o inquilino | Sim — parcelamento disponível. Detalhe do fluxo operacional a definir (número de parcelas, juros, plataforma) | 2026-05-19 |
| O18 | Política de venda de carteira de créditos inadimplentes | Caso a caso — founders avaliam volume e perfil da carteira antes de alienar | 2026-05-19 |
| O20 | Cap de resgate semanal | 2.5% do AUM por semana — sem limite diário, fila onchain processa em ordem de chegada dentro do cap semanal | 2026-05-19 |

---

### Estrutura do Fundo — pendente founders

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| J1 | Jurisdição do fundo offshore | Founders | Regulador, obrigações de reporting, custo de constituição, L1, L3 |

**Opções em avaliação:**

| | Cayman Islands | BVI | Bermuda | Marshall Islands | UAE / ADGM | Próspera (Honduras) |
|---|---|---|---|---|---|---|
| **Custo setup** | $20–40k | $5–15k | $15–30k | $1–3k | $10–25k | ~$1k |
| **Custo anual** | $10–20k | $5–10k | $8–15k | $1–2k | $8–15k | Muito baixo (1% revenue tax) |
| **Tempo de setup** | 4–8 semanas | 2–4 semanas | 4–8 semanas | 1–2 semanas | 4–8 semanas | Rápido |
| **Reconhecimento institucional** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Crypto-friendly** | ✓ | ✓ | ✓ | ✓ (DAOs) | ✓ | ✓✓ (Bitcoin legal tender, DAOs, smart contracts) |
| **Certeza jurídica** | Máxima | Alta | Alta | Baixa | Média | Crítica |
| **Status atual** | Estável | Estável | Estável | Estável | Estável | ⚠️ Framework ZEDE declarado inconstitucional retroativamente pelo Supremo de Honduras (2024); Próspera contesta via arbitragem ICSID ($10.7B); operando via brechas |

---

### Regulatórias / Jurídicas — pendente counsel

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| L1 | Enquadramento legal da Garantidora: VASP (BCB Res 519–521), payment institution (BCB Res 494–497), FIDC, FIF ou nenhum? | Counsel | Cadência do audit log, reporting regulatório, se BCB Res 521/2025 (já em vigor desde mai/2026) se aplica diretamente à MUTAV |
| L2 | CVM 175 fund-of-funds: a estrutura em duas camadas (investidor → MUTAV token → TESOURO → Tesouro Direto) aciona o Anexo II da CVM 175? | Counsel | UI de disclosure para investidores, template de filing CVM |
| L3 | Autorizações Etherfuse: as autorizações CVM/BCB existentes da Etherfuse cobrem o caso de uso da MUTAV (treasury de garantia + on-ramp de investidor)? Se não, MUTAV precisa de autorização própria antes de out/2026 | Counsel + Etherfuse legal | Escopo do track de autorização; relacionado a L1 |
| L4 | Tratamento tributário dos holders de MUTAV token: IRRF e IOF equivalentes, piores ou melhores do que holders diretos de Tesouro Direto? | Counsel + tax advisor | UI de disclosure fiscal, tooling de relatório anual |
| L5 | Tipo societário da Garantidora no Brasil (LTDA vs. SA) | Counsel + founders | Governança, emissão de cotas, custo de constituição |
| L6 | Validação jurídica do nome "MUTAV Soluções" — risco de enquadramento regulatório pelo nome | Counsel | Nome legal definitivo antes do registro |
| L7 | CVM 175: classificação de acesso ao MTVH — qualificado (Art. 4, R$1M+) ou profissional (Art. 11, R$10M+)? | Counsel | KYC depth, marketing rules, Subscription Agreement |
| L8 | Investidor BR: viabilidade do dual regime CVM 175 + BACEN para acesso via plataforma | Counsel | Se e como brasileiros residentes podem investir; expansão do §3 deste doc |

---

### Etherfuse / Arquitetura de Treasury

| # | Questão | Owner | Bloqueia |
|---|---|---|---|
| ET1 | Elegibilidade de titulares offshore: Etherfuse impõe restrição de residência/KYB para quem pode segurar TESOURO? | Business (Etherfuse account manager) | Valida ou reformula a estrutura do fundo offshore |
| ET2 | Modelo de custódia: quem detém as signing keys da posição de Tesouro no Stellar? Multisig? Segregação exigida pela jurisdição do fundo? | Eng + counsel | Governança do fundo, requisitos de auditoria |
| ET3 | Fluxo de resgate em default: Etherfuse liquida em BRL para conta BR — qual o caminho de câmbio para o fundo offshore receber esses recursos? | Business + counsel | §6 deste doc (Liquidação e Cobertura), O13, O14 |
| ET4 | Etherfuse B2B settlement extension: pode estender integração atual para cobrir settlement B2B do lado agência (fee Pix collection → TESOURO mint)? | Business (Etherfuse account manager) | Design do rail de settlement; fallback para V3 se não viável |

---

### Vendors

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| V1 | KYC provider: confirmar Sumsub ou alternativa. Sub-questões abertas: biometric liveness (ISO/IEC 30107-3 PAD Level 2+), integração SERPRO/Datavalid, LGPD DPA com ANPD SCCs | Eng + business | Fluxo de onboarding de investidor — bloqueante para v1 retail |
| V2 | BaaS hedge: escolher um entre Transfero / Bitso / Foxbit como rail de fallback para Etherfuse. Sub-questões por vendor: Transfero (Stellar-native USDC?), Bitso (webhook + correlation-id), Foxbit (pricing por volume) | Eng + business | Failover playbook; não bloqueante para v1 se Etherfuse saudável |

---

### Treasury Policy — pendente Draau

Três decisões de política de treasury detalhadas com tabelas de trade-off e recomendações de ponto de partida em [`mutav-app/docs/architecture/pending-treasury-decisions.md`](../../../mutav-app/docs/architecture/pending-treasury-decisions.md).

| # | Decisão | Bloqueia |
|---|---|---|
| T2 | Deposit pricing approach: single BRL NAV / dual share class (USD + BRL) / USD NAV com TESOURO underlying | UI de portfolio do investidor, schema de moeda, disclosure CVM |
| T3 | Pix quarantine window: 7 / 30 / 80 dias — trade-off entre exposição a MED reversals e capital de float | Sizing do float de TESOURO, UI de quarantine, reconciliação |

---

### Financeiras / Comerciais

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| F3 | Proporção mínima de MTVH que a Garantidora deve reter (skin-in-the-game) | Founders + counsel | Colchão mínimo de first-loss, política de risco |
| F4 | Threshold de aporte para exigir declaração de origem dos recursos (AML) | Counsel | KYC reforçado, operacional do §3 |
| F5 | Jurisdições bloqueadas para investidores (ex: EUA, países sancionados) | Counsel + business | Política de acesso geográfico, sanctions screening |

---

### Operacionais — Imobiliária e Contrato

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| O5 | Valor máximo coberto por contrato (teto da fiança) | Founders + counsel | Exposição máxima por inquilino, Termo de Adesão |
| O6 | Prazo de carência antes da garantia entrar em vigor | Business + counsel | Proteção contra fraude no onboarding |

---

### Operacionais — Default e Liquidação

> **Fluxo de recebimento duplo (plataforma — a trackear):**
> Se a MUTAV já cobriu o default e o inquilino pagar depois, a imobiliária recebe em duplicidade.
> A plataforma deve detectar esse evento e acionar o fluxo de reembolso: imobiliária devolve o valor à MUTAV → MUTAV repõe o NAV do fundo.
> Esse fluxo precisa ser desenhado e implementado na plataforma antes de v1 em produção.

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| O12 | Limite mínimo de MTVH que a Garantidora deve manter (colchão mínimo) | Founders | Evita zerar o colchão de first-loss |
| O13 | Moeda de transferência para o Fundo (BRL → stablecoin → Tesouro tokenizado) | Business + eng | Arquitetura do fluxo financeiro, ET3 |

**Opções em avaliação:**

| Caminho | Como funciona | Pro | Contra |
|---|---|---|---|
| BRL → Etherfuse → TESOURO | Garantidora faz Pix para Etherfuse, Etherfuse minta TESOURO direto na wallet Stellar do Fundo | Menos etapas, menor custo | Bloqueado por ET1 (eligibilidade offshore) e ET4 (B2B settlement extension) |
| BRL → USDC → TESOURO | Garantidora converte BRL em USDC via exchange, usa USDC para comprar TESOURO | Não depende de Etherfuse aceitar BRL offshore | Mais passos, custo de câmbio BRL/USD, FX exposure |
| BRL → BRZ (stablecoin BR) → TESOURO | Via BRZ na Stellar como intermediário | Mantém exposição em BRL | BRZ com menor liquidez, dependência de mais um vendor |

> Decisão bloqueada por ET1 e ET4 — working hypothesis: BRL → Etherfuse → TESOURO (caminho 1) pendente confirmação Etherfuse.
| O14 | Tratamento fiscal da conversão BRL → cripto | Counsel + tax advisor | Parecer fiscal, obrigações BACEN |

---

### Operacionais — Recuperação de Crédito

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| O17 | Parceiro de cobrança extrajudicial / jurídico | Business | Processo e custo de recuperação |

---

### Operacionais — Investidor

| # | Decisão | Owner | Bloqueia |
|---|---|---|---|
| O19 | Período de lock-up mínimo antes do primeiro resgate | Business + counsel | Liquidez do fundo, Subscription Agreement |
| O21 | Prazo de liquidação após posição chegar ao topo da fila de resgate | Business + eng | SLA com o investidor |

---

### Engineering Deferrals — pendente eng

Cada item tem forcing function definida; intencionalmente não construído agora.

| # | Item | Forcing function | Contexto |
|---|---|---|---|
| E1 | Hash-chained audit log (append-only, imutável) | Antes da autorização VASP (L1) — out/2026 no máximo; antes de capital real de investidores em produção | `mutav-app/docs/architecture/admin.md` linha 234 |
| E2 | Square Books ledger (`ledger_accounts` + `journal_entries`, invariante sum=0) | Quando collection de pagamento sair dos anchors para in-house | PR #72 do pricing-module |
| E3 | Daily on-chain ↔ Convex reconciliation job | Se L1 resolver como VASP: BCB Res 521/2025 já em vigor (mai/2026) — reconciliação diária é o substrato operacional | `architecture/reliability.md` § Reconciliation |
| E4 | Stellar treasury proposal queue UI (XDR, coleta de assinaturas, Lobstr deep links) | Antes de qualquer operação real de treasury em produção (~1–2 semanas de trabalho) | `architecture/admin.md` §§ A3, A6 |
| E5 | Money type system: branded `Cents`, campo `currency` por coluna, rounding policy, fast-check suite | Segundo tipo de moeda (Stroop/USDC) ou primeira emissão de NFS-e | PR #72 |
| E6 | Conversion boundary module (`brlCentsToStroopsFloor`, etc.) | Quando code path de settlement onchain aterrissar | PR #72 |
| E7 | Versioned rate cards em DB (`pricing_tables` com `effective_from/to`) | Primeira mudança de taxa com clientes reais, ou filing SUSEP | `src/lib/pricing/tiers.ts` |
| E8 | `endToEndId` como chave de idempotência para webhooks Pix | Quando integração de webhooks Pix aprofundar | PR #72 |
| E9 | Auth0 wiring (decidido 2026-05-16, não implementado) | Antes de contas reais de usuários | `docs/auth.md`, `convex/lib/auth.ts` |
| E10 | Telemetry / alerting infrastructure para indexer e cron | Antes de impacto real em clientes | `architecture/onchain-integration.md` linha 353 |
| E11 | Migration trigger thresholds para indexer (Convex → direct chain reads) | Degradação de UX observada em volume específico | `architecture/onchain-integration.md` linha 75 |

---

### Calendar Pins

| Data | Evento | Afeta |
|---|---|---|
| **mai/2026** (em vigor) | BCB Res 521/2025 — reporting mensal de stablecoins começa | L1: se MUTAV for VASP, aplica diretamente agora |
| **mai/2026** (em curso) | BCB Res 494–497 — janela de autorização de IP | L1, L3, V1, V2 |
| **out 30, 2026** | Cliff VASP do BCB — fim do período de transição de 270 dias (a partir de fev/2026) | Não pode transacionar com contrapartes não autorizadas após essa data; L1 define se a MUTAV está sujeita diretamente |
| **dez/2026** | Conclusão estimada do audit OpenZeppelin para Stellar Smart Accounts | E4 pode usar esses contratos em vez de multisig nativo na v2 |
