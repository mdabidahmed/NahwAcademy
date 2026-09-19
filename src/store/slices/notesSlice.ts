import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Note } from '@/types'

interface NotesState {
  items: Note[]
}

const initialState: NotesState = {
  items: [
    {
      id: 'note-seed-1',
      scope: 'chapter',
      scopeId: 'chapter-1',
      scopeLabel: 'Chapter 1: Foundations of Naḥw',
      text: 'Remember: Kalimah (the word) is divided into Ism, Fi‘l and Ḥarf.',
      pinned: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action: PayloadAction<Note>) {
      state.items.unshift(action.payload)
    },
    noteUpdated(state, action: PayloadAction<{ id: string; text: string }>) {
      const note = state.items.find((item) => item.id === action.payload.id)
      if (note) {
        note.text = action.payload.text
        note.updatedAt = new Date().toISOString()
      }
    },
    noteDeleted(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    notePinToggled(state, action: PayloadAction<string>) {
      const note = state.items.find((item) => item.id === action.payload)
      if (note) note.pinned = !note.pinned
    },
  },
})

export const { noteAdded, noteUpdated, noteDeleted, notePinToggled } = notesSlice.actions
export default notesSlice.reducer
