import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Search, Home, Library, BarChart3, Bookmark, ChevronDown, Menu } from 'lucide-react'
import { Avatar, IconButton } from '@/components/atoms'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { searchDialogOpened, sidebarDrawerOpened } from '@/store/slices/uiSlice'
import styles from './Header.module.css'

export function Header() {
  const dispatch = useAppDispatch()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <IconButton
          icon={<Menu size={20} />}
          label="Open navigation menu"
          className={styles.menuButton}
          onClick={() => dispatch(sidebarDrawerOpened())}
        />
        <Link to="/" className={styles.brand}>
          <span className={styles.logoIcon} aria-hidden="true">
            <BookOpen size={22} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Nahw Academy</span>
            <span className={styles.brandTagline}>Understand Arabic, Deepen Imaan</span>
          </span>
        </Link>
      </div>

      <div className={styles.center}>
        <button type="button" className={styles.searchBox} onClick={() => dispatch(searchDialogOpened())}>
          <Search size={16} className={styles.searchIcon} aria-hidden="true" />
          <span className={styles.searchPlaceholder}>Search lessons, topics, or Arabic words…</span>
          <span className={styles.shortcut}>⌘ K</span>
        </button>
      </div>

      <nav className={styles.right} aria-label="Primary">
        <Link to="/dashboard" className={styles.navLink}>
          <Home size={16} />
          <span className={styles.navLabel}>Home</span>
        </Link>
        <Link to="/library" className={styles.navLink}>
          <Library size={16} />
          <span className={styles.navLabel}>Library</span>
        </Link>
        <Link to="/progress" className={styles.navLink}>
          <BarChart3 size={16} />
          <span className={styles.navLabel}>Progress</span>
        </Link>
        <Link to="/bookmarks" className={styles.navLink}>
          <Bookmark size={16} />
          <span className={styles.navLabel}>Bookmarks</span>
        </Link>

        <div className={styles.userMenuWrap}>
          <button
            type="button"
            className={styles.userMenu}
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <Avatar initials="A" />
            <span className={styles.userName}>Abid</span>
            <ChevronDown size={14} />
          </button>
          {menuOpen && (
            <div className={styles.menu} role="menu">
              <Link to="/settings" role="menuitem" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
                Settings
              </Link>
              <Link to="/progress" role="menuitem" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
                My Progress
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
