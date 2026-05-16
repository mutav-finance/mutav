# TGA — Fluxogramas do Sistema

Documento de referência extraído dos diagramas Excalidraw (`docs/img/excalidraw_fluxos.svg`).
Registra os fluxos operacionais do protocolo conforme desenhados — fonte primária para enriquecer o whitepaper.

---

## Fluxos Mapeados

### 1. Fluxo Completo do Sistema
Visão macro de todos os participantes e suas interações com o protocolo TGA.

**Participantes:**
- Inquilino
- Imobiliária
- Proprietário
- Fundo TGA (TGA SA)
- Protocolo TGA
- Investidores

**Elementos principais:**
- Registro de contrato onchain via SGR
- Boleto mensal como mecanismo de pagamento offchain
- Split de pagamento via smart contract entre as partes
- Acionamento de garantia em caso de inadimplência
- Processamento de pagamentos e repasse ao proprietário

---

### 2. Fluxo Imobiliária / Garantia TGA

**Etapas:**
1. Imobiliária acessa o dashboard
2. Fornece dados do imóvel, dados do inquilino e documentos
3. Protocolo analisa — checar score do inquilino + histórico de ações
4. Categorização por risco:
   - **Baixo risco → Baixa taxa**
   - **Médio risco → Taxa média**
   - **Alto risco → Alta taxa**
5. Resultado: garantia aprovada ou garantia rejeitada
6. Se aprovada: registra o contrato onchain (SGR)
7. Contrato ativo: cobrança do boleto mensal ao inquilino
8. Imobiliária acompanha via dashboard dinâmico
9. Em inadimplência: aciona a garantia → protocolo executa liquidação

**Elementos adicionais:**
- Imobiliária cria reputação com base nos contratos gerenciados
- Melhores condições de acesso para imobiliárias com histórico positivo
- Verificação de histórico de inquilinos por imobiliária/região
- Cancelamento de contrato: protocolo cancela a garantia e encerra o ciclo

---

### 3. Fluxo Investidor / Depósito (Mint)

**Etapas:**
1. Investidor acessa a plataforma
2. Checar o fundo atual (NAV, contratos ativos, liquidez disponível)
3. Coloca stablecoin no protocolo
4. Protocolo calcula NAV apreciável
5. Emite token TGA proporcional ao NAV
6. Investidor recebe TGA

**Elementos:**
- Capital direcionado ao TGA SA (Segregated Account)
- Alocação: camada ativa (contratos) + camada de liquidez (stablecoins)
- NAV apreciável: retorno incorporado ao fundo, não distribuído

---

### 4. Fluxo Investidor / Saque (Redeem)

**Etapas:**
1. Investidor solicita resgate
2. Checar as condições: mínimo de X dias locked
3. Executa o redeem → entra na fila de resgate
4. Protocolo verifica liquidez disponível
5. Executa resgate ao NAV vigente no momento da execução
6. Cobra taxa no resgate (redeem fee)
7. Devolve stablecoin ao investidor / token TGA é queimado

**Elementos:**
- Fila de resgate onchain com transparência de posição
- Período mínimo de lockup (dias locked — valor a definir)
- Taxa de resgate cobrada sobre o valor retirado
- Swap disponível como alternativa de saída (mercado secundário)
- Desvalorização proporcional do NAV ao processar o resgate

---

### 5. Fluxo Investidor na Plataforma

**Etapas:**
1. Investidor acessa dashboard
2. Visualiza: contratos ativos, NAV atual, posição no fundo, histórico
3. Acompanha yield gerado
4. Acessa orientações e dados do contrato
5. Solicita depósito (mint) ou resgate (redeem)
6. Acompanha fila de resgate se aplicável

**Elementos:**
- Dashboard dinâmico com dados em tempo real
- Acesso à verificação do histórico das ações onchain
- Visualização de retorno da posição individual

---

### 6. Operação Resumida entre Dashboards

**Ponte entre os dois lados do protocolo:**

| Dashboard Imobiliária | Protocolo TGA | Dashboard Investidor |
|---|---|---|
| Registra contrato | Valida e registra onchain (SGR) | Exibe contratos ativos |
| Aciona garantia | Executa liquidação programável | Atualiza NAV |
| Cobra boleto mensal | Processa pagamento / split | Contabiliza yield gerado |
| Cancela contrato | Encerra account onchain | Reduz exposição do fundo |

---

## Fontes de Receita do Protocolo (conforme diagramas)

Identificadas nos fluxos — mais detalhadas do que o whitepaper atual:

| Fonte | Descrição |
|---|---|
| **Spread entre fundo e protocolo** | Diferença entre taxa cobrada ao inquilino e % destinado ao fundo |
| **Taxa de gestão** | Fee sobre o AUM do TGA SA |
| **Taxa no resgate (Redeem fee)** | Cobrada sobre o valor retirado na saída |
| **Yield gerado** | Retorno do colateral em stablecoins na camada de liquidez |
| **Spread de 20%** | ⚠️ Aparece nos diagramas — necessita confirmação se é base de cálculo interna ou fonte adicional de receita |

---

## Sistema de Risco e Score (Gestão de Risco)

Detalhamento que não está desenvolvido no whitepaper atual:

### Avaliação de Inquilino
- Score calculado com base em dados fornecidos pela imobiliária
- Histórico de ações e pagamentos anteriores
- Categorização em três faixas:
  - **Baixo risco** → taxa menor para o inquilino, melhor cobertura para o fundo
  - **Médio risco** → taxa intermediária
  - **Alto risco** → taxa maior; possível rejeição da garantia

### Reputação de Imobiliária
- Imobiliária constrói reputação ao longo do tempo com base nos contratos gerenciados
- Melhor reputação → melhores condições de acesso ao protocolo
- Score por imobiliária e por região

### Validação pré-aprovação
- Checar score do inquilino
- Checar o fundo atual (capacidade de cobertura disponível)
- Checar as condições do contrato (valor, prazo, imóvel)
- Aprovação ou rejeição com feedback à imobiliária

---

## Elementos em Aberto (identificados nos diagramas)

| Elemento | Status |
|---|---|
| **Dias locked** | Período mínimo de lockup para resgate — valor não definido |
| **Airdrops?** | Aparece com interrogação no diagrama — ideia em análise |
| **Swap** | Mecanismo de saída via mercado secundário — não detalhado |
| **Mínimo de X** | Valor mínimo de depósito ou lockup — não definido |
| **Spread de 20%** | Confirmar se é spread interno ou fonte de receita separada |
| **Protocolo (futuros...)** | Referência a funcionalidades futuras do protocolo — não especificadas |

---

## Referência

- **Fonte:** `docs/img/excalidraw_fluxos.svg`
- **Extração:** 2026-05-05
- **Próximo passo:** incorporar sistema de risco, score e fluxos detalhados na seção de Gestão de Risco do whitepaper
