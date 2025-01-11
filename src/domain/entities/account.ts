class UserBase {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly cpf: string,
    readonly car_plate?: string
  ) {}
}

export class User extends UserBase {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    cpf: string
  ) {
    super(id, name, email, password, cpf);
  }
}

export class Motorist extends UserBase {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    cpf: string,
    car_plate: string
  ) {
    super(id, name, email, password, cpf, car_plate);
  }
}
