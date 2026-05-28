# TGA — Simulação do Fundo (Ano 1)

Modelo financeiro de crescimento do TGA SA com variáveis de mercado.

---

## Premissas

| Parâmetro | Valor |
|---|---|
| Capital inicial | $500.000 USDC |
| Tokens genesis | 500.000 TGA — NAV $1,00 |
| Contratos iniciais | 1.000 |
| Crescimento médio | ~2.000 contratos/mês (variável) |
| Aluguel médio | R$2.000/mês |
| Câmbio | R$5,00 = $1 |
| Fee ao fundo (8%) | R$160/mês = $32,00/contrato |
| Fee ao protocolo (2%) | R$40/mês = $8,00/contrato |
| Yield colateral | 5% APY sobre AUM |
| Inadimplência base | 3% ao ano ($3,05/contrato/mês) |
| Payout por default | 3 meses de aluguel = $1.200 |
| Taxa de resgate | 0,25% retida no fundo |
| Cap de resgate | 2,5% do NAV/semana |

---

## Calendário de Eventos — 20 Entradas/Saídas

| # | Mês | Tipo | Valor | Contexto |
|---|---|---|---|---|
| 1 | M1 | ✦ Entrada | +$50.000 | Early adopter |
| 2 | M1 | ✦ Entrada | +$5.000 | Pequeno investidor |
| 3 | M2 | ✦ Entrada | +$200.000 | Investidor médio |
| 4 | M2 | ⚡ Saída | -$10.000 | Realizou lucro rápido |
| 5 | M3 | ✦ Entrada | +$500.000 | Grande aporte |
| 6 | M3 | ✦ Entrada | +$1.000 | Menor aporte possível |
| 7 | M4 | ⚡ Saída | -$30.000 | Saiu cedo demais |
| 8 | M4 | ✦ Entrada | +$15.000 | Entrada moderada |
| 9 | M5 | ⚡ Saída | -$50.000 | Nervoso com alta de defaults |
| 10 | M5 | ✦ Entrada | +$100.000 | Comprou no stress |
| 11 | M6 | ⚡ Saída | -$80.000 | Pico de inadimplência — saiu |
| 12 | M6 | ✦ Entrada | +$25.000 | Manteve convicção |
| 13 | M7 | ✦ Entrada | +$1.000.000 | Entrada institucional |
| 14 | M8 | ✦ Entrada | +$75.000 | Fundo estabilizou |
| 15 | M9 | ✦ Entrada | +$300.000 | Crescimento contínuo |
| 16 | M9 | ⚡ Saída | -$20.000 | Resgate parcial |
| 17 | M10 | ✦ Entrada | +$50.000 | Entrada no segundo stress |
| 18 | M11 | ✦ Entrada | +$200.000 | Aceleração final do ano |
| 19 | M12 | ⚡ Saída | -$100.000 | Resgate fim de ano |
| 20 | M12 | ✦ Entrada | +$500.000 | Grande entrada no fechamento |

---

## Simulação Mês a Mês

| Mês | Contratos | Default | Eventos (líquido) | Net Mensal | AUM | Tokens | NAV |
|---|---|---|---|---|---|---|---|
| 0 | 1.000 | — | — | — | $500.000 | 500.000 | $1,000 |
| 1 | 1.800 | 3% | +$55.000 | $55.233 | $610.233 | 555.000 | $1,099 |
| 2 | 3.200 | 3% | +$190.025 | $97.415 | $897.673 | 727.884 | $1,233 |
| 3 | 5.000 | 3% | +$501.000 | $152.828 | $1.551.501 | 1.134.210 | $1,368 |
| 4 | 7.500 | 3% | -$14.925 | $226.902 | $1.763.478 | 1.123.245 | $1,570 |
| 5 | 9.000 | 5% ⬆ | +$50.125 | $253.932 | $2.067.535 | 1.155.092 | $1,790 |
| 6 | 11.500 | 6% ⬆ | -$54.800 | $311.527 | $2.324.262 | 1.124.365 | $2,067 |
| 7 | 13.000 | 4% ↘ | +$1.000.000 | $382.921 | $3.707.183 | 1.608.157 | $2,305 |
| 8 | 15.500 | 3% ↘ | +$75.000 | $471.459 | $4.253.642 | 1.640.695 | $2,593 |
| 9 | 17.000 | 3% | +$280.050 | $518.691 | $5.052.383 | 1.748.696 | $2,890 |
| 10 | 19.500 | 5% ⬆ | +$50.000 | $555.072 | $5.657.455 | 1.765.997 | $3,203 |
| 11 | 21.000 | 3% ↘ | +$200.000 | $641.806 | $6.499.261 | 1.828.438 | $3,555 |
| 12 | 23.500 | 3% | +$400.250 | $720.648 | $7.620.159 | 1.940.956 | $3,926 |

---

## Resumo do Ano 1

| Métrica | Valor |
|---|---|
| AUM inicial | $500.000 |
| AUM final | $7.620.159 |
| Capital líquido aportado no ano | $2.731.000 |
| Receita total protocolo (2%) | $1.196.225 |
| Total pago em defaults | $555.678 |
| Loss ratio geral | 11,6% |
| Loss ratio pico (M6, default 6%) | 18,8% |
| Contratos ao fim do ano | 23.500 |

---

## Impacto dos Default Spikes no NAV

| Mês | Default | Ganho esperado (3%) | Ganho real | Diferença |
|---|---|---|---|---|
| M5 | 5% | ~$278.000 | $253.932 | -$24.068 |
| M6 | 6% | ~$350.000 | $311.527 | -$38.473 |
| M10 | 5% | ~$610.000 | $555.072 | -$54.928 |

O NAV continuou subindo mesmo nos meses de stress — os spikes reduziram a velocidade, não reverteram a curva. A receita de fees em escala absorveu os defaults sem comprometer o fundo.

---

## Posição dos Investidores no M12

| Investidor | Entrada | Aporte | Tokens | Valor M12 | Retorno |
|---|---|---|---|---|---|
| Fundador | M0 | $500.000 | 500.000 | $1.963.000 | +293% |
| Institucional | M7 | $1.000.000 | 483.792 | $1.898.986 | +90% |
| Grande aporte | M3 | $500.000 | 405.515 | $1.592.052 | +218% |
| Comprou no stress | M5 | $100.000 | 63.694 | $250.002 | +150% |
| Saiu no pico default | M6 | — | — | $79.800 recebido | Perdeu +113% adicional |
| Saiu cedo | M4 | — | — | $29.925 recebido | Perdeu +179% adicional |

---

## Observações

- **Mecanismo de resgate funcionou:** NAV invariável nos eventos de saída — fee de 0,25% retida beneficia quem permanece.
- **Default spike não quebra o modelo:** mesmo com 6% de inadimplência no pico, o loss ratio de 18,8% mantém o fundo lucrativo.
- **Timing importa:** investidores que saíram nos meses de stress (M4, M6) perderam a maior parte do retorno do ano.
- **Escala protege:** quanto maior o AUM e o número de contratos, menor o impacto proporcional de um spike de defaults.

---

*Gerado em: 2026-05-06*
*Premissas sujeitas a revisão conforme definições finais do protocolo*
