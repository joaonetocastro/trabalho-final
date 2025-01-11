import { UserAccountProps } from "../../domain/@types/user-account";
import { CreateAccount } from "../../domain/entities/user-account";

export class CreateAccountUseCase implements CreateAccount {
  async execute(params: UserAccountProps): Promise<boolean> {
    return false;
  }
}
