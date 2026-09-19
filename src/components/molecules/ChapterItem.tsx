import { ChevronRight, BookOpen } from 'lucide-react'
import type { Chapter } from '@/types'
import { DirectionalText } from '@/components/atoms'
import { cn } from '@/utils/cn'
import styles from './ChapterItem.module.css'

export interface ChapterItemProps {
  chapter: Chapter
  expanded: boolean
  active: boolean
  onToggle: () => void
}

export function ChapterItem({ chapter, expanded, active, onToggle }: ChapterItemProps) {
  return (
    <button
      type="button"
      className={cn(styles.item, active && styles.active)}
      onClick={onToggle}
      aria-expanded={expanded}
      aria-controls={`chapter-lessons-${chapter.id}`}
    >
      <BookOpen size={16} className={styles.bookIcon} aria-hidden="true" />
      <span className={styles.text}>
        <span className={styles.title}>
          Chapter {chapter.number}: {chapter.title}
        </span>
        {chapter.arabicTitle && (
          <DirectionalText lang="ar" className={styles.arabic}>
            {chapter.arabicTitle}
          </DirectionalText>
        )}
      </span>
      <ChevronRight size={16} className={cn(styles.chevron, expanded && styles.chevronOpen)} aria-hidden="true" />
    </button>
  )
}
