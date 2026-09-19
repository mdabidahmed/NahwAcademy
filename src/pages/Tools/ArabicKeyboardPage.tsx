import { useState } from 'react'
import { Copy, Trash2 } from 'lucide-react'
import { Button, DirectionalText } from '@/components/atoms'
import { useToast } from '@/components/common'
import styles from './ArabicKeyboardPage.module.css'

const LETTERS = [
  'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض',
  'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي', 'ء', 'ة',
]

const HARAKAT = [
  { symbol: 'َ', name: 'Fatḥah' },
  { symbol: 'ِ', name: 'Kasrah' },
  { symbol: 'ُ', name: 'Ḍammah' },
  { symbol: 'ْ', name: 'Sukūn' },
  { symbol: 'ّ', name: 'Shaddah' },
  { symbol: 'ً', name: 'Tanwīn Fatḥ' },
  { symbol: 'ٍ', name: 'Tanwīn Kasr' },
  { symbol: 'ٌ', name: 'Tanwīn Ḍamm' },
]

const PUNCTUATION = ['،', '؛', '؟', 'ـ']

export default function ArabicKeyboardPage() {
  const [text, setText] = useState('')
  const { showToast } = useToast()

  function insert(char: string) {
    setText((current) => current + char)
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      showToast('Copied to clipboard')
    } catch {
      showToast('Could not copy — select and copy manually')
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Arabic Keyboard</h1>

      <DirectionalText as="div" lang="ar" large className={styles.preview}>
        {text || 'اكتب هنا…'}
      </DirectionalText>

      <div className={styles.actions}>
        <Button variant="secondary" size="sm" onClick={handleCopy} disabled={!text}>
          <Copy size={14} /> Copy
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setText('')} disabled={!text}>
          <Trash2 size={14} /> Clear
        </Button>
      </div>

      <section>
        <h2 className={styles.sectionTitle}>Letters</h2>
        <div className={styles.letterGrid}>
          {LETTERS.map((letter) => (
            <button key={letter} type="button" className={styles.key} onClick={() => insert(letter)}>
              {letter}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Ḥarakāt</h2>
        <div className={styles.letterGrid}>
          {HARAKAT.map((h) => (
            <button key={h.name} type="button" className={styles.key} onClick={() => insert(h.symbol)} title={h.name}>
              ا{h.symbol}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Punctuation</h2>
        <div className={styles.letterGrid}>
          {PUNCTUATION.map((mark) => (
            <button key={mark} type="button" className={styles.key} onClick={() => insert(mark)}>
              {mark}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
