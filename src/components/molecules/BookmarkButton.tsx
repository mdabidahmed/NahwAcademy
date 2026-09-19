import { Bookmark } from 'lucide-react'
import { IconButton } from '@/components/atoms'

export interface BookmarkButtonProps {
  active: boolean
  onToggle: () => void
  label?: string
}

export function BookmarkButton({ active, onToggle, label = 'Bookmark' }: BookmarkButtonProps) {
  return (
    <IconButton
      icon={<Bookmark size={18} fill={active ? 'currentColor' : 'none'} />}
      label={active ? `Remove bookmark: ${label}` : `Add bookmark: ${label}`}
      active={active}
      onClick={onToggle}
    />
  )
}
