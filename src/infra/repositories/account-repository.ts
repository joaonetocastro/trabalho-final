import { CreateAccountRepository } from "@/application/repositories/create-account-repository";
import { FindAccountByEmail } from "@/application/repositories/find-account-by-email";
import { AccountProps } from "@/domain/@types/account";
import { User } from "@/domain/entities";

const accounts: User[] = [];

export class AccountRepository
  implements CreateAccountRepository, FindAccountByEmail
{
  async createAccount(input: AccountProps): Promise<User> {
    const emailAlreadyExists = await this.findAccountByEmail(input.email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const account = new User(input);
    accounts.push(account);

    return account;
  }

  async findAccountByEmail(email: string): Promise<User | null> {
    const account = await accounts.find((account) => account.email === email);
    return account || null;
  }
}
