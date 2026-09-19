import { useNavigate } from 'react-router-dom'
import { BookOpen, Flame, Clock, Target } from 'lucide-react'
import { Button } from '@/components/atoms'
import { StatTile } from '@/components/molecules'
import { ProgressWidget, GoalWidget, ToolsWidget } from '@/components/organisms'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectPracticeAccuracy } from '@/store/selectors'
import { getAllBooks } from '@/data/repositories/bookRepository'
import styles from './DashboardPage.module.css'

export function DashboardPage() {
  const navigate = useNavigate()
  const book = getAllBooks()[0]
  const streak = useAppSelector((state) => state.progress.studyStreak)
  const studyMinutes = useAppSelector((state) => state.progress.studyTimeMinutes)
  const accuracy = useAppSelector(selectPracticeAccuracy)

  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.heading}>Welcome back, Abid</h1>
        <p className={styles.subheading}>Pick up where you left off in {book.title}.</p>
      </div>

      <div className={styles.statsRow}>
        <StatTile icon={<Flame size={20} />} label="Day streak" value={String(streak)} />
        <StatTile icon={<Clock size={20} />} label="Minutes studied" value={String(studyMinutes)} />
        <StatTile icon={<Target size={20} />} label="Practice accuracy" value={`${accuracy}%`} />
      </div>

      <div className={styles.layout}>
        <div className={styles.main}>
          <div className={styles.continueCard}>
            <div>
              <h2 className={styles.continueTitle}>
                <BookOpen size={18} /> Continue Learning
              </h2>
              <p className={styles.continueText}>
                {book.title} — Chapter 1: {book.chapters[0].title}
              </p>
            </div>
            <Button variant="secondary" onClick={() => navigate('/learn')}>
              Resume Lesson
            </Button>
          </div>
        </div>

        <aside className={styles.rail}>
          <ProgressWidget />
          <GoalWidget />
          <ToolsWidget />
        </aside>
      </div>
    </div>
  )
}
