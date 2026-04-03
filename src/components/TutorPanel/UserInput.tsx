import { useState, type KeyboardEvent } from 'react'

interface UserInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export function UserInput({ onSend, disabled, placeholder }: UserInputProps) {
  const [value, setValue] = useState('')

  function handleSend() {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex gap-2 p-3 border-t border-star-blue/10 bg-space-900/50">
      <textarea
        className="flex-1 bg-space-800/60 border border-star-blue/20 rounded-xl px-3 py-2 text-sm text-star-white/90 font-serif placeholder-star-dim/60 resize-none focus:outline-none focus:border-star-blue/50 transition-colors"
        rows={2}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder ?? 'Ask about this constellation...'}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="flex-shrink-0 w-10 h-10 mt-auto rounded-xl bg-nebula-purple/40 border border-nebula-purple/50 text-star-white disabled:opacity-30 hover:bg-nebula-purple/60 transition-colors flex items-center justify-center"
        aria-label="Send message"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  )
}
