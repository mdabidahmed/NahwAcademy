import { cn } from '@/utils/cn'
import styles from './TabButton.module.css'

export interface TabButtonProps {
  label: string
  active: boolean
  onClick: () => void
  id: string
  panelId: string
}

export function TabButton({ label, active, onClick, id, panelId }: TabButtonProps) {
  return (
    <button
      type="button"
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      className={cn(styles.tab, active && styles.active)}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
