import type { Example } from '@/types'
import { DirectionalText } from '@/components/atoms'
import styles from './ExampleTable.module.css'

export interface ExampleTableProps {
  examples: Example[]
}

export function ExampleTable({ examples }: ExampleTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Arabic</th>
            <th>Transliteration</th>
            <th>Meaning (English)</th>
            <th>Meaning (Urdu)</th>
          </tr>
        </thead>
        <tbody>
          {examples.map((example) => (
            <tr key={example.id}>
              <td className={styles.typeCell}>{example.type ?? '—'}</td>
              <td>
                <DirectionalText lang="ar" className={styles.arabicCell}>
                  {example.arabic}
                </DirectionalText>
              </td>
              <td>
                <DirectionalText lang="en">{example.transliteration}</DirectionalText>
              </td>
              <td>{example.english}</td>
              <td>
                <DirectionalText lang="ur">{example.urdu}</DirectionalText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
