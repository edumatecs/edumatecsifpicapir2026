export type YesNo = 'Sim' | 'Não'

export interface Registration {
  name: string
  cpf: string
  phone: string
  city: string

  accommodation: YesNo

  hasSpecialNeed: YesNo
  specialNeedDescription?: string

  hasSubmission: YesNo

  workshop1Id: string
  workshop2Id: string
  workshop3Id: string
  minicourseId: string

  receipt: File
}