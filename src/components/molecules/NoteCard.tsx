import { useState } from 'react'
import { Pin, Pencil, Trash2, Check, X } from 'lucide-react'
import type { Note } from '@/types'
import { IconButton, Button } from '@/components/atoms'
import { cn } from '@/utils/cn'
import styles from './NoteCard.module.css'

export interface NoteCardProps {
  note: Note
  onUpdate: (text: string) => void
  onDelete: () => void
  onTogglePin: () => void
}

export function NoteCard({ note, onUpdate, onDelete, onTogglePin }: NoteCardProps) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(note.text)

  function save() {
    const trimmed = draft.trim()
    if (trimmed) onUpdate(trimmed)
    setEditing(false)
  }

  return (
    <div className={cn(styles.card, note.pinned && styles.pinned)}>
      <div className={styles.header}>
        <span className={styles.scope}>{note.scopeLabel}</span>
        <div className={styles.actions}>
          <IconButton
            icon={<Pin size={14} />}
            label={note.pinned ? 'Unpin note' : 'Pin note'}
            active={note.pinned}
            onClick={onTogglePin}
          />
          {!editing && (
            <IconButton icon={<Pencil size={14} />} label="Edit note" onClick={() => setEditing(true)} />
          )}
          <IconButton icon={<Trash2 size={14} />} label="Delete note" onClick={onDelete} />
        </div>
      </div>

      {editing ? (
        <div className={styles.editRow}>
          <textarea
            className={styles.textarea}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            rows={3}
            autoFocus
          />
          <div className={styles.editActions}>
            <Button size="sm" variant="secondary" onClick={() => { setDraft(note.text); setEditing(false) }}>
              <X size={14} /> Cancel
            </Button>
            <Button size="sm" onClick={save}>
              <Check size={14} /> Save
            </Button>
          </div>
        </div>
      ) : (
        <p className={styles.text}>{note.text}</p>
      )}
    </div>
  )
}
