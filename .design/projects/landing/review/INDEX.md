# QA Review
> Phase: review | Project: landing | Brand: tga (MUTAV) | Updated: 2026-05-21

## Verdict

**Conditional Pass** — No Critical or Major issues. Six Minor issues, one of which is a broken UX flow (D-001: MidCta CTA links to `#investidor-form` which is not mounted). Brand contract is clean. Recommend fixing D-001 before shipping.

## QA Validation

| Chunk | File | ~Lines |
|-------|------|--------|
| Acceptance Report | [acceptance-report.md](./acceptance-report.md) | ~150 |
| Issues | [issues.md](./issues.md) | ~130 |

## Summary

- Brand contract: Pass — 0px radius, no shadows, no glass, no `#22C55E`, no transforms
- Token usage: Pass — semantic tokens throughout; one documented hardcoded hex (`#1A1A1A` on amber button)
- Three-layer hierarchy: Pass — Geist H1/H2 + Inter body + JetBrains Mono labels/data across all sections
- Tabular numerals: Pass — Market stat values use `font-mono` (activates `tnum`)
- Accessibility: Mostly Pass — `aria-busy`/`role="alert"` wired; minor issues in Tiers (A-002) and Faq (A-003)
- Responsive: Pass — all sections use `lg:grid-cols-*` breakpoints
- 0 Critical, 0 Major, 6 Minor issues

## Open Minor Issues

| Issue | Description | Remediation |
|-------|-------------|-------------|
| T-001 | Team photos exist in `public/team/` but component renders placeholder text | Wire `draau.jpg` / `jubs.png` via `<Image>` in `team.tsx` |
| A-001 | Pending "sending…" text is `aria-hidden` in `waitlist-form.tsx:32` | Remove `aria-hidden` or add `role="status"` |
| A-002 | Tiers buttons missing `aria-pressed` for active tier state | Add `aria-pressed={isActive}` to tier buttons |
| A-003 | `<dt>` inside `<button>` in Faq — invalid HTML | Replace `<dt>` with `<span>` inside button |
| D-001 | MidCta CTA links to `#investidor-form` which is not mounted; VisionArc/InvestidorCapture built but not in page | Mount `InvestidorCapture` or fix anchor; update STATE.md |
| L-001 | LP ships English-only; locale strategy not documented in STATE.md | Document product decision in STATE.md |

## Implementation path

`Landings/landing-investidor/` (current, from `feat/lp-investidor-components` branch)

## Related

- [acceptance-report.md](./acceptance-report.md)
- [issues.md](./issues.md)
- [build/INDEX.md](../build/INDEX.md)
- [critique/prioritized-fixes.md](../critique/prioritized-fixes.md)
- [critique/accessibility-fixes.md](../critique/accessibility-fixes.md)
- [design/INDEX.md](../design/INDEX.md)
