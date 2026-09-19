import type { Lesson } from '@/types'
import { books } from '@/data/books'

export function getAllLessons(): Lesson[] {
  return books.flatMap((book) => book.chapters.flatMap((chapter) => chapter.lessons))
}

export function getTotalLessonCount(): number {
  return getAllLessons().length
}
