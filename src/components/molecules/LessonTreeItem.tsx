import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import type { Lesson } from '@/types'
import { cn } from '@/utils/cn'
import styles from './LessonTreeItem.module.css'

export interface LessonTreeItemProps {
  lesson: Lesson
  href: string
  active: boolean
  completed: boolean
  onNavigate?: () => void
}

export function LessonTreeItem({ lesson, href, active, completed, onNavigate }: LessonTreeItemProps) {
  return (
    <li className={styles.wrapper}>
      <Link
        to={href}
        className={cn(styles.link, active && styles.active)}
        aria-current={active ? 'page' : undefined}
        onClick={onNavigate}
      >
        <span className={styles.indicator} aria-hidden="true" />
        <span className={styles.number}>{lesson.number}.</span>
        <span className={styles.title}>{lesson.title}</span>
        {completed && <Check size={14} className={styles.check} aria-label="Completed" />}
      </Link>
    </li>
  )
}
