import type { ReactElement } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { rootReducer, type RootState } from '@/store'

export function renderWithProviders(
  ui: ReactElement,
  options: { preloadedState?: Partial<RootState>; route?: string } = {},
) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: options.preloadedState,
  })

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[options.route ?? '/']}>{ui}</MemoryRouter>
      </Provider>,
    ),
  }
}
