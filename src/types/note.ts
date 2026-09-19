export type NoteScope = 'book' | 'chapter' | 'lesson' | 'example'

export interface Note {
  id: string
  scope: NoteScope
  scopeId: string
  scopeLabel: string
  text: string
  pinned: boolean
  createdAt: string
  updatedAt: string
}
