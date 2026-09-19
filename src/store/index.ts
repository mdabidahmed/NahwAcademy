import { combineReducers, configureStore } from '@reduxjs/toolkit'
import progressReducer from './slices/progressSlice'
import uiReducer from './slices/uiSlice'
import themeReducer from './slices/themeSlice'
import bookmarksReducer from './slices/bookmarksSlice'
import notesReducer from './slices/notesSlice'
import flashcardsReducer from './slices/flashcardsSlice'
import goalsReducer from './slices/goalsSlice'
import { persistenceMiddleware, STORAGE_KEY } from './persistenceMiddleware'
import { readStorage } from '@/utils/storage'

export const rootReducer = combineReducers({
  progress: progressReducer,
  ui: uiReducer,
  theme: themeReducer,
  bookmarks: bookmarksReducer,
  notes: notesReducer,
  flashcards: flashcardsReducer,
  goals: goalsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const persistedState = readStorage<Partial<RootState>>(STORAGE_KEY)

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceMiddleware),
})

export type AppDispatch = typeof store.dispatch
