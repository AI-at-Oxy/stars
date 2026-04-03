import type { Star } from '../../types'
import { starRadius, starOpacity } from '../../hooks/useSkyMap'

interface StarFieldProps {
  stars: Star[]
}

// Simple deterministic pseudo-random for twinkle offsets
function hashId(id: number) {
  return ((id * 2654435761) >>> 0) % 100
}

export function StarField({ stars }: StarFieldProps) {
  return (
    <g className="star-field">
      {stars.map(star => {
        if (star.x === undefined || star.y === undefined) return null
        const r = starRadius(star.mag)
        const opacity = starOpacity(star.mag)
        const twinkleDelay = (hashId(star.id) / 100) * 4
        const isBright = star.mag < 2.5

        return (
          <circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={r}
            fill={isBright ? '#e8f4ff' : '#c8d8f0'}
            opacity={opacity}
            style={{
              animation: isBright ? `twinkle ${2 + (hashId(star.id) % 30) / 10}s ease-in-out ${twinkleDelay}s infinite` : undefined,
              filter: isBright ? `drop-shadow(0 0 ${r * 2}px rgba(200, 220, 255, 0.8))` : undefined,
            }}
          />
        )
      })}
    </g>
  )
}
