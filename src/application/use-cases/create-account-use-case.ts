import { AccountProps } from "../../domain/@types/account";
import { CreateAccount } from "../../domain/entities/account";

export class CreateAccountUseCase implements CreateAccount {
  async execute(params: AccountProps): Promise<boolean> {
    return false;
  }
}
