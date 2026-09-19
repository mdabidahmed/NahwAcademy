import type { Exercise } from '@/types'
import { Button, DirectionalText, ProgressBar } from '@/components/atoms'
import { QuizOption } from '@/components/molecules'
import styles from './QuizPanel.module.css'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export interface QuizPanelProps {
  quizTitle: string
  question: Exercise
  questionNumber: number
  totalQuestions: number
  selected: string | null
  submitted: boolean
  onSelect: (option: string) => void
  onSubmit: () => void
  onNext: () => void
  isLastQuestion: boolean
}

export function QuizPanel({
  quizTitle,
  question,
  questionNumber,
  totalQuestions,
  selected,
  submitted,
  onSelect,
  onSubmit,
  onNext,
  isLastQuestion,
}: QuizPanelProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>{quizTitle}</h1>
        <span className={styles.counter}>
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      <ProgressBar value={questionNumber} max={totalQuestions} label="Quiz progress" />

      {question.arabic && (
        <DirectionalText as="p" lang="ar" large className={styles.arabic}>
          {question.arabic}
        </DirectionalText>
      )}

      <p className={styles.question}>{question.question}</p>

      <div className={styles.options}>
        {question.options?.map((option, index) => {
          let state: 'idle' | 'selected' | 'correct' | 'incorrect' = 'idle'
          if (submitted) {
            if (option === question.answer) state = 'correct'
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

      <div className={styles.footer}>
        {submitted ? (
          <Button fullWidth onClick={onNext}>
            {isLastQuestion ? 'See Results' : 'Next Question'}
          </Button>
        ) : (
          <Button fullWidth onClick={onSubmit} disabled={!selected}>
            Submit Answer
          </Button>
        )}
      </div>
    </div>
  )
}
