# TanStack Start + Shadcn/ui + Tailwind v4

A minimal, production-ready boilerplate for modern web apps.

## Quick Start

```bash
git clone https://github.com/quinnsprouse/tanstack-shadcn-starter.git
cd tanstack-shadcn-starter
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## What's Included

- **TanStack Start** - Full-stack React with SSR
- **Shadcn/ui** - Beautiful, accessible components
- **Tailwind v4** - Latest CSS framework with OKLCH colors
- **TypeScript** - Full type safety
- **React 19** - Latest React features
- **AI Docs** - CLAUDE.md & AGENTS.md for AI assistants

## Commands

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npx shadcn@canary add [component]  # Add components
```

## Project Structure

```
src/
├── routes/       # Pages and API routes
├── components/   # React components
├── lib/         # Utilities
└── styles/      # Global styles
```

## Adding Routes

Create files in `src/routes/`:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => <div>About</div>
})
```

## Server Functions

```tsx
import { createServerFn } from '@tanstack/react-start'

const getData = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Runs on server
    return { data: 'example' }
  })
```

## License

MIT