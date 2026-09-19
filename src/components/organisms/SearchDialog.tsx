import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Modal } from '@/components/common'
import { SearchResultRow } from '@/components/molecules'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useDebounce } from '@/hooks/useDebounce'
import { searchDialogClosed } from '@/store/slices/uiSlice'
import { search, type SearchResult, type SearchResultGroup } from '@/utils/search'
import styles from './SearchDialog.module.css'

const GROUP_ORDER: SearchResultGroup[] = ['Lessons', 'Chapters', 'Books', 'Grammar Terms']

export function SearchDialog() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const open = useAppSelector((state) => state.ui.searchDialogOpen)
  const [query, setQuery] = useState('')
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedQuery = useDebounce(query, 200)

  const results = useMemo(() => search(debouncedQuery), [debouncedQuery])

  const grouped = useMemo(() => {
    return GROUP_ORDER.map((group) => ({
      group,
      items: results.filter((result) => result.group === group),
    })).filter((entry) => entry.items.length > 0)
  }, [results])

  useEffect(() => {
    if (open) {
      setQuery('')
      setHighlightedIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    setHighlightedIndex(0)
  }, [results])

  function close() {
    dispatch(searchDialogClosed())
  }

  function openResult(result: SearchResult) {
    navigate(result.href)
    close()
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (results.length === 0) return
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedIndex((index) => Math.min(index + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedIndex((index) => Math.max(index - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const target = results[highlightedIndex]
      if (target) openResult(target)
    }
  }

  return (
    <Modal open={open} onClose={close} title="Search Nahw Academy" maxWidth={560}>
      <div className={styles.searchBox}>
        <Search size={16} className={styles.searchIcon} aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Search lessons, topics, or Arabic words…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={onKeyDown}
          aria-label="Search"
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="search-results-list"
        />
      </div>

      {debouncedQuery && results.length === 0 && <p className={styles.empty}>No results for “{debouncedQuery}”.</p>}

      <div className={styles.results}>
        {grouped.map((entry) => (
          <div key={entry.group} className={styles.group}>
            <h3 className={styles.groupTitle}>{entry.group}</h3>
            <ul className={styles.list} role="listbox" id="search-results-list">
              {entry.items.map((item) => (
                <SearchResultRow
                  key={item.id}
                  result={item}
                  highlighted={results[highlightedIndex]?.id === item.id}
                  onSelect={() => openResult(item)}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Modal>
  )
}
