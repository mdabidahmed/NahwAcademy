import { Link } from 'react-router-dom'
import { Bookmark } from 'lucide-react'
import { IconButton } from '@/components/atoms'
import { EmptyState } from '@/components/common'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { bookmarkRemoved } from '@/store/slices/bookmarksSlice'
import styles from './BookmarksPage.module.css'

export function BookmarksPage() {
  const dispatch = useAppDispatch()
  const bookmarks = useAppSelector((state) => state.bookmarks.items)

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <EmptyState
          icon={<Bookmark size={32} />}
          title="No bookmarks yet"
          description="Bookmark lessons, examples, or practice questions to find them here."
        />
      ) : (
        <ul className={styles.list}>
          {bookmarks.map((bookmark) => (
            <li key={bookmark.id} className={styles.item}>
              <Link to={bookmark.href} className={styles.link}>
                <span className={styles.type}>{bookmark.targetType}</span>
                <span className={styles.label}>{bookmark.label}</span>
              </Link>
              <IconButton
                icon={<Bookmark size={16} fill="currentColor" />}
                label="Remove bookmark"
                active
                onClick={() => dispatch(bookmarkRemoved(bookmark.id))}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
