import { CPFValidator } from "@/infra/validators/cpf-validator";

describe('CPFValidator', () => {
  it('should return true for a valid CPF', () => {
    const validator = new CPFValidator();
    expect(validator.validate('123.456.789-09')).toBe(true); // Exemplo fictício
  });

  it('should return false for an improperly formatted CPF', () => {
    const validator = new CPFValidator();
    expect(validator.validate('12345678909')).toBe(false); // Sem pontos e traço
  });
});