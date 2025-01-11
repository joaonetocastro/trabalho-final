import { AccountType } from "@/domain/@types/user-account";
import { User } from "@/domain/entities/user-account";

describe(User.name, () => {
  it("should create a valid user account", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const user = new User({
      id,
      name,
      email,
      password,
      cpf,
      type: AccountType.USER,
    });

    expect(user.id).toBe(id);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.cpf).toBe(cpf);
  });

  it("Should not exist attribute car_plate", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const user = new User({
      id,
      name,
      email,
      password,
      cpf,
      type: AccountType.USER,
    }) as any;

    expect(user.car_plate).toBeUndefined();
  });

  it("should create a valid motorist account", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const car_plate = "ABC-1234";
    const motorist = new User({
      id,
      name,
      email,
      password,
      cpf,
      car_plate,
      type: AccountType.MOTORIST,
    });

    expect(motorist.id).toBe(id);
    expect(motorist.name).toBe(name);
    expect(motorist.email).toBe(email);
    expect(motorist.password).toBe(password);
    expect(motorist.cpf).toBe(cpf);
    expect(motorist.car_plate).toBe(car_plate);
  });

  it("Should exist attribute car_plate", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const car_plate = "ABC-1234";
    const motorist = new User({
      id,
      name,
      email,
      password,
      cpf,
      car_plate,
      type: AccountType.MOTORIST,
    });

    expect(motorist.car_plate).toBeDefined();
  });
});
