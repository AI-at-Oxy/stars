import { useState } from 'react'
import type { QuizQuestion as QuizQuestionType } from '../../hooks/useQuiz'
import { QuizQuestion } from './QuizQuestion'
import { QuizResults } from './QuizResults'

interface QuizModalProps {
  questions: QuizQuestionType[]
  onClose: () => void
}

export function QuizModal({ questions, onClose }: QuizModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  function handleAnswer(correct: boolean) {
    if (correct) setScore(s => s + 1)
    if (currentIndex + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(2,4,9,0.85)', backdropFilter: 'blur(8px)' }}>
      <div className="w-full max-w-lg bg-space-900 border border-star-blue/20 rounded-2xl p-6 shadow-2xl animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-star-gold text-lg">✦</span>
            <h2 className="text-star-white font-serif text-lg">Star Quiz</h2>
          </div>
          {!done && (
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < currentIndex
                      ? 'bg-star-gold'
                      : i === currentIndex
                      ? 'bg-star-blue'
                      : 'bg-space-700'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {done ? (
          <QuizResults score={score} total={questions.length} onClose={onClose} />
        ) : (
          <QuizQuestion
            key={currentIndex}
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  )
}
