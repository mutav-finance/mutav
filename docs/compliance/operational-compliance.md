# MUTAV — Operational Compliance

> Documento gerado em 2026-05-18. Baseado na estrutura definida em `model-structure.md`.
> Mapeia cada momento operacional do produto contra as obrigações regulatórias aplicáveis.

---

## Índice

1. [Onboarding de Imobiliária](#1-onboarding-de-imobiliária)
2. [Contrato de Garantia com Inquilino](#2-contrato-de-garantia-com-inquilino)
3. [Onboarding de Investidor](#3-onboarding-de-investidor)
4. [Fluxo Mensal de Fee](#4-fluxo-mensal-de-fee)
5. [Evento de Default](#5-evento-de-default)
6. [Liquidação e Cobertura pelo Fundo](#6-liquidação-e-cobertura-pelo-fundo)
7. [Recuperação de Crédito](#7-recuperação-de-crédito)
8. [Resgate de Investidor](#8-resgate-de-investidor)
9. [Obrigações Contínuas](#9-obrigações-contínuas)

---

## 1. Onboarding de Imobiliária

**Atores:** Imobiliária, MUTAV Garantidora

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

### Decisões em aberto

- [ ] Prazo máximo para análise e aprovação da imobiliária
- [ ] Critério mínimo de carteira ativa para aceitar a imobiliária

---

## 2. Contrato de Garantia com Inquilino

**Atores:** Imobiliária, Inquilino, MUTAV Garantidora

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

### Decisões em aberto

- [ ] Valor máximo coberto por contrato (teto da fiança)
- [ ] Prazo de carência antes da garantia entrar em vigor

---

## 3. Onboarding de Investidor

**Atores:** Investidor, MUTAV Fund (offshore), MUTAV Gestora

**O que acontece:** investidor se cadastra na plataforma, passa por KYC, deposita cripto e recebe tokens MTVH / MTVM / MTVL em sua wallet.

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

### Decisões em aberto

- [ ] Threshold de aporte a partir do qual se exige declaração de origem dos recursos
- [ ] Jurisdições bloqueadas (ex: EUA, países sancionados)
- [ ] Período de lock-up mínimo antes do primeiro resgate (se houver)

---

## 4. Fluxo Mensal de Fee

**Atores:** Inquilino, Imobiliária, MUTAV Garantidora, MUTAV Fund

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
  └─ 80% → transferência para o MUTAV Fund
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

### Decisões em aberto

- [ ] Prazo máximo para repasse da imobiliária à Garantidora
- [ ] Prazo máximo para repasse da Garantidora ao fundo
- [ ] Moeda de transferência para o fundo (BRL → stablecoin → Tesouro tokenizado)
- [ ] Tratamento fiscal da conversão BRL → cripto

---

## 5. Evento de Default

**Atores:** Inquilino (inadimplente), Imobiliária, MUTAV Garantidora

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
- **Prazo de resposta:** a Garantidora deve definir e cumprir um SLA de resposta à imobiliária após notificação (ex: 48h úteis)
- **Limite de cobertura:** a fiança cobre até o teto contratual — MUTAV não pode ser acionada por valores além do acordado no Termo de Adesão

### Decisões em aberto

- [ ] Quantos dias de atraso antes de a imobiliária poder acionar a MUTAV
- [ ] SLA de resposta da MUTAV após notificação
- [ ] Teto máximo de cobertura por contrato

---

## 6. Liquidação e Cobertura pelo Fundo

**Atores:** MUTAV Garantidora, MUTAV Fund, MUTAV Gestora, Imobiliária / Proprietário

**O que acontece:** Garantidora autoriza o fundo a liquidar posição de Tesouro tokenizado e pagar o valor em atraso.

### Fluxo

```
Garantidora aprova o acionamento
        │
        ▼
MUTAV Gestora instrui o fundo a liquidar posição
        │
        ▼
Smart contract no MUTAV Fund:
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

### Decisões em aberto

- [ ] Prazo máximo para liquidação após aprovação da Garantidora
- [ ] Moeda de pagamento para a imobiliária (BRL ou stablecoin)
- [ ] Prazo para publicação do ajuste de NAV após o evento
- [ ] Limite mínimo de MTVH que a Garantidora deve manter (para não zerar o colchão)

---

## 7. Recuperação de Crédito

**Atores:** MUTAV Garantidora, Inquilino inadimplente

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

### Decisões em aberto

- [ ] Prazo de carência antes de iniciar cobrança extrajudicial
- [ ] Política de parcelamento (MUTAV aceita parcelar a dívida com o inquilino?)
- [ ] Parceiro de cobrança extrajudicial / jurídico
- [ ] Política de venda de carteira de créditos inadimplentes

---

## 8. Resgate de Investidor

**Atores:** Investidor, MUTAV Fund, MUTAV Gestora

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

### Decisões em aberto

- [ ] Prazo de lock-up mínimo antes do primeiro resgate
- [ ] Limite diário de resgate (% do AUM) para evitar corrida ao fundo
- [ ] Prazo de liquidação após posição chegar ao topo da fila

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

## Decisões Globais em Aberto

| # | Decisão | Impacto |
|---|---|---|
| 1 | Jurisdição do fundo offshore | Define regulador, obrigações de reporting e custo |
| 2 | Prazo de tolerância para default (X dias) | Define quando imobiliária pode acionar a MUTAV |
| 3 | Teto de cobertura por contrato | Limita exposição máxima da Garantidora por inquilino |
| 4 | Moeda de pagamento ao proprietário (BRL ou stablecoin) | Define complexidade do fluxo de câmbio |
| 5 | Lock-up mínimo do investidor | Protege liquidez do fundo |
| 6 | Limite diário de resgate (% do AUM) | Evita corrida ao fundo |
| 7 | Threshold para declaração de origem dos recursos | Define KYC reforçado a partir de qual valor |
| 8 | Parceiro jurídico para recuperação de crédito | Define processo de cobrança e ação judicial |
