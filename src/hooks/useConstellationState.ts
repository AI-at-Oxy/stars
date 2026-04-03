import { useCallback } from 'react'
import { useAppContext } from '../context/AppContext'
import { useChat } from './useChat'

export function useConstellationState() {
  const { state, dispatch } = useAppContext()
  const { sendMessage } = useChat()

  const selectConstellation = useCallback((id: string) => {
    const wasAlreadySelected = state.selectedConstellation === id
    if (wasAlreadySelected) return

    dispatch({ type: 'SELECT_CONSTELLATION', payload: id })

    // Always unlock the constellation lines/art on selection
    dispatch({ type: 'UNLOCK_CONSTELLATION', payload: id })

    // Trigger AI narration for newly selected constellation
    sendMessage('', {
      constellationEvent: { type: 'selected', constellationId: id },
      hiddenFromUser: true,
    })
  }, [state.selectedConstellation, dispatch, sendMessage])

  const isUnlocked = useCallback((id: string) => {
    return state.unlockedConstellations.includes(id)
  }, [state.unlockedConstellations])

  const isExplored = useCallback((id: string) => {
    return state.exploredConstellations.includes(id)
  }, [state.exploredConstellations])

  const getEngagement = useCallback((id: string) => {
    return state.constellationEngagement[id] ?? 0
  }, [state.constellationEngagement])

  return {
    selectedConstellation: state.selectedConstellation,
    exploredConstellations: state.exploredConstellations,
    unlockedConstellations: state.unlockedConstellations,
    selectConstellation,
    isUnlocked,
    isExplored,
    getEngagement,
  }
}
