# Issues
> Phase: review · Project: landing · Brand: tga (MUTAV) · Updated: 2026-05-21
> Branch: `feat/lp-investidor-components`
> All paths are relative to `web/`.

## Severity legend

- **Critical** — blocks acceptance / blocks shipping
- **Major** — significant deviation; ship-eligible only with documented exception
- **Minor** — polish, drift, or nice-to-have

No **Critical** or **Major** issues found.

---

## Minor

### T-001 — Team photos committed but not wired in component

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/team.tsx:43-53`](../../../../web/components/site/team.tsx) |
| **Expected** | `draau.jpg` and `jubs.png` from `public/team/` rendered as `<Image>` with `grayscale` filter, 160×160 or aspect-ratio square, 0px radius. |
| **Actual** | Component renders `<span>[ photo · D ]</span>` and `<span>[ photo · J ]</span>` as placeholder text. Photos exist at `public/team/draau.jpg` and `public/team/jubs.png` but are not imported or rendered. |
| **Impact** | Team section looks unfinished. Per the critique `prioritized-fixes.md §4`, founders chose path A (photo) — the photos have been committed but not rendered. |
| **Remediation** | Add `import Image from "next/image"`. In the founder card, replace the placeholder `<a>` content with `<Image src={/team/${f.initial === 'D' ? 'draau.jpg' : 'jubs.png'}} ... className="w-full h-full object-cover grayscale" />`. Alternatively, pass photo paths through the messages/founder type. |
| **Status** | Open |

---

### A-001 — Pending status text is `aria-hidden` — screen readers cannot hear it

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/waitlist-form.tsx:32`](../../../../web/components/site/waitlist-form.tsx) |
| **Expected** | The "sending…" text announced to screen readers via polite live region (fix-005 spec: `role="status"` or `aria-live="polite"`). |
| **Actual** | `<p className="... text-text-2" aria-hidden>{pendingLabel}</p>` — `aria-hidden` excludes the text from the accessibility tree. `aria-busy={isPending}` on the form is present and announces state change, but the specific "sending…" string is sighted-only. |
| **Impact** | Screen reader users hear the form become `aria-busy` but do not hear the "enviando…" / "sending…" confirmation text. Partial WCAG 4.1.3 compliance. |
| **Remediation** | Remove `aria-hidden` from the pending status paragraph, or use `role="status"` with `aria-live="polite"` on the paragraph so it announces when it appears. The `aria-busy` on the form already covers state announcement; making the text visible to AT is extra clarity. |
| **Status** | Open |

---

### A-002 — Tier selector buttons missing accessible state

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/tiers.tsx:55-104`](../../../../web/components/site/tiers.tsx) |
| **Expected** | Active tier button communicates selected/pressed state to screen readers via `aria-pressed` or `aria-selected`. |
| **Actual** | `<button onClick={() => setActive(i)} className="...">` — no `aria-pressed`, no `aria-selected`, no `role="tab"`. Sighted users see the left-border + color activation. Screen readers cannot determine which tier is active. |
| **Impact** | Screen reader users can activate tiers but cannot determine which is currently selected without visually inspecting the content change. |
| **Remediation** | Add `aria-pressed={isActive}` to each tier button (toggle pattern). Or refactor to a tab pattern: `role="tablist"` on the list, `role="tab"` + `aria-selected={isActive}` on each button, `role="tabpanel"` on the right content column. |
| **Status** | Open |

---

### A-003 — `<dt>` inside `<button>` — invalid HTML in FAQ accordion

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/faq.tsx:32-34`](../../../../web/components/site/faq.tsx) |
| **Expected** | Valid HTML — `<dt>` should only appear inside `<dl>`. The accordion question text should be in an element valid as button content (e.g., `<span>`, `<p>`). |
| **Actual** | `<button><dt className="...">{item.q}</dt></button>` — `<dt>` (definition term) is a flow content element that is not permitted as content of `<button>`. While browsers render this, validators will flag it and some screen readers may announce unexpected semantics. |
| **Impact** | Minor semantics issue; visual rendering and keyboard behavior are not affected in practice. |
| **Remediation** | Replace `<dt>` with `<span>` inside the button: `<span className="font-display font-bold text-base leading-snug text-text">{item.q}</span>`. Keep `<dl>` + `<dd>` structure for the definition list semantics. |
| **Status** | Open |

---

### D-001 — VisionArc and InvestidorCapture built but not mounted; page order differs from STATE.md

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`app/[locale]/page.tsx`](../../../../web/app/%5Blocale%5D/page.tsx) |
| **Expected** | Per `STATE.md § Post-review decisions (2026-05-20)`, current page order is: Nav → Hero → SocialProof → TheGap → Market → Tiers → MidCta → VisionArc → InvestidorCapture → Team → Footer. |
| **Actual** | page.tsx mounts: Nav → Hero → TheGap → Solutions → Market → Tiers → MidCta → Team → Faq → Footer. SocialProof, VisionArc, and InvestidorCapture are not mounted. Solutions and Faq are mounted but not listed in STATE.md. |
| **Impact** | No waitlist capture on the investidor LP. Users can learn about the fund (TheGap, Solutions, Market, Tiers) but have no mechanism to join the waitlist. MidCta button links to `#investidor-form` which doesn't exist — dead anchor. |
| **Remediation** | Either (a) mount `InvestidorCapture` and add `id="investidor-form"` to its section, then update STATE.md; or (b) document that the investidor LP is information-only for this phase with a separate conversion path. Update STATE.md to reflect actual page composition. Fix the dead `#investidor-form` anchor in MidCta. |
| **Status** | Open — requires product decision |

---

### L-001 — LP ships English-only; locale strategy not documented

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`i18n/routing.ts`](../../../../web/i18n/routing.ts) |
| **Expected** | Per the original design spec and brand brief, pt-BR is the primary locale. `routing.ts` should declare `locales: ["pt-BR", "en"]`, `defaultLocale: "pt-BR"`. |
| **Actual** | `routing.ts` declares `locales: ["en"]`, `defaultLocale: "en"`. No pt-BR messages file exists. The investidor LP delivers in English only. |
| **Impact** | Brazilian investors who prefer pt-BR receive only English. This is a significant audience mismatch for a Brazil-targeted financial product. The investidor persona (Lucas analog) is Brazilian. |
| **Note** | This may be a deliberate product decision (English for international/crypto investor audience). If so, it should be documented in STATE.md. The landing-imobiliaria package ships pt-BR as primary, suggesting locale strategy differs per front. |
| **Remediation** | Document the locale strategy in STATE.md. If pt-BR is desired for investidor, add `messages/pt-BR.json` and update `routing.ts`. |
| **Status** | Open — needs product decision + STATE.md update |

---

### H-001 — MonoKicker counter prefix requires both `index` + `total`; most sections pass neither

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/mono-kicker.tsx:21`](../../../../web/components/site/mono-kicker.tsx) |
| **Actual** | `MonoKicker` renders the counter prefix only when `{index && total}`. Hero passes `"Real Asset. Real Yield."` as a bare `label`. Other sections don't pass any index/total. The `01 / 04 — label` pattern from the original design never appears on this LP. |
| **Note** | The original design specified Mono kicker pattern as `01 / 04 — label`. The investidor LP doesn't use this pattern at all — sections use section headings directly or bare label kickers without numbering. This is a design divergence from the section kicker spec, but all sections are still properly labeled and navigable. |
| **Remediation** | If the numbered kicker pattern is desired, add `index` + `total` props to each section's kicker. If the pattern is intentionally dropped for the investidor LP, remove the dead `index` + `total` props from the MonoKicker component or document the decision. |
| **Status** | Carry forward |

---

## Counts

| Severity | Count |
|----------|-------|
| Critical | 0 |
| Major | 0 |
| Minor | 6 (T-001, A-001, A-002, A-003, D-001, L-001) |

**D-001 is the highest-impact minor issue:** the MidCta CTA links to `#investidor-form` which does not exist on the page. This is a broken UX flow even though it is not a brand contract violation. Recommend fixing before shipping.

---

## Resolved (from prior reviews on main)

| Issue | Description | Resolution |
|-------|-------------|------------|
| fix-001 | Consent line `text-text-3` → `text-text-2` | Applied in prior commit |
| fix-002 | Track-record `text-text-3` → `text-text-2` | Applied in prior commit |
| fix-003 | Footer 11px Mono `text-text-3` → `text-text-2` | Applied in prior commit |
| fix-004 | Error state enum + 4 codes × 2 fronts | Applied — `WaitlistResult` discriminated union in `waitlist.ts` |
| fix-005 | `aria-busy` + pending status text | Partially applied — `aria-busy` present; status text `aria-hidden` (A-001) |
| fix-006 | Investidor button 40 → 44px | Applied — `size="lg"` = 44px in button.tsx:28 |
