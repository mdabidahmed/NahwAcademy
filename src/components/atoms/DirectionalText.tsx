import type { ElementType, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import styles from './DirectionalText.module.css'

export type TextLanguage = 'en' | 'ur' | 'ar'

export interface DirectionalTextProps {
  lang: TextLanguage
  children: ReactNode
  as?: ElementType
  className?: string
  large?: boolean
}

const LANG_DIR: Record<TextLanguage, 'ltr' | 'rtl'> = {
  en: 'ltr',
  ur: 'rtl',
  ar: 'rtl',
}

export function DirectionalText({ lang, children, as: Tag = 'span', className, large = false }: DirectionalTextProps) {
  return (
    <Tag
      dir={LANG_DIR[lang]}
      lang={lang}
      className={cn(styles.text, styles[lang], large && styles.large, className)}
    >
      {children}
    </Tag>
  )
}
