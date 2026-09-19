import type { Note } from '@/types'
import { NoteCard } from '@/components/molecules'
import { EmptyState } from '@/components/common'
import { StickyNote } from 'lucide-react'
import styles from './NoteList.module.css'

export interface NoteListProps {
  notes: Note[]
  onUpdate: (id: string, text: string) => void
  onDelete: (id: string) => void
  onTogglePin: (id: string) => void
}

export function NoteList({ notes, onUpdate, onDelete, onTogglePin }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <EmptyState
        icon={<StickyNote size={32} />}
        title="No notes yet"
        description="Notes you add while studying will show up here."
      />
    )
  }

  const sorted = [...notes].sort((a, b) => Number(b.pinned) - Number(a.pinned))

  return (
    <div className={styles.list}>
      {sorted.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onUpdate={(text) => onUpdate(note.id, text)}
          onDelete={() => onDelete(note.id)}
          onTogglePin={() => onTogglePin(note.id)}
        />
      ))}
    </div>
  )
}
