import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: any
  }
}

const SCRIPT_ID = 'cf-turnstile-js'
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

export default function Turnstile({
  sitekey,
  onVerify,
  onError,
  onTimeout,
}: {
  sitekey: string
  onVerify: (token: string) => void
  onError?: () => void
  onTimeout?: () => void
}) {
  const container = useRef<HTMLDivElement | null>(null)
  const widgetId = useRef<number | null>(null)
  const tries = useRef(0)

  useEffect(() => {
    if (!sitekey) return

    // Load script only once
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement('script')
      s.id = SCRIPT_ID
      s.src = SCRIPT_SRC
      s.async = true
      s.defer = true
      s.setAttribute('data-cfasync', 'false') // Prevent Cloudflare Insights
      s.onload = () => window.dispatchEvent(new Event('turnstile-load'))
      document.head.appendChild(s)
    } else if ((window as any).turnstile) {
      window.dispatchEvent(new Event('turnstile-load'))
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
          callback: onVerify,
          'error-callback': onError,
          'timeout-callback': onTimeout,
          'expired-callback': () => {
            if (onError) onError()
          },
        })
        if (interval) {
          window.clearInterval(interval)
          interval = null
        }
      } catch (e) {
        // Silent failure - widget will retry
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
        // Silent failure - will retry on next attempt
      }
    }

    window.addEventListener('turnstile-load', onLoad)
    window.addEventListener('turnstile-reset', onReset as EventListener)

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
      window.removeEventListener('turnstile-load', onLoad)
      window.removeEventListener('turnstile-reset', onReset as EventListener)
      if (interval) window.clearInterval(interval)
      try {
        if ((window as any).turnstile && widgetId.current !== null) {
          ;(window as any).turnstile.remove(widgetId.current)
        }
      } catch (e) {
        // Silent cleanup failure
      }
      widgetId.current = null
      if (container.current) container.current.innerHTML = ''
    }
  }, [sitekey, onVerify])

  return <div ref={container} />
}
