import { describe, expect, it } from 'vitest'
import reducer, { bookmarkToggled } from './bookmarksSlice'
import type { Bookmark } from '@/types'

const sampleBookmark: Bookmark = {
  id: 'lesson:al-ajurrumiyyah/chapter-1/lesson-1',
  targetType: 'lesson',
  targetId: 'al-ajurrumiyyah/chapter-1/lesson-1',
  label: 'Lesson 1',
  href: '/learn/al-ajurrumiyyah/chapter-1/lesson-1',
  createdAt: new Date().toISOString(),
}

describe('bookmarksSlice', () => {
  it('adds a bookmark that is not yet present', () => {
    const state = reducer(undefined, bookmarkToggled(sampleBookmark))
    expect(state.items).toHaveLength(1)
    expect(state.items[0].id).toBe(sampleBookmark.id)
  })

  it('removes a bookmark on second toggle', () => {
    let state = reducer(undefined, bookmarkToggled(sampleBookmark))
    state = reducer(state, bookmarkToggled(sampleBookmark))
    expect(state.items).toHaveLength(0)
  })
})
