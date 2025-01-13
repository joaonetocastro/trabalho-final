import { AccountProps } from "@/domain/@types/account";
import { CreateAccount, User } from "../../domain/entities/account";
import { CreateAccountRepository } from "../repositories/create-account-repository";

export class AccountService implements CreateAccount {
  constructor(
    private readonly accountRepository: CreateAccountRepository
  ) { }

  async createAccount(input: AccountProps): Promise<User> {
    return await this.accountRepository.createAccount(input)
  }
}
