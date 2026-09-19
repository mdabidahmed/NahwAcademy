import type { ReactNode } from 'react'
import { DirectionalText, type TextLanguage } from '@/components/atoms'
import styles from './LanguageCard.module.css'

export interface LanguageCardProps {
  icon: ReactNode
  title: string
  lang: TextLanguage
  content: string
}

export function LanguageCard({ icon, title, lang, content }: LanguageCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span className={styles.title}>{title}</span>
      </div>
      <DirectionalText as="p" lang={lang} large className={styles.content}>
        {content}
      </DirectionalText>
    </div>
  )
}
