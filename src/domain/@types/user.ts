export enum AccountType {
  MOTORIST,
  USER,
}

interface UserBaseProps {
  id: number;
  name: string;
  email: string;
  password: string;
  type: AccountType;
  cpf: string;
}

export interface UserProps extends UserBaseProps {}

export interface MotoristProps extends UserBaseProps {
  car_plate: string;
}
