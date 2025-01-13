import { AccountProps } from "@/domain/@types/account";
import { CreateAccount, User } from "../../domain/entities/account";
import { CreateAccountRepository } from "../repositories/create-account-repository";
import { FindAccountByEmail } from "../repositories/find-account-by-email";

export class AccountService implements CreateAccount {
  constructor(
    private readonly createAcountRepository: CreateAccountRepository,
    private readonly findAccountByEmail: FindAccountByEmail
  ) { }

  async createAccount(input: AccountProps): Promise<User> {
    const account = await this.findAccountByEmail.findAccountByEmail(input.email)
    if (account) throw new Error('Email in use.')
    return await this.createAcountRepository.createAccount(input)
  }
}
