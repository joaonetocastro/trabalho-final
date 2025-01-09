import { Validator } from "@/presentation/validator";

export class RequiredFieldValidator implements Validator {
  validate(input: any): boolean {
    return input !== null && input !== undefined
  }
}