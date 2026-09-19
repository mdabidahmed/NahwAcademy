import { useNavigate } from 'react-router-dom'
import { Button, DirectionalText, ProgressBar } from '@/components/atoms'
import { useAppSelector } from '@/hooks/useAppSelector'
import { selectCompletedLessonCount, selectTotalLessonCount } from '@/store/selectors'
import { getAllBooks } from '@/data/repositories/bookRepository'
import styles from './LibraryPage.module.css'

export function LibraryPage() {
  const navigate = useNavigate()
  const books = getAllBooks()
  const completed = useAppSelector(selectCompletedLessonCount)
  const total = selectTotalLessonCount()

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Book Library</h1>

      <div className={styles.grid}>
        {books.map((book) => (
          <div key={book.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.title}>{book.title}</span>
              {book.arabicTitle && (
                <DirectionalText lang="ar" large className={styles.arabic}>
                  {book.arabicTitle}
                </DirectionalText>
              )}
            </div>
            {book.description && <p className={styles.description}>{book.description}</p>}
            <div className={styles.progressRow}>
              <ProgressBar value={completed} max={total} label={`${book.title} progress`} />
              <span className={styles.progressText}>
                {completed} / {total} lessons
              </span>
            </div>
            <Button fullWidth onClick={() => navigate(`/learn/${book.id}`)}>
              Continue Learning
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
