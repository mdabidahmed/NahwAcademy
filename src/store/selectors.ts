import type { RootState } from './index'
import { getSyllabusLessonCount } from '@/data/repositories/progressRepository'

export function selectCompletedLessonCount(state: RootState): number {
  return state.progress.completedLessonIds.length
}

export function selectTotalLessonCount(): number {
  return getSyllabusLessonCount()
}

export function selectOverallPercent(state: RootState): number {
  const total = selectTotalLessonCount()
  if (total === 0) return 0
  return Math.round((selectCompletedLessonCount(state) / total) * 100)
}

export function selectIsLessonComplete(state: RootState, lessonKey: string): boolean {
  return state.progress.completedLessonIds.includes(lessonKey)
}

export function selectPracticeAccuracy(state: RootState): number {
  const { attempted, correct } = state.progress.practiceStats
  if (attempted === 0) return 0
  return Math.round((correct / attempted) * 100)
}

export function selectQuizAccuracy(state: RootState): number {
  const results = state.progress.quizResults
  if (results.length === 0) return 0
  const totalCorrect = results.reduce((sum, result) => sum + result.score, 0)
  const totalQuestions = results.reduce((sum, result) => sum + result.total, 0)
  if (totalQuestions === 0) return 0
  return Math.round((totalCorrect / totalQuestions) * 100)
}

export function selectIsBookmarked(state: RootState, id: string): boolean {
  return state.bookmarks.items.some((item) => item.id === id)
}
