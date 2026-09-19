import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import type { Book, Chapter, Lesson } from '@/types'
import { Button, DirectionalText } from '@/components/atoms'
import { BookmarkButton } from '@/components/molecules'
import styles from './LessonHero.module.css'

export interface LessonHeroProps {
  book: Book
  chapter: Chapter
  lesson: Lesson
  bookmarked: boolean
  onToggleBookmark: () => void
  previousHref?: string
  nextHref?: string
  onPrevious?: () => void
  onNext?: () => void
}

export function LessonHero({
  book,
  chapter,
  lesson,
  bookmarked,
  onToggleBookmark,
  previousHref,
  nextHref,
  onPrevious,
  onNext,
}: LessonHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="lesson-title">
      <div className={styles.meta}>
        <div className={styles.metaRow}>
          <BookOpen size={16} className={styles.metaIcon} aria-hidden="true" />
          <div>
            <div className={styles.metaLabel}>Book 1</div>
            <div className={styles.metaValue}>{book.title}</div>
          </div>
        </div>
        <div className={styles.metaDivider} />
        <div className={styles.metaRow}>
          <BookOpen size={16} className={styles.metaIcon} aria-hidden="true" />
          <div>
            <div className={styles.metaLabel}>Chapter {chapter.number}</div>
            <div className={styles.metaValue}>
              {chapter.title} {chapter.arabicTitle && `(${chapter.arabicTitle})`}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <h1 id="lesson-title" className={styles.title}>
          {lesson.title}
        </h1>
        {lesson.subtitle && <p className={styles.subtitle}>{lesson.subtitle}</p>}
      </div>

      <div className={styles.right}>
        {lesson.arabicTitle && (
          <DirectionalText as="p" lang="ar" large className={styles.arabicTitle}>
            {lesson.arabicTitle}
          </DirectionalText>
        )}
        <div className={styles.actions}>
          <BookmarkButton active={bookmarked} onToggle={onToggleBookmark} label={lesson.title} />
          <Button variant="secondary" size="sm" onClick={onPrevious} disabled={!previousHref}>
            <ArrowLeft size={14} /> Previous
          </Button>
          <Button variant="primary" size="sm" onClick={onNext} disabled={!nextHref}>
            Next <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  )
}
