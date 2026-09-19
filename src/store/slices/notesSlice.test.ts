import { describe, expect, it } from 'vitest'
import reducer, { noteAdded, noteUpdated, noteDeleted, notePinToggled } from './notesSlice'
import type { Note } from '@/types'

function makeNote(id: string): Note {
  return {
    id,
    scope: 'lesson',
    scopeId: 'al-ajurrumiyyah/chapter-1/lesson-1',
    scopeLabel: 'Lesson 1',
    text: 'A test note',
    pinned: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
}

describe('notesSlice', () => {
  it('seeds with one pinned demo note', () => {
    const state = reducer(undefined, { type: '@@INIT' })
    expect(state.items.length).toBeGreaterThan(0)
  })

  it('adds a note to the front of the list', () => {
    const state = reducer(undefined, noteAdded(makeNote('note-1')))
    expect(state.items[0].id).toBe('note-1')
  })

  it('updates note text and touches updatedAt', () => {
    let state = reducer(undefined, noteAdded(makeNote('note-1')))
    state = reducer(state, noteUpdated({ id: 'note-1', text: 'Updated text' }))
    expect(state.items.find((note) => note.id === 'note-1')?.text).toBe('Updated text')
  })

  it('deletes a note', () => {
    let state = reducer(undefined, noteAdded(makeNote('note-1')))
    state = reducer(state, noteDeleted('note-1'))
    expect(state.items.find((note) => note.id === 'note-1')).toBeUndefined()
  })

  it('toggles pin state', () => {
    let state = reducer(undefined, noteAdded(makeNote('note-1')))
    state = reducer(state, notePinToggled('note-1'))
    expect(state.items.find((note) => note.id === 'note-1')?.pinned).toBe(true)
  })
})
