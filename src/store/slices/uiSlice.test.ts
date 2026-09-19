import { describe, expect, it } from 'vitest'
import reducer, { chapterToggled, chapterExpanded, chapterCollapsed, languageModeSet } from './uiSlice'

describe('uiSlice', () => {
  it('starts with chapter-1 expanded', () => {
    const state = reducer(undefined, { type: '@@INIT' })
    expect(state.expandedChapterIds).toContain('chapter-1')
  })

  it('toggles a chapter closed then open again', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, chapterToggled('chapter-1'))
    expect(state.expandedChapterIds).not.toContain('chapter-1')

    state = reducer(state, chapterToggled('chapter-1'))
    expect(state.expandedChapterIds).toContain('chapter-1')
  })

  it('expands a chapter without duplicating it', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, chapterExpanded('chapter-2'))
    state = reducer(state, chapterExpanded('chapter-2'))
    const occurrences = state.expandedChapterIds.filter((id) => id === 'chapter-2').length
    expect(occurrences).toBe(1)
  })

  it('collapses a chapter', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, chapterCollapsed('chapter-1'))
    expect(state.expandedChapterIds).not.toContain('chapter-1')
  })

  it('sets the language mode', () => {
    const state = reducer(undefined, languageModeSet('urdu'))
    expect(state.languageMode).toBe('urdu')
  })
})
