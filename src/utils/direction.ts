import type { Direction } from '@/types'

export const LTR: Direction = 'ltr'
export const RTL: Direction = 'rtl'

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}
