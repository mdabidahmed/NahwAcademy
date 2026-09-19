import type { Exercise, Quiz } from '@/types'
import { practiceExercises, quickPracticeExercise } from '@/data/exercises'
import { quizzes } from '@/data/quizzes'
import { flashcards } from '@/data/flashcards'

export function getPracticeExercises(): Exercise[] {
  return practiceExercises
}

export function getQuickPracticeExercise(): Exercise {
  return quickPracticeExercise
}

export function getAllQuizzes(): Quiz[] {
  return quizzes
}

export function getQuizById(quizId: string): Quiz | undefined {
  return quizzes.find((quiz) => quiz.id === quizId)
}

export function getAllFlashcards() {
  return flashcards
}
