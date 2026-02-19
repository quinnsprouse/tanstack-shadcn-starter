import { createFileRoute } from '@tanstack/react-router'
import { Icon, Github01Icon, ShadcnIcon } from '@/components/icons'
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react'
import { Snippet } from '@/components/ui/snippet'
import tanstackLogo from '@/assets/tanstack-logo.svg?url'

export const Route = createFileRoute('/')({
  component: Home,
})

const stack = ['TanStack Start', 'React 19', 'Tailwind v4', 'Base UI', 'Motion']

function Home() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-dvh flex flex-col items-center justify-center px-6">
        <m.div
          className="max-w-xl text-center space-y-6"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 20, filter: 'blur(8px)' }
          }
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', duration: 0.6, bounce: 0.1 }}
        >
          <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5">
            <a
              href="https://tanstack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm px-1 py-0.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="TanStack"
            >
              <img
                src={tanstackLogo}
                alt="TanStack"
                className="h-3.5 w-auto dark:invert"
              />
              <span>TanStack</span>
            </a>
            <span className="text-muted-foreground/40" aria-hidden="true">
              +
            </span>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm px-1 py-0.5 text-xs font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="shadcn/ui"
            >
              <Icon icon={ShadcnIcon} className="size-3.5" aria-hidden="true" />
              <span>shadcn/ui</span>
            </a>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Agent-Ready Starter Kit
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
        </m.div>
      </div>
    </LazyMotion>
  )
}
