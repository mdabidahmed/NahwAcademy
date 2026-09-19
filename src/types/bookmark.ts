export type BookmarkTargetType = 'lesson' | 'concept' | 'example' | 'question'

export interface Bookmark {
  id: string
  targetType: BookmarkTargetType
  targetId: string
  label: string
  href: string
  createdAt: string
}
