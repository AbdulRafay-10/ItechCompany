import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Simple route-change overlay that shows a staircase animation
function StairsTransition() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Show the overlay briefly on every route change
    setVisible(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setVisible(false), 700)
    return () => clearTimeout(timeoutRef.current)
  }, [location.pathname])

  if (!visible) return null

  const bars = Array.from({ length: 6 })

  return (
    <div className="fixed inset-0 pointer-events-none z-[80]">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex flex-row">
        {bars.map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="flex-1"
          >
            <span
              className="block w-full bg-primary/90 stairs-sweep"
              style={{ animationDelay: `${i * 60}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StairsTransition


