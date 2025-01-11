import { User } from "@/domain/entities/account";

describe(User.name, () => {
  it("Should create an valid user account", () => {
    const id = 12345;
    const name = "John Doe";
    const email = "john.doe@email.com";
    const password = "123456";
    const cpf = "12345678901";
    const user = new User() as any;

    expect(user.id).toBe(id);
    expect(user.name).toBe(name);
    expect(user.email).toBe(email);
    expect(user.password).toBe(password);
    expect(user.cpf).toBe(cpf);
  });

  it("Should not exist attribute car_plate", () => {
    const user = new User() as any;
    expect(user.car_plate).toBeUndefined();
  });
});
