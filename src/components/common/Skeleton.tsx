import { cn } from '@/utils/cn'
import styles from './Skeleton.module.css'

export interface SkeletonProps {
  width?: string | number
  height?: string | number
  rounded?: boolean
  className?: string
}

export function Skeleton({ width = '100%', height = 16, rounded = false, className }: SkeletonProps) {
  return (
    <span
      className={cn(styles.skeleton, rounded && styles.rounded, className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}
