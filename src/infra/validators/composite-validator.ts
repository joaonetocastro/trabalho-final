import { Validator } from "@/presentation/validator";

export class CompositeValidator implements Validator {
  validators: Record<string, Validator>

  constructor(validators: Record<string, Validator>) {
    this.validators = validators
  }

  validate(input: any): boolean {
    return true
  }
}