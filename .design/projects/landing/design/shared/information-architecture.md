# Information Architecture
> Phase: design · Project: landing · 2026-05-02

Single route, single scroll, two semantic-token resolutions on the same body. The "screens" are sections of one continuous page. The IA is therefore not a tree — it is a vertical sequence with a single fork moment.

---

## Vertical sequence

```
┌────────────────────────────────────────────────────────────┐
│ [data-front="investidor"] — body default                   │
│                                                            │
│  01 — nav                          (sticky, 56px)         │
│  02 — hero                         (~100vh)               │
│  03 — the-gap                      (~80vh)                │
│  04 — vision-arc                   (~70vh, quieter)       │
│  05 — bifurcation                  (~60vh, fork moment)   │
│                                                            │
│  ╶╶╶╶╶╶╶╶╶ 1px amber rule (front handoff) ╶╶╶╶╶╶╶╶╶       │
│                                                            │
│ [data-front="imobiliarias"] — section wrapper             │
│                                                            │
│  06 — proprietario-capture         (~80vh, light surface) │
│                                                            │
│  ╶╶╶╶╶╶╶╶╶ 1px amber rule (front return) ╶╶╶╶╶╶╶╶╶        │
│                                                            │
│ [data-front="investidor"] — back to default               │
│                                                            │
│  07 — investidor-capture           (~70vh, dark)          │
│  08 — team                         (~70vh)                │
│  09 — footer                       (~auto)                │
└────────────────────────────────────────────────────────────┘
```

The two amber rules at sections 5→6 and 6→7 are the only place the canvas changes color. They are the **fold** — the dark/light handoff is owned by these two rules.

## Narrative spine (mono-numbered)

The spine carries `0X / 04` mono kickers. The kickers are the page's signature rhythm — once a reader has scrolled past three sections, the kicker pattern is the sound of the brand.

| Section | Kicker | Function |
|---------|--------|----------|
| 02 — hero | `01 / 04 — começamos pela garantia` | Establishes the guiding line |
| 03 — the-gap | `02 / 04 — onde o mercado falha` | Category-level diagnosis |
| 04 — vision-arc | `03 / 04 — horizonte` | Four-phase progression |
| 05 — bifurcation | `04 / 04 — escolha sua trilha` | Fork moment |

The captures, team, and footer break the `0X / 04` pattern intentionally — they're outside the narrative spine.

| Section | Kicker | Function |
|---------|--------|----------|
| 01 — nav | (no kicker) | Chrome — logo + live dot + locale |
| 06 — proprietario-capture | `→ 01 — IMOBILIÁRIA` | Trail-marker, sub-spine |
| 07 — investidor-capture | `→ 02 — INVESTIDOR` | Trail-marker, sub-spine |
| 08 — team | `equipe` | Off-spine label |
| 09 — footer | (no kicker) | Mono everything |

## Reading order vs. DOM order

Reading order = DOM order. No `order:` reshuffles. Tab order = DOM order. This is the WCAG 2.4.3 ("Focus Order") commitment — the keyboard user reads what the visual user reads, in the same sequence.

The bifurcation cards are activated by click *or* keyboard. Activation = smooth-scroll + focus into the relevant capture form. Both forms are always rendered server-side. The cards are scroll affordances, not show/hide toggles. (See `accessibility-patterns.md § Focus order on the bifurcation cards`.)

## Content grouping

Three groups of three sections:

1. **Establishment** (01–04): nav, hero, the-gap, vision-arc — what the protocol is and why the category fails. Both personas read this.
2. **Fork** (05): bifurcation — the only group with one section. Centered, quiet, decisive.
3. **Commitment** (06–09): proprietario-capture, investidor-capture, team, footer — capture, credibility, exit.

Group 1 establishes shared ground. Group 2 acknowledges divergence. Group 3 lets each persona commit at their own register, then both meet again at the team and footer.

## Page metadata

- **Title (pt-BR):** *TGA — Aluguel garantido, do jeito que deveria funcionar*
- **Title (en):** *TGA — Rent that arrives, the way it should*
- **Description (pt-BR):** Protocolo de garantia locatícia onchain. O aluguel chega. Sem fórmula, sem fila.
- **Description (en):** Onchain rental guarantee protocol. Rent arrives. No forms, no queue.
- **OG image:** static `og.png`, 1200×630, hero composition with guiding line on Investidor canvas
- **lang:** `pt-BR` (default) / `en` (locale route)

## Routes

- `/` — default, `lang="pt-BR"`
- `/en` — English, `lang="en"`

next-intl handles routing. No other routes. No `/proprietario`, `/investidor`, `/about` — the page is one route. Anchor IDs only:

- `#main` (skip link target)
- `#bifurcation` (nav scroll target if `[ fique por dentro ]` is kept)
- `#proprietario-form`
- `#investidor-form`
- `#equipe`

## Related
- [navigation.md](./navigation.md)
- [responsive.md](./responsive.md)
- [../screen-01-nav.md](../screen-01-nav.md)
