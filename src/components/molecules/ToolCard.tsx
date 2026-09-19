import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './ToolCard.module.css'

export interface ToolCardProps {
  icon: ReactNode
  label: string
  href: string
  compact?: boolean
}

export function ToolCard({ icon, label, href, compact = false }: ToolCardProps) {
  return (
    <Link to={href} className={compact ? styles.compact : styles.card}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.label}>{label}</span>
    </Link>
  )
}
