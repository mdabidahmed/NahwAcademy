import { Target, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/atoms'
import { GoalItem } from '@/components/molecules'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { goalToggled } from '@/store/slices/goalsSlice'
import styles from './GoalWidget.module.css'

export function GoalWidget() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const checklist = useAppSelector((state) => state.goals.checklist)

  return (
    <section className={styles.card} aria-labelledby="goal-widget-title">
      <div className={styles.header}>
        <Target size={16} className={styles.headerIcon} aria-hidden="true" />
        <h2 id="goal-widget-title" className={styles.title}>
          Today's Goal
        </h2>
      </div>

      <ul className={styles.list}>
        {checklist.map((goal) => (
          <li key={goal.id}>
            <GoalItem label={goal.label} done={goal.done} onToggle={() => dispatch(goalToggled(goal.id))} />
          </li>
        ))}
      </ul>

      <Button fullWidth onClick={() => navigate('/learn')}>
        Continue Learning <ArrowRight size={14} />
      </Button>
    </section>
  )
}
