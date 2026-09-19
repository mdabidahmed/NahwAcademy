import { useParams } from 'react-router-dom'
import {
  LayoutDashboard,
  BookOpen,
  Pencil,
  ClipboardCheck,
  Layers,
  StickyNote,
  BarChart3,
  Library,
  Keyboard,
  Settings,
} from 'lucide-react'
import { SidebarNavItem } from '@/components/molecules'
import { ChapterTree } from './ChapterTree'
import { Divider } from '@/components/atoms'
import { getAllBooks } from '@/data/repositories/bookRepository'
import styles from './Sidebar.module.css'

export interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const params = useParams<{ bookId?: string; chapterId?: string; lessonId?: string }>()
  const book = getAllBooks()[0]

  return (
    <nav className={styles.sidebar} aria-label="Main">
      <ul className={styles.navList}>
        <SidebarNavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" onNavigate={onNavigate} />
        <SidebarNavItem href="/learn" icon={<BookOpen size={18} />} label="Learn Nahw" onNavigate={onNavigate} />
        <SidebarNavItem href="/practice" icon={<Pencil size={18} />} label="Practice" onNavigate={onNavigate} />
        <SidebarNavItem href="/quiz" icon={<ClipboardCheck size={18} />} label="Quizzes" onNavigate={onNavigate} />
        <SidebarNavItem href="/flashcards" icon={<Layers size={18} />} label="Flashcards" onNavigate={onNavigate} />
        <SidebarNavItem href="/notes" icon={<StickyNote size={18} />} label="Notes" onNavigate={onNavigate} />
        <SidebarNavItem href="/progress" icon={<BarChart3 size={18} />} label="Progress" onNavigate={onNavigate} />
      </ul>

      <div className={styles.treeWrap}>
        <ChapterTree
          book={book}
          activeChapterId={params.chapterId}
          activeLessonId={params.lessonId}
          onNavigate={onNavigate}
        />
      </div>

      <Divider />

      <ul className={styles.navList}>
        <SidebarNavItem href="/library" icon={<Library size={18} />} label="Book Library" onNavigate={onNavigate} />
        <SidebarNavItem href="/tools" icon={<Keyboard size={18} />} label="Arabic Tools" onNavigate={onNavigate} />
        <SidebarNavItem href="/settings" icon={<Settings size={18} />} label="Settings" onNavigate={onNavigate} />
      </ul>
    </nav>
  )
}
