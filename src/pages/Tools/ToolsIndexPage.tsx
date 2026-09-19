import { Keyboard, Languages, BarChart3, BookMarked } from 'lucide-react'
import { ToolCard } from '@/components/molecules'
import styles from './ToolsIndexPage.module.css'

export default function ToolsIndexPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Arabic Tools</h1>
      <div className={styles.grid}>
        <ToolCard icon={<Keyboard size={26} />} label="Arabic Keyboard" href="/tools/arabic-keyboard" />
        <ToolCard icon={<Languages size={26} />} label="Transliteration" href="/tools/transliteration" />
        <ToolCard icon={<BarChart3 size={26} />} label="Grammar Charts" href="/tools/grammar-charts" />
        <ToolCard icon={<BookMarked size={26} />} label="Dictionary" href="/tools/dictionary" />
      </div>
    </div>
  )
}
