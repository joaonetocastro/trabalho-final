import { Validator } from "@/presentation/validator";

export class EmailValidator implements Validator {
  validate(email: any): boolean {
    if (typeof email !== 'string') return false
    if (!email.includes('@')) return false

    const domain = email.split('@')[1]!

    if (!domain.includes('.')) return false

    return true
  }
}