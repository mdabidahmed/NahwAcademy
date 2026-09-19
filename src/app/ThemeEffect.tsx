import { useEffect } from 'react'
import { useAppSelector } from '@/hooks/useAppSelector'

export function ThemeEffect() {
  const mode = useAppSelector((state) => state.theme.mode)

  useEffect(() => {
    const root = document.documentElement
    if (mode === 'system') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', mode)
    }
  }, [mode])

  return null
}
