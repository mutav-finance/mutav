# Install Manifest

> Phase: brief · Project: landing · Brand: tga · Target: shadcn (greenfield)

## Project init

```bash
# Next.js 15 with App Router, TypeScript, Tailwind v4, no src/ dir
bunx create-next-app@latest tga-landing \
  --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd tga-landing

# shadcn init
bunx shadcn@latest init
# When prompted:
#   Style: default
#   Base color: stone (closest match — overridden by tga.yml tokens)
#   CSS vars: yes
```

## Fonts

```bash
# Inter Variable + JetBrains Mono Variable via fontsource
bun add @fontsource-variable/inter @fontsource-variable/jetbrains-mono

# Geist comes via next/font/google in app/layout.tsx — no install needed
```

## Iconography

```bash
bun add @phosphor-icons/react
```

## shadcn primitives

The landing page uses a minimal primitive set. Each is overridden post-install to match `tga.yml` (0px radius, surface stacking, no shadows).

```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add input
bunx shadcn@latest add label
```

That is the entire shadcn footprint for the landing. No `dialog`, no `tabs`, no `accordion`, no `dropdown-menu` — the page does not need them.

## Post-install overrides

After `shadcn add`, edit each component to honor brand spec:

### `components/ui/button.tsx`
- Remove `rounded-*` from base + all variants → replace with `rounded-none`
- Variants needed: `outline` (Investidor primary CTA), `default` (Imobiliárias primary, amber fill + `text-[#1A1A1A]`), `ghost` (LanguageToggle, secondary)
- Sizes: keep `default` (h-10 = 40px Investidor) and add a `lg` (h-12 = 48px Imobiliárias)
- Remove `shadow-*` from all variants
- Remove `transition-all` → replace with `transition-[background-color,border-color,color] duration-150 ease-out`

### `components/ui/card.tsx`
- Remove `rounded-*` → `rounded-none`
- Remove `shadow-*` → no shadow
- Default `border` is `border-[--color-border]`

### `components/ui/input.tsx`
- Remove `rounded-*` → `rounded-none`
- Remove default `shadow-*`
- Investidor variant: `bg-transparent border border-[--color-border] text-[--color-text] focus-visible:border-[--color-accent] focus-visible:ring-0`
- Imobiliárias variant: `bg-[--color-surface] border border-[--color-border] text-[--color-text] focus-visible:border-[--color-accent] focus-visible:ring-0`
- Email input value uses Mono via `font-mono` utility, label uses Inter

## Waitlist backend (TBD at design time)

Pick **one** of:

```bash
# Option A — Resend (transactional + simple list)
bun add resend

# Option B — ConvertKit / Beehiiv (managed list)
# (no SDK — fetch to their API in a server action)

# Option C — Vercel KV + cron digest
bun add @vercel/kv
```

Recommend Resend for hackathon-stage simplicity (founders own the list, no third-party brand on the form, audience tag flows into Resend audiences).

## Token export

`app/globals.css` populated from `.design/branding/tga/patterns/tga.yml`:

```css
@import "tailwindcss";
@import "@fontsource-variable/inter";
@import "@fontsource-variable/jetbrains-mono";

@theme {
  /* Investidor (default) — see tga.yml#fronts.investidor.css-vars */
  --color-canvas:       #0E0F11;
  --color-surface:      #16181C;
  --color-surface-2:    #1E2126;
  --color-surface-3:    #252830;
  --color-border:       #2A2D33;
  --color-text:         #F0F0EE;
  --color-text-2:       #8A8F99;
  --color-text-3:       #555B66;
  --color-accent:       #E8A020;
  --color-accent-dim:   #9E6A10;
  --color-success:      #3DAB72;
  --color-error:        #C94040;

  --font-display:       var(--font-geist), ui-sans-serif, system-ui;
  --font-body:          "Inter Variable", ui-sans-serif, system-ui;
  --font-mono:          "JetBrains Mono Variable", ui-monospace, monospace;

  --radius:             0px;
  --radius-sm:          0px;
  --radius-md:          0px;
  --radius-lg:          0px;
}

/* Proprietário capture section — light front re-resolves semantic vars */
[data-front="imobiliarias"] {
  --color-canvas:       #F7F6F3;
  --color-surface:      #FFFFFF;
  --color-surface-2:    #EEEDEA;
  --color-border:       #D9D7D2;
  --color-text:         #1A1A1A;
  --color-text-2:       #6B6860;
  --color-text-3:       #9E9C98;
  --color-accent:       #C47E10;
  --color-accent-dim:   #FFF0D4;
  --color-success:      #2E8B5A;
  --color-error:        #B83232;
}

/* Live amber dot — only ambient animation in the system */
@keyframes tga-live-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
.tga-live-dot {
  animation: tga-live-pulse 2s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .tga-live-dot { animation: none; opacity: 1; }
}

/* Investidor canvas — architectural grid texture (3% opacity) */
body {
  background-color: var(--color-canvas);
  background-image:
    linear-gradient(to right,  rgba(240,240,238,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(240,240,238,0.03) 1px, transparent 1px);
  background-size: 24px 24px;
}
[data-front="imobiliarias"],
section[data-front="imobiliarias"] {
  background-image: none; /* Imobiliárias has no texture */
}
```

## i18n

```bash
# next-intl is the recommended choice for App Router
bun add next-intl
```

Routing pattern: `/` (pt-BR canonical) and `/en` for English. Locale files live in `messages/{locale}.json`.

## Verification (after scaffold)

- `bun run dev` boots without errors
- Hero text/canvas pair renders at AAA contrast (`#F0F0EE` on `#0E0F11`)
- Live amber dot pulses (and stops under reduced-motion)
- `data-front="imobiliarias"` wrapper re-themes a section without affecting siblings
- Email submit posts to chosen backend with `audience` tag
- Lighthouse run on a stub page already ≥ 90 perf, ≥ 95 a11y
