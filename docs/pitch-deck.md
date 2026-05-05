# TGA — Pitch Deck

---

## Cover

**Tokenização de Garantia de Aluguel**
Infraestrutura descentralizada para o mercado de garantias locatícias,
conectando capital global a um setor bilionário no Brasil.

---

## 01 · Mercado

### O mercado de locação no Brasil

- **46,5M** brasileiros pagam aluguel — recorde histórico (2024)
- **R$ 110B** movimentados pelo setor imobiliário por ano
- **R$ 1,29B** em prêmios de seguro-fiança (jan–nov 2024)
- **R$ 300M** mercado de garantias digitais em 2025 — em expansão

### O mercado de garantias é dominado por poucos players

- **CredPago / Grupo Loft** — maior player, R$ 40B em ativos sob gestão no pico
- **Loft** prevê investir R$ 100M em tecnologia em 2026, com foco em garantias locatícias
- **BTG Pactual** teve lucro bilionário em menos de 2 anos investindo em CredPago

> Um mercado bilionário, crescendo, e ainda inacessível para investidores externos.

---

## 02 · Problema

**Um mercado fechado e estruturalmente frágil**

### 1 — Capital concentrado, risco sistêmico

Garantidoras operam com capital próprio, sem participação externa. Quando uma falha, como QuintoCred e CredPago em 2025, afetando 45 mil contratos, não há mecanismo coletivo de absorção. O risco fica preso em poucos players.

### 2 — Custo alto, liquidação lenta

Inquilinos pagam **10–15% ao mês** em taxas de garantia. Proprietários esperam **até 60 dias** para receber em caso de inadimplência, dependentes de processos manuais e burocráticos sem previsibilidade.

### 3 — Mercado inacessível a investidores

Um setor que movimenta **bilhôes em prêmios anuais** permanece fechado a pessoas físicas e ao ecossistema cripto. Nenhum mecanismo existe para participação externa no retorno gerado pelas garantias.

---

## 03 · Solução

### O que é o TGA

**TGA (Tokenização de Garantia de Aluguel)** é um protocolo de infraestrutura onchain que transforma o mercado brasileiro de garantias locatícias em um ativo de rendimento real acessível globalmente.

O protocolo opera em duas frentes simultâneas:

- **B2B — para o mercado tradicional:** integra imobiliárias e garantidoras, oferecendo infraestrutura onchain para registro, gestão e liquidação automática de contratos de garantia. Substitui processos manuais sem alterar a dinâmica comercial existente.
- **B2C — para investidores:** emite o token **TGA**, ativo digital que representa participação colateralizada no **TGA SA (Segregated Account)** — estrutura onde o capital dos investidores fica segregado do protocolo e alocado exclusivamente na cobertura de garantias locatícias.

### Para quem é

| Perfil | Proposta |
|---|---|
| **Investidor cripto-nativo** | Exposição a RWA com yield real; diversificação em ativo imobiliário brasileiro |
| **Investidor institucional** | Fundo estruturado com lastro verificável onchain e auditoria pública |
| **Imobiliárias** | Automação de garantias, eficiência operacional, remuneração de 2% por contrato |
| **Proprietários** | Repasse automático em horas, não em meses — sem formulário, sem fila |
| **Inquilinos** | Acesso facilitado ao aluguel; processo mais simples e potencialmente mais barato |

### Posicionamento

> O único protocolo onchain com exposição direta ao mercado brasileiro de garantias locatícias. Não compete com imobiliárias — opera como a camada de infraestrutura que as conecta ao capital global.

---

### Como funciona — fluxo do investidor

**Modelo de NAV apreciável:** o retorno não é distribuído — é incorporado ao fundo. Taxas dos contratos ativos + yield do colateral elevam continuamente o valor de cada token.

| Etapa | Mecânica |
|---|---|
| **Entrada (Mint)** | Investidor deposita stablecoin → protocolo calcula NAV atual do TGA SA → emite tokens TGA proporcionais |
| **Rendimento (Yield)** | Taxas pagas pelos inquilinos nos contratos ativos + yield do colateral em stablecoins → NAV sobe diariamente |
| **Saída (Redeem)** | Investidor deposita TGA no contrato → entra em fila onchain → recebe stablecoin ao NAV vigente no momento da execução |

**Estrutura do fundo:**
- **80% camada ativa** — alocada em contratos de garantia registrados via SGR; cada contrato gera receita que retorna ao fundo
- **20% camada de liquidez** — mantida em stablecoins, gerando yield passivo e servindo como buffer para resgates

---

### Como funciona — infraestrutura técnica

**SGR (Sistema de Garantia Registrada)**
Cada contrato de garantia é registrado onchain via smart contracts. A imobiliária acessa via dashboard e registra o contrato — que passa a existir como um registro imutável na blockchain, com hash criptográfico verificável. O lastro do fundo é auditável publicamente em tempo real, sem exposição de dados sensíveis.

**Camada de Liquidação Programável**
Quando há inadimplência, uma integração offchain aciona o smart contract responsável, que valida as condições do contrato e executa a liquidação automaticamente. O repasse é direcionado à imobiliária, que realiza o repasse ao proprietário. Reduz o tempo de execução de até 60 dias para horas. A arquitetura blockchain — separação entre lógica e estado — permite processamento paralelo de múltiplos contratos simultaneamente.

---

## 04 · Modelo de Negócio

O protocolo se posiciona em um modelo B2B2C, com frente B2B relacionado a imobiliarias e atuando no mercado tradicional como uma fornecedora de garantias locaticias e B2C como um protocolo de tokenização de fundo de investimento em RWA, assim o projeto captura valor por quatro mecanismos:

| Fonte de Receita | Descrição |
|---|---|
| **Spread nas taxas** | Diferença entre a taxa cobrada do inquilino e o % destinado ao fundo |
| **Taxa de gestão** | Fee sobre o AUM do TGA SA | Metas de geração de yield 
| **Taxa de resgate** | Cobrada sobre o valor retirado na saída do investidor |
| **Apreciação do NAV** | Retorno incorporado ao fundo via taxas + yield do colateral |

### Projeção conservadora

- Mercado de garantias digitais no Brasil: **R$ 300M/ano (2025)**
- Penetração inicial estimada: **20%** do mercado
- Spread de **2%** sobre o volume intermediado

> **R$ 1,2M/ano** em receita estimada na fase inicial — projeção conservadora baseada exclusivamente no spread de taxas, sem considerar taxa de gestão, resgate ou apreciação do NAV.

---

## 05 · Go to Market

### Fase 1 — Piloto (B2B)

**Imobiliárias — porta de entrada via rede existente**

- Acesso às primeiras imobiliárias via rede de **30 anos de experiência no mercado de locações no sul do Brasil**
- Onboarding manual, suporte próximo, piloto com imobiliárias selecionadas
- Proposta de valor: automação operacional + **remuneração de 2%** sobre contratos intermediados
- Crescimento: indicação entre imobiliárias ("seu parceiro já usa")
- Proprietários: repasse em dias, não em meses — benefício imediato e mensurável
- Inquilinos: processo de garantia mais simples e potencialmente mais barato

**Investidores — crypto-nativos globais, paralelo ao piloto**

- Canal principal: **X (Twitter)** — marketing orgânico + network estratégico
- Perfil: crypto-nativos com interesse em RWA e diversificação de renda em yield real
- Narrativa: "O único protocolo onchain com exposição ao mercado brasileiro de garantias locatícias"
- Fase piloto como prova pública: contratos onchain, NAV verificável

---

### Fase 2 — Expansão (pós-piloto)

**Imobiliárias**
- Cold outreach estruturado para novas praças
- Campanhas de marketing regionais direcionadas ao público-alvo (gestores de imobiliárias)
- Facilidade operacional como argumento: menos burocracia, mais previsibilidade, receita adicional

**Investidores**
- Integração com protocolos DeFi — TGA como colateral
- Abertura para investidores institucionais
- Crescimento orgânico de AUM via apreciação do NAV e aumento de contratos ativos

---

## 06 · Equipe

### Matheus "Draau" de Pauli — Project Manager · Web3 Builder
+5 anos construindo produtos que conectam tecnologia, marca e mercado. Experiência em coordenação de equipes multidisciplinares e desenvolvimento de soluções em blockchain. Cofundador da comunidade No Bloco — inserção de profissionais criativos no ecossistema Web3.

### Julia Hoffmann Buratto — Design Engineer · Arquiteta (UFSC)
Fundadora da jubs.studio. Em 2023 lançou a Chainless, levando o produto de zero a 5.000 usuários — hoje ultrapassa 30.000 usuários e segue operando. Atua na interseção entre arquitetura de sistemas, UX e infraestrutura onchain, com experiência em fintech e Web3.

### Rede Estratégica
Acesso direto ao mercado imobiliário via conexões com profissionais com **+30 anos de experiência em locações** — facilitando validação, primeiros pilotos e acesso a imobiliárias early adopters.
