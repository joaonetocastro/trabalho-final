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
});
