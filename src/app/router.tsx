import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppShell } from '@/components/templates'
import { Spinner } from '@/components/atoms'
import styles from './router.module.css'

function lazyPage(loader: Parameters<typeof lazy>[0]) {
  const Component = lazy(loader)
  return (
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  )
}

function PageFallback() {
  return (
    <div className={styles.fallback}>
      <Spinner label="Loading page" />
    </div>
  )
}

export const routes = [
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: lazyPage(() => import('@/pages/Dashboard')) },
      { path: 'learn', element: lazyPage(() => import('@/pages/Learn')) },
      { path: 'learn/:bookId', element: lazyPage(() => import('@/pages/Learn')) },
      { path: 'learn/:bookId/:chapterId', element: lazyPage(() => import('@/pages/Learn')) },
      { path: 'learn/:bookId/:chapterId/:lessonId', element: lazyPage(() => import('@/pages/Lesson')) },
      { path: 'practice', element: lazyPage(() => import('@/pages/Practice')) },
      { path: 'practice/:exerciseId', element: lazyPage(() => import('@/pages/Practice')) },
      { path: 'quiz', element: lazyPage(() => import('@/pages/Quiz/QuizListPage')) },
      { path: 'quiz/:quizId', element: lazyPage(() => import('@/pages/Quiz/QuizRunnerPage')) },
      { path: 'flashcards', element: lazyPage(() => import('@/pages/Flashcards')) },
      { path: 'notes', element: lazyPage(() => import('@/pages/Notes')) },
      { path: 'bookmarks', element: lazyPage(() => import('@/pages/Bookmarks')) },
      { path: 'progress', element: lazyPage(() => import('@/pages/Progress')) },
      { path: 'library', element: lazyPage(() => import('@/pages/Library')) },
      { path: 'tools', element: lazyPage(() => import('@/pages/Tools/ToolsIndexPage')) },
      { path: 'tools/arabic-keyboard', element: lazyPage(() => import('@/pages/Tools/ArabicKeyboardPage')) },
      { path: 'tools/transliteration', element: lazyPage(() => import('@/pages/Tools/TransliterationPage')) },
      { path: 'tools/grammar-charts', element: lazyPage(() => import('@/pages/Tools/GrammarChartsPage')) },
      { path: 'tools/dictionary', element: lazyPage(() => import('@/pages/Tools/DictionaryPage')) },
      { path: 'settings', element: lazyPage(() => import('@/pages/Settings')) },
      { path: '*', element: lazyPage(() => import('@/pages/NotFound')) },
    ],
  },
]

export const router = createBrowserRouter(routes)
