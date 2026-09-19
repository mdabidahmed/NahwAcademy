export type FlashcardStatus = 'new' | 'known' | 'difficult'

export interface Flashcard {
  id: string
  chapterId: string
  front: string
  transliteration: string
  english: string
  urdu: string
}
