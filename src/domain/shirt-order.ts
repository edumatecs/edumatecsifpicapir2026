export type ShirtSize = 'PP' | 'P' | 'M' | 'G' | 'GG' | 'Outro'

export type PaymentMethod = 'especie' | 'pix'

export interface ShirtOrder {
  name: string
  size: ShirtSize
  customSize?: string
  phone: string
  email: string
  paymentMethod: PaymentMethod
  receipt?: File
}
