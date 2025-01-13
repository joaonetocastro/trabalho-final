export enum AccountType {
  DRIVER,
  USER
}

export interface AccountProps {
  id: string
  name: string
  email: string
  cpf: string
  password: string
  car_plate?: string | null
  is_passenger: boolean
  is_driver: boolean
  password_algorithm: string
}
