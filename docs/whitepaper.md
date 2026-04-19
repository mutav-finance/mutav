# Whitepaper — IDEATHON - GARANTIAS LOCATÍCIAS

# IDEIA#1 Infraestrutura Onchain para Garantias Locatícias

## 1. Visão Geral

O mercado de garantias locatícias ainda opera com processos manuais, baixa padronização e execução ineficiente, gerando custos elevados, atrasos e fricções entre os participantes.

Este projeto propõe a construção de uma infraestrutura baseada na blockchain Solana, posicionada como uma camada operacional que se integra ao modelo atual do mercado, conectando imobiliárias, garantidoras e proprietários.

A solução permite que contratos de garantia sejam registrados de forma verificável e que sua execução ocorra de maneira programável, substituindo processos manuais por liquidação automatizada, maior previsibilidade e eficiência operacional.

A proposta parte da otimização da execução de garantias, principal ponto de ineficiência do setor, e evolui para uma infraestrutura escalável, capaz de reduzir fricções, melhorar a gestão de risco e sustentar novos modelos no mercado de locação.

O mercado de locação é altamente relevante e ainda pouco explorado do ponto de vista de inovação financeira. Alguns dados ilustram sua dimensão e potencial:

<aside>

- Ecosistema imobiliário (COFECI): O segmento de imobiliárias no Brasil movimenta anualmente **R$ 110 bilhões** [[FONTE]](https://imobireport.com.br/aluguel/credaluga-e-kanastra-lancam-primeiro-fundo-que-substitui-titulo-de-capitalizacao-como-garantia-de-aluguel/)
</aside>

<aside>

- Jan–Nov 2024 (CQCS): O segmento de seguro fiança locatícia arrecadou **R$ 1,29 bilhão em prêmios** emitidos entre janeiro e novembro de 2024. [[FONTE]](https://www.ideeseguros.com.br/seguro-fianca-cresce-em-2024)
</aside>

<aside>

- Número de brasileiros vivendo de aluguel chegou a **46,5 milhões em 2024**, novo recorde histórico. [[FONTE]](https://agenciabrasil.ebc.com.br/geral/noticia/2025-08/parcela-de-familias-quem-pagam-aluguel-sobe-25-em-8-anos-mostra-ibge)
</aside>

<aside>

- O mercado de garantias locatícias digitais movimenta cerca de **R$ 300 milhões por ano (2025)**, refletindo um setor ainda em estágio inicial, mas em expansão frente à crescente inadimplência e consolidação do segmento. [[FONTE]](https://portas.com.br/noticias/inadimplencia-crescente-acelera-consolidacao-no-mercado-de-garantias-locaticias/)
</aside>

<aside>

- Loft / CredPago — os dados da aquisição bilionária: Na data da aquisição pela Loft (julho 2021), a CredPago tinha mais de 123 mil contratos, resultando em cerca de    **R$ 40 bilhões em ativos sob gestão**, 16 mil imobiliárias parceiras e 145 mil clientes finais. A empresa havia crescido 10 vezes nos últimos 3 anos. A meta era fechar 2021 com mais de 200 mil contratos.

A transação representou um **ganho de R$ 1,4 bilhão para o BTG Pactual** — que havia comprado 20% da CredPago em 2020 e depois ampliado para 49%. O BTG entrou por um valor muito menor e saiu bilionário em menos de **2 anos de investimento**. [[FONTE]](https://braziljournal.com/loft-compra-credpago-em-dinheiro-e-acoes/)
</aside>

<aside>

- Loft registra 1,2 milhão de transações em 2025 e amplia atuação em fintech. Empresa cresceu 35% no ano e **prevê investir R$ 100 milhões em tecnologia em 2026,** com foco em crédito imobiliário, **garantia locatícia** e Sas. [[FONTE]](https://portas.com.br/mercado-imobiliario/loft-registra-12-milhao-de-transacoes-em-2025/#:~:text=Empresa%20cresceu%2035%25%20no%20ano%20e%20prev%C3%AA,R$%20100%20milh%C3%B5es%20em%20tecnologia%20em%202026.)
</aside>

---

## 2. Problema

O mercado de locação imobiliária apresenta **ineficiências estruturais relevantes**, que impactam todos os participantes do ecossistema:

- **Inquilinos** enfrentam altos custos iniciais e processos burocráticos, como depósitos caução elevados, dificuldade em obter fiadores e taxas recorrentes pouco transparentes.
- **Proprietários** lidam com riscos constantes de inadimplência e atrasos nos pagamentos, além de baixa previsibilidade de receita.
- **Empresas de garantia** operam com modelos pouco eficientes, baixa transparência e limitada capacidade de escala.

Essas limitações geram fricção ao longo de todo o ciclo da locação, reduzindo a eficiência do mercado como um todo. Atualmente, os contratos são tratados de forma isolada, sem uma **infraestrutura compartilhada de confiança**, o que amplia a assimetria de informação e dificulta a padronização dos processos.

Em 2025, o mercado de garantias locatícias no Brasil evidenciou fragilidades estruturais relevantes. Em junho, o QuintoAndar encerrou as operações da QuintoCred, impactando cerca de **45 mil contratos ativos e 3 mil imobiliárias parceiras**, como parte de uma mudança estratégica [[FONTE]](https://imobireport.com.br/aluguel/exclusivo-quintoandar-encerra-operacao-do-quintocred-garantia/). Pouco depois, a CredPago (grupo Loft) também enfrentou dificuldades operacionais, com **atrasos no pagamento de garantias** em um cenário de aumento da inadimplência, agravado por falhas em infraestrutura de pagamentos após incidentes com a Transfeera [[FONTE]](https://cqcs.com.br/noticia/mercado-imobiliario-enfrenta-desafio-na-oferta-de-garantias-de-fiancas/).

Esses eventos reforçam um diagnóstico claro do setor: o modelo atual de garantias locatícias apresenta **baixa previsibilidade operacional, dependência de intermediários e fragilidade na execução das garantias**. Como destacado por especialistas, o mercado enfrenta simultaneamente **interrupções de operação e falhas no pagamento de sinistros**, evidenciando a necessidade de **infraestruturas mais eficientes, resilientes e transparentes**, capazes de sustentar a próxima fase de crescimento do setor.

Casos reais de insatisfação do usuário, como os reportados em plataformas públicas de reclamação envolvendo players relevantes do mercado (ex: Lofty/CredPago), evidenciam na prática essas falhas estruturais.

![image.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/image.png)

![Captura de tela 2026-04-01 103556.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/Captura_de_tela_2026-04-01_103556.png)

![Captura de tela 2026-04-01 103707.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/Captura_de_tela_2026-04-01_103707.png)

![Captura de tela 2026-04-01 103838.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/Captura_de_tela_2026-04-01_103838.png)

---

## 3. Solução Proposta

Hoje, a execução de garantias depende de processos manuais, validações intermediadas e prazos incertos, o que gera custos elevados, atrasos e riscos para todos os participantes.

A proposta consiste em uma infraestrutura baseada na blockchain Solana, posicionada como uma camada operacional para o mercado de garantias locatícias, conectando imobiliárias, garantidoras e proprietários.

A solução se integra ao fluxo atual do setor, permitindo que contratos de garantia sejam registrados, monitorados e liquidados de forma programável, sem alterar a dinâmica comercial existente, mas aumentando significativamente sua eficiência.

A geração de valor ocorre de forma objetiva em três dimensões principais:

1. **Diminuição de custos operacionais**, com a eliminação de processos manuais e intermediários ineficientes
2. **Redução de disputas e aumento da satisfação dos proprietários**, por meio de execução mais rápida e confiável
3. **Aumento da previsibilidade e eficiência**, ao longo de todo o ciclo da garantia

Ao transformar a execução da garantia em um processo automatizado e verificável, a infraestrutura reduz risco sistêmico, elimina atrasos que geram disputas e converte um modelo burocrático em uma operação escalável, confiável e orientada a dados.

Para tornar isso possível, a infraestrutura se organiza em dois **componentes principais**:

### 3.1 SGR (Sistema de Garantia Registrada)

O SGR é responsável por estruturar o registro dos contratos dentro da infraestrutura.

O protocolo atua como uma camada técnica que recebe os contratos gerados pelas imobiliárias e os registra on-chain na blockchain Solana por meio de **hashes criptográficos**, garantindo imutabilidade e verificabilidade sem exposição de dados sensíveis.

Nesse modelo, cada contrato de garantia é representado por uma **account na rede**, onde são armazenadas as informações essenciais do contrato (ou suas referências), enquanto os dados completos permanecem off-chain por questões de privacidade e conformidade regulatória.

Os **programs** do protocolo padronizam a criação e gestão dessas accounts, garantindo consistência e auditabilidade ao longo de todo o ciclo de vida da garantia.

Nesse fluxo:

- a **imobiliária** permanece como intermediária na relação com o cliente
- a **garantidora** utiliza a infraestrutura para operar
- o **protocolo** padroniza, registra e organiza os contratos on-chain

Esse modelo cria uma base confiável e auditável, reduzindo fraudes, assimetria de informação e aumentando a eficiência operacional. 

### 3.2 **Camada de Liquidação Programável**

Essa camada é o núcleo da proposta e o principal diferencial da infraestrutura.

A partir dos contratos registrados, a execução ocorre por meio de **programs na blockchain Solana**, que operam sobre as **accounts que representam os contratos**, automatizando regras e liquidação em casos de inadimplência.

Quando ocorre atraso ou não pagamento, uma transação é acionada (via integrações off-chain), chamando o program responsável, que valida as condições definidas e executa a liquidação automaticamente.. O pagamento é então direcionado para a imobiliária, que realiza o repasse ao proprietário.

A arquitetura da Solana, baseada na separação entre **lógica (programs)** e **estado (accounts)**, permite o processamento paralelo de múltiplos contratos, garantindo escalabilidade e eficiência.

Esse modelo:

- Elimina atrasos e atritos operacionais
- Reduz disputas e custos judiciais
- Substitui processos manuais por execução programável, reduzindo custo operacional
- Reduz tempo de liquidação de semanas/meses para quase imediato
- Diminui fricção entre os participantes
- Aumenta a confiança no sistema

O protocolo resolve diretamente a principal dor do mercado: a ineficiência na liquidação de garantias e o impacto da inadimplência.

---

## 4. Modelo de Negócio

O protocolo atua como uma camada de infraestrutura entre imobiliárias e empresas garantidoras, aumentando a eficiência do mercado sem competir diretamente com esses players. A proposta segue um modelo B2B, no qual a infraestrutura é utilizada por parceiros para estruturar, avaliar e executar garantias locatícias de forma mais eficiente.

O protocolo reduz custos e fricções no processo de garantias locatícias, automatizando registros, padronizando processos, aumentando a previsibilidade e diminuindo supervisão jurídica e burocracia, diminuindo o custo para a garantidora, o que permite operar com taxas mais acessíveis em relação às atuais **10–15% cobradas pelo mercado** em 2024. Essa eficiência possibilita nosso protocolo de capturar um **spread de ~2% por contrato**, transformando ganhos operacionais em receita direta.

Para ilustrar o potencial, o mercado de garantias locatícias no Brasil apresenta diferentes camadas de escala. Em 2024, o segmento de **seguro-fiança locatícia arrecadou cerca de R$ 1,29 bilhão em prêmios**, representando uma das principais modalidades consolidadas do setor. Considerando o mercado de **garantias locatícias digitais**, que movimenta cerca de **R$ 300 milhões por ano (2025)**, e assumindo uma penetração inicial de **30% desse volume**, a aplicação de um spread de **2%** resultaria em aproximadamente **R$ 1,8 milhão de receita anual**. **Essa é uma projeção conservadora**, que demonstra como a eficiência operacional da infraestrutura permite capturar valor de forma **escalável e consistente**, beneficiando proprietários, inquilinos, imobiliárias e garantidoras.

Atualmente, o recebimento das garantias costuma levar **até 60 dias**, sem considerar possíveis disputas judiciais, que podem estender ainda mais o prazo, devido a processos manuais e burocráticos. Com o protocolo, a liquidação automatizada reduz significativamente esse tempo, oferecendo maior previsibilidade e segurança para proprietários, ao mesmo tempo em que aumenta a eficiência para garantidoras e imobiliárias.

Esse modelo é estruturado de forma que os incentivos estejam alinhados entre todos os participantes do ecossistema. A adoção da infraestrutura não exige mudança de comportamento, mas oferece melhorias diretas no funcionamento do sistema atual:

- Garantidoras ganham eficiência, previsibilidade e capacidade de escalar a operação, redução de custo operacional e risco de disputas
- Imobiliárias reduzem esforço operacional e melhoram a experiência e retenção de proprietários, pela diminuição de fricção causada pela burocracia
- Proprietários passam a ter maior segurança e previsibilidade no recebimento
- Inquilinos se beneficiam de processos mais claros, padronizados e potencialmente mais acessíveis

Dessa forma, o protocolo captura valor como consequência direta da eficiência que gera. Ao reduzir fricções, custos e incertezas ao longo do ciclo da garantia, cria-se um sistema em que todos os participantes se beneficiam simultaneamente, viabilizando uma adoção progressiva e sustentável no mercado.

![image.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/image%201.png)

---

## 5. Roadmap / First Steps

![image.png](Whitepaper%20%E2%80%94%20IDEATHON%20-%20GARANTIAS%20LOCAT%C3%8DCIAS/image%202.png)

---

## 6. Equipe

O projeto encontra-se em fase inicial, sendo idealizado por Matheus “Draau” de Pauli, Project Manager e Web3 builder com mais de 5 anos de experiência na construção e gestão de produtos que conectam tecnologia, marca e mercado. Atua na coordenação de equipes multidisciplinares e no desenvolvimento de soluções em blockchain, com base criativa aplicada à estratégia e execução. Além disso, é cofundador da comunidade No Bloco, iniciativa voltada à inserção de profissionais criativos no ecossistema Web3.

A equipe conta também com Julia Hoffmann Buratto, design engineer, arquiteta e urbanista (UFSC), com MBA em Cidades Responsivas e fundadora da jubs.studio. Em 2023, lançou a Chainless, levando o produto de zero a 5.000 usuários; atualmente, o protocolo ultrapassa 30.000 usuários e segue operando conforme projetado. Atua na interseção entre arquitetura de sistemas, UX e infraestrutura onchain, com experiência em produtos fintech e Web3 voltados à tokenização, crédito e automação de fluxos financeiros.

O projeto possui ainda proximidade estratégica com o mercado imobiliário, por meio de conexões com profissionais com mais de 30 anos de experiência no setor de locações imobiliárias, facilitando validação e acesso a players relevantes. A equipe será expandida conforme a evolução da iniciativa, com a incorporação de especialistas em DeFi, jurídico imobiliário, desenvolvimento e design, garantindo uma estrutura sólida para crescimento escalável.

---

## 7. Conclusão

A proposta combina tecnologia blockchain, modelos financeiros e estrutura jurídica para criar um sistema mais eficiente e escalável para garantias locatícias.

---

---

# IDEIA#2 Tokenização de Garantia de Aluguel (TGA)

## 1. Visão Geral

O mercado locação de imóveis no Brasil movimenta bilhões anualmente, sustentado por um ecossistema imobiliário amplo, com milhões de contratos ativos e crescente demanda por soluções que substituam o fiador tradicional. Apesar da relevância, esse mercado ainda opera com baixa eficiência, processos manuais e concentração de capital em poucos players, limitando acesso, transparência e inovação.

A Tokenização de Garantia de Aluguel (TGA) surge como resposta a esse cenário, aplicando infraestrutura blockchain para transformar a forma como garantias são estruturadas, financiadas e executadas. Ao conectar capital global a um mercado local pouco explorado do ponto de vista financeiro, o modelo reduz fricções operacionais, melhora a gestão de risco e cria uma nova classe de ativo baseada em fluxo real da economia.

A TGA funciona como uma **infraestrutura descentralizada de garantia locatícia**, abrindo acesso a um mercado bilionário hoje concentrado em poucos participantes e criando as bases para uma camada financeira mais eficiente, transparente e escalável.

Alguns dados ilustram a dimensão e potencial desse mercado:

<aside>

- Ecosistema imobiliário (COFECI): O segmento de imobiliárias no Brasil movimenta anualmente **R$ 110 bilhões** [[FONTE]](https://imobireport.com.br/aluguel/credaluga-e-kanastra-lancam-primeiro-fundo-que-substitui-titulo-de-capitalizacao-como-garantia-de-aluguel/)
</aside>

<aside>

- Jan–Nov 2024 (CQCS): O segmento de seguro fiança locatícia arrecadou **R$ 1,29 bilhão em prêmios** emitidos entre janeiro e novembro de 2024. [[FONTE]](https://www.ideeseguros.com.br/seguro-fianca-cresce-em-2024)
</aside>

<aside>

- Número de brasileiros vivendo de aluguel chegou a **46,5 milhões em 2024**, novo recorde histórico. [[FONTE]](https://agenciabrasil.ebc.com.br/geral/noticia/2025-08/parcela-de-familias-quem-pagam-aluguel-sobe-25-em-8-anos-mostra-ibge)
</aside>

<aside>

- O mercado de garantias locatícias digitais movimenta cerca de **R$ 300 milhões por ano (2025)**, refletindo um setor ainda em estágio inicial, mas em expansão frente à crescente inadimplência e consolidação do segmento. [[FONTE]](https://portas.com.br/noticias/inadimplencia-crescente-acelera-consolidacao-no-mercado-de-garantias-locaticias/)
</aside>

<aside>

- Loft / CredPago — os dados da aquisição bilionária: Na data da aquisição pela Loft (julho 2021), a CredPago tinha mais de 123 mil contratos, resultando em cerca de    **R$ 40 bilhões em ativos sob gestão**, 16 mil imobiliárias parceiras e 145 mil clientes finais. A empresa havia crescido 10 vezes nos últimos 3 anos. A meta era fechar 2021 com mais de 200 mil contratos.

A transação representou um **ganho de R$ 1,4 bilhão para o BTG Pactual** — que havia comprado 20% da CredPago em 2020 e depois ampliado para 49%. O BTG entrou por um valor muito menor e saiu bilionário em menos de **2 anos de investimento**. [[FONTE]](https://braziljournal.com/loft-compra-credpago-em-dinheiro-e-acoes/)
</aside>

<aside>

- Loft registra 1,2 milhão de transações em 2025 e amplia atuação em fintech. Empresa cresceu 35% no ano e **prevê investir R$ 100 milhões em tecnologia em 2026,** com foco em crédito imobiliário, **garantia locatícia** e Sas. [[FONTE]](https://portas.com.br/mercado-imobiliario/loft-registra-12-milhao-de-transacoes-em-2025/#:~:text=Empresa%20cresceu%2035%25%20no%20ano%20e%20prev%C3%AA,R$%20100%20milh%C3%B5es%20em%20tecnologia%20em%202026.)
</aside>

---

## 2. Problema

O capital que sustenta as garantias locatícias atualmente é altamente **concentrado**. Garantidoras operam com capital próprio e incentivos institucionais, precificam risco de forma assimétrica e capturam integralmente o retorno, sem transparência, sem participação externa e com baixa competição estrutural.

Isso gera três distorções principais:

- **Para o mercado:** concentração de risco em poucos players. Quando um deles falha, como observado nos eventos envolvendo QuintoCred e CredPago em 2025, não há mecanismo eficiente de absorção coletiva.
- **Para inquilinos:** estrutura oligopolista com custos elevados (10–15%)
- **Para proprietários:** liquidação lenta de inadimplência (até 60 dias).
- **Para investidores:** um mercado de mais de R$ 1 bilhão em prêmios anuais permanece inacessível a pessoas físicas e ao ecossistema cripto.

A Tokenização de Garantia de Aluguel resolve esses três pontos simultaneamente.

---

## 3. Solução Proposta

A Tokenização de Garantia de Aluguel (TGA) propõe a abertura e descentralização do mercado de garantias locatícias, permitindo que qualquer pessoa participe de um setor historicamente restrito a poucos players. Por meio da tokenização, o capital que sustenta essas garantias deixa de ser concentrado e passa a ser distribuído entre investidores, criando um modelo mais transparente, acessível e eficiente, onde o público pode obter exposição direta a um mercado bilionário antes inacessível.

A Tokenização de Garantia de Aluguel (TGA) é implementada como um ativo digital emitido na Solana que representa participação colateralizada no **TGA SA (Segregated Account)**, uma estrutura de custódia onde os recursos dos investidores permanecem segregados do protocolo e destinados exclusivamente à cobertura de garantias locatícias. Ao participar, o investidor deposita stablecoin e recebe TGA proporcional ao NAV (Net Asset Value) do fundo, mantendo exposição direta ao desempenho do mercado sem necessidade de intermediação ou gestão ativa.

O modelo é baseado em um **NAV apreciável**, no qual o retorno não é distribuído, mas incorporado ao próprio fundo. As receitas geradas pelas taxas de garantia e pelo rendimento do capital aumentam o valor total sob gestão, refletindo diretamente na valorização de cada token ao longo do tempo. DessrEa forma, o investidor captura o crescimento do mercado por meio da apreciação do ativo, em um modelo simples, eficiente e alinhado à lógica de fundos tradicionais, porém com transparência e execução on-chain.

### Mecanismo Central

O funcionamento da Tokenização de Garantia de Aluguel (TGA) segue um modelo estruturado  baseado em mecanismos já consolidados em protocolos on-chain, como no mercado de reinsurance, validando sua robustez.

Essa estrutura é sustentada por uma infraestrutura própria que garante transparência, execução automatizada e confiabilidade operacional. O **SGR (Sistema de Garantia Registrada)** permite que todos os contratos de garantia sejam registrados on-chain, tornando o lastro do fundo verificável em tempo real. Complementarmente, a **Camada de Liquidação Programável** automatiza a execução de inadimplências e a atualização do NAV, eliminando processos manuais e reduzindo o tempo de liquidação. 

A partir dessa base, o fluxo operacional se divide em três etapas principais: entrada de capital, geração de rendimento e saída.

**Entrada (Mint):**

O investidor deposita stablecoin no protocolo, que calcula automaticamente o NAV atual do TGA SA e emite a quantidade proporcional de TGA. O capital é então direcionado para a conta segregada, passando a compor o fundo que sustenta as garantias locatícias.

**Geração de rendimento (Yield):**

O rendimento total do fundo, é sustentado por **Taxas pagas pelos inquilinos**, associadas aos contratos de garantia ativos e **Yield do colateral em stablecoins**, enquanto o capital permanece ocioso. Esse fluxo combinado é continuamente reintegrado ao fundo, elevando o valor total sob gestão e refletindo diretamente na apreciação do NAV ao longo do tempo. 

Assim o fundo **é dividido em duas camadas: 

- **Camada ativa (80%):** alocada na cobertura de contratos de garantia registrados via SGR. Cada contrato gera receita por meio de taxas pagas pelos inquilinos, que retornam ao fundo e elevam o NAV.
- **Camada de liquidez (20%):** mantida em stablecoins, gerando rendimento passivo e funcionando como buffer para resgates.

**Saída (Redeem):**

Para realizar o resgate, o investidor deposita seus TGA no contrato e entra em uma fila on-chain. A execução ocorre com base no NAV vigente no momento do processamento, e o investidor recebe o valor correspondente em stablecoin. O valor é debitado do fundo, reduzindo proporcionalmente o NAV, com o custo distribuído entre todos os participantes.

O modelo não prevê liquidez imediata por design, uma vez que parte do capital está comprometida em contratos de longo prazo (12–24 meses). A reserva de liquidez existente permite absorver saídas de forma gradual, sem comprometer a integridade do fundo.

O fundo mantém uma reserva de liquidez dedicada para atender solicitações de resgate, permitindo que saídas ocorram de forma controlada e sem comprometer a operação. A execução dos resgates segue um limite operacional ao longo do tempo, garantindo previsibilidade e preservando a estabilidade do fundo.

Pedidos que excedam a liquidez disponível permanecem em uma fila on-chain, com total transparência de posição e continuidade de rendimento até sua execução.

Além disso, é aplicada uma taxa de resgate sobre o valor retirado.

---

### Gestão de Risco

A gestão de risco é um elemento central da Tokenização de Garantia de Aluguel, garantindo a sustentabilidade do fundo e a proteção dos investidores. O processo é baseado na avaliação estruturada de dados dos inquilinos e na aplicação de critérios de aprovação antes da inclusão de novos contratos no sistema.

---

### Benefícios aos envolvidos

O modelo é estruturado para alinhar interesses entre todos os agentes do ecossistema de aluguel, distribuindo benefícios de forma clara:

- **Investidor de varejo** acessa o mercado de garantias locatícias por meio da valorização do NAV, com exposição a um ativo imobiliário e possibilidade de integração com o ecossistema DeFi.
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

O projeto encontra-se em fase inicial, sendo idealizado por Matheus “Draau” de Pauli, Project Manager e Web3 builder com mais de 5 anos de experiência na construção e gestão de produtos que conectam tecnologia, marca e mercado. Atua na coordenação de equipes multidisciplinares e no desenvolvimento de soluções em blockchain, com base criativa aplicada à estratégia e execução. Além disso, é cofundador da comunidade No Bloco, iniciativa voltada à inserção de profissionais criativos no ecossistema Web3.

A equipe conta também com Julia Hoffmann Buratto, design engineer, arquiteta e urbanista (UFSC), com MBA em Cidades Responsivas e fundadora da jubs.studio. Em 2023, lançou a Chainless, levando o produto de zero a 5.000 usuários; atualmente, o protocolo ultrapassa 30.000 usuários e segue operando conforme projetado. Atua na interseção entre arquitetura de sistemas, UX e infraestrutura onchain, com experiência em produtos fintech e Web3 voltados à tokenização, crédito e automação de fluxos financeiros.

O projeto possui ainda proximidade estratégica com o mercado imobiliário, por meio de conexões com profissionais com mais de 30 anos de experiência no setor de locações imobiliárias, facilitando validação e acesso a players relevantes. A equipe será expandida conforme a evolução da iniciativa, com a incorporação de especialistas em DeFi, jurídico imobiliário, desenvolvimento e design, garantindo uma estrutura sólida para crescimento escalável.

---

## 7. Conclusão

O TGA propõe uma nova infraestrutura para o mercado de garantias locatícias, tornando-o mais aberto, eficiente e transparente por meio da tokenização e da utilização de blockchain. Ao conectar capital de investidores com demandas reais do setor imobiliário, o modelo cria um sistema sustentável, baseado em rendimento real e gestão de risco estruturada.

Com uma arquitetura que combina integração com players do mercado, liquidez programável e expansão via DeFi, o TGA estabelece as bases para um novo padrão de garantias, mais acessível, escalável e alinhado aos avanços da economia digital.

---

# IDEIA#3 Outras possibilidades / Expansão

### **1 Camada de Reputação e Avaliação de Risco (Score On-chain)**

Como complemento à infraestrutura, o protocolo introduz uma camada de inteligência voltada à avaliação de risco e redução da inadimplência.

A partir das interações registradas nas accounts dos contratos, é construído um **score de reputação on-chain**, baseado no histórico real de pagamentos dos inquilinos ao longo do tempo. Esse modelo utiliza dados verificáveis da própria rede para reduzir assimetria de informação entre imobiliárias e garantidoras.

O score pode ser atualizado dinamicamente a cada ciclo de pagamento, permitindo análises mais precisas e contínuas de risco.

Esse sistema possibilita:

- decisões mais eficientes na concessão de garantias
- melhoria na precificação de risco
- redução estrutural da inadimplência

Adicionalmente, o modelo permite a criação de **benefícios associados a scores elevados**, como redução de taxas ou melhores condições contratuais, incentivando comportamento adimplente de forma indireta.

Importante: essa é uma camada complementar, que potencializa a infraestrutura principal, mas não é necessária para sua operação inicial.

### 2 Tokenização de Imóveis

Propomos expandir o protocolo para além das garantias de aluguel, criando a infraestrutura necessária para **tokenização de imóveis e empreendimentos**. A ideia é permitir que propriedades físicas sejam representadas por **tokens digitais negociáveis**, abrindo novas oportunidades de investimento e aumentando a liquidez do mercado imobiliário.

Essa expansão visa modernizar o setor, trazendo **transparência e acesso democratizado** a ativos que antes eram restritos a grandes investidores, estabelecendo as bases para um ecossistema imobiliário digital escalável.