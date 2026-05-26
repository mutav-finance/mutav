# GSP Design Exports

> Load this file first, then load only the chunks needed for your task.

## Usage

This file is the entry point for coding agents consuming GSP design output.

1. Read this file to find chunk paths for your task
2. Load only the chunks relevant to your current screen or component
3. Each chunk is self-contained — follow `## Related` links for cross-references

## Quick Reference

- Building a screen? → Design table → load screen chunk + referenced components
- Need a component spec? → Components table (in brand system)
- Need color/type/spacing? → Foundations table (in brand system)
- Need project scope? → Brief table
- Need UX patterns or reference specs? → Research table

## Design System (Brand-Level)

<!-- BEGIN:system -->
| Section | Chunk | Lines |
|---------|-------|-------|
| Patterns YAML | [tga.yml](../../../branding/tga/patterns/tga.yml) | — |
| Style Guide | [STYLE.md](../../../branding/tga/patterns/STYLE.md) | — |
| Visual Guidelines | [guidelines.html](../../../branding/tga/patterns/guidelines.html) | — |
<!-- END:system -->

## Project Brief

<!-- BEGIN:brief -->
| Section | File |
|---------|------|
| Scope | [scope.md](../brief/scope.md) |
| Target Adaptations | [target-adaptations.md](../brief/target-adaptations.md) |
| Install Manifest | [install-manifest.md](../brief/install-manifest.md) |
<!-- END:brief -->

## Project Research

<!-- BEGIN:research -->
| Section | File |
|---------|------|
| UX Patterns | [ux-patterns.md](../research/ux-patterns.md) |
| Competitor UX | [competitor-ux.md](../research/competitor-ux.md) |
| Technical Research | [technical-research.md](../research/technical-research.md) |
| Accessibility Patterns | [accessibility-patterns.md](../research/accessibility-patterns.md) |
| Content Strategy | [content-strategy.md](../research/content-strategy.md) |
| Reference Specs | [reference-specs.md](../research/reference-specs.md) |
| Recommendations | [recommendations.md](../research/recommendations.md) |
<!-- END:research -->

## Design

<!-- BEGIN:design -->
### Screens

| # | Screen | File | Components Used |
|---|--------|------|-----------------|
| 01 | Nav | [screen-01-nav.md](../design/screen-01-nav.md) | Logo, LiveDot, LanguageToggle |
| 02 | Hero | [screen-02-hero.md](../design/screen-02-hero.md) | MonoKicker, SectionHeader |
| 03 | The Gap | [screen-03-the-gap.md](../design/screen-03-the-gap.md) | MonoKicker, SectionHeader, Mono |
| 04 | Vision Arc | [screen-04-vision-arc.md](../design/screen-04-vision-arc.md) | MonoKicker, SectionHeader, Mono, VisionArc |
| 05 | Bifurcation | [screen-05-bifurcation.md](../design/screen-05-bifurcation.md) | MonoKicker, BifurcationCards |
| 06 | Proprietário Capture | [screen-06-proprietario-capture.md](../design/screen-06-proprietario-capture.md) | MonoKicker, WaitlistForm, Button (imobiliarias), Input, Label |
| 07 | Investidor Capture | [screen-07-investidor-capture.md](../design/screen-07-investidor-capture.md) | MonoKicker, WaitlistForm, Button (investidor), Input, Label |
| 08 | Team | [screen-08-team.md](../design/screen-08-team.md) | MonoKicker, TeamSection |
| 09 | Footer | [screen-09-footer.md](../design/screen-09-footer.md) | LanguageToggle, FooterSection |

### Shared

| Section | File |
|---------|------|
| Personas | [personas.md](../design/shared/personas.md) |
| Information Architecture | [information-architecture.md](../design/shared/information-architecture.md) |
| Navigation | [navigation.md](../design/shared/navigation.md) |
| Micro-interactions | [micro-interactions.md](../design/shared/micro-interactions.md) |
| Responsive | [responsive.md](../design/shared/responsive.md) |
| Component Plan | [component-plan.md](../design/shared/component-plan.md) |
<!-- END:design -->

## Design Critique

<!-- BEGIN:critique -->
| Section | File |
|---------|------|
| Critique | [critique.md](../critique/critique.md) |
| Strengths | [strengths.md](../critique/strengths.md) |
| Prioritized Fixes | [prioritized-fixes.md](../critique/prioritized-fixes.md) |
| Alternative Directions | [alternative-directions.md](../critique/alternative-directions.md) |
| Accessibility Audit | [accessibility-audit.md](../critique/accessibility-audit.md) |
| Accessibility Fixes | [accessibility-fixes.md](../critique/accessibility-fixes.md) |
<!-- END:critique -->

## Build

<!-- BEGIN:build -->
| Section | File |
|---------|------|
| Build Manifest | [INDEX.md](../build/INDEX.md) |
| Implementation (investidor) | [`web/`](../../../../web/) |
| Implementation (imobiliaria) | [`Landings/landing-imobiliaria/`](../../../../Landings/landing-imobiliaria/) |
<!-- END:build -->

## QA Review

<!-- BEGIN:review -->
| Section | File |
|---------|------|
| Acceptance Report | [acceptance-report.md](../review/acceptance-report.md) |
| Issues | [issues.md](../review/issues.md) |
| Review Index | [INDEX.md](../review/INDEX.md) |
<!-- END:review -->
