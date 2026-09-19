import { Keyboard, Languages, BarChart3, Layers } from 'lucide-react'
import { ToolCard } from '@/components/molecules'
import styles from './ToolsWidget.module.css'

export function ToolsWidget() {
  return (
    <section className={styles.card} aria-labelledby="tools-widget-title">
      <h2 id="tools-widget-title" className={styles.title}>
        Useful Tools
      </h2>
      <div className={styles.grid}>
        <ToolCard compact icon={<Keyboard size={20} />} label="Arabic Keyboard" href="/tools/arabic-keyboard" />
        <ToolCard compact icon={<Languages size={20} />} label="Transliteration" href="/tools/transliteration" />
        <ToolCard compact icon={<BarChart3 size={20} />} label="Grammar Charts" href="/tools/grammar-charts" />
        <ToolCard compact icon={<Layers size={20} />} label="Flashcards" href="/flashcards" />
      </div>
    </section>
  )
}
