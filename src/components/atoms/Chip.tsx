import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'
import styles from './Chip.module.css'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export function Chip({ active = false, className, children, ...rest }: ChipProps) {
  return (
    <button type="button" className={cn(styles.chip, active && styles.active, className)} aria-pressed={active} {...rest}>
      {children}
    </button>
  )
}
