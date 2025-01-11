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

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;

  constructor(props: UserProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.cpf = props.cpf;
  }
}

export class Motorist extends User {
  car_plate: string;

  constructor(props: MotoristProps) {
    super(props);
    this.car_plate = props.car_plate;
  }
}
