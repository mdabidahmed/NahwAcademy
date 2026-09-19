import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { rootReducer } from '@/store'
import { ToastProvider } from '@/components/common'
import { routes } from './router'

function renderAt(path: string) {
  const store = configureStore({ reducer: rootReducer })
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return render(
    <Provider store={store}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Provider>,
  )
}

describe('app routing', () => {
  it('renders the canonical opening lesson directly from its URL', async () => {
    renderAt('/learn/al-ajurrumiyyah/chapter-1/lesson-1')
    expect(await screen.findByRole('heading', { level: 1, name: /Al-Naḥw/ })).toBeInTheDocument()
  })

  it('redirects /learn to the first lesson of the first chapter', async () => {
    renderAt('/learn')
    expect(await screen.findByRole('heading', { level: 1, name: /Al-Naḥw/ })).toBeInTheDocument()
  })

  it('shows a not-found page for an unknown route', async () => {
    renderAt('/this-route-does-not-exist')
    expect(await screen.findByText('Page not found')).toBeInTheDocument()
  })
})
