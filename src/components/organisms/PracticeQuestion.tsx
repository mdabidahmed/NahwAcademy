import type { Exercise } from '@/types'
import { Button, DirectionalText, ProgressBar } from '@/components/atoms'
import { QuizOption } from '@/components/molecules'
import styles from './PracticeQuestion.module.css'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export interface PracticeQuestionProps {
  exercise: Exercise
  questionNumber: number
  totalQuestions: number
  selected: string | null
  submitted: boolean
  onSelect: (option: string) => void
  onSubmit: () => void
  onPrevious: () => void
  onNext: () => void
  hasPrevious: boolean
  hasNext: boolean
}

export function PracticeQuestion({
  exercise,
  questionNumber,
  totalQuestions,
  selected,
  submitted,
  onSelect,
  onSubmit,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: PracticeQuestionProps) {
  const isCorrect = selected === exercise.answer

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressRow}>
        <span className={styles.counter}>
          Question {questionNumber} of {totalQuestions}
        </span>
        <ProgressBar value={questionNumber} max={totalQuestions} label="Practice progress" size="sm" />
      </div>

      {exercise.arabic && (
        <DirectionalText as="p" lang="ar" large className={styles.arabic}>
          {exercise.arabic}
        </DirectionalText>
      )}

      <p className={styles.question}>{exercise.question}</p>

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
              onClick={() => onSelect(option)}
            />
          )
        })}
      </div>

      {submitted && (
        <div className={styles.feedback} role="status">
          <p className={isCorrect ? styles.correctText : styles.incorrectText}>
            {isCorrect ? 'Correct!' : 'Not quite — review the explanation below.'}
          </p>
          {exercise.explanation && <p className={styles.explanation}>{exercise.explanation}</p>}
        </div>
      )}

      <div className={styles.footer}>
        <Button variant="secondary" onClick={onPrevious} disabled={!hasPrevious}>
          Previous
        </Button>
        {submitted ? (
          <Button onClick={onNext} disabled={!hasNext}>
            Next
          </Button>
        ) : (
          <Button onClick={onSubmit} disabled={!selected}>
            Check Answer
          </Button>
        )}
      </div>
    </div>
  )
}
