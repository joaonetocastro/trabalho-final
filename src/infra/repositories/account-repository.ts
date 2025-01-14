import { CreateAccountRepository } from "@/application/repositories/create-account-repository";
import { FindAccountByEmail } from "@/application/repositories/find-account-by-email";
import { AccountProps } from "@/domain/@types/account";
import { User } from "@/domain/entities";

const accounts: User[] = [];

export class AccountRepository
  implements CreateAccountRepository, FindAccountByEmail
{
  async createAccount(input: AccountProps): Promise<User> {
    return new Promise((resolve, reject) => {
      return input;
    });
  }

  async findAccountByEmail(email: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      const account = accounts.find((account) => account.email === email);
      return account || null;
    });
  }
}
