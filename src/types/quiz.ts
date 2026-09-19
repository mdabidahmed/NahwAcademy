import type { Exercise } from './exercise'

export interface Quiz {
  id: string
  title: string
  chapterId: string
  bookId: string
  questions: Exercise[]
}

export interface QuizAnswerRecord {
  questionId: string
  selected: string
  correct: boolean
}

export interface QuizResult {
  id: string
  quizId: string
  completedAt: string
  score: number
  total: number
  answers: QuizAnswerRecord[]
}
