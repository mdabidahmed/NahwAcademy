import { describe, expect, it } from 'vitest'
import reducer, { lessonCompleted, lessonReopened, practiceAnswered, quizCompleted } from './progressSlice'

describe('progressSlice', () => {
  it('marks a lesson complete without duplicating it', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, lessonCompleted('al-ajurrumiyyah/chapter-1/lesson-1'))
    state = reducer(state, lessonCompleted('al-ajurrumiyyah/chapter-1/lesson-1'))
    expect(state.completedLessonIds).toEqual(['al-ajurrumiyyah/chapter-1/lesson-1'])
  })

  it('reopens a completed lesson', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, lessonCompleted('lesson-key'))
    state = reducer(state, lessonReopened('lesson-key'))
    expect(state.completedLessonIds).not.toContain('lesson-key')
  })

  it('tracks practice attempts and correctness', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(state, practiceAnswered({ correct: true }))
    state = reducer(state, practiceAnswered({ correct: false }))
    expect(state.practiceStats).toEqual({ attempted: 2, correct: 1 })
  })

  it('records quiz results', () => {
    let state = reducer(undefined, { type: '@@INIT' })
    state = reducer(
      state,
      quizCompleted({
        id: 'result-1',
        quizId: 'quiz-chapter-1',
        completedAt: new Date().toISOString(),
        score: 8,
        total: 10,
        answers: [],
      }),
    )
    expect(state.quizResults).toHaveLength(1)
    expect(state.quizResults[0].score).toBe(8)
  })

  it('bumps the study streak on the first activity of the day', () => {
    const state = reducer(undefined, practiceAnswered({ correct: true }))
    expect(state.studyStreak).toBe(1)
    expect(state.lastStudiedDate).toBe(new Date().toISOString().slice(0, 10))
  })
})
