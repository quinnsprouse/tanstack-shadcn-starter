# AI Assistant Guide for TanStack Start + Shadcn/ui Project

## Project Overview
This is a modern full-stack React application using TanStack Start, Shadcn/ui components, and Tailwind CSS v4.

## Tech Stack
- **Framework**: TanStack Start (Full-stack React with SSR)
- **UI Components**: Shadcn/ui (Base UI + Tailwind)
- **Icons**: HugeIcons Pro (stroke-rounded style)
- **Styling**: Tailwind CSS v4 with OKLCH colors
- **Language**: TypeScript
- **Build Tool**: Vite
- **React Version**: 19

## Project Structure
```
src/
├── routes/          # TanStack Start file-based routes
├── components/      # React components
│   └── ui/         # Shadcn/ui components
├── lib/            # Utility functions (e.g., cn() for classnames)
├── styles/         # Global styles and Tailwind config
│   └── app.css    # Main CSS file with theme variables
├── router.tsx      # Router configuration
└── routeTree.gen.ts # Auto-generated route tree (DO NOT EDIT)
```

## Key Commands
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npx shadcn@canary add [component]` - Add new Shadcn components

## Important Files
- `vite.config.ts` - Vite and TanStack Start configuration
- `tsconfig.json` - TypeScript configuration with path aliases
- `components.json` - Shadcn/ui configuration
- `src/styles/app.css` - Theme colors and Tailwind imports

## Routing
Routes are file-based in `src/routes/`. Each route file exports a Route object:
```tsx
export const Route = createFileRoute('/path')({
  component: ComponentName,
  loader: async () => { /* data fetching */ }
})
```

## Server Functions
Use `createServerFn` for server-side logic:
```tsx
const myServerFn = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Server-only code
    return data
  })
```

## Styling Guidelines
1. Use Tailwind utility classes
2. Use `cn()` helper from `@/lib/utils` for conditional classes
3. Theme colors are CSS variables (e.g., `bg-background`, `text-foreground`)
4. Dark mode: Add `dark` class to html element
5. OKLCH color space for better color consistency

## Component Usage
```tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
```

## Icon Usage
- Import icons from `@/components/icons`
- Use the `Icon` wrapper component with HugeIcons Pro icons
- Default size is 16px, default strokeWidth is 1.5
- All icons from `@hugeicons-pro/core-stroke-rounded` are re-exported

```tsx
import { Icon, ArrowRight01Icon, Github01Icon } from '@/components/icons'

// Basic usage
<Icon icon={ArrowRight01Icon} />

// With custom size and stroke
<Icon icon={Github01Icon} size={20} strokeWidth={2} className="text-primary" />
```

## Motion & Animation Guidelines
- Prefer the official Motion library: `import { motion } from 'motion/react'` (do **not** use Framer Motion).
- Treat motion as subtle polish: keep durations under ~300 ms, favor `ease-out` for enter/exit, `ease-in-out` for in-place moves, and avoid animating repetitive keyboard-driven flows.
- Use Tailwind-friendly CSS variables for responsive offsets (e.g., `[--hero-offset:24px]`) and set `style={{ willChange: 'transform' }}` on animating elements to prevent 1 px jitters.
- Provide tactile feedback by scaling buttons down to around `0.97` on tap/active states; never animate from `scale(0)`—start closer to `0.9+` so UI doesn’t “appear from nowhere”.
- Disable or minimize hover animations for elements heavily used on touch devices; Tailwind v4 already scopes `hover:` to pointer-capable devices, so lean on that.
- Record and review tricky animations if something feels off, and iterate after short breaks—great micro-interactions come from repeated refinement.

## Best Practices
1. Keep components in `src/components/`
2. Use TypeScript for all files
3. Follow existing code style and conventions
4. Use server functions for database/API calls
5. Leverage TanStack Router's type-safe navigation
6. Use Shadcn/ui components instead of building from scratch

## Common Tasks

### Add a new route
Create a new file in `src/routes/`:
```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>About</div>
}
```

### Add a Shadcn component
```bash
npx shadcn@canary add dialog
```

### Create a server function
```tsx
import { createServerFn } from '@tanstack/react-start'

const getData = createServerFn({ method: 'GET' })
  .handler(async () => {
    // This runs on the server
    return { data: 'example' }
  })
```

### Use in component
```tsx
const data = await getData()
```

## Troubleshooting
- Route tree generation happens automatically on dev server start
- If styles aren't applying, check Tailwind content configuration
- Server functions must be called with `await` or `.then()`
- Use `router.invalidate()` to refetch route data

## Environment
- Node.js 18+ required
- Uses ES modules (`"type": "module"` in package.json)
- Development runs on http://localhost:3000
