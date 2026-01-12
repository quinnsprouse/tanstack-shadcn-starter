# TanStack Start + Shadcn/ui + Tailwind v4

A minimal, production-ready boilerplate for modern web apps.

## Quick Start

```bash
git clone https://github.com/quinnsprouse/tanstack-shadcn-starter.git
cd tanstack-shadcn-starter
cp .npmrc.example .npmrc  # Configure HugeIcons Pro (see below)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## What's Included

- **TanStack Start** - Full-stack React with SSR
- **Shadcn/ui** - Beautiful, accessible components (Base UI)
- **HugeIcons Pro** - Premium icon library
- **Tailwind v4** - Latest CSS framework with OKLCH colors
- **TypeScript** - Full type safety
- **React 19** - Latest React features
- **AI Docs** - CLAUDE.md & AGENTS.md for AI assistants

## HugeIcons Pro Setup

This starter uses HugeIcons Pro for icons. You'll need a license to install the packages.

### 1. Get Your License Key

1. Purchase a license at [hugeicons.com](https://hugeicons.com)
2. Go to your account dashboard -> Tokens tab
3. Copy your Universal License Key

### 2. Configure npm Registry

Copy the example file and add your license key:

```bash
cp .npmrc.example .npmrc
```

Edit `.npmrc` and replace `YOUR_LICENSE_KEY_HERE` with your actual key:

```
@hugeicons-pro:registry=https://npm.hugeicons.com/
//npm.hugeicons.com/:_authToken=YOUR_ACTUAL_LICENSE_KEY
```

### 3. Install Dependencies

```bash
npm install
```

### Important Notes

- **Never commit `.npmrc`** - it contains your license key
- The `.npmrc` file is already in `.gitignore`
- For CI/CD, use environment variables to inject the license key

### Icon Usage

```tsx
import { Icon, ArrowRight01Icon, Github01Icon } from '@/components/icons'

// In your component:
<Icon icon={ArrowRight01Icon} className="size-4" />
<Icon icon={Github01Icon} size={20} strokeWidth={1.5} />
```

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