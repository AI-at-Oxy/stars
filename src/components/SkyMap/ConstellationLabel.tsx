import type { Constellation, Star } from '../../types'

interface ConstellationLabelProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isSelected: boolean
  isHovered: boolean
  isExplored: boolean
}

export function ConstellationLabel({
  constellation,
  starsById,
  isSelected,
  isHovered,
  isExplored,
}: ConstellationLabelProps) {
  if (!isSelected && !isHovered) return null

  // Find center position from the constellation's main stars
  const positions = constellation.stars
    .map(id => starsById[id])
    .filter(s => s?.x !== undefined && s?.y !== undefined)

  if (positions.length === 0) return null

  const cx = positions.reduce((sum, s) => sum + (s.x ?? 0), 0) / positions.length
  const cy = positions.reduce((sum, s) => sum + (s.y ?? 0), 0) / positions.length

  return (
    <g style={{ pointerEvents: 'none' }}>
      <text
        x={cx}
        y={cy - 16}
        textAnchor="middle"
        fill={isSelected ? '#ffd97d' : '#a8d8ea'}
        fontSize={isSelected ? 13 : 11}
        fontFamily="Georgia, serif"
        fontStyle="italic"
        style={{
          opacity: isSelected ? 1 : 0.75,
          transition: 'opacity 0.3s ease',
          filter: isSelected ? 'drop-shadow(0 0 4px rgba(255,217,125,0.6))' : undefined,
          userSelect: 'none',
        }}
      >
        {constellation.name}
        {isExplored && ' ✦'}
      </text>
    </g>
  )
}
