import type { Constellation, Star } from '../../types'

interface ConstellationHitAreaProps {
  constellation: Constellation
  starsById: Record<number, Star>
  isSelected: boolean
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: () => void
}

// Renders invisible clickable star dots for interaction
export function ConstellationHitArea({
  constellation,
  starsById,
  isSelected,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: ConstellationHitAreaProps) {
  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {constellation.stars.map(id => {
        const star = starsById[id]
        if (!star?.x || !star?.y) return null

        return (
          <circle
            key={id}
            cx={star.x}
            cy={star.y}
            r={12}
            fill="transparent"
            stroke={isSelected || isHovered ? 'rgba(168,216,234,0.3)' : 'transparent'}
            strokeWidth={isSelected ? 2 : 1}
            style={{
              transition: 'stroke 0.3s ease',
            }}
          />
        )
      })}
    </g>
  )
}
