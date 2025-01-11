import { UserAccountProps } from "../@types/user-account";

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  cpf: string;
  car_plate?: string;

  constructor(props: UserAccountProps) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.cpf = props.cpf;
    this.car_plate = props.car_plate;
  }
}

export interface CreateAccount {
  execute(params: UserAccountProps): Promise<boolean>;
}
