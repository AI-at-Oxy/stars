import type { Constellation, Star } from '../../types'

interface ConstellationLinesProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isUnlocked: boolean
  isSelected: boolean
  isHovered: boolean
}

export function ConstellationLines({
  constellation,
  starsById,
  isUnlocked,
  isSelected,
  isHovered,
}: ConstellationLinesProps) {
  if (!isUnlocked && !isHovered) return null

  const opacity = isSelected ? 0.85 : isHovered ? 0.6 : 0.4
  const strokeColor = isSelected ? '#a8d8ea' : '#6baed6'
  const strokeWidth = isSelected ? 1.5 : 1

  return (
    <g
      className="constellation-lines"
      style={{
        transition: 'opacity 0.5s ease',
        opacity,
      }}
    >
      {constellation.lines.map((line, i) => {
        const from = starsById[line.from]
        const to = starsById[line.to]
        if (!from?.x || !from?.y || !to?.x || !to?.y) return null

        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              filter: isSelected ? 'drop-shadow(0 0 3px rgba(168,216,234,0.5))' : undefined,
            }}
          />
        )
      })}
    </g>
  )
}
