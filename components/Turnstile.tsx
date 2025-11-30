import { useEffect, useRef } from "react"

declare global {
  interface Window {
    turnstile?: any
  }
}

const SCRIPT_ID = "cf-turnstile-js"
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js"

export default function Turnstile({ sitekey, onVerify }: { sitekey: string, onVerify: (token: string) => void }) {
  const container = useRef<HTMLDivElement | null>(null)
  const widgetId = useRef<number | null>(null)
  const tries = useRef(0)

  useEffect(() => {
    if (!sitekey) return
    
    // Load script only once
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script")
      s.id = SCRIPT_ID
      s.src = SCRIPT_SRC
      s.async = true
      s.defer = true
      s.onload = () => window.dispatchEvent(new Event("turnstile-load"))
      document.head.appendChild(s)
    } else if ((window as any).turnstile) {
      window.dispatchEvent(new Event("turnstile-load"))
    }

    let interval: number | null = null

    const tryRender = () => {
      tries.current++
      if (!container.current) return
      if (!(window as any).turnstile) return
      if (widgetId.current !== null) return // Already rendered
      if (!container.current.isConnected) return
      if ((container.current as HTMLElement).offsetParent === null) return
      
      try {
        widgetId.current = (window as any).turnstile.render(container.current, { 
          sitekey, 
          callback: onVerify 
        })
        if (interval) {
          window.clearInterval(interval)
          interval = null
        }
      } catch (e) {
        console.error("Turnstile render error:", e)
      }
    }

    const onLoad = tryRender
    const onReset = () => {
      try {
        if ((window as any).turnstile && widgetId.current !== null) {
          ;(window as any).turnstile.reset(widgetId.current)
        } else {
          widgetId.current = null
          tryRender()
        }
      } catch (e) {
        console.error("Turnstile reset error:", e)
      }
    }

    window.addEventListener("turnstile-load", onLoad)
    window.addEventListener("turnstile-reset", onReset as EventListener)

    interval = window.setInterval(() => {
      if (tries.current > 20) {
        if (interval) {
          window.clearInterval(interval)
          interval = null
        }
        return
      }
      tryRender()
    }, 300)

    tryRender()

    return () => {
      window.removeEventListener("turnstile-load", onLoad)
      window.removeEventListener("turnstile-reset", onReset as EventListener)
      if (interval) window.clearInterval(interval)
      try {
        if ((window as any).turnstile && widgetId.current !== null) {
          ;(window as any).turnstile.remove(widgetId.current) // Use remove instead of reset
        }
      } catch (e) {
        console.error("Turnstile cleanup error:", e)
      }
      widgetId.current = null
      if (container.current) container.current.innerHTML = ""
    }
  }, [sitekey, onVerify])

  return <div ref={container} />

  return <div ref={container} />
}
