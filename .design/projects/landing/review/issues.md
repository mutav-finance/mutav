# Issues
> Phase: review · Project: landing · Brand: tga (MUTAV) · Updated: 2026-05-20
> Branch: `feat/lp-imobiliaria-components`
> All paths are absolute against the `Landings/landing-imobiliaria/` package root.

## Severity legend

- **Critical** — blocks acceptance / blocks shipping
- **Major** — significant deviation from design or brand contract; ship-eligible only with documented exception
- **Minor** — polish, drift, or nice-to-have

No **Critical** issues found.

> **2026-05-20 re-review note (pass 2).** F-001 (`data-front="imobiliarias"`) and F-002 (`InvestidorCapture` removal) are resolved. A-003 has escalated from Minor to Major because the light front is now active. New minor issue H-001 identified: `SeguroPrestamista` kicker counter silently dropped.

---

## Major

### A-003 — Disabled language toggle fails WCAG 1.4.3 in Imobiliárias light context

| | |
|---|---|
| **Severity** | Major (escalated from Minor) |
| **WCAG** | 1.4.3 Contrast (Minimum) |
| **File** | [`components/site/language-toggle.tsx:16`](../../../../Landings/landing-imobiliaria/components/site/language-toggle.tsx) |
| **Expected** | Inactive locale label meets at least 3:1 contrast in all rendered contexts. |
| **Actual** | Inactive locale uses `text-text-3`. In Imobiliárias light context (now active): `#9E9C98 on #F7F6F3` = **2.3:1** — fails WCAG 1.4.3 for all text sizes. WCAG disabled-state exemption (1.4.3 exception) requires the component to be truly non-interactive — these are live navigation links, so the exemption does not apply. |
| **Impact** | Users relying on minimum contrast (low vision, poor lighting) cannot reliably read the inactive language option. This is now a shipping blocker when the light front is live. |
| **Remediation** | Change inactive locale class from `text-text-3` to `text-text-2` in `language-toggle.tsx:16`. In light context: `#6B6860 on #F7F6F3` = 5.4:1 — AA pass. Alternatively, style inactive links as `opacity-50` and add `aria-disabled="true"` if you intend them as truly non-interactive placeholders (then WCAG exemption applies). |
| **Status** | Open — requires product decision (live link vs disabled placeholder) + one-line fix |

---

## Minor

### H-001 — `SeguroPrestamista` kicker index silently dropped by `MonoKicker`

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/seguro-prestamista.tsx:11`](../../../../Landings/landing-imobiliaria/components/site/seguro-prestamista.tsx) |
| **Actual** | `<MonoKicker index={t("kickerIndex")} label={t("kicker")} />` — `index="→ 03"` passed but no `total` prop. `mono-kicker.tsx:21` requires `{index && total && ...}` to render the counter prefix; without `total`, only the label renders. The `→ 03` counter is silently dropped. |
| **Note** | This pattern is consistent with `ImobiliariaCapture` (`→ 01`) and `InvestidorCapture` (`→ 02`) which also pass `index` without `total`. Either (a) the `→ NN` style was intended to render without a total (in which case `MonoKicker` needs an update to support index-only), or (b) a `total` prop should be added to all section kickers. The hero kicker (passing both `index="01"` + `total="04"`) is the only one that renders the counter. |
| **Remediation** | Option A: Update `MonoKicker` to render the index prefix when only `index` is provided (remove the `&&total` gate for the `→ NN` format). Option B: Add `total` to all section kickers. Option C: Remove `kickerIndex` from section messages and document that section kickers are label-only by design. |
| **Status** | Carry forward — needs design decision |

### G-001 — Art37 section kicker is label-only (consistent behavior, document intent)

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/art37.tsx:11`](../../../../Landings/landing-imobiliaria/components/site/art37.tsx) |
| **Actual** | `<MonoKicker label={t("kicker")} />` — no `index` prop. Other capture sections define `kickerIndex` in messages (even though it silently drops per H-001). Art37 has no `kickerIndex` at all. |
| **Remediation** | If section kickers are label-only by design, align all sections (remove `kickerIndex` from messages, remove `index` props) and document. If a counter is wanted, add `kickerIndex` to art37 messages. |
| **Status** | Carry forward — clarify and document intent |

### G-002 — `SeguroPrestamista` item text uses `text-text` instead of `text-text-2`

| | |
|---|---|
| **Severity** | Minor |
| **File** | [`components/site/seguro-prestamista.tsx:22`](../../../../Landings/landing-imobiliaria/components/site/seguro-prestamista.tsx) |
| **Actual** | `<p className="font-sans text-base-sm leading-relaxed text-text">` — item text uses `text-text` (primary, `#1A1A1A` in light) rather than `text-text-2` (secondary, `#6B6860`). All other sections use `text-text-2` for supporting body/note text. |
| **Impact** | Minor visual inconsistency — items read at full primary weight. Contrast is not an issue. |
| **Remediation** | Change `text-text` → `text-text-2` on the `<p>` inside the `<li>` at line 22, if items are supporting evidence. Keep `text-text` if items are primary declarations and document the intent. |
| **Status** | Carry forward |

### D-003 — Both packages share one design project config

| | |
|---|---|
| **Severity** | Minor |
| **File** | `.design/projects/landing/config.json` |
| **Note** | Both `Landings/landing-investidor/` and `Landings/landing-imobiliaria/` share the same design project at `.design/projects/landing/`. Reviews, build logs, and manifests co-mingle. |
| **Remediation** | Either (a) create a separate `.design/projects/landing-imobiliaria/` project with its own config, or (b) update the shared config to list both implementation targets and tag review entries by package. |
| **Status** | Carry forward |

---

## Resolved (this review pass)

| Issue | Description | Resolution |
|-------|-------------|------------|
| F-001 | `landing-imobiliaria` rendered Investidor dark theme | `data-front="imobiliarias"` added to `<html>` at `layout.tsx:63` |
| F-002 | `InvestidorCapture` mounted on imobiliária page | `InvestidorCapture` removed from `page.tsx`; `ImobiliariaCapture` is sole capture |

---

## Counts

| Severity | Count |
|----------|-------|
| Critical | 0 |
| Major | 1 (A-003 — disabled toggle contrast in light context) |
| Minor | 4 (H-001, G-001, G-002, D-003) |

**A-003 is the only blocker.** The fix is one line: change `text-text-3` → `text-text-2` for the inactive locale in `language-toggle.tsx:16`. Alternatively, treat inactive locales as `aria-disabled` placeholders (WCAG exemption then applies — but requires product agreement that `en` is not a live link).
