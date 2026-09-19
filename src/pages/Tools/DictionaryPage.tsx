import { useState } from 'react'
import { Search } from 'lucide-react'
import { DirectionalText } from '@/components/atoms'
import { flashcards } from '@/data/flashcards'
import styles from './DictionaryPage.module.css'

export default function DictionaryPage() {
  const [query, setQuery] = useState('')

  const entries = flashcards.filter((card) => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      card.front.includes(query) ||
      card.transliteration.toLowerCase().includes(q) ||
      card.english.toLowerCase().includes(q) ||
      card.urdu.includes(query)
    )
  })

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Dictionary</h1>

      <div className={styles.searchBox}>
        <Search size={16} className={styles.searchIcon} aria-hidden="true" />
        <input
          type="text"
          className={styles.input}
          placeholder="Search a word…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search dictionary"
        />
      </div>

      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.id} className={styles.entry}>
            <DirectionalText lang="ar" large className={styles.arabic}>
              {entry.front}
            </DirectionalText>
            <div className={styles.meanings}>
              <DirectionalText lang="en">{entry.transliteration}</DirectionalText>
              <span className={styles.dot}>·</span>
              <span>{entry.english}</span>
              <span className={styles.dot}>·</span>
              <DirectionalText lang="ur">{entry.urdu}</DirectionalText>
            </div>
          </li>
        ))}
        {entries.length === 0 && <p className={styles.empty}>No entries match “{query}”.</p>}
      </ul>
    </div>
  )
}
