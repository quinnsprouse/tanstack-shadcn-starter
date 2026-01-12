import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Icon, Tick02Icon, Copy01Icon } from '@/components/icons'

interface SnippetProps {
  text: string | string[]
  prompt?: boolean
  className?: string
  onCopy?: () => void
}

export function Snippet({
  text,
  prompt = true,
  className,
  onCopy,
}: SnippetProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const lines = Array.isArray(text) ? text : [text]

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleCopy = async () => {
    const payload = lines.join('\n')
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
      return
    }

    try {
      await navigator.clipboard.writeText(payload)
      setCopied(true)
      onCopy?.()
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1500)
    } catch {
      // Silently fail
    }
  }

  return (
    <div
      className={cn(
        'group relative flex items-center rounded-lg border border-border bg-muted/50 dark:bg-muted/30',
        className
      )}
    >
      <div className="flex-1 overflow-x-auto px-4 py-3">
        {lines.map((line) => (
          <code
            key={line}
            className={cn(
              'block whitespace-nowrap font-mono text-[13px] text-foreground/90',
              prompt && "before:content-['$'] before:mr-2.5 before:text-muted-foreground/50 before:select-none"
            )}
          >
            {line}
          </code>
        ))}
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="flex-none p-3 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none"
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      >
        <Icon
          icon={copied ? Tick02Icon : Copy01Icon}
          className={cn('size-4 transition-opacity', copied && 'text-emerald-500')}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
