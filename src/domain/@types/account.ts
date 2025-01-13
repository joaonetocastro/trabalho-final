export enum AccountType {
  DRIVER,
  USER
}

export interface AccountProps {
  id: number
  name: string
  email: string
  password: string
  type: AccountType
  cpf: string
  car_plate?: string
}