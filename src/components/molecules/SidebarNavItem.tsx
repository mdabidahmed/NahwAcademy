import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import styles from './SidebarNavItem.module.css'

export interface SidebarNavItemProps {
  href: string
  icon: ReactNode
  label: string
  end?: boolean
  onNavigate?: () => void
}

export function SidebarNavItem({ href, icon, label, end = false, onNavigate }: SidebarNavItemProps) {
  return (
    <li>
      <NavLink
        to={href}
        end={end}
        onClick={onNavigate}
        className={({ isActive }) => cn(styles.link, isActive && styles.active)}
      >
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span>{label}</span>
      </NavLink>
    </li>
  )
}
