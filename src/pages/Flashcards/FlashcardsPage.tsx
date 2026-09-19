import { useState } from 'react'
import { ArrowLeft, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Flashcard } from '@/components/organisms'
import { Button, ProgressBar } from '@/components/atoms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { flashcardReviewed } from '@/store/slices/flashcardsSlice'
import { getAllFlashcards } from '@/data/repositories/practiceRepository'
import styles from './FlashcardsPage.module.css'

export function FlashcardsPage() {
  const dispatch = useAppDispatch()
  const cards = getAllFlashcards()
  const [index, setIndex] = useState(0)
  const statusMap = useAppSelector((state) => state.flashcards.status)

  const card = cards[index]
  const reviewedCount = Object.keys(statusMap).length

  function mark(status: 'known' | 'difficult') {
    dispatch(flashcardReviewed({ id: card.id, status }))
    setIndex((current) => Math.min(current + 1, cards.length - 1))
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Flashcards</h1>

      <div className={styles.progressRow}>
        <span className={styles.counter}>
          Card {index + 1} of {cards.length}
        </span>
        <ProgressBar value={reviewedCount} max={cards.length} label="Flashcards reviewed" />
      </div>

      <Flashcard key={card.id} card={card} />

      <div className={styles.actions}>
        <Button variant="secondary" onClick={() => setIndex((current) => Math.max(0, current - 1))} disabled={index === 0}>
          <ArrowLeft size={16} /> Previous
        </Button>
        <Button variant="danger" onClick={() => mark('difficult')}>
          <ThumbsDown size={16} /> Difficult
        </Button>
        <Button variant="primary" onClick={() => mark('known')}>
          <ThumbsUp size={16} /> Known
        </Button>
        <Button
          variant="secondary"
          onClick={() => setIndex((current) => Math.min(cards.length - 1, current + 1))}
          disabled={index === cards.length - 1}
        >
          Next <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
}
