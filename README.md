# TanStack Start + Shadcn/ui + Tailwind v4 Boilerplate

A modern, type-safe starter template combining TanStack Start, Shadcn/ui components, and Tailwind CSS v4.

## Features

- **TanStack Start**: Full-stack React framework with SSR, streaming, and server functions
- **Tailwind CSS v4**: Latest version with OKLCH color space and new features
- **Shadcn/ui**: Beautiful, accessible UI components built with Radix UI
- **TypeScript**: 100% type-safe across the entire stack
- **Vite**: Lightning-fast build tool and dev server
- **React 19**: Latest React features and improvements

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone or use this boilerplate:

```bash
git clone <your-repo-url>
cd tanstack-shadcn-starter
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
tanstack-shadcn-starter/
├── app/
│   ├── routes/          # TanStack Start file-based routes
│   ├── components/      # React components
│   │   └── ui/         # Shadcn/ui components
│   ├── lib/            # Utility functions
│   ├── styles/         # Global styles and Tailwind config
│   └── router.tsx      # Router configuration
├── public/             # Static assets
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.ts   # PostCSS configuration
├── components.json     # Shadcn/ui configuration
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Adding Components

### Shadcn/ui Components

Add new Shadcn/ui components using the CLI:

```bash
npx shadcn@canary add [component-name]
```

Example:
```bash
npx shadcn@canary add dialog select form
```

### Custom Components

Create your custom components in `app/components/`:

```tsx
// app/components/my-component.tsx
export function MyComponent() {
  return <div>My Component</div>
}
```

## Creating Routes

TanStack Start uses file-based routing. Create new routes in the `app/routes/` directory:

```tsx
// app/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>About Page</div>
}
```

## Server Functions

Create server functions for backend logic:

```tsx
import { createServerFn } from '@tanstack/react-start'

const getUsers = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Server-side logic here
    return await db.users.findMany()
  })

// Use in component
const users = await getUsers()
```

## Styling

### Using Tailwind Classes

```tsx
<div className="bg-background text-foreground p-4 rounded-lg">
  Content
</div>
```

### Dark Mode

Toggle dark mode by adding the `dark` class to the html element:

```tsx
document.documentElement.classList.toggle('dark')
```

## Customization

### Theme Colors

Modify theme colors in `app/styles/app.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... other colors */
}
```

### Tailwind Configuration

The project uses Tailwind v4's new configuration approach directly in CSS.

## Deployment

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Resources

- [TanStack Start Documentation](https://tanstack.com/start/latest)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TanStack Router Documentation](https://tanstack.com/router/latest)

## License

MIT