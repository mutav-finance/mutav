# Accessibility Patterns
> Phase: research | Project: landing | Generated: 2026-05-02

WCAG 2.2 AA is the success-criteria target the brief commits to. This chunk goes deeper than checklist compliance — it identifies the *specific* a11y questions the TGA design must answer (focus order on bifurcation, screen-reader flow on the per-front waitlist forms, reduced-motion for the live amber dot, contrast on amber on light) and the patterns that resolve them.

## Color contrast on the dual-front canvas

The brand contract claims 16.9:1 for `#F0F0EE` on `#0E0F11` (verified, that's AAA). The risk surfaces are:

- **Amber `#E8A020` on `#0E0F11` (Investidor canvas):** 6.92:1 — passes AA for normal text, passes AAA for large text. Safe.
- **Amber `#C47E10` on `#F7F6F3` (Imobiliárias canvas):** 4.61:1 — passes AA for normal text, **fails** AAA for normal text. Acceptable per AA target but design phase should keep amber confined to large text + UI components on the light surface.
- **`#1A1A1A` on amber `#C47E10` (Imobiliárias button):** 7.04:1 — passes AAA. The brand spec is right to forbid white-on-amber here; white on `#C47E10` would be 2.86:1 and unusable.
- **`#8A8F99` (text-secondary, Investidor) on `#0E0F11`:** 6.46:1 — passes AA. Watch the `<sm` text uses; if used at 11px JetBrains Mono for the locale toggle, AA needs 4.5:1, and 6.46 holds.
- **`#5A5C61` (text-secondary, Imobiliárias) on `#F7F6F3`:** 6.93:1 — passes AA, very close to AAA. Safe.

**Action:** before final design, run all dark-front + light-front color pairs through WebAIM's contrast checker. Document the matrix in the install manifest.

## Focus order on the bifurcation cards

The bifurcation moment is the single most-failable a11y surface on the page. Two cards, each containing internal interactive children (the form that expands below). Patterns:

- **Tab order must reflect reading order.** Card 1 (proprietário) → Card 2 (investidor) → form fields of whichever card was activated. *Not* card 1 → card 1 form → card 2 → card 2 form. Use DOM order to enforce; resist any CSS `order` reshuffle that breaks the tabflow.
- **Each card is a single focusable element**, not a focus trap. The card itself is a `<button>` (or `role="button"` div with `tabIndex={0}`); the click expands the form below in a sibling region. The form below is a separate set of focusable elements with its own logical order.
- **Activating a card moves focus to the now-revealed form's first input.** This is the pattern WCAG 2.4.3 ("Focus Order") expects — when an interaction reveals new content, focus moves into the new content. Without this, keyboard users have to tab through the rest of the card's static content before reaching the form.
- **`aria-expanded` on each card** with the boolean reflecting whether the form below is shown. Screen reader announces "Sou proprietário, button, expanded" / "collapsed".
- **`aria-controls`** on each card pointing to the id of its corresponding form region. Screen reader can navigate from the card to the controlled region directly.

The brief specifies that *both* forms are visible (one in the dark default front, one in the light data-front section). If both are always visible — the cards don't actually toggle visibility, they just smooth-scroll to the relevant form — then `aria-expanded`/`aria-controls` are inappropriate. Use `aria-describedby` instead, pointing each card to a short summary of the form section. The "click" becomes a focus-and-scroll affordance, which is even better for keyboard users.

**Recommendation:** the second pattern (always-visible, click-to-scroll) is simpler, has better SEO (both forms render server-side, both fields are crawlable), and is more accessible. Reject the toggle-show pattern unless there's a strong design reason otherwise.

## Form labels, errors, and the audience-tag carrying

For the waitlist forms (one per front), the WCAG-AA-compliant structure:

- **`<label>` element explicitly associated** with each input via `htmlFor`/`id`. Visible label, not placeholder-as-label. The brand contract specifies "Inter Medium 13px" labels — this is correct, just confirm it ships as a real label element.
- **`type="email"` + `required`** for native browser validation. Good baseline, but native messages aren't styled for the brand. Override with custom validation that announces via `aria-live="polite"` region adjacent to the input.
- **Error region:** `aria-describedby` on the input pointing to a `<div role="alert">` that renders below the input only when there's an error. Use the brand `--color-error` per active front (the YAML defines this).
- **Audience tag (the `proprietario` / `investidor` value):** since the brief uses two separate forms, the audience is implicit per form. The audience value should be a `<input type="hidden" name="audience" value="proprietario">` — programmatic, not visible, not focusable. Screen readers ignore hidden inputs by default, which is correct here (the user has already committed by being on the form).
- **Honeypot:** `aria-hidden="true"` and `tabIndex={-1}` on the honeypot input. Screen readers and keyboard users skip it; bots fill it.
- **Submit button:** real `<button type="submit">`. The brand label is `[ avise-me ]` / `[ entrar na lista ]` — the brackets are decorative and screen readers should *not* announce them. Use `aria-label="Avise-me"` to clean the announcement, or wrap the brackets in `<span aria-hidden="true">` if the design wants them visible but not announced.
- **Success state:** when the form submits, render a server-confirmed receipt region with `role="status"` + `aria-live="polite"`. Screen reader announces "Recebido. seuemail@dominio.com adicionado à lista de proprietários." without the user having to navigate.

## Reduced-motion: the live amber dot

The single ambient animation in the system. WCAG 2.3.3 (Animations from Interactions, AAA) and the broader `prefers-reduced-motion` convention require the animation to be honorable.

- **Default:** `@keyframes tga-live-pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } }`, 2s linear infinite. Opacity-only — no transform, no size change, no position shift. This is the safest possible class of animation.
- **Reduced-motion:**

  ```css
  @media (prefers-reduced-motion: reduce) {
    .tga-live-dot { animation: none; opacity: 1; }
  }
  ```

  The dot stays present, fully visible, just static. No alternative needed because the dot's *meaning* (the protocol is alive) is fully conveyed by its presence — the pulse is decoration, not information.

- **No additional animation.** No hover scaling, no scroll-triggered reveals, no parallax. The brand contract's "no transform animations on hover/active. 150ms color/border transitions only" is the right discipline. Ship it.

## Headings, landmarks, and skip links

A single-page landing is structurally simple but the App Router shell makes a few traps easy to fall into:

- **One `<h1>` per page** — the hero guiding line. *"Aluguel garantido, do jeito que deveria funcionar."* No exceptions; if the manifesto reads as a second headline, structure it as `<p>` styled large, not `<h2>`.
- **`<h2>` for each section header** (the-gap, vision-arc, bifurcation, capture, team, footer). Skip levels are a SC 1.3.1 violation; don't jump to `<h4>` because Inter sub-line styling looks similar.
- **Landmark roles:** `<header>`, `<main>`, `<footer>` — Next.js App Router gives you `<main>` automatically. `<nav>` for the top bar, with an `aria-label="Principal"` to disambiguate from the locale-toggle nav.
- **Skip-to-content link:** `<a href="#main">Pular para o conteúdo</a>` as the first interactive element in the document, visually hidden until focused. Standard pattern, costs nothing, helps keyboard users on a long page.
- **Section landmarks:** wrap each section in `<section aria-labelledby="…">` where the labelledby points to the section's `<h2>` id. Screen reader gets a clean section list.

## Language tagging for pt-BR + en

`<html lang="pt-BR">` (or `lang="en"` on the English route — next-intl handles this automatically through the locale prop). Verify by inspecting the generated HTML on each route post-deploy. Mistagging costs you screen-reader pronunciation correctness and search-engine localization.

If any en page contains pt-BR snippets (e.g., a Portuguese product name in an English page), wrap the snippet in `<span lang="pt-BR">…</span>`. For the TGA landing this likely happens with "garantia locatícia" appearing in English copy — tag it.

## Touch targets and tap zones

WCAG 2.5.5 (Target Size, AAA) recommends 44×44 CSS px minimum. WCAG 2.5.8 (Target Size Minimum, AA) says 24×24 with exceptions. The brand contract's button heights:

- Investidor button: 40px tall. **Below the 44px AAA target, above the 24px AA target.** Acceptable per the brief's AA commitment, but pad horizontally so the tap area is at least 44×44 effective. The brief already specifies "16–24px hit area where heights are tighter".
- Imobiliárias button: 48px tall. Passes AAA.
- Locale toggle: 11px Mono in a 32px-tall row. This is the riskiest touch target — wrap in a `<button>` with `padding: 8px 12px` so the effective tap zone is 32×~50px.

## Sources
- W3C, "Web Content Accessibility Guidelines (WCAG) 2.2" — https://www.w3.org/TR/WCAG22/
- Silktide, "WCAG 2.4.3 Focus Order" — https://silktide.com/accessibility-guide/the-wcag-standard/2-4/navigable/2-4-3-focus-order/
- Be Accessible, "Forms Accessibility for Screen Readers" — https://beaccessible.com/post/forms-accessibility/
- W3C, "Understanding SC 2.3.3 Animation from Interactions" — https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
- MDN, `prefers-reduced-motion` — https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- WebAIM Contrast Checker — https://webaim.org/resources/contrastchecker/
- Pope.tech, "Design accessible animation" — https://blog.pope.tech/2025/12/08/design-accessible-animation-and-movement/

## Related
- [scope.md](../brief/scope.md)
- [technical-research.md](./technical-research.md)
- [recommendations.md](./recommendations.md)
