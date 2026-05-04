# Reference Specs
> Phase: research | Project: landing | Generated: 2026-05-02

Implementation guidance ready for the design and build phases. Each spec ties to a section of the page or a cross-cutting system, includes the mechanic in concrete terms (CSS / DOM / props), and links to the canonical source.

## Hero typography stack

Three typefaces, three roles, three responsive scales:

| Layer | Face | Weight | Desktop | Tablet | Mobile | Tracking | Line height |
|---|---|---|---|---|---|---|---|
| Declaration (H1) | Geist | 700 | 64–72px | 56px | 40–48px | -0.04em | 1.05 |
| Explanation (manifesto) | Inter Variable | 400–500 | 18–20px | 18px | 16–18px | 0 | 1.5 |
| Evidence (mono kicker) | JetBrains Mono Variable | 500 | 11–12px | 11px | 11px | 0.10em UPPER | 1.2 |

CSS implementation (Tailwind v4 utilities):

```html
<span class="font-mono text-xs uppercase tracking-[0.10em] text-text-secondary">
  01 / 04 — começamos pela garantia
</span>
<h1 class="font-geist font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] leading-[1.05] text-text-primary">
  Aluguel garantido,<br>do jeito que deveria funcionar.
</h1>
<p class="font-sans text-lg md:text-xl leading-relaxed text-text-secondary max-w-prose">
  O protocolo que não falha quando o mercado falha.
</p>
```

`font-feature-settings: "tnum" 1, "ss01" 1` on Mono (tabular numerals + the alternate set if the project ships JetBrains Mono Nerd Font; otherwise just `tnum`).

The brand contract enforces three layers per section. Section index Mono → Geist headline → Inter body, in that DOM order, every section without exception. This becomes the page's *signature rhythm* — once a reader has scrolled past three sections, the rhythm becomes the sound of the brand.

## The architectural grid texture

24px dot grid at 3% opacity on the Investidor canvas. CSS:

```css
.bg-grid-investidor {
  background-image: radial-gradient(rgba(42, 45, 51, 1) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

Apply to the body or to specific sections. The Imobiliárias canvas does **not** carry the grid (per brand contract — "no texture on Imobiliárias"). Carry a top-to-bottom fade-out gradient on the hero so the grid dissolves into the canvas:

```css
.hero::after {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 60%, var(--color-canvas));
  pointer-events: none;
}
```

This is the only gradient allowed in the system, and only because it's serving the grid texture, not the color. The brand contract bans gradients-as-color; gradient-as-mask is acceptable.

## The live amber dot

Shape: 6px circle. Color: `--color-amber`. Animation:

```css
@keyframes tga-live-pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
.tga-live-dot {
  width: 6px; height: 6px;
  background-color: var(--color-amber);
  border-radius: 0;          /* not a circle — a square per brand contract */
  animation: tga-live-pulse 2s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .tga-live-dot { animation: none; opacity: 1; }
}
```

**Resolve a known contradiction:** the brand contract says `0px border-radius EVERYWHERE`. The brief calls the dot a "6px amber dot" (visually circular). The pattern YAML (`tga.yml#patterns.nav.investidor.live-dot`) is the source of truth — confirm during install whether the dot is intended as a square 6px patch or a circle. If circle, this is the single brand exception; if square, no exception, and "dot" is metaphorical.

**Recommendation:** square 6×6 amber patch. It reads as a status indicator, it preserves the brand contract, and it visually echoes the architectural pixel-grid energy of the Bloomberg reference. Document the choice as deliberate.

## The bifurcation cards composition

DOM (simplified):

```html
<section aria-labelledby="bifurcation-heading" class="py-24 md:py-32">
  <h2 id="bifurcation-heading" class="sr-only">Escolha sua trilha</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
    <a href="#proprietario-form" data-card="proprietario" class="card-bifurcation">
      <span class="font-mono text-xs uppercase tracking-[0.10em] text-text-secondary">01 — IMOBILIÁRIA</span>
      <h3 class="font-geist font-bold text-3xl mt-4 text-text-primary">Sou proprietário ou imobiliária.</h3>
      <p class="font-sans text-sm mt-3 text-text-secondary">Você quer que o aluguel chegue. Sem fórmula, sem fila.</p>
    </a>
    <a href="#investidor-form" data-card="investidor" class="card-bifurcation">
      <span class="font-mono text-xs uppercase tracking-[0.10em] text-text-secondary">02 — INVESTIDOR</span>
      <h3 class="font-geist font-bold text-3xl mt-4 text-text-primary">Sou investidor.</h3>
      <p class="font-sans text-sm mt-3 text-text-secondary">Você quer yield real, com colateral verificável.</p>
    </a>
  </div>
</section>
```

The `gap-px bg-border` trick gives a single 1px line between the cards without requiring a divider element — the grid gap shows the parent's background. On `<lg` the cards stack and the gap becomes a horizontal rule.

`.card-bifurcation`:

```css
.card-bifurcation {
  background: var(--color-canvas);
  padding: 32px 40px 40px;
  display: block;
  border: none;
  text-decoration: none;
  transition: background-color 150ms;
}
.card-bifurcation:hover {
  background: var(--color-surface-1);
}
.card-bifurcation:focus-visible {
  outline: 1px solid var(--color-amber);
  outline-offset: -1px;
}
```

The hover state uses surface-1 (one tonal step up) — Lithic Stacking. No transform, no shadow. The focus ring is an inset 1px amber outline (the brand contract's focus convention).

## The vision arc

Horizontal layout on `lg+`:

```html
<ol class="vision-arc grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0 relative">
  <!-- amber rule connecting all four -->
  <span aria-hidden class="absolute left-0 right-0 top-[20px] h-px bg-amber hidden md:block"></span>
  <li class="vision-arc__step">
    <span class="font-mono text-xs uppercase tracking-[0.10em] text-amber">01</span>
    <h3 class="font-geist font-bold text-2xl mt-6">garantia locatícia</h3>
    <p class="font-sans text-sm mt-2 text-text-secondary">Repasse automático ao proprietário quando o inquilino para de pagar.</p>
  </li>
  <!-- … 02, 03, 04 -->
</ol>
```

Mobile (`<md`): the same `<ol>` with `flex-col` and a vertical 1px rule on the left. The data structure is identical; only the rule's orientation changes via responsive utilities.

The amber rule is the only place the accent color appears in this section — keeping the <5% scarcity discipline intact.

## The waitlist form (per-front)

Server Action skeleton (Next.js 15):

```typescript
// app/(marketing)/_actions/join-waitlist.ts
'use server';
import { z } from 'zod';
import { kv } from '@vercel/kv';
import { Resend } from 'resend';

const schema = z.object({
  email: z.string().email(),
  audience: z.enum(['proprietario', 'investidor']),
  locale: z.enum(['pt-BR', 'en']),
  company_url: z.string().max(0), // honeypot — must be empty
});

export async function joinWaitlist(formData: FormData) {
  const parsed = schema.safeParse({
    email: formData.get('email'),
    audience: formData.get('audience'),
    locale: formData.get('locale'),
    company_url: formData.get('company_url') ?? '',
  });
  if (!parsed.success) return { ok: false as const };

  const { email, audience, locale } = parsed.data;
  const key = `waitlist:${audience}:${email.toLowerCase()}`;
  const exists = await kv.exists(key);
  if (!exists) {
    await kv.set(key, { ts: Date.now(), locale });
    await kv.lpush(`waitlist:${audience}`, email.toLowerCase());

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TGA <oi@tga.protocol>',
      to: email,
      subject: locale === 'en' ? 'On the list' : 'Você está na lista',
      react: ConfirmationEmail({ audience, locale }),
    });
  }
  return { ok: true as const, email, audience };
}
```

Form markup (proprietário variant — light front):

```html
<form action={joinWaitlist} data-front="imobiliarias" id="proprietario-form">
  <input type="hidden" name="audience" value="proprietario" />
  <input type="hidden" name="locale" value="pt-BR" />
  <input type="text" name="company_url" tabIndex={-1} autoComplete="off"
         aria-hidden="true" className="sr-only" />

  <label htmlFor="email-prop" className="block font-sans font-medium text-sm">
    Seu e-mail
  </label>
  <input id="email-prop" type="email" name="email" required
         className="mt-2 w-full h-12 border border-border bg-surface-1 px-4
                    font-mono text-sm text-text-primary
                    focus:border-amber focus:outline-none" />

  <button type="submit"
          className="mt-4 h-12 px-6 bg-amber text-canvas font-sans font-medium">
    avise-me
  </button>
</form>
```

`sr-only` is the standard Tailwind utility for visually hiding while keeping screen-reader accessibility — except here we want the honeypot hidden from screen readers too (`aria-hidden`) and from keyboard (`tabIndex={-1}`).

## The team section

Two founders, asymmetric weights:

```html
<section class="grid grid-cols-1 lg:grid-cols-12 gap-8 py-24">
  <article class="lg:col-span-7">
    <img src="/draau.webp" alt="" width="320" height="320"
         class="w-40 h-40 object-cover grayscale" />
    <h3 class="font-geist font-bold text-2xl mt-8">Draau</h3>
    <p class="font-sans text-base text-text-secondary mt-2">
      Engenharia de protocolo. Solana / Anchor.
    </p>
    <p class="font-mono text-xs text-text-secondary mt-3">
      ex-{role} · Colosseum Frontier 2026
    </p>
  </article>
  <article class="lg:col-span-5">
    <!-- jubs, mirrored layout -->
  </article>
</section>
```

The 7/5 column split is intentionally uneven — the brief calls for asymmetry on the team section. The portrait is grayscale (mood-board reference) at exactly 160px square. No rounded crops.

## Mono kicker rhythm (cross-cutting)

Every section opens with a Mono kicker that gives the section an index. The full sequence:

| Section | Kicker |
|---|---|
| Hero | `01 / 04 — começamos pela garantia` |
| The Gap | `02 / 04 — onde o mercado falha` |
| Vision Arc | `03 / 04 — horizonte` |
| Bifurcation | `04 / 04 — escolha sua trilha` |
| Capture (proprietário) | `→ 01 — IMOBILIÁRIA` |
| Capture (investidor) | `→ 02 — INVESTIDOR` |
| Team | `equipe` |
| Footer | mono everything |

The team and footer break the `0X / 04` pattern intentionally — they're outside the narrative spine.

## Sources
- Vercel Geist font — https://vercel.com/font
- Tailwind v4 theme variables — https://tailwindcss.com/docs/theme
- Next.js 15 Server Actions — https://nextjs.org/docs/app
- Resend + Vercel KV template — https://vercel.com/templates/next.js/waitly
- TGA brand patterns YAML — `.design/branding/tga/patterns/tga.yml`
- TGA visual north star — `.design/branding/tga/discover/visual-ref/DESIGN.md`

## Related
- [scope.md](../brief/scope.md)
- [target-adaptations.md](../brief/target-adaptations.md)
- [technical-research.md](./technical-research.md)
- [ux-patterns.md](./ux-patterns.md)
