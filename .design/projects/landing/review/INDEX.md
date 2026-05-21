# QA Review
> Phase: review | Project: landing | Brand: tga (MUTAV) | Updated: 2026-05-20

## Verdict

**Conditional Pass** — F-001 (`data-front="imobiliarias"`) and F-002 (`InvestidorCapture` removal) resolved. One Major issue remains: A-003 (disabled language toggle: `#9E9C98 on #F7F6F3` = 2.3:1 — fails WCAG 1.4.3 in the now-active light context). One-line fix: change `text-text-3` → `text-text-2` in `language-toggle.tsx:16`.

## QA Validation

| Chunk | File | ~Lines |
|-------|------|--------|
| Acceptance Report | [acceptance-report.md](./acceptance-report.md) | ~130 |
| Issues | [issues.md](./issues.md) | ~100 |

## Summary

- F-001 resolved: `data-front="imobiliarias"` on `<html>` at `layout.tsx:63` — Imobiliárias light front active
- F-002 resolved: `InvestidorCapture` removed from `page.tsx` — `ImobiliariaCapture` is sole capture form
- All 4 new components (SocialProof, CustoAprovacao, Art37, SeguroPrestamista) pass brand contract in light context
- A-003 escalated to Major: disabled `en` toggle fails WCAG 1.4.3 in light context (2.3:1)
- 0 Critical, 1 Major, 4 Minor issues

## Open Major Issue

| Issue | Description | Remediation |
|-------|-------------|-------------|
| A-003 | Disabled `en` toggle: `#9E9C98 on #F7F6F3` = 2.3:1 — fails WCAG 1.4.3; live link, no exemption | Change `text-text-3` → `text-text-2` in `language-toggle.tsx:16`; or add `aria-disabled` + product decision |

## Implementation path

`Landings/landing-imobiliaria/` (current, from `feat/lp-imobiliaria-components` branch)

## Related

- [acceptance-report.md](./acceptance-report.md)
- [issues.md](./issues.md)
- [build/INDEX.md](../build/INDEX.md)
- [critique/prioritized-fixes.md](../critique/prioritized-fixes.md)
- [critique/accessibility-fixes.md](../critique/accessibility-fixes.md)
- [design/INDEX.md](../design/INDEX.md)
