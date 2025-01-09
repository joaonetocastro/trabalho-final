import { Validator } from "@/presentation/validator";

export class EmailValidator implements Validator {
  validate(email: any): boolean {
    if (!email.includes('@')) return false
    return true
  }
}