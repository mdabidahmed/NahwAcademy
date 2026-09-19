import { BookOpen, Languages } from 'lucide-react'
import type { LessonSection } from '@/types'
import type { LanguageMode } from '@/types'
import { LanguageCard, GrammarTypeCard } from '@/components/molecules'
import { EmptyState } from '@/components/common'
import { ExampleTable } from './ExampleTable'
import { DataTable } from './DataTable'
import styles from './LessonSectionBlock.module.css'

const LANGUAGE_LABELS: Record<Exclude<LanguageMode, 'all'>, string> = {
  english: 'English',
  urdu: 'اردو (Urdu)',
  transliteration: 'Transliteration',
  arabic: 'العربية (Arabic)',
}

export interface LessonSectionBlockProps {
  section: LessonSection
  languageMode: LanguageMode
  showCards?: boolean
  showGrammar?: boolean
  showExamples?: boolean
}

export function LessonSectionBlock({
  section,
  languageMode,
  showCards = true,
  showGrammar = true,
  showExamples = true,
}: LessonSectionBlockProps) {
  const showEnglish = showCards && !!section.content.english && (languageMode === 'all' || languageMode === 'english')
  const showUrdu = showCards && !!section.content.urdu && (languageMode === 'all' || languageMode === 'urdu')
  const showTransliteration =
    showCards && !!section.content.transliteration && (languageMode === 'all' || languageMode === 'transliteration')
  const showArabic = showCards && !!section.content.arabic && (languageMode === 'all' || languageMode === 'arabic')
  const hasCards = showEnglish || showUrdu || showTransliteration || showArabic

  const hasAnyLanguageContent = !!(
    section.content.english ||
    section.content.urdu ||
    section.content.transliteration ||
    section.content.arabic
  )
  const showLanguageEmptyState = showCards && hasAnyLanguageContent && !hasCards && languageMode !== 'all'

  return (
    <section className={styles.section} aria-labelledby={`section-${section.id}`}>
      <h2 id={`section-${section.id}`} className={styles.heading}>
        <BookOpen size={18} className={styles.headingIcon} aria-hidden="true" />
        {section.title}
      </h2>

      {section.intro && <p className={styles.intro}>{section.intro}</p>}

      {hasCards && (
        <div className={styles.cardGrid}>
          {showEnglish && <LanguageCard icon="🇬🇧" title="English" lang="en" content={section.content.english!} />}
          {showUrdu && <LanguageCard icon="🇵🇰" title="اردو" lang="ur" content={section.content.urdu!} />}
          {showTransliteration && (
            <LanguageCard icon="⌨️" title="Transliteration" lang="en" content={section.content.transliteration!} />
          )}
          {showArabic && <LanguageCard icon="🇸🇦" title="العربية" lang="ar" content={section.content.arabic!} />}
        </div>
      )}

      {showLanguageEmptyState && (
        <EmptyState
          icon={<Languages size={22} aria-hidden="true" />}
          title={`No ${LANGUAGE_LABELS[languageMode as Exclude<LanguageMode, 'all'>]} content for this section`}
          description="This section is only available in the language(s) shown under “Show All.” Switch back to see it."
        />
      )}

      {showGrammar && section.grammarTypes && section.grammarTypes.length > 0 && (
        <div className={styles.grammarGrid}>
          {section.grammarTypes.map((type) => (
            <GrammarTypeCard key={type.id} data={type} />
          ))}
        </div>
      )}

      {showExamples && section.examples && section.examples.length > 0 && <ExampleTable examples={section.examples} />}

      {section.table && <DataTable data={section.table} />}

      {section.readOnlyExercises && section.readOnlyExercises.length > 0 && (
        <div className={styles.exercises}>
          <p className={styles.exercisesTitle}>Exercises (from the text)</p>
          <ol className={styles.exercisesList}>
            {section.readOnlyExercises.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ol>
        </div>
      )}

      {section.footnotes && section.footnotes.length > 0 && (
        <ol className={styles.footnotes}>
          {section.footnotes.map((note, index) => (
            <li key={note}>
              <sup>{index + 1}</sup> {note}
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
