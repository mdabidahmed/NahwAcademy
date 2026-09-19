import { Flame, Clock, Target, ClipboardCheck } from 'lucide-react'
import { ProgressBar } from '@/components/atoms'
import { StatTile } from '@/components/molecules'
import { useAppSelector } from '@/hooks/useAppSelector'
import {
  selectCompletedLessonCount,
  selectOverallPercent,
  selectPracticeAccuracy,
  selectQuizAccuracy,
  selectTotalLessonCount,
} from '@/store/selectors'
import { getAllBooks } from '@/data/repositories/bookRepository'
import { buildLessonKey } from '@/utils/lessonKey'
import styles from './ProgressPage.module.css'

export function ProgressPage() {
  const completed = useAppSelector(selectCompletedLessonCount)
  const total = selectTotalLessonCount()
  const percent = useAppSelector(selectOverallPercent)
  const practiceAccuracy = useAppSelector(selectPracticeAccuracy)
  const quizAccuracy = useAppSelector(selectQuizAccuracy)
  const practiceAttempted = useAppSelector((state) => state.progress.practiceStats.attempted)
  const streak = useAppSelector((state) => state.progress.studyStreak)
  const studyMinutes = useAppSelector((state) => state.progress.studyTimeMinutes)
  const completedLessonIds = useAppSelector((state) => state.progress.completedLessonIds)

  const book = getAllBooks()[0]

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Your Progress</h1>

      <section className={styles.overviewCard}>
        <div className={styles.circle}>
          <span className={styles.circlePercent}>{percent}%</span>
        </div>
        <div className={styles.overviewText}>
          <p className={styles.overviewTitle}>Overall Completion</p>
          <p className={styles.overviewSubtitle}>
            {completed} of {total} lessons completed · {total - completed} remaining
          </p>
        </div>
      </section>

      <div className={styles.statsGrid}>
        <StatTile icon={<Flame size={20} />} label="Study streak (days)" value={String(streak)} />
        <StatTile icon={<Clock size={20} />} label="Study time (minutes)" value={String(studyMinutes)} />
        <StatTile icon={<Target size={20} />} label="Practice accuracy" value={`${practiceAccuracy}% (${practiceAttempted} answered)`} />
        <StatTile icon={<ClipboardCheck size={20} />} label="Quiz accuracy" value={`${quizAccuracy}%`} />
      </div>

      <section className={styles.bookSection}>
        <h2 className={styles.sectionTitle}>Book Progress</h2>
        <div className={styles.bookCard}>
          <div className={styles.bookHeader}>
            <span className={styles.bookTitle}>{book.title}</span>
            <span className={styles.bookPercent}>{percent}%</span>
          </div>
          <ProgressBar value={percent} label={`${book.title} progress`} />
        </div>

        <h2 className={styles.sectionTitle}>Chapter Progress</h2>
        <div className={styles.chapterList}>
          {book.chapters.map((chapter) => {
            const chapterCompleted = chapter.lessons.filter((lesson) =>
              completedLessonIds.includes(buildLessonKey(book.id, chapter.id, lesson.id)),
            ).length
            return (
              <div key={chapter.id} className={styles.chapterRow}>
                <div className={styles.chapterInfo}>
                  <span className={styles.chapterTitle}>
                    Chapter {chapter.number}: {chapter.title}
                  </span>
                  <span className={styles.chapterCount}>
                    {chapterCompleted}/{chapter.lessons.length}
                  </span>
                </div>
                <ProgressBar
                  value={chapterCompleted}
                  max={chapter.lessons.length}
                  label={`${chapter.title} progress`}
                  size="sm"
                />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
