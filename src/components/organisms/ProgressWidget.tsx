import { Sprout } from 'lucide-react'
import { ProgressBar } from '@/components/atoms'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectCompletedLessonCount, selectOverallPercent, selectTotalLessonCount } from '@/store/selectors'
import styles from './ProgressWidget.module.css'

export function ProgressWidget() {
  const completed = useAppSelector(selectCompletedLessonCount)
  const total = selectTotalLessonCount()
  const percent = useAppSelector(selectOverallPercent)

  return (
    <section className={styles.card} aria-labelledby="progress-widget-title">
      <div className={styles.header}>
        <h2 id="progress-widget-title" className={styles.title}>
          Your Progress
        </h2>
        <span className={styles.percent}>{percent}%</span>
      </div>

      <ProgressBar value={percent} label="Overall course progress" />

      <p className={styles.summary}>
        {completed} of {total} lessons completed
      </p>

      <div className={styles.quote}>
        <Sprout size={16} className={styles.quoteIcon} aria-hidden="true" />
        <p>“Little by little, a little becomes a lot.”</p>
      </div>
    </section>
  )
}
