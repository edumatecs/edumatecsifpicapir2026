export interface ScheduleActivity {
  activityId: string
  label?: string
}

export interface ScheduleItem {
  id: string
  date: string
  time: string
  title?: string
  description?: string
  activities?: ScheduleActivity[]
}

export interface ScheduleDay {
  date: string
  label: string
  items: ScheduleItem[]
}