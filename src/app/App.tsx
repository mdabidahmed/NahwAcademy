import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from '@/store'
import { goalsRolledOver } from '@/store/slices/goalsSlice'
import { ToastProvider } from '@/components/common'
import { ThemeEffect } from './ThemeEffect'
import { router } from './router'

function GoalsRollover() {
  useEffect(() => {
    store.dispatch(goalsRolledOver())
  }, [])
  return null
}

export function App() {
  return (
    <Provider store={store}>
      <ThemeEffect />
      <GoalsRollover />
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Provider>
  )
}
