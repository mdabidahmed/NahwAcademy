import { useState } from 'react'
import { PenLine, ArrowRight } from 'lucide-react'
import { Button, DirectionalText } from '@/components/atoms'
import { QuizOption } from '@/components/molecules'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { practiceAnswered } from '@/store/slices/progressSlice'
import { getQuickPracticeExercise } from '@/data/repositories/practiceRepository'
import styles from './QuickPracticeWidget.module.css'

const LETTERS = ['A', 'B', 'C', 'D']

export function QuickPracticeWidget() {
  const dispatch = useAppDispatch()
  const exercise = getQuickPracticeExercise()
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const isCorrect = selected === exercise.answer

  function handleSubmit() {
    if (!selected || submitted) return
    setSubmitted(true)
    dispatch(practiceAnswered({ correct: selected === exercise.answer }))
  }

  function handleReset() {
    setSelected(null)
    setSubmitted(false)
  }

  return (
    <section className={styles.card} aria-labelledby="quick-practice-title">
      <div className={styles.header}>
        <PenLine size={16} className={styles.headerIcon} aria-hidden="true" />
        <h2 id="quick-practice-title" className={styles.title}>
          Quick Practice
        </h2>
      </div>

      <p className={styles.question}>{exercise.question}</p>

      {exercise.arabic && (
        <DirectionalText as="p" lang="ar" large className={styles.arabic}>
          {exercise.arabic}
        </DirectionalText>
      )}

      <div className={styles.options}>
        {exercise.options?.map((option, index) => {
          let state: 'idle' | 'selected' | 'correct' | 'incorrect' = 'idle'
          if (submitted) {
            if (option === exercise.answer) state = 'correct'
            else if (option === selected) state = 'incorrect'
          } else if (option === selected) {
            state = 'selected'
          }

          return (
            <QuizOption
              key={option}
              letter={LETTERS[index]}
              label={option}
              state={state}
              disabled={submitted}
              onClick={() => setSelected(option)}
            />
          )
        })}
      </div>

      {submitted && (
        <div className={styles.feedback} role="status">
          <p className={isCorrect ? styles.correctText : styles.incorrectText}>
            {isCorrect ? 'Correct!' : 'Not quite.'}
          </p>
          <p className={styles.explanation}>{exercise.explanation}</p>
        </div>
      )}

      {submitted ? (
        <Button fullWidth variant="secondary" onClick={handleReset}>
          Try another
        </Button>
      ) : (
        <Button fullWidth disabled={!selected} onClick={handleSubmit}>
          Check Answer <ArrowRight size={14} />
        </Button>
      )}
    </section>
  )
}
