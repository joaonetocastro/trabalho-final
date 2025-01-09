import { Validator } from "@/presentation/validator";

export class CPFValidator implements Validator {
  validate(input: any): boolean {
    return true
  }
}