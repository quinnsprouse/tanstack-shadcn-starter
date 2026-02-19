import { createFileRoute } from '@tanstack/react-router'
import { Icon, Github01Icon } from '@/components/icons'
import { motion, useReducedMotion } from 'motion/react'
import { Snippet } from '@/components/ui/snippet'

export const Route = createFileRoute('/')({
  component: Home,
})

const stack = ['TanStack Start', 'React 19', 'Tailwind v4', 'Base UI', 'Motion']

function Home() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-xl text-center space-y-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ type: 'spring', duration: 0.6, bounce: 0.1 }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-balance">
          TanStack + Shadcn Starter
        </h1>

        <p className="text-muted-foreground text-pretty">
          A minimal, type-safe foundation for building modern React apps.
        </p>

        <div className="pt-2 space-y-4">
          <Snippet
            text="npx degit quinnsprouse/tanstack-shadcn-starter my-app"
            className="w-full"
          />

          <a
            href="https://github.com/quinnsprouse/tanstack-shadcn-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon icon={Github01Icon} className="size-4" aria-hidden="true" />
            View on GitHub
          </a>
        </div>

        <p className="pt-8 text-xs text-muted-foreground/60">
          {stack.join(' · ')}
        </p>
      </motion.div>
    </div>
  )
}
