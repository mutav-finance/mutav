# Prioritized Fixes
> Phase: critique · Project: landing · 2026-05-02

Tagged severity: **Critical** (must fix before ship), **Important** (high priority, address in build), **Polish** (if time allows). Style-level issues prefix `[STYLE]`; everything else is screen-level.

---

## Critical (must fix)

None. The design has zero brand-contract violations and no usability catastrophes. The accessibility-fixes file lists three contrast bumps that are also tagged Critical there — they belong in build, but they are documented inline in the design specs and require token-level changes (no design-revision loop needed).

---

## Important (high priority, address during build)

### 1. Expand form error states beyond "invalid email"
**Screens:** [screen-06](../design/screen-06-proprietario-capture.md), [screen-07](../design/screen-07-investidor-capture.md)
**Issue:** Both capture sections specify only one error string: *"E-mail inválido. Verifique e tente de novo."* The Server Action `joinWaitlist` will return at minimum: format error, duplicate email, rate-limit, backend outage. Today, all four fail modes look identical to the user.
**Fix:** Define the four expected states in `app/(marketing)/_actions/join-waitlist.ts`:
- `invalid_email` → *"E-mail inválido. Verifique e tente de novo."* / *"Invalid email. Check it and try again."*
- `already_subscribed` → *"Esse e-mail já está na lista."* / *"That email is already on the list."* (success-tone, not error-tone — bump color from `--color-error` to `--color-text-2`, keep `[role=alert]` semantics so screen readers still announce it)
- `rate_limited` → *"Muitas tentativas. Tente novamente em alguns minutos."* / *"Too many attempts. Try again in a few minutes."*
- `server_error` → *"Não foi possível salvar agora. Tente novamente."* / *"Couldn't save right now. Try again."*

The `WaitlistForm` shared component should accept `errorState` as a typed union and render the appropriate copy + color.

### 2. Augment submit-pending state with non-visual feedback
**Screens:** [screen-06](../design/screen-06-proprietario-capture.md), [screen-07](../design/screen-07-investidor-capture.md)
**Issue:** The pending state is `opacity: 0.4` + `disabled` only. Sighted users with low vision or in bright environments may not register the opacity shift. Nielsen H1 (Visibility of system status) scored 4 partly because of this.
**Fix:** Add `aria-busy="true"` on the button during pending. Add a Mono-register status string below the button (`enviando…` / `sending…`) that fades in with the existing `[role=status]` aria-live region. The string disappears when the response resolves into either success or error. No spinner — opacity + status text is the busy state vocabulary, consistent with the brand's anti-spinner stance in `micro-interactions.md`.

### 3. Lock the post-submit behavior unambiguously
**Screens:** [screen-06](../design/screen-06-proprietario-capture.md), [screen-07](../design/screen-07-investidor-capture.md)
**Issue:** Screen 07 documents that the verifiability link stays visible after success. Screen 06 doesn't explicitly describe whether the form chrome is replaced wholesale or augmented. The two screens should match each other.
**Fix:** In both capture specs, document explicitly:
- The form's input + button + LGPD consent line are replaced by the success block (`<div role="status">` Mono receipt).
- The dignity line (*"Vamos te avisar quando estiver pronto. Não vamos te encher."*) is **kept** above the success block as a continuation of voice.
- Focus moves to the success block when it renders (`role=status` + `tabindex="-1"` + JS focus shift).
- For Investidor, the verifiability link stays visible below the success block.
- For Proprietário, no equivalent persistent affordance — Lucas leaves the section (or scrolls to the team section).
- No re-submit is offered. A user with a different email reloads the page or returns later.

### 4. Resolve the founder photography decision before build
**Screens:** [screen-08](../design/screen-08-team.md)
**Issue:** Marked open question. The team section reads radically different in each direction (editorial photo vs designed initials). The design correctly refuses to ship in-between, but build cannot start the team PR without this decision.
**Fix:** Founders pick one of two paths and confirm in `STATE.md § Open questions` before build PR 5 (team + footer):
- **Path A (photo):** commission a 30-min editorial shoot. Grayscale + 1.1 contrast, 160×160 square, 0px radius. Provide WebP + AVIF at 1×/2×/3× via `next/image`.
- **Path B (designed):** Geist Bold 64px lowercase initial (`d` for Draau, `j` for jubs) in `var(--color-accent)` on `var(--color-canvas)` square with 1px `var(--color-border)` outline. Pure CSS, no raster.

Either path is on-brand. Mixing photo + designed across the two founders is **not** on-brand — flag as a build-time anti-pattern.

### 5. Lock or omit jubs's track-record line
**Screens:** [screen-08](../design/screen-08-team.md)
**Issue:** Placeholder copy `ex-{role}` will read as a literal string if shipped. The design specifies graceful collapse to name + role only — but the decision must be made, not deferred.
**Fix:** Either (a) jubs supplies a single Mono evidence line by build PR 5, or (b) the build ships without the Mono line for jubs and Draau symmetrically (so the asymmetry doesn't read as "jubs is weaker"). Don't invent a track record.

### 6. Confirm community channel(s) for footer column 3
**Screens:** [screen-09](../design/screen-09-footer.md)
**Issue:** `comunidade` column has Twitter + Telegram (or Discord) as TBD. Two unconfirmed URLs cannot ship as link text.
**Fix:** Per `BRIEF.md § Open questions`, founders confirm community channel choice (Telegram, Discord, X-only, or all three) before build PR 5. The design explicitly says: ship only the confirmed channels — empty placeholders are out of contract. Acceptable shipped states: just `x.com/tgaprotocol`, just X + Telegram, X + Discord, etc. Not acceptable: `[telegram TBD]` link text.

### 7. Confirm the colosseum jury URL or omit
**Screens:** [screen-09](../design/screen-09-footer.md)
**Issue:** Footer column 2 needs the actual judges URL or only `copilot` ships.
**Fix:** Confirm jury URL before build PR 5. If unconfirmed, ship column 2 with only `copilot` — the design already handles the single-link case.

---

## Polish (if time allows, post-launch iteration)

### 8. Pre-validate email input before enabling submit
**Screens:** [screen-06](../design/screen-06-proprietario-capture.md), [screen-07](../design/screen-07-investidor-capture.md)
**Issue:** A user submitting an empty or malformed email pays a roundtrip + error redraw before getting feedback (Nielsen H5 — Error prevention).
**Fix:** Disable the submit button until the input matches `:valid` (via `:invalid` styling on the form + `disabled` derived from `useFormState` or simple HTML5 validation). When disabled, the button uses the brand's `disabled` state (`opacity: 0.4`, `cursor: not-allowed`). Trade-off: this adds client-side JS or a `:has()` selector — both acceptable. Defer if PR scope is tight.

### 9. Add an `sr-only` section-anchor nav for keyboard power users
**Screens:** [screen-01](../design/screen-01-nav.md)
**Issue:** Power keyboard users (likely Ana) often expect skip-to-section landmarks beyond a single `Pular para o conteúdo` link. The page is a single scroll; this is a nice-to-have, not a must.
**Fix:** Inside `<header>`, after the skip link, add `<nav aria-label="Sections" class="sr-only focus-within:not-sr-only">` containing anchor links to `#hero`, `#the-gap`, `#vision-arc`, `#bifurcation`, `#proprietario-form`, `#investidor-form`, `#equipe`, `#footer`. Visually hidden until any link inside receives focus, then revealed top-left as a stacked list (similar to the skip link's visual treatment). Non-blocking for launch.

### 10. Soft "como funciona" disclosure on proprietário side
**Screens:** [screen-06](../design/screen-06-proprietario-capture.md)
**Issue:** Lucas may want a one-line "what does my email get used for" beyond the LGPD consent boilerplate. Nielsen H10 (Help & documentation) scored 4 partly here.
**Fix:** Optional inline disclosure between the three sentences and the form: a single Mono 11px line *"O que você recebe: um e-mail quando o cadastro abrir. Sem newsletter, sem promoções."* The brand voice ("dignity over urgency") accommodates this. Defer if copy authority isn't ready.

### 11. CI guard: grep for `bg-gradient-` and `box-shadow` in the codebase
**Screens:** all
**Issue:** The hero's bottom mask uses `linear-gradient` legitimately as a mask. There is risk that another gradient creeps in via shadcn defaults or Tailwind utilities during build, and the brand contract is gradient-zero in color (only mask gradients permitted).
**Fix:** Add a build-time grep to the CI workflow that fails on `bg-gradient-`, `from-`, `via-`, `to-` in `components/**` (allow in `app/**` only inside the hero's mask layer), and on `box-shadow:` in `components/**`. This protects the brand contract at the codebase level.

### 12. Optional: tighten the responsive copy fold for the H1 on mobile
**Screens:** [screen-02](../design/screen-02-hero.md)
**Issue:** The H1 has a hard `<br>` after the comma. On `<sm` (375px width), the H1 is 40px and the second line "do jeito que deveria funcionar." is two visual lines on the smallest devices.
**Fix:** Acceptable today (the H1 reads even at 5 visual lines). If polish is desired, soften the line break to a `text-wrap: balance` and let the browser distribute — but verify the intentional fold at the comma still happens on `lg+`. Defer.

---

## Style-level (would require `/gsp-brand-refine`)

None. The design honors `STYLE.md` and `tga.yml` as written. No bold bet is missing, no constraint is violated, no pattern is mismatched. Brand-level changes are not required to ship this design.

---

## Related
- [critique.md](./critique.md)
- [accessibility-fixes.md](./accessibility-fixes.md)
- [strengths.md](./strengths.md)
- [alternative-directions.md](./alternative-directions.md)
