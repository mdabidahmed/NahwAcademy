import type { Example } from './exercise'

export interface LessonSectionContent {
  english?: string
  urdu?: string
  transliteration?: string
  arabic?: string
}

export interface DataTable {
  title?: string
  headers: string[]
  /** Each row is a list of cells; a cell may carry a `lang` hint for direction/font. */
  rows: TableCell[][]
}

export interface TableCell {
  text: string
  lang?: 'en' | 'ar' | 'ur'
}

export interface LessonSection {
  id: string
  title: string
  arabicTitle?: string
  intro?: string
  content: LessonSectionContent
  examples?: Example[]
  grammarTypes?: GrammarTypeCardData[]
  table?: DataTable
  footnotes?: string[]
  /** Verbatim end-of-section exercise prompts from the source text that are not wired to an interactive Exercise. */
  readOnlyExercises?: string[]
}

export type GrammarTypeKind = 'ism' | 'fil' | 'harf'

export interface GrammarTypeCardData {
  id: string
  kind: GrammarTypeKind
  name: string
  arabicName: string
  englishLabel: string
  arabicWord: string
  example: string
  transliteration: string
  meaning: string
  urduMeaning?: string
}

export interface Lesson {
  id: string
  bookId: string
  chapterId: string
  number: number
  title: string
  arabicTitle?: string
  subtitle?: string
  description?: string
  sections: LessonSection[]
  exerciseIds?: string[]
}

export interface Chapter {
  id: string
  bookId: string
  number: number
  title: string
  arabicTitle?: string
  lessons: Lesson[]
}

export interface Book {
  id: string
  title: string
  arabicTitle?: string
  description?: string
  chapters: Chapter[]
}
