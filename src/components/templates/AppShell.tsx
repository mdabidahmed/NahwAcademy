import { Outlet } from 'react-router-dom'
import { Header, Sidebar, SearchDialog } from '@/components/organisms'
import { Drawer } from '@/components/common'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut'
import { sidebarDrawerClosed, searchDialogOpened, searchDialogClosed } from '@/store/slices/uiSlice'
import styles from './AppShell.module.css'

export function AppShell() {
  const dispatch = useAppDispatch()
  const drawerOpen = useAppSelector((state) => state.ui.sidebarDrawerOpen)
  const searchOpen = useAppSelector((state) => state.ui.searchDialogOpen)

  useKeyboardShortcut('k', () => {
    dispatch(searchOpen ? searchDialogClosed() : searchDialogOpened())
  })

  return (
    <div className={styles.shell}>
      <Header />
      <div className={styles.body}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>

        <Drawer open={drawerOpen} onClose={() => dispatch(sidebarDrawerClosed())} title="Menu" side="left">
          <Sidebar onNavigate={() => dispatch(sidebarDrawerClosed())} />
        </Drawer>

        <main className={styles.main} id="main-content">
          <Outlet />
        </main>
      </div>

      <SearchDialog />
    </div>
  )
}
