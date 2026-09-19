import type { LanguageMode } from '@/types'
import { Chip } from '@/components/atoms'
import styles from './LanguageModeSwitch.module.css'

const OPTIONS: Array<{ id: LanguageMode; label: string }> = [
  { id: 'all', label: 'Show All' },
  { id: 'english', label: 'English' },
  { id: 'urdu', label: 'اردو' },
  { id: 'transliteration', label: 'Transliteration' },
  { id: 'arabic', label: 'العربية' },
]

export interface LanguageModeSwitchProps {
  value: LanguageMode
  onChange: (mode: LanguageMode) => void
}

export function LanguageModeSwitch({ value, onChange }: LanguageModeSwitchProps) {
  return (
    <div className={styles.row} role="group" aria-label="Language display mode">
      {OPTIONS.map((option) => (
        <Chip key={option.id} active={value === option.id} onClick={() => onChange(option.id)}>
          {option.label}
        </Chip>
      ))}
    </div>
  )
}
