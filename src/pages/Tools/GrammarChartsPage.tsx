import type { GrammarTypeCardData } from '@/types'
import { GrammarTypeCard } from '@/components/molecules'
import { chapters } from '@/data/chapters'
import styles from './GrammarChartsPage.module.css'

const grammarTypes: GrammarTypeCardData[] = [
  {
    id: 'grammar-ism',
    kind: 'ism',
    name: 'Ism',
    arabicName: 'اِسْم',
    englishLabel: 'Noun',
    arabicWord: 'اِسْمٌ',
    example: 'رَجُلٌ',
    transliteration: 'rajulun',
    meaning: 'a man',
  },
  {
    id: 'grammar-fil',
    kind: 'fil',
    name: 'Fi‘l',
    arabicName: 'فِعْل',
    englishLabel: 'Verb',
    arabicWord: 'فِعْلٌ',
    example: 'ضَرَبَ',
    transliteration: 'ḍaraba',
    meaning: 'he hit',
  },
  {
    id: 'grammar-harf',
    kind: 'harf',
    name: 'Ḥarf',
    arabicName: 'حَرْف',
    englishLabel: 'Particle',
    arabicWord: 'حَرْفٌ',
    example: 'مِنْ',
    transliteration: 'min',
    meaning: 'from',
  },
]

export default function GrammarChartsPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Grammar Charts</h1>
      <p className={styles.intro}>A quick visual reference for the three types of Kalimah (Section 1.2).</p>

      <div className={styles.tree}>
        <div className={styles.root}>Kalimah (الكلمة)</div>
        <div className={styles.branches}>
          {grammarTypes.map((type) => (
            <div key={type.id} className={styles.branch}>
              <div className={styles.connector} />
              <GrammarTypeCard data={type} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.chapterChart}>
        <h2 className={styles.chartTitle}>Al-Ājurrūmiyyah Chapter Map</h2>
        <ol className={styles.chapterList}>
          {chapters.map((chapter) => (
            <li key={chapter.id} className={styles.chapterItem}>
              <span className={styles.chapterNumber}>{chapter.number}</span>
              <span>
                {chapter.title} {chapter.arabicTitle && `(${chapter.arabicTitle})`}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
