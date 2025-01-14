import { AccountType } from "@/domain/@types/account";
import { AccountRepository } from "@/infra/repositories/account-repository";

describe("Account Repository", () => {
  test("should create an account", async () => {
    const account = {
      name: "test_01",
      email: "test_01@email.com",
      password: "test_01",
      id: "1",
      cpf: "11221212121",
      type: AccountType.DRIVER,
      password_algorithm: "bcrypt",
    };

    const repository = new AccountRepository();

    const accountCreated = await repository.createAccount(account);
    expect(accountCreated.name).toBe(account.name);
    expect(accountCreated.email).toBe(account.email);
    expect(accountCreated.cpf).toBe(account.cpf);
  });

  test("should not create an account if email already exists", async () => {
    const account = {
      name: "test_02",
      email: "test_02@email.com",
      password: "test_02",
      id: "1",
      cpf: "11221212121",
      type: AccountType.DRIVER,
      password_algorithm: "bcrypt",
    };

    const repository = new AccountRepository();
    await repository.createAccount(account);
    expect(() => repository.createAccount(account)).rejects.toThrow(
      new Error("Email already exists")
    );
  });

  test("should find an account by email", async () => {
    const account = {
      name: "test_03",
      email: "test_03@email.com",
      password: "test_03",
      id: "1",
      cpf: "11221212121",
      type: AccountType.DRIVER,
      password_algorithm: "bcrypt",
    };

    const repository = new AccountRepository();
    await repository.createAccount(account);

    const accountFound = await repository.findAccountByEmail(account.email);
    expect(accountFound?.name).toBe(account.name);
    expect(accountFound?.email).toBe(account.email);
    expect(accountFound?.cpf).toBe(account.cpf);
  });
});
