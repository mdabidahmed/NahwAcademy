import type { ReactNode } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import type { ThemeMode } from '@/types'
import { Chip } from '@/components/atoms'
import { LanguageModeSwitch } from '@/components/molecules'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { themeModeSet } from '@/store/slices/themeSlice'
import { languageModeSet } from '@/store/slices/uiSlice'
import styles from './SettingsPage.module.css'

const THEME_OPTIONS: Array<{ id: ThemeMode; label: string; icon: ReactNode }> = [
  { id: 'light', label: 'Light', icon: <Sun size={14} /> },
  { id: 'dark', label: 'Dark', icon: <Moon size={14} /> },
  { id: 'system', label: 'System', icon: <Monitor size={14} /> },
]

export function SettingsPage() {
  const dispatch = useAppDispatch()
  const themeMode = useAppSelector((state) => state.theme.mode)
  const languageMode = useAppSelector((state) => state.ui.languageMode)

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Settings</h1>

      <section className={styles.card}>
        <h2 className={styles.title}>Appearance</h2>
        <p className={styles.description}>Choose how Nahw Academy looks on this device.</p>
        <div className={styles.row}>
          {THEME_OPTIONS.map((option) => (
            <Chip key={option.id} active={themeMode === option.id} onClick={() => dispatch(themeModeSet(option.id))}>
              {option.icon} {option.label}
            </Chip>
          ))}
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.title}>Default Lesson Language</h2>
        <p className={styles.description}>Choose which languages show by default on lesson pages.</p>
        <LanguageModeSwitch value={languageMode} onChange={(mode) => dispatch(languageModeSet(mode))} />
      </section>
    </div>
  )
}
