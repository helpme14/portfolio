import { useEffect, useRef } from "react"

declare global {
  interface Window {
    turnstile?: any
  }
}

export default function Turnstile({ sitekey, onVerify }: { sitekey: string, onVerify: (token: string) => void }) {
  const container = useRef<HTMLDivElement | null>(null)
  const widgetId = useRef<any>(null)

  useEffect(() => {
    if (!container.current || !sitekey) return

    const render = () => {
      if (!window.turnstile) return
      if (widgetId.current !== null) return

      widgetId.current = window.turnstile.render(container.current, {
        sitekey,
        callback: onVerify,
      })
    }

    // Try immediately
    render()

    // Try again when Turnstile loads
    const handler = () => render()
    window.addEventListener("turnstile-load", handler)

    // Cleanup
    return () => {
      window.removeEventListener("turnstile-load", handler)
      try {
        if (window.turnstile && widgetId.current !== null) {
          window.turnstile.reset(widgetId.current)
        }
      } catch {}
    }
  }, [sitekey, onVerify])

  return <div ref={container} />
}
