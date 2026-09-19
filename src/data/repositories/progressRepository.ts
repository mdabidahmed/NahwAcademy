import { getTotalLessonCount } from './lessonRepository'

export function getSyllabusLessonCount(): number {
  return getTotalLessonCount()
}
