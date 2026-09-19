import { useId, type ReactNode } from 'react'
import styles from './Tooltip.module.css'

export interface TooltipProps {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
  const id = useId()

  return (
    <span className={styles.wrapper}>
      <span aria-describedby={id}>{children}</span>
      <span role="tooltip" id={id} className={styles.bubble}>
        {text}
      </span>
    </span>
  )
}
