# TanStack + shadcn Starter

Minimal starter for TanStack Start + React 19 + shadcn/ui (Base UI) + Tailwind v4.

## Quick Start

```bash
npx degit quinnsprouse/tanstack-shadcn-starter my-app
cd my-app
cp .npmrc.example .npmrc
# add your HugeIcons Pro token to .npmrc
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Daily Commands

```bash
npm run dev           # local app
npm run check         # format check + strict lint + typecheck + tests
npm run test          # run tests once
npm run test:watch    # test watch mode
npm run test:coverage # coverage report
npm run test:e2e      # Playwright smoke tests
npm run check:push    # check + e2e (same as pre-push hook)
npm run lint:fix      # auto-fix lint issues
npm run build         # production build
```

## Feedback Loop (DX)

Use this loop for every non-trivial change:

1. `npm run format`
2. `npm run check`
3. `npm run build` (before release/push)

Git hooks:

- pre-commit: `npx lint-staged` (fast staged-file formatting/linting)
- pre-push: `npm run check:push` (full gate + Playwright smoke)

## Agentation

- `agentation` is installed and auto-mounted in development mode.
- The toolbar is rendered by `/src/components/agentation-devtool.tsx`.
- Start the app with `npm run dev`, then use the bottom-right Agentation control to annotate UI.

## Testing Philosophy

- Prefer behavior tests through public interfaces.
- Do not test what static analysis already covers.
- ESLint + TypeScript own type errors, hook dependency mistakes, unused vars/imports, and style consistency.

## Stack

- TanStack Start (SSR/full-stack React)
- React 19 + TypeScript
- shadcn/ui on Base UI primitives
- Tailwind CSS v4
- Motion (`motion/react`)
- Vitest + Testing Library
- Playwright (browser smoke tests)

## Deterministic Tooling

- `packageManager` is pinned in `package.json`.
- `engines` are declared in `package.json`.
- `.nvmrc` is included for consistent Node version selection.

## HugeIcons Pro Setup

This repo uses `@hugeicons-pro/core-stroke-rounded`.

1. Buy/get a token from [hugeicons.com](https://hugeicons.com).
2. Copy `cp .npmrc.example .npmrc`.
3. Replace `YOUR_LICENSE_KEY_HERE` in `.npmrc`.
4. Run `npm install`.

`.npmrc` is gitignored. Never commit license keys.

## Project Layout

```txt
src/
  routes/       # file-based TanStack routes
  components/   # app + ui components
  lib/          # shared utils
  styles/       # global styles
```

## AI Agent Docs

- `AGENTS.md` is the source of truth.
- `CLAUDE.md` is symlinked to `AGENTS.md`.

## License

MIT
