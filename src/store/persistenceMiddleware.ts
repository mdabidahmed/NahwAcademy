import type { Middleware } from '@reduxjs/toolkit'
import { writeStorage } from '@/utils/storage'

export const STORAGE_KEY = 'nahw-academy-state'

const PERSISTED_SLICES = ['progress', 'ui', 'theme', 'bookmarks', 'notes', 'flashcards', 'goals'] as const

let debounceHandle: ReturnType<typeof setTimeout> | undefined

export const persistenceMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action)

  if (debounceHandle) clearTimeout(debounceHandle)
  debounceHandle = setTimeout(() => {
    const state = store.getState() as Record<string, unknown>
    const snapshot: Record<string, unknown> = {}
    for (const key of PERSISTED_SLICES) {
      snapshot[key] = state[key]
    }
    writeStorage(STORAGE_KEY, snapshot)
  }, 300)

  return result
}
