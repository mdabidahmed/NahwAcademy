import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { LanguageMode } from '@/types'

interface UiState {
  expandedChapterIds: string[]
  languageMode: LanguageMode
  sidebarDrawerOpen: boolean
  searchDialogOpen: boolean
}

const initialState: UiState = {
  expandedChapterIds: ['chapter-1'],
  languageMode: 'all',
  sidebarDrawerOpen: false,
  searchDialogOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    chapterExpanded(state, action: PayloadAction<string>) {
      if (!state.expandedChapterIds.includes(action.payload)) {
        state.expandedChapterIds.push(action.payload)
      }
    },
    chapterCollapsed(state, action: PayloadAction<string>) {
      state.expandedChapterIds = state.expandedChapterIds.filter((id) => id !== action.payload)
    },
    chapterToggled(state, action: PayloadAction<string>) {
      if (state.expandedChapterIds.includes(action.payload)) {
        state.expandedChapterIds = state.expandedChapterIds.filter((id) => id !== action.payload)
      } else {
        state.expandedChapterIds.push(action.payload)
      }
    },
    languageModeSet(state, action: PayloadAction<LanguageMode>) {
      state.languageMode = action.payload
    },
    sidebarDrawerOpened(state) {
      state.sidebarDrawerOpen = true
    },
    sidebarDrawerClosed(state) {
      state.sidebarDrawerOpen = false
    },
    searchDialogOpened(state) {
      state.searchDialogOpen = true
    },
    searchDialogClosed(state) {
      state.searchDialogOpen = false
    },
  },
})

export const {
  chapterExpanded,
  chapterCollapsed,
  chapterToggled,
  languageModeSet,
  sidebarDrawerOpened,
  sidebarDrawerClosed,
  searchDialogOpened,
  searchDialogClosed,
} = uiSlice.actions
export default uiSlice.reducer
