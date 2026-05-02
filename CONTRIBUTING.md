# Contributing to SGR

## Branch workflow

- `main` is protected — direct pushes are not allowed
- All changes go through pull requests
- PRs require **at least 1 approved review** before merging

## How to contribute

**1. Create a branch from `main`**

Use a descriptive name:

```bash
git checkout -b feat/risk-pool-logic
git checkout -b fix/escrow-settlement-bug
git checkout -b docs/update-whitepaper
```

Branch prefixes:
- `feat/` — new features
- `fix/` — bug fixes
- `docs/` — documentation only
- `refactor/` — code changes with no feature/fix impact
- `test/` — adding or updating tests
- `chore/` — build, config, tooling

**2. Make your changes**

Keep commits atomic and descriptive:

```bash
git commit -m "feat: add risk pool deposit instruction"
git commit -m "fix: handle zero-balance escrow edge case"
```

**3. Open a pull request**

- Target branch: `main`
- Fill out the PR description with context on what and why
- Link any relevant issues

**4. Review process**

- At least **1 team member must approve** before merging
- Resolve all review comments before requesting re-review
- Do not merge your own PR without approval

**5. Merge**

Once approved, the PR author merges. Use **squash merge** to keep `main` history clean.

## Code standards

- Rust/Anchor: run `cargo fmt` and `cargo clippy` before pushing
- TypeScript: run `prettier` and `eslint`
- Tests must pass — CI will block the merge if they don't

## Agent Skills

Coding-agent skills are vendored at `.claude/skills/` so every contributor gets them via `git pull` — no per-machine `npx` install needed. To add a new skill:

```bash
npx skills add <org>/<repo> --agent claude-code --skill '*' -y
git add .claude/skills/<skill-name> skills-lock.json
git commit -m "chore: add <skill-name> skill"
```

Then update the **Agent Skills** section of `README.md` with a setup + usage block (mirror the Colosseum / ETHGlobal entries) and open a PR.

Always install with `--agent claude-code` and run from the repo root so the skill lands project-scoped — never user-global.

## Questions

Open an issue or ping the team directly.
