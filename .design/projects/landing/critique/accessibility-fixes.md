# Accessibility Fixes
> Phase: critique · Project: landing · Brand: tga · 2026-05-02

Six remediations to bring the design to **WCAG 2.2 AA** conformance. Three are token swaps already self-flagged in the design specs; the other three are status-messaging and error-handling additions surfaced by the audit. Every fix is small. No design rework required.

Severity: **Critical** = blocks AA conformance · **Major** = AA-failing per criterion · **Minor** = AA borderline / AAA polish.

---

## fix-001 · Imobiliárias consent line — Mono 11px contrast bump

| | |
|---|---|
| **Severity** | **Major** |
| **WCAG** | 1.4.3 Contrast (Minimum) — AA |
| **Where** | `screen-06-proprietario-capture.md` — Mono consent line below the dignity line |
| **Issue** | Color `var(--color-text-3)` = `#9E9C98` on imobiliárias canvas `#F7F6F3` = **4.10:1**. Fails AA at 11px (threshold 4.5:1). |
| **Fix** | Bump to `var(--color-text-2)` = `#6B6860` on `#F7F6F3` = **6.93:1 AA**. |
| **Build action** | Replace the Tailwind class on the consent `<p>`: `text-text-3` → `text-text-2`. One token change. |
| **Verification** | Open the page at the proprietário capture section, devtools color inspector confirms `#6B6860`, run a contrast check against `#F7F6F3`. |

---

## fix-002 · Investidor team track-record — Mono 12px contrast bump

| | |
|---|---|
| **Severity** | **Major** |
| **WCAG** | 1.4.3 Contrast (Minimum) — AA |
| **Where** | `screen-08-team.md` — JetBrains Mono 12px track-record line below each founder's role |
| **Issue** | Color `var(--color-text-3)` = `#555B66` on Investidor canvas `#0E0F11` = **3.16:1**. Fails AA at 12px (threshold 4.5:1). |
| **Fix** | Bump to `var(--color-text-2)` = `#8A8F99` on `#0E0F11` = **6.46:1 AA**. |
| **Build action** | Replace the Tailwind class on the track-record `<p>`: `text-text-3` → `text-text-2`. |
| **Verification** | Confirm both founder cards render at `#8A8F99`. |

---

## fix-003 · Footer column labels + legal lines — Mono 11px contrast bump

| | |
|---|---|
| **Severity** | **Major** |
| **WCAG** | 1.4.3 Contrast (Minimum) — AA |
| **Where** | `screen-09-footer.md` — Column header labels (`PROTOCOLO`, `BUILDERS`, `JURY`, `LEGAL`) and legal-line copy at the bottom of the footer |
| **Issue** | Color `var(--color-text-3)` = `#555B66` on `#0E0F11` = **3.16:1**. Fails AA at 11px (threshold 4.5:1). |
| **Fix** | Bump all 11px Mono text in the footer to `var(--color-text-2)` = `#8A8F99` on `#0E0F11` = **6.46:1 AA**. |
| **Build action** | Single class swap on the footer typography utility — `.footer-label`, `.footer-legal`, or whichever class wraps the 11px Mono text. Confirm no remaining `text-text-3` at 11px in the footer module. |
| **Verification** | Run `grep -E "text-text-3.*text-\[11px\]\|text-\[11px\].*text-text-3"` against the footer component file post-build — should return zero matches. |

---

## fix-004 · Error state enumeration + concrete recovery copy

| | |
|---|---|
| **Severity** | **Major** |
| **WCAG** | 3.3.1 Error Identification, 3.3.3 Error Suggestion |
| **Where** | `screen-06-proprietario-capture.md` + `screen-07-investidor-capture.md` — `[role="alert"]` error region below input |
| **Issue** | Current spec covers only the invalid-format case (*"E-mail inválido. Verifique e tente de novo."*). A duplicate email, rate-limited submission, or backend outage will all render with the same generic copy. WCAG 3.3.1 requires identifying the error; 3.3.3 requires suggesting a fix. |
| **Fix** | Define the four error states the Server Action `joinWaitlist` can return and pair each with concrete pt-BR + en copy. Investidor side gets the technical register; Imobiliárias side gets plain-language. |
| **Copy (proprietário, pt-BR)** | • `INVALID`: *E-mail inválido. Verifique e tente de novo.*<br>• `DUPLICATE`: *Esse e-mail já está na lista. Vamos te avisar quando estiver pronto.*<br>• `RATE_LIMITED`: *Muitas tentativas. Tente novamente em alguns minutos.*<br>• `SERVER_ERROR`: *Não foi possível salvar. Tente novamente.* |
| **Copy (investidor, pt-BR)** | • `INVALID`: *E-mail inválido. Verifique o formato.*<br>• `DUPLICATE`: *Já está na lista. Confira o histórico no GitHub.*<br>• `RATE_LIMITED`: *Rate-limited. Tente em alguns minutos.*<br>• `SERVER_ERROR`: *Falha no servidor. Tente novamente.* |
| **Copy (en, both fronts)** | • `INVALID`: *Invalid email. Check the format.*<br>• `DUPLICATE`: *Already on the list. We'll be in touch.* (proprietário) / *Already on the list. Verify on GitHub.* (investidor)<br>• `RATE_LIMITED`: *Too many attempts. Try again in a few minutes.*<br>• `SERVER_ERROR`: *Couldn't save. Try again.* |
| **Build action** | Server Action returns a discriminated union: `{ ok: true } \| { ok: false, code: "INVALID" \| "DUPLICATE" \| "RATE_LIMITED" \| "SERVER_ERROR" }`. Client matches `code` to copy via `messages/{locale}.json` namespace `landing.waitlist.error.{code}`. |
| **Verification** | Manually trigger each error state in dev (invalid email, duplicate insert, rate-limit threshold, KV throw) and confirm the alert region renders the matching copy. Screen reader announces each via `[role=alert]`. |

---

## fix-005 · Submit button loading state — sighted-parity status indicator

| | |
|---|---|
| **Severity** | **Major** |
| **WCAG** | 4.1.3 Status Messages, 1.4.1 Use of Color (loading state must not rely on opacity alone) |
| **Where** | `screen-06-proprietario-capture.md` + `screen-07-investidor-capture.md` — submit button + form |
| **Issue** | Current spec disables the submit button via `opacity: 0.4` while the Server Action is in flight. Users with low vision may not register opacity alone as "submitting". Screen readers don't see opacity. The button label stays static (`avise-me` / `[ entrar na lista ]`), so the only signal is the disable. |
| **Fix** | Three additions during submit:<br>1. Set `aria-busy="true"` on the `<form>` element while the request is in flight.<br>2. Render a Mono 12px status text below the button: *"enviando…"* (pt-BR) / *"sending…"* (en). On submit success, the form is replaced by the confirmation region; on error, the status text is replaced by the `[role=alert]`.<br>3. The button keeps `disabled` + `opacity: 0.4` for redundant visual signal. |
| **Build action** | Track form state via React's `useFormStatus` (App Router). Render a `<p className="font-mono text-[12px] text-text-2 mt-2">{pending ? 'enviando…' : null}</p>` adjacent to the button. Add `aria-busy={pending}` on the form. |
| **Verification** | Throttle network in devtools, submit form, confirm: (a) button visually disabled, (b) status text appears below button, (c) screen reader announces "enviando" via the polite live region OR via the `aria-busy` state change. |

---

## fix-006 · Investidor button height — AAA polish (44×44 target)

| | |
|---|---|
| **Severity** | **Minor** (AA-passing as-is; AAA-polish bump) |
| **WCAG** | 2.5.5 Target Size (Enhanced) — AAA only. AA threshold is 24px (2.5.8) which the design clears. |
| **Where** | `screen-07-investidor-capture.md`, plus any other Investidor primary button on the page (currently only the capture submit) |
| **Issue** | Investidor primary button height is **40px** per `tga.yml#patterns.button-primary.investidor`. AAA target size is 44×44 (Apple HIG also recommends 44pt minimum). The Imobiliárias button at 48px clears AAA. |
| **Fix** | Decision needed: (a) accept AA conformance and ship 40px, or (b) bump Investidor primary button to 44px on the landing only (project-local override) and document. The brand spec deliberately sets 40px for data-dense Investidor dashboards; the landing has no data density argument and could justify a marketing-context bump. |
| **Recommended decision** | **Bump landing-only to 44px** via a `landing` variant on the button — preserves brand spec for the dashboard, raises mobile touch comfort on the public surface. |
| **Build action** | If accepted: add `landing-investidor` variant in the button component or use a one-off Tailwind class on the capture submit (`h-11 px-6` instead of `h-10 px-6`). Document the deviation in `target-adaptations.md` if it spreads beyond the capture form. |
| **Verification** | Mobile devtools at 375px, the submit button visibly clears 44×44 thumb zone. |

---

## Quick remediation queue

| # | Fix | Severity | Effort | Owner |
|---|-----|----------|--------|-------|
| 001 | Consent line `text-text-3` → `text-text-2` | Major | 1 line | build |
| 002 | Track-record `text-text-3` → `text-text-2` | Major | 1 line | build |
| 003 | Footer 11px Mono `text-text-3` → `text-text-2` | Major | ~3 lines | build |
| 004 | Error state enum + 16 copy strings (4 codes × 2 fronts × 2 locales) | Major | ~2h | founders + build |
| 005 | `aria-busy` + Mono "enviando…" status text | Major | ~30min per form | build |
| 006 | Investidor button 40 → 44px (landing-only) | Minor | 1 variant | build (decision needed) |

001–003 can land in a single PR (token swaps). 004 needs founder copy lock. 005 is a self-contained PR. 006 is a decision gate.

---

## Sources

- [WCAG 2.2 — W3C Recommendation](https://www.w3.org/TR/WCAG22/)
- [Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [Understanding SC 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [Understanding SC 3.3.1 Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
- [Apple HIG — Touch targets](https://developer.apple.com/design/human-interface-guidelines/accessibility) (44pt)

## Related

- [accessibility-audit.md](./accessibility-audit.md) — full WCAG conformance audit
- [critique.md](./critique.md) — Nielsen heuristic findings (loading state issue raised in §3, heuristic 1)
- [prioritized-fixes.md](./prioritized-fixes.md) — overall fix queue
- Design self-audit blocks: `screen-06-proprietario-capture.md § Accessibility`, `screen-07-investidor-capture.md § Accessibility`, `screen-08-team.md § Accessibility`, `screen-09-footer.md § Accessibility`
