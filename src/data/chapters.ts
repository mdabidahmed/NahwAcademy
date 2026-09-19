import type { Chapter } from '@/types'
import { lessonsByChapter } from './lessons'

const BOOK_ID = 'al-ajurrumiyyah'

const chapterMeta: Array<{ id: string; number: number; title: string; arabicTitle?: string }> = [
  { id: 'chapter-1', number: 1, title: 'Foundations of Naḥw' },
  { id: 'chapter-2', number: 2, title: 'Mu‘rab and Mabnī Words', arabicTitle: 'اَلْمُعْرَبُ وَالْمَبْنِيُّ' },
  { id: 'chapter-3', number: 3, title: 'Further Discussion of Isms', arabicTitle: 'مَزِيدٌ مِنَ الْكَلَامِ عَلَى الِاسْمِ' },
  { id: 'chapter-4', number: 4, title: 'Governing Words', arabicTitle: 'اَلْعَوَامِلُ' },
  { id: 'chapter-5', number: 5, title: 'Al-‘Āmil', arabicTitle: 'العامل' },
  { id: 'chapter-6', number: 6, title: 'Al-Mu‘rabāt', arabicTitle: 'المعربات' },
  { id: 'chapter-7', number: 7, title: 'Al-Mabnī wal-Mu‘rab', arabicTitle: 'المبني والمعرب' },
  { id: 'chapter-8', number: 8, title: 'Jumal', arabicTitle: 'الجمل' },
]

export const chapters: Chapter[] = chapterMeta.map((meta) => ({
  id: meta.id,
  bookId: BOOK_ID,
  number: meta.number,
  title: meta.title,
  arabicTitle: meta.arabicTitle,
  lessons: lessonsByChapter[meta.id] ?? [],
}))
