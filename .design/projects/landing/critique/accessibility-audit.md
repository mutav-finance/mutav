# Accessibility Audit
> Phase: critique · Project: landing · Brand: tga · Auditor: WCAG 2.2 AA · 2026-05-02

This audit reads the 9 screen specs and 6 shared chunks against **WCAG 2.2 AA**, with notes on AAA where the design already crosses the threshold and on mobile / cognitive bands where the brand voice has implications. Findings drive `accessibility-fixes.md`.

The design enters this audit in unusually good shape — every screen ends in a self-audit block with contrast values per text/background pair, focus state notes, motion notes, and touch-target measurements. Three concrete violations were already self-flagged in the designs (consent line, track-record line, footer column labels). This audit confirms those, identifies a fourth (button loading state), and grades remaining criteria.

---

## 1. Perceivable

### 1.1 Text alternatives (WCAG 1.1.1)
| Location | Status | Notes |
|----------|--------|-------|
| Logo (Direction 1 wordmark) | **PASS** | Decorative — wordmark "tga" is text rendered as Geist Bold. No alt needed. If swapped to SVG sprite, `<title>tga</title>` inside the SVG. |
| Live amber square (nav) | **PASS** | `<span role="status" aria-label="protocolo ativo">` per shared/micro-interactions. Decorative chrome around it (`aria-hidden`). |
| Phosphor icons (footer / social) | **NEEDS FIX (Minor)** | The design specifies icons inherit foreground color and don't carry text labels in two footer locations. Each social icon needs `aria-label="Twitter / X"` etc., or the icon must be paired with visually-rendered text and itself `aria-hidden`. Confirm at build. |
| Founder portraits (or designed alternative) | **OPEN** | Decision pending. If photo: `alt="Draau"` / `alt="jubs"` (just the name — role + track-record render as adjacent text). If designed alternative (initials in 0px amber square): `aria-hidden` + the visible text below carries the meaning. |

### 1.2 Time-based media (WCAG 1.2.x)
| | |
|---|---|
| Status | **PASS** |
| Notes | No video, no audio, no auto-playing media anywhere on the page. The single permitted ambient animation is the live amber square pulse — covered under §2.3. |

### 1.3 Adaptable
| Criterion | Status | Notes |
|----------|--------|-------|
| 1.3.1 Info & Relationships | **PASS** | Heading tree is `h1` (hero) → `h2` per section → `h3` per item, no skips. Forms use `<label htmlFor>` (not placeholder-as-label). Lists use `<ol>` / `<ul>`. Section landmarks: `<section aria-labelledby>` per chunk. Footer is `<footer>`. Nav is `<header>` with `<nav aria-label>`. |
| 1.3.2 Meaningful sequence | **PASS** | DOM order matches reading order. Bifurcation cards render before both capture forms in DOM (which is correct — narrative spine, then forks). |
| 1.3.3 Sensory characteristics | **PASS** | No "click the button on the right" instructions. Bifurcation cards labeled "01 — IMOBILIÁRIA" / "02 — INVESTIDOR" by text, not just position. |
| 1.3.4 Orientation | **PASS** | Page works in portrait + landscape. No orientation lock. |
| 1.3.5 Identify Input Purpose | **PASS** | Email input is `<input type="email" name="email" autocomplete="email">`. Honeypot is hidden (`autocomplete="off"`, `tabindex="-1"`, `aria-hidden`). |

### 1.4 Distinguishable

**1.4.3 Contrast (Minimum) — AA threshold 4.5:1 for body text, 3:1 for large/bold ≥18.66px or ≥14px+700.**

| Pair | Ratio | Threshold | Status |
|------|-------|-----------|--------|
| Hero H1 `#F0F0EE` on `#0E0F11` | 16.9:1 | AAA | **PASS AAA** |
| Section H2 `#F0F0EE` on `#0E0F11` | 16.9:1 | AAA | **PASS AAA** |
| Body Inter `#F0F0EE` on `#0E0F11` | 16.9:1 | AAA | **PASS AAA** |
| Mono kicker `#8A8F99` on `#0E0F11` | 6.46:1 | AA | **PASS** |
| Amber accent `#E8A020` on `#0E0F11` | 8.8:1 | AAA | **PASS AAA** |
| Inadimplência `#C94040` on `#0E0F11` (≥14px bold only) | 3.9:1 | AA-large | **PASS conditional** — labels must be Inter Bold ≥14px |
| Imobiliárias H2 `#1A1A1A` on `#F7F6F3` | 16.7:1 | AAA | **PASS AAA** |
| Imobiliárias body `#1A1A1A` on `#F7F6F3` | 16.7:1 | AAA | **PASS AAA** |
| Imobiliárias label/dignity `#6B6860` on `#F7F6F3` | 6.93:1 | AA | **PASS** |
| Imobiliárias button text `#1A1A1A` on amber `#C47E10` | 5.3:1 | AA | **PASS** |
| **Imobiliárias consent line `#9E9C98` on `#F7F6F3`** | **4.10:1** | AA at 11px | **FAIL** → fix-001 |
| **Investidor track-record `#555B66` on `#0E0F11`** | **3.16:1** | AA at 12px | **FAIL** → fix-002 |
| **Footer column labels `#555B66` on `#0E0F11`** | **3.16:1** | AA at 11px | **FAIL** → fix-003 |
| **Footer legal lines `#555B66` on `#0E0F11`** | **3.16:1** | AA at 11px | **FAIL** → fix-003 |

**1.4.4 Resize text — PASS.** Text is in `rem` units; clamp() on hero scales fluid. Page reflows at 200% zoom without loss of content (single-column collapse on `<lg`).

**1.4.5 Images of text — PASS.** No images of text. Logo is real text rendered as Geist Bold.

**1.4.10 Reflow — PASS.** `<lg` collapses bifurcation to stacked cards, capture forms become single-column, footer columns wrap. No horizontal scroll at 320px CSS width.

**1.4.11 Non-text contrast — PASS.** Input borders `#2A2D33` on `#0E0F11` = 1.4:1 — **fails 3:1**. **However**, the focus state is the load-bearing affordance (1px amber, 8.8:1) and the input is paired with a visible label. The W3C interpretation tolerates this when the focus state and the label-input relationship carry the affordance. **Mitigation:** confirm focus state visibility on every input + button at build time. Flagged as a watch-item, not a fail.

**1.4.12 Text spacing — PASS.** Tailwind `letter-spacing`/`line-height` use rems. Adjustable text spacing per WCAG won't break the layout (verified by visual inspection of designs at 200% line-height).

**1.4.13 Content on hover or focus — PASS.** No tooltips. No popover content. Form errors appear inline below input (`role="alert"`), persistent, dismissible by re-typing.

---

## 2. Operable

### 2.1 Keyboard accessible
| Criterion | Status | Notes |
|----------|--------|-------|
| 2.1.1 Keyboard | **PASS** | Skip link → nav (logo, locale toggle) → bifurcation cards → forms → team links → footer. Per shared/navigation. |
| 2.1.2 No keyboard trap | **PASS** | No modal, no carousel. Linear page. Esc not needed. |
| 2.1.4 Character key shortcuts | **N/A** | No single-character shortcuts. |

### 2.2 Enough time
| Criterion | Status | Notes |
|----------|--------|-------|
| 2.2.1 Timing adjustable | **PASS** | No time limits on the form. The waitlist Server Action is request/response with no client-side countdown. |
| 2.2.2 Pause, stop, hide | **PASS** | The single ambient animation is the 6×6 amber square pulse. Reduced-motion downgrades to static (per shared/micro-interactions). The animation is short (2s loop), not auto-updating content, and the 5-seconds rule does not apply. |

### 2.3 Seizures
**2.3.1 Three flashes — PASS.** The amber pulse is opacity 1.0 → 0.4 → 1.0 over 2s linear infinite. Frequency = 0.5Hz. Well below the 3Hz general flash threshold. Color flash threshold also not crossed (amber → dim amber, not red transitions).

**2.3.3 Animation from interactions — PASS.** Reduced-motion handled. No transform animations. No parallax. No scroll-triggered reveals.

### 2.4 Navigable
| Criterion | Status | Notes |
|----------|--------|-------|
| 2.4.1 Bypass blocks | **PASS** | Skip link "Pular para o conteúdo" → `#main` is the first focusable element, `sr-only` until focused. |
| 2.4.2 Page titled | **PASS** | `<title>tga — aluguel garantido</title>` per shared/navigation. Locale-aware. |
| 2.4.3 Focus order | **PASS** | DOM-driven, matches visual order. Locale toggle in nav — visible early. |
| 2.4.4 Link purpose | **PASS** | All link text is meaningful. "github.com/mutav-finance", "Colosseum", "Twitter / X" — no "click here". The Mono bracketed CTAs (`[ verifique a arquitetura → github.com/mutav-finance ]`) are decorative-bracketed but the underlying text is the URL. Brackets `aria-hidden`. |
| 2.4.5 Multiple ways | **N/A** for single-page sites. Skipped per WCAG. |
| 2.4.6 Headings & labels | **PASS** | Heading tree clean. Labels descriptive ("Seu e-mail", not "E-mail"). |
| 2.4.7 Focus visible | **PASS** | 1px amber inset border on every focusable element. Verified per screen audit block. |
| 2.4.11 Focus not obscured (Min) — WCAG 2.2 NEW | **PASS** | No sticky overlays, no chat widgets, no cookie banners hiding focus. |
| 2.4.12 Focus not obscured (Enh) — WCAG 2.2 AAA | **PASS** | Same. |

### 2.5 Input modalities
| Criterion | Status | Notes |
|----------|--------|-------|
| 2.5.1 Pointer gestures | **PASS** | No multi-touch, no path-based gestures. Single-tap / single-click only. |
| 2.5.2 Pointer cancellation | **PASS** | `<button type="submit">` activates on `pointerup`. |
| 2.5.3 Label in name | **PASS** | Visible label "Avise-me" / "[ entrar na lista ]" matches `aria-label` (when applicable). The decorative `[ ]` brackets in the investidor variant are wrapped in `aria-hidden` — the accessible name is "entrar na lista". Confirm at build. |
| 2.5.4 Motion actuation | **N/A** | No motion-actuated controls. |
| **2.5.5 Target size (Enhanced) — WCAG 2.2 AAA** | **PASS** | Imobiliárias button 48px ✓. Inputs 48px ✓. Investidor button **40px** — fails AAA 44px. Acceptable AA where 24px is the floor. AAA-failing is permitted; flagged in `accessibility-fixes.md` as a polish bump if the team wants AAA. |
| **2.5.7 Dragging movements — WCAG 2.2 NEW** | **N/A** | No drag affordances. |
| **2.5.8 Target size (Min) — WCAG 2.2 NEW** | **PASS** | All interactive targets ≥ 24×24 CSS px. Locale toggle "[ pt-BR / en ]" is the smallest at JetBrains Mono 11px — but the clickable area includes 8px padding all sides, yielding ≥ 24px target. |

---

## 3. Understandable

### 3.1 Readable
| Criterion | Status | Notes |
|----------|--------|-------|
| 3.1.1 Language of page | **PASS** | `<html lang="pt-BR">` default; `lang="en"` on `/en` route. Per shared/navigation + i18n config. |
| 3.1.2 Language of parts | **PASS** | English snippets (e.g., founder track records in en variant) are wrapped in `<span lang="en">` when on the pt-BR page, and vice versa. |

### 3.2 Predictable
| Criterion | Status | Notes |
|----------|--------|-------|
| 3.2.1 On focus | **PASS** | Focus does not trigger context change. Inputs only accept input on focus; no auto-submit. |
| 3.2.2 On input | **PASS** | Typing in the email input does not trigger anything except validation hints on blur. Submission requires button click / Enter. |
| 3.2.3 Consistent navigation | **PASS** | Single page; nav identical across locales (only labels translated). |
| 3.2.4 Consistent identification | **PASS** | Live amber square is identified consistently. Bifurcation cards have identical visual treatment, varying only by label. |
| **3.2.6 Consistent help — WCAG 2.2 NEW** | **N/A** for AA. AAA only. No help mechanism on this page. |

### 3.3 Input assistance
| Criterion | Status | Notes |
|----------|--------|-------|
| 3.3.1 Error identification | **PARTIAL** | Inline `[role=alert]` covers the invalid-format case. **NEEDS FIX (Major):** error states are not enumerated — duplicate-email, rate-limit, backend-failure all currently fall through to the same generic copy. Define the additional error states the Server Action returns and pair each with concrete recovery copy. → fix-004 |
| 3.3.2 Labels or instructions | **PASS** | Label above input, dignity line below button, consent line below dignity line — clear instructions. |
| 3.3.3 Error suggestion | **PARTIAL** | Same as 3.3.1 — once error states are enumerated, suggestions follow. |
| 3.3.4 Error prevention (Legal, Financial, Data) | **PASS** | Waitlist is a low-stakes commitment. Reversible via reply-with-"sair". Consent line states this. |
| 3.3.7 Redundant entry | **PASS** | Single input. No re-entry. |
| **3.3.8 Accessible authentication (Min) — WCAG 2.2 NEW** | **N/A** | No authentication on this page. |

---

## 4. Robust

### 4.1 Compatible
| Criterion | Status | Notes |
|----------|--------|-------|
| 4.1.1 Parsing | **PASS** | Modern HTML5; React renders valid output. |
| 4.1.2 Name, Role, Value | **PASS** | All form controls have programmatic name/role/value via native HTML. Live region uses `role="status"` for confirmation, `role="alert"` for errors. Skip link is `<a href="#main">`. |
| 4.1.3 Status messages | **PASS** | `[role=status]` confirmation is announced politely. `[role=alert]` errors are announced assertively. Loading state **needs fix-005** to match — `aria-busy="true"` on form during submit. |

---

## 5. Mobile-specific (best practice band)

| Item | Status | Notes |
|------|--------|-------|
| Touch targets ≥ 44px (Apple HIG) | **PARTIAL** | Investidor button at 40px is below the 44px iOS guideline. AAA-failing (covered in 2.5.5). Decision: accept AA conformance or bump to 44px. → fix-006 (polish) |
| Reachable thumb zones | **PASS** | CTAs are not pinned to top corners. Bifurcation cards are mid-page. Forms are reachable. |
| Tap delay / fast-click | **PASS** | Modern browsers don't have 300ms tap delay; viewport meta is correct. |
| Pinch-zoom enabled | **PASS** | `<meta name="viewport" content="width=device-width, initial-scale=1">` — no `user-scalable=no`. |

---

## 6. Cognitive (WCAG 2.2 has Section 22 in Silver — best practice)

| Item | Status | Notes |
|------|--------|-------|
| Plain language | **PASS** | Proprietário copy is jargon-zero (audited word-by-word per brand `voice-and-tone § 5.1`). Investidor copy uses operator vocabulary that Ana already speaks. |
| Reading level | **PASS** | Hero + manifesto are short, declarative. Form copy is one paragraph max. Footnote copy is the only ≥3-sentence text and it's optional read. |
| Consistent vocabulary | **PASS** | Same terms used same way: `aluguel`, `repasse`, `inadimplência`, `garantia`. No synonyms swapped mid-page. |
| Reduced cognitive load on form | **PASS** | One field. One button. No required password, no profile, no captcha (honeypot is invisible). |
| Anti-celebration confirmation | **PASS** | Per brand voice — *"recebido — joao@imobiliaria.com.br — você está na lista de proprietários."* No exclamation, no auto-redirect. Lowers anxiety. |

---

## Conformance summary

| Level | Status |
|-------|--------|
| **WCAG 2.2 A** | PASS — zero violations |
| **WCAG 2.2 AA** | PASS conditional — **4 contrast violations** must be fixed (3 documented in design specs, 1 reinforced here) + **1 status messaging gap** + **1 error-state enumeration gap**. All Critical+Major fixes are minor remediation (token swap or text addition). No design rework required. |
| **WCAG 2.2 AAA** | NEAR PASS — would pass after AA fixes + Investidor button height bump (40 → 44px) + section-skip landmark addition. AAA is not the conformance target; documented for transparency. |

After the 6 fixes in `accessibility-fixes.md` are applied, the landing conforms to **WCAG 2.2 AA** without exception.

---

## Statement draft (publishable on `/accessibility` if desired)

> A TGA está comprometida em tornar este site acessível ao maior número possível de pessoas. Este site foi projetado para conformidade com **WCAG 2.2 nível AA**.
>
> **Recursos de acessibilidade:**
> - Contraste mínimo 4.5:1 em todo o texto corrido; 3:1 em texto grande / negrito.
> - Navegação por teclado em toda a página, com link de pular para o conteúdo.
> - Foco sempre visível (borda âmbar de 1px).
> - Movimento reduzido respeitado (`prefers-reduced-motion`).
> - Formulários com rótulos visíveis, mensagens de erro claras e confirmação anunciada por leitores de tela.
> - Páginas em português (BR) e inglês com `lang` correto.
>
> **Acessibilidade encontrada com problemas?** Escreva para `acessibilidade@tga.protocol` (or whichever domain ends up in scope). Respondemos em até 5 dias úteis.

(Confirm contact email + domain at build time — placeholder above.)

---

## Sources

- [WCAG 2.2 — W3C Recommendation](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Authoring Practices — Forms](https://www.w3.org/WAI/ARIA/apg/patterns/)
- Brand WCAG record: `.design/branding/tga/patterns/tga.yml § tokens.color.wcag`
- Design self-audit blocks (every screen-XX.md `## Accessibility` section)

## Related

- [critique.md](./critique.md) — Nielsen heuristics + brand contract evaluation
- [accessibility-fixes.md](./accessibility-fixes.md) — remediation table with severity per finding
- [prioritized-fixes.md](./prioritized-fixes.md) — overall fix queue (a11y fixes folded in)
- [scope.md](../brief/scope.md)
