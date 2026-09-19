import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import styles from './IconButton.module.css'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  active?: boolean
  variant?: 'default' | 'filled'
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, label, active = false, variant = 'default', className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        title={label}
        className={cn(styles.iconButton, styles[variant], active && styles.active, className)}
        {...rest}
      >
        {icon}
      </button>
    )
  },
)

IconButton.displayName = 'IconButton'
