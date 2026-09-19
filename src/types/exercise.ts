export interface Example {
  id: string
  arabic: string
  transliteration: string
  english: string
  urdu: string
  type?: string
}

export type ExerciseType =
  | 'multiple-choice'
  | 'true-false'
  | 'fill-blank'
  | 'identify-word-type'
  | 'identify-case'
  | 'matching'
  | 'sentence-order'
  | 'translation'
  | 'typing'

export interface Exercise {
  id: string
  type: ExerciseType
  chapterId: string
  arabic?: string
  question: string
  options?: string[]
  answer: string
  explanation?: string
}
