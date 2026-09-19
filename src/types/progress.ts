import type { QuizResult } from './quiz'

export interface PracticeStats {
  attempted: number
  correct: number
}

export interface ProgressState {
  completedLessonIds: string[]
  practiceStats: PracticeStats
  quizResults: QuizResult[]
  studyStreak: number
  studyTimeMinutes: number
  lastStudiedDate: string | null
}
