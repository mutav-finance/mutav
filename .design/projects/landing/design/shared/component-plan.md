# Component Plan
> Phase: design · Project: landing · Target: shadcn (greenfield) · 2026-05-02

The project is greenfield — there is no existing codebase to inventory. shadcn primitives will be installed via the CLI, then overridden per the brand contract (`border-radius: 0`, no shadows, no rings on focus, surface stacking). Project-specific compositions live above shadcn primitives.

This plan groups every component into one of: **Reuse** (shadcn as-is), **Refactor** (shadcn primitive that must be overridden), **New (shared)** (project-specific composition reusable across screens), **New (local)** (one-off composition in a single section).

---

## Reuse (as-is)

None. Every shadcn primitive used must be overridden to honor the 0px-everywhere contract — there is no shadcn component the brand can use unmodified.

This is by design, not omission. Per `tga.yml`: *Override shadcn defaults globally — every interactive element gets `rounded-none`.*

---

## Refactor (shadcn primitives, overridden)

| Component | Source | Changes Needed | Screens Used |
|-----------|--------|----------------|--------------|
| `Button` | `shadcn/ui` | Remove `rounded-md`, replace with `rounded-none`. Remove `shadow-*` classes. Override `focus-visible:ring-*` → `focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent focus-visible:-outline-offset-1`. Add brand variants: `variant="primary-investidor"` (transparent + amber border), `variant="primary-imobiliarias"` (amber fill + `#1A1A1A` text), `variant="secondary-investidor"` (border-only ghost). Heights: 40px Investidor, 48px Imobiliárias. | 06, 07 (form submits) |
| `Input` | `shadcn/ui` | Remove `rounded-md`, replace with `rounded-none`. Remove `ring-*` and `focus-visible:ring-*`. Override focus to `focus:border-accent focus:outline-none`. Set per-front backgrounds via `data-front` resolution. Use `font-mono` for email value, `font-sans` for non-data inputs. | 06, 07 |
| `Label` | `shadcn/ui` | No structural change — already minimal. Set typography: `font-sans font-medium text-[13px]`. Force visible label, never placeholder-as-label. | 06, 07 |
| `Card` | `shadcn/ui` | **Not used.** The bifurcation cards are bespoke compositions — using shadcn `Card` would import unwanted padding and shadow conventions. Reject. | — |

Note: shadcn `Form` with `react-hook-form` — **out of scope** for this project. Native `<form>` + Server Action is sufficient (single field, no client validation chrome). See `reference-specs.md § The waitlist form`.

---

## New (shared)

Project-specific compositions used across two or more sections.

| Component | Purpose | Screens Used | Location |
|-----------|---------|--------------|----------|
| `LiveDot` | 6×6 amber square with pulse animation. `border-radius: 0`. Honors `prefers-reduced-motion`. `aria-hidden="true"`. `title="Protocolo em desenvolvimento"`. | 01 (nav) | `components/brand/live-dot.tsx` |
| `LanguageToggle` | Pair of `<a>` links: `[ pt-BR / en ]`. Mono 11px. Active locale: `var(--color-text)`. Inactive: `var(--color-text-2)` with hover transition. `aria-current="page"` on active. | 01 (nav), 09 (footer echo) | `components/brand/language-toggle.tsx` |
| `MonoKicker` | Section opener — Mono 11–12px ALL CAPS, `0.10em` tracking, `var(--color-text-2)` color. Receives `index` prop (`"01 / 04"`) and `label` prop. Renders inside `<span>`, not heading element. | 02, 03, 04, 05, 06, 07 | `components/brand/mono-kicker.tsx` |
| `Mono` (numeric wrapper) | Forces `font-feature-settings: "tnum" 1; font-variant-numeric: tabular-nums` on every number. Inline `<span>`. | 04, 06, 07, 09 | `components/brand/mono.tsx` |
| `WaitlistForm` | Native `<form>` with hidden audience field, hidden honeypot, hidden locale field, email input, submit button, and inline `<div role="alert">` error region. Per-front variant via `data-front`. Server Action `joinWaitlist`. | 06, 07 | `components/brand/waitlist-form.tsx` |
| `SectionHeader` | Mono kicker + Geist heading + optional Inter sub-line. Standardizes the three-layer hierarchy at the top of every spine section. | 02, 03, 04, 05 | `components/brand/section-header.tsx` |

Each lives in `components/brand/` to clearly separate them from `components/ui/` (shadcn primitives) and `components/sections/` (one-off section compositions).

---

## New (local)

Compositions used in only one section.

| Component | Screen | Purpose |
|-----------|--------|---------|
| `HeroSection` | 02 | Full hero composition — kicker + H1 + manifesto. Anchored left on `lg+`, dot grid texture on canvas. |
| `TheGapSection` | 03 | Section header + three diagnostic statements with mono numerals. |
| `VisionArc` | 04 | Four-phase horizon. Mono `01–04` + Geist phase label + Inter sub-line. Horizontal `lg+`, vertical below. 1px amber connecting rule. |
| `BifurcationCards` | 05 | Two cards side-by-side via `gap-px bg-border` trick. Each card `<a>` linking to its capture form anchor. Hover: `bg-canvas → bg-surface`. Focus: 1px amber inset outline. |
| `ProprietarioCapture` | 06 | Section wrapper carrying `data-front="imobiliarias"`. Three sentences + WaitlistForm + LGPD line + dignity line. |
| `InvestidorCapture` | 07 | Section wrapper (default `data-front="investidor"`). Three sentences + WaitlistForm + GitHub verifiability link. |
| `TeamSection` | 08 | Asymmetric 7/5 grid (lg+). Founder portrait (160×160 square, grayscale, 0px radius) or initials fallback + Geist name + Inter role + Mono track-record. |
| `FooterSection` | 09 | 4-column footer (lg+) with `código` / `colosseum` / `comunidade` / locale toggle echo, plus legal line + LGPD reminder. |

Each section composition lives in `components/sections/` and consumes the `New (shared)` and `Refactor (shadcn)` components from above.

---

## Composition tree (lg+ desktop)

```
<RootLayout lang="pt-BR">
  <Body data-front="investidor">                    # default semantic resolution
    <SkipLink />
    <Header role="banner">
      <Nav>
        <Logo />
        <LiveDot />
        <LanguageToggle />
      </Nav>
    </Header>

    <Main id="main">
      <HeroSection>                                  # screen-02
        <SectionHeader kicker="01 / 04 — começamos pela garantia">
          Aluguel garantido,&lt;br&gt;do jeito que deveria funcionar.
        </SectionHeader>
        <Manifesto />                                # Inter, p
      </HeroSection>

      <TheGapSection>                                # screen-03
        <SectionHeader kicker="02 / 04 — onde o mercado falha">
          O que não funciona hoje.
        </SectionHeader>
        <DiagnosticList />                           # 3× mono-numbered items
      </TheGapSection>

      <VisionArc>                                    # screen-04
        <SectionHeader kicker="03 / 04 — horizonte" muted />
        <ArcSteps>                                   # 4 phases + 1px amber rule
      </VisionArc>

      <BifurcationCards>                             # screen-05
        <SectionHeader kicker="04 / 04 — escolha sua trilha" centered />
        <CardPair />                                 # 2 cards, gap-px
      </BifurcationCards>

      <ProprietarioCapture data-front="imobiliarias"> # screen-06 (light)
        <AmberRule />                                # the fold (top)
        <Heading + ThreeSentences />
        <WaitlistForm audience="proprietario" />
      </ProprietarioCapture>

      <InvestidorCapture>                            # screen-07 (back to dark)
        <AmberRule />                                # the fold (return)
        <Heading + ThreeSentences />
        <WaitlistForm audience="investidor" />
        <VerifiabilityLink />                        # mono link to GitHub
      </InvestidorCapture>

      <TeamSection>                                  # screen-08
        <Founder name="Draau" cols={7} />
        <Founder name="jubs" cols={5} />
      </TeamSection>
    </Main>

    <Footer role="contentinfo">                      # screen-09
      <FooterColumns />
      <LegalLine />
    </Footer>
  </Body>
</RootLayout>
```

## File layout (suggested)

```
app/
  layout.tsx                                # html lang, font wiring, body data-front
  page.tsx                                  # composes all section components
  (en)/page.tsx                             # english variant
  globals.css                               # @theme block + per-front [data-front] vars
components/
  ui/                                       # shadcn primitives (Button, Input, Label) — overridden
  brand/
    live-dot.tsx
    language-toggle.tsx
    mono-kicker.tsx
    mono.tsx
    section-header.tsx
    waitlist-form.tsx
  sections/
    hero.tsx
    the-gap.tsx
    vision-arc.tsx
    bifurcation-cards.tsx
    proprietario-capture.tsx
    investidor-capture.tsx
    team.tsx
    footer.tsx
app/(marketing)/_actions/
  join-waitlist.ts                          # Server Action — Zod, KV, Resend
```

## Build sequence (matches PR plan)

1. **PR 1 — scaffold** — `app/layout.tsx`, `globals.css`, fonts, shadcn init, `Button` + `Input` + `Label` overrides
2. **PR 2 — nav + hero** — `LiveDot`, `LanguageToggle`, `MonoKicker`, `SectionHeader`, `HeroSection`
3. **PR 3 — gap + arc** — `TheGapSection`, `VisionArc`, `Mono` wrapper
4. **PR 4 — bifurcation + captures** — `BifurcationCards`, `ProprietarioCapture`, `InvestidorCapture`, `WaitlistForm`, `joinWaitlist` Server Action
5. **PR 5 — team + footer** — `TeamSection` (with portrait or initials fallback), `FooterSection`
6. **PR 6 — i18n + a11y polish** — `next-intl` route wiring, contrast verification, focus order, OG meta, Resend + KV env wiring

## Related
- [../screen-01-nav.md](../screen-01-nav.md)
- [../screen-02-hero.md](../screen-02-hero.md)
- [../screen-05-bifurcation.md](../screen-05-bifurcation.md)
- [../screen-06-proprietario-capture.md](../screen-06-proprietario-capture.md)
- [../screen-07-investidor-capture.md](../screen-07-investidor-capture.md)
