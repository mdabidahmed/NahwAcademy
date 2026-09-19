import { useState } from 'react'
import type { Flashcard as FlashcardData } from '@/types'
import { DirectionalText } from '@/components/atoms'
import { cn } from '@/utils/cn'
import styles from './Flashcard.module.css'

export interface FlashcardProps {
  card: FlashcardData
}

export function Flashcard({ card }: FlashcardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      className={styles.scene}
      onClick={() => setFlipped((value) => !value)}
      aria-label={flipped ? 'Show Arabic word' : 'Show meaning'}
    >
      <div className={cn(styles.card, flipped && styles.flipped)}>
        <div className={styles.face}>
          <DirectionalText as="p" lang="ar" large className={styles.front}>
            {card.front}
          </DirectionalText>
          <span className={styles.hint}>Tap to flip</span>
        </div>
        <div className={cn(styles.face, styles.back)}>
          <DirectionalText as="p" lang="en" className={styles.backLine}>
            {card.transliteration}
          </DirectionalText>
          <p className={styles.backLine}>{card.english}</p>
          <DirectionalText as="p" lang="ur" className={styles.backLine}>
            {card.urdu}
          </DirectionalText>
        </div>
      </div>
    </button>
  )
}
