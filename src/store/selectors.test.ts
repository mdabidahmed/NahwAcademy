import { describe, expect, it } from 'vitest'
import { selectCompletedLessonCount, selectOverallPercent, selectTotalLessonCount } from './selectors'
import { getTotalLessonCount } from '@/data/repositories/lessonRepository'
import type { RootState } from './index'

function makeState(completedLessonIds: string[]): RootState {
  return {
    progress: {
      completedLessonIds,
      practiceStats: { attempted: 0, correct: 0 },
      quizResults: [],
      studyStreak: 0,
      studyTimeMinutes: 0,
      lastStudiedDate: null,
    },
    ui: { expandedChapterIds: [], languageMode: 'all', sidebarDrawerOpen: false, searchDialogOpen: false },
    theme: { mode: 'light' },
    bookmarks: { items: [] },
    notes: { items: [] },
    flashcards: { status: {}, reviewedCount: 0 },
    goals: { date: '', checklist: [] },
  } as RootState
}

describe('progress selectors', () => {
  it('derives completed lesson count from state, not a stored field', () => {
    const state = makeState(['a', 'b', 'c'])
    expect(selectCompletedLessonCount(state)).toBe(3)
  })

  it('computes overall percent from completed vs total syllabus lessons', () => {
    const total = selectTotalLessonCount()
    expect(total).toBe(getTotalLessonCount())
    expect(total).toBeGreaterThan(0)

    const state = makeState([])
    expect(selectOverallPercent(state)).toBe(0)
  })
})
