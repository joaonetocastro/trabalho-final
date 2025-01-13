import { CreateAccount } from "@/domain/entities";
import { Controller } from "../controller";
import { Validator } from "../validator";

export class CreateAccountController implements Controller {
  constructor(
    readonly createAccountUseCase: CreateAccount,
    readonly bodyValidator: Validator
  ) { }

  async execute(body: any): Promise<any> {
    if (!this.bodyValidator.validate(body)) {
      throw new Error('Failed to validate body.')
    }
    return await this.createAccountUseCase.createAccount(body)
  }
}