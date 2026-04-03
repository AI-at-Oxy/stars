import type { ChatMessage } from '../../types'

interface MessageBubbleProps {
  message: ChatMessage
  isStreaming?: boolean
}

export function MessageBubble({ message, isStreaming }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 animate-slide-up`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-space-700 border border-star-blue/30 flex items-center justify-center mr-2 mt-1">
          <span className="text-xs">✦</span>
        </div>
      )}
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-nebula-purple/30 text-star-white border border-nebula-purple/40 rounded-tr-sm'
            : 'bg-space-800/80 text-star-white/90 border border-star-blue/15 rounded-tl-sm'
        }`}
      >
        <p className="font-serif whitespace-pre-wrap">{message.content}
          {isStreaming && (
            <span className="inline-block w-0.5 h-4 bg-star-blue/70 ml-0.5 animate-pulse" />
          )}
        </p>
      </div>
    </div>
  )
}
