import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import styles from './Badge.module.css'

export interface BadgeProps {
  children: ReactNode
  tone?: 'primary' | 'success' | 'danger' | 'neutral'
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={cn(styles.badge, styles[tone])}>{children}</span>
}
