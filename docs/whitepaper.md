# Whitepaper — MUTAV 

# MUTAV - Tokenização de Garantia de Aluguel 

## 1. Visão Geral

O mercado locação de imóveis no Brasil movimenta bilhões anualmente, sustentado por um ecossistema imobiliário amplo, com milhões de contratos ativos e crescente demanda por soluções que substituam o fiador tradicional. Apesar da relevância, esse mercado ainda opera com baixa eficiência, processos manuais e concentração de capital em poucos players, limitando acesso, transparência e inovação.

A MUTAV surge como resposta a esse cenário, aplicando infraestrutura blockchain para transformar a forma como garantias são estruturadas, financiadas e executadas. Ao conectar infraestrutura onchain a um mercado local pouco explorado do ponto de vista financeiro, o modelo reduz fricções operacionais, melhora a gestão de risco e cria uma nova classe de ativo baseada em fluxo real da economia.

A MUTAV funciona como uma **infraestrutura onchain de garantia locatícia**, abrindo acesso a um mercado bilionário hoje concentrado em poucos participantes e criando as bases para uma camada financeira mais eficiente, transparente e escalável.

Alguns dados ilustram a dimensão e potencial desse mercado:

- Ecosistema imobiliário (COFECI): O segmento de imobiliárias no Brasil movimenta anualmente **R$ 110 bilhões** [[FONTE]](https://imobireport.com.br/aluguel/credaluga-e-kanastra-lancam-primeiro-fundo-que-substitui-titulo-de-capitalizacao-como-garantia-de-aluguel/)

- Jan–Nov 2024 (CQCS): O segmento de seguro fiança locatícia arrecadou **R$ 1,29 bilhão em prêmios** emitidos entre janeiro e novembro de 2024. [[FONTE]](https://www.ideeseguros.com.br/seguro-fianca-cresce-em-2024)

- Número de brasileiros vivendo de aluguel chegou a **46,5 milhões em 2024**, novo recorde histórico. [[FONTE]](https://agenciabrasil.ebc.com.br/geral/noticia/2025-08/parcela-de-familias-quem-pagam-aluguel-sobe-25-em-8-anos-mostra-ibge)

- O mercado de garantias locatícias digitais movimenta cerca de **R$ 300 milhões por ano (2025)**, refletindo um setor ainda em estágio inicial, mas em expansão frente à crescente inadimplência e consolidação do segmento. [[FONTE]](https://portas.com.br/noticias/inadimplencia-crescente-acelera-consolidacao-no-mercado-de-garantias-locaticias/)

- Loft / CredPago — os dados da aquisição bilionária: Na data da aquisição pela Loft (julho 2021), a CredPago tinha mais de 123 mil contratos, resultando em cerca de **R$ 40 bilhões em ativos sob gestão**, 16 mil imobiliárias parceiras e 145 mil clientes finais. A empresa havia crescido 10 vezes nos últimos 3 anos. A transação representou um **ganho de R$ 1,4 bilhão para o BTG Pactual** — que havia comprado 20% da CredPago em 2020 e depois ampliado para 49%. O BTG entrou por um valor muito menor e saiu bilionário em menos de **2 anos de investimento**. [[FONTE]](https://braziljournal.com/loft-compra-credpago-em-dinheiro-e-acoes/)

- Loft registra 1,2 milhão de transações em 2025 e amplia atuação em fintech. Empresa cresceu 35% no ano e **prevê investir R$ 100 milhões em tecnologia em 2026,** com foco em crédito imobiliário, **garantia locatícia** e SaaS. [[FONTE]](https://portas.com.br/mercado-imobiliario/loft-registra-12-milhao-de-transacoes-em-2025/#:~:text=Empresa%20cresceu%2035%25%20no%20ano%20e%20prev%C3%AA,R$%20100%20milh%C3%B5es%20em%20tecnologia%20em%202026.)

---

## 2. Problema

O capital que sustenta as garantias locatícias atualmente é altamente **concentrado**. Garantidoras operam com capital próprio e incentivos institucionais, precificam risco de forma assimétrica e capturam integralmente o retorno, sem transparência, sem participação externa e com baixa competição estrutural.

Isso gera quatro distorções principais:

- **Para o mercado:** concentração de risco em poucos players. Quando um deles falha, como observado nos eventos envolvendo QuintoCred e CredPago em 2025, não há mecanismo eficiente de absorção coletiva.
- **Para inquilinos:** estrutura oligopolista com custos elevados (10–15%)
- **Para proprietários:** liquidação lenta de inadimplência (até 60 dias).
- **Para investidores:** um mercado de mais de R$ 1 bilhão em prêmios anuais permanece inacessível a pessoas físicas e ao ecossistema cripto.

A MUTAV resolve esses pontos simultaneamente.

---

## 3. Solução Proposta

A MUTAV propõe a abertura do mercado de garantias locatícias, permitindo que qualquer pessoa participe de um setor historicamente restrito a poucos players. Por meio da tokenização, o capital que sustenta essas garantias deixa de ser concentrado e passa a ser distribuído entre investidores, criando um modelo mais transparente, acessível e eficiente, onde o público pode obter exposição direta a um mercado bilionário antes inacessível.

A MUTAV é estruturada em três entidades distintas: **MUTAV Soluções** (Garantidora brasileira, operacional), **Mutav Treasury Fund** (fundo offshore, veículo de investimento) e **Mutav Treasury Management** (gestora offshore do fundo).

A MUTAV Soluções atua como fiadora institucional nos contratos de locação, retendo 20% das taxas coletadas e repassando 80% ao Mutav Treasury Fund. O fundo emite três classes de cotas — **MTVH** (subordinada, first-loss), **MTVM** (mezzanine) e **MTVL** (sênior) — cujo patrimônio é alocado em Tesouro brasileiro tokenizado via Etherfuse (Stellar). O investidor recebe tokens da classe escolhida proporcionais ao NAV vigente, mantidos em sua própria wallet (self-custodial).

O modelo é baseado em um **NAV apreciável**, no qual o retorno não é distribuído, mas incorporado ao próprio fundo. As receitas geradas pelas taxas de garantia e pelo rendimento do capital aumentam o valor total sob gestão, refletindo diretamente na valorização de cada token ao longo do tempo. Dessa forma, o investidor captura o crescimento do mercado por meio da apreciação do ativo, em um modelo simples, eficiente e alinhado à lógica de fundos tradicionais, porém com transparência e execução on-chain.

### Mecanismo Central

O funcionamento da MUTAV segue um modelo estruturado baseado em mecanismos já consolidados em protocolos on-chain, como no mercado de reinsurance, validando sua robustez.

Essa estrutura é sustentada por uma infraestrutura que garante transparência, execução automatizada e confiabilidade operacional. Isso permite que todos os contratos de garantia sejam registrados on-chain por meio da dashboard da imobiliaria, tornando o lastro do fundo verificável em tempo real. Complementarmente, a automatização da execução de inadimplências e a atualização do NAV, eliminando processos manuais e reduzindo o tempo de liquidação.

A partir dessa base, o fluxo operacional se divide em três etapas principais: entrada de capital, geração de rendimento e saída.

**Entrada (Mint):**

O investidor deposita stablecoin no protocolo, que calcula automaticamente o NAV atual da MUTAV SA e emite a quantidade proporcional de tokens MUTAV. O capital é então direcionado para a conta segregada, passando a compor o fundo que sustenta as garantias locatícias.

**Geração de rendimento (Yield):**

O rendimento total do fundo é sustentado por **taxas pagas pelos inquilinos**, associadas aos contratos de garantia ativos (80% das taxas repassadas pela Garantidora), e pelo **yield do Tesouro brasileiro tokenizado** via Etherfuse (Stellar), onde o patrimônio do fundo permanece alocado. Esse fluxo combinado é continuamente reintegrado ao fundo, elevando o valor total sob gestão e refletindo diretamente na apreciação do NAV ao longo do tempo.

O capital do Mutav Treasury Fund é estruturado em duas camadas:

- **Camada ativa:** alocada em Tesouro tokenizado (Etherfuse/Stellar), comprometida com a cobertura dos contratos de garantia vigentes e gerando yield diário enquanto não acionada.
- **Camada de liquidez:** parcela disponível para resgates imediatos dentro do cap semanal, também mantida em Tesouro tokenizado com liquidação programável.

**Saída (Redeem):**

Para realizar o resgate, o investidor deposita seus tokens MUTAV no contrato e entra em uma fila on-chain. A execução ocorre com base no NAV vigente no momento do processamento, e o investidor recebe o valor correspondente em stablecoin. O valor é debitado do fundo, reduzindo proporcionalmente o NAV, com o custo distribuído entre todos os participantes.

O modelo não prevê liquidez imediata por design, uma vez que parte do capital está comprometida em contratos de longo prazo (12–24 meses). A reserva de liquidez existente permite absorver saídas de forma gradual, sem comprometer a integridade do fundo.

O fundo mantém uma reserva de liquidez dedicada para atender solicitações de resgate, permitindo que saídas ocorram de forma controlada e sem comprometer a operação. A execução dos resgates segue um limite operacional ao longo do tempo, garantindo previsibilidade e preservando a estabilidade do fundo.

Pedidos que excedam a liquidez disponível permanecem em uma fila on-chain, com total transparência de posição e continuidade de rendimento até sua execução.

Além disso, é aplicada uma taxa de resgate sobre o valor retirado.

---

### Infraestrutura Técnica

#### Cálculo e Atualização do NAV

O Net Asset Value do Mutav Treasury Fund é calculado puramente onchain, executado diretamente no smart contract sem dependência de serviços externos ou feeds de dados offchain. Qualquer participante pode verificar e reproduzir o cálculo de forma independente. O NAV é atualizado **por evento** — entrada de taxas de garantia, pagamentos de default processados, resgates executados e rendimento do Tesouro tokenizado — garantindo que cada operação reflita imediatamente no valor das cotas.

O valor de cada token MUTAV é determinado pela razão entre o total de ativos sob gestão e a quantidade de tokens em circulação:

```
NAV = total_assets / tokens_emitidos
```

**Depósito de novo investidor:** quando um investidor deposita stablecoins, o protocolo calcula o NAV vigente e emite a quantidade proporcional de tokens MUTAV. O aporte aumenta simultaneamente o total de ativos e o número de tokens na mesma proporção — o NAV permanece inalterado. Um novo investidor não financia a saída de outros nem dilui quem já está no fundo: ele entra ao preço justo e passa a ter participação proporcional ao valor depositado.

**Entrada de fees e yield:** as taxas pagas pelos inquilinos e o rendimento do colateral em stablecoins entram no fundo sem a criação de novos tokens. O total de ativos cresce enquanto o número de tokens permanece o mesmo — o NAV sobe. O retorno é distribuído automaticamente entre todos os holders proporcionalmente à sua posição, sem nenhuma ação necessária da parte deles.

**Inadimplência:** quando o protocolo executa uma garantia, Tesouro tokenizado é liquidado no valor do default sem que nenhum token seja criado ou destruído. O impacto segue a cascata de absorção: o NAV da cota **MTVH** (subordinada) recua primeiro; somente se MTVH zerar o impacto migra para **MTVM** (mezzanine) e, por último, para **MTVL** (sênior). Esse waterfall protege as classes de menor risco e concentra a exposição nos holders de maior retorno potencial.

**Resgate de investidor:** para sair, o investidor deposita seus tokens MUTAV no contrato. O protocolo queima exatamente a quantidade de tokens correspondente ao valor resgatado ao NAV vigente e devolve o equivalente em stablecoins. Ativos e tokens saem na mesma proporção — o NAV dos demais holders não é afetado. É aplicada uma taxa de resgate de 0,25% sobre o valor retirado.

**Risco para o investidor:** o risco varia por classe de cota. Holders de MTVH assumem o first-loss em troca de maior yield; holders de MTVL têm menor exposição a defaults e menor retorno. Em qualquer cenário, não existe vantagem estrutural de entrada ou saída entre investidores da mesma classe. Se a taxa de inadimplência superar cronicamente a receita de fees, o NAV da classe afetada pode recuar abaixo do preço de entrada, resultando em perda de capital. O cap semanal de 2,5% do AUM e a camada de liquidez em Tesouro tokenizado existem para dar tempo ao fundo de absorver choques sem comprometer a operação. Fora esse cenário extremo, o único risco operacional para o investidor é aguardar a fila de resgate — período durante o qual ele continua acumulando rendimento sobre sua posição.

#### Mecanismo de Resgate

O resgate de tokens MUTAV segue um modelo estruturado para preservar a integridade do fundo:

- **KYC obrigatório:** o resgate exige verificação de identidade. Não há período mínimo de lockup — qualquer investidor com KYC aprovado pode solicitar resgate a qualquer momento.
- **Cap semanal de 2,5% do NAV:** o protocolo limita saídas a 2,5% do valor total do fundo por semana. Pedidos que excedam esse limite entram em fila onchain e são processados na semana seguinte, em ordem de submissão.
- **Taxa de resgate de 0,25%:** cobrada sobre o valor retirado no momento da execução.
- **Preço de execução:** o NAV aplicado é o vigente no momento em que o pedido é processado pela fila, não o do momento da submissão.

Pedidos em fila continuam acumulando rendimento proporcional à posição enquanto aguardam execução.

#### Liquidação Programável — Fluxo de Inadimplência

O acionamento de garantia em caso de inadimplência segue um processo híbrido, com detecção pela imobiliária e execução onchain:

1. A imobiliária identifica a inadimplência e notifica o protocolo via dashboard, fornecendo os dados necessários para validação.
2. O backend aciona o smart contract, que verifica automaticamente as condições do contrato — prazo, valores, histórico de pagamentos.
3. O contrato retorna pré-aprovação ou recusa. Em caso de recusa, a imobiliária recebe orientações sobre o que regularizar.
4. Pedidos pré-aprovados passam por auditoria interna da equipe MUTAV para validação final.
5. Após aprovação, a liquidação é executada onchain e o repasse é direcionado à imobiliária para transferência ao proprietário.

#### Custódia

O capital dos investidores é custodiado de forma **non-custodial** — os fundos ficam nos smart contracts onchain, sem intermediário com acesso aos ativos. Operações administrativas críticas são protegidas por **multisig**, com signatários a serem definidos antes do lançamento.

#### Mercado Secundário

O mercado secundário para o token MUTAV — pool de liquidez em DEX para saída fora da fila de resgate — é uma feature planejada para fase posterior ao lançamento inicial. No MVP, a única via de saída é o resgate via fila onchain.

---

### Estrutura de Cotas e Waterfall

A gestão de risco do Mutav Treasury Fund é operacionalizada por meio de três classes de cotas com absorção sequencial de perdas (waterfall).

**Nível 1 — Scoring individual por contrato:**
Cada contrato de garantia registrado recebe uma pontuação de risco calculada com base em dados do inquilino, histórico de pagamentos e perfil do imóvel. Esse score determina o fee cobrada do inquilino.

**Nível 2 — Classes de cotas:**
O fundo emite três classes com perfis distintos de risco e retorno:

| Cota | Perfil | Absorção de defaults | Yield |
|---|---|---|---|
| **MTVH** (Subordinada) | First-loss — absorve todos os defaults primeiro | Primeiro | Maior |
| **MTVM** (Mezzanine) | Absorve somente se MTVH zerar | Segundo | Médio |
| **MTVL** (Sênior) | Absorve por último | Terceiro | Menor, mais estável |

A MUTAV Soluções (Garantidora) é cotista obrigatória de MTVH, alinhando os incentivos do grupo com a qualidade da carteira — a Garantidora perde primeiro em qualquer default.

**Alocação pelo investidor:**
O investidor acessa o dashboard, visualiza as classes disponíveis e aloca conforme sua preferência de risco. A relação é direta: MTVH oferece maior retorno potencial com maior exposição; MTVL oferece retorno estável com proteção estrutural.

Esse mecanismo resolve uma limitação crítica dos modelos de garantia tradicional: a ausência de granularidade no risco. Em vez de expor todos os investidores ao mesmo pool indistinto, a MUTAV cria camadas de risco verificáveis e selecionáveis, estruturadas em contrato e executadas onchain.

---

### Gestão de Risco

A gestão de risco da MUTAV opera em dois planos complementares: no nível do contrato, via scoring individual que determina o fee e a exposição ao risco; e no nível do fundo, via estrutura de três classes de cotas com waterfall (MTVH → MTVM → MTVL), cap semanal de resgate e mecanismo de liquidação programável. A combinação desses elementos permite que o protocolo absorva choques de inadimplência sem comprometer a integridade do fundo ou a posição dos demais investidores.

---

### Benefícios aos envolvidos

O modelo é estruturado para alinhar interesses entre todos os agentes do ecossistema de aluguel, distribuindo benefícios de forma clara:

- **Investidor cripto-nativo** acessa o mercado de garantias locatícias por meio da valorização do NAV, com exposição a um ativo imobiliário e possibilidade de integração com o ecossistema DeFi.
- **Investidor institucional** passa a ter acesso a um RWA estruturado, com transparência e capacidade de auditoria on-chain.
- **Imobiliárias** ganham eficiência operacional e novas fontes de receita ao integrar o modelo de garantia tokenizada.
- **Proprietários** se beneficiam de maior segurança e processos mais rápidos de liquidação em casos de inadimplência.
- **Inquilinos** têm acesso facilitado ao aluguel, sem necessidade de garantias tradicionais mais restritivas.

O sistema cria um ciclo onde capital, eficiência e acesso são distribuídos de forma mais equilibrada entre todos os participantes.

---

## 4. Modelo de Negócio

A MUTAV opera como uma **infraestrutura híbrida B2B + B2C** para o mercado de garantias locatícias. No lado B2B, o protocolo se integra a imobiliárias e operadores do setor, que são responsáveis pela originação dos contratos, onboarding de inquilinos e registro das garantias. No lado B2C, investidores acessam diretamente o sistema ao aportar capital em stablecoins e receber tokens MUTAV, passando a financiar as garantias.

O objetivo central é transformar um mercado fechado em um sistema **aberto e mais eficiente**, onde o risco é distribuído e o capital é alocado de forma programável. A implementação ocorre com imobiliárias utilizando a infraestrutura para registrar contratos e acionar garantias, enquanto o fundo on-chain fornece liquidez e cobertura para essas operações.

O fluxo econômico é sustentado por receitas reais do sistema: as **taxas pagas pelos inquilinos** nos contratos de garantia e o **rendimento do colateral em stablecoins**. Esses retornos são incorporados ao fundo, gerando valorização da MUTAV.

A captura de valor pelo protocolo ocorre através de quatro mecanismos:

- **Split de fees:** 20% das taxas coletadas dos inquilinos ficam com a MUTAV Soluções (Garantidora); 80% são repassados ao Mutav Treasury Fund
- **Taxa de gestão de 1% a.a.** sobre o AUM do Mutav Treasury Fund, cobrada pela Mutav Treasury Management
- **Taxa de resgate de 0,25%** cobrada sobre o valor retirado no momento do resgate
- **Retorno refletido no NAV** — apreciação contínua via fees e yield do Tesouro tokenizado

Esse modelo garante sustentabilidade financeira ao mesmo tempo em que preserva competitividade e eficiência para os participantes do sistema. A integração com o ecossistema DeFi amplia a utilidade da MUTAV como colateral, aumentando a demanda e criando um ciclo de crescimento baseado em uso, liquidez e valorização do ativo.

---

## 5. Go to Market

### Fase 1 — Piloto

**Imobiliárias — entrada via rede existente**

- Alvo: **20–30 imobiliárias** — litoral norte do RS e SC
- Acesso via rede com **30+ anos de experiência** no mercado de locações do Sul do Brasil
- Pitch: automação operacional + **fee de 2%** nos contratos e melhores condições para inquilinos e proprietários
- Proprietários e inquilinos captados via imobiliárias parceiras

**Investidores — cripto-nativos, em paralelo ao piloto**

- Ticket: **$1K–$10K** retail cripto-nativo
- Capital semente: prêmios de hackathon + investimento CMJ + rede dos fundadores
- Canal principal: **X (Twitter)** — alcance orgânico + rede estratégica
- Narrativa: o único protocolo onchain com exposição direta ao mercado de garantias locatícias brasileiro

### Fase 2 — Expansão

**Critérios de transição:** contratos ativos + threshold de AUM + operação sustentada

**Imobiliárias**
- Cold outreach para novos mercados além da região piloto
- Track record do piloto como prova de adoção para novas imobiliárias
- Menos burocracia, mais previsibilidade, fonte adicional de receita

**Investidores**
- MUTAV como colateral em protocolos DeFi (integração)
- Abertura para investidores institucionais com KYC
- Narrativa de escala: o Brasil possui mais de **74.000 imobiliárias ativas** e **650.000 corretores de imóveis registrados**, formando uma das maiores redes de distribuição imobiliária do mundo — com potencial massivo e ainda inexplorado para crescimento escalável e penetração de mercado.

---

## 6. Equipe

O projeto é liderado por Matheus "Draau" de Pauli, Project Manager e Web3 builder com mais de 5 anos de experiência na construção e gestão de produtos que conectam tecnologia, marca e mercado. Atua na coordenação de equipes multidisciplinares e no desenvolvimento de soluções em blockchain, com base criativa aplicada à estratégia e execução. Além disso, é cofundador da comunidade No Bloco, iniciativa voltada à inserção de profissionais criativos no ecossistema Web3.

A equipe conta também com Julia Hoffmann Buratto, design engineer, arquiteta e urbanista (UFSC), com MBA em Cidades Responsivas e fundadora da jubs.studio. Em 2023, lançou a Chainless, levando o produto de zero a 5.000 usuários; atualmente, o protocolo ultrapassa 30.000 usuários e segue operando conforme projetado. Atua na interseção entre arquitetura de sistemas, UX e infraestrutura onchain, com experiência em produtos fintech e Web3 voltados à tokenização, crédito e automação de fluxos financeiros.

**Advisors**

Lucas Oliveira atua como Advisor Técnico. Engenheiro blockchain sênior com mais de 5 anos em desenvolvimento de produtos blockchain — design, arquitetura, auditoria de segurança e deploy em mainnet. Ex-Blockchain Engineer na Clearsale, Head de Educação na Nearx, formação em Matemática e certificação Berkeley Blockchain. Embaixador ativo do ecossistema Stellar.

Cinara Bigóis atua como Advisor de Mercado Imobiliário. Com 30 anos de experiência no mercado de locações no Sul do Brasil, corretora ativa com relacionamentos consolidados junto a imobiliárias e operadores regionais — viabilizando validação direta com o mercado e acesso aos primeiros parceiros do piloto.

---

## 7. Conclusão

A MUTAV propõe uma nova infraestrutura para o mercado de garantias locatícias, tornando-o mais aberto, eficiente e transparente por meio da tokenização e da utilização de blockchain. Ao conectar capital de investidores com demandas reais do setor imobiliário, o modelo cria um sistema sustentável, baseado em rendimento real e gestão de risco estruturada.

Com uma arquitetura que combina integração com players do mercado, liquidez programável, Risk Engine para segmentação por perfil de risco e expansão via DeFi, a MUTAV estabelece as bases para um novo padrão de garantias — mais acessível, escalável e alinhado aos avanços da economia digital.
