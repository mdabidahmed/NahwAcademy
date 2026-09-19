import { useEffect } from 'react'

export function useKeyboardShortcut(key: string, handler: () => void, withMeta = true): void {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const modifierPressed = withMeta ? event.metaKey || event.ctrlKey : true
      if (modifierPressed && event.key.toLowerCase() === key.toLowerCase()) {
        event.preventDefault()
        handler()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [key, handler, withMeta])
}
