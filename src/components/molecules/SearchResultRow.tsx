import type { SearchResult } from '@/utils/search'
import { DirectionalText } from '@/components/atoms'
import { cn } from '@/utils/cn'
import styles from './SearchResultRow.module.css'

export interface SearchResultRowProps {
  result: SearchResult
  highlighted: boolean
  onSelect: () => void
}

export function SearchResultRow({ result, highlighted, onSelect }: SearchResultRowProps) {
  return (
    <li>
      <button
        type="button"
        className={cn(styles.row, highlighted && styles.highlighted)}
        onClick={onSelect}
        role="option"
        aria-selected={highlighted}
      >
        <div className={styles.text}>
          <span className={styles.title}>{result.title}</span>
          {result.subtitle && <span className={styles.subtitle}>{result.subtitle}</span>}
        </div>
        {result.arabic && (
          <DirectionalText lang="ar" className={styles.arabic}>
            {result.arabic}
          </DirectionalText>
        )}
      </button>
    </li>
  )
}
