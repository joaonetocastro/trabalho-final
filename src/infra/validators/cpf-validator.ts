import { Validator } from "@/presentation/validator";

export class CPFValidator implements Validator {
  validate(input: any): boolean {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(input)
  }
}