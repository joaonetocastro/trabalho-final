export enum AccountType {
  MOTORIST,
  USER,
}

export interface UserAccountProps {
  id: number;
  name: string;
  email: string;
  password: string;
  type: AccountType;
  cpf: string;
  car_plate?: string;
}
