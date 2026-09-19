import { TabButton } from '@/components/molecules'
import styles from './LessonTabs.module.css'

export type LessonTabId = 'lesson' | 'explanation' | 'examples' | 'practice' | 'notes'

const TABS: Array<{ id: LessonTabId; label: string }> = [
  { id: 'lesson', label: 'Lesson' },
  { id: 'explanation', label: 'Explanation' },
  { id: 'examples', label: 'Examples' },
  { id: 'practice', label: 'Practice' },
  { id: 'notes', label: 'Notes' },
]

export interface LessonTabsProps {
  active: LessonTabId
  onChange: (tab: LessonTabId) => void
}

export function LessonTabs({ active, onChange }: LessonTabsProps) {
  return (
    <div role="tablist" aria-label="Lesson sections" className={styles.tabs}>
      {TABS.map((tab) => (
        <TabButton
          key={tab.id}
          id={`tab-${tab.id}`}
          panelId={`panel-${tab.id}`}
          label={tab.label}
          active={active === tab.id}
          onClick={() => onChange(tab.id)}
        />
      ))}
    </div>
  )
}
