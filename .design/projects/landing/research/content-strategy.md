# Content Strategy
> Phase: research | Project: landing | Generated: 2026-05-02

The brand voice and never-say lists are already defined; this chunk works one level closer to the page — what each section *says*, in what register, with what mechanics. Brazilian context: as of 2026, the proprietário audience has just lived through the QuintoCred shutdown (Aug 2025) and the CredPago disbursement-delay episode. The market has been told for years that "rental insurance is solved" and has just learned it isn't. The copy has to land in *that* room.

## The guiding line as a load-bearing sentence

*"Aluguel garantido, do jeito que deveria funcionar."* — load-bears three things at once:

- **Product claim:** "garantido" reads as a participle ("rental that is guaranteed") and as a category noun ("rental guarantee"). Both are correct.
- **Implicit critique:** "do jeito que deveria funcionar" presupposes that current rental insurance does *not* work as it should. For Lucas, this lands without naming names — he's already had the experience.
- **Pivot resilience:** if the product becomes a different first product (a credit-score primitive, an insurance-adjacent contract, a different mechanic entirely), the sentence still holds. It claims a category outcome, not a specific feature.

This is the strongest copy on the page and should anchor every other section back to it. The manifesto under the hero (*"o protocolo que não falha quando o mercado falha"*) is the second-strongest line and inherits the same critical posture.

## Section-by-section register

### Hero

- **H1:** the guiding line. Geist Bold, ~64px desktop. No subhead.
- **Manifesto:** Inter Regular, ~18px, max 60-char measure, sits 24–32px under H1. *"O protocolo que não falha quando o mercado falha."*
- **Mono kicker:** 11px JetBrains Mono `01 / 04 — começamos pela garantia` *or* `LIVE — protocolo em desenvolvimento`. Pick one and only one. Recommendation: section index, because the live status is already conveyed by the amber dot in the nav.
- **CTA:** `[ fique por dentro ]` — secondary button (transparent + amber border), Investidor variant. Scrolls to bifurcation.
- **No secondary CTA.** The page has one job at this point.

### The Gap

This is the section the brief calls out as P0 and where the copy has the most room to fail. The brand contract forbids naming competitors (`enquanto [concorrente] falhava` is a never-say). But Lucas has just lived through QuintoCred shutting down in August 2025 — he knows the category failed, even if you don't say it.

Three diagnostic statements (`01 / 02 / 03`), each ~12 words:

- **01 — A garantia depende de quem te aprovou.** Sub-line (Inter, 14px): "quando a garantidora trava, sua garantia trava junto."
- **02 — O repasse pode esperar 60 dias.** Sub-line: "o aluguel não pode."
- **03 — A liquidação é opaca.** Sub-line: "você não sabe quando, nem por quê, nem se."

These are claims the entire category exhibits — they're true of CredPago, QuintoCred, Porto Seguro, Sul-América, Garantia Investe. None are named. Lucas reads them and recognizes the experience; Ana reads them and recognizes the systemic problem.

Voice: declarative, no hedge. **Não use:** "muitas vezes", "pode acontecer", "em alguns casos". The brand voice is "autoridade calma" — the sentence is true or it isn't.

### Vision Arc

Per the brief, four phases as a single horizontal sentence on `lg+`:

```
01 / Agora       02 / Próximo     03 / Depois        04 / Horizonte
garantia         score onchain    TGA token          tokenização
locatícia                                            imobiliária
```

Each phase: Mono numeral, Geist phase label (24–28px), Inter sub-line (14px). Sub-lines:

- **01 — Garantia locatícia.** *"Repasse automático ao proprietário quando o inquilino para de pagar."*
- **02 — Score onchain.** *"Reputação de inquilino verificável e portátil entre garantidoras."*
- **03 — TGA token.** *"Liquidez para a garantia. Capital que escala com o mercado."*
- **04 — Tokenização imobiliária.** *"O contrato de aluguel como ativo. Yield real, lastreado em renda real."*

No dates, no "we're here". The 1px amber rule connects them.

The voice on the vision arc shifts subtly — *quieter than the hero*, per the brief. The reader is being shown a horizon, not pitched a roadmap. Avoid superlatives ("revolucionário", "primeiro do mundo" — both never-say) and avoid commitment language ("vamos lançar", "em breve"). Present-tense for phase 01 (it's the work in flight); future-leaning prose for the others without picking a date.

### Bifurcation

Two cards. Total of ~14 words across both.

- **Left card (proprietário/imobiliária):** Mono label `01 — IMOBILIÁRIA`, Geist 32px headline `Sou proprietário ou imobiliária.`, Inter sub-line `Você quer que o aluguel chegue. Sem fórmula, sem fila.`
- **Right card (investidor):** Mono label `02 — INVESTIDOR`, Geist 32px headline `Sou investidor.`, Inter sub-line `Você quer yield real, com colateral verificável.`

That's the entire content. No icons (the brand spec prohibits coloring icons amber, and bare icons in this context compete with the manifesto). The cards are the fork; the typography is the affordance.

### Proprietário Capture (light front)

The section that has to read perfectly to a 50-year-old who has been burned. Three sentences, plain pt-BR, **zero jargon**:

1. *"Quando o inquilino atrasa, você recebe."* — Outcome first. No mechanism.
2. *"Sem ligar, sem formulário, sem espera."* — Anti-bureaucracy. The pain Lucas knows.
3. *"O dinheiro chega na conta cadastrada."* — Concrete, ordinary language. Not "wallet", not "carteira", just "conta".

Then the form: email input, audience tag (hidden), `[ avise-me ]` button. Below: a single mono line — `Vamos te avisar quando estiver pronto. Não vamos te encher.` The promise is dignity.

The brand never-say for proprietário copy is long: *blockchain, Solana, onchain, smart contract, token, DeFi, yield, wallet, "protocolo" (technological sense), "liquidação" (use "repasse"), "transparência" as marketing adjective, "inovação", "revolucionário"*. Audit every word.

### Investidor Capture (dark front)

Three sentences, technical register, mecânica + transparência onchain + arquitetura. The brand voice "verificabilidade como convite" is the mode:

1. *"O capital lastreia garantias reais — contratos de aluguel ativos no Brasil."*
2. *"O fluxo é onchain. Cada repasse, cada execução, verificável."*
3. *"A primeira RWA brasileira específica de garantia locatícia, na Solana."*

Avoid the never-say list for investor copy: *"confie em nós", "acreditamos", "nosso objetivo é", APY garantido, "hackathon", moonshot/alpha/degen, "alta liquidez" without data, "ecossistema" (generic), "oportunidade única"*. The third sentence is the only specific positioning claim and it's defensible.

Form: email + audience tag + `[ entrar na lista ]`. Below: mono link `[ verifique a arquitetura → github.com/tga-protocol ]`. The verifiability gesture is the trust mechanic — Ana doesn't need a paragraph of reassurance, she needs a link to the code.

### Team

*Anti-anonymous*. Two founders, real names, real one-liners. The brief calls for "Draau + jubs". Recommended structure:

- Geist 24px name. Inter 14px role one-liner. Mono 12px track-record line (one fact, one venue, one number if available without invention).
- Optional portrait — if no shoot exists, use designed alternatives: monochrome treatment of any decent existing photo, or initials in a 0px square at 96px.

Voice: factual, third-person feel even though the team writes it in first person elsewhere. No long bios; the credibility is the *willingness to be named* in a market full of anonymous founders.

### Footer

Mono everything. Repos under "código", judges link under "colosseum", social handles (Twitter/Telegram TBD) under "comunidade". The locale toggle echoes the nav. One legal line in 9–10px Mono: *"Pre-launch. Nenhum produto disponível para uso público no momento."*

The single LGPD-compliance line: *"Ao entrar na lista, você consente com o uso do seu e-mail para receber novidades sobre o protocolo. Pode sair quando quiser — basta responder qualquer e-mail com ‘sair’."* Place it under the form, in 11px Mono, on both the proprietário and investidor variants.

## Voice consistency across pt-BR and en

The brief calls for English as a translation, not a rewrite. This is the right call but has traps:

- The guiding line *"Aluguel garantido, do jeito que deveria funcionar"* depends on the double meaning of "garantido". The English translation *"Rent that arrives, the way it should"* loses one register but lands the other; the alternative *"Guaranteed rent, the way it should work"* is more literal but flatter. Pick the first. Document the choice in the i18n notes so the translation doesn't drift in iterations.
- "Aluguel" → "rent" (not "rental") because the noun form reads as the recurring payment, which is what's at stake. "Rental" reads as the act of leasing — wrong nuance.
- "Repasse" → "transfer" or "payout"; "transfer" is more bank-accurate for the proprietário audience, "payout" reads more financial. Use "transfer" in proprietário-facing en, "payout" in investor en.
- The mono kickers stay numeric (`01 / 04`) — language-agnostic. The Geist labels translate. The mono brackets `[ avise-me ]` → `[ notify me ]` for the proprietário en variant; `[ entrar na lista ]` → `[ join the list ]` for investor en. Keep the bracket convention, swap the label.

## Sources
- TGA brand strategy chunks (positioning, voice-and-tone, messaging) — internal
- TGA brand never-say (per audience) — internal
- InfoMoney, "Encerramento do QuintoCred" — https://www.infomoney.com.br/minhas-financas/encerramento-do-quintocred-expoe-fragilidade-no-mercado-de-garantia-locaticia/
- Mercado Comum, "QuintoCred encerramento" — https://mercadocomum.com/quintocred-encerramento-pelo-quintoandar-expoe-milhares-de-locadores-a-risco-de-prejuizos/

## Related
- [scope.md](../brief/scope.md)
- [target-adaptations.md](../brief/target-adaptations.md)
- [ux-patterns.md](./ux-patterns.md)
- [recommendations.md](./recommendations.md)
