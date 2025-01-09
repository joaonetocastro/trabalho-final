import { Validator } from "@/presentation/validator";

export class EmailValidator implements Validator {
  validate(email: any): boolean {
    return true
  }
}