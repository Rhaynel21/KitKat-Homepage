import { useCallback, useEffect, useState } from 'react'
import './FullscreenButton.css'

// Safari still only has the prefixed names.
const currentFullscreenElement = () =>
  document.fullscreenElement || document.webkitFullscreenElement || null

const isSupported = () => {
  const el = document.documentElement
  return Boolean(el.requestFullscreen || el.webkitRequestFullscreen)
}

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [supported, setSupported] = useState(false)

  useEffect(() => {
    // Checked after mount so the markup matches on the server and the client.
    setSupported(isSupported())

    // The browser can leave fullscreen on its own (Esc, or the user swiping
    // away), so the icon follows the event rather than our own click.
    const sync = () => setIsFullscreen(Boolean(currentFullscreenElement()))
    sync()
    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
    }
  }, [])

  const toggle = useCallback(async () => {
    try {
      if (currentFullscreenElement()) {
        const exit = document.exitFullscreen || document.webkitExitFullscreen
        if (exit) await exit.call(document)
      } else {
        const el = document.documentElement
        const request = el.requestFullscreen || el.webkitRequestFullscreen
        if (request) await request.call(el)
      }
    } catch {
      // A browser may refuse the request (no user gesture, or blocked by
      // policy). Nothing to do: the icon stays in step via fullscreenchange.
    }
  }, [])

  // Nothing to offer on a browser without the API, so show no button at all.
  if (!supported) return null

  const label = isFullscreen ? 'Exit full screen' : 'Full screen'

  return (
    <button type="button" className="fs-toggle" onClick={toggle} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        {isFullscreen ? (
          // Arrows pointing in
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9,3 9,9 3,9" />
            <polyline points="15,3 15,9 21,9" />
            <polyline points="9,21 9,15 3,15" />
            <polyline points="15,21 15,15 21,15" />
          </g>
        ) : (
          // Arrows pointing out
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3,9 3,3 9,3" />
            <polyline points="21,9 21,3 15,3" />
            <polyline points="3,15 3,21 9,21" />
            <polyline points="21,15 21,21 15,21" />
          </g>
        )}
      </svg>
    </button>
  )
}
