import { CPFValidator } from "@/infra/validators/cpf-validator";

describe('CPFValidator', () => {
  it('should return true for a valid CPF', () => {
    const validator = new CPFValidator();
    expect(validator.validate('123.456.789-09')).toBe(true);
  });

  it('should return false for an improperly formatted CPF', () => {
    const validator = new CPFValidator();
    expect(validator.validate('12345678909')).toBe(false);
  });

  it('should return false for an invalid CPF with incorrect check digits', () => {
    const validator = new CPFValidator();
    expect(validator.validate('529.982.247-21')).toBe(false);
  });

  it('should return false if value received is not a string', () => {
    const validator = new CPFValidator();
    expect(validator.validate(null)).toBe(false);
  });
});