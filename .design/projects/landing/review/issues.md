# Issues
> Phase: review · Project: landing · Brand: tga · Generated: 2026-05-02
> All paths are absolute against the `landing/` package root.

## Severity legend

- **Critical** — blocks acceptance / blocks shipping
- **Major** — significant deviation from design or brand contract; ship-eligible only with documented exception
- **Minor** — polish, drift, or nice-to-have

No **Critical** issues found.

> **2026-05-03 update.** After review, the team reframed the vision arc (dropped property tokenization, replaced with "pagamentos e fundos programáveis") and collapsed the dual-front so the proprietário capture matches the rest of the dark Investidor canvas. Two Major issues from this report were folded into that pass: **A-001 fixed** (`aria-busy={isPending}` now reads `useActionState`), **A-002 fixed** (hero kicker bumped `text-text-3` → `text-text-2`). Build re-verified clean.
>
> **Second 2026-05-03 update.** Three GitHub issues closed: **#14** (hero H1 wrap on small viewports — `lg:block` spans + `text-balance`), **#12 / B-001 fixed** (type scale tokens added to `globals.css` `@theme`; all 51 arbitrary `text-[NNpx]` swept to named utilities), **#8** (next-intl App Router wired with `[locale]` segment, `localePrefix: "as-needed"`, full pt-BR + en translation, locale toggle now functional). C-001 (privacy/terms 404) remains open as #9. Minors D-001/D-002 effectively resolved via the type-scale + dual-front passes.

---

## Major

### A-001 — Form `aria-busy` is hardcoded `false`

| | |
|---|---|
| **Severity** | Major |
| **WCAG** | 4.1.3 Status Messages |
| **File** | [`landing/components/site/waitlist-form.tsx:102`](../../../../landing/components/site/waitlist-form.tsx) |
| **Expected** | Per fix-005, the form should set `aria-busy="true"` while the Server Action is in flight, so screen-reader users get a status-change announcement parity with the visible "enviando…" text. |
| **Actual** | `aria-busy={false}` — hardcoded literal. The form never advertises a busy state to assistive tech. The visible "enviando…" string + `aria-disabled` on the button partially compensate, but this is the line fix-005 prescribed and it isn't wired. |
| **Remediation** | Promote the inner `useFormStatus().pending` up via a small wrapper, or move the `<form>` into a child component that can read `useFormStatus`. Minimal change: wrap the form body in a status-aware component, then pass `pending` into the `<form aria-busy={pending}>`. ~10 lines. |
| **Spec** | [`critique/accessibility-fixes.md`](../critique/accessibility-fixes.md) §fix-005 |

### A-002 — Hero kicker contrast fails AA

| | |
|---|---|
| **Severity** | Major |
| **WCAG** | 1.4.3 Contrast (Minimum) — AA |
| **File** | [`landing/components/site/hero.tsx:28`](../../../../landing/components/site/hero.tsx) |
| **Expected** | The "O protocolo que não falha quando o mercado falha." Mono 13px line should clear 4.5:1 on the dark canvas. |
| **Actual** | `text-text-3` resolves to `#555B66` on `#0E0F11` = **3.16:1** — same anti-pattern fix-002 caught for team and fix-003 caught for footer. The hero was missed. |
| **Remediation** | Replace `text-text-3` with `text-text-2` on this `<p>` — `#8A8F99` on `#0E0F11` = 6.46:1 AA. One token swap, parallel to fixes 001–003. |
| **Spec** | [`critique/accessibility-fixes.md`](../critique/accessibility-fixes.md) §fix-001/002/003 (same class of issue) |

### B-001 — Type scale bypassed: 51 arbitrary `text-[NNpx]` usages

| | |
|---|---|
| **Severity** | Major (style discipline; renders correctly today) |
| **WCAG** | n/a |
| **Files** | All 9 site components + `components/ui/{button,card,input,label}.tsx`. Sample: [`hero.tsx:23,28`](../../../../landing/components/site/hero.tsx), [`the-gap.tsx:32,43,46,49`](../../../../landing/components/site/the-gap.tsx), [`vision-arc.tsx:41,54,59,62`](../../../../landing/components/site/vision-arc.tsx), [`bifurcation.tsx:34,50,55,58,61`](../../../../landing/components/site/bifurcation.tsx), [`proprietario-capture.tsx:17,22,25,28,36,39`](../../../../landing/components/site/proprietario-capture.tsx), [`investidor-capture.tsx:16,23,27,31,39,49`](../../../../landing/components/site/investidor-capture.tsx), [`team.tsx:31,52,55,58`](../../../../landing/components/site/team.tsx), [`footer.tsx:52,55,63,73,86`](../../../../landing/components/site/footer.tsx), [`waitlist-form.tsx:63,89,135`](../../../../landing/components/site/waitlist-form.tsx), [`button.tsx:14,17,20,23`](../../../../landing/components/ui/button.tsx), [`card.tsx:33,45`](../../../../landing/components/ui/card.tsx), [`input.tsx:11`](../../../../landing/components/ui/input.tsx), [`label.tsx:16`](../../../../landing/components/ui/label.tsx). |
| **Expected** | Per `tga.yml#tokens.typography.scale`, type sizes are tokens (`text-2xs` = 11px, `text-sm` = 13px, `text-base-sm` = 14px, `text-lg` = 18px, `text-3xl` = 28px, `text-4xl` = 36px, `text-5xl` = 48px clamp, `text-6xl` = 64px clamp). Components should consume the named tokens, not arbitrary literals. |
| **Actual** | Every type size is written as `text-[11px]`, `text-[13px]`, `text-[18px]`, `text-[28px]`, `text-[36px]`, etc. The hero H1 uses an inline `style={{ fontSize: "clamp(...)" }}` ([`hero.tsx:15`](../../../../landing/components/site/hero.tsx)) re-implementing what `text-6xl` already provides. |
| **Impact** | Compiles, looks identical. But: (a) future scale tweaks (e.g. fluid `text-5xl` on more breakpoints) won't propagate; (b) no single source of truth — the brand spec scale is documentation-only in code; (c) line-heights and letter-spacing from the scale are also bypassed (`leading-[1.0625]`, `tracking-[-0.03em]` written inline). |
| **Remediation** | Either (a) refactor to use the named scale (requires extending the Tailwind v4 `@theme inline` block in [`globals.css:9-55`](../../../../landing/app/globals.css) with `--text-*` tokens that also carry `line-height` and `letter-spacing`), or (b) document the deviation in `target-adaptations.md` and add a Tailwind preset that materializes the scale as utilities. Recommendation: do (a) before the next feature PR. Not a launch blocker. |
| **Spec** | `tga.yml#tokens.typography.scale` |

### C-001 — `/privacidade` and `/termos` are linked but don't exist

| | |
|---|---|
| **Severity** | Major (404 on shipped link) |
| **WCAG** | n/a (link target validity, not a11y) |
| **File** | [`landing/components/site/footer.tsx:36-37`](../../../../landing/components/site/footer.tsx) |
| **Expected** | Either both pages exist as routes, or the links don't ship. |
| **Actual** | Both render in the footer "Legal" column. No `app/privacidade/` or `app/termos/` directories exist. Clicking either yields Next.js 404. |
| **Remediation** | Two options: (1) ship stub pages with placeholder LGPD-aligned content (acceptable for demo, must be filled before public production launch), or (2) replace link text with `em breve` styled like the disabled `en` toggle until the legal copy is ready. The build phase noted these as "deferred" but they currently produce broken UX. |
| **Spec** | BUILD-LOG.md "Open from build phase" §Privacy + Terms |

---

## Minor

### A-003 — Disabled `en` toggle contrast borderline

| | |
|---|---|
| **Severity** | Minor |
| **WCAG** | 1.4.3 (disabled-state exemption applies, but borderline for hover/comprehension) |
| **File** | [`landing/components/site/language-toggle.tsx:26`](../../../../landing/components/site/language-toggle.tsx) |
| **Expected** | Disabled state must be perceivable as a label even if exempt from contrast minimums. `text-text-3` (`#555B66`) on `#0E0F11` = 3.16:1 — readable but borderline for an interactive-looking word. |
| **Actual** | `<span aria-disabled="true" className="text-text-3 cursor-not-allowed">en</span>`. `tabIndex` is not set; this is a `<span>` not a `<button>`, so it isn't in the tab order — the `cursor-not-allowed` is a hover affordance only. WCAG 1.4.3 has a "incidental / disabled" exemption that this likely qualifies for. |
| **Remediation** | Two options: (a) accept as-is (disabled exemption); (b) bump to `text-text-2` (`#8A8F99` = 6.46:1) and rely on `aria-disabled` + `cursor-not-allowed` + the `[ ... ]` bracket framing to communicate "not yet active". (b) is more legible at small sizes. Defer either way. |

### B-002 — `Button.size` default is 40px, not aligned with spec

| | |
|---|---|
| **Severity** | Minor |
| **WCAG** | 2.5.8 Target Size (Minimum) — AA threshold 24px (passes), 2.5.5 (Enhanced) AAA — 44px (default fails) |
| **File** | [`landing/components/ui/button.tsx:27`](../../../../landing/components/ui/button.tsx) |
| **Expected** | The Investidor primary spec is 40px (`tga.yml#patterns.button-primary.investidor.height`); the Imobiliárias primary is 48px. The landing applies fix-006 by selecting `size="lg"` (44px) for the Investidor capture submit. The default size remains 40px. |
| **Actual** | `default: "h-10 px-6"` = 40px. Currently no Button on the landing uses `size="default"` — the only actual buttons are the two capture submits which both use explicit sizes. So this is a latent rather than rendered issue. |
| **Remediation** | Either (a) drop `size="default"` since neither audience uses 40px on the landing, or (b) document that "default = data-dense Investidor dashboard surfaces only, not landing/marketing." Not blocking. |

### C-002 — Card primitive is unused on landing

| | |
|---|---|
| **Severity** | Minor (dead component) |
| **WCAG** | n/a |
| **File** | [`landing/components/ui/card.tsx`](../../../../landing/components/ui/card.tsx) |
| **Expected** | Either used, or noted as scaffolded for future surfaces. |
| **Actual** | Imported nowhere on the landing. Bifurcation cards are bare `<a>` blocks with `bg-surface` (correct intent), team founder rows are `<li>` blocks, gap items are `<li>` blocks. The Card primitive exists with sensible defaults but nothing instantiates it on this page. |
| **Remediation** | Either delete (lean) or document in BUILD-LOG.md as carried-forward primitive for future PRs (e.g. dashboard). Recommend keep + document — the next PR (dashboard) will use it. |

### D-001 — Mobile Geist H1 may visually fold to 5 lines on `<sm` widths

| | |
|---|---|
| **Severity** | Minor (acceptable today; fix-12 polish) |
| **WCAG** | n/a |
| **File** | [`landing/components/site/hero.tsx:17-21`](../../../../landing/components/site/hero.tsx) |
| **Expected** | The H1 has hard `<br>` breaks after "garantido," and "deveria". On `<sm` widths the second line "do jeito que deveria" can wrap, producing a stack of 4–5 lines. |
| **Actual** | Same as expected — readable, but not fully controlled. fix-12 in `prioritized-fixes.md` flagged this as Polish and accepted. |
| **Remediation** | Apply `text-wrap: balance` per fix-12, or accept. Defer. |

### D-002 — Single hardcoded `#1A1A1A` could be a CSS var

| | |
|---|---|
| **Severity** | Minor (style discipline) |
| **WCAG** | n/a |
| **File** | [`landing/components/ui/button.tsx:17`](../../../../landing/components/ui/button.tsx) |
| **Expected** | Reference the imobiliárias `--color-text` value via a token. |
| **Actual** | `text-[#1A1A1A]` is hardcoded on the imobiliárias variant. The reason is that the variant runs *inside* `[data-front="imobiliarias"]` so `text-text` would also resolve to `#1A1A1A`, but only when the front attribute is on an ancestor — using the literal is defensive against accidental usage outside the front. The brand spec also writes the literal directly. |
| **Remediation** | Optional: change to `text-[var(--color-text)]` and trust the front-scope, *or* keep the literal and accept the documented exception (current code matches `tga.yml`). Defer. |

---

## Counts

| Severity | Count |
|----------|-------|
| Critical | 0 |
| Major | 4 (A-001, A-002, B-001, C-001) |
| Minor | 5 (A-003, B-002, C-002, D-001, D-002) |

A-001 and A-002 are tightly scoped one-line / ten-line fixes. C-001 is a content-or-route decision. B-001 is a refactor that should land before the next feature PR. The Minors are all defer-eligible.
