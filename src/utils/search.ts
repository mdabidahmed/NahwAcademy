import type { Book, Chapter, Lesson } from '@/types'
import { getAllBooks } from '@/data/repositories/bookRepository'

export type SearchResultGroup = 'Lessons' | 'Chapters' | 'Books' | 'Grammar Terms'

export interface SearchResult {
  id: string
  group: SearchResultGroup
  title: string
  arabic?: string
  subtitle?: string
  href: string
}

const grammarTerms: Array<{ term: string; arabic: string; meaning: string; lessonHref: string }> = [
  { term: 'Mu‘rab', arabic: 'مُعْرَب', meaning: 'A word whose ending changes (I‘rāb)', lessonHref: '/learn/al-ajurrumiyyah/chapter-6/lesson-1' },
  { term: 'Mabnī', arabic: 'مَبْنِيّ', meaning: 'A word whose ending stays fixed', lessonHref: '/learn/al-ajurrumiyyah/chapter-7/lesson-1' },
  { term: 'I‘rāb', arabic: 'إِعْرَاب', meaning: 'Grammatical endings', lessonHref: '/learn/al-ajurrumiyyah/chapter-1/lesson-3' },
  { term: 'Ism', arabic: 'اسْم', meaning: 'Noun', lessonHref: '/learn/al-ajurrumiyyah/chapter-2/lesson-1' },
  { term: 'Fi‘l', arabic: 'فِعْل', meaning: 'Verb', lessonHref: '/learn/al-ajurrumiyyah/chapter-3/lesson-1' },
  { term: 'Ḥarf', arabic: 'حَرْف', meaning: 'Particle', lessonHref: '/learn/al-ajurrumiyyah/chapter-4/lesson-1' },
]

function matches(haystack: string | undefined, query: string): boolean {
  if (!haystack) return false
  return haystack.toLowerCase().includes(query.toLowerCase()) || haystack.includes(query)
}

function bookResult(book: Book): SearchResult {
  return { id: `book-${book.id}`, group: 'Books', title: book.title, arabic: book.arabicTitle, href: `/learn/${book.id}` }
}

function chapterResult(book: Book, chapter: Chapter): SearchResult {
  return {
    id: `chapter-${chapter.id}`,
    group: 'Chapters',
    title: `Chapter ${chapter.number}: ${chapter.title}`,
    arabic: chapter.arabicTitle,
    href: `/learn/${book.id}/${chapter.id}`,
  }
}

function lessonResult(book: Book, chapter: Chapter, lesson: Lesson): SearchResult {
  return {
    id: `lesson-${chapter.id}-${lesson.id}`,
    group: 'Lessons',
    title: `Lesson ${lesson.number}: ${lesson.title}`,
    subtitle: `${chapter.title}`,
    arabic: lesson.arabicTitle,
    href: `/learn/${book.id}/${chapter.id}/${lesson.id}`,
  }
}

export function search(query: string): SearchResult[] {
  const trimmed = query.trim()
  if (!trimmed) return []

  const results: SearchResult[] = []
  const books = getAllBooks()

  for (const book of books) {
    if (matches(book.title, trimmed) || matches(book.arabicTitle, trimmed)) {
      results.push(bookResult(book))
    }
    for (const chapter of book.chapters) {
      if (matches(chapter.title, trimmed) || matches(chapter.arabicTitle, trimmed)) {
        results.push(chapterResult(book, chapter))
      }
      for (const lesson of chapter.lessons) {
        const contentMatch = lesson.sections.some(
          (section) =>
            matches(section.content.english, trimmed) ||
            matches(section.content.urdu, trimmed) ||
            matches(section.content.transliteration, trimmed) ||
            matches(section.title, trimmed),
        )
        if (matches(lesson.title, trimmed) || matches(lesson.arabicTitle, trimmed) || contentMatch) {
          results.push(lessonResult(book, chapter, lesson))
        }
      }
    }
  }

  for (const term of grammarTerms) {
    if (matches(term.term, trimmed) || matches(term.arabic, trimmed) || matches(term.meaning, trimmed)) {
      results.push({
        id: `term-${term.term}`,
        group: 'Grammar Terms',
        title: term.term,
        arabic: term.arabic,
        subtitle: term.meaning,
        href: term.lessonHref,
      })
    }
  }

  return results.slice(0, 20)
}
