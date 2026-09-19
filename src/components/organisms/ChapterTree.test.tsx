import { describe, expect, it } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '@/test/renderWithProviders'
import { ChapterTree } from './ChapterTree'
import { books } from '@/data/books'

const book = books[0]

describe('ChapterTree', () => {
  it('shows chapter names in the sidebar', () => {
    renderWithProviders(<ChapterTree book={book} />, {
      preloadedState: { ui: { expandedChapterIds: [], languageMode: 'all', sidebarDrawerOpen: false, searchDialogOpen: false } },
    })
    expect(screen.getByText(/Chapter 1: Foundations of Naḥw/)).toBeInTheDocument()
    expect(screen.getByText(/Chapter 8: Jumal/)).toBeInTheDocument()
  })

  it('expands a chapter to reveal its lessons, and collapses again', () => {
    renderWithProviders(<ChapterTree book={book} />, {
      preloadedState: { ui: { expandedChapterIds: [], languageMode: 'all', sidebarDrawerOpen: false, searchDialogOpen: false } },
    })

    expect(screen.queryByText(/Al-Naḥw — Arabic Grammar/)).not.toBeInTheDocument()

    fireEvent.click(screen.getByText(/Chapter 1: Foundations of Naḥw/))
    expect(screen.getByText(/Al-Naḥw — Arabic Grammar/)).toBeInTheDocument()

    fireEvent.click(screen.getByText(/Chapter 1: Foundations of Naḥw/))
    expect(screen.queryByText(/Al-Naḥw — Arabic Grammar/)).not.toBeInTheDocument()
  })

  it('marks the active lesson with aria-current', () => {
    renderWithProviders(<ChapterTree book={book} activeChapterId="chapter-1" activeLessonId="lesson-1" />, {
      preloadedState: { ui: { expandedChapterIds: ['chapter-1'], languageMode: 'all', sidebarDrawerOpen: false, searchDialogOpen: false } },
    })

    const activeLink = screen.getByText(/Al-Naḥw — Arabic Grammar/).closest('a')
    expect(activeLink).toHaveAttribute('aria-current', 'page')
  })
})
