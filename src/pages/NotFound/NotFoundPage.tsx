import { Compass } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { EmptyState } from '@/components/common'
import { Button } from '@/components/atoms'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <EmptyState
        icon={<Compass size={40} />}
        title="Page not found"
        description="The page you're looking for doesn't exist or has moved."
        action={<Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>}
      />
    </div>
  )
}
