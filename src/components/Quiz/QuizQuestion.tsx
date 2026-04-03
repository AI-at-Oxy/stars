import { useState } from 'react'
import type { QuizQuestion as QuizQuestionType } from '../../hooks/useQuiz'

interface QuizQuestionProps {
  question: QuizQuestionType
  questionNumber: number
  total: number
  onAnswer: (correct: boolean) => void
}

export function QuizQuestion({ question, questionNumber, total, onAnswer }: QuizQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [revealed, setRevealed] = useState(false)

  function handleSelect(option: string) {
    if (revealed) return
    setSelected(option)
    setRevealed(true)
    setTimeout(() => onAnswer(option === question.answer), 1200)
  }

  return (
    <div className="animate-fade-in">
      <div className="text-star-dim text-xs font-serif mb-2">
        Question {questionNumber} of {total}
      </div>
      <h3 className="text-star-white font-serif text-lg mb-6 leading-relaxed">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map(option => {
          let style = 'bg-space-800/60 border-star-blue/20 text-star-white/90 hover:border-star-blue/50 hover:bg-space-700/60'

          if (revealed) {
            if (option === question.answer) {
              style = 'bg-nebula-teal/20 border-nebula-teal/60 text-star-white'
            } else if (option === selected && option !== question.answer) {
              style = 'bg-nebula-pink/20 border-nebula-pink/60 text-star-white'
            } else {
              style = 'bg-space-800/30 border-star-blue/10 text-star-dim opacity-50'
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={revealed}
              className={`w-full text-left px-4 py-3 rounded-xl border font-serif text-sm transition-all ${style}`}
            >
              {option}
            </button>
          )
        })}
      </div>
      {revealed && (
        <div className="mt-4 p-3 bg-space-800/40 border border-star-blue/10 rounded-xl animate-fade-in">
          <p className="text-star-blue/80 text-sm font-serif italic leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
