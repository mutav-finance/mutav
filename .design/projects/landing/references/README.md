# References — TGA Landing

> **For Claude (any session):** This directory holds source material from the founders that should inform the landing copy and design. Drop assets in the matching subfolder per the naming convention below. The next `/gsp-project-research`, `/gsp-project-design`, or `/gsp-project-critique` run will discover and consume them.

Project root: `.design/projects/landing/`
This file: `.design/projects/landing/references/README.md`

---

## Drop assets here

### `figma/` — Figma file URLs and screenshots

| Asset | Filename | Notes |
|-------|----------|-------|
| Primary Figma URL | `figma/url.txt` | Plain text. **One URL per line.** First line is the canonical file. |
| Additional URLs (component library, prototype) | `figma/url-{name}.txt` | E.g. `url-prototype.txt`, `url-components.txt`. One URL each. |
| Screenshot exports (optional) | `figma/screen-{name}.png` | E.g. `screen-hero.png`. Only if Figma is unreachable. |
| Designer notes (optional) | `figma/NOTES.md` | Free-form. Designer intent, decisions log. |

**Important:** Claude reads Figma URLs directly via the Figma MCP server. **Don't export every screen as PNG** — pasting the URL is enough.

### `pitch/` — Pitch deck

| Asset | Filename | Notes |
|-------|----------|-------|
| Pitch deck PDF | `pitch/deck.pdf` | Primary asset. Versioned PDFs OK as `deck-v2.pdf` etc. |
| Slide images (optional) | `pitch/slide-NN.png` | Zero-padded. Only if PDF is unavailable. |
| Founder summary | `pitch/SUMMARY.md` | One-pager: problem, solution, audience, key numbers. Welcome but not required. |
| Speaker notes / script (optional) | `pitch/script.md` | Verbatim phrasings worth lifting into landing copy. |

### `photography/` — Founder photography (optional)

If the team decides to ship real founder photos instead of the designed amber-initial alternative:

| Asset | Filename | Notes |
|-------|----------|-------|
| Draau portrait | `photography/draau.jpg` (or `.webp`) | Square crop preferred. Min 512×512. |
| jubs portrait | `photography/jubs.jpg` (or `.webp`) | Same spec. |
| Photographer credit (optional) | `photography/CREDIT.md` | Name + license note. |

If you skip this folder, the landing keeps its current designed alternative — no action needed.

### Other reference classes

For anything that doesn't fit above (mood boards, voice memos, market research notes), create a sibling subfolder:

```
references/{class}/
references/{class}/README.md   ← one line describing what's inside
references/{class}/{file}      ← the asset
```

---

## What NOT to drop here

- ❌ **Generated code** → goes in `landing/`
- ❌ **Brand source files** → live in `.design/branding/tga/`
- ❌ **GSP phase outputs** → those live under `.design/projects/landing/{brief,research,design,critique,build,review}/`
- ❌ **Personal scratch / drafts** → keep elsewhere (e.g. `~/scratch/`)
- ❌ **Secrets, API keys, or credentials** — never. Use `.env.local` in `landing/`.

---

## How a Claude session picks this up

When the next `/gsp-project-*` skill runs in this repo, the agent will:

1. Glob `.design/projects/landing/references/**/*` to discover assets
2. Read `figma/url*.txt` and fetch Figma context via the Figma MCP server
3. Read `pitch/deck.pdf` directly (Read tool supports PDFs)
4. Read `photography/*.{jpg,webp,png}` directly (Read tool is multimodal)
5. Cross-reference findings against `.design/projects/landing/brief/scope.md` and the existing `messages/{pt-BR,en}.json` copy
6. Surface concrete edits as a focused PR or as comments on [issue #13](https://github.com/mutav-finance/mutav/issues/13)

You don't need to invoke anything special — just drop the files and continue. Run `/gsp-project-critique` next time you want a fresh pass that consumes the new references.

---

## Quick reference for Draau

```
cd ~/Projects/mutav-finance/mutav   # or wherever this repo lives

# Figma
echo "https://www.figma.com/design/<fileKey>/<name>" \
  > .design/projects/landing/references/figma/url.txt

# Pitch deck
cp ~/Downloads/tga-pitch.pdf \
  .design/projects/landing/references/pitch/deck.pdf

# Founder photos (if shooting them)
cp ~/Downloads/draau.jpg \
  .design/projects/landing/references/photography/draau.jpg

git add .design/projects/landing/references/
git commit -m "refs: add Draau's Figma + pitch + photography for landing"
git push
```

After committing, open Claude Code in the repo root and run `/gsp-project-critique` — the next pass will pick up the new references and propose copy/design adjustments.

---

Last updated: 2026-05-03
