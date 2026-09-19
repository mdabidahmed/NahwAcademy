import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { CheckCircle2, XCircle, RotateCcw, ListChecks } from 'lucide-react'
import { QuizPanel } from '@/components/organisms'
import { Button, ProgressBar } from '@/components/atoms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { quizCompleted } from '@/store/slices/progressSlice'
import { getQuizById } from '@/data/repositories/practiceRepository'
import { createId } from '@/utils/id'
import type { QuizAnswerRecord } from '@/types'
import styles from './QuizRunnerPage.module.css'

export default function QuizRunnerPage() {
  const { quizId = '' } = useParams<{ quizId: string }>()
  const dispatch = useAppDispatch()
  const quiz = getQuizById(quizId)

  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>([])
  const [finished, setFinished] = useState(false)
  const [reviewMode, setReviewMode] = useState(false)

  if (!quiz) return <Navigate to="/quiz" replace />

  const question = quiz.questions[index]
  const isLastQuestion = index === quiz.questions.length - 1

  function handleSubmit() {
    if (!selected) return
    setSubmitted(true)
  }

  function handleNext() {
    const record: QuizAnswerRecord = {
      questionId: question.id,
      selected: selected ?? '',
      correct: selected === question.answer,
    }
    const nextAnswers = [...answers, record]
    setAnswers(nextAnswers)

    if (isLastQuestion) {
      const score = nextAnswers.filter((entry) => entry.correct).length
      dispatch(
        quizCompleted({
          id: createId('quiz-result'),
          quizId: quiz!.id,
          completedAt: new Date().toISOString(),
          score,
          total: quiz!.questions.length,
          answers: nextAnswers,
        }),
      )
      setFinished(true)
    } else {
      setIndex((current) => current + 1)
      setSelected(null)
      setSubmitted(false)
    }
  }

  function handleRetry() {
    setIndex(0)
    setSelected(null)
    setSubmitted(false)
    setAnswers([])
    setFinished(false)
    setReviewMode(false)
  }

  if (finished) {
    const score = answers.filter((entry) => entry.correct).length
    const total = quiz.questions.length
    const percent = Math.round((score / total) * 100)

    return (
      <div className={styles.resultWrapper}>
        <div className={styles.resultCard}>
          <h1 className={styles.resultTitle}>Quiz Complete</h1>
          <p className={styles.resultSubtitle}>{quiz.title}</p>

          <div className={styles.scoreCircle}>
            <span className={styles.scorePercent}>{percent}%</span>
          </div>

          <ProgressBar value={score} max={total} label="Quiz score" tone="success" />
          <p className={styles.scoreText}>
            {score} of {total} correct
          </p>

          <div className={styles.resultActions}>
            <Button variant="secondary" onClick={() => setReviewMode((value) => !value)}>
              <ListChecks size={16} /> {reviewMode ? 'Hide Review' : 'Review Answers'}
            </Button>
            <Button onClick={handleRetry}>
              <RotateCcw size={16} /> Retry Quiz
            </Button>
          </div>

          {reviewMode && (
            <ul className={styles.reviewList}>
              {quiz.questions.map((q, i) => {
                const record = answers[i]
                return (
                  <li key={q.id} className={styles.reviewItem}>
                    {record.correct ? (
                      <CheckCircle2 size={16} className={styles.correctIcon} />
                    ) : (
                      <XCircle size={16} className={styles.incorrectIcon} />
                    )}
                    <div>
                      <p className={styles.reviewQuestion}>{q.question}</p>
                      <p className={styles.reviewAnswer}>
                        Your answer: {record.selected || '—'} {!record.correct && `· Correct: ${q.answer}`}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <QuizPanel
        quizTitle={quiz.title}
        question={question}
        questionNumber={index + 1}
        totalQuestions={quiz.questions.length}
        selected={selected}
        submitted={submitted}
        onSelect={(option) => !submitted && setSelected(option)}
        onSubmit={handleSubmit}
        onNext={handleNext}
        isLastQuestion={isLastQuestion}
      />
    </div>
  )
}
