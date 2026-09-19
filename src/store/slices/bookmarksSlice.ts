import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Bookmark } from '@/types'

interface BookmarksState {
  items: Bookmark[]
}

const initialState: BookmarksState = {
  items: [],
}

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    bookmarkAdded(state, action: PayloadAction<Bookmark>) {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.unshift(action.payload)
      }
    },
    bookmarkRemoved(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    bookmarkToggled(state, action: PayloadAction<Bookmark>) {
      const exists = state.items.some((item) => item.id === action.payload.id)
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        state.items.unshift(action.payload)
      }
    },
  },
})

export const { bookmarkAdded, bookmarkRemoved, bookmarkToggled } = bookmarksSlice.actions
export default bookmarksSlice.reducer
