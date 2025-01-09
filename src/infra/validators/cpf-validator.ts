import { Validator } from "@/presentation/validator";

export class CPFValidator implements Validator {
  private validateDigits(cpf: string): boolean {
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) return false;

    const digits = cleanCPF.split('').map(Number);

    const calc = (factor: number) =>
      digits
        .slice(0, factor - 1)
        .reduce((sum, num, idx) => sum + num * (factor - idx), 0);

    const check1 = (calc(10) * 10) % 11 % 10;
    const check2 = (calc(11) * 10) % 11 % 10;

    return check1 === digits[9] && check2 === digits[10];
  }

  validateCPFFormat(cpf: string) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return cpfRegex.test(cpf)
  }

  validate(input: any): boolean {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!this.validateCPFFormat(input)) return false
    if (!this.validateDigits(input)) return false
    return true
  }
}