import { CreateAccount } from "../../domain/entities/account";

export class AccountService implements CreateAccount {
  constructor(
    // TODO: Implement accountRepository
    private readonly accountRepository: {}
  ) { }

  async createAccount(): Promise<any> { }
}
