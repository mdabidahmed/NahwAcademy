import { Check, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import styles from './QuizOption.module.css'

export type QuizOptionState = 'idle' | 'selected' | 'correct' | 'incorrect'

export interface QuizOptionProps {
  letter: string
  label: string
  state: QuizOptionState
  disabled?: boolean
  onClick: () => void
}

export function QuizOption({ letter, label, state, disabled = false, onClick }: QuizOptionProps) {
  return (
    <button
      type="button"
      className={cn(styles.option, styles[state])}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={state === 'selected'}
    >
      <span className={styles.letter}>{letter}</span>
      <span className={styles.label}>{label}</span>
      {state === 'correct' && <Check size={16} className={styles.icon} aria-hidden="true" />}
      {state === 'incorrect' && <X size={16} className={styles.icon} aria-hidden="true" />}
    </button>
  )
}
