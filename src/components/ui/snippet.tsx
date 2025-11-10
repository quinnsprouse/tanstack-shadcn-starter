import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Check, Copy } from 'lucide-react'

type SnippetVariant = 'default' | 'inverted' | 'success' | 'warning' | 'error'

interface SnippetProps {
  text: string | string[]
  prompt?: boolean
  variant?: SnippetVariant
  className?: string
  onCopy?: () => void
}

const variantStyles: Record<
  SnippetVariant,
  { container: string; text: string; icon: string }
> = {
  default: {
    container: 'bg-card/80 border-border text-foreground',
    text: 'text-foreground',
    icon: 'text-foreground',
  },
  inverted: {
    container: 'bg-foreground text-background',
    text: 'text-background',
    icon: 'text-background',
  },
  success: {
    container: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600',
    text: 'text-emerald-700',
    icon: 'text-emerald-600',
  },
  warning: {
    container: 'bg-amber-500/10 border-amber-500/30 text-amber-600',
    text: 'text-amber-700',
    icon: 'text-amber-600',
  },
  error: {
    container: 'bg-red-500/10 border-red-500/30 text-red-600',
    text: 'text-red-700',
    icon: 'text-red-600',
  },
}

export function Snippet({
  text,
  prompt = true,
  variant = 'default',
  className,
  onCopy,
}: SnippetProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const lines = Array.isArray(text) ? text : [text]
  const colors = variantStyles[variant]

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const fallbackCopy = () => {
    if (typeof window !== 'undefined') {
      window.prompt('Copy the snippet below:', lines.join('\n'))
    }
  }

  const handleCopy = async () => {
    const payload = lines.join('\n')
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
      fallbackCopy()
      return
    }

    try {
      await navigator.clipboard.writeText(payload)
      setCopied(true)
      onCopy?.()
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      fallbackCopy()
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'group flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left shadow-sm transition focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-4',
        colors.container,
        className,
      )}
      aria-live="polite"
    >
      <div className="flex-1 overflow-hidden">
        {lines.map((line) => (
          <code
            key={line}
            className={cn(
              'block whitespace-nowrap font-mono text-sm',
              prompt && "before:content-['$'] before:mr-2",
              colors.text,
            )}
            style={{
              maskImage: 'linear-gradient(90deg,#000 85%,transparent)',
              WebkitMaskImage: 'linear-gradient(90deg,#000 85%,transparent)',
            }}
          >
            {line}
          </code>
        ))}
      </div>
      <span className={cn('flex items-center gap-1 text-xs font-medium', colors.text)}>
        {copied ? 'Copied' : 'Copy'}
        {copied ? (
          <Check aria-hidden className={cn('size-4 transition', colors.icon)} />
        ) : (
          <Copy aria-hidden className={cn('size-4 transition group-hover:opacity-80', colors.icon)} />
        )}
      </span>
    </button>
  )
}
