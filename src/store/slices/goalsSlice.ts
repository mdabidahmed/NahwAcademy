import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { todayIso } from '@/utils/direction'

export interface GoalItem {
  id: string
  label: string
  done: boolean
}

interface GoalsState {
  date: string
  checklist: GoalItem[]
}

function defaultChecklist(): GoalItem[] {
  return [
    { id: 'goal-read', label: 'Read Lesson 1', done: false },
    { id: 'goal-practice', label: 'Complete 5 practice questions', done: false },
    { id: 'goal-notes', label: 'Review your notes', done: false },
    { id: 'goal-study', label: 'Study for 15 minutes', done: false },
  ]
}

const initialState: GoalsState = {
  date: todayIso(),
  checklist: defaultChecklist(),
}

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    goalToggled(state, action: PayloadAction<string>) {
      const today = todayIso()
      if (state.date !== today) {
        state.date = today
        state.checklist = defaultChecklist()
      }
      const goal = state.checklist.find((item) => item.id === action.payload)
      if (goal) goal.done = !goal.done
    },
    goalsRolledOver(state) {
      const today = todayIso()
      if (state.date !== today) {
        state.date = today
        state.checklist = defaultChecklist()
      }
    },
  },
})

export const { goalToggled, goalsRolledOver } = goalsSlice.actions
export default goalsSlice.reducer
