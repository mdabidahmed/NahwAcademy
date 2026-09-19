import type { Quiz } from '@/types'
import { practiceExercises } from './exercises'

export const quizzes: Quiz[] = [
  {
    id: 'quiz-chapter-1',
    title: 'Chapter 1 Quiz: Foundations of Naḥw',
    chapterId: 'chapter-1',
    bookId: 'al-ajurrumiyyah',
    questions: practiceExercises,
  },
]
