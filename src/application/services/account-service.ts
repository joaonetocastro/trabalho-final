import { CreateAccount } from "../../domain/entities/user-account";

export class AccountService implements CreateAccount {
  constructor(
    // TODO: Implement accountRepository
    private readonly accountRepository: {}
  ) {}

  async execute(): Promise<any> {}
}
