import { useState } from 'react'
import { NoteList } from '@/components/organisms'
import { Button } from '@/components/atoms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { noteAdded, noteUpdated, noteDeleted, notePinToggled } from '@/store/slices/notesSlice'
import { getAllBooks } from '@/data/repositories/bookRepository'
import { createId } from '@/utils/id'
import styles from './NotesPage.module.css'

export function NotesPage() {
  const dispatch = useAppDispatch()
  const notes = useAppSelector((state) => state.notes.items)
  const [draft, setDraft] = useState('')
  const book = getAllBooks()[0]

  function handleAdd() {
    const text = draft.trim()
    if (!text) return
    dispatch(
      noteAdded({
        id: createId('note'),
        scope: 'book',
        scopeId: book.id,
        scopeLabel: book.title,
        text,
        pinned: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }),
    )
    setDraft('')
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Notes</h1>

      <div className={styles.addNote}>
        <textarea
          className={styles.input}
          placeholder="Write a new note…"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={3}
        />
        <Button onClick={handleAdd} disabled={!draft.trim()}>
          Add Note
        </Button>
      </div>

      <NoteList
        notes={notes}
        onUpdate={(id, text) => dispatch(noteUpdated({ id, text }))}
        onDelete={(id) => dispatch(noteDeleted(id))}
        onTogglePin={(id) => dispatch(notePinToggled(id))}
      />
    </div>
  )
}
