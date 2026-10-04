import type { Person } from './person'

export type ActivityType =
  | 'palestra'
  | 'minicurso'
  | 'oficina'
  | 'roda-de-conversa'

export interface ActivityParticipant {
  person: Person
  role: string
}

export interface Activity {
  id: string
  type: ActivityType
  title: string
  participants: ActivityParticipant[]
  vacancies?: number
  description?: string
  objective?: string
  audience?: string
  prerequisites?: string
  location?: string
  resources?: string[]
}
