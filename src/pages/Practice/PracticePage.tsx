import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PracticeQuestion } from '@/components/organisms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { practiceAnswered } from '@/store/slices/progressSlice'
import { getPracticeExercises } from '@/data/repositories/practiceRepository'
import styles from './PracticePage.module.css'

export function PracticePage() {
  const dispatch = useAppDispatch()
  const { exerciseId } = useParams<{ exerciseId?: string }>()
  const exercises = getPracticeExercises()

  const startIndex = useMemo(() => {
    if (!exerciseId) return 0
    const found = exercises.findIndex((exercise) => exercise.id === exerciseId)
    return found >= 0 ? found : 0
  }, [exerciseId, exercises])

  const [index, setIndex] = useState(startIndex)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [submittedSet, setSubmittedSet] = useState<Set<number>>(new Set())

  const exercise = exercises[index]
  const selected = answers[index] ?? null
  const submitted = submittedSet.has(index)

  function handleSelect(option: string) {
    if (submitted) return
    setAnswers((current) => ({ ...current, [index]: option }))
  }

  function handleSubmit() {
    if (!selected || submitted) return
    setSubmittedSet((current) => new Set(current).add(index))
    dispatch(practiceAnswered({ correct: selected === exercise.answer }))
  }

  function handlePrevious() {
    setIndex((current) => Math.max(0, current - 1))
  }

  function handleNext() {
    setIndex((current) => Math.min(exercises.length - 1, current + 1))
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Practice</h1>
      <PracticeQuestion
        exercise={exercise}
        questionNumber={index + 1}
        totalQuestions={exercises.length}
        selected={selected}
        submitted={submitted}
        onSelect={handleSelect}
        onSubmit={handleSubmit}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={index > 0}
        hasNext={index < exercises.length - 1}
      />
    </div>
  )
}
