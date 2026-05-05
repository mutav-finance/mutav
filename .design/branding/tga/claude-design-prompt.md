# TGA — Design Prompt for Claude Design
**Token de Garantia de Aluguel · Website · April 2026**

---

## WHAT WE ARE BUILDING

Three web pages for TGA, a blockchain-based real estate guarantee protocol operating on Solana. The product has two user fronts — investors (dark, data-dense) and real estate agencies/landlords (light, warm, clear) — plus a portal that splits between them.

---

## BRAND SYSTEM — BINDING RULES

**Philosophy: Precision Brutalism.**
Every element either carries information or creates space for information. No gradients. No shadows. No glass. No rounded corners — `border-radius: 0px` on every element without exception. Depth is created by surface stacking (darker/lighter background steps), never by shadows or blur.

**Three-layer typography hierarchy — mandatory on every screen:**
1. **Declaration** → Geist Bold. What it is. What happened.
2. **Explanation** → Inter Regular/Medium. Why it matters.
3. **Evidence** → JetBrains Mono. Machine-verifiable proof: amounts, timestamps, hashes.

**Typefaces:**
- `Geist Bold` — headlines, hero text, declarations only. Weight 700 only.
- `Inter` — body, UI labels, navigation. Weights 400, 500, 600.
- `JetBrains Mono` — all numeric data, timestamps, hashes. Always with tabular numerals.

**Amber is scarce.** The amber accent appears on: logo, CTAs, active states, live indicators. Never on icons. Never as background fills. Never decorative. Under 5% of screen pixels at any time.

**Motion:** One ambient animation only — a 6px amber square pulsing (opacity 1→0.4→1, 2s linear) indicating live data. All other states change at 150ms ease-out, color only. No scale transforms. No translate animations.

**Borders:** 1px solid only. Never 2px. Never dashed (except pending states). Never rounded.

**Icons:** Phosphor Icons, weight `light` only. Never colored amber. Inherit foreground color.

**Spacing:** 8px base grid. All spacing is a multiple of 8.

**Layout:** 12-column grid, 24px gutter, 32px margin, max-width 1440px.

---

## COLOR SYSTEMS

### Dark Front (Investidor)
```
Canvas:     #0E0F11  — page background
Surface 1:  #16181C  — card backgrounds
Surface 2:  #1E2126  — modals, elevated
Surface 3:  #252830  — hover states
Border:     #2A2D33
Text:       #F0F0EE  — primary (warm white)
Text 2:     #8A8F99  — secondary, labels
Text 3:     #555B66  — disabled, placeholders
Accent:     #E8A020  — amber (scarce)
Success:    #3DAB72  — confirmed states
Error:      #C94040  — failure states
```
Background texture: 24px repeating architectural grid at 3% opacity (lines, not noise).

### Light Front (Imobiliárias)
```
Canvas:     #F7F6F3  — warm off-white (never pure #FFFFFF as base)
Surface 1:  #FFFFFF  — card backgrounds
Surface 2:  #EEEDEA  — grouped content
Border:     #D9D7D2
Text:       #1A1A1A  — primary
Text 2:     #6B6860  — secondary
Text 3:     #9E9C98  — placeholders
Accent:     #C47E10  — amber adjusted for light (same brand, lower luminosity)
Success:    #2E8B5A  — payment confirmed
Error:      #B83232  — default alert
```
No background texture on the light front.

---

## NEVER

- Gradients as fills on any surface
- `box-shadow` or `drop-shadow` on any element
- `border-radius` other than `0px`
- `backdrop-filter: blur()`
- `#22C55E` (ANSI green) — use `#3DAB72` instead
- Amber-colored icons
- `text-shadow` or glow effects
- `scale()` or `translate` on hover/active
- `#000000` pure black as background
- Rounded badges — always square indicator (6×6px)
- Blockchain/Web3 jargon in the Imobiliárias front

---

## PAGE 1: PORTAL (Split-Screen Entry)

### Concept
A single viewport. No scroll. The screen is divided vertically into two halves — left is dark (Investidor), right is light (Imobiliárias). The split is a hard edge, 1px `#2A2D33` divider — no fade, no gradient blur. The two halves are siblings of the same system; the contrast between them communicates the product's duality.

### Layout
- **Full viewport height. No scroll.**
- The `tga` wordmark is centered at the top, floating above the split. On the dark half: amber `#E8A020`. On the light half: amber `#C47E10`. Use a split text effect or position it centered so it bridges both halves — the logo belongs to both.
- The visual split is 50/50 — no weighting toward either side.
- A single line of copy sits centered, spanning both halves, below the logo: the call to action that prompts the user to choose.
- Below the CTA copy: two buttons, side by side, centered — one for each destination.

### Left Half — Investidor
- Background: `#0E0F11`
- Architectural grid texture (3% opacity, 24px lines)
- Subtle ambient text or data in the background: a fragment of the protocol log in JetBrains Mono `#2A2D33` (barely visible — it's texture, not content). Example: `2026-04-15T14:23:17Z  LIQUIDAÇÃO_EXECUTADA   CTR-0027841  R$47.284.000`
- No imagery. The depth is typographic.
- Button (left): `Sou investidor` — outline style: 1px border `#E8A020`, transparent fill, `#E8A020` text, Inter Medium 14px. Hover: `#E8A020` fill, `#0E0F11` text.

### Right Half — Imobiliárias
- Background: `#F7F6F3`
- No texture — clean warm canvas
- A subtle property card fragment visible in the background: `Apt 42 · Rua Padre João Manuel · R$2.847/mês · Contrato ativo` — very light opacity, suggesting the product beneath.
- Button (right): `Sou imobiliária / proprietário` — filled style: `#C47E10` fill, `#1A1A1A` text, Inter Medium 14px. Hover: `#9E6A10` fill.

### Central CTA Copy
Centered, spanning both halves. Use Geist Bold for the headline, Inter for the sub-line.

- **Headline:** `Capital ou imóvel. O protocolo é o mesmo.`
- **Sub-line** (Inter Regular 16px, neutral tone — mid-grey that works on both backgrounds): `Escolha seu acesso.`

### Logo Treatment
- `tga` — Geist Bold, lowercase, centered, large (64px or larger)
- Positioned above the CTA, centered across both halves
- The letter forms should bisect the split — half in dark context, half in light context, with the amber color unifying both

---

## PAGE 2: LANDING PAGE INVESTIDOR (Dark Front)

### Concept
This is a financial instrument's offering memorandum, designed for a protocol that replaces the back office of Brazilian real estate guarantees. Ana opens this page and immediately knows: this is not a startup pitch deck. This is infrastructure. Every design decision communicates density, precision, and auditability.

No lifestyle imagery. No people. No interiors. The data is the content. The protocol log is the visual. The NAV is the hero.

**Creative direction — Precision Brutalism, dark:**
The page reads like Bloomberg Terminal married to a law firm's offering memorandum. Dense, organized, exacting. Amber appears only where it needs to — the logo, one CTA, the live pulse indicator. Everything else is the obsidian-to-warm-white hierarchy. The architectural grid texture hums in the background at near-zero opacity, suggesting infrastructure without decorating it. Copy is declarative, specific, audit-ready. "4h37m" not "fast." "R$47.284.000" not "robust fund." "847 contratos ativos" not "growing portfolio."

### Sections

**Nav**
- Background `#0E0F11`, height 56px, 1px `#2A2D33` bottom border
- Left: `tga` wordmark in Geist Bold, amber `#E8A020`
- Center: nav links in Inter Medium 14px `#8A8F99`. Items: `Protocolo` · `Rendimento` · `Audit` · `Contratos`
- Right: `Conectar carteira` — outline button (1px `#E8A020` border, transparent fill, `#E8A020` text)
- Live indicator: 6px amber square pulsing + `NAV ao vivo · R$47.2M` in JetBrains Mono 12px

**Hero**
- Background: `#0E0F11` with 24px architectural grid texture (3% opacity)
- Left column (60%): typography + CTA
  - Label above headline: `DASHBOARD INVESTIDOR` — JetBrains Mono 11px, `#8A8F99`, ALL CAPS, +2% tracking
  - Headline: `Yield real. Colateral verificável. Sem intermediário.` — Geist Bold 64px, `#F0F0EE`, -4% tracking, leading 1.05, left-aligned
  - Sub: `O único protocolo na Solana com exposição ao mercado brasileiro de garantias locatícias.` — Inter Regular 18px, `#8A8F99`
  - CTA: `Conectar carteira` — 1px `#E8A020` border, transparent fill, `#E8A020` text, Inter Medium 14px, 40px height. Hover: `#E8A020` fill, `#0E0F11` text.
  - Below CTA: three data points in JetBrains Mono 13px `#555B66`: `847 contratos ativos · NAV R$47.284.000 · 0 repasses em atraso`
- Right column (40%): a live NAV chart component — amber line on obsidian background, no fill under the line, x-axis timestamps in JetBrains Mono 11px. This IS the hero image. No photography.

**Protocol Stats Bar**
- Full-width band, background `#16181C`, 1px `#2A2D33` top and bottom border
- Four stats in a row, separated by 1px `#2A2D33` vertical dividers:
  - `NAV Total` → `R$47.284.000` (Geist Bold 36px `#F0F0EE`)
  - `Contratos Ativos` → `847` (Geist Bold 36px `#F0F0EE`)
  - `Liquidações (30d)` → `23` (Geist Bold 36px `#3DAB72`)
  - `Em Default` → `0` (Geist Bold 36px `#F0F0EE`)
  - All labels in Inter Medium 12px `#8A8F99` ALL CAPS
  - All values in JetBrains Mono (tabular numerals)

**How It Works — Protocol Architecture**
- Section title: `COMO FUNCIONA` — JetBrains Mono 11px `#8A8F99` ALL CAPS, +2% tracking
- Three columns with 1px `#2A2D33` dividers between them
- Each column: a number (01 / 02 / 03 in Geist Bold amber), a declaration in Geist Bold 22px `#F0F0EE`, an explanation in Inter Regular 16px `#8A8F99`
  1. `Contrato registrado` — "Cada contrato de garantia é registrado onchain via TGA Core. Endereço de programa público."
  2. `Inadimplência detectada` — "O protocolo monitora vencimentos. Inadimplência dispara liquidação automática em até 6h."
  3. `Repasse executado` — "TGA Core liquida o valor ao proprietário. O evento é público, timestampado, auditável."

**Live Protocol Log**
- Section title: `LOG DO PROTOCOLO — AO VIVO`
- Terminal-style table. Background `#16181C`, 1px `#2A2D33` border around the block.
- Column headers: JetBrains Mono 11px `#555B66` ALL CAPS: `TIMESTAMP / EVENTO / CONTRATO / VALOR / HASH`
- 5–6 rows of live data, color-coded by event type:
  - `LIQUIDAÇÃO_EXECUTADA`: `#3DAB72`
  - `CONTRATO_APROVADO`: `#E8A020`
  - `INADIMPLÊNCIA_DETECTADA`: `#C94040`
  - `NAV_ATUALIZADO`: `#B87010`
- At the bottom of the block: `↗ Ver log completo no explorador` — Inter Medium 13px `#E8A020`

**Trust Infrastructure**
- Three cards side by side, background `#16181C`, 1px `#2A2D33` border
- Card 1: `Audit` — report link, audit firm name, date, hash in JetBrains Mono
- Card 2: `Código` — GitHub link to smart contract repository, last commit date
- Card 3: `Endereço do Programa` — Solana program address in JetBrains Mono, link to Solscan

**CTA Footer Block**
- Full-width, background `#16181C`
- Headline: `Verificar antes de investir.` — Geist Bold 48px `#F0F0EE`
- Sub: `O protocolo é público. O log é aberto. O código está auditado.` — Inter Regular 18px `#8A8F99`
- CTA: `Conectar carteira` — same amber outline button

---

## PAGE 3: LANDING PAGE IMOBILIÁRIAS (Light Front)

### Concept
This is the most professionally trustworthy thing Lucas has ever seen in the Brazilian rental market. It is not a technology startup. It is not a bank. It is a guarantee system that works automatically, and the page's only job is to make Lucas understand what happens when his tenant stops paying — and that TGA handles it before he has to ask.

No blockchain. No tokens. No Solana. No "smart contracts." Lucas does not see the mechanism — he sees the outcome.

**Creative direction — Structured Warmth, light:**
The page feels like it was designed by someone who deeply respects a landlord's time. Clean, organized, hierarchical. The warm canvas (`#F7F6F3`) and white surfaces give it the feeling of a well-run imobiliária's portal — not a tech product, not a fintech startup. The amber appears on CTAs and active states: a signal that the system is alive and working, not a decorative flourish. Photography is warm, specific, Brazilian — a real São Paulo apartment in morning light, a landlord reviewing a document at a desk. Faces partially visible or not at all. No stock photography affect. Copy is short, declarative, specific. "R$2.847,00" not "valor integral." "4h37m" not "rapidamente." Full stops after every sentence. Three sentences maximum per block.

### Sections

**Nav**
- Background `#F7F6F3`, height 56px, 1px `#D9D7D2` bottom border
- Left: `tga` wordmark in Geist Bold, amber `#C47E10`
- Center: `Como funciona` · `Cobertura` · `Perguntas frequentes`  — Inter Medium 14px `#6B6860`. Active: `#1A1A1A` with 2px `#C47E10` bottom border
- Right: `Entrar` (Inter Regular 14px `#6B6860`) + `Proteger meu imóvel` (filled amber button: `#C47E10` fill, `#1A1A1A` text)

**Hero**
- Background `#F7F6F3`
- Two-column layout
- Left column (55%):
  - Label above headline: `GARANTIA LOCATÍCIA` — Inter Medium 12px `#9E9C98`, ALL CAPS, +1% tracking
  - Headline: `Quando o inquilino para de pagar, você recebe.` — Geist Bold 48px `#1A1A1A`, -1% tracking, leading 1.15
  - Sub: `Sem formulário. Sem fila. Sem telefonema. O protocolo executa.` — Inter Regular 18px `#6B6860`. Three sentences. Full stop after each.
  - CTA: `Proteger meu imóvel` — `#C47E10` fill, `#1A1A1A` text, Inter Semi-bold 15px, 48px height, 0px radius
  - Below CTA: `Já tem uma imobiliária parceira?` — Inter Regular 14px `#9E9C98` + `Entrar →` `#C47E10`
- Right column (45%): Photography. A real São Paulo apartment — morning light, warm grade, lived-in space, no people visible. Full bleed within the column, no caption.

**Promise Strip**
- Full-width, background `#FFFFFF`, 1px `#D9D7D2` top and bottom border, 32px padding
- Three items separated by 1px `#D9D7D2` dividers:
  1. `Repasse automático` — `Inadimplência detectada → repasse em até 6 horas. Sem ação sua.`
  2. `Sem burocracia` — `Nenhum formulário. Nenhuma ligação. Nenhuma fila. O sistema executa.`
  3. `Registro verificável` — `Cada repasse tem data, hora e comprovante. Consulte seu histórico a qualquer momento.`
- Each item: label in Inter Semi-bold 16px `#1A1A1A`, body in Inter Regular 14px `#6B6860`

**How It Works — Lucas's Version**
- Section background: `#F7F6F3`
- Title: `Como funciona` — Geist Bold 36px `#1A1A1A`
- Sub: `Três etapas. Nenhuma delas exige algo de você.` — Inter Regular 18px `#6B6860`
- Three steps, left to right, numbered (01/02/03 in amber `#C47E10` Geist Bold):
  1. **`Contrato ativo`** — "Seu imóvel está coberto desde o primeiro dia. Você recebe a confirmação por e-mail."
  2. **`Inadimplência detectada`** — "Se o inquilino não pagar, o sistema identifica automaticamente. Você recebe uma notificação."
  3. **`Pagamento realizado`** — "O repasse cai na sua conta em até 6 horas. Sem ligação. Sem formulário. Sem espera."
- At step 3: add a mock notification card — background `#FFFFFF`, 1px `#D9D7D2` border, 4px `#2E8B5A` top stripe. Content: `Pagamento realizado · R$2.847,00 · 18h22 de hoje · Tempo desde notificação: 4h37m`

**Social Proof — Specific Numbers**
- Background `#FFFFFF`, 1px `#D9D7D2` border, padding 48px
- Title: `O que o sistema já fez.` — Geist Bold 32px `#1A1A1A`
- Three large numbers in Geist Bold 48px `#1A1A1A`, with JetBrains Mono labels:
  - `847` contratos ativos
  - `R$412.000` em repasses (últimos 30 dias)
  - `4h37m` tempo médio de repasse
- Below: `Consultar histórico completo →` — Inter Medium 14px `#C47E10`

**For Imobiliárias (B2B block)**
- Background `#F7F6F3`, 1px `#D9D7D2` top border
- Two-column: left photography (property manager at a desk, warm, professional), right copy
- Copy:
  - Label: `PARA IMOBILIÁRIAS` — Inter Medium 12px `#9E9C98` ALL CAPS
  - Headline: `Ofereça cobertura para cada contrato do seu portfólio.` — Geist Bold 36px `#1A1A1A`
  - Body: `Integração simples. Contratos gerenciados em um painel. Seus clientes recebem — você mantém a relação.` — Inter Regular 16px `#6B6860`
  - CTA: `Falar com a equipe` — outline button: 1px `#C47E10` border, `#C47E10` text, transparent fill

**CTA Footer Block**
- Background `#C47E10` (this is the only section where amber is a full background — used as a closing statement, never as a surface system)
- Headline: `Seu imóvel coberto a partir de hoje.` — Geist Bold 40px `#1A1A1A`
- Sub: `Cadastro em menos de 5 minutos.` — Inter Regular 18px `#1A1A1A` at 70% opacity
- CTA: `Proteger meu imóvel` — `#1A1A1A` fill, `#F7F6F3` text, Inter Semi-bold 15px

---

## VOICE RULES FOR COPY

**Investidor front (Ana):**
- Specific over vague: "4h37m" not "rápido." "R$47.284.000" not "robusto."
- The protocol is the subject, not the team: "O protocolo executa" not "Nós garantimos."
- Every claim has a verification path: amounts link to Solscan, audit links to report.
- No exclamation marks. No emojis. No enthusiasm signals.
- Short sentences. 4–8 words in headlines.

**Imobiliárias front (Lucas):**
- No blockchain terminology — ever. No "Solana," "token," "onchain," "smart contract," "DeFi."
- Call it "TGA" as a brand name, never as a protocol description.
- Call payments "repasse" — never "liquidação."
- "Você" as address. Short. Specific. Full stops.
- No jargon of any kind.

**Both fronts:**
- Never mention competitors.
- Never claim "first" or "only" without a verifiable qualifier.
- No startup language: "disruptivo," "inovador," "revolucionário," "game-changer."
