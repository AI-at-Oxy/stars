import { useEffect, useRef } from 'react'
import type { ChatMessage } from '../../types'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'

interface ChatHistoryProps {
  messages: ChatMessage[]
  isStreaming: boolean
}

export function ChatHistory({ messages, isStreaming }: ChatHistoryProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length, isStreaming])

  const streamingMessageId = isStreaming ? messages[messages.length - 1]?.id : null
  const showTypingIndicator = isStreaming && messages[messages.length - 1]?.content === ''

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0 scroll-smooth">
      {messages.map(msg => (
        <MessageBubble
          key={msg.id}
          message={msg}
          isStreaming={isStreaming && msg.id === streamingMessageId && msg.content !== ''}
        />
      ))}
      {showTypingIndicator && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
