import type { ReactNode } from 'react'
import styles from './StatTile.module.css'

export interface StatTileProps {
  icon: ReactNode
  label: string
  value: string
}

export function StatTile({ icon, label, value }: StatTileProps) {
  return (
    <div className={styles.tile}>
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
