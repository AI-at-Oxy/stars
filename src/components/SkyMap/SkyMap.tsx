import { useState, useRef, useEffect } from 'react'
import { CONSTELLATIONS } from '../../data/constellations'
import { STARS, BACKGROUND_STARS, STARS_BY_ID } from '../../data/stars'
import { projectStar } from '../../hooks/useSkyMap'
import { StarField } from './StarField'
import { ConstellationLines } from './ConstellationLines'
import { ConstellationLabel } from './ConstellationLabel'
import { ConstellationHitArea } from './ConstellationHitArea'
import type { Star } from '../../types'

interface SkyMapProps {
  selectedConstellation: string | null
  unlockedConstellations: string[]
  exploredConstellations: string[]
  onConstellationSelect: (id: string) => void
}

export function SkyMap({
  selectedConstellation,
  unlockedConstellations,
  exploredConstellations,
  onConstellationSelect,
}: SkyMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [hoveredConstellation, setHoveredConstellation] = useState<string | null>(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      const entry = entries[0]
      if (entry) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const { width, height } = dimensions

  // Project all catalog stars
  const projectedStars: Star[] = STARS.map(star => {
    const [x, y] = projectStar(star.ra, star.dec, width, height)
    return { ...star, x, y }
  })

  const projectedBackground: Star[] = BACKGROUND_STARS.map(star => {
    const [x, y] = projectStar(star.ra, star.dec, width, height)
    return { ...star, x, y }
  })

  // Merge projected into lookup
  const starsById: Record<number, Star> = {
    ...STARS_BY_ID,
    ...Object.fromEntries(projectedStars.map(s => [s.id, s])),
  }

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <svg
        width={width}
        height={height}
        className="block"
        style={{ background: 'transparent' }}
      >
        {/* Background filler stars */}
        <StarField stars={projectedBackground} />

        {/* Named catalog stars */}
        <StarField stars={projectedStars} />

        {/* Constellation lines (rendered under hit areas) */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationLines
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isUnlocked={unlockedConstellations.includes(constellation.id)}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
          />
        ))}

        {/* Labels */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationLabel
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
            isExplored={exploredConstellations.includes(constellation.id)}
          />
        ))}

        {/* Interactive hit areas (on top) */}
        {CONSTELLATIONS.map(constellation => (
          <ConstellationHitArea
            key={constellation.id}
            constellation={constellation}
            starsById={starsById}
            isSelected={selectedConstellation === constellation.id}
            isHovered={hoveredConstellation === constellation.id}
            onMouseEnter={() => setHoveredConstellation(constellation.id)}
            onMouseLeave={() => setHoveredConstellation(null)}
            onClick={() => onConstellationSelect(constellation.id)}
          />
        ))}
      </svg>

      {/* Hint text */}
      {!selectedConstellation && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-star-dim text-sm font-serif italic pointer-events-none animate-fade-in">
          Click any constellation to begin exploring
        </div>
      )}
    </div>
  )
}
