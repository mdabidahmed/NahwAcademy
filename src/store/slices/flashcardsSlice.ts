import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FlashcardStatus } from '@/types'

interface FlashcardsState {
  status: Record<string, FlashcardStatus>
  reviewedCount: number
}

const initialState: FlashcardsState = {
  status: {},
  reviewedCount: 0,
}

const flashcardsSlice = createSlice({
  name: 'flashcards',
  initialState,
  reducers: {
    flashcardReviewed(state, action: PayloadAction<{ id: string; status: FlashcardStatus }>) {
      const wasReviewed = action.payload.id in state.status
      state.status[action.payload.id] = action.payload.status
      if (!wasReviewed) state.reviewedCount += 1
    },
  },
})

export const { flashcardReviewed } = flashcardsSlice.actions
export default flashcardsSlice.reducer
