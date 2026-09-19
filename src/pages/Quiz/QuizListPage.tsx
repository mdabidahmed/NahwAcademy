import { Link } from 'react-router-dom'
import { ClipboardCheck } from 'lucide-react'
import { useAppSelector } from '@/hooks/useAppSelector'
import { getAllQuizzes } from '@/data/repositories/practiceRepository'
import styles from './QuizListPage.module.css'

export default function QuizListPage() {
  const quizzes = getAllQuizzes()
  const quizResults = useAppSelector((state) => state.progress.quizResults)

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Quizzes</h1>
      <div className={styles.list}>
        {quizzes.map((quiz) => {
          const bestResult = quizResults.filter((result) => result.quizId === quiz.id).at(-1)
          return (
            <Link key={quiz.id} to={`/quiz/${quiz.id}`} className={styles.card}>
              <span className={styles.icon}>
                <ClipboardCheck size={20} />
              </span>
              <div className={styles.text}>
                <span className={styles.title}>{quiz.title}</span>
                <span className={styles.meta}>{quiz.questions.length} questions</span>
              </div>
              {bestResult && (
                <span className={styles.score}>
                  Last score: {bestResult.score}/{bestResult.total}
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
