import { EmailValidator } from '../../../src/application/check-email'

describe('EmailValidator', () => {
  // Test for regex-based validation
  it('should validate a correct email using regex', () => {
    const validEmail = 'test@example.com'
    const result = EmailValidator.validateWithRegex(validEmail)
    expect(result).toBe(true)
  })

  it('should invalidate an incorrect email using regex', () => {
    const invalidEmail = 'invalid-email'
    const result = EmailValidator.validateWithRegex(invalidEmail)
    expect(result).toBe(false)
  })

  it('should invalidate an email with missing domain using regex', () => {
    const invalidEmail = 'user@'
    const result = EmailValidator.validateWithRegex(invalidEmail)
    expect(result).toBe(false)
  })

  it('should invalidate an email with missing "@" symbol using regex', () => {
    const invalidEmail = 'userexample.com'
    const result = EmailValidator.validateWithRegex(invalidEmail)
    expect(result).toBe(false)
  })

  // Test for class-validator-based validation
  it('should validate a correct email using class-validator', async () => {
    const validEmail = 'test@example.com'
    const validatorInstance = new EmailValidator(validEmail)
    const result = await validatorInstance.validateWithClassValidator()
    expect(result).toBe(true)
  })

  it('should invalidate an incorrect email using class-validator', async () => {
    const invalidEmail = 'invalid-email'
    const validatorInstance = new EmailValidator(invalidEmail)
    const result = await validatorInstance.validateWithClassValidator()
    expect(result).toBe(false)
  })

  it('should invalidate an email with missing domain using class-validator', async () => {
    const invalidEmail = 'user@'
    const validatorInstance = new EmailValidator(invalidEmail)
    const result = await validatorInstance.validateWithClassValidator()
    expect(result).toBe(false)
  })

  it('should invalidate an email with missing "@" symbol using class-validator', async () => {
    const invalidEmail = 'userexample.com'
    const validatorInstance = new EmailValidator(invalidEmail)
    const result = await validatorInstance.validateWithClassValidator()
    expect(result).toBe(false)
  })
})
