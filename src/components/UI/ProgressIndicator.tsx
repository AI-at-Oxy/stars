import { CONSTELLATIONS } from '../../data/constellations'

interface ProgressIndicatorProps {
  exploredCount: number
}

export function ProgressIndicator({ exploredCount }: ProgressIndicatorProps) {
  const total = CONSTELLATIONS.length
  const pct = exploredCount / total

  if (exploredCount === 0) return null

  return (
    <div className="absolute top-4 left-4 bg-space-900/70 border border-star-blue/15 rounded-xl px-3 py-2 pointer-events-none">
      <div className="flex items-center gap-2">
        <span className="text-star-gold text-xs">✦</span>
        <span className="text-star-dim text-xs font-serif">
          {exploredCount} / {total} explored
        </span>
      </div>
      <div className="mt-1.5 w-24 h-1 bg-space-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-star-blue to-star-gold rounded-full transition-all duration-700"
          style={{ width: `${pct * 100}%` }}
        />
      </div>
    </div>
  )
}
