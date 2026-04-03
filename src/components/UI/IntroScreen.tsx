import { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useChat } from '../../hooks/useChat'

export function IntroScreen() {
  const { dispatch } = useAppContext()
  const { sendMessage } = useChat()
  const [starting, setStarting] = useState(false)

  async function handleBegin() {
    setStarting(true)
    dispatch({ type: 'SET_PHASE', payload: 'chat' })
    // Send the opening message to get the sherpa to greet the user
    await sendMessage(
      'Hello! I\'m here to learn about the stars and constellations.',
      {}
    )
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ background: 'rgba(2,4,9,0.92)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-md text-center px-8 animate-fade-in">
        <div className="text-6xl mb-6" style={{ textShadow: '0 0 40px rgba(168,216,234,0.8)' }}>
          ✦
        </div>
        <h1 className="text-star-white font-serif text-4xl mb-3 tracking-wide">
          Stars
        </h1>
        <p className="text-star-blue/80 font-serif italic text-base mb-2">
          A guide to the night sky
        </p>
        <p className="text-star-dim font-serif text-sm mb-8 leading-relaxed">
          Explore the constellations visible from Southern California this April.
          Discover the stories they carry — from ancient Greece to the Pacific Islands.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Greek mythology', 'Egyptian astronomy', 'Indigenous star lore', 'Navigation'].map(tag => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-space-800 border border-star-blue/20 text-star-dim font-serif">
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={handleBegin}
          disabled={starting}
          className="px-8 py-3 bg-space-800 border border-star-blue/30 rounded-xl text-star-white font-serif text-base hover:border-star-blue/70 hover:bg-space-700 transition-all disabled:opacity-50"
          style={{ boxShadow: '0 0 20px rgba(168,216,234,0.1)' }}
        >
          {starting ? 'Opening the sky...' : 'Begin your journey'}
        </button>
      </div>
    </div>
  )
}
