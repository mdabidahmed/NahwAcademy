import type { Book } from '@/types'
import { ChapterItem, LessonTreeItem } from '@/components/molecules'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { chapterToggled } from '@/store/slices/uiSlice'
import { buildLessonKey } from '@/utils/lessonKey'
import styles from './ChapterTree.module.css'

export interface ChapterTreeProps {
  book: Book
  activeChapterId?: string
  activeLessonId?: string
  onNavigate?: () => void
}

export function ChapterTree({ book, activeChapterId, activeLessonId, onNavigate }: ChapterTreeProps) {
  const dispatch = useAppDispatch()
  const expandedChapterIds = useAppSelector((state) => state.ui.expandedChapterIds)
  const completedLessonIds = useAppSelector((state) => state.progress.completedLessonIds)

  return (
    <div className={styles.tree}>
      <div className={styles.bookLabel}>Book 1: {book.title}</div>
      <ul className={styles.chapterList}>
        {book.chapters.map((chapter) => {
          const expanded = expandedChapterIds.includes(chapter.id)
          const isActiveChapter = chapter.id === activeChapterId

          return (
            <li key={chapter.id}>
              <ChapterItem
                chapter={chapter}
                expanded={expanded}
                active={isActiveChapter}
                onToggle={() => dispatch(chapterToggled(chapter.id))}
              />
              {expanded && (
                <ul id={`chapter-lessons-${chapter.id}`} className={styles.lessonList}>
                  {chapter.lessons.map((lesson) => (
                    <LessonTreeItem
                      key={lesson.id}
                      lesson={lesson}
                      href={`/learn/${book.id}/${chapter.id}/${lesson.id}`}
                      active={isActiveChapter && lesson.id === activeLessonId}
                      completed={completedLessonIds.includes(buildLessonKey(book.id, chapter.id, lesson.id))}
                      onNavigate={onNavigate}
                    />
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
