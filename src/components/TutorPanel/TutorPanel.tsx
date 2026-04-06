import { useChat } from '../../hooks/useChat'
import { useAppContext } from '../../context/AppContext'
import { CONSTELLATIONS_BY_ID } from '../../data/constellations'
import { ChatHistory } from './ChatHistory'
import { UserInput } from './UserInput'

interface TutorPanelProps {
  quizReady?: boolean
  onStartQuiz?: () => void
  onDismissQuiz?: () => void
}

export function TutorPanel({ quizReady, onStartQuiz, onDismissQuiz }: TutorPanelProps) {
  const { state } = useAppContext()
  const { sendMessage, messages, isStreaming } = useChat()

  const selected = state.selectedConstellation
    ? CONSTELLATIONS_BY_ID[state.selectedConstellation]
    : null

  function handleSend(content: string) {
    sendMessage(content)
  }

  return (
    <div className="flex flex-col h-full bg-space-900/70 border-l border-star-blue/10">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-3 border-b border-star-blue/10">
        <div className="flex items-center gap-2">
          <span className="text-star-gold text-lg">✦</span>
          <div>
            <h2 className="text-star-white/90 text-sm font-serif font-semibold">
              Guide of the Stars
            </h2>
            {selected && (
              <p className="text-star-blue/70 text-xs font-serif italic">
                Exploring: {selected.name}
              </p>
            )}
          </div>
        </div>
        {/* Progress pills */}
        {state.exploredConstellations.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {state.exploredConstellations.map(id => (
              <span
                key={id}
                className="text-xs px-2 py-0.5 rounded-full bg-space-700 border border-star-blue/20 text-star-dim font-serif"
              >
                {CONSTELLATIONS_BY_ID[id]?.name ?? id}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quiz prompt banner */}
      {quizReady && (
        <div className="flex-shrink-0 mx-3 mt-3 p-3 bg-nebula-teal/10 border border-nebula-teal/30 rounded-xl">
          <p className="text-star-white/90 text-sm font-serif mb-2">
            You've explored {state.exploredConstellations.length} constellations! Ready for a quick star quiz?
          </p>
          <div className="flex gap-2">
            <button
              onClick={onStartQuiz}
              className="px-3 py-1.5 bg-nebula-teal/30 border border-nebula-teal/50 rounded-lg text-sm text-star-white hover:bg-nebula-teal/50 transition-colors font-serif"
            >
              Start Quiz
            </button>
            <button
              onClick={onDismissQuiz}
              className="px-3 py-1.5 text-star-dim text-sm hover:text-star-white transition-colors font-serif"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {messages.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🌌</div>
            <p className="text-star-dim font-serif italic text-sm leading-relaxed">
              Click on a constellation in the star map to begin your journey through the night sky.
            </p>
          </div>
        </div>
      )}

      {/* Chat history */}
      {messages.length > 0 && (
        <ChatHistory messages={messages} isStreaming={isStreaming} />
      )}

      {/* Input */}
      {messages.length > 0 && (
        <UserInput
          onSend={handleSend}
          disabled={isStreaming}
          placeholder={selected ? `Ask about ${selected.name}...` : 'Ask your guide anything...'}
        />
      )}
    </div>
  )
}
