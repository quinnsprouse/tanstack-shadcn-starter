import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Snippet } from '@/components/ui/snippet'

export const Route = createFileRoute('/')({
  component: Home,
})

const stackLinks = [
  { label: 'TanStack Start', href: 'https://tanstack.com/start' },
  { label: 'React 19', href: 'https://react.dev/' },
  { label: 'Tailwind v4', href: 'https://tailwindcss.com/' },
  { label: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { label: 'Vite', href: 'https://vite.dev/' },
  { label: 'Motion Animations', href: 'https://motion.dev/' },
]

function Home() {
  const installCommand =
    'git clone https://github.com/quinnsprouse/tanstack-shadcn-starter.git && cd tanstack-shadcn-starter && npm install && npm run dev'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          className="space-y-4 [--hero-offset:20px] md:[--hero-offset:32px]"
          initial={{ opacity: 0, y: 'var(--hero-offset)' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform' }}
        >
          <Badge variant="secondary" className="px-4 py-1 inline-flex items-center justify-center gap-2">
            <Sparkles className="size-3" />
            Modern Stack Ready
          </Badge>

          <h1 className="text-6xl font-bold tracking-tight">
            Build faster with
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              TanStack + Shadcn
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Production-ready boilerplate with TanStack Start, Shadcn/ui, Tailwind CSS v4, and Motion.
            Type-safe, server-rendered, and beautiful out of the box.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-2xl space-y-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
          style={{ willChange: 'transform' }}
        >
          <Snippet text={installCommand} className="w-full" />
          <p className="text-xs text-muted-foreground">
            Uses npm by default. Swap in pnpm/bun if you prefer another package manager.
          </p>
          <p className="text-sm text-muted-foreground">
            or{' '}
            <a
              href="https://github.com/quinnsprouse/tanstack-shadcn-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary transition hover:text-primary/80"
            >
              view the source on GitHub
              <Github className="size-3.5" />
            </a>
          </p>
        </motion.div>

        <div className="pt-12 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {stackLinks.map((item) => (
              <Badge key={item.label} variant="outline" className="px-3 py-1" asChild>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ scale: 1.01, y: -1 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  style={{ willChange: 'transform' }}
                >
                  {item.label}
                </motion.a>
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Includes AI assistant docs (CLAUDE.md & AGENTS.md)
          </p>
        </div>
      </div>
    </div>
  )
}
