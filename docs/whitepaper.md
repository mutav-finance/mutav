# Whitepaper — TGA Protocol

# Tokenização de Garantia de Aluguel (TGA)

## 1. Visão Geral

O mercado locação de imóveis no Brasil movimenta bilhões anualmente, sustentado por um ecossistema imobiliário amplo, com milhões de contratos ativos e crescente demanda por soluções que substituam o fiador tradicional. Apesar da relevância, esse mercado ainda opera com baixa eficiência, processos manuais e concentração de capital em poucos players, limitando acesso, transparência e inovação.

A Tokenização de Garantia de Aluguel (TGA) surge como resposta a esse cenário, aplicando infraestrutura blockchain para transformar a forma como garantias são estruturadas, financiadas e executadas. Ao conectar capital global a um mercado local pouco explorado do ponto de vista financeiro, o modelo reduz fricções operacionais, melhora a gestão de risco e cria uma nova classe de ativo baseada em fluxo real da economia.

A TGA funciona como uma **infraestrutura descentralizada de garantia locatícia**, abrindo acesso a um mercado bilionário hoje concentrado em poucos participantes e criando as bases para uma camada financeira mais eficiente, transparente e escalável.

Alguns dados ilustram a dimensão e potencial desse mercado:

- Ecosistema imobiliário (COFECI): O segmento de imobiliárias no Brasil movimenta anualmente **R$ 110 bilhões** [[FONTE]](https://imobireport.com.br/aluguel/credaluga-e-kanastra-lancam-primeiro-fundo-que-substitui-titulo-de-capitalizacao-como-garantia-de-aluguel/)

- Jan–Nov 2024 (CQCS): O segmento de seguro fiança locatícia arrecadou **R$ 1,29 bilhão em prêmios** emitidos entre janeiro e novembro de 2024. [[FONTE]](https://www.ideeseguros.com.br/seguro-fianca-cresce-em-2024)

- Número de brasileiros vivendo de aluguel chegou a **46,5 milhões em 2024**, novo recorde histórico. [[FONTE]](https://agenciabrasil.ebc.com.br/geral/noticia/2025-08/parcela-de-familias-quem-pagam-aluguel-sobe-25-em-8-anos-mostra-ibge)

- O mercado de garantias locatícias digitais movimenta cerca de **R$ 300 milhões por ano (2025)**, refletindo um setor ainda em estágio inicial, mas em expansão frente à crescente inadimplência e consolidação do segmento. [[FONTE]](https://portas.com.br/noticias/inadimplencia-crescente-acelera-consolidacao-no-mercado-de-garantias-locaticias/)

- Loft / CredPago — os dados da aquisição bilionária: Na data da aquisição pela Loft (julho 2021), a CredPago tinha mais de 123 mil contratos, resultando em cerca de **R$ 40 bilhões em ativos sob gestão**, 16 mil imobiliárias parceiras e 145 mil clientes finais. A empresa havia crescido 10 vezes nos últimos 3 anos. A meta era fechar 2021 com mais de 200 mil contratos. A transação representou um **ganho de R$ 1,4 bilhão para o BTG Pactual** — que havia comprado 20% da CredPago em 2020 e depois ampliado para 49%. O BTG entrou por um valor muito menor e saiu bilionário em menos de **2 anos de investimento**. [[FONTE]](https://braziljournal.com/loft-compra-credpago-em-dinheiro-e-acoes/)

- Loft registra 1,2 milhão de transações em 2025 e amplia atuação em fintech. Empresa cresceu 35% no ano e **prevê investir R$ 100 milhões em tecnologia em 2026,** com foco em crédito imobiliário, **garantia locatícia** e SaaS. [[FONTE]](https://portas.com.br/mercado-imobiliario/loft-registra-12-milhao-de-transacoes-em-2025/#:~:text=Empresa%20cresceu%2035%25%20no%20ano%20e%20prev%C3%AA,R$%20100%20milh%C3%B5es%20em%20tecnologia%20em%202026.)

---

## 2. Problema

O capital que sustenta as garantias locatícias atualmente é altamente **concentrado**. Garantidoras operam com capital próprio e incentivos institucionais, precificam risco de forma assimétrica e capturam integralmente o retorno, sem transparência, sem participação externa e com baixa competição estrutural.

Isso gera quatro distorções principais:

- **Para o mercado:** concentração de risco em poucos players. Quando um deles falha, como observado nos eventos envolvendo QuintoCred e CredPago em 2025, não há mecanismo eficiente de absorção coletiva.
- **Para inquilinos:** estrutura oligopolista com custos elevados (10–15%)
- **Para proprietários:** liquidação lenta de inadimplência (até 60 dias).
- **Para investidores:** um mercado de mais de R$ 1 bilhão em prêmios anuais permanece inacessível a pessoas físicas e ao ecossistema cripto.

A Tokenização de Garantia de Aluguel resolve esses pontos simultaneamente.

---

## 3. Solução Proposta

A Tokenização de Garantia de Aluguel (TGA) propõe a abertura e descentralização do mercado de garantias locatícias, permitindo que qualquer pessoa participe de um setor historicamente restrito a poucos players. Por meio da tokenização, o capital que sustenta essas garantias deixa de ser concentrado e passa a ser distribuído entre investidores, criando um modelo mais transparente, acessível e eficiente, onde o público pode obter exposição direta a um mercado bilionário antes inacessível.

A Tokenização de Garantia de Aluguel (TGA) é implementada como um ativo digital emitido que representa participação colateralizada no **TGA SA (Segregated Account)**, uma estrutura de custódia onde os recursos dos investidores permanecem segregados do protocolo e destinados exclusivamente à cobertura de garantias locatícias. Ao participar, o investidor deposita stablecoin e recebe TGA proporcional ao NAV (Net Asset Value) do fundo, mantendo exposição direta ao desempenho do mercado sem necessidade de intermediação ou gestão ativa.

O modelo é baseado em um **NAV apreciável**, no qual o retorno não é distribuído, mas incorporado ao próprio fundo. As receitas geradas pelas taxas de garantia e pelo rendimento do capital aumentam o valor total sob gestão, refletindo diretamente na valorização de cada token ao longo do tempo. Dessa forma, o investidor captura o crescimento do mercado por meio da apreciação do ativo, em um modelo simples, eficiente e alinhado à lógica de fundos tradicionais, porém com transparência e execução on-chain.

### Mecanismo Central

O funcionamento da Tokenização de Garantia de Aluguel (TGA) segue um modelo estruturado baseado em mecanismos já consolidados em protocolos on-chain, como no mercado de reinsurance, validando sua robustez.

Essa estrutura é sustentada por uma infraestrutura própria que garante transparência, execução automatizada e confiabilidade operacional. O **SGR (Sistema de Garantia Registrada)** permite que todos os contratos de garantia sejam registrados on-chain por meio da dashboard da imobiliaria, tornando o lastro do fundo verificável em tempo real. Complementarmente, a **Camada de Liquidação Programável** automatiza a execução de inadimplências e a atualização do NAV, eliminando processos manuais e reduzindo o tempo de liquidação.

A partir dessa base, o fluxo operacional se divide em três etapas principais: entrada de capital, geração de rendimento e saída.

**Entrada (Mint):**

O investidor deposita stablecoin no protocolo, que calcula automaticamente o NAV atual do TGA SA e emite a quantidade proporcional de TGA. O capital é então direcionado para a conta segregada, passando a compor o fundo que sustenta as garantias locatícias.

**Geração de rendimento (Yield):**

O rendimento total do fundo é sustentado por **taxas pagas pelos inquilinos**, associadas aos contratos de garantia ativos, e **yield do colateral em stablecoins**, enquanto o capital permanece ocioso. Esse fluxo combinado é continuamente reintegrado ao fundo, elevando o valor total sob gestão e refletindo diretamente na apreciação do NAV ao longo do tempo.

O capital do TGA SA é estruturado em duas camadas:

- **Camada ativa:** alocada na cobertura de contratos de garantia registrados. Este capital está comprometido com os contratos vigentes e não está disponível para resgates imediatos, é mantido em stablecoins gerando yield enquanto cobre as garantias ativas.
- **Camada de liquidez:** mantida em stablecoins (USDC e USDT), gerando rendimento passivo e funcionando como buffer primário para atender resgates dentro do cap semanal.

O protocolo aceita depósitos em **USDC e USDT**.

**Saída (Redeem):**

Para realizar o resgate, o investidor deposita seus TGA no contrato e entra em uma fila on-chain. A execução ocorre com base no NAV vigente no momento do processamento, e o investidor recebe o valor correspondente em stablecoin. O valor é debitado do fundo, reduzindo proporcionalmente o NAV, com o custo distribuído entre todos os participantes.

O modelo não prevê liquidez imediata por design, uma vez que parte do capital está comprometida em contratos de longo prazo (12–24 meses). A reserva de liquidez existente permite absorver saídas de forma gradual, sem comprometer a integridade do fundo.

O fundo mantém uma reserva de liquidez dedicada para atender solicitações de resgate, permitindo que saídas ocorram de forma controlada e sem comprometer a operação. A execução dos resgates segue um limite operacional ao longo do tempo, garantindo previsibilidade e preservando a estabilidade do fundo.

Pedidos que excedam a liquidez disponível permanecem em uma fila on-chain, com total transparência de posição e continuidade de rendimento até sua execução.

Além disso, é aplicada uma taxa de resgate sobre o valor retirado.

---

### Infraestrutura Técnica

#### Cálculo e Atualização do NAV

O Net Asset Value do TGA SA é calculado puramente onchain, executado diretamente no smart contract sem dependência de serviços externos ou feeds de dados offchain. Qualquer participante pode verificar e reproduzir o cálculo de forma independente. O NAV é atualizado diariamente, refletindo as variações do fundo: entrada de taxas de garantia, pagamentos processados, resgates executados e rendimento gerado pelo colateral.

O valor de cada token TGA é determinado pela razão entre o total de ativos sob gestão e a quantidade de tokens em circulação:

```
NAV = total_assets / tokens_emitidos
```

**Depósito de novo investidor:** quando um investidor deposita stablecoins, o protocolo calcula o NAV vigente e emite a quantidade proporcional de tokens TGA. O aporte aumenta simultaneamente o total de ativos e o número de tokens na mesma proporção — o NAV permanece inalterado. Um novo investidor não financia a saída de outros nem dilui quem já está no fundo: ele entra ao preço justo e passa a ter participação proporcional ao valor depositado.

**Entrada de fees e yield:** as taxas pagas pelos inquilinos e o rendimento do colateral em stablecoins entram no fundo sem a criação de novos tokens. O total de ativos cresce enquanto o número de tokens permanece o mesmo — o NAV sobe. O retorno é distribuído automaticamente entre todos os holders proporcionalmente à sua posição, sem nenhuma ação necessária da parte deles.

**Inadimplência:** quando o protocolo executa uma garantia, ativos saem do fundo sem que nenhum token seja criado ou destruído. O total de ativos cai, o número de tokens permanece o mesmo — o NAV recua proporcionalmente. O impacto é distribuído entre todos os investidores, refletindo o risco coletivo do fundo.

**Resgate de investidor:** para sair, o investidor deposita seus tokens TGA no contrato. O protocolo queima exatamente a quantidade de tokens correspondente ao valor resgatado ao NAV vigente e devolve o equivalente em stablecoins. Ativos e tokens saem na mesma proporção — o NAV dos demais holders não é afetado. É aplicada uma taxa de resgate de 0,25% sobre o valor retirado.

**Risco para o investidor:** o modelo não expõe investidores a risco entre si — não existe vantagem estrutural de entrada ou saída que extraia valor de outros participantes. O risco é coletivo e sistêmico: se a taxa de inadimplência subir de forma crônica e acima da receita de fees por tempo suficiente, o NAV pode recuar abaixo do preço de entrada de um investidor, resultando em perda de capital. O cap semanal de 2,5% do NAV e a camada de liquidez dedicada existem para dar tempo ao fundo de absorver choques sem comprometer a operação. Fora esse cenário extremo, o único risco operacional para o investidor é aguardar a fila de resgate — período durante o qual ele continua acumulando rendimento sobre sua posição.

#### Mecanismo de Resgate

O resgate de tokens TGA segue um modelo estruturado para preservar a integridade do fundo:

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
4. Pedidos pré-aprovados passam por auditoria interna da equipe TGA para validação final.
5. Após aprovação, a liquidação é executada onchain e o repasse é direcionado à imobiliária para transferência ao proprietário.

A meta de SLA é de **10 dias** entre a notificação e a execução final — reduzindo o processo atual de até 60 dias do mercado tradicional.

#### Custódia

O capital dos investidores é custodiado de forma **non-custodial** — os fundos ficam nos smart contracts onchain, sem intermediário com acesso aos ativos. Operações administrativas críticas são protegidas por **multisig**, com signatários a serem definidos antes do lançamento.

#### Mercado Secundário

O mercado secundário para o token TGA — pool de liquidez em DEX para saída fora da fila de resgate — é uma feature planejada para fase posterior ao lançamento inicial. No MVP, a única via de saída é o resgate via fila onchain.

---

### Gestão de Risco

A gestão de risco é um elemento central da Tokenização de Garantia de Aluguel, garantindo a sustentabilidade do fundo e a proteção dos investidores. O processo é baseado na avaliação estruturada de dados dos inquilinos e na aplicação de critérios de aprovação antes da inclusão de novos contratos no sistema.

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

O TGA opera como uma **infraestrutura híbrida B2B + B2C** para o mercado de garantias locatícias. No lado B2B, o protocolo se integra a imobiliárias e operadores do setor, que são responsáveis pela originação dos contratos, onboarding de inquilinos e registro das garantias via SGR. No lado B2C, investidores acessam diretamente o sistema ao aportar capital em stablecoins e receber TGA, passando a financiar as garantias.

O objetivo central é transformar um mercado fechado em um sistema **aberto, descentralizado e mais eficiente**, onde o risco é distribuído e o capital é alocado de forma programável. A implementação ocorre com imobiliárias utilizando a infraestrutura para registrar contratos e acionar garantias, enquanto o fundo on-chain fornece liquidez e cobertura para essas operações.

O fluxo econômico é sustentado por receitas reais do sistema: as **taxas pagas pelos inquilinos** nos contratos de garantia e o **rendimento do colateral em stablecoins**. Esses retornos são incorporados ao fundo, gerando valorização do TGA.

A captura de valor pelo protocolo, responsável por manter a operação e financiar sua expansão, ocorre através de três mecanismos principais:

- **Spread entre a taxa cobrada dos inquilinos**
- **Taxa de gestão sobre o fundo**
- **Taxa de resgate**
- **Retorno refletido no NAV**

Esse modelo garante sustentabilidade financeira ao mesmo tempo em que preserva competitividade e eficiência para os participantes do sistema. Por fim, a integração com o ecossistema DeFi amplia a utilidade do TGA como colateral, aumentando a demanda e criando um ciclo de crescimento baseado em uso, liquidez e valorização do ativo.

---

## 5. Roadmap / First Steps

- Ideathon (conceito e estruturação)
- Colosseum Hackathon (construção do MVP)
- Validação com parceiros pilotos
- Go-to-Market / lançamento
- Expansão e escala

---

## 6. Equipe

O projeto encontra-se em fase inicial, sendo idealizado por Matheus "Draau" de Pauli, Project Manager e Web3 builder com mais de 5 anos de experiência na construção e gestão de produtos que conectam tecnologia, marca e mercado. Atua na coordenação de equipes multidisciplinares e no desenvolvimento de soluções em blockchain, com base criativa aplicada à estratégia e execução. Além disso, é cofundador da comunidade No Bloco, iniciativa voltada à inserção de profissionais criativos no ecossistema Web3.

A equipe conta também com Julia Hoffmann Buratto, design engineer, arquiteta e urbanista (UFSC), com MBA em Cidades Responsivas e fundadora da jubs.studio. Em 2023, lançou a Chainless, levando o produto de zero a 5.000 usuários; atualmente, o protocolo ultrapassa 30.000 usuários e segue operando conforme projetado. Atua na interseção entre arquitetura de sistemas, UX e infraestrutura onchain, com experiência em produtos fintech e Web3 voltados à tokenização, crédito e automação de fluxos financeiros.

O projeto possui ainda proximidade estratégica com o mercado imobiliário, por meio de conexões com profissionais com mais de 30 anos de experiência no setor de locações imobiliárias, facilitando validação e acesso a players relevantes. A equipe será expandida conforme a evolução da iniciativa, com a incorporação de especialistas em DeFi, jurídico imobiliário, desenvolvimento e design, garantindo uma estrutura sólida para crescimento escalável.

---

## 7. Conclusão

O TGA propõe uma nova infraestrutura para o mercado de garantias locatícias, tornando-o mais aberto, eficiente e transparente por meio da tokenização e da utilização de blockchain. Ao conectar capital de investidores com demandas reais do setor imobiliário, o modelo cria um sistema sustentável, baseado em rendimento real e gestão de risco estruturada.

Com uma arquitetura que combina integração com players do mercado, liquidez programável e expansão via DeFi, o TGA estabelece as bases para um novo padrão de garantias, mais acessível, escalável e alinhado aos avanços da economia digital.
