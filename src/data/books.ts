import type { Book } from '@/types'
import { chapters } from './chapters'

export const books: Book[] = [
  {
    id: 'al-ajurrumiyyah',
    title: 'Foundations of Naḥw',
    arabicTitle: 'أَسَاسِيَّاتُ النَّحْوِ',
    description:
      'An original course on Arabic grammar (Naḥw), covering Kalimah, I‘rāb, Mu‘rab and Mabnī words, and the governing words (‘Awāmil).',
    chapters,
  },
]
