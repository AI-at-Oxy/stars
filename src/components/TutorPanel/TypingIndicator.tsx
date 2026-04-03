export function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-space-700 border border-star-blue/30 flex items-center justify-center">
        <span className="text-xs">✦</span>
      </div>
      <div className="bg-space-800/80 border border-star-blue/15 rounded-2xl rounded-tl-sm px-4 py-2.5">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-star-blue/60"
              style={{
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
