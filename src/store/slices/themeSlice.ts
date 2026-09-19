import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ThemeMode } from '@/types'

interface ThemeState {
  mode: ThemeMode
}

const initialState: ThemeState = {
  mode: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    themeModeSet(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload
    },
  },
})

export const { themeModeSet } = themeSlice.actions
export default themeSlice.reducer
