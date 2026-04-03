import { AppProvider, useAppContext } from './context/AppContext'
import { useConstellationState } from './hooks/useConstellationState'
import { useQuiz } from './hooks/useQuiz'
import { SkyMap } from './components/SkyMap/SkyMap'
import { TutorPanel } from './components/TutorPanel/TutorPanel'
import { IntroScreen } from './components/UI/IntroScreen'
import { QuizModal } from './components/Quiz/QuizModal'
import { ProgressIndicator } from './components/UI/ProgressIndicator'

function StarApp() {
  const { state } = useAppContext()
  const {
    selectedConstellation,
    unlockedConstellations,
    exploredConstellations,
    selectConstellation,
  } = useConstellationState()
  const { quizReady, quizQuestions, startQuiz, dismissQuiz, closeQuiz } = useQuiz()

  return (
    <div className="flex h-full w-full">
      {/* Star map — takes majority of space */}
      <div
        className="relative flex-1 min-w-0"
        style={{ background: 'radial-gradient(ellipse at center, #0a1628 0%, #050d1a 50%, #020409 100%)' }}
      >
        <SkyMap
          selectedConstellation={selectedConstellation}
          unlockedConstellations={unlockedConstellations}
          exploredConstellations={exploredConstellations}
          onConstellationSelect={selectConstellation}
        />
        <ProgressIndicator exploredCount={exploredConstellations.length} />
      </div>

      {/* Tutor panel — right sidebar */}
      <div className="w-80 lg:w-96 flex-shrink-0 flex flex-col h-full">
        <TutorPanel
          quizReady={quizReady}
          onStartQuiz={startQuiz}
          onDismissQuiz={dismissQuiz}
        />
      </div>

      {/* Intro overlay */}
      {state.phase === 'intro' && <IntroScreen />}

      {/* Quiz modal */}
      {quizQuestions && state.phase === 'quiz' && (
        <QuizModal questions={quizQuestions} onClose={closeQuiz} />
      )}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <StarApp />
    </AppProvider>
  )
}
