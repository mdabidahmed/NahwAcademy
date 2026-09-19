import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProgressState, QuizResult } from '@/types'
import { todayIso } from '@/utils/direction'

const initialState: ProgressState = {
  completedLessonIds: [],
  practiceStats: { attempted: 0, correct: 0 },
  quizResults: [],
  studyStreak: 0,
  studyTimeMinutes: 0,
  lastStudiedDate: null,
}

function bumpStreak(state: ProgressState) {
  const today = todayIso()
  if (state.lastStudiedDate === today) return

  if (state.lastStudiedDate) {
    const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10)
    state.studyStreak = state.lastStudiedDate === yesterday ? state.studyStreak + 1 : 1
  } else {
    state.studyStreak = 1
  }
  state.lastStudiedDate = today
}

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    lessonCompleted(state, action: PayloadAction<string>) {
      if (!state.completedLessonIds.includes(action.payload)) {
        state.completedLessonIds.push(action.payload)
      }
      bumpStreak(state)
    },
    lessonReopened(state, action: PayloadAction<string>) {
      state.completedLessonIds = state.completedLessonIds.filter((id) => id !== action.payload)
    },
    practiceAnswered(state, action: PayloadAction<{ correct: boolean }>) {
      state.practiceStats.attempted += 1
      if (action.payload.correct) state.practiceStats.correct += 1
      bumpStreak(state)
    },
    quizCompleted(state, action: PayloadAction<QuizResult>) {
      state.quizResults.push(action.payload)
      bumpStreak(state)
    },
    studyTimeLogged(state, action: PayloadAction<number>) {
      state.studyTimeMinutes += action.payload
      bumpStreak(state)
    },
  },
})

export const { lessonCompleted, lessonReopened, practiceAnswered, quizCompleted, studyTimeLogged } =
  progressSlice.actions
export default progressSlice.reducer
