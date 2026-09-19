import { User, Zap, BookOpen } from 'lucide-react'
import type { GrammarTypeCardData } from '@/types'
import { DirectionalText } from '@/components/atoms'
import { cn } from '@/utils/cn'
import styles from './GrammarTypeCard.module.css'

const KIND_ICON = {
  ism: User,
  fil: Zap,
  harf: BookOpen,
} as const

export interface GrammarTypeCardProps {
  data: GrammarTypeCardData
}

export function GrammarTypeCard({ data }: GrammarTypeCardProps) {
  const Icon = KIND_ICON[data.kind]

  return (
    <div className={cn(styles.card, styles[data.kind])}>
      <div className={styles.header}>
        <span className={styles.iconWrap}>
          <Icon size={18} />
        </span>
        <div>
          <div className={styles.name}>
            {data.name} <DirectionalText lang="ar">({data.arabicName})</DirectionalText>
          </div>
          <div className={styles.label}>{data.englishLabel}</div>
        </div>
      </div>

      <DirectionalText as="p" lang="ar" large className={styles.arabicWord}>
        {data.arabicWord}
      </DirectionalText>

      <dl className={styles.details}>
        <div className={styles.row}>
          <dt>Example</dt>
          <dd>
            <DirectionalText lang="ar">{data.example}</DirectionalText>
          </dd>
        </div>
        <div className={styles.row}>
          <dt>Transliteration</dt>
          <dd>
            <DirectionalText lang="en">{data.transliteration}</DirectionalText>
          </dd>
        </div>
        <div className={styles.row}>
          <dt>Meaning</dt>
          <dd>
            <DirectionalText lang="en">{data.meaning}</DirectionalText>
          </dd>
        </div>
        {data.urduMeaning && (
          <div className={styles.row}>
            <dt>اردو</dt>
            <dd>
              <DirectionalText lang="ur">{data.urduMeaning}</DirectionalText>
            </dd>
          </div>
        )}
      </dl>
    </div>
  )
}
