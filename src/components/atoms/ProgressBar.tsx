import { cn } from '@/utils/cn'
import styles from './ProgressBar.module.css'

export interface ProgressBarProps {
  value: number
  max?: number
  label: string
  tone?: 'primary' | 'success'
  size?: 'sm' | 'md'
}

export function ProgressBar({ value, max = 100, label, tone = 'primary', size = 'md' }: ProgressBarProps) {
  const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100))

  return (
    <div
      className={cn(styles.track, styles[size])}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className={cn(styles.fill, styles[tone])} style={{ width: `${percent}%` }} />
    </div>
  )
}
