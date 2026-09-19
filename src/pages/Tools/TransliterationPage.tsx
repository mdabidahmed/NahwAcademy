import { DirectionalText } from '@/components/atoms'
import styles from './TransliterationPage.module.css'

const MAP: Array<{ arabic: string; transliteration: string }> = [
  { arabic: 'ا', transliteration: 'ā / a' },
  { arabic: 'ب', transliteration: 'b' },
  { arabic: 'ت', transliteration: 't' },
  { arabic: 'ث', transliteration: 'th' },
  { arabic: 'ج', transliteration: 'j' },
  { arabic: 'ح', transliteration: 'ḥ' },
  { arabic: 'خ', transliteration: 'kh' },
  { arabic: 'د', transliteration: 'd' },
  { arabic: 'ذ', transliteration: 'dh' },
  { arabic: 'ر', transliteration: 'r' },
  { arabic: 'ز', transliteration: 'z' },
  { arabic: 'س', transliteration: 's' },
  { arabic: 'ش', transliteration: 'sh' },
  { arabic: 'ص', transliteration: 'ṣ' },
  { arabic: 'ض', transliteration: 'ḍ' },
  { arabic: 'ط', transliteration: 'ṭ' },
  { arabic: 'ظ', transliteration: 'ẓ' },
  { arabic: 'ع', transliteration: '‘' },
  { arabic: 'غ', transliteration: 'gh' },
  { arabic: 'ف', transliteration: 'f' },
  { arabic: 'ق', transliteration: 'q' },
  { arabic: 'ك', transliteration: 'k' },
  { arabic: 'ل', transliteration: 'l' },
  { arabic: 'م', transliteration: 'm' },
  { arabic: 'ن', transliteration: 'n' },
  { arabic: 'ه', transliteration: 'h' },
  { arabic: 'و', transliteration: 'w / ū' },
  { arabic: 'ي', transliteration: 'y / ī' },
  { arabic: 'ء', transliteration: '’' },
]

export default function TransliterationPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Transliteration Guide</h1>
      <p className={styles.intro}>
        This chart shows the Roman transliteration used throughout Nahw Academy for each Arabic letter.
      </p>
      <div className={styles.grid}>
        {MAP.map((entry) => (
          <div key={entry.arabic} className={styles.card}>
            <DirectionalText lang="ar" large className={styles.arabic}>
              {entry.arabic}
            </DirectionalText>
            <DirectionalText lang="en" className={styles.translit}>
              {entry.transliteration}
            </DirectionalText>
          </div>
        ))}
      </div>
    </div>
  )
}
