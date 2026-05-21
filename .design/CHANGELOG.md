# Design CHANGELOG

Reverse-chronological record of GSP project completions across `.design/projects/`.

---

## [landing-imobiliaria] — 2026-05-20 (re-review pass 2: Conditional Pass)
> Brand: tga (MUTAV) | Scope: QA re-review pass 2 — F-001 + F-002 resolved; A-003 escalated to Major

**Resolved:** F-001 (`data-front="imobiliarias"` on `<html>`); F-002 (`InvestidorCapture` removed from imobiliária page)
**Remaining:** A-003 (Major) — disabled `en` toggle `#9E9C98 on #F7F6F3` = 2.3:1, fails WCAG 1.4.3 in now-active light context; H-001/G-001/G-002/D-003 (Minor)
**PR:** —
**Files:** ~3 files changed (layout.tsx, page.tsx + prior component commits) → [review/INDEX.md](./projects/landing/review/INDEX.md)

## [landing-imobiliaria] — 2026-05-20 (re-review pass 1: Conditional Pass)
> Brand: tga (MUTAV) | Scope: QA review of `landing-imobiliaria` on `feat/lp-imobiliaria-components`; 2 Major issues found

**Added:** SocialProof, CustoAprovacao, Art37, SeguroPrestamista (new undesigned sections); ImobiliariaCapture cobertura block; founder photos (`draau.jpg`, `jubs.png`)
**Modified:** `page.tsx` — Bifurcation replaced with Art37; 4 new sections inserted; `imobiliaria-capture.tsx` cobertura block added; `team.tsx` photo extension fix (`jubs.jpg` → `jubs.png`)
**Patterns:** Three-layer hierarchy + semantic tokens maintained in all new sections; `font-mono` correctly used for CustoAprovacao stat values
**PR:** —
**Files:** ~8 files touched → [review/INDEX.md](./projects/landing/review/INDEX.md)

## [landing-investidor] — 2026-05-20 (re-review: Conditional Pass)
> Brand: tga (MUTAV) | Scope: QA re-review against updated codebase; page composition diverged; 2 Major issues found

**Added:** SocialProof, Market, Tiers, MidCta (new undesigned sections); ImobiliariaCapture (renamed from ProprietarioCapture, unmounted); founder photos committed (`public/team/draau.jpg`, `public/team/jubs.png`)
**Modified:** page.tsx — Bifurcation + ProprietárioCapture removed; 4 new sections inserted; i18n fully wired via next-intl; hero `timelineSignal` line added
**Patterns:** Single-front investidor-only composition confirmed; dual-front fold removed from page
**PR:** —
**Files:** ~12 files touched → [review/INDEX.md](./projects/landing/review/INDEX.md)

## [landing] — 2026-05-20 (review pass upgrade)
> Brand: tga (MUTAV) | Scope: QA pass upgraded from Conditional Pass → Pass; all 4 Major issues resolved

**Added:** /privacidade and /termos legal pages (LGPD-aligned stub, `robots: noindex`)
**Modified:** `aria-busy` in WaitlistForm now correctly wired (`isPending`), hero manifesto contrast fixed (`text-text-2`), all 51 arbitrary `text-[NNpx]` migrated to named scale utilities (`text-2xs` … `text-6xl`) with `@theme inline` type-scale tokens, Next.js upgraded 16.2.4 → 16.2.6 (13 Dependabot alerts closed)
**Patterns:** Type-scale tokens added to `@theme inline` per `tga.yml#tokens.typography.scale`
**PR:** [#9](https://github.com/mutav-finance/mutav/pull/9) (legal pages); #33 (Next.js security upgrade)
**Files:** ~8 files touched → [review/INDEX.md](./projects/landing/review/INDEX.md)

## [landing] — 2026-05-02
> Brand: tga | Scope: TGA single-route landing page — investor + imobiliária waitlist captures, two-front composition, naked typography

**Added:** SiteNav, Logo, LiveSquare, LanguageToggle, MonoKicker, Mono, Hero, TheGap, VisionArc, Bifurcation, ProprietarioCapture, InvestidorCapture, WaitlistForm, Team, SiteFooter, Button (4 variants), Card, Input, Label, joinWaitlist Server Action
**Modified:** —
**Patterns:** `[data-front]` CSS-var theming, 6×6 amber LiveSquare (replaces "live dot"), 1px amber rules via `gap-px bg-border`, three-layer typography (Geist/Inter/Mono) per section, architectural-grid body texture (24px lines @ 3% opacity), `prefers-reduced-motion` gating on the only ambient animation
**PR:** —
**Files:** ~22 files touched → [build/INDEX.md](./projects/landing/build/INDEX.md)
