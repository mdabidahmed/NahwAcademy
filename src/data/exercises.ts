import type { Exercise } from '@/types'

/**
 * Original practice exercises written for this app, covering the same two
 * skills as Chapter 1: identifying whether a word is an Ism, Fi‘l, or Ḥarf
 * (Lesson 2), and identifying the tense of a Fi‘l within a sentence (Lesson 3).
 */
export const practiceExercises: Exercise[] = [
  {
    id: 'ex-1-2-1',
    type: 'identify-word-type',
    chapterId: 'chapter-1',
    arabic: 'فَرِحَ',
    question: 'State with reason whether the following word is Fi‘l, Ism or Ḥarf: فَرِحَ (He was happy.)',
    options: ['Ism (Noun)', 'Fi‘l (Verb)', 'Ḥarf (Particle)'],
    answer: 'Fi‘l (Verb)',
    explanation: 'فَرِحَ (He was happy.) carries a past tense, so it is a Fi‘l.',
  },
  {
    id: 'ex-1-2-2',
    type: 'identify-word-type',
    chapterId: 'chapter-1',
    arabic: 'ثُمَّ',
    question: 'State with reason whether the following word is Fi‘l, Ism or Ḥarf: ثُمَّ (then)',
    options: ['Ism (Noun)', 'Fi‘l (Verb)', 'Ḥarf (Particle)'],
    answer: 'Ḥarf (Particle)',
    explanation: 'ثُمَّ (then) has no independent meaning on its own, so it is a Ḥarf.',
  },
  {
    id: 'ex-1-2-3',
    type: 'identify-word-type',
    chapterId: 'chapter-1',
    arabic: 'مَدِينَةٌ',
    question: 'State with reason whether the following word is Fi‘l, Ism or Ḥarf: مَدِينَةٌ (city)',
    options: ['Ism (Noun)', 'Fi‘l (Verb)', 'Ḥarf (Particle)'],
    answer: 'Ism (Noun)',
    explanation: 'مَدِينَةٌ (city) names a thing and carries tanwīn, so it is an Ism.',
  },
  {
    id: 'ex-1-2-4',
    type: 'identify-word-type',
    chapterId: 'chapter-1',
    arabic: 'رَجَعَ',
    question: 'State with reason whether the following word is Fi‘l, Ism or Ḥarf: رَجَعَ (He returned.)',
    options: ['Ism (Noun)', 'Fi‘l (Verb)', 'Ḥarf (Particle)'],
    answer: 'Fi‘l (Verb)',
    explanation: 'رَجَعَ (He returned.) carries a past tense, so it is a Fi‘l.',
  },
  {
    id: 'ex-1-3-1',
    type: 'multiple-choice',
    chapterId: 'chapter-1',
    arabic: 'اِفْتَحِ النَّافِذَةَ',
    question: 'Translate the sentence and identify the type of the fi‘l اِفْتَحِ in it: اِفْتَحِ النَّافِذَةَ',
    options: ['Al-Māḍī (past)', 'Al-Muḍāri‘ (present/future)', 'Al-Amr (command)', 'Al-Nahy (prohibition)'],
    answer: 'Al-Amr (command)',
    explanation: '"Open the window." اِفْتَحِ is an imperative form, so it is Al-Amr.',
  },
  {
    id: 'ex-1-3-2',
    type: 'multiple-choice',
    chapterId: 'chapter-1',
    arabic: 'يَعْمَلُ سَعِيدٌ فِي الْمَصْنَعِ',
    question: 'Translate the sentence and identify the type of the fi‘l يَعْمَلُ in it: يَعْمَلُ سَعِيدٌ فِي الْمَصْنَعِ',
    options: ['Al-Māḍī (past)', 'Al-Muḍāri‘ (present/future)', 'Al-Amr (command)', 'Al-Nahy (prohibition)'],
    answer: 'Al-Muḍāri‘ (present/future)',
    explanation: '"Saeed works in the factory." يَعْمَلُ describes an ongoing action, so it is Al-Muḍāri‘.',
  },
  {
    id: 'ex-1-3-3',
    type: 'multiple-choice',
    chapterId: 'chapter-1',
    arabic: 'أَغْلَقَتْ هِنْدٌ الْبَابَ',
    question: 'Translate the sentence and identify the type of the fi‘l أَغْلَقَتْ in it: أَغْلَقَتْ هِنْدٌ الْبَابَ',
    options: ['Al-Māḍī (past)', 'Al-Muḍāri‘ (present/future)', 'Al-Amr (command)', 'Al-Nahy (prohibition)'],
    answer: 'Al-Māḍī (past)',
    explanation: '"Hind closed the door." أَغْلَقَتْ describes a completed action, so it is Al-Māḍī.',
  },
  {
    id: 'ex-1-3-4',
    type: 'multiple-choice',
    chapterId: 'chapter-1',
    arabic: 'لَا تُهْمِلْ وَاجِبَكَ',
    question: 'Translate the sentence and identify the type of the fi‘l تُهْمِلْ in it: لَا تُهْمِلْ وَاجِبَكَ',
    options: ['Al-Māḍī (past)', 'Al-Muḍāri‘ (present/future)', 'Al-Amr (command)', 'Al-Nahy (prohibition)'],
    answer: 'Al-Nahy (prohibition)',
    explanation: '"Do not neglect your homework." لَا before the muḍāri‘ form تُهْمِلْ makes it Al-Nahy.',
  },
]

export const quickPracticeExercise: Exercise = practiceExercises[2]

export const exercises: Exercise[] = practiceExercises
