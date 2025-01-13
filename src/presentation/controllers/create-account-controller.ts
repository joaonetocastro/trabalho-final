import { CreateAccount } from "@/domain/entities";
import { Controller } from "../controller";

export class CreateAccountController implements Controller {
  constructor(readonly createAccountUseCase: CreateAccount) { }

  async execute(body: any): Promise<any> {
    return await this.createAccountUseCase.execute(body)
  }
}