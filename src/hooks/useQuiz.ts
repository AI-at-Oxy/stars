import { useState, useEffect, useCallback } from 'react'
import { useAppContext } from '../context/AppContext'
import { useChat } from './useChat'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  answer: string
  explanation: string
  constellation: string
}

const QUIZ_THRESHOLD = 3 // trigger after this many explored constellations

export function useQuiz() {
  const { state, dispatch } = useAppContext()
  const { sendMessage, messages, isStreaming } = useChat()
  const [quizReady, setQuizReady] = useState(false)
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null)
  const [quizDismissed, setQuizDismissed] = useState(false)

  // Watch for quiz trigger
  useEffect(() => {
    const count = state.exploredConstellations.length
    if (count >= QUIZ_THRESHOLD && !quizDismissed && !quizReady && !quizQuestions) {
      setQuizReady(true)
    }
  }, [state.exploredConstellations.length, quizDismissed, quizReady, quizQuestions])

  // Watch for quiz response in messages (JSON response from AI)
  useEffect(() => {
    if (!isStreaming && messages.length > 0) {
      const lastMsg = messages[messages.length - 1]
      if (lastMsg.role === 'assistant' && lastMsg.content.includes('"questions"')) {
        try {
          // Extract JSON from the message
          const jsonMatch = lastMsg.content.match(/\{[\s\S]*"questions"[\s\S]*\}/)
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0])
            if (parsed.questions && Array.isArray(parsed.questions)) {
              setQuizQuestions(parsed.questions)
              setQuizReady(false)
              dispatch({ type: 'SET_PHASE', payload: 'quiz' })
            }
          }
        } catch {
          // not a quiz response
        }
      }
    }
  }, [messages, isStreaming, dispatch])

  const startQuiz = useCallback(async () => {
    setQuizReady(false)
    await sendMessage('', {
      quizRequest: true,
      hiddenFromUser: true,
    })
  }, [sendMessage])

  const dismissQuiz = useCallback(() => {
    setQuizReady(false)
    setQuizDismissed(true)
  }, [])

  const closeQuiz = useCallback(() => {
    setQuizQuestions(null)
    setQuizDismissed(true)
    dispatch({ type: 'SET_PHASE', payload: 'chat' })
  }, [dispatch])

  return {
    quizReady,
    quizQuestions,
    startQuiz,
    dismissQuiz,
    closeQuiz,
  }
}
