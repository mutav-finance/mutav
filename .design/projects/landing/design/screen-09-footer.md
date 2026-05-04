# Screen 09 — Footer
> Phase: design · Project: landing · Section: footer · 2026-05-02

## Purpose

Mono everything. The single section where Bloomberg-Terminal density is correct — it reads as instrument-panel chrome, not marketing chrome. Repos under `código`, judges link under `colosseum`, social handles under `comunidade`, locale toggle echo, legal lines.

## User flow position

Last section of the page. Reader has either committed (left an email in one of the captures) or is exiting. The footer offers the verifiability gestures (GitHub, Colosseum copilot link) and the language echo, then a final legal line.

## Layout

```
lg+ (≥1024)                                                          ~auto
┌────────────────────────────────────────────────────────────────────────┐
│ ─────────── 1px solid var(--color-border) (top) ───────────────        │
│                                                                        │
│  ┌─────────────┬─────────────┬─────────────┬─────────────────────┐    │
│  │ código      │ colosseum   │ comunidade  │ idioma              │    │
│  │             │             │             │                     │    │
│  │ tga-        │ copilot     │ x.com/      │ [ pt-BR / en ]      │    │
│  │ protocol    │             │ tgaprotocol │                     │    │
│  │             │ jury        │             │ tga.protocol        │    │
│  │ sgr-solana  │             │ telegram    │                     │    │
│  │             │             │             │                     │    │
│  │ sgr-stellar │             │             │                     │    │
│  │             │             │             │                     │    │
│  │ sgr-app     │             │             │                     │    │
│  └─────────────┴─────────────┴─────────────┴─────────────────────┘    │
│  ↓ 64px                                                                │
│                                                                        │
│  Pre-launch. Nenhum produto disponível para uso público no momento.   │
│  © 2026 TGA Protocol — todos os direitos reservados.                   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘

<md                                                                  ~auto
┌──────────────────────────────────┐
│ ── 1px border (top) ──           │
│                                  │
│ código                           │
│ tga-protocol                     │
│ sgr-solana                       │
│ sgr-stellar                      │
│ sgr-app                          │
│                                  │
│ colosseum                        │
│ copilot                          │
│ jury                             │
│                                  │
│ comunidade                       │
│ x.com/tgaprotocol                │
│ telegram                         │
│                                  │
│ idioma                           │
│ [ pt-BR / en ]                   │
│ tga.protocol                     │
│                                  │
│ Pre-launch. Nenhum produto…      │
│ © 2026 TGA Protocol              │
└──────────────────────────────────┘
```

- **Container:** `<footer role="contentinfo" data-front="investidor">`.
- **Background:** `var(--color-canvas)` = `#0E0F11`.
- **Padding:** `lg+`: 64px / 64px. `<lg`: 48px / 48px.
- **Top border:** 1px solid `var(--color-border)` = `#2A2D33`. Separates footer from team section above.
- **Grid (`lg+`):** 4-column row, `grid-cols-4 gap-8`. Each column is a labeled link group.
- **Grid (`md`):** 2×2 grid (`grid-cols-2 gap-8`).
- **Grid (`<md`):** single column stack.

## Composition

### Column 1 — código
- Label: `código` (en: `code`) — JetBrains Mono Medium 11px ALL CAPS, `tracking-[0.10em]`, `var(--color-text-3)` = `#555B66`. Margin-bottom: 16px.
- Links (Mono 12px, `var(--color-text-2)` = `#8A8F99`, hover → amber):
  - `tga-protocol` → `https://github.com/tga-protocol` (the org)
  - `sgr-solana` → `https://github.com/tga-protocol/sgr-solana`
  - `sgr-stellar` → `https://github.com/tga-protocol/sgr-stellar`
  - `sgr-app` → `https://github.com/tga-protocol/sgr-app`
- Each link `target="_blank" rel="noopener noreferrer"`.
- 8px vertical gap between links.

### Column 2 — colosseum
- Label: `colosseum` (Mono 11px ALL CAPS).
- Links:
  - `copilot` → `https://arena.colosseum.org/copilot` (per CLAUDE.md context)
  - `jury` → judges link (TBD — confirm at build time per `BRIEF.md § Open questions`).
- If `jury` link is not yet defined, ship column 2 with only `copilot`. Don't ship a placeholder URL.

### Column 3 — comunidade
- Label: `comunidade` (en: `community`).
- Links (TBD per `BRIEF.md` open question — confirm at build time):
  - `x.com/tgaprotocol` → `https://x.com/tgaprotocol`
  - `telegram` → `https://t.me/tgaprotocol` (or Discord, per open question).
- If only one of Twitter/Telegram is confirmed, ship just that one. Empty placeholders are out of contract.

### Column 4 — idioma + locale toggle echo
- Label: `idioma` (en: `language`).
- Element: `[ pt-BR / en ]` — the same `LanguageToggle` component used in the nav. Mono 11px. Active locale `var(--color-text)`, inactive `var(--color-text-2)`.
- Below the toggle, the brand identity line: `tga.protocol` (Mono 12px, `var(--color-text-3)`) — wordmark in monospace as a quiet brand echo at the bottom.

### Legal lines (below the columns)

After the 4-column grid, separated by 64px vertical gap:

```
<div class="mt-16 space-y-2">
  <p class="font-mono text-[11px] text-text-3">
    Pre-launch. Nenhum produto disponível para uso público no momento.
  </p>
  <p class="font-mono text-[11px] text-text-3">
    © 2026 TGA Protocol — todos os direitos reservados.
  </p>
</div>
```

- pt-BR: *Pre-launch. Nenhum produto disponível para uso público no momento.*
- en: *Pre-launch. No product is available for public use at this time.*
- Copyright: *© 2026 TGA Protocol — todos os direitos reservados.* / *© 2026 TGA Protocol — all rights reserved.*

**Contrast on Mono 11px:** `#555B66` on `#0E0F11` = 3.16:1 — **fails AA**. Bump to `var(--color-text-2)` = `#8A8F99` for 6.46:1 AA. (Consistent with the contrast-bump pattern applied throughout — never ship 11px text below AA threshold.)

## Components used

- `LanguageToggle` (shared) — same component as in nav.
- `FooterSection` (local) — composition with the 4-column grid + legal lines.
- Native `<a>`, `<p>`.

## States

### Default
All link groups rendered.

### Hover (any link)
- `color: var(--color-text-2) → var(--color-accent)` (`#E8A020`), 150ms ease-out.
- The footer is the only place footer text adopts amber — and only on hover. This is the controlled-amber-budget exception that adds a tiny amount of "alive" feel on hover without violating the budget at rest.

### Focus (any link)
- `outline: 1px solid var(--color-accent)` with `outline-offset: 2px` (offset positive on dark links — a 2px gap reads as a clean focus ring without merging into the underline-less link text).

### Empty / Loading / Error
N/A — static.

## Interactions

| Trigger | Result |
|---------|--------|
| Click GitHub repo link | Opens `github.com/tga-protocol/...` in new tab. |
| Click colosseum copilot | Opens copilot URL in new tab. |
| Click x.com / telegram | Opens platform in new tab. |
| Click `pt-BR` or `en` (locale toggle echo) | Same as nav locale toggle — navigates to `/` or `/en`. |
| Tab from previous section | Tab order: column 1 links top→bottom → column 2 → column 3 → column 4 (locale toggle, then `tga.protocol` is not a link so skip) → end of page. |
| Reduced-motion | Color transitions kept (under threshold). |

## Accessibility

- **VoiceOver order:** column 1 label → column 1 links in DOM order → column 2 label → column 2 links → column 3 → column 4 → legal lines → end.
- **Landmarks:** `<footer role="contentinfo">` is a landmark. Inside, no nested landmarks needed for this scale.
- **Heading structure:** **No headings inside the footer.** The column labels (`código`, `colosseum`, etc.) are `<span>` or `<p>`, not `<h3>`. Reasoning: the footer is below the team `<h2>` and adding `<h3>` here would suggest a hierarchical relationship that does not exist (the footer is chrome, not a sub-section of "Team"). Use `<dl>` (description list) with `<dt>` for the label and `<dd>` for the link list, OR a `<nav aria-label="código">` per group. Recommendation: `<nav aria-label="...">` per group — gives screen readers a clean "código nav" landmark for each group.
- **External links:** all `target="_blank" rel="noopener noreferrer"`. Screen readers announce "opens in new tab" via the `target="_blank"` (or augment with `aria-label="..., abre em nova aba"` if desired).
- **Touch targets:** Mono 12px links wrapped with `padding: 4px 0` and `display: inline-block` for 8px effective vertical tap zone per link. With 8px gap between links (composed of 4px padding × 2), each link's effective tap zone is ~16px tall — below 24×24 AA. **Mitigation:** wrap each link in a `display: block` `<a>` with `padding: 8px 0`, increasing effective tap to ~28px tall. Width is column-bound, so target is wider than tall and passes 24×24 trivially.
- **Contrast:**
  - Column labels (`#555B66` on `#0E0F11`) = 3.16:1 — **fails AA at 11px**. Bump to `#8A8F99` = 6.46:1 AA.
  - Links (`#8A8F99` on `#0E0F11`) = 6.46:1 AA.
  - Legal lines (`#555B66` on `#0E0F11`) = 3.16:1 — **fails AA**. Bump to `#8A8F99` = 6.46:1 AA.
  - Hover amber (`#E8A020` on `#0E0F11`) = 6.92:1 AA.
- **Skip-links:** the page-level skip link points to `<main>`; from inside the footer, no further skip is needed because the footer is the last landmark.

## Image resources

**No imagery.**

The footer is text-only. Per the brand, social platform icons (X / Telegram / Discord) are tempting but forbidden — `imagery-style.md § Anti-Patterns` lists "blockchain iconography (hexagons, nodes, chains, circuit boards)" as forbidden, and consumer-app social icons read as "consumer financial app" which the brand also rejects. Use the platform name as text: `x.com/tgaprotocol`, `t.me/tgaprotocol`. The URL is the icon.

## Visual effects

- **Surface stacking:** footer stays on `var(--color-canvas)`. The 1px top border separates it from team. No surface step inside.
- **No texture.** The architectural grid lives only on the hero.
- **Hover amber on links:** 150ms ease-out `color` transition. The single sanctioned moment where amber appears in body text on hover.
- **No motion** beyond color transitions.

## Brand-contract checks

- ✅ `border-radius: 0` — no boxed elements.
- ✅ No shadows.
- ✅ Amber pixel budget: zero amber at rest. Hover adds transient amber to links (single link at ~80×16 = ~1,280px², transient). Active locale + `tga.protocol` line at bottom — both `text-2` gray, not amber. Section contributes effectively 0px² to the resting amber budget.
- ✅ Three-layer hierarchy: Mono is dominant (column labels, links, legal). Geist appears only via the page-level `<h1>` already in the hero; the footer doesn't need its own Geist declaration. Inter is also absent — but the section is intentionally "chrome", not narrative content. The three-layer rule applies to **narrative sections**; the footer is allowed to be Mono-only as the chyron that closes the page. Per `STYLE.md § 2. Philosophy`: *"Three-layer hierarchy is the core law"* applies per screen, but the footer is a chrome element, comparable to the nav (which is also Geist + Mono only, no Inter). The page as a whole has the three layers; the footer is a Mono closing.
- ✅ Tabular numerals: `2026` in copyright, `01-04` numerals in colosseum/copilot URL paths use `tabular-nums`.
- ✅ Mono everything per the brief — Bloomberg Terminal density.
- ✅ LGPD: the consent line lives in the capture forms, not the footer (per `content-strategy.md § Footer`). Footer carries the pre-launch disclaimer + copyright. No tracking-cookie banner — there is no client-side analytics planned for the launch (any future analytics → server-side only, LGPD-compliant).

## Related
- [shared/component-plan.md](./shared/component-plan.md)
- [shared/navigation.md](./shared/navigation.md) — for the locale toggle component shared with nav
- Research: `.design/projects/landing/research/ux-patterns.md § Density vs Whitespace Rhythm`
- Research: `.design/projects/landing/research/content-strategy.md § Footer`
- Project context: `CLAUDE.md` — sibling repos and Colosseum resources
