import { Motorist } from "@/domain/entities/account";

describe(Motorist.name, () => {
  it("Should create an valid motorist account", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const car_plate = "ABC-1234";
    const motorist = new Motorist() as any;

    expect(motorist.id).toBe(id);
    expect(motorist.name).toBe(name);
    expect(motorist.email).toBe(email);
    expect(motorist.password).toBe(password);
    expect(motorist.cpf).toBe(cpf);
    expect(motorist.car_plate).toBe(car_plate);
  });

  it("Should exist attribute car_plate", () => {
    const motorist = new Motorist() as any;
    expect(motorist.car_plate).toBeDefined();
  });
});
