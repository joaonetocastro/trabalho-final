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
  car_plate?: string
  type: AccountType
  password_algorithm: string
}
