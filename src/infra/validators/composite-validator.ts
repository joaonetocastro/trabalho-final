import { Validator } from "@/presentation/validator";

export class CompositeValidator implements Validator {
  validators: Record<string, Validator>

  constructor(validators: Record<string, Validator>) {
    this.validators = validators
  }

  validate(input: any): boolean {
    for (const [key, validator] of Object.entries(this.validators)) {
      if (!validator.validate(!input[key])) return false
    }
    return true
  }
}