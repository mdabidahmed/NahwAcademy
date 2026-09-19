import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { PracticeQuestion } from './PracticeQuestion'
import type { Exercise } from '@/types'

const exercise: Exercise = {
  id: 'ex-1',
  type: 'identify-word-type',
  chapterId: 'chapter-1',
  arabic: 'كِتَابٌ',
  question: 'Identify the type of this word.',
  options: ['Ism (Noun)', 'Fi‘l (Verb)', 'Ḥarf (Particle)'],
  answer: 'Ism (Noun)',
  explanation: 'كِتَابٌ takes tanwīn, so it is an Ism.',
}

describe('PracticeQuestion', () => {
  it('hides the answer until the learner submits', () => {
    render(
      <PracticeQuestion
        exercise={exercise}
        questionNumber={1}
        totalQuestions={1}
        selected={null}
        submitted={false}
        onSelect={() => {}}
        onSubmit={() => {}}
        onPrevious={() => {}}
        onNext={() => {}}
        hasPrevious={false}
        hasNext={false}
      />,
    )
    expect(screen.queryByText(/Correct!/)).not.toBeInTheDocument()
  })

  it('disables Check Answer until an option is selected, then calls onSubmit', () => {
    const onSelect = vi.fn()
    const onSubmit = vi.fn()

    const { rerender } = render(
      <PracticeQuestion
        exercise={exercise}
        questionNumber={1}
        totalQuestions={1}
        selected={null}
        submitted={false}
        onSelect={onSelect}
        onSubmit={onSubmit}
        onPrevious={() => {}}
        onNext={() => {}}
        hasPrevious={false}
        hasNext={false}
      />,
    )

    expect(screen.getByText('Check Answer')).toBeDisabled()

    fireEvent.click(screen.getByText('Ism (Noun)'))
    expect(onSelect).toHaveBeenCalledWith('Ism (Noun)')

    rerender(
      <PracticeQuestion
        exercise={exercise}
        questionNumber={1}
        totalQuestions={1}
        selected="Ism (Noun)"
        submitted={false}
        onSelect={onSelect}
        onSubmit={onSubmit}
        onPrevious={() => {}}
        onNext={() => {}}
        hasPrevious={false}
        hasNext={false}
      />,
    )

    fireEvent.click(screen.getByText('Check Answer'))
    expect(onSubmit).toHaveBeenCalled()
  })

  it('shows correct/incorrect feedback and explanation after submission', () => {
    render(
      <PracticeQuestion
        exercise={exercise}
        questionNumber={1}
        totalQuestions={1}
        selected="Ism (Noun)"
        submitted
        onSelect={() => {}}
        onSubmit={() => {}}
        onPrevious={() => {}}
        onNext={() => {}}
        hasPrevious={false}
        hasNext={false}
      />,
    )
    expect(screen.getByText('Correct!')).toBeInTheDocument()
    expect(screen.getByText(exercise.explanation!)).toBeInTheDocument()
  })
})
