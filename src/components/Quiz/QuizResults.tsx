interface QuizResultsProps {
  score: number
  total: number
  onClose: () => void
}

export function QuizResults({ score, total, onClose }: QuizResultsProps) {
  const pct = score / total

  const message = pct === 1
    ? 'Perfect! You\'re a true guide of the stars!'
    : pct >= 0.8
    ? 'Excellent! The stars shine bright in your mind.'
    : pct >= 0.6
    ? 'Well done! Keep exploring and the sky becomes clearer.'
    : 'Keep going! Every astronomer starts by looking up.'

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(pct * 5))

  return (
    <div className="text-center animate-fade-in">
      <div className="text-5xl mb-4">🌟</div>
      <h3 className="text-star-gold font-serif text-2xl mb-2">
        {score} / {total}
      </h3>
      <div className="flex justify-center gap-1 mb-4">
        {stars.map((lit, i) => (
          <span key={i} className={`text-2xl ${lit ? 'text-star-gold' : 'text-space-700'}`}>
            ✦
          </span>
        ))}
      </div>
      <p className="text-star-white/80 font-serif italic text-base leading-relaxed mb-6">
        {message}
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 bg-nebula-purple/30 border border-nebula-purple/50 rounded-xl text-star-white font-serif hover:bg-nebula-purple/50 transition-colors"
      >
        Continue Exploring
      </button>
    </div>
  )
}
