export function buildLessonKey(bookId: string, chapterId: string, lessonId: string): string {
  return `${bookId}/${chapterId}/${lessonId}`
}
