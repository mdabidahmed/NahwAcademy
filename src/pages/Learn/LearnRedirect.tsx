import { Navigate, useParams } from 'react-router-dom'
import { getBookById, getChapterById, getFirstLesson } from '@/data/repositories/bookRepository'
import { getAllBooks } from '@/data/repositories/bookRepository'

export function LearnRedirect() {
  const { bookId, chapterId } = useParams<{ bookId?: string; chapterId?: string }>()

  const resolvedBookId = bookId ?? getAllBooks()[0]?.id
  if (!resolvedBookId) return <Navigate to="/dashboard" replace />

  const book = getBookById(resolvedBookId)
  if (!book) return <Navigate to="/learn" replace />

  const chapter = chapterId ? getChapterById(book.id, chapterId) : book.chapters[0]
  if (!chapter) return <Navigate to={`/learn/${book.id}`} replace />

  const lesson = chapter.lessons[0] ?? getFirstLesson(book.id)?.lesson
  if (!lesson) return <Navigate to="/dashboard" replace />

  return <Navigate to={`/learn/${book.id}/${chapter.id}/${lesson.id}`} replace />
}
