import { Check } from 'lucide-react'
import { cn } from '@/utils/cn'
import styles from './GoalItem.module.css'

export interface GoalItemProps {
  label: string
  done: boolean
  onToggle: () => void
}

export function GoalItem({ label, done, onToggle }: GoalItemProps) {
  return (
    <label className={styles.row}>
      <button
        type="button"
        role="checkbox"
        aria-checked={done}
        className={cn(styles.checkbox, done && styles.checked)}
        onClick={onToggle}
      >
        {done && <Check size={12} strokeWidth={3} />}
      </button>
      <span className={cn(styles.label, done && styles.labelDone)}>{label}</span>
    </label>
  )
}
