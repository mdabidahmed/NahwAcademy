import type { Book, Chapter, Lesson } from '@/types'
import { books } from '@/data/books'

export function getAllBooks(): Book[] {
  return books
}

export function getBookById(bookId: string): Book | undefined {
  return books.find((book) => book.id === bookId)
}

export function getChapterById(bookId: string, chapterId: string): Chapter | undefined {
  return getBookById(bookId)?.chapters.find((chapter) => chapter.id === chapterId)
}

export function getLessonById(bookId: string, chapterId: string, lessonId: string): Lesson | undefined {
  return getChapterById(bookId, chapterId)?.lessons.find((lesson) => lesson.id === lessonId)
}

export function getFirstLesson(bookId: string): { chapter: Chapter; lesson: Lesson } | undefined {
  const book = getBookById(bookId)
  const chapter = book?.chapters[0]
  const lesson = chapter?.lessons[0]
  if (!chapter || !lesson) return undefined
  return { chapter, lesson }
}

export function getAdjacentLessons(
  bookId: string,
  chapterId: string,
  lessonId: string,
): { previous?: { chapter: Chapter; lesson: Lesson }; next?: { chapter: Chapter; lesson: Lesson } } {
  const book = getBookById(bookId)
  if (!book) return {}

  const flat: Array<{ chapter: Chapter; lesson: Lesson }> = []
  for (const chapter of book.chapters) {
    for (const lesson of chapter.lessons) {
      flat.push({ chapter, lesson })
    }
  }

  const index = flat.findIndex((entry) => entry.chapter.id === chapterId && entry.lesson.id === lessonId)
  if (index === -1) return {}

  return {
    previous: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  }
}
