# Technical Research
> Phase: research | Project: landing | Generated: 2026-05-02

Stack-specific research for a Next.js 15 (App Router) + Tailwind v4 + shadcn/ui greenfield. Focus: i18n with next-intl, dual-front theming via `data-front` attribute, font-loading strategy that preserves Lighthouse 90+, waitlist backend selection, shadcn override mechanics that survive the brand contract, and the spam/abuse posture for an unauthenticated email form.

## Tailwind v4 dual-front theming via `data-front`

Tailwind v4's `@theme` directive is **global** — you cannot scope an `@theme` block to a selector. This is a confirmed limitation; the Tailwind team's recommendation (per GitHub Discussion #16292 and #15199) is to declare the canonical token set in `@theme` and override the underlying CSS variables inside data-attribute selectors in `@layer base`.

Concrete pattern for TGA:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  /* Investidor (default) tokens — these create utility classes */
  --color-canvas: #0E0F11;
  --color-surface-1: #16181C;
  --color-surface-2: #1E2126;
  --color-text-primary: #F0F0EE;
  --color-text-secondary: #8A8F99;
  --color-border: #2A2D33;
  --color-amber: #E8A020;
  --radius: 0;
}

@layer base {
  [data-front="imobiliarias"] {
    --color-canvas: #F7F6F3;
    --color-surface-1: #FFFFFF;
    --color-surface-2: #EDEBE6;
    --color-text-primary: #1A1A1A;
    --color-text-secondary: #5A5C61;
    --color-border: #D9D7D2;
    --color-amber: #C47E10;
  }
}
```

The proprietário-capture section wraps in `<section data-front="imobiliarias">…</section>` and the `bg-canvas`/`text-text-primary`/`border-border` utilities resolve to the light values inside that scope. **No JS, no theme provider, no flash of wrong theme on load.** This is the right architectural call for the brief.

Caveat: `@theme` registers utility *classes* but the in-scope override must reference variables Tailwind already knows about. Don't introduce new front-specific token names inside the override — re-use the canonical names.

## next-intl on App Router (pt-BR primary, /en secondary)

next-intl is the dominant pt-BR + en setup for Next.js 15 App Router as of 2026. Concrete setup notes for the brief:

- **Routing config:** `defineRouting({ locales: ['pt-BR', 'en'], defaultLocale: 'pt-BR' })`. Use the `as-needed` localePrefix strategy so the default locale serves at `/` and English at `/en` — exactly what the brief asks for.
- **Middleware:** the next-intl middleware handles redirect/rewrite. Cookie-based locale persistence is opt-in; for a marketing landing, prefer header-based negotiation on first visit and explicit `<Link locale>` toggling thereafter. No cookie banner needed if you stay header-based (relevant for LGPD — see `accessibility-patterns.md`).
- **Hreflang:** next-intl emits `Link` headers with `rel="alternate"` and `hreflang` automatically. Verify with `curl -I` post-deploy. Add `<link rel="alternate" hreflang="pt-BR" href="…">` and `<link rel="alternate" hreflang="en" href="…/en">` and `<link rel="alternate" hreflang="x-default" href="…">` (canonical pt-BR) inside `generateMetadata` for belt-and-suspenders SEO.
- **OG locale:** Next.js metadata API supports `openGraph.locale` and `openGraph.alternateLocale`. Set `pt_BR` as primary, `en_US` as alternate. The single Twitter Card tag is locale-agnostic.
- **Locale toggle UX:** the brief calls for `[ pt-BR / en ]` JetBrains Mono 11px in the nav. Implementation: `useLocale()` + `usePathname()` + `<Link href={pathname} locale={otherLocale}>`. Active locale stays in `--color-text-primary`, inactive in `--color-text-secondary`. No dropdown — one tap to swap.

**The catch:** next-intl's `<Link>` does not automatically preserve query strings. If the team adds analytics with UTM params, the toggle will lose them. Mitigate with `usePathname()` + `useSearchParams()` and reconstruct.

## Fonts: next/font/google for Geist, fontsource for the rest

Three font families on this brief: Geist 700, Inter Variable, JetBrains Mono Variable. Three load paths to choose between.

- **`next/font/google`** for all three. Pros: zero-config, automatic preload, automatic font-display swap, automatic subsetting per `weight` declaration. Cons: at build time hits Google's API (fine, served self-hosted in production).
- **`@fontsource-variable/*`** for all three. Pros: pinned to a package version, reproducible builds, no build-time external request. Cons: manual `@font-face` wiring, manual `font-display`, no automatic CLS protection (have to set `size-adjust` manually if you want zero CLS).
- **Hybrid (the brief's chosen path):** Geist via `next/font/google` (one weight only), Inter + JetBrains Mono via `@fontsource-variable/*`. This is a defensible call but mixing strategies costs about 30 lines of `globals.css` to wire the variable fonts properly.

**Recommendation for the design phase:** the brief's hybrid path is fine *if* the implementation uses CSS `font-display: swap` on the fontsource families and Next's automatic display strategy on Geist. The variable fonts (Inter, JetBrains Mono) load as a single woff2 each — total marketing-page font payload should sit at ~120–180KB compressed across all three. That is well within Lighthouse 90+ budget.

Subset Latin and Latin Extended (covers pt-BR diacritics — `ã`, `õ`, `ç`, `é`, `ê`, `í`, `ô`, `ú`). No need for Latin Extended-A unless the team adds Eastern European locales.

## Performance budget for Lighthouse 90+

The marketing landing should comfortably hit Lighthouse 90+ on mobile 4G. Targets the design phase should hold:

- **Total page weight (compressed):** <600KB. With three fonts at ~150KB, JS at ~120KB, CSS at ~20KB, HTML at ~20KB, that leaves ~290KB for images. Plenty for two founder portraits (WebP, ~80KB each) + a Solana monogram or judges logo if needed.
- **JS budget:** the App Router shell is the floor (~95KB gzipped for React + Next runtime as of Next 15). Any client component beyond the live-dot animation, the language toggle, and the form Server Action handler is a regression. Keep the page mostly Server Components.
- **Image strategy:** founder portraits as WebP, lazy-loaded below the fold (the team section is below the fold), sized exactly for layout (use `next/image` with explicit `width`/`height` to prevent CLS).
- **Critical CSS:** Tailwind v4's CSS-first build emits a small static stylesheet — no critical CSS extraction needed. The `@theme` block ships once, not per page.
- **Fonts FCP impact:** keep `font-display: swap`, don't preload more than the two heroic faces (Geist Bold for the hero, Inter Regular for body). JetBrains Mono Variable can lazy-swap; mono kicker text rendering with the fallback for ~100ms is invisible.

The single most likely Lighthouse regression risk is **layout shift from the live amber dot**. If the dot animates `transform: scale()` on the section that includes the nav, it can trigger CLS. The fix is the brief's animation spec — opacity-only, no transform. Hold the line.

## Waitlist backend: Resend + Vercel KV

Three viable architectures evaluated for this brief:

### Option A — Resend + Vercel KV (recommended)

- **Capture:** Server Action validates honeypot + email format → writes to Vercel KV (Upstash Redis under the hood) keyed by `waitlist:{audience}:{email}` with metadata `{ locale, ts, ua }`. Idempotent.
- **Confirmation email:** Server Action calls Resend `react-email` template, sends from `oi@tga.{tld}`. Single transactional email, no broadcast yet.
- **Broadcast (later):** add a Vercel Cron job that pulls from KV and sends Resend Broadcast batches when there's something to say. Keep it dormant until the team actually has news.
- **Cost:** Vercel KV free tier covers <10k entries; Resend free tier covers 3k emails/month. At hackathon-scale, ~$0.
- **Data ownership:** the email list lives in your KV instance, exportable any time. No vendor lock.
- **LGPD:** the entire stack is under your control — privacy policy, retention, deletion all live in your code, not a third party.

### Option B — ConvertKit (Kit) / Beehiiv

Pros: built-in segmentation, automation, drip campaigns, compliance UX out of the box. Cons: vendor lock on the list, monthly cost climbs once the team needs custom fields, the "newsletter platform" positioning is wrong for a protocol — when Lucas gets a newsletter-platform-shaped email, the trust signal degrades.

### Option C — Plain HTML form → Formspree / Basin / Web3Forms

Pros: zero infra. Cons: no segmentation, the team can't trigger personalized confirmations, audience-tag persistence is manual.

**Recommendation:** Option A. The hackathon-stage team owns the list, the LGPD posture is clean, and the architecture scales linearly into the dashboard launch (when SGR Core ships, the same email list flows into transactional receipts via the same Resend account).

## Form security posture

For an unauthenticated email form on a public marketing landing, the threat model is:

- **Bots auto-filling forms** (cheap, voluminous). Counter: invisible honeypot field. Add a `<input type="text" name="company_url" tabIndex={-1} autoComplete="off" style={{position:'absolute',left:'-9999px'}} aria-hidden />` and reject any submit where this field has a value. This is the dominant pattern in 2026 Next.js form posts and is preferable to CAPTCHA for both UX and brand reasons.
- **Disposable email domains.** Counter: optional, depends on team policy. The lighter touch is to accept and segment-flag; the heavier touch is to reject mailinator/yopmail/etc. via a static list. Recommend lighter — Lucas might use a generic gmail and Ana might use a `0xWhatever@protonmail.com`.
- **Rate-limit single-IP floods.** Counter: Vercel's edge middleware can rate-limit per IP using a sliding window in KV (3 submits per minute per IP is generous and rejects nothing legitimate).
- **Volunteered field stuffing** (a real human pasting JS payload). Counter: standard XSS-safe rendering on the confirmation surface (React handles this, just don't use `dangerouslySetInnerHTML`).

No reCAPTCHA. No hCaptcha. Both are visible, both compromise the brutalist aesthetic, both ship third-party JS that hits the perf budget. The honeypot + rate-limit combination handles the realistic attack surface.

## shadcn/ui override mechanics

shadcn ships components as source files in your repo, not as a runtime dependency. This is a feature for the TGA brief — overrides happen in your code, not in a config layer.

The brand contract requires:

- `--radius: 0` globally. Set in `globals.css` under `:root`.
- `box-shadow: none` on every component. shadcn's default Card, Dialog, Popover all have shadow utilities. Edit each component file post-`shadcn add` and strip the shadow classes. Do not try to override via Tailwind config alone — shadcn variants are inline classes in the component source.
- `border-radius: 0` on every component. The `--radius: 0` cascade catches most of it; double-check `Input`, `Button`, `Badge`, `Avatar` (Avatar has a hardcoded `rounded-full` you must remove or replace with a square crop).
- No glass / backdrop-blur. Sweep `backdrop-blur` and `bg-{color}/{opacity}` from any component you ship. Defaults in shadcn's `Sheet`, `Dialog`, and `DropdownMenu` use blur — strip them.

**CVA composition for per-front variants:** shadcn uses class-variance-authority. The right pattern for the per-front Imobiliárias / Investidor variants of the WaitlistForm button is a single CVA config with a `front` variant axis driven by the `data-front` cascade, *not* a separate component. This keeps the component generic and lets the cascade do the work.

## Sources
- Tailwind v4 docs, "Theme variables" — https://tailwindcss.com/docs/theme
- Tailwind GitHub Discussion #16292, "data-theme attribute targeting" — https://github.com/tailwindlabs/tailwindcss/discussions/16292
- Tailwind v4 launch — https://tailwindcss.com/blog/tailwindcss-v4
- next-intl App Router docs — https://next-intl.dev/docs/getting-started/app-router
- next-intl routing — https://next-intl.dev/docs/routing/configuration
- Next.js fonts — https://nextjs.org/docs/app/getting-started/fonts
- Fontsource Geist — https://fontsource.org/fonts/geist/install
- Resend + Vercel example — https://github.com/resend/resend-vercel-example
- Vercel waitlist template (Upstash + Resend) — https://vercel.com/templates/next.js/waitly
- Nikolai Lehbrink, "Honeypot for Next.js forms" — https://www.nikolailehbr.ink/blog/prevent-form-spamming-honeypot/
- shadcn theming docs — https://ui.shadcn.com/docs/theming
- Vercel "Geist + Tailwind" — https://vercel.com/font

## Related
- [scope.md](../brief/scope.md)
- [target-adaptations.md](../brief/target-adaptations.md)
- [accessibility-patterns.md](./accessibility-patterns.md)
- [recommendations.md](./recommendations.md)
