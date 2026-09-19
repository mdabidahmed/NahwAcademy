import type { DataTable as DataTableData } from '@/types'
import { DirectionalText } from '@/components/atoms'
import styles from './DataTable.module.css'

export interface DataTableProps {
  data: DataTableData
}

export function DataTable({ data }: DataTableProps) {
  return (
    <div className={styles.wrapper}>
      {data.title && <p className={styles.title}>{data.title}</p>}
      <div className={styles.scroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              {data.headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {cell.lang && cell.lang !== 'en' ? (
                      <DirectionalText lang={cell.lang}>{cell.text}</DirectionalText>
                    ) : (
                      cell.text
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
