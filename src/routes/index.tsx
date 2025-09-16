import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Badge */}
        <Badge variant="secondary" className="px-4 py-1">
          <Sparkles className="size-3 mr-2" />
          Modern Stack Ready
        </Badge>

        {/* Title */}
        <h1 className="text-6xl font-bold tracking-tight">
          Build faster with
          <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            TanStack + Shadcn
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Production-ready boilerplate with TanStack Start, Shadcn/ui, and Tailwind CSS v4.
          Type-safe, server-rendered, and beautiful out of the box.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="font-medium">
            Get Started
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-medium" asChild>
            <a href="https://github.com/quinnsprouse/tanstack-shadcn-starter" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              View Source
            </a>
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="pt-12 space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {['TanStack Start', 'React 19', 'Tailwind v4', 'TypeScript', 'Vite'].map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
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